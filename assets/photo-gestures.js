(() => {
  const cursor=document.getElementById('finger');
  let candidate=null,locked=null,seen=-Infinity,since=0,baseline=0,previous=0;
  let x=null,y=null;
  function reset(){
    candidate=locked=null;x=y=null;seen=-Infinity;cursor.hidden=true;
    window.treeAimActive=false;
    window.treeFrames?.focus(null,0);
  }
  window.resetTreePointer=reset;
  window.handleTreePointer=(hand,sign,now,aspect)=>{
    const frames=window.treeFrames;
    if(!frames?.expanded){reset();return false;}
    if(!hand){
      if(now-seen<220 && (candidate||locked))return true;
      reset();return false;
    }
    const distance=(a,b)=>Math.hypot((hand[a].x-hand[b].x)*aspect,hand[a].y-hand[b].y);
    const gap=distance(4,8)/Math.max(.001,distance(5,17));
    const pointing=sign==='Pointing_Up'||(distance(0,8)>1.12*distance(0,6)
      && distance(0,12)<1.18*distance(0,10));
    if(locked){
      seen=now;
      if(gap<.27 || sign==='Closed_Fist'){reset();return sign!=='Closed_Fist';}
      frames.focus(locked,Math.max(0,Math.min(1,(gap-baseline)/.85)));
      return true;
    }
    if(sign==='Closed_Fist'||sign==='Open_Palm'||(!pointing && gap>.46)){
      if(candidate && now-seen<140)return true;
      reset();return false;
    }
    const tx=1-hand[8].x,ty=hand[8].y;
    const dt=Math.min(.12,Math.max(.008,(now-previous)/1000));previous=now;
    const speed=x===null?0:Math.hypot(tx-x,ty-y)/dt;
    const gain=1-Math.exp(-dt*(9+Math.min(42,speed*20)));
    x=x===null?tx:x+(tx-x)*gain;y=y===null?ty:y+(ty-y)*gain;
    cursor.hidden=false;cursor.style.left=x*innerWidth+'px';cursor.style.top=y*innerHeight+'px';
    const hit=frames.pick(x,y);
    if(hit && hit!==candidate){candidate=hit;since=now;baseline=gap;}
    if(hit)seen=now;
    if(!hit && now-seen>200)candidate=null;
    frames.focus(candidate,0);cursor.classList.toggle('target',Boolean(candidate));
    window.treeAimActive=true;
    if(candidate){
      baseline=Math.min(baseline,gap);
      if(now-since>=85 && gap-baseline>.10){
        locked=candidate;cursor.hidden=true;
        frames.focus(locked,Math.min(1,(gap-baseline)/.85));
      }
    }
    return true;
  };
})();
