import {Vector3} from 'three';
import {radiusAt} from './starlight-tree.js';

const mix=(a,b,t)=>a+(b-a)*t;
const ease=t=>t*t*(3-2*t);

// Choose a real needle near the requested canopy position, including the pink tree.
function branchTip(branches,y,theta){
  const radius=radiusAt(y)*.92, x=radius*Math.cos(theta), z=radius*Math.sin(theta);
  let best=Infinity,index=0;
  for(let i=0;i<branches.count;i++){
    const dx=branches.getX(i)-x,dy=branches.getY(i)-y,dz=branches.getZ(i)-z;
    const score=dx*dx+dy*dy+dz*dz;
    if(score<best){best=score;index=i;}
  }
  return new Vector3().fromBufferAttribute(branches,index);
}

let showTreePhotos=true;
try { showTreePhotos=localStorage.getItem('showTreePhotos')!=='false'; } catch {}

export function mountFrames(host,model,options){
  const layer=document.createElement('div');
  layer.className='frame-layer';
  host.after(layer);
  const toggle=document.getElementById('album-toggle');
  const treeToggle=document.getElementById('tree-photos');
  function updateTreeToggle(){
    treeToggle.setAttribute('aria-pressed',String(showTreePhotos));
    treeToggle.textContent=showTreePhotos?'隐藏树上照片':'显示树上照片';
  }
  updateTreeToggle();
  treeToggle.onclick=()=>{
    showTreePhotos=!showTreePhotos;
    updateTreeToggle();
    try { localStorage.setItem('showTreePhotos',String(showTreePhotos)); } catch {}
  };
  const photos=[...new Set(options.photos)];
  const count=Math.min(options.counts.ornaments,photos.length);
  const cards=Array.from({length:count},(_,i)=>{
    const button=document.createElement('button'),image=new Image();
    button.type='button';button.className='snapshot';button.hidden=true;
    button.setAttribute('aria-label','查看照片 '+(i+1));
    button.style.setProperty('--mat',options.colors.borders[i%options.colors.borders.length]);
    image.alt='';image.src=photos[i];button.append(image);layer.append(button);
    const y=2.1+5.1*(i+.5)/count,theta=i*2.39996+.6;
    // A loose spiral through the scene with uneven heights and orbital radii.
    const phase=theta+Math.sin(i*3.7)*.35;
    const orbit=4.7+1.6*Math.sin(i*2.13+.8);
    const cloud=new Vector3(orbit*Math.cos(phase),2.1+5.3*((i*.618+.29)%1),orbit*Math.sin(phase));
    const card={index:i,ornament:i%Math.ceil(count/4)===0,cloud,button,image,anchor:branchTip(model.lights.count ? model.lights : model.branches,y,theta),
      returnTime:0,returnDuration:0,offsetX:0,offsetY:0,angle:phase,tilt:Math.sin(theta)*9,x:0,y:0,zoom:0,hover:0,depth:1,
      yaw:0,pitch:0,roll:0,initialized:false,held:false,catching:false,
      spinSign:i%2 ? -1 : 1,turns:1,cruise:0};
    button.onclick=()=>{mouseCard=mouseCard===card?null:card;};
    return card;
  });
  let mouseCard=null,aimed=null,requested=0,spread=0,page=0,previous=0;
  let wasOpen=false,advance=false;
  const projected=new Vector3(),view=new Vector3();
  const eye=new Vector3();
  let drift=0;
  function reset(){mouseCard=aimed=null;requested=0;}
  function toggleAlbum(){if(model.ready()&&(count||model.burstProgress)) model.expand(!model.scattered());}
  toggle.onclick=toggleAlbum;
  const onKey=e=>{
    if(e.key==='Escape'){reset();return;}
    if(e.code==='Space' && !e.repeat && (document.fullscreenElement || !['INPUT','BUTTON','TEXTAREA'].includes(e.target.tagName))){
      e.preventDefault();toggleAlbum();
    }
  };
  document.addEventListener('keydown',onKey);
  const api={
    pick(x,y){
      if(!model.ready()||!model.scattered()||spread<.6)return null;
      // Keep the aimed frame inside a slightly wider release radius when paths cross.
      if(aimed && Math.hypot(x*innerWidth-aimed.x,y*innerHeight-aimed.y)<aimed.width*.72+12)return aimed;
      let hit=null,best=Infinity;
      for(const card of cards){
        const d=Math.hypot(x*innerWidth-card.x,y*innerHeight-card.y);
        if(d<best && d<card.width*.62+12){best=d;hit=card;}
      }
      return hit;
    },
    focus(card,zoom){aimed=card;requested=zoom;},
    get expanded(){return count>0 && model.ready() && model.scattered();}
  };
  window.treeFrames=api;
  function updatePose(card,focus,dt,motion,depth,x,y){
    const hold=focus===card;
    const swing=Math.sin(drift*.7+card.angle);
    if(!wasOpen && motion<.015)card.cruise=0;
    if(model.burstProgress && motion>.96 && !hold)card.cruise+=dt;
    const flight=model.burstProgress ? card.spinSign*360*card.turns*motion : 0;
    const yaw=12*swing+flight+card.spinSign*14*Math.sin(card.cruise*.36);
    const pitch=model.burstProgress ? 60*Math.sin(Math.PI*motion)*Math.cos(card.angle)+8*swing*motion : 0;
    const roll=card.tilt+3*swing+18*Math.sin(Math.PI*motion)*Math.cos(card.angle);
    if(hold && card.initialized){
      // Pin the projected center and depth; turn an edge-on photo toward the viewer.
      card.yaw=mix(card.yaw,Math.round(card.yaw/360)*360,1-Math.exp(-dt*14));
      card.pitch*=Math.exp(-dt*14);
      card.roll*=Math.exp(-dt*14);
    }else{
      if(card.held)card.catching=true;
      const k=card.catching ? 1-Math.exp(-dt*10) : 1;
      card.x=model.galaxy ? x : mix(card.x,x,k);
      card.y=model.galaxy ? y : mix(card.y,y,k);
      card.depth=mix(card.depth,depth,k);
      // Take the short way back to the moving orbit after the user releases it.
      const targetYaw=card.catching ? yaw+360*Math.round((card.yaw-yaw)/360) : yaw;
      card.yaw=mix(card.yaw,targetYaw,k);
      card.pitch=mix(card.pitch,pitch,k);card.roll=mix(card.roll,roll,k);
      if(Math.hypot(card.x-x,card.y-y)<1 && Math.abs(card.yaw-targetYaw)<1)card.catching=false;
    }
    card.held=hold;card.initialized=true;
  }
  function projectCard(card,motion,w,h){
    if(model.galaxy){
      model.galaxy.position(card.cloud,card.index,count);
      projected.lerpVectors(card.anchor,card.cloud,motion);
    }else{
      const t=motion + (model.burstProgress ? .50 : .13)*Math.sin(Math.PI*motion);
      projected.copy(card.anchor).lerp(card.cloud,t);
      projected.y+=motion*.18*Math.sin(drift*.8+card.angle);
      projected.x+=motion*.14*Math.cos(drift*.64+card.angle);
    }
    model.tree.localToWorld(projected);
    view.copy(projected).applyMatrix4(model.camera.matrixWorldInverse);
    const depth=Math.max(.72,Math.min(1.38,model.camera.position.length()/Math.max(1,-view.z)));
    projected.project(model.camera);
    card.projectedDepth=depth;
    card.targetX=(1+projected.x)*w/2;
    card.targetY=(1-projected.y)*h/2;
  }
  function spaceGalaxyCards(focus,motion,dt,w,h,size){
    const retain=Math.exp(-dt*2.8);
    const steer=1-Math.exp(-dt*12);
    for(const card of cards){
      if(card===focus || !model.scattered()){
        card.returnDuration=0;
      }else if(card.held){
        card.returnX=card.x;card.returnY=card.y;card.returnTime=0;
        const distance=Math.hypot(card.targetX-card.x,card.targetY-card.y);
        card.returnDuration=1.1+Math.min(1.5,distance/(size*5));
        card.offsetX=0;card.offsetY=0;
      }
      if(card.returnDuration){
        card.returnTime=Math.min(card.returnDuration,card.returnTime+dt);
        const progress=ease(card.returnTime/card.returnDuration);
        card.targetX=mix(card.returnX,card.targetX,progress);
        card.targetY=mix(card.returnY,card.targetY,progress);
        if(card.returnTime===card.returnDuration)card.returnDuration=0;
      }
      card.homeX=card.targetX;card.homeY=card.targetY;
      card.targetX+=card.offsetX*retain;card.targetY+=card.offsetY*retain;
      card.clearance=size*card.projectedDepth*.92;
      if(card===focus){card.targetX=card.x;card.targetY=card.y;}
    }
    // Resolve near passes after projection; carry the detour into the next frame.
    for(let pass=0;pass<5;pass++){
      for(let i=0;i<cards.length;i++){
        const a=cards[i];
        for(let j=i+1;j<cards.length;j++){
          const b=cards[j], dx=b.targetX-a.targetX,dy=b.targetY-a.targetY;
          const distance=Math.hypot(dx,dy);
          const gap=(a.clearance+b.clearance)*motion-distance;
          if(gap<=0)continue;
          const share=a===focus || b===focus ? 1 : .5;
          const x=distance ? dx/distance*gap*share : gap*share;
          const y=distance ? dy/distance*gap*share : 0;
          if(a!==focus){a.targetX-=x;a.targetY-=y;}
          if(b!==focus){b.targetX+=x;b.targetY+=y;}
        }
      }
      for(const card of cards){
        if(card===focus)continue;
        const pad=card.clearance;
        card.targetX=mix(card.targetX,Math.max(pad,Math.min(w-pad,card.targetX)),motion);
        card.targetY=mix(card.targetY,Math.max(pad,Math.min(h-pad,card.targetY)),motion);
      }
    }
    for(const card of cards){
      if(card===focus){card.offsetX=0;card.offsetY=0;continue;}
      card.offsetX=mix(card.offsetX*retain,card.targetX-card.homeX,steer);
      card.offsetY=mix(card.offsetY*retain,card.targetY-card.homeY,steer);
      card.targetX=card.homeX+card.offsetX;
      card.targetY=card.homeY+card.offsetY;
    }
  }
  function drawCard(card,{dt,ready,open,w,h,small,focus,motion}){
    const desired=mouseCard===card?1:aimed===card?requested:0;
    card.zoom=mix(card.zoom,desired,1-Math.exp(-dt*9));
    card.hover=mix(card.hover,Number(card===focus),1-Math.exp(-dt*13));
    const bearing=Math.atan2(card.anchor.x,card.anchor.z)-Math.atan2(eye.x-card.anchor.x,eye.z-card.anchor.z);
    const facing=Math.cos(bearing);
    const onBranch=showTreePhotos && card.ornament && facing>0;
    card.button.tabIndex=open?0:-1;
    card.button.hidden=!ready || (!onBranch && !open && motion<.008 && card.zoom<.008);
    if(card.button.hidden){card.cruise=0;card.initialized=false;return;}
    const midX=w*.5,midY=h*.49;
    updatePose(card,focus,dt,motion,card.projectedDepth,card.targetX,card.targetY);
    const aspect=card.image.naturalWidth/Math.max(1,card.image.naturalHeight)||1.35;
    const q=ease(card.zoom);
    const largeW=Math.min(w*.79,h*.72*aspect,850);
    const size=model.galaxy ? mix(small,Math.max(27,Math.min(43,Math.min(w,h)*.049)),motion) : small;
    const cardW=mix(size*card.depth*(1+.13*card.hover),largeW,q);
    const cardH=mix(size*.79*card.depth*(1+.13*card.hover),largeW/aspect,q);
    const style=card.button.style;
    style.width=cardW+'px';style.height=cardH+'px';
    const left=mix(card.x,midX,q),top=mix(card.y,midY,q);
    const reveal=ease(Math.min(1,motion/.75));
    const unfold=mix(onBranch ? .60 : 0,1,reveal);
    const branchYaw=Math.atan2(Math.sin(bearing),Math.max(0,facing))*180/Math.PI;
    const frameYaw=card.yaw+branchYaw*(1-reveal);
    card.width=cardW*unfold;
    const flatYaw=Math.round(card.yaw/360)*360;
    style.transform='translate3d('+left+'px,'+top+'px,0) translate(-50%,-50%) scale('+unfold+') perspective(560px) rotateY('+mix(frameYaw,flatYaw,q)+'deg) rotateX('+card.pitch*(1-q)+'deg) rotate('+card.roll*(1-q)+'deg)';
    style.zIndex=card.zoom>.015?'300':card===focus?'250':String(Math.round(card.projectedDepth*100));
    style.pointerEvents=open?'auto':'none';
    card.button.classList.toggle('lit',card===focus);
  }
  function draw(now){
    const dt=Math.min(.1,(now-previous)/1000);previous=now;
    const ready=model.ready()&&Boolean(count||model.burstProgress),open=Boolean(ready&&model.scattered());
    toggle.hidden=!ready;
    treeToggle.hidden=!ready || !count || open;
    if(open!==wasOpen || !toggle.hasAttribute('aria-expanded')){
      toggle.textContent=model.burstProgress ? (open?'聚回圣诞树':'星尘爆开') : (open?'收起相框':'展开相框');
      toggle.setAttribute('aria-expanded',String(Boolean(open)));
    }
    if(!open){reset();if(wasOpen)advance=true;}
    if(open && !wasOpen && advance && photos.length>count){
      page=(page+count)%photos.length;
      cards.forEach((card,i)=>{card.image.src=photos[(page+i)%photos.length];});
      advance=false;
    }
    wasOpen=open;
    spread=mix(spread,Number(Boolean(open)),1-Math.exp(-dt*7));
    const w=innerWidth,h=innerHeight,small=Math.max(46,Math.min(86,Math.min(w,h)*.095));
    const focus=mouseCard||aimed;
    drift+=dt;
    const motion=model.burstProgress ? model.burstProgress() : (model.galaxy?.progress() ?? spread);
    model.tree.worldToLocal(model.camera.getWorldPosition(eye));
    for(const card of cards) projectCard(card,motion,w,h);
    if(model.galaxy && motion>0)spaceGalaxyCards(focus,motion,dt,w,h,Math.max(27,Math.min(43,Math.min(w,h)*.049)));
    for(const card of cards) drawCard(card,{dt,ready,open,w,h,small,focus,motion});
    layer.classList.toggle('inspecting',cards.some(card=>card.zoom>.08));
  }
  model.tree.userData.drawAlbum=draw;
  return ()=>{delete model.tree.userData.drawAlbum;document.removeEventListener('keydown',onKey);
    treeToggle.hidden=true;treeToggle.onclick=null;
    toggle.hidden=true;toggle.removeAttribute('aria-expanded');toggle.onclick=null;layer.remove();delete window.treeFrames;};
}
