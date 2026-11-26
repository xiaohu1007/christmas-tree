import {bindBurst} from './burst.js'
// ============ Starlight Xmas Tree · B / C 版：一颗星炸成漫天星尘，旋转着落成一棵树 ============
// https://github.com/ShmilyXI/starlight-xmas-tree  (MIT)
// variant: 'b' 粉色星尘（默认）；'c' 终极版 = A 的星光画轮廓 + B 的星尘落树，绿色分层树。
// 接口和 A 版（starlight-tree.js）一样：startXmasTree / startMiniTree，另外多一个 light()（点「点亮这颗星」时调用）。
// 流程：
//   开场卡片：纯黑夜空 + 霓虹「Merry Christmas」+「点亮这颗星」按钮（点了才开始，下面的时间从点按钮算起）
//   0 ~ 1.6     屏幕中间一颗星慢慢亮起来、变大
//   1.6 ~ 3.3   星星炸开，变成铺满屏幕的星尘
//   4.4 ~ 9.0   星尘一边旋转一边往下落，从下往上聚成一棵粉色的树，树底亮起一圈光；远处的粉色天光、山和地面慢慢出现
//   5.6 ~ 9.4   金色的光带从树底螺旋绕上去
//   9.6         树顶的星星亮起、炸开一圈光；下雪、放烟花、偶尔有流星；顶上出标题，下面一个字一个字写出信
//   12.6        出「进入」按钮；点了和 A 版一样，星星的光漫开变成页面底色
// 树亮了以后：拖动转、双指放大、轻点一下树散开成一个旋转的星系，再点一下（或过一会儿）又聚回树。
// 右下角「跳过」跳到树快聚好的地方。
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { makeComposer, makeTextures, sprite, softFrag, additive, disposeAll, buildSnow, clamp01, smooth, lerp, radiusAt, buildTrail, buildBulbs, startMiniTree as startMiniTreeA } from './starlight-tree.js'

const A_Y0 = 0.9 // A 版树叶从这里开始（下面是树干）

const SB = { BURST: 1.6, FORM0: 4.4, RIB0: 5.6, RIB1: 9.4, TOP: 9.6, TITLE: 10.2, FW: 10.4, LETTER: 11.0, ENTER: 12.6, SKIP: 8.7 }
// C 版：炸开以后一道光从星尘中间落到树底，螺旋往上画轮廓（3.6 ~ 10.3），星尘跟着落成树；到顶星星亮，彩灯从上往下一层层亮
const SC = { BURST: 1.6, DROP: 3.6, BEAM0: 4.3, BEAM1: 10.3, TOP: 10.6, TITLE: 11.3, FW: 11.6, LETTER: 12.2, ENTER: 13.8, SKIP: 9.4 }
const FLOOD_LEN = 1.4
const H = 10 // 树高
const Y0 = 0.35 // 树叶从这里开始
const RB = 3.7 // 树底半径
const STAR_Y = H + 0.4
const ORIGIN = new THREE.Vector3(0, 5.5, 0) // 一开始那颗星的位置（也是星尘炸开的中心）
const eio = (x) => { const t = clamp01(x); return t * t * (3 - 2 * t) }
const coneR = (y) => RB * Math.max(0, 1 - (y - Y0) / (H - Y0))
const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) / 1.5

// ================= 树（同时存着星尘和星系里的位置） =================
// B：粉色圆锥树，星尘按时间从下往上落好。
// C：A 版那棵分层的绿树，星尘跟着往上画轮廓的那道光落下来（光经过哪一层，哪一层就落好）。
function buildTree(uPx, n, variant = 'b') {
  const C = variant === 'c'
  const tree = new Float32Array(n * 3), cloud = new Float32Array(n * 3), gal = new Float32Array(n * 3)
  const col = new Float32Array(n * 3), rnd = new Float32Array(n), delay = new Float32Array(n), size = new Float32Array(n)
  // 颜色里绿色分量要很低，叠在一起才是鲜艳的玫红，不然一叠就发灰发白
  const pinks = [[1.0, 0.06, 0.42], [1.0, 0.04, 0.5], [1.0, 0.18, 0.55], [0.85, 0.04, 0.6], [1.0, 0.1, 0.32]]
  const greens = [[0.015, 0.16, 0.04], [0.03, 0.26, 0.07], [0.06, 0.36, 0.10], [0.02, 0.20, 0.10]]
  const THREADS = 34
  const trunk = C ? Math.round(n * 0.03) : 0
  const y0 = C ? A_Y0 : Y0
  for (let i = 0; i < n; i++) {
    let x, y, z, sH
    if (i >= n - trunk) { // C 的树干
      const th = Math.random() * Math.PI * 2, rr = 0.3 + Math.random() * 0.08
      y = Math.random() * (y0 + 0.4); x = rr * Math.cos(th); z = rr * Math.sin(th); sH = 0
      col.set([0.08, 0.04, 0.02], i * 3)
    } else {
      // 越往下越宽，点也越多（按侧面积分布）；另外 12% 专门撒在上半截，树尖才不会稀稀拉拉的
      const s = Math.random() < 0.12 ? 0.5 + 0.5 * Math.sqrt(Math.random()) : 1 - Math.sqrt(1 - Math.random())
      y = y0 + s * (H - y0)
      const R = C ? radiusAt(y) : coneR(y)
      // B 一半的点顺着细细的螺旋纹排，树身上会有一道道斜纹，像参考里那样
      const th = !C && Math.random() < 0.55
        ? s * 7 * Math.PI * 2 + ((i % THREADS) / THREADS) * Math.PI * 2 + gauss() * 0.05
        : Math.random() * Math.PI * 2
      const depth = Math.pow(Math.random(), C ? 2.4 : 2.2)
      const rr = R * (1 - 0.6 * depth)
      x = rr * Math.cos(th); z = rr * Math.sin(th)
      y -= (C ? 0.35 : 0.12) * (rr / 4) * Math.random() // 枝梢往下垂一点
      sH = s
      if (C) col.set(Math.random() < 0.05 ? [0.7, 0.8, 0.95] : greens[(Math.random() * greens.length) | 0], i * 3)
      else col.set(Math.random() < 0.03 ? [1, 0.9, 0.95] : pinks[(Math.random() * pinks.length) | 0], i * 3)
    }
    tree.set([x, y, z], i * 3)
    // 星尘：以星星为中心的一大团（扁一点，横着铺满屏幕）
    const d = new THREE.Vector3().randomDirection().multiplyScalar(14 * Math.pow(Math.random(), 0.6)) // 中间密一些
    cloud.set([ORIGIN.x + d.x, ORIGIN.y + d.y * 0.75, ORIGIN.z + d.z * 0.8], i * 3)
    // 星系：两条旋臂（存成 半径 / 角度 / 厚度，shader 里再转）
    const r = Math.random() < 0.22 ? 16 * Math.sqrt(Math.random()) : 0.5 + 15 * Math.pow(Math.random(), 1.5)
    const arm = (i % 2) * Math.PI
    gal.set([r, arm + r * 0.5 + gauss() * (0.25 + r * 0.02), gauss() * 0.5 / (1 + r * 0.25)], i * 3)
    rnd[i] = Math.random()
    // B：按时间从下往上一层层落好；C：存高度（0~1），光扫到这个高度就落下来
    delay[i] = C ? sH : sH * 1.8 + Math.random() * 0.35
    size[i] = C ? 0.05 + Math.random() * 0.06 : 0.055 + Math.random() * 0.06
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.BufferAttribute(tree, 3)) // 包围盒用树的位置算
  g.setAttribute('aCloud', new THREE.BufferAttribute(cloud, 3))
  g.setAttribute('aGal', new THREE.BufferAttribute(gal, 3))
  g.setAttribute('aCol', new THREE.BufferAttribute(col, 3))
  g.setAttribute('aRand', new THREE.BufferAttribute(rnd, 1))
  g.setAttribute('aDelay', new THREE.BufferAttribute(delay, 1))
  g.setAttribute('aSize', new THREE.BufferAttribute(size, 1))
  const m = new THREE.ShaderMaterial({
    uniforms: { uPx, uTime: { value: 0 }, uTs: { value: -1 }, uGal: { value: 0 }, uSize: { value: 1 }, uOrigin: { value: ORIGIN }, uC: { value: C ? 1 : 0 }, uBeam: { value: 0 } },
    vertexShader: /* glsl */`
      attribute vec3 aCloud, aGal, aCol; attribute float aRand, aDelay, aSize;
      uniform float uPx, uTime, uTs, uGal, uSize, uC, uBeam; uniform vec3 uOrigin;
      varying vec3 vCol; varying float vB;
      mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
      float eo(float x) { x = clamp(x, 0.0, 1.0); return 1.0 - pow(1.0 - x, 3.0); }
      float eio(float x) { x = clamp(x, 0.0, 1.0); return x * x * (3.0 - 2.0 * x); }
      void main() {
        // 1. 炸开：从星星飞到星尘里的位置，星尘自己慢慢转、上下浮动
        float kb = eo((uTs - 1.6 - aRand * 0.25) / 1.7);
        vec3 cl = aCloud - uOrigin;
        cl.xz = rot(max(uTs - 1.6, 0.0) * 0.06) * cl.xz;
        cl.y += sin(uTs * 0.8 + aRand * 20.0) * 0.12;
        vec3 p = mix(uOrigin, uOrigin + cl, kb);
        // 2. 落成树：边落边绕着树干转（开始和结束时不转，中间转得最多）
        float kf = uC > 0.5 ? eio((uBeam - aDelay + 0.16) / 0.18) : eio((uTs - 4.4 - aDelay) / 2.8);
        vec3 q = mix(p, position, kf);
        q.xz = rot(2.4 * sin(3.14159 * kf) * (0.6 + 0.4 * aRand)) * q.xz;
        // 3. 散开成星系
        float g = eio(uGal * 1.35 - aRand * 0.35);
        if (g > 0.0) {
          float a = aGal.y + uTime * 0.35 / (1.0 + aGal.x * 0.15);
          vec3 gp = vec3(aGal.x * cos(a), aGal.z, aGal.x * sin(a));
          gp.yz = rot(0.5) * gp.yz;
          gp.y += 5.5;
          q = mix(q, gp, g);
        }
        vec4 wp = modelMatrix * vec4(q, 1.0);
        vec2 radial = normalize(wp.xz + vec2(1e-4));
        vec2 vd = normalize(cameraPosition.xz - wp.xz);
        float facing = dot(radial, vd);
        float rim = pow(clamp(1.0 - abs(facing), 0.0, 1.0), 2.0); // pow 底数一定 clamp，免得 NaN
        float tw = 0.65 + 0.35 * sin(uTime * (2.0 + aRand * 3.0) + aRand * 40.0);
        // 刚落好时闪一下（B 按时间；C 是光刚扫过的那一圈）
        float land = uC > 0.5
          ? kf * exp(-max(uBeam - aDelay, 0.0) * 22.0) * (1.0 - smoothstep(0.985, 1.0, uBeam))
          : (kf >= 1.0 ? exp(-max(uTs - 7.2 - aDelay, 0.0) * 3.0) : 0.0);
        // B：单个点别太亮，叠多了红色先顶到头被压、蓝色还在涨，玫红会变成发灰的淡紫
        float treeB = uC > 0.5
          ? (0.1 + 0.72 * rim) * (facing > 0.0 ? 1.0 : 0.45) * tw + land * 0.55
          : (0.21 + 0.42 * rim) * tw + land * 0.6;
        float cloudB = (0.12 + 0.95 * pow(aRand, 3.0)) * tw; // 星尘：大多数暗暗的，少数很亮，一闪一闪
        float galB = (0.35 + 0.9 * exp(-aGal.x * 0.35)) * tw;
        vB = mix(mix(cloudB, treeB, kf), galB, g) * smoothstep(1.6, 1.75, uTs);
        vec3 treeCol = aCol;
        if (uC > 0.5) { // A 版开好灯的颜色：绿色枝叶，侧边一圈暖色的光
          treeCol = mix(aCol * 1.8, vec3(1.0, 0.86, 0.62), clamp(rim * 0.45 + land, 0.0, 1.0)) * vec3(1.25, 1.05, 0.7);
        }
        vec3 cloudCol = uC > 0.5 ? vec3(1.0, 0.88, 0.72) : mix(vec3(1.0, 0.8, 0.86), aCol, 0.3);
        vec3 galCol = mix(vec3(1.0, 0.9, 0.8), mix(vec3(0.7, 0.72, 1.0), aCol, 0.4), clamp(aGal.x / 6.0, 0.0, 1.0));
        vCol = mix(mix(cloudCol, treeCol, kf), galCol, g);
        vec4 mv = viewMatrix * wp;
        gl_Position = projectionMatrix * mv;
        gl_PointSize = max(1.0, aSize * uSize * (1.0 + land * 0.5) * uPx / -mv.z);
      }`,
    fragmentShader: softFrag, ...additive,
  })
  const points = new THREE.Points(g, m)
  points.frustumCulled = false
  return { m, points }
}

// ================= 金色光带（沿圆锥往上绕） =================
function buildRibbon(uPx, step) {
  const TURNS = 6.5, P = new THREE.Vector3(), Q = new THREE.Vector3()
  const at = (s, out) => {
    const y = 0.25 + s * (H - 0.4)
    const r = coneR(y) * 1.1 + 0.18
    const th = s * TURNS * Math.PI * 2
    return out.set(r * Math.cos(th), y, r * Math.sin(th))
  }
  const fine = 12000, cum = new Float32Array(fine + 1)
  at(0, Q)
  for (let i = 1; i <= fine; i++) { at(i / fine, P); cum[i] = cum[i - 1] + P.distanceTo(Q); Q.copy(P) }
  const n = Math.round(cum[fine] / step)
  const pos = new Float32Array(n * 3), u = new Float32Array(n), rnd = new Float32Array(n)
  let j = 0
  for (let i = 0; i < n; i++) {
    const L = (i / (n - 1)) * cum[fine]
    while (j < fine && cum[j + 1] < L) j++
    at((j + (L - cum[j]) / Math.max(1e-6, cum[j + 1] - cum[j])) / fine, P)
    pos.set([P.x + gauss() * 0.03, P.y + gauss() * 0.03, P.z + gauss() * 0.03], i * 3)
    u[i] = i / (n - 1); rnd[i] = Math.random()
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  g.setAttribute('aU', new THREE.BufferAttribute(u, 1))
  g.setAttribute('aRand', new THREE.BufferAttribute(rnd, 1))
  const m = new THREE.ShaderMaterial({
    uniforms: { uPx, uTime: { value: 0 }, uProg: { value: 0 }, uFade: { value: 1 }, uSize: { value: 1 } },
    vertexShader: /* glsl */`
      attribute float aU, aRand; uniform float uPx, uTime, uProg, uFade, uSize;
      varying vec3 vCol; varying float vB;
      void main() {
        float vis = step(aU, uProg) * step(0.0001, uProg); // uProg = 0 时第一个点也别亮
        float head = exp(-(uProg - aU) * 70.0) * vis;
        float bulb = step(0.93, aRand); // 每隔一段一颗亮一点的小灯
        float tw = 0.6 + 0.4 * sin(uTime * (3.0 + aRand * 4.0) + aRand * 50.0);
        vB = vis * uFade * (0.45 * tw + bulb * 0.9 * tw + head * 1.2);
        vCol = mix(vec3(1.0, 0.74, 0.36), vec3(1.0, 0.95, 0.82), clamp(head + bulb * 0.5, 0.0, 1.0));
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = max(1.0, (0.06 + bulb * 0.08 + head * 0.2) * uSize * uPx / -mv.z);
      }`,
    fragmentShader: softFrag, ...additive,
  })
  return { m, points: new THREE.Points(g, m) }
}

// 树底那一圈光（落树的时候最亮）
function buildBaseGlow() {
  const m = new THREE.ShaderMaterial({
    uniforms: { uBase: { value: 0 }, uDisc: { value: new THREE.Color(0.55, 0.2, 0.42) }, uRing: { value: new THREE.Color(0.9, 0.6, 0.8) } },
    vertexShader: `varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */`
      uniform float uBase; uniform vec3 uDisc, uRing; varying vec2 vP;
      void main() {
        float r = length(vP);
        float disc = exp(-r * r / 9.0);
        float ring = exp(-pow((r - 3.6) / 0.6, 2.0));
        vec3 c = uDisc * disc * 0.5 + uRing * ring * 0.35;
        gl_FragColor = vec4(c * uBase, 1.0);
      }`,
    ...additive,
  })
  const mesh = new THREE.Mesh(new THREE.CircleGeometry(7, 64), m)
  mesh.rotation.x = -Math.PI / 2
  mesh.position.y = 0.03
  return { m, mesh }
}

// =====================================================================
export function startXmasTree(root, { ui, cream, onDone, album, start = 'full', variant = 'b' }) {
  const C = variant === 'c'
  const S = C ? SC : SB
  const SKIP_TO = S.SKIP
  const MOBILE = Math.min(innerWidth, innerHeight) < 700

  const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' })
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
  renderer.setSize(innerWidth, innerHeight)
  renderer.setClearColor(0x000000, 1)
  root.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(38, innerWidth / innerHeight, 0.1, 300)
  let gestureSpeed=0, velocity=0, cardsSpread=false;
  scene.scale.set(album.tree.radius/8,album.tree.height/22,album.tree.radius/8);
  const tree = new THREE.Group()
  scene.add(tree)
  const { composer, bloom } = makeComposer(renderer, scene, camera, innerWidth, innerHeight, [0.7, 0.12, 0.8], 0.015)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enablePan = false
  controls.enableDamping = true
  controls.dampingFactor = 0.08
  controls.rotateSpeed = 0.6
  controls.zoomSpeed = 0.8
  controls.minPolarAngle = THREE.MathUtils.degToRad(50)
  controls.maxPolarAngle = THREE.MathUtils.degToRad(92)
  let touching = false, touched = false, lastTouch = -99
  controls.addEventListener('start', () => { touching = true; if (ts > S.TOP) touched = true })
  controls.addEventListener('end', () => { touching = false; lastTouch = age })

  const uPx = { value: 1 }
  let baseDist = 0, wide = false
  const off = new THREE.Vector3()
  function fit() {
    const w = innerWidth, h = innerHeight
    if (!w || !h) return
    const full = Boolean(document.fullscreenElement || document.webkitFullscreenElement || matchMedia("(display-mode: fullscreen)").matches)
    camera.aspect = w / h
    wide = !full && w / h > 1.15 && w >= 700 // 横屏 / 电脑：树放左边，信写在右边
    const tv = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))
    const needV = (full ? 13.4 * scene.scale.y : 15) / 2 / tv
    const needH = (2 * RB + 2.6) / 2 / (tv * camera.aspect) * (full ? scene.scale.x : 1) * (wide ? 1 : 1.24) // 竖屏树小一点，底下要留地方写信
    const dist = Math.max(needV, needH)
    off.subVectors(camera.position, controls.target)
    controls.target.y = full ? STAR_Y * scene.scale.y / 2 : (wide ? 5.4 : 3.6)
    if (!baseDist) camera.position.set(0, controls.target.y + dist * 0.17, dist)
    else {
      off.multiplyScalar(dist / baseDist)
      camera.position.copy(controls.target).add(off)
    }
    baseDist = dist
    controls.minDistance = dist * 0.4
    controls.maxDistance = dist * 1.35
    if (wide) camera.setViewOffset(w, h, w * 0.16, 0, w, h)
    else camera.clearViewOffset()
    controls.update()
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
    composer.setSize(w, h)
    composer.setPixelRatio(renderer.getPixelRatio())
    uPx.value = (h * renderer.getPixelRatio()) / (2 * tv)
  }

  // ================= 远景：天空（地平线一圈粉色的光）、山、星星、地面的亮片 =================
  const domeMat = new THREE.ShaderMaterial({
    uniforms: { uGlow: { value: 0 } },
    vertexShader: `varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */`
      uniform float uGlow; varying vec3 vD;
      void main() {
        // 这些是线性色（后期会转成 sRGB）：地平线大约 #5a1946，头顶接近黑
        float h = vD.y;
        vec3 top = vec3(0.0035, 0.003, 0.008);
        vec3 glow = vec3(0.085, 0.009, 0.055);
        vec3 c = h > 0.0 ? mix(top, glow, exp(-pow(h * 11.0, 1.1))) : vec3(0.006, 0.002, 0.005); // 只在山后面一窄条
        gl_FragColor = vec4(c * uGlow, 1.0);
      }`,
    side: THREE.BackSide, depthWrite: false,
  })
  const dome = new THREE.Mesh(new THREE.SphereGeometry(120, 32, 16), domeMat)
  dome.renderOrder = -10
  scene.add(dome)

  // 远处一圈山（只是剪影）
  const hills = (() => {
    const seg = 180, R = 95, pos = new Float32Array((seg + 1) * 6)
    for (let i = 0; i <= seg; i++) {
      const a = (i / seg) * Math.PI * 2
      const hgt = 3.2 + 1.6 * Math.sin(a * 3 + 1.3) + 1.1 * Math.sin(a * 7 + 0.4) + 0.5 * Math.sin(a * 17 + 2.1) + 0.25 * Math.sin(a * 41)
      pos.set([R * Math.cos(a), -2, R * Math.sin(a), R * Math.cos(a), hgt, R * Math.sin(a)], i * 6)
    }
    const idx = []
    for (let i = 0; i < seg; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2) }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    g.setIndex(idx)
    const m = new THREE.ShaderMaterial({
      uniforms: { uGlow: domeMat.uniforms.uGlow }, // 天光亮起来之前山也是纯黑的
      vertexShader: `void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `uniform float uGlow; void main(){ gl_FragColor = vec4(vec3(0.0045, 0.0018, 0.004) * uGlow, 1.0); }`,
      side: THREE.DoubleSide,
    })
    const mesh = new THREE.Mesh(g, m)
    mesh.renderOrder = -9
    scene.add(mesh)
    return mesh
  })()
  void hills

  const sky = (() => {
    const n = 1400, pos = new Float32Array(n * 3), rnd = new Float32Array(n)
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, el = Math.asin(Math.random() * 0.98) // 天空上半球
      const r = 85
      pos.set([r * Math.cos(el) * Math.cos(a), r * Math.sin(el) - 2, r * Math.cos(el) * Math.sin(a)], i * 3)
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
          gl_PointSize = max(1.0, (0.12 + aRand * 0.2) * uPx / -mv.z);
          vB = uSky * (0.25 + 0.6 * aRand * aRand) * (0.55 + 0.45 * sin(uTime * (0.7 + aRand * 2.0) + aRand * 40.0));
          vCol = mix(vec3(0.85, 0.85, 1.0), vec3(1.0, 0.8, 0.92), step(0.7, aRand));
        }`,
      fragmentShader: softFrag, ...additive,
    })
    const p = new THREE.Points(g, m)
    p.frustumCulled = false
    scene.add(p)
    return m
  })()

  const ground = (() => {
    const n = MOBILE ? 4500 : 7000, pos = new Float32Array(n * 3), rnd = new Float32Array(n)
    for (let i = 0; i < n; i++) {
      const r = 30 * Math.pow(Math.random(), 0.75), a = Math.random() * Math.PI * 2
      pos.set([r * Math.cos(a), 0.02, r * Math.sin(a)], i * 3)
      rnd[i] = Math.random()
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    g.setAttribute('aRand', new THREE.BufferAttribute(rnd, 1))
    const m = new THREE.ShaderMaterial({
      uniforms: { uPx, uTime: { value: 0 }, uGround: { value: 0 }, uSnowy: { value: C ? 1 : 0 } },
      vertexShader: /* glsl */`
        attribute float aRand; uniform float uPx, uTime, uGround, uSnowy; varying vec3 vCol; varying float vB;
        void main() {
          float r = length(position.xz);
          float tw = 0.5 + 0.5 * sin(uTime * (1.5 + aRand * 4.0) + aRand * 60.0);
          vB = uGround * (0.12 + 0.6 * pow(aRand, 4.0) * tw) * (0.35 + 0.65 * exp(-r * r / 120.0));
          vCol = mix(mix(vec3(0.95, 0.4, 0.8), vec3(0.75, 0.55, 1.0), aRand), mix(vec3(0.75, 0.85, 1.0), vec3(1.0, 0.88, 0.95), aRand), uSnowy); // C 是雪地
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = max(1.0, (0.04 + 0.05 * aRand) * uPx / -mv.z);
        }`,
      fragmentShader: softFrag, ...additive,
    })
    const p = new THREE.Points(g, m)
    p.frustumCulled = false
    scene.add(p)
    return m
  })()

  // ================= 树、光带、星星 =================
  const treeP = buildTree(uPx, album.counts.foliage, variant)
  // B：沿圆锥的金色光带；C：A 版那道画轮廓的光留下的线，加上 A 版的彩灯（从树顶往下一层层亮）
  if(album.colors.emerald!=='#388b74'){
    const tint=new THREE.Color(album.colors.emerald);
    const colors=treeP.points.geometry.getAttribute('aCol');
    for(let i=0;i<colors.count;i++){
      const l=Math.max(colors.getX(i),colors.getY(i),colors.getZ(i));
      colors.setXYZ(i,tint.r*l*3,tint.g*l*3,tint.b*l*3);
    }
  }
  const ribbon = C ? buildTrail(uPx, 0.016) : buildRibbon(uPx, 0.02)
  const bulbs = buildBulbs(uPx, (y) => S.TOP + 0.35 + (1-clamp01(y/H))*1.5, album)
  const burst = C ? bindBurst([[treeP,'q'],[ribbon,'position'],[bulbs,'position']]) : null
  const base = buildBaseGlow()
  if (C) { base.m.uniforms.uDisc.value.setRGB(0.5, 0.3, 0.12); base.m.uniforms.uRing.value.setRGB(1.0, 0.8, 0.5) }
  tree.add(treeP.points, ribbon.points)
  if (bulbs) tree.add(bulbs.points)
  function trailPoint(prog, out) {
    const f = clamp01(prog) * (ribbon.n - 1), i = Math.floor(f), k = Math.min(i + 1, ribbon.n - 1), t = f - i, p = ribbon.pos
    return out.set(lerp(p[i * 3], p[k * 3], t), lerp(p[i * 3 + 1], p[k * 3 + 1], t), lerp(p[i * 3 + 2], p[k * 3 + 2], t))
  }
  scene.add(base.mesh)

  const tex = makeTextures()
  const seedHalo = sprite(tex.glow, 0xffd6e8), seedFlare = sprite(tex.flare)
  for (const s of [seedHalo, seedFlare]) { s.position.copy(ORIGIN); scene.add(s) }
  const starHalo = sprite(tex.glow, 0xffc8e0), star = sprite(tex.star), starFlare = sprite(tex.flare), ring = sprite(tex.ring, 0xffd0e8)
  for (const s of [starHalo, star, starFlare, ring]) { s.position.set(0, STAR_Y, 0); (C ? tree : scene).add(s) }
  // C：画轮廓的那道光（星光头）
  const headHalo = sprite(tex.glow), headCore = sprite(tex.glow), headFlare = sprite(tex.flare)
  tree.add(headHalo, headCore, headFlare)
  const core = sprite(tex.glow, 0xfff0dc) // 星系中间那团光
  core.position.set(0, 5.5, 0)
  scene.add(core)

  const snow = buildSnow(uPx, album.counts.elements, [34, 20, 24])
  scene.add(snow.points)

  // ================= 烟花和流星（一个粒子池，CPU 里算） =================
  const fx = (() => {
    const n = MOBILE ? 2600 : 3600
    const pos = new Float32Array(n * 3), col = new Float32Array(n * 3), life = new Float32Array(n), size = new Float32Array(n)
    const vel = new Float32Array(n * 3), ageA = new Float32Array(n).fill(1e9), max = new Float32Array(n).fill(1), drag = new Float32Array(n), grav = new Float32Array(n)
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    g.setAttribute('aCol', new THREE.BufferAttribute(col, 3))
    g.setAttribute('aLife', new THREE.BufferAttribute(life, 1))
    g.setAttribute('aSize', new THREE.BufferAttribute(size, 1))
    const m = new THREE.ShaderMaterial({
      uniforms: { uPx },
      vertexShader: /* glsl */`
        attribute vec3 aCol; attribute float aLife, aSize; uniform float uPx; varying vec3 vCol; varying float vB;
        void main() {
          vB = pow(aLife, 1.2) * 1.5;
          vCol = mix(aCol, vec3(1.0), smoothstep(0.88, 1.0, aLife) * 0.5); // 只在刚炸开那一下偏白，之后是本来的颜色
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = aLife > 0.0 ? max(1.0, aSize * (0.5 + 0.5 * aLife) * uPx / -mv.z) : 0.0;
        }`,
      fragmentShader: softFrag, ...additive,
    })
    const pts = new THREE.Points(g, m)
    pts.frustumCulled = false
    scene.add(pts)
    let next = 0
    const rockets = []
    const PAL = [[1, 0.12, 0.55], [1, 0.62, 0.12], [1, 0.1, 0.12], [0.6, 0.2, 1], [0.2, 0.45, 1], [0.25, 1, 0.4], [1, 0.85, 0.5]]
    function spark(p, v, c, lifeS, sz, dr, gr) {
      const i = next; next = (next + 1) % n
      pos[i * 3] = p.x; pos[i * 3 + 1] = p.y; pos[i * 3 + 2] = p.z
      vel[i * 3] = v.x; vel[i * 3 + 1] = v.y; vel[i * 3 + 2] = v.z
      col.set(c, i * 3); ageA[i] = 0; max[i] = lifeS; size[i] = sz; drag[i] = dr; grav[i] = gr
    }
    const v = new THREE.Vector3(), d = new THREE.Vector3()
    function burst(p) {
      if (typeof window !== 'undefined') window.__xmasEvent?.('firework') // 可选钩子：录视频时用来对上烟花音效，平时没有
      const c1 = PAL[(Math.random() * PAL.length) | 0], c2 = Math.random() < 0.5 ? PAL[(Math.random() * PAL.length) | 0] : c1
      const count = MOBILE ? 170 : 240, sp = 3.4 + Math.random() * 1.8
      for (let k = 0; k < count; k++) {
        d.randomDirection()
        v.copy(d).multiplyScalar(sp * (0.88 + Math.random() * 0.12))
        spark(p, v, k % 3 ? c1 : c2, 1.6 + Math.random() * 0.9, 0.2 + Math.random() * 0.12, 1.4, 1.3)
      }
      for (let k = 0; k < 30; k++) { // 中间一小团亮的
        v.randomDirection().multiplyScalar(Math.random() * 1.2)
        spark(p, v, [1, 0.95, 0.85], 0.7 + Math.random() * 0.4, 0.2, 2, 0.5)
      }
    }
    let carry = 0
    return {
      // C：星光头后面掉下来的金色火花
      dust(p, rate, dt) {
        carry += rate * dt
        while (carry >= 1) {
          carry--
          v.set(gauss() * 0.5, gauss() * 0.5 - 0.15, gauss() * 0.5)
          spark(p, v, [1, 0.7, 0.35], 0.5 + Math.random() * 0.9, 0.07 + Math.random() * 0.09, 1.6, 0.9)
        }
      },
      launch() {
        // 在当前视野里挑一个天上的点炸开（用户转过视角也一样能看到）
        const nx = (Math.random() * 2 - 1) * 0.8, ny = 0.35 + Math.random() * 0.5
        d.set(nx, ny, 0.5).unproject(camera).sub(camera.position).normalize()
        const target = camera.position.clone().addScaledVector(d, 34 + Math.random() * 14)
        target.y = Math.max(target.y, 9)
        const fuse = 1.0 + Math.random() * 0.3
        const from = target.clone().add(new THREE.Vector3(gauss() * 1.5, -8, 0))
        rockets.push({ p: from, v: target.clone().sub(from).divideScalar(fuse), fuse })
      },
      meteor() {
        const nx = -0.9 + Math.random() * 0.6, ny = 0.6 + Math.random() * 0.3
        d.set(nx, ny, 0.5).unproject(camera).sub(camera.position).normalize()
        const p = camera.position.clone().addScaledVector(d, 60)
        const dir = new THREE.Vector3(1, -0.45, 0).applyQuaternion(camera.quaternion).normalize().multiplyScalar(40)
        rockets.push({ p, v: dir, fuse: 0.7, meteor: true })
      },
      update(dt) {
        for (let r = rockets.length - 1; r >= 0; r--) {
          const k = rockets[r]
          k.p.addScaledVector(k.v, dt)
          k.fuse -= dt
          const trails = Math.max(1, Math.round(dt * (k.meteor ? 260 : 120)))
          for (let j = 0; j < trails; j++) {
            v.set(gauss() * 0.15, gauss() * 0.15 - (k.meteor ? 0 : 0.6), gauss() * 0.15)
            spark(k.p, v, k.meteor ? [0.9, 0.92, 1] : [1, 0.75, 0.45], k.meteor ? 0.35 : 0.45, k.meteor ? 0.16 : 0.09, 2, 0)
          }
          if (k.fuse <= 0) { if (!k.meteor) burst(k.p); rockets.splice(r, 1) }
        }
        for (let i = 0; i < n; i++) {
          ageA[i] += dt
          const l = 1 - ageA[i] / max[i]
          if (l <= 0) { life[i] = 0; continue }
          // 快熄灭时一闪一闪
          life[i] = l < 0.3 ? l * (0.4 + 0.6 * (Math.sin(ageA[i] * 40 + i) > 0 ? 1 : 0)) : l
          const f = Math.exp(-drag[i] * dt)
          vel[i * 3] *= f; vel[i * 3 + 1] = vel[i * 3 + 1] * f - grav[i] * dt; vel[i * 3 + 2] *= f
          pos[i * 3] += vel[i * 3] * dt; pos[i * 3 + 1] += vel[i * 3 + 1] * dt; pos[i * 3 + 2] += vel[i * 3 + 2] * dt
        }
        g.attributes.position.needsUpdate = true; g.attributes.aLife.needsUpdate = true
        g.attributes.aCol.needsUpdate = true; g.attributes.aSize.needsUpdate = true
      },
    }
  })()

  // ================= 轻点散开成星系 =================
  let galV = 0, galTarget = 0, galSince = 0
  const down = new Map()
  const onDown = (e) => { down.set(e.pointerId, { x: e.clientX, y: e.clientY, t: performance.now(), multi: down.size > 0 }); for (const v of down.values()) if (down.size > 1) v.multi = true }
  const onUp = (e) => {
    const s = down.get(e.pointerId); down.delete(e.pointerId)
    if (!s || s.multi || floodAt != null || ts < S.TOP + 0.5) return
    if (Math.hypot(e.clientX - s.x, e.clientY - s.y) < 8 && performance.now() - s.t < 350) {
      galTarget = galTarget ? 0 : 1; galSince = age; touched = true
    }
  }
  const onCancel = (e) => down.delete(e.pointerId)
  renderer.domElement.addEventListener('pointerdown', onDown)
  renderer.domElement.addEventListener('pointerup', onUp)
  renderer.domElement.addEventListener('pointercancel', onCancel)

  // ================= 动画 =================
  let started = start === 'view'
  let ts = started ? SKIP_TO : -1 // 点了「点亮这颗星」以后的时间
  let age = 0, floodAt = null, rotY = 0.3, spin = 1, fwNext = 0, meteorNext = 3
  let last = performance.now(), raf = 0, done = false, disposed = false, paused = false
  const tmp = new THREE.Vector3(), starWorld = new THREE.Vector3(0, STAR_Y, 0)
  const head = new THREE.Vector3(), headTmp = new THREE.Vector3(), starLocal = new THREE.Vector3(0, STAR_Y, 0)

  function drawGlass() { ui.glass.style.backgroundColor = `rgba(0, 0, 0, ${smooth(0, 0.9, age).toFixed(3)})` }
  const warm = C ? [255, 222, 170] : [255, 214, 232] // B 粉一点的暖光，C 和 A 一样是暖金色
  function drawFlood(p) {
    if (p <= 0) { ui.flood.style.background = 'none'; return }
    tmp.copy(starWorld).project(camera)
    const w = innerWidth, h = innerHeight
    const x = Math.min(w, Math.max(0, (tmp.x * 0.5 + 0.5) * w)), y = Math.min(h, Math.max(0, (-tmp.y * 0.5 + 0.5) * h))
    const far = Math.hypot(Math.max(x, w - x), Math.max(y, h - y))
    const e = p * p * (3 - 2 * p)
    const r = 30 + e * far * 2.4
    const k = smooth(0.15, 0.85, p)
    const c = warm.map((v, i) => Math.round(lerp(v, cream[i], k))).join(',')
    ui.flood.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(${c},1) 0, rgba(${c},${lerp(0.85, 1, e)}) ${r * 0.45}px, rgba(${c},0) ${r}px)`
    ui.flood.style.opacity = String(Math.min(1, 0.4 + p * 1.2))
  }

  function update(dt) {
    const want = touching || age - lastTouch < 2 ? 0 : 1
    spin += (want - spin) * Math.min(1, dt * 1.5)
    rotY += (0.14 + (C ? .08*galV + 1.55*galV*(1-galV) : 0)) * spin * dt
    velocity += (gestureSpeed-velocity)*(1-Math.exp(-dt*9));
    if (window.treeAimActive) velocity=0;
    rotY += velocity*dt;
    tree.rotation.y = rotY

    // 星系：点一下散开，8 秒后自己聚回来
    // Keep the gallery open while the user is choosing and inspecting photos.
    if(C) galV += (galTarget-galV)*(1-Math.exp(-dt*(galTarget ? 6.4 : 3.4)))
    else galV += Math.sign(galTarget - galV) * Math.min(Math.abs(galTarget - galV), dt / 1.8)
    const gal = smooth(0, 1, galV)

    const tu = treeP.m.uniforms
    tu.uTs.value = ts; tu.uTime.value = age; tu.uGal.value = C ? 0 : galV
    if(burst) burst.value=galV
    for (const m of C ? [sky, ground, snow.m] : [ribbon.m, sky, ground, snow.m]) m.uniforms.uTime.value = age
    sky.uniforms.uSky.value = 0.35 * smooth(0.3, 2, age) + 0.65 * smooth(S.BURST, 5, ts)
    domeMat.uniforms.uGlow.value = smooth(2.5, 7.5, ts)
    ground.uniforms.uGround.value = smooth(3.5, 8, ts)
    bulbs.m.uniforms.uTime.value=ts; bulbs.m.uniforms.uFade.value=(1-gal)*(C ? 1 : .27);
    if (C) {
      // 光从星尘中间落到树底，再螺旋往上画轮廓；星尘跟着它落成树
      const prog = ts < S.BEAM0 ? 0 : eio((ts - S.BEAM0) / (S.BEAM1 - S.BEAM0))
      ribbon.points.visible = prog > 0
      tu.uBeam.value = ts < S.BEAM0 ? -0.3 : prog
      const rm = ribbon.m.uniforms
      rm.uProg.value = prog; rm.uTime.value = ts
      rm.uGain.value = lerp(0.3, 0.16, smooth(S.TOP, S.TOP + 1.5, ts)); rm.uGlint.value = smooth(S.TITLE, S.TITLE + 1, ts)
      rm.uFade.value = 1 - .45*gal
      bulbs.m.uniforms.uTime.value = ts; bulbs.m.uniforms.uFade.value = 1 - .18*gal
      base.m.uniforms.uBase.value = smooth(S.BEAM0, S.BEAM0 + 1.5, ts) * (1 - 0.6 * smooth(S.BEAM1, S.TOP + 1.5, ts)) * (1 - gal)
      let op = 0, rate = 0, hs = 1.3 + 0.15 * Math.sin(age * 9)
      if (ts >= S.DROP && ts < S.BEAM0) {
        trailPoint(0, headTmp); head.copy(ORIGIN).lerp(headTmp, eio((ts - S.DROP) / (S.BEAM0 - S.DROP)))
        op = smooth(S.DROP, S.DROP + 0.3, ts); rate = 60
      } else if (ts >= S.BEAM0 && ts < S.BEAM1) { trailPoint(prog, head); op = 1; rate = 150 }
      else if (ts >= S.BEAM1 && ts < S.TOP + 0.15) {
        trailPoint(1, headTmp); head.copy(headTmp).lerp(starLocal, eio((ts - S.BEAM1) / (S.TOP - S.BEAM1)))
        op = 1 - smooth(S.TOP, S.TOP + 0.15, ts); rate = 80; hs *= 1.2
      }
      headHalo.position.copy(head); headCore.position.copy(head); headFlare.position.copy(head)
      headHalo.material.opacity = op * 0.45; headCore.material.opacity = op * 0.8; headFlare.material.opacity = op * 0.6
      headHalo.scale.setScalar(hs); headCore.scale.setScalar(hs * 0.32); headFlare.scale.setScalar(hs * 1.5)
      if (rate && dt > 0) fx.dust(tree.localToWorld(headTmp.copy(head)), rate, dt)
    } else {
      base.m.uniforms.uBase.value = smooth(S.FORM0 + 0.3, 6.2, ts) * (1 - 0.65 * smooth(8.6, 10.5, ts)) * (1 - gal)
      ribbon.m.uniforms.uProg.value = eio((ts - S.RIB0) / (S.RIB1 - S.RIB0))
      ribbon.m.uniforms.uFade.value = 1 - gal
    }
    snow.m.uniforms.uSnow.value = smooth(S.TOP + 0.2, S.TOP + 2.5, ts)

    // 一开始的那颗星：亮起、变大，炸开时一闪就没了
    if (ts >= 0 && ts < S.BURST + 0.5) {
      const grow = smooth(0, S.BURST, ts)
      const flash = ts >= S.BURST ? Math.exp(-(ts - S.BURST) * 5) : 0
      const op = smooth(0, 0.4, ts) * (ts < S.BURST ? 1 : flash)
      seedHalo.material.opacity = op * 0.8; seedFlare.material.opacity = op
      seedHalo.scale.setScalar(0.8 + 1.6 * grow + 6 * flash); seedFlare.scale.setScalar((1.5 + 3 * grow + 4 * flash) * (1 + 0.06 * Math.sin(age * 9)))
      seedFlare.material.rotation = ts * 0.4
    } else { seedHalo.material.opacity = 0; seedFlare.material.opacity = 0 }

    // 树顶的星星
    const sp = ts - S.TOP
    const fp = floodAt == null ? 0 : clamp01((ts - floodAt) / FLOOD_LEN)
    if (sp >= 0) {
      const grow = 1 + 5 * smooth(0, 1, fp)
      const s = 1.4 * (1 - Math.exp(-sp * 7)) * (1 + 0.5 * Math.exp(-sp * 2.5)) * (1 + 0.04 * Math.sin(age * 3))
      const vis = 1 - (C ? .35 : 1)*gal
      if(C) for(const light of [star,starHalo,starFlare,ring]) light.position.set(3.5*gal,STAR_Y-.8*gal,-2*gal)
      star.scale.setScalar(s); star.material.opacity = vis
      starHalo.scale.setScalar((s * 2.4 + 3 * Math.exp(-sp * 3)) * grow); starHalo.material.opacity = (0.42 + 0.08 * Math.sin(age * 2.2)) * Math.max(vis, fp)
      starFlare.scale.setScalar(s * 3.6 * Math.sqrt(grow)); starFlare.material.opacity = (0.75 + 0.25 * Math.exp(-sp * 2)) * vis; starFlare.material.rotation = age * 0.12
      ring.scale.setScalar(1 + sp * 14); ring.material.opacity = Math.max(0, 1 - sp / 1.3)
    } else for (const s of [star, starHalo, starFlare, ring]) s.material.opacity = 0
    core.material.opacity = C ? .6*Math.sin(gal*Math.PI) : gal*.9
    core.scale.setScalar(4 + 0.3 * Math.sin(age * 2))

    // 烟花、流星
    if (ts >= S.FW && floodAt == null && dt > 0) {
      fwNext -= dt
      if (fwNext <= 0) { fx.launch(); if (Math.random() < 0.3) fx.launch(); fwNext = 1.6 + Math.random() * 1.8 }
      meteorNext -= dt
      if (meteorNext <= 0) { fx.meteor(); meteorNext = 5 + Math.random() * 5 }
    }
    fx.update(dt)

    const leaving = floodAt != null
    ui.card.classList.toggle('on', !started && age >= 0.5)
    ui.title.classList.toggle('on', ts >= S.TITLE && !leaving)
    ui.skip.classList.toggle('on', started && start !== 'view' && ts >= 0.8 && ts < SKIP_TO - 0.3)
    ui.enter.classList.toggle('on', ts >= S.ENTER && !leaving)
    ui.hint.classList.toggle('on', ts >= S.ENTER + 0.6 && ts < S.ENTER + 9 && !touched && !leaving)
    controls.enabled = !leaving
    drawGlass()
    drawFlood(fp)
    if (fp >= 1 && !done) { done = true; onDone?.() }
  }

  function frame(now) {
    if (disposed) return
    const dt = Math.min(0.05, Math.max(0, (now - last) / 1000))
    last = now
    tick(paused ? 0 : dt)
    raf = requestAnimationFrame(frame)
  }
  function tick(dt) {
    age += dt
    if (started) ts += dt
    controls.update()
    update(dt)
    composer.render()
    tree.userData.drawAlbum?.(performance.now())
  }

  addEventListener('resize', fit)
  document.addEventListener('fullscreenchange', fit)
  fit()
  raf = requestAnimationFrame(frame)

  return {
    // 「点亮这颗星」
    light() { if (!started) { started = true; ts = 0 } },
    // 右下角「跳过」：跳到树快聚好的地方
    skip() { if (!started) { started = true } if (ts < SKIP_TO) ts = SKIP_TO },
    enter() { if (floodAt == null) { floodAt = Math.max(ts, S.TOP); galTarget = 0 } },
    dispose() {
      disposed = true
      cancelAnimationFrame(raf)
      removeEventListener('resize', fit)
      document.removeEventListener('fullscreenchange', fit)
      renderer.domElement.removeEventListener('pointerdown', onDown)
      renderer.domElement.removeEventListener('pointerup', onUp)
      renderer.domElement.removeEventListener('pointercancel', onCancel)
      controls.dispose()
      disposeAll(scene, renderer, [composer, bloom])
    },
    albumModel:{tree,camera,
      galaxy:C ? null : {
        progress:()=>smooth(0,1,galV),
        // Follow the two rotating arm centrelines in the particle shader.
        position(out,index,count){
          const pair=Math.floor(index/2);
          const radius=2.9+5.5*(pair+.5)/Math.ceil(count/2);
          const angle=(index%2)*Math.PI+radius*.5+age*.35/(1+radius*.15);
          const z=radius*Math.sin(angle);
          return out.set(radius*Math.cos(angle),5.5+z*Math.sin(.5),z*Math.cos(.5));
        }
      },
      lights:bulbs.points.geometry.attributes.position,branches:treeP.points.geometry.attributes.position,burstProgress:C ? ()=>galV : null,expand:value=>{galTarget=Number(value);galSince=age;},ready:()=>ts >= S.TITLE && floodAt == null,scattered:()=>Boolean(galTarget)},
    setSpeed(value){gestureSpeed=value;},
    setSpread(value){if(ts>=S.TOP){galTarget=Number(value);galSince=age;}},
    _debug: { seek: (s) => { started = true; ts = s }, step: tick, time: () => ts, pause: (v) => { paused = v }, camera, controls, galaxy: () => { galTarget = galTarget ? 0 : 1; galSince = age } },
  }
}

// =====================================================================
// 小水晶球（B 版）：粉色的树聚好、光带绕好的样子
export function startMiniTree(host, { still = false, variant = 'b' } = {}) {
  if (variant === 'c') return startMiniTreeA(host, { still }) // C 的树就是 A 版那棵，小水晶球直接用 A 的
  const size = () => Math.max(1, host.clientWidth)
  const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false })
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
  renderer.setSize(size(), size())
  renderer.setClearColor(0x000000, 1)
  host.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100)
  camera.position.set(0, 6.6, 23.5)
  camera.lookAt(0, 5.3, 0)
  const tree = new THREE.Group()
  scene.add(tree)
  const { composer, bloom } = makeComposer(renderer, scene, camera, size(), size(), [0.45, 0.05, 0.85], 0)

  // 底色：深紫夜空，底下一点粉色的光（线性色，见 A 版小球的说明）
  const bg = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
    vertexShader: `varying vec2 vUv; void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.9999, 1.0); }`,
    fragmentShader: `varying vec2 vUv; void main(){ gl_FragColor = vec4(mix(vec3(0.045, 0.008, 0.03), vec3(0.006, 0.003, 0.011), smoothstep(0.05, 0.75, vUv.y)), 1.0); }`,
    depthWrite: false, depthTest: false,
  }))
  bg.frustumCulled = false
  bg.renderOrder = -10
  scene.add(bg)

  const uPx = { value: 1 }
  const fit = () => {
    const s = size()
    renderer.setSize(s, s)
    composer.setSize(s, s)
    composer.setPixelRatio(renderer.getPixelRatio())
    uPx.value = (s * renderer.getPixelRatio()) / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)))
  }
  const treeP = buildTree(uPx, 3500)
  const ribbon = buildRibbon(uPx, 0.05)
  tree.add(treeP.points, ribbon.points)
  treeP.m.uniforms.uTs.value = 99; treeP.m.uniforms.uSize.value = 2.4
  ribbon.m.uniforms.uProg.value = 1; ribbon.m.uniforms.uSize.value = 1.5

  const tex = makeTextures()
  const starHalo = sprite(tex.glow, 0xffc8e0), star = sprite(tex.star), starFlare = sprite(tex.flare)
  for (const s of [starHalo, star, starFlare]) { s.position.set(0, STAR_Y, 0); scene.add(s) }
  star.material.opacity = 1; starHalo.material.opacity = 0.45; starFlare.material.opacity = 0.8
  const snow = buildSnow(uPx, 70, [14, 14, 8], 1.5)
  snow.m.uniforms.uSnow.value = 1
  scene.add(snow.points)

  let t = 0, raf = 0, last = 0, paused = true, disposed = false
  function render(dt) {
    t += dt
    tree.rotation.y += dt * 0.35
    for (const m of [treeP.m, ribbon.m, snow.m]) m.uniforms.uTime.value = t
    const s = 1.5 * (1 + 0.05 * Math.sin(t * 3))
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
    dispose() { disposed = true; cancelAnimationFrame(raf); ro.disconnect(); disposeAll(scene, renderer, [composer, bloom]) },
  }
}
