(() => {
  const byId = id => document.getElementById(id);
  const panel = byId('panel');
  const collapse = byId('collapse');
  function fold(closed) {
    panel.classList.toggle('compact', closed);
    collapse.textContent = closed ? '+' : '−';
    collapse.setAttribute('aria-expanded', String(!closed));
    collapse.setAttribute('aria-label', closed ? '展开设置' : '收起设置');
  }
  fold(true);
  collapse.onclick = () => fold(!panel.classList.contains('compact'));

  window.addEventListener('tree-ready', () => {
    const {defaults, configure} = window.treeControls;
    const album = window.treeAlbum || [];
    const emptyTexture = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><rect width="8" height="8" fill="#b28c50"/></svg>');
    byId('albumSize').textContent = album.length + ' 张照片';
    const limit = byId('limit');
    limit.max = Math.max(1, album.length);
    limit.disabled = !album.length;
    const form = byId('settings');
    const fields = [];
    function addNumber(group, key, title, min, max, parent) {
      const label = document.createElement('label');
      label.className = parent === 'size' ? '' : 'row';
      label.append(title);
      const input = document.createElement('input');
      Object.assign(input, {id:key, type:'number', min, max, required:true});
      label.append(input);
      byId(parent).append(label);
      fields.push({group,key,input});
    }
    addNumber('counts','foliage','树叶粒子',100,50000,'counts');
    addNumber('counts','ornaments','拍立得相框',1,100,'counts');
    addNumber('counts','lights','彩灯',0,1200,'counts');
    addNumber('counts','elements','飘雪粒子',0,1500,'counts');
    addNumber('tree','height','树高',8,40,'size');
    addNumber('tree','radius','树冠半径',3,18,'size');

    const palettes = [];
    for (const [key,title] of [['emerald','树叶'],['lights','彩灯'],['borders','相框']]) {
      const row = document.createElement('div');
      row.className = 'color-row';
      row.append(title);
      const swatches = document.createElement('div');
      swatches.className = 'swatches';
      const initial = defaults.colors[key];
      const inputs = (Array.isArray(initial) ? initial : [initial]).map((color, index) => {
        const input = document.createElement('input');
        input.type = 'color';
        input.value = color;
        input.title = title + '颜色 ' + (index+1);
        input.setAttribute('aria-label',input.title);
        swatches.append(input);
        return input;
      });
      row.append(swatches);
      byId('colors').append(row);
      palettes.push({key,inputs});
    }

    function populate(saved) {
      for (const {group,key,input} of fields) {
        const value = saved?.[group]?.[key];
        input.value = Number.isInteger(value) && value >= +input.min && value <= +input.max
          ? value : defaults[group][key];
      }
      limit.value = album.length && Number.isInteger(saved?.limit) && saved.limit > 0
        ? Math.min(saved.limit, album.length) : '';
      for (const {key,inputs} of palettes) {
        inputs.forEach((input,index) => {
          const value = inputs.length === 1 ? saved?.colors?.[key] : saved?.colors?.[key]?.[index];
          const fallback = inputs.length === 1 ? defaults.colors[key] : defaults.colors[key][index];
          input.value = /^#[a-f0-9]{6}$/i.test(value) ? value : fallback;
        });
      }
    }
    const storageKey = 'christmas-tree.starlight.v1';
    function apply(save) {
      const values = {designVersion:2,counts:{},tree:{},colors:{},limit:limit.valueAsNumber || null};
      for (const {group,key,input} of fields) values[group][key] = input.valueAsNumber;
      for (const {key,inputs} of palettes) {
        const colors = inputs.map(input => input.value);
        values.colors[key] = colors.length === 1 ? colors[0] : colors;
      }
      configure({...values,photos:album.length ? album.slice(0, values.limit || album.length) : []});
      if (!save) return;
      try {
        localStorage.setItem(storageKey, JSON.stringify(values));
        byId('status').textContent = '设置已应用';
      } catch { byId('status').textContent = '设置已应用，浏览器未能保存。'; }
    }
    let saved;
    try { saved = JSON.parse(localStorage.getItem(storageKey)); } catch { /* Default to the original scene. */ }
    // Migrate untouched legacy defaults while preserving individual customizations.
    if (saved && !saved.designVersion) {
      for (const [key,old] of Object.entries({ornaments:300,lights:400,elements:200})) {
        if (saved.counts?.[key] === old) delete saved.counts[key];
      }
      if (saved.tree?.radius === 9) delete saved.tree.radius;
      const legacy = {emerald:'#004225',lights:['#ff0000','#00ff00','#0000ff','#ffff00'],
        borders:['#fffaf0','#f0e68c','#e6e6fa','#ffb6c1','#98fb98','#87cefa','#ffdab9']};
      for (const [key,value] of Object.entries(legacy)) {
        if (JSON.stringify(saved.colors?.[key])?.toLowerCase() === JSON.stringify(value)) delete saved.colors[key];
      }
    }
    populate(saved);
    apply(false);
    form.onsubmit = event => { event.preventDefault(); apply(true); };
    form.onreset = event => { event.preventDefault(); populate(null); apply(true); };
  });
})();
