(() => {
  const el = id => document.getElementById(id);
  const gesture = el('gesture'), debug = el('debug'), preview = el('preview');
  const video = preview.querySelector('video'), overlay = preview.querySelector('canvas');
  const ctx = overlay.getContext('2d');
  let stream, recognizer, modelData, raf, session = 0, enabled = false;
  let lastTime = -1, lastPrediction = 0;
  let pose = '', poseSince = 0, appliedPose = '', wrist = null;
  function resetMotion() {
    pose = appliedPose = '';
    wrist = null;
  }
  const status = text => { el('status').textContent = text; };
  function stop(message = '') {
    window.resetTreePointer();
    resetMotion();
    session++;
    enabled = false;
    cancelAnimationFrame(raf);
    stream?.getTracks().forEach(track => track.stop());
    stream = null;
    video.srcObject = null;
    recognizer?.close();
    recognizer = null;
    window.treeControls?.setSpeed(0);
    lastTime = -1;
    preview.hidden = debug.hidden = true;
    debug.textContent = '显示手部';
    gesture.textContent = '开启手势';
    status(message);
  }
  function loadModelData() {
    if (modelData) return modelData;
    modelData = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'assets/gesture-data.js';
      script.onload = () => resolve(window.gestureData);
      script.onerror = () => { modelData = null; reject(Error('未找到离线手势模型')); };
      document.head.append(script);
    });
    return modelData;
  }
  function drawHand(hand) {
    ctx.clearRect(0, 0, overlay.width, overlay.height);
    if (!hand) return;
    const {DrawingUtils, GestureRecognizer} = window.treeControls;
    const drawing = new DrawingUtils(ctx);
    drawing.drawConnectors(hand, GestureRecognizer.HAND_CONNECTIONS, {color:'#ffd700',lineWidth:2});
    drawing.drawLandmarks(hand, {color:'#ff6655',radius:2});
  }
  function predict(now) {
    if (!enabled) return;
    if (video.readyState >= 2 && video.currentTime !== lastTime && now-lastPrediction >= 38) {
      lastPrediction = now;
      lastTime = video.currentTime;
      try {
        const result = recognizer.recognizeForVideo(video, now);
        const hand = result.landmarks[0], sign = result.gestures[0]?.[0];
        if (!preview.hidden) drawHand(hand);
        if (window.handleTreePointer(hand, sign?.categoryName, now, video.videoWidth/video.videoHeight)) {
          resetMotion();
          window.treeControls.setSpeed(0);
          raf = requestAnimationFrame(predict);
          return;
        }
        if (!hand) {
          resetMotion();
          window.treeControls.setSpeed(0);
        } else {
          const center = (hand[0].x + hand[5].x + hand[17].x)/3;
          const dt = wrist ? (now-wrist.time)/1000 : 0;
          const dx = dt > 0 && dt < .25 ? (wrist.x-center)/dt : 0;
          wrist = {x:center,time:now};
          const speed = Math.sign(dx)*Math.max(0,Math.abs(dx)-.055)*2.2;
          window.treeControls.setSpeed(Math.max(-1.1,Math.min(1.1,speed)));
          const name = sign?.score >= .55 ? sign.categoryName : '';
          if (name !== pose) { pose = name; poseSince = now; appliedPose = ''; }
          if (name && name !== appliedPose && now-poseSince >= 150) {
            if (name === 'Open_Palm') window.treeControls.setState('CHAOS');
            if (name === 'Closed_Fist') window.treeControls.setState('FORMED');
            appliedPose = name;
          }
        }
      } catch (err) { stop('识别中断，可重新开启手势。' + err.message); return; }
    }
    raf = requestAnimationFrame(predict);
  }
  async function start() {
    const token = ++session;
    enabled = true;
    gesture.textContent = '关闭手势';
    status('请允许使用摄像头。');
    try {
      const media = await navigator.mediaDevices.getUserMedia({video:{width:640,height:480},audio:false});
      if (token !== session) { media.getTracks().forEach(track => track.stop()); return; }
      stream = media;
      media.getVideoTracks()[0].onended = () => stop('摄像头已断开。');
      video.srcObject = media;
      await video.play();
      status('正在加载离线手势模型…');
      const data = await loadModelData();
      if (token !== session) return;
      const model = await window.treeControls.GestureRecognizer.createFromOptions(data.files, {
        baseOptions:{modelAssetBuffer:Uint8Array.from(atob(data.model), c => c.charCodeAt(0))},
        runningMode:'VIDEO', numHands:1
      });
      if (token !== session) { model.close(); return; }
      recognizer = model;
      debug.hidden = false;
      status('张掌展开相框 · 食指对准 · 两指张开放大，合拢还原');
      raf = requestAnimationFrame(predict);
    } catch (err) {
      if (token !== session) return;
      const messages = {NotAllowedError:'摄像头权限被拒绝。允许访问后，再点「开启手势」。',NotFoundError:'未找到摄像头，连接后可重试。'};
      stop(messages[err.name] || '无法开启手势。' + err.message);
    }
  }
  gesture.onclick = () => enabled ? stop() : start();
  debug.onclick = () => {
    preview.hidden = !preview.hidden;
    debug.textContent = preview.hidden ? '显示手部' : '隐藏手部';
  };
  window.addEventListener('pagehide', () => stop());
  const root = document.documentElement;
  const syncFullscreen = () => root.classList.toggle('presentation',
    Boolean(document.fullscreenElement || document.webkitFullscreenElement));
  document.addEventListener('fullscreenchange', syncFullscreen);
  document.addEventListener('webkitfullscreenchange', syncFullscreen);
  el('fullscreen').onclick = async () => {
    try {
      const enter = root.requestFullscreen || root.webkitRequestFullscreen;
      if (!enter) throw Error();
      await enter.call(root);
    } catch { status('当前浏览器无法进入全屏，请用桌面 Chrome 或 Edge 打开。'); }
  };
  window.addEventListener('tree-ready', () => {
    gesture.disabled = false;
    if (!window.treeAlbum?.length) status('photos 中暂无可显示的照片。');
  });
})();
