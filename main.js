
// 两个文件：starlight-tree.js（A 版 + 公用的部分），stardust-tree.js（B / C 版，引用 A 的公用部分）
import {GestureRecognizer,DrawingUtils} from '@mediapipe/tasks-vision';
import {mountFrames} from './src/frames.js';
import * as A from './src/starlight-tree.js'
import * as BC from './src/stardust-tree.js'


const params = new URLSearchParams(location.search)
const pick = (v) => (['a', 'b', 'c'].includes(v) ? v : 'a')
let current = pick(params.get('v'))
let playing = null, mini = null

const el = (cls, html = '') => { const d = document.createElement('div'); d.className = cls; d.innerHTML = html; return d }
const cream = () => getComputedStyle(document.body).backgroundColor.match(/[\d.]+/g).slice(0, 3).map(Number)

// ---------- 小水晶球 ----------
const globe = document.querySelector('.globe'), ball = globe.querySelector('.globe-ball')
function showMini(v) {
  mini?.dispose(); mini = null
  try {
    mini = v === 'a' ? A.startMiniTree(ball) : BC.startMiniTree(ball, { variant: v })
  } catch (e) { console.warn(e) } // 不支持 WebGL 就只剩一个空玻璃球
}
document.addEventListener('visibilitychange', () => mini?.pause(document.hidden || !!playing))

// ---------- 全屏开场 ----------
// mode: 'full' 从头播；'view' 从开灯前一点开始（点水晶球再看）
function play(v, mode = 'full') {
  if (playing) return
  current = v
  document.body.classList.add("playing")
  const glass = el('xi-glass'), stage = el('xi-stage'), ui = el(v === 'a' ? 'xi-ui' : 'xi-ui xb')
  ui.innerHTML = (v === 'a'
    ? `<div class="xi-msg"><b>Merry Christmas</b><span>圣诞快乐</span></div>
       <div class="xi-hint">拖动转一转 · 双指放大</div>`
    : `<div class="xb-card"><b class="xb-neon">Merry Christmas</b><span>圣诞快乐</span><button type="button" class="xb-light">点亮这颗星</button></div>
       <div class="xb-title" aria-hidden="true"><b class="xb-neon">Merry Christmas</b><span>圣诞快乐</span></div>
       <div class="xi-hint">拖动转一转 · 双指放大 · 轻点散开</div>`)
    + `<button type="button" class="xi-btn xi-skip">跳过<span aria-hidden="true"> ›</span></button>
       <button type="button" class="xi-btn xi-enter">${mode === 'view' ? '返回选树' : '返回选树'}</button>
       <div class="xi-flood"></div>`
  document.body.append(glass, stage, ui)
  const q = (s) => ui.querySelector(s)
  mini?.pause(true)

  let removeFrames, ctl
  const cleanup = () => { removeFrames?.(); window.resetTreePointer();document.body.classList.remove("playing");ctl?.dispose(); glass.remove(); stage.remove(); ui.remove(); playing = null; window.__starlight = null }
  let done = false
  const finish = () => !done && (done = true) && setTimeout(() => {
    // onDone 是在动画那一帧里面调的，那一帧后面还要画；等它画完再释放 WebGL，不然会报错
    cleanup()
    // 光铺满屏幕、变成页面底色以后，再像毛玻璃一样散开；水晶球换成刚看的这一版，弹一下
    const fade = el('xi-fade'); document.body.append(fade)
    fade.addEventListener('animationend', () => fade.remove())
    showMini(v)
    globe.classList.remove('pop'); void globe.offsetWidth; globe.classList.add('pop')
  })
  try {
    const opts = {
      ui: { glass, msg: q('.xi-msg'), hint: q('.xi-hint'), flood: q('.xi-flood'), skip: q('.xi-skip'), enter: q('.xi-enter'), card: q('.xb-card'), title: q('.xb-title') },
      album: albumOptions, cream: cream(), start: mode, onDone: finish,
    }
    ctl = v === 'a' ? A.startXmasTree(stage, opts) : BC.startXmasTree(stage, { ...opts, variant: v })
    removeFrames=mountFrames(stage,ctl.albumModel,albumOptions);
  } catch (e) { // 不支持 WebGL
    console.warn(e); cleanup(); mini?.pause(false); document.getElementById("status").textContent="当前设备无法启动 3D 演出，请在开启硬件加速的桌面浏览器中重试。"; return
  }
  q('.xi-skip').addEventListener('click', () => ctl.skip())
  q('.xi-enter').addEventListener('click', () => ctl.enter())
  q('.xb-light')?.addEventListener('click', () => ctl.light())
  playing = window.__starlight = ctl // 控制台调试：__starlight._debug.seek(14)
}

document.querySelectorAll('.pick').forEach((b) => b.addEventListener('click', () => play(b.dataset.v)))
globe.addEventListener('click', () => play(current, 'view'))
const defaults={counts:{foliage:17000,ornaments:6,lights:390,elements:900},tree:{height:22,radius:8},
  colors:{emerald:'#388b74',lights:['#ff454f','#ffb726','#64adff','#ff6ca8'],borders:['#fff4db','#ebe4d5','#dccca7']}};
let albumOptions={...defaults,photos:window.treeAlbum||[]};
window.treeControls={defaults,DrawingUtils,GestureRecognizer,
  configure(options){albumOptions=options;},
  setSpeed(value){playing?.setSpeed(value);},
  setState(state){
    if(!playing)return;
    if(state==='FORMED')playing.light?.();
    playing.setSpread(state==='CHAOS');
  }};
window.dispatchEvent(new Event('tree-ready'));
document.addEventListener('fullscreenchange',()=>{
  if(document.fullscreenElement){if(!playing)play(current);playing?.light?.();}
});
showMini(current)
// 不自动播放（进来就点页面容易误触跳过）。?v=b 选版本，加 ?autoplay 打开就播
if (params.has('autoplay')) play(current)
