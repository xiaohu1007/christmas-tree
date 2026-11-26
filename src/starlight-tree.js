import {bindBurst} from './burst.js'
// ============ Starlight Xmas Tree · A 版：星光画出一棵圣诞树 ============
// https://github.com/ShmilyXI/starlight-xmas-tree  (MIT)
// 依赖 three（>=0.160）。用法见 README。
// 时间线（秒）：
//   0 ~ 0.9     「关灯」：页面慢慢暗成纯黑；底下亮起一粒星光
//   1.4 ~ 7.8   星光束从底部螺旋上升，画出圣诞树的轮廓
//   8.2 ~ 12.7  星光从树顶螺旋下来，把里面那棵树的边缘一圈圈照亮
//   12.9 ~ 14.4 星光从树干中间直冲上去，经过哪一层哪一层的彩灯就亮
//   14.4        到顶变成星星，炸开一圈光；下雪，出字，然后底部出「进入」按钮
//   之后一直停在这里给人慢慢看：单指拖动转、双指（或滚轮）放大缩小，不动时树自己慢慢转。
//   点「进入」：星星的光漫开铺满屏幕，变成页面底色（之后由调用方收尾，demo 里是毛玻璃散开）。
//   右下角「跳过」：直接跳到开灯那一段（树已经画好、照亮），不会直接退出。
// 画布是黑底，用 CSS 的 mix-blend-mode: screen 叠在关灯那层黑底上（关灯过程中黑的地方等于透明，亮的地方往上加光）。
// 注意：shader 里 pow 的底数一定要 clamp 到 0~1，出一个 NaN 像素就会被泛光糊成一大片黑（之前一帧帧黑闪就是这个）。
//
// 另外导出 startMiniTree：小水晶球，里面是同一棵树开好灯的样子（同一套造型和着色器，点数少一些）。
import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export const T = { B0: 1.4, B1: 7.8, C0: 8.2, C1: 12.7, D0: 12.9, D1: 14.4, TEXT: 15.2, ENTER: 16.0 }
const FLOOD_LEN = 1.4 // 点「进入」后光漫满屏幕要多久
const SKIP_TO = T.D0 - 0.2 // 「跳过」和从小水晶球点进来，都从开灯前一点开始

// ================= 树的形状 =================
export const H = 10 // 树顶高度
const Y0 = 0.9 // 树叶从这里开始，下面是树干
const RMAX = 4.1
const TIERS = 5
export const STAR_Y = H + 0.45
export const clamp01 = (x) => Math.min(1, Math.max(0, x))
export const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t) }
const easeInOut = (x) => 0.5 - 0.5 * Math.cos(Math.PI * clamp01(x))
export const lerp = (a, b, t) => a + (b - a) * t

// 一层一层的塔形轮廓：每层底下最宽，往上收，到下一层又张开
export function radiusAt(y) {
  const s = clamp01((y - Y0) / (H - Y0))
  const env = RMAX * Math.pow(1 - s, 0.92)
  const f = (s * TIERS) % 1
  const narrow = f < 0.8 ? Math.pow(f / 0.8, 0.85) : 1 - smooth(0.8, 1, f)
  return env * (1 - 0.3 * narrow)
}
function helix(s, turns, rScale, out) {
  const y = Y0 + s * (H - Y0)
  const th = s * turns * Math.PI * 2
  const r = radiusAt(y) * rScale
  return out.set(r * Math.cos(th), y, r * Math.sin(th))
}

// 点精灵通用片元：中间实、四周柔
export const softFrag = /* glsl */`
  varying vec3 vCol; varying float vB;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;
    float a = exp(-d * d * 4.0) + 0.6 * exp(-d * d * 22.0);
    gl_FragColor = vec4(vCol * vB * a, 1.0);
  }`
export const additive = { transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }
const passVert = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`

// 后期：先软压过曝 → 泛光 → 转 sRGB（→ 大画面再压黑点）
export function makeComposer(renderer, scene, camera, w, h, [strength, radius, threshold], blackPoint) {
  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  // 先把过曝的地方软压一下再做泛光，不然特别亮的一点会被泛光糊成一个方块
  composer.addPass(new ShaderPass({
    uniforms: { tDiffuse: { value: null } },
    vertexShader: passVert,
    fragmentShader: `uniform sampler2D tDiffuse; varying vec2 vUv;
      void main(){ vec3 c = texture2D(tDiffuse, vUv).rgb;
        if (!(c.r >= 0.0 && c.g >= 0.0 && c.b >= 0.0) || any(isinf(c))) c = vec3(0.0); // 兜底：坏点直接当黑，别让泛光扩散
        c = min(c, vec3(64.0)); vec3 e = max(c - 1.0, 0.0); gl_FragColor = vec4(min(c, 1.0) + e / (1.0 + e) * 0.6, 1.0); }`,
  }))
  const bloom = new UnrealBloomPass(new THREE.Vector2(w, h), strength, radius, threshold)
  composer.addPass(bloom)
  composer.addPass(new OutputPass())
  if (blackPoint) {
    // 画布是「滤色」叠在下面的：任何不纯黑的像素都会把下面提亮，整屏就白蒙蒙的。所以把很暗的部分压成纯黑。
    composer.addPass(new ShaderPass({
      uniforms: { tDiffuse: { value: null } },
      vertexShader: passVert,
      fragmentShader: `uniform sampler2D tDiffuse; varying vec2 vUv;
        void main(){ vec3 c = texture2D(tDiffuse, vUv).rgb; gl_FragColor = vec4(max(c - ${blackPoint.toFixed(3)}, 0.0) / ${(1 - blackPoint).toFixed(3)}, 1.0); }`,
    }))
  }
  return { composer, bloom }
}

// ================= 1. 星光画出的轮廓线 =================
const TURNS_B = 8
export function buildTrail(uPx, step) {
  // 先密密地采样，按弧长均匀取点，这样星光走得匀速、线也一样粗细
  const fine = 24000, P = new THREE.Vector3(), Q = new THREE.Vector3()
  const cum = new Float32Array(fine + 1)
  helix(0, TURNS_B, 1.04, Q)
  for (let i = 1; i <= fine; i++) {
    helix(i / fine, TURNS_B, 1.04, P)
    cum[i] = cum[i - 1] + P.distanceTo(Q)
    Q.copy(P)
  }
  const total = cum[fine]
  const n = Math.round(total / step)
  const pos = new Float32Array(n * 3), u = new Float32Array(n), rnd = new Float32Array(n)
  let j = 0
  for (let i = 0; i < n; i++) {
    const L = (i / (n - 1)) * total
    while (j < fine && cum[j + 1] < L) j++
    const f = (L - cum[j]) / Math.max(1e-6, cum[j + 1] - cum[j])
    helix((j + f) / fine, TURNS_B, 1.04, P)
    pos.set([P.x, P.y, P.z], i * 3)
    u[i] = i / (n - 1)
    rnd[i] = Math.random()
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  g.setAttribute('aU', new THREE.BufferAttribute(u, 1))
  g.setAttribute('aRand', new THREE.BufferAttribute(rnd, 1))
  const m = new THREE.ShaderMaterial({
    uniforms: { uPx, uTime: { value: 0 }, uProg: { value: 0 }, uGain: { value: 0.3 }, uGlint: { value: 0 }, uSize: { value: 1 }, uFade: { value: 1 } },
    vertexShader: /* glsl */`
      attribute float aU, aRand; uniform float uPx, uTime, uProg, uGain, uGlint, uSize, uFade;
      varying vec3 vCol; varying float vB;
      void main() {
        float vis = step(aU, uProg) * step(0.0001, uProg); // 还没开始画时第一个点也别亮
        float head = exp(-max(uProg - aU, 0.0) * 90.0) * vis;
        float gl = uGlint * exp(-abs(fract(uTime * 0.06) - aU) * 260.0);
        vB = uFade * vis * (uGain * (0.7 + 0.3 * sin(uTime * 4.0 + aRand * 60.0)) + head * 0.9 + gl * 1.2);
        vCol = mix(vec3(1.0, 0.72, 0.38), vec3(1.0, 0.95, 0.86), clamp(head + gl, 0.0, 1.0));
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = max(1.0, (0.06 + head * 0.16 + gl * 0.06) * uSize * uPx / -mv.z);
      }`,
    fragmentShader: softFrag, ...additive,
  })
  return { m, pos, n, points: new THREE.Points(g, m) }
}

// ================= 2. 里面的树（被星光一圈圈照亮边缘） =================
const TURNS_C = 5
function buildInner(uPx, n, trunk) {
  const N = n + trunk
  const pos = new Float32Array(N * 3), col = new Float32Array(N * 3), key = new Float32Array(N), size = new Float32Array(N), rnd = new Float32Array(N)
  const green = [[0.015, 0.16, 0.04], [0.03, 0.26, 0.07], [0.06, 0.36, 0.10], [0.02, 0.20, 0.10]]
  for (let i = 0; i < n; i++) {
    let y, r
    do { y = Y0 + Math.random() * (H - Y0); r = radiusAt(y) } while (Math.random() * RMAX > r + 0.25)
    const depth = Math.pow(Math.random(), 2.4) // 大多数贴着外表面，像枝梢
    const rr = r * (1 - 0.6 * depth)
    const th = Math.random() * Math.PI * 2
    const yy = y - (rr / RMAX) * 0.35 * Math.random() // 枝梢往下垂一点
    pos.set([rr * Math.cos(th), yy, rr * Math.sin(th)], i * 3)
    const snowy = Math.random() < 0.05
    const c = snowy ? [0.7, 0.8, 0.95] : green[(Math.random() * green.length) | 0]
    col.set(c, i * 3)
    size[i] = snowy ? 0.09 : 0.05 + Math.random() * 0.06
    rnd[i] = Math.random()
    // 星光往下扫时经过这个角度、这个高度的时刻
    const s = clamp01((yy - Y0) / (H - Y0))
    let a = th / (Math.PI * 2); a -= Math.floor(a)
    const turn = Math.floor(s * TURNS_C - a)
    key[i] = (turn + a + 0.5) / TURNS_C
  }
  for (let i = n; i < N; i++) { // 树干
    const th = Math.random() * Math.PI * 2, rr = 0.3 + Math.random() * 0.08
    pos.set([rr * Math.cos(th), Math.random() * (Y0 + 0.4), rr * Math.sin(th)], i * 3)
    col.set([0.08, 0.04, 0.02], i * 3)
    size[i] = 0.05; rnd[i] = Math.random(); key[i] = 0.02
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  g.setAttribute('aCol', new THREE.BufferAttribute(col, 3))
  g.setAttribute('aKey', new THREE.BufferAttribute(key, 1))
  g.setAttribute('aSize', new THREE.BufferAttribute(size, 1))
  g.setAttribute('aRand', new THREE.BufferAttribute(rnd, 1))
  const m = new THREE.ShaderMaterial({
    uniforms: { uPx, uTime: { value: 0 }, uSweepK: { value: 2 }, uFlash: { value: 1 }, uFill: { value: 0 }, uLightY: { value: -5 }, uSize: { value: 1 } },
    vertexShader: /* glsl */`
      attribute vec3 aCol; attribute float aKey, aSize, aRand;
      uniform float uPx, uTime, uSweepK, uFlash, uFill, uLightY, uSize;
      varying vec3 vCol; varying float vB;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vec2 radial = normalize(wp.xz + vec2(1e-4));
        vec2 vd = normalize(cameraPosition.xz - wp.xz);
        float facing = dot(radial, vd);
        // 两个单位向量点乘偶尔会因为浮点误差略大于 1，pow 负数 = NaN，泛光会把这一个坏点糊成一大片黑，所以一定要 clamp
        float rim = pow(clamp(1.0 - abs(facing), 0.0, 1.0), 2.2); // 侧面（轮廓边缘）最亮
        float side = facing > 0.0 ? 1.0 : 0.4;            // 背面的暗一些
        float lit = smoothstep(uSweepK - 0.004, uSweepK + 0.004, aKey);
        float flash = lit * exp(-max(aKey - uSweepK, 0.0) * 45.0) * uFlash;
        float warm = smoothstep(wp.y - 0.4, wp.y + 0.4, uLightY) * uFill;
        float tw = 0.8 + 0.2 * sin(uTime * 3.0 + aRand * 50.0);
        vB = (lit * (0.06 + 0.55 * rim) * side + flash * 0.8 + warm * (0.05 + 0.3 * rim) * side) * tw;
        vec3 rimCol = vec3(1.0, 0.86, 0.62);
        vCol = mix(aCol * 1.8, rimCol, clamp(rim * 0.45 + flash, 0.0, 1.0));
        vCol = mix(vCol, vCol * vec3(1.25, 1.05, 0.7), warm);
        vec4 mv = viewMatrix * wp;
        gl_Position = projectionMatrix * mv;
        gl_PointSize = max(1.0, aSize * uSize * (1.0 + flash * 0.6) * uPx / -mv.z);
      }`,
    fragmentShader: softFrag, ...additive,
  })
  return { m, points: new THREE.Points(g, m) }
}
function sweepPoint(K, out) { return helix(clamp01(K), TURNS_C, 1.14, out) }

// ================= 3. 彩灯 =================
// onAt(y)：这颗灯在什么时候亮（默认是 A 版：中间那道光往上升到这一层时）
export function buildBulbs(uPx, onAt = (y) => T.D0 + (T.D1 - T.D0) * clamp01((y - 0.2) / (H + 0.2)), album) {
  const list = []
  const warmWhite = [1.0, 0.78, 0.45]
  const palette = [[1.0, 0.16, 0.20], [1.0, 0.72, 0.15], [0.25, 0.65, 1.0], [1.0, 0.35, 0.65], [0.45, 1.0, 0.55], [1.0, 0.78, 0.45]]
  if(album && album.colors.lights.join()!=='#ff454f,#ffb726,#64adff,#ff6ca8'){
    palette.splice(0,palette.length,...album.colors.lights.map(hex=>new THREE.Color(hex).toArray()));
  }
  // 两串暖白小灯沿螺旋绕着树
  for (let g = 0; g < 2; g++) {
    const m = album ? Math.floor(album.counts.lights*.31) : 120
    for (let k = 0; k < m; k++) {
      const s = 0.02 + (k / m) * 0.95
      const th = s * 3.6 * Math.PI * 2 + g * Math.PI
      const y = Y0 + s * (H - Y0)
      const r = radiusAt(y) * 0.98
      list.push({ p: [r * Math.cos(th), y - 0.1 * Math.abs(Math.sin(th * 3)), r * Math.sin(th)], c: warmWhite, s: 0.13 })
    }
  }
  // 大一点的彩色灯散在表面
  for (let k = 0; k < (album ? album.counts.lights-2*Math.floor(album.counts.lights*.31) : 150); k++) {
    let y, r
    do { y = Y0 + 0.2 + Math.random() * (H - Y0 - 0.8); r = radiusAt(y) } while (Math.random() * RMAX > r)
    const th = Math.random() * Math.PI * 2
    const rr = r * (0.9 + Math.random() * 0.08)
    list.push({ p: [rr * Math.cos(th), y, rr * Math.sin(th)], c: palette[(Math.random() * palette.length) | 0], s: 0.17 + Math.random() * 0.08 })
  }
  const n = list.length
  const pos = new Float32Array(n * 3), col = new Float32Array(n * 3), on = new Float32Array(n), size = new Float32Array(n), rnd = new Float32Array(n)
  list.forEach((b, i) => {
    pos.set(b.p, i * 3); col.set(b.c, i * 3); size[i] = b.s; rnd[i] = Math.random()
    // 中间那道光升到这一层的时刻，这颗灯就亮
    on[i] = onAt(b.p[1]) + Math.random() * 0.05
  })
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  g.setAttribute('aCol', new THREE.BufferAttribute(col, 3))
  g.setAttribute('aOn', new THREE.BufferAttribute(on, 1))
  g.setAttribute('aSize', new THREE.BufferAttribute(size, 1))
  g.setAttribute('aRand', new THREE.BufferAttribute(rnd, 1))
  const m = new THREE.ShaderMaterial({
    uniforms: { uPx, uTime: { value: 0 }, uSize: { value: 1 }, uFade: { value: 1 } },
    vertexShader: /* glsl */`
      attribute vec3 aCol; attribute float aOn, aSize, aRand; uniform float uPx, uTime, uSize, uFade;
      varying vec3 vCol; varying float vB;
      void main() {
        float since = uTime - aOn;
        float on = smoothstep(0.0, 0.06, since);
        float pop = on * exp(-since * 2.5);
        float tw = 0.7 + 0.3 * sin(uTime * (1.2 + aRand * 2.5) + aRand * 30.0);
        vB = uFade * on * (1.4 * tw + pop * 2.0);
        vCol = mix(aCol, vec3(1.0), 0.18 + pop * 0.5);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = max(1.0, aSize * uSize * (1.0 + pop * 0.8) * uPx / -mv.z);
      }`,
    fragmentShader: softFrag, ...additive,
  })
  return { m, points: new THREE.Points(g, m) }
}

// ================= 4. 贴图：光晕、星星、十字闪光、冲击波圈 =================
function canvasTex(size, draw) {
  const c = document.createElement('canvas'); c.width = c.height = size
  draw(c.getContext('2d'), size)
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace
  return t
}
export function makeTextures() {
  const glow = canvasTex(128, (x, s) => {
    const g = x.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2)
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.12, 'rgba(255,246,225,0.95)')
    g.addColorStop(0.35, 'rgba(255,196,120,0.28)'); g.addColorStop(1, 'rgba(255,150,60,0)')
    x.fillStyle = g; x.fillRect(0, 0, s, s)
  })
  const star = canvasTex(256, (x, s) => {
    const c = s / 2
    x.translate(c, c)
    x.beginPath()
    for (let i = 0; i < 10; i++) {
      const r = i % 2 ? s * 0.13 : s * 0.33, a = -Math.PI / 2 + (i * Math.PI) / 5
      x.lineTo(Math.cos(a) * r, Math.sin(a) * r)
    }
    x.closePath()
    const g = x.createRadialGradient(0, 0, 0, 0, 0, s * 0.33)
    g.addColorStop(0, '#fffdf2'); g.addColorStop(0.5, '#ffe28a'); g.addColorStop(1, '#ffb53c')
    x.shadowColor = 'rgba(255,190,80,0.9)'; x.shadowBlur = s * 0.12
    x.fillStyle = g; x.fill(); x.fill()
  })
  const flare = canvasTex(256, (x, s) => {
    const c = s / 2
    const spike = (ang, len, w, a) => {
      x.save(); x.translate(c, c); x.rotate(ang)
      const g = x.createLinearGradient(-len, 0, len, 0)
      g.addColorStop(0, 'rgba(255,220,160,0)'); g.addColorStop(0.5, `rgba(255,248,230,${a})`); g.addColorStop(1, 'rgba(255,220,160,0)')
      x.fillStyle = g; x.fillRect(-len, -w / 2, len * 2, w); x.restore()
    }
    spike(0, c, 3, 1); spike(Math.PI / 2, c, 3, 1); spike(Math.PI / 4, c * 0.55, 2, 0.5); spike(-Math.PI / 4, c * 0.55, 2, 0.5)
  })
  const ring = canvasTex(256, (x, s) => {
    const g = x.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2)
    g.addColorStop(0.0, 'rgba(255,220,160,0)'); g.addColorStop(0.72, 'rgba(255,220,160,0)')
    g.addColorStop(0.86, 'rgba(255,236,200,0.9)'); g.addColorStop(1, 'rgba(255,200,120,0)')
    x.fillStyle = g; x.fillRect(0, 0, s, s)
  })
  return { glow, star, flare, ring }
}
export const sprite = (map, color = 0xffffff) => {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map, color, ...additive }))
  s.material.opacity = 0
  return s
}

// ================= 5. 下雪 =================
export function buildSnow(uPx, n, [w, h, d], size = 1) {
  const pos = new Float32Array(n * 3), rnd = new Float32Array(n)
  for (let i = 0; i < n; i++) {
    pos.set([(Math.random() - 0.5) * w, Math.random() * h, (Math.random() - 0.5) * d], i * 3)
    rnd[i] = Math.random()
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  g.setAttribute('aRand', new THREE.BufferAttribute(rnd, 1))
  const m = new THREE.ShaderMaterial({
    uniforms: { uPx, uTime: { value: 0 }, uSnow: { value: 0 } },
    vertexShader: /* glsl */`
      attribute float aRand; uniform float uPx, uTime, uSnow; varying vec3 vCol; varying float vB;
      void main() {
        vec3 p = position;

        p.x += sin(uTime * 0.6 + aRand * 30.0) * 0.4;
        vB = uSnow * (0.35 + 0.45 * aRand);
        vCol = vec3(0.85, 0.9, 1.0);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        // Wrap each depth layer just beyond the viewport, including after zoom or resize.
        if (mv.z >= -0.1) { gl_Position = vec4(2.,2.,2.,1.); gl_PointSize = 1.; return; }
        float span = -2.04 * mv.z / projectionMatrix[1][1];
        float center = -mv.z * projectionMatrix[2][1] / projectionMatrix[1][1];
        mv.y = center + mod(position.y / ${h.toFixed(1)} * span - uTime * (0.35 + aRand * 0.5), span) - span * 0.5;
        gl_Position = projectionMatrix * mv;
        gl_PointSize = max(1.0, (0.05 + aRand * 0.08) * ${size.toFixed(2)} * uPx / -mv.z);
      }`,
    fragmentShader: softFrag, ...additive,
  })
  const p = new THREE.Points(g, m)
  p.frustumCulled = false
  return { m, points: p }
}

export function disposeAll(scene, renderer, extra = []) {
  scene.traverse((o) => {
    o.geometry?.dispose()
    const m = o.material
    if (m) { m.map?.dispose(); m.dispose() }
  })
  for (const x of extra) x?.dispose?.()
  renderer.dispose()
  renderer.forceContextLoss() // iPhone 上 WebGL 上下文数量有限，用完马上还回去
  renderer.domElement.remove()
}

// =====================================================================
// 大画面：root 铺满屏幕的容器；ui: { glass, msg, hint, flood, skip, enter }；cream: 结尾要变成的底色 [r,g,b]
// start: 'full' 从头播；'view' 从开灯前一点开始（从小水晶球点进来看）。
// 返回 { skip, enter, dispose }。点「进入」后光铺满屏幕时调用 onDone。WebGL 用不了会直接抛错，外面接住就跳过。
export function startXmasTree(root, { ui, cream, onDone, album, start = 'full' }) {
  const MOBILE = Math.min(innerWidth, innerHeight) < 700

  // ================= 基础 =================
  const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' })
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2)) // 手机上 1.75 会被放大显得糊，统一按 2 渲染
  renderer.setSize(innerWidth, innerHeight)
  renderer.setClearColor(0x000000, 1)
  root.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(38, innerWidth / innerHeight, 0.1, 200)
  let gestureSpeed=0, velocity=0, cardsSpread=false;
  scene.scale.set(album.tree.radius/8,album.tree.height/22,album.tree.radius/8);
  const tree = new THREE.Group() // 树和星光都放在这里，整体慢慢转
  scene.add(tree)

  // 泛光只给最亮的点（星光头、星星、彩灯芯）加一圈紧贴的光：门槛 0.85、半径 0.05。
  // 半径一大，泛光会在缩小 32 倍的图上糊开再放大，细线旁边出现一大块方方的灰雾。
  const { composer, bloom } = makeComposer(renderer, scene, camera, innerWidth, innerHeight, [0.6, 0.05, 0.85], 0.06)

  // 手势：单指拖动转（左右随便转，上下只给一点角度），双指 / 滚轮放大缩小，不能平移
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enablePan = false
  controls.enableDamping = true
  controls.dampingFactor = 0.08
  controls.rotateSpeed = 0.6
  controls.zoomSpeed = 0.8
  controls.minPolarAngle = THREE.MathUtils.degToRad(48)
  controls.maxPolarAngle = THREE.MathUtils.degToRad(96)
  controls.target.set(0, 4.4, 0)
  let touching = false, touched = false, lastTouch = -99
  controls.addEventListener('start', () => { touching = true; touched = true })
  controls.addEventListener('end', () => { touching = false; lastTouch = age })

  const uPx = { value: 1 } // 世界单位 -> 像素，点的大小用
  let baseDist = 0
  const off = new THREE.Vector3()
  function fit() {
    const w = innerWidth, h = innerHeight
    if (!w || !h) return // 页面被藏起来时尺寸是 0，别把渲染目标设成 0
    const full = Boolean(document.fullscreenElement || document.webkitFullscreenElement || matchMedia("(display-mode: fullscreen)").matches)
    camera.aspect = w / h
    const tv = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))
    const needV = (full ? 13.4 * scene.scale.y : 15.5) / 2 / tv
    const needH = (2 * RMAX + 1.8) / 2 / (tv * camera.aspect) * (full ? scene.scale.x : 1)
    const dist = Math.max(needV, needH)
    off.subVectors(camera.position, controls.target)
    controls.target.y = full ? STAR_Y * scene.scale.y / 2 : 4.4
    if (!baseDist) camera.position.set(0, controls.target.y + 0.6 + dist * 0.1, dist)
    else { // 转屏等尺寸变化：保持用户转到的角度和放大倍数
      off.multiplyScalar(dist / baseDist)
      camera.position.copy(controls.target).add(off)
    }
    baseDist = dist
    controls.minDistance = dist * 0.42
    controls.maxDistance = dist * 1.3
    controls.update()
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
    composer.setSize(w, h)
    composer.setPixelRatio(renderer.getPixelRatio())
    uPx.value = (h * renderer.getPixelRatio()) / (2 * tv)
    bgMat.uniforms.uAspect.value = camera.aspect
  }

  // ================= 背景 =================
  const bgMat = new THREE.ShaderMaterial({
    uniforms: { uGlow: { value: 0 }, uAspect: { value: 1 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.9999, 1.0); }`,
    fragmentShader: /* glsl */`
      uniform float uGlow, uAspect; varying vec2 vUv;
      void main() {
        // 底是纯黑；只在树后面留很淡的一点暖光（大面积的淡光在手机上会显得整屏发白）
        vec2 p = vUv - vec2(0.5, 0.5); p.x *= uAspect;
        float g = exp(-dot(p, p) * 4.5);
        gl_FragColor = vec4(vec3(0.007, 0.004, 0.001) * g * uGlow, 1.0);
      }`,
    depthWrite: false, depthTest: false,
  })
  const bg = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), bgMat)
  bg.frustumCulled = false
  bg.renderOrder = -10
  scene.add(bg)

  // 地面：开灯后树底下有一片暖光
  const groundMat = new THREE.ShaderMaterial({
    uniforms: { uGlow: bgMat.uniforms.uGlow },
    vertexShader: `varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */`
      uniform float uGlow; varying vec3 vW;
      void main() {
        float r = length(vW.xz);
        float a = smoothstep(20.0, 3.0, r);
        gl_FragColor = vec4(vec3(0.05, 0.028, 0.01) * exp(-r * r / 12.0) * uGlow, a);
      }`,
    transparent: true, depthWrite: false,
  })
  const ground = new THREE.Mesh(new THREE.CircleGeometry(20, 64), groundMat)
  ground.rotation.x = -Math.PI / 2
  ground.renderOrder = -5
  scene.add(ground)

  // 远处的星空（围成一圈，转到哪边都有星星）
  const sky = (() => {
    const n = 900, pos = new Float32Array(n * 3), rnd = new Float32Array(n)
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, r = 45 + Math.random() * 30
      pos.set([Math.cos(a) * r, -4 + Math.random() * 60, Math.sin(a) * r], i * 3)
      rnd[i] = Math.random()
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    g.setAttribute('aRand', new THREE.BufferAttribute(rnd, 1))
    const m = new THREE.ShaderMaterial({
      uniforms: { uPx, uTime: { value: 0 }, uSky: { value: 0 } },
      vertexShader: /* glsl */`
        attribute float aRand; uniform float uPx, uTime, uSky; varying vec3 vCol; varying float vB;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = max(1.0, (0.10 + aRand * 0.16) * uPx / -mv.z);
          vB = uSky * (0.25 + 0.5 * aRand) * (0.6 + 0.4 * sin(uTime * (0.8 + aRand * 2.0) + aRand * 40.0));
          vCol = mix(vec3(0.75, 0.82, 1.0), vec3(1.0, 0.9, 0.75), step(0.8, aRand));
        }`,
      fragmentShader: softFrag, ...additive,
    })
    const p = new THREE.Points(g, m)
    p.frustumCulled = false
    scene.add(p)
    return m
  })()

  const trail = buildTrail(uPx, 0.016)
  const inner = buildInner(uPx, album.counts.foliage, 700)
  if(album.colors.emerald!=='#388b74'){
    const tint=new THREE.Color(album.colors.emerald);
    const colors=inner.points.geometry.getAttribute('aCol');
    for(let i=0;i<colors.count;i++){
      const l=Math.max(colors.getX(i),colors.getY(i),colors.getZ(i));
      colors.setXYZ(i,tint.r*l*3,tint.g*l*3,tint.b*l*3);
    }
  }
  const bulbs = buildBulbs(uPx, undefined, album)
  const scatter = bindBurst([[inner,'position'],[trail,'position'],[bulbs,'position']])
  tree.add(trail.points, inner.points, bulbs.points)
  function trailPoint(prog, out) {
    const f = clamp01(prog) * (trail.n - 1), i = Math.floor(f), k = Math.min(i + 1, trail.n - 1), t = f - i, p = trail.pos
    return out.set(lerp(p[i * 3], p[k * 3], t), lerp(p[i * 3 + 1], p[k * 3 + 1], t), lerp(p[i * 3 + 2], p[k * 3 + 2], t))
  }

  // 星光头、顶上的星星
  const tex = makeTextures()
  const headHalo = sprite(tex.glow), headCore = sprite(tex.glow), headFlare = sprite(tex.flare)
  tree.add(headHalo, headCore, headFlare)
  const starHalo = sprite(tex.glow, 0xffd08a), star = sprite(tex.star), starFlare = sprite(tex.flare), ring = sprite(tex.ring)
  for (const s of [starHalo, star, starFlare, ring]) { s.position.set(0, STAR_Y, 0); tree.add(s) }

  // 星光头后面掉落的小火花
  const sparks = (() => {
    const n = 700
    const pos = new Float32Array(n * 3), life = new Float32Array(n), size = new Float32Array(n)
    const vel = new Float32Array(n * 3), age = new Float32Array(n).fill(1e9), max = new Float32Array(n).fill(1)
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    g.setAttribute('aLife', new THREE.BufferAttribute(life, 1))
    g.setAttribute('aSize', new THREE.BufferAttribute(size, 1))
    const m = new THREE.ShaderMaterial({
      uniforms: { uPx },
      vertexShader: /* glsl */`
        attribute float aLife, aSize; uniform float uPx; varying vec3 vCol; varying float vB;
        void main() {
          vB = aLife * 1.6;
          vCol = mix(vec3(1.0, 0.55, 0.2), vec3(1.0, 0.95, 0.8), aLife);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = max(1.0, aSize * (0.4 + 0.6 * aLife) * uPx / -mv.z);
        }`,
      fragmentShader: softFrag, ...additive,
    })
    const pts = new THREE.Points(g, m)
    pts.frustumCulled = false
    tree.add(pts)
    let next = 0, carry = 0
    return {
      emit(p, rate, dt, spread = 0.5) {
        carry += rate * dt
        while (carry >= 1) {
          carry--
          const i = next; next = (next + 1) % n
          pos[i * 3] = p.x; pos[i * 3 + 1] = p.y; pos[i * 3 + 2] = p.z
          vel[i * 3] = (Math.random() - 0.5) * spread; vel[i * 3 + 1] = (Math.random() - 0.3) * spread; vel[i * 3 + 2] = (Math.random() - 0.5) * spread
          age[i] = 0; max[i] = 0.5 + Math.random() * 0.9; size[i] = 0.05 + Math.random() * 0.09
        }
      },
      burst(p, count, speed) {
        for (let c = 0; c < count; c++) {
          const i = next; next = (next + 1) % n
          const v = new THREE.Vector3().randomDirection().multiplyScalar(speed * (0.4 + Math.random() * 0.6))
          pos[i * 3] = p.x; pos[i * 3 + 1] = p.y; pos[i * 3 + 2] = p.z
          vel[i * 3] = v.x; vel[i * 3 + 1] = v.y; vel[i * 3 + 2] = v.z
          age[i] = 0; max[i] = 1.0 + Math.random() * 1.2; size[i] = 0.06 + Math.random() * 0.1
        }
      },
      update(dt) {
        for (let i = 0; i < n; i++) {
          age[i] += dt
          const l = 1 - age[i] / max[i]
          if (l <= 0) { life[i] = 0; continue }
          life[i] = l
          vel[i * 3 + 1] -= 0.9 * dt
          const drag = Math.exp(-1.6 * dt)
          vel[i * 3] *= drag; vel[i * 3 + 1] *= drag; vel[i * 3 + 2] *= drag
          pos[i * 3] += vel[i * 3] * dt; pos[i * 3 + 1] += vel[i * 3 + 1] * dt; pos[i * 3 + 2] += vel[i * 3 + 2] * dt
        }
        g.attributes.position.needsUpdate = true; g.attributes.aLife.needsUpdate = true; g.attributes.aSize.needsUpdate = true
      },
    }
  })()

  const snow = buildSnow(uPx, album.counts.elements, [30, 18, 18])
  scene.add(snow.points)

  // ================= 动画 =================
  const head = new THREE.Vector3(), tmp = new THREE.Vector3(), starWorld = new THREE.Vector3(0, STAR_Y, 0), trunkBase = new THREE.Vector3(0, 0.2, 0)
  let t = start === 'view' ? SKIP_TO : 0 // 剧情时间（跳过会往前跳）
  let age = 0 // 真实经过的时间（关灯淡入、手势空闲用）
  let floodAt = null // 点了「进入」的时刻（剧情时间）
  let jumped = start === 'view'
  let rotY = 0.4 + 0.16 * t, spin = 1
  let last = performance.now(), burstDone = false, raf = 0, done = false, disposed = false, paused = false

  function setHead(op, haloScale) {
    headHalo.position.copy(head); headCore.position.copy(head); headFlare.position.copy(head)
    headHalo.material.opacity = op * 0.45; headCore.material.opacity = op * 0.8; headFlare.material.opacity = op * 0.6
    headHalo.scale.setScalar(haloScale); headCore.scale.setScalar(haloScale * 0.32); headFlare.scale.setScalar(haloScale * 1.5)
  }

  // 底：开头像关灯一样，页面在 0.9 秒里慢慢暗成纯黑。
  // （试过深色毛玻璃透出页面，但 iPhone 上发光画布叠在毛玻璃上会有一层雾，所以用纯黑。）
  function drawGlass() {
    ui.glass.style.backgroundColor = `rgba(0, 0, 0, ${smooth(0, 0.9, age).toFixed(3)})`
  }

  // 结尾的光：从星星在屏幕上的位置往外漫，先是暖金色，铺满时变成页面底色
  const warm = [255, 222, 170]
  function drawFlood(p) {
    if (p <= 0) { ui.flood.style.background = 'none'; return }
    tmp.copy(starWorld).project(camera)
    const w = innerWidth, h = innerHeight
    // 用户可能把星星转到 / 放大到屏幕外面去了，光从离它最近的屏幕边上漫进来
    const x = Math.min(w, Math.max(0, (tmp.x * 0.5 + 0.5) * w)), y = Math.min(h, Math.max(0, (-tmp.y * 0.5 + 0.5) * h))
    const far = Math.hypot(Math.max(x, w - x), Math.max(y, h - y))
    const e = p * p * (3 - 2 * p)
    const r = 30 + e * far * 2.4 // 到最后实心部分（0.45r）要盖过最远的角
    const k = smooth(0.15, 0.85, p)
    const c = warm.map((v, i) => Math.round(lerp(v, cream[i], k))).join(',')
    ui.flood.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(${c},1) 0, rgba(${c},${lerp(0.85, 1, e)}) ${r * 0.45}px, rgba(${c},0) ${r}px)`
    ui.flood.style.opacity = String(Math.min(1, 0.4 + p * 1.2))
  }

  function update(dt) {
    // 自己慢慢转；用手拖的时候停下，松手两秒后再慢慢转起来
    scatter.value += (Number(cardsSpread)-scatter.value)*(1-Math.exp(-dt*(cardsSpread ? 6.4 : 3.4)))
    const want = touching || (!cardsSpread && age - lastTouch < 2) ? 0 : 1
    spin += (want - spin) * Math.min(1, dt * 1.5)
    rotY += (.16 + .08*scatter.value + 1.55*scatter.value*(1-scatter.value))*spin*dt
    velocity += (gestureSpeed-velocity)*(1-Math.exp(-dt*9));
    if (window.treeAimActive) velocity=0;
    rotY += velocity*dt;
    tree.rotation.y = rotY

    bgMat.uniforms.uGlow.value = 0.25 * smooth(T.C0, T.C1, t) + 0.9 * smooth(T.D0, T.D1 + 1.2, t)
    sky.uniforms.uSky.value = smooth(2, 10, t)

    // 1. 轮廓线
    trail.m.uniforms.uProg.value = t < T.B0 ? 0 : easeInOut((t - T.B0) / (T.B1 - T.B0))
    trail.m.uniforms.uGain.value = lerp(0.3, 0.16, smooth(T.D0, T.D1, t))
    trail.m.uniforms.uGlint.value = smooth(T.TEXT, T.TEXT + 1, t)

    // 2. 里面的树
    let K = 2
    if (t >= T.C0) K = lerp(1.03, -0.03, easeInOut((t - T.C0) / (T.C1 - T.C0)))
    const im = inner.m.uniforms
    im.uSweepK.value = K
    im.uFlash.value = 1 - smooth(T.C1, T.C1 + 1, t)
    im.uFill.value = smooth(T.D0, T.D1, t)

    // 星光头走的路线
    let op = 1, hs = 1.3 + 0.15 * Math.sin(t * 9), rate = 150, liftY = -5
    if (t < T.B0) { trailPoint(0, head); op = smooth(0.6, T.B0, t); rate = 0 }
    else if (t < T.B1) { trailPoint(trail.m.uniforms.uProg.value, head) }
    else if (t < T.C0) { trailPoint(1, head); hs *= 1 + 0.3 * smooth(T.B1, T.C0, t); rate = 60 }
    else if (t < T.C1) { sweepPoint(K, head) }
    else if (t < T.D0) {
      sweepPoint(0, tmp); head.lerpVectors(tmp, trunkBase, easeInOut((t - T.C1) / (T.D0 - T.C1))); rate = 80
      if (jumped) op = smooth(SKIP_TO, T.D0, t) // 跳过来的：星光在树干底下淡入，不要凭空出现
    }
    else if (t < T.D1) {
      const p = (t - T.D0) / (T.D1 - T.D0)
      head.set(0, 0.2 + p * (H + 0.2), 0); liftY = head.y; rate = 260; hs = 1.6
    } else { head.set(0, STAR_Y, 0); op = 1 - smooth(T.D1, T.D1 + 0.15, t); rate = 0; liftY = 99 }
    im.uLightY.value = liftY
    setHead(op, hs)
    if (rate > 0 && dt > 0) sparks.emit(head, rate, dt, t > T.D0 ? 0.9 : 0.5)

    // 3. 彩灯 / 4. 星星（结尾漫光时星星的光晕跟着放大）
    for (const m of [trail.m, inner.m, bulbs.m, sky, snow.m]) m.uniforms.uTime.value = t
    const fp = floodAt == null ? 0 : clamp01((t - floodAt) / FLOOD_LEN)
    for(const light of [star,starHalo,starFlare,ring]) light.position.set(3.5*scatter.value,STAR_Y-.8*scatter.value,-2*scatter.value)
    star.getWorldPosition(starWorld)
    const sp = t - T.D1
    if (sp >= 0) {
      if (!burstDone) { tree.worldToLocal(tmp.copy(starWorld)); sparks.burst(tmp, 260, 4.5); burstDone = true }
      const grow = 1 + 5 * smooth(0, 1, fp)
      const s = 1.5 * (1 - Math.exp(-sp * 7)) * (1 + 0.5 * Math.exp(-sp * 2.5)) * (1 + 0.04 * Math.sin(t * 3))
      star.scale.setScalar(s); star.material.opacity = 1
      starHalo.scale.setScalar((s * 2.2 + 3 * Math.exp(-sp * 3)) * grow); starHalo.material.opacity = 0.4 + 0.08 * Math.sin(t * 2.2)
      starFlare.scale.setScalar(s * 3.4 * Math.sqrt(grow)); starFlare.material.opacity = 0.7 + 0.3 * Math.exp(-sp * 2); starFlare.material.rotation = t * 0.15
      ring.scale.setScalar(1 + sp * 14); ring.material.opacity = Math.max(0, 1 - sp / 1.3)
    } else {
      for (const s of [star, starHalo, starFlare, ring]) s.material.opacity = 0
    }

    snow.m.uniforms.uSnow.value = smooth(T.D1 + 0.3, T.D1 + 3, t)
    const leaving = floodAt != null
    ui.msg.classList.toggle('on', t >= T.TEXT && !leaving)
    ui.skip.classList.toggle('on', age >= 1.2 && t < SKIP_TO - 0.3)
    ui.enter.classList.toggle('on', t >= T.ENTER && !leaving)
    ui.hint.classList.toggle('on', t >= T.ENTER + 0.8 && t < T.ENTER + 7 && !touched && !leaving)
    controls.enabled = !leaving
    drawGlass()
    sparks.update(dt)
    drawFlood(fp)
    if (fp >= 1 && !done) { done = true; onDone?.() }
  }

  function frame(now) {
    if (disposed) return
    // 按帧累加时间：切到后台再回来不会一下跳到结尾
    const dt = Math.min(0.05, Math.max(0, (now - last) / 1000))
    last = now
    tick(paused ? 0 : dt)
    raf = requestAnimationFrame(frame)
  }
  function tick(dt) {
    t += dt
    age += dt
    controls.update()
    update(dt)
    composer.render()
    tree.userData.drawAlbum?.(performance.now())
  }

  const canvas=renderer.domElement
  let tap=null
  const down=e=>{tap=e.isPrimary ? {id:e.pointerId,x:e.clientX,y:e.clientY} : null}
  const cancel=()=>{tap=null}
  const up=e=>{
    if(tap?.id===e.pointerId && Math.hypot(tap.x-e.clientX,tap.y-e.clientY)<5 && t>=T.TEXT && floodAt==null) cardsSpread=!cardsSpread
    tap=null
  }
  canvas.addEventListener('pointerdown',down)
  canvas.addEventListener('pointercancel',cancel)
  canvas.addEventListener('pointerup',up)
  addEventListener('resize', fit)
  document.addEventListener('fullscreenchange', fit)
  fit()
  raf = requestAnimationFrame(frame)

  return {
    // 右下角「跳过」：跳到开灯前一点（轮廓画好、里面照亮），开灯和星星还是会看到
    skip() { if (t < SKIP_TO) { t = SKIP_TO; jumped = true } },
    // 「进入」：星星的光漫开
    enter() { if (floodAt == null) floodAt = Math.max(t, T.D1) },
    dispose() {
      disposed = true
      cancelAnimationFrame(raf)
      removeEventListener('resize', fit)
      document.removeEventListener('fullscreenchange', fit)
      canvas.removeEventListener('pointerdown',down)
      canvas.removeEventListener('pointercancel',cancel)
      canvas.removeEventListener('pointerup',up)
      controls.dispose()
      disposeAll(scene, renderer, [composer, bloom])
    },
    // 调试用：逐帧检查
    albumModel:{tree,camera,lights:bulbs.points.geometry.attributes.position,branches:inner.points.geometry.attributes.position,burstProgress:()=>scatter.value,expand:value=>{cardsSpread=value;},ready:()=>t >= T.TEXT && floodAt == null,scattered:()=>cardsSpread},
    setSpeed(value){gestureSpeed=value;},
    setSpread(value){if(t>=T.TEXT && floodAt==null)cardsSpread=value;},
    _debug: { seek: (s) => { t = s }, step: tick, time: () => t, pause: (v) => { paused = v }, bloom: (o) => Object.assign(bloom, o), camera, controls },
  }
}

// =====================================================================
// 小水晶球：同一棵树开好灯的样子，慢慢转。host 是一个正方形的容器（CSS 给它圆形和玻璃高光）。
// 返回 { pause(bool), dispose() }。不在屏幕里 / 开场在播时外面会叫它暂停，省电。
export function startMiniTree(host, { still = false } = {}) {
  const size = () => Math.max(1, host.clientWidth)
  const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false })
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
  renderer.setSize(size(), size())
  renderer.setClearColor(0x000000, 1)
  host.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  // 底色用一块铺满的面画，不用 setClearColor：清屏色在后期链里会被多转一次 sRGB，深紫会变成发灰的紫。
  // 这里写的是线性值，屏幕上大约顶上 #140b1a、底下 #2a1626（雪地那边稍微亮一点、暖一点）
  const bg = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
    vertexShader: `varying vec2 vUv; void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.9999, 1.0); }`,
    fragmentShader: `varying vec2 vUv; void main(){ gl_FragColor = vec4(mix(vec3(0.023, 0.009, 0.020), vec3(0.0070, 0.0034, 0.0103), smoothstep(0.1, 0.9, vUv.y)), 1.0); }`,
    depthWrite: false, depthTest: false,
  }))
  bg.frustumCulled = false
  bg.renderOrder = -10
  scene.add(bg)
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100)
  camera.position.set(0, 6.8, 23.5)
  camera.lookAt(0, 5.5, 0)
  const tree = new THREE.Group()
  scene.add(tree)
  const { composer, bloom } = makeComposer(renderer, scene, camera, size(), size(), [0.45, 0.05, 0.85], 0) // 小图上泛光半径一大就会糊满整个球

  const uPx = { value: 1 }
  const fit = () => {
    const s = size()
    renderer.setSize(s, s)
    composer.setSize(s, s)
    composer.setPixelRatio(renderer.getPixelRatio())
    uPx.value = (s * renderer.getPixelRatio()) / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)))
  }

  // 小图上点只有一两个像素，点数少一些、个头放大一点，看起来才是一棵实心的树
  const trail = buildTrail(uPx, 0.05)
  const inner = buildInner(uPx, 3200, 160)
  const bulbs = buildBulbs(uPx)
  tree.add(trail.points, inner.points, bulbs.points)
  trail.m.uniforms.uProg.value = 1; trail.m.uniforms.uGain.value = 0.22; trail.m.uniforms.uGlint.value = 1; trail.m.uniforms.uSize.value = 1.6
  const im = inner.m.uniforms
  im.uSweepK.value = -0.03; im.uFlash.value = 0; im.uFill.value = 1; im.uLightY.value = 99; im.uSize.value = 1.9
  bulbs.m.uniforms.uSize.value = 1.5

  const tex = makeTextures()
  const starHalo = sprite(tex.glow, 0xffd08a), star = sprite(tex.star), starFlare = sprite(tex.flare)
  for (const s of [starHalo, star, starFlare]) { s.position.set(0, STAR_Y, 0); scene.add(s) }
  star.material.opacity = 1; starHalo.material.opacity = 0.45; starFlare.material.opacity = 0.8
  const snow = buildSnow(uPx, 70, [14, 14, 8], 1.5)
  snow.m.uniforms.uSnow.value = 1
  scene.add(snow.points)
  // 树底下一小片暖光（雪地）
  const ground = new THREE.Mesh(new THREE.CircleGeometry(7, 48), new THREE.ShaderMaterial({
    vertexShader: `varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: `varying vec3 vW; void main(){ float r = length(vW.xz); gl_FragColor = vec4(vec3(0.08, 0.045, 0.02) * exp(-r * r / 8.0), 1.0); }`,
    ...additive,
  }))
  ground.rotation.x = -Math.PI / 2
  scene.add(ground)

  let t = 30 // 彩灯都已经亮了的时间点
  let raf = 0, last = 0, paused = true, disposed = false
  function render(dt) {
    t += dt
    tree.rotation.y += dt * 0.35
    for (const m of [trail.m, inner.m, bulbs.m, snow.m]) m.uniforms.uTime.value = t
    const s = 1.6 * (1 + 0.05 * Math.sin(t * 3))
    star.scale.setScalar(s); starHalo.scale.setScalar(s * 2.6); starFlare.scale.setScalar(s * 3.4)
    starFlare.material.rotation = t * 0.2
    composer.render()
  }
  function frame(now) {
    if (disposed || paused) return
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 0
    last = now
    render(dt)
    raf = requestAnimationFrame(frame)
  }
  const ro = new ResizeObserver(() => { fit(); if (paused) render(0) })
  ro.observe(host)
  fit()
  render(0)

  return {
    pause(v) {
      if (still || disposed) v = true
      if (v === paused) return
      paused = v
      cancelAnimationFrame(raf)
      if (!paused) { last = 0; raf = requestAnimationFrame(frame) }
    },
    dispose() {
      disposed = true
      cancelAnimationFrame(raf)
      ro.disconnect()
      disposeAll(scene, renderer, [composer, bloom])
    },
    _debug: { renderer, render, scene, composer },
  }
}
