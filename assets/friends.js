(()=>{var wr=typeof self<"u"?self:{};function Vs(){throw Error("Invalid UTF8")}function Kf(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}var Pa,Zc,Y_=typeof TextDecoder<"u",q_,Z_=typeof TextEncoder<"u";function om(e){if(Z_)e=(q_||=new TextEncoder).encode(e);else{let n=0,i=new Uint8Array(3*e.length);for(let s=0;s<e.length;s++){var t=e.charCodeAt(s);if(t<128)i[n++]=t;else{if(t<2048)i[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&s<e.length){let r=e.charCodeAt(++s);if(r>=56320&&r<=57343){t=1024*(t-55296)+r-56320+65536,i[n++]=t>>18|240,i[n++]=t>>12&63|128,i[n++]=t>>6&63|128,i[n++]=63&t|128;continue}s--}t=65533}i[n++]=t>>12|224,i[n++]=t>>6&63|128}i[n++]=63&t|128}}e=n===i.length?i:i.subarray(0,n)}return e}var Ch,Va;t:{for(Kc=["CLOSURE_FLAGS"],Ia=wr,La=0;La<Kc.length;La++)if((Ia=Ia[Kc[La]])==null){Va=null;break t}Va=Ia}var Kc,Ia,La,Xo,$f=Va&&Va[610401301];Ch=$f!=null&&$f;var jf=wr.navigator;function oh(e){return!!Ch&&!!Xo&&Xo.brands.some(({brand:t})=>t&&t.indexOf(e)!=-1)}function ii(e){var t;return(t=wr.navigator)&&(t=t.userAgent)||(t=""),t.indexOf(e)!=-1}function ds(){return!!Ch&&!!Xo&&Xo.brands.length>0}function $c(){return ds()?oh("Chromium"):(ii("Chrome")||ii("CriOS"))&&!(!ds()&&ii("Edge"))||ii("Silk")}function Ka(e){return Ka[" "](e),e}Xo=jf&&jf.userAgentData||null,Ka[" "]=function(){};var K_=!ds()&&(ii("Trident")||ii("MSIE"));!ii("Android")||$c(),$c(),ii("Safari")&&($c()||!ds()&&ii("Coast")||!ds()&&ii("Opera")||!ds()&&ii("Edge")||(ds()?oh("Microsoft Edge"):ii("Edg/"))||ds()&&oh("Opera"));var am={},ko=null;function $_(e){let t=e.length,n=3*t/4;n%3?n=Math.floor(n):"=.".indexOf(e[t-1])!=-1&&(n="=.".indexOf(e[t-2])!=-1?n-2:n-1);let i=new Uint8Array(n),s=0;return function(r,o){function a(c){for(;l<r.length;){let h=r.charAt(l++),d=ko[h];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return c}lm();let l=0;for(;;){let c=a(-1),h=a(0),d=a(64),u=a(64);if(u===64&&c===-1)break;o(c<<2|h>>4),d!=64&&(o(h<<4&240|d>>2),u!=64&&o(d<<6&192|u))}}(e,function(r){i[s++]=r}),s!==n?i.subarray(0,s):i}function lm(){if(!ko){ko={};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){let i=e.concat(t[n].split(""));am[n]=i;for(let s=0;s<i.length;s++){let r=i[s];ko[r]===void 0&&(ko[r]=s)}}}}var cm=typeof Uint8Array<"u",hm=!K_&&typeof btoa=="function";function Jf(e){if(!hm){var t;t===void 0&&(t=0),lm(),t=am[t];var n=Array(Math.floor(e.length/3)),i=t[64]||"";let l=0,c=0;for(;l<e.length-2;l+=3){var s=e[l],r=e[l+1],o=e[l+2],a=t[s>>2];s=t[(3&s)<<4|r>>4],r=t[(15&r)<<2|o>>6],o=t[63&o],n[c++]=a+s+r+o}switch(a=0,o=i,e.length-l){case 2:o=t[(15&(a=e[l+1]))<<2]||i;case 1:e=e[l],n[c]=t[e>>2]+t[(3&e)<<4|a>>4]+o+i}return n.join("")}for(t="",n=0,i=e.length-10240;n<i;)t+=String.fromCharCode.apply(null,e.subarray(n,n+=10240));return t+=String.fromCharCode.apply(null,n?e.subarray(n):e),btoa(t)}var Qf=/[-_.]/g,j_={"-":"+",_:"/",".":"="};function J_(e){return j_[e]||""}function um(e){if(!hm)return $_(e);Qf.test(e)&&(e=e.replace(Qf,J_)),e=atob(e);let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function Ys(e){return cm&&e!=null&&e instanceof Uint8Array}var Tr={};function qs(){return Q_||=new Xi(null,Tr)}function Ph(e){dm(Tr);var t=e.g;return(t=t==null||Ys(t)?t:typeof t=="string"?um(t):null)==null?t:e.g=t}var Xi=class{h(){return new Uint8Array(Ph(this)||0)}constructor(e,t){if(dm(t),this.g=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}},Q_,t1;function dm(e){if(e!==Tr)throw Error("illegal external caller")}function fm(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}function ah(e){return fm(e=Error(e),"warning"),e}function Ih(e){if(e!=null){var t=t1??={},n=t[e]||0;n>=5||(t[e]=n+1,fm(e=Error(),"incident"),function(i){wr.setTimeout(()=>{throw i},0)}(e))}}var $a=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Fr(e,t,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&e?Symbol.for(e):e!=null?Symbol(e):Symbol():t}var e1=Fr("jas",void 0,!0),tp=Fr(void 0,"0di"),Fo=Fr(void 0,"1oa"),Ar=Fr(void 0,Symbol()),n1=Fr(void 0,"0actk"),pm=Fr(void 0,"8utk"),Ft=$a?e1:"Ea",mm={Ea:{value:0,configurable:!0,writable:!0,enumerable:!1}},gm=Object.defineProperties;function ja(e,t){$a||Ft in e||gm(e,mm),e[Ft]|=t}function Je(e,t){$a||Ft in e||gm(e,mm),e[Ft]=t}function Or(e){return ja(e,34),e}function i1(e,t){Je(t,-15615&(0|e))}function lh(e,t){Je(t,-15581&(34|e))}function Ja(){return typeof BigInt=="function"}function Pn(e){return Array.prototype.slice.call(e)}var Lh,Jo={};function Qa(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object}function Dh(e,t){if(e!=null){if(typeof e=="string")e=e?new Xi(e,Tr):qs();else if(e.constructor!==Xi)if(Ys(e))e=e.length?new Xi(new Uint8Array(e),Tr):qs();else{if(!t)throw Error();e=void 0}}return e}var ep=[];function Ms(e){if(2&e)throw Error()}Je(ep,55),Lh=Object.freeze(ep);var Ga=class{constructor(t,n,i){this.g=t,this.h=n,this.l=i}next(){let t=this.g.next();return t.done||(t.value=this.h.call(this.l,t.value)),t}[Symbol.iterator](){return this}};function Uh(e){return Ar?e[Ar]:void 0}var s1=Object.freeze({});function tl(e){return e.Na=!0,e}var r1=tl(e=>typeof e=="number"),np=tl(e=>typeof e=="string"),o1=tl(e=>typeof e=="boolean"),el=typeof wr.BigInt=="function"&&typeof wr.BigInt(0)=="bigint";function ps(e){var t=e;if(np(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(r1(t)&&!Number.isSafeInteger(t))throw Error(String(t));return el?BigInt(e):e=o1(e)?e?"1":"0":np(e)?e.trim()||"0":String(e)}var ch=tl(e=>el?e>=l1&&e<=h1:e[0]==="-"?ip(e,a1):ip(e,c1)),a1=Number.MIN_SAFE_INTEGER.toString(),l1=el?BigInt(Number.MIN_SAFE_INTEGER):void 0,c1=Number.MAX_SAFE_INTEGER.toString(),h1=el?BigInt(Number.MAX_SAFE_INTEGER):void 0;function ip(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){let i=e[n],s=t[n];if(i>s)return!1;if(i<s)return!0}}var u1=typeof Uint8Array.prototype.slice=="function",_m,Ae=0,Xe=0;function sp(e){let t=e>>>0;Ae=t,Xe=(e-t)/4294967296>>>0}function Zs(e){if(e<0){sp(-e);let[t,n]=Bh(Ae,Xe);Ae=t>>>0,Xe=n>>>0}else sp(e)}function Nh(e){let t=_m||=new DataView(new ArrayBuffer(8));t.setFloat32(0,+e,!0),Xe=0,Ae=t.getUint32(0,!0)}function Fh(e,t){let n=4294967296*t+(e>>>0);return Number.isSafeInteger(n)?n:Yo(e,t)}function Oh(e,t){let n=2147483648&t;return n&&(t=~t>>>0,(e=1+~e>>>0)==0&&(t=t+1>>>0)),typeof(e=Fh(e,t))=="number"?n?-e:e:n?"-"+e:e}function Yo(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=""+(4294967296*t+e);else Ja()?n=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+rp(n)+rp(e));return n}function rp(e){return e=String(e),"0000000".slice(e.length)+e}function vm(){var e=Ae,t=Xe;if(2147483648&t)if(Ja())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{let[n,i]=Bh(e,t);e="-"+Yo(n,i)}else e=Yo(e,t);return e}function nl(e){if(e.length<16)Zs(Number(e));else if(Ja())e=BigInt(e),Ae=Number(e&BigInt(4294967295))>>>0,Xe=Number(e>>BigInt(32)&BigInt(4294967295));else{let t=+(e[0]==="-");Xe=Ae=0;let n=e.length;for(let i=t,s=(n-t)%6+t;s<=n;i=s,s+=6){let r=Number(e.slice(i,s));Xe*=1e6,Ae=1e6*Ae+r,Ae>=4294967296&&(Xe+=Math.trunc(Ae/4294967296),Xe>>>=0,Ae>>>=0)}if(t){let[i,s]=Bh(Ae,Xe);Ae=i,Xe=s}}}function Bh(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}var qo=typeof BigInt=="function"?BigInt.asIntN:void 0,d1=typeof BigInt=="function"?BigInt.asUintN:void 0,ms=Number.isSafeInteger,il=Number.isFinite,Rr=Math.trunc,f1=ps(0);function Ss(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function xm(e){return e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0}var p1=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Zo(e){switch(typeof e){case"bigint":return!0;case"number":return il(e);case"string":return p1.test(e);default:return!1}}function Br(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return il(e)?0|e:void 0}function ym(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return il(e)?e>>>0:void 0}function op(e){if(e[0]==="-")return!1;let t=e.length;return t<20||t===20&&Number(e.substring(0,6))<184467}function Mm(e){let t=e.length;return e[0]==="-"?t<20||t===20&&Number(e.substring(0,7))>-922337:t<19||t===19&&Number(e.substring(0,6))<922337}function Sm(e){return Mm(e)?e:(nl(e),vm())}function kh(e){return e=Rr(e),ms(e)||(Zs(e),e=Oh(Ae,Xe)),e}function bm(e){var t=Rr(Number(e));return ms(t)?String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Sm(e))}function ap(e){var t=Rr(Number(e));return ms(t)?ps(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Ja()?ps(qo(64,BigInt(e))):ps(Sm(e)))}function lp(e){if(ms(e))e=ps(kh(e));else{if(e=Rr(e),ms(e))e=String(e);else{let t=String(e);Mm(t)?e=t:(Zs(e),e=vm())}e=ps(e)}return e}function hh(e){return e==null?e:typeof e=="bigint"?(ch(e)?e=Number(e):(e=qo(64,e),e=ch(e)?Number(e):String(e)),e):Zo(e)?typeof e=="number"?kh(e):bm(e):void 0}function m1(e){if(e==null)return e;var t=typeof e;if(t==="bigint")return String(d1(64,e));if(Zo(e)){if(t==="string")return t=Rr(Number(e)),ms(t)&&t>=0?e=String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),op(e)||(nl(e),e=Yo(Ae,Xe))),e;if(t==="number")return(e=Rr(e))>=0&&ms(e)?e:function(n){if(n<0){Zs(n);var i=Yo(Ae,Xe);return n=Number(i),ms(n)?n:i}return op(i=String(n))?i:(Zs(n),Fh(Ae,Xe))}(e)}}function Em(e){if(typeof e!="string")throw Error();return e}function kr(e){if(e!=null&&typeof e!="string")throw Error();return e}function Cr(e){return e==null||typeof e=="string"?e:void 0}function zh(e,t,n,i){if(e!=null&&typeof e=="object"&&e.W===Jo)return e;if(!Array.isArray(e))return n?2&i?((e=t[tp])||(Or((e=new t).u),e=t[tp]=e),t=e):t=new t:t=void 0,t;let s=n=0|e[Ft];return s===0&&(s|=32&i),s|=2&i,s!==n&&Je(e,s),new t(e)}function g1(e,t,n){if(t)t:{if(!Zo(t=e))throw ah("int64");switch(typeof t){case"string":t=ap(t);break t;case"bigint":t=ps(qo(64,t));break t;default:t=lp(t)}}else e=typeof(t=e),t=t==null?t:e==="bigint"?ps(qo(64,t)):Zo(t)?e==="string"?ap(t):lp(t):void 0;return(e=t)==null?n?f1:void 0:e}function _1(e){return e}var v1={},x1=function(){try{return Ka(new class extends Map{constructor(){super()}}),!1}catch{return!0}}(),Ho=class{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,n){return this.g.set(t,n),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,n){return this.g.forEach(t,n)}[Symbol.iterator](){return this.entries()}},y1=x1?(Object.setPrototypeOf(Ho.prototype,Map.prototype),Object.defineProperties(Ho.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Ho):class extends Map{constructor(){super()}};function cp(e){return e}function jc(e){if(2&e.M)throw Error("Cannot mutate an immutable Map")}var Ni=class extends y1{constructor(e,t,n=cp,i=cp){super();let s=0|e[Ft];s|=64,Je(e,s),this.M=s,this.I=t,this.S=n,this.X=this.I?M1:i;for(let r=0;r<e.length;r++){let o=e[r],a=n(o[0],!1,!0),l=o[1];t?l===void 0&&(l=null):l=i(o[1],!1,!0,void 0,void 0,s),super.set(a,l)}}La(){var e=T1;if(this.size!==0)return Array.from(super.entries(),t=>(t[0]=e(t[0]),t[1]=e(t[1]),t))}da(e=S1){let t=[],n=super.entries();for(var i;!(i=n.next()).done;)(i=i.value)[0]=e(i[0]),i[1]=e(i[1]),t.push(i);return t}clear(){jc(this),super.clear()}delete(e){return jc(this),super.delete(this.S(e,!0,!1))}entries(){if(this.I){var e=super.keys();e=new Ga(e,b1,this)}else e=super.entries();return e}values(){if(this.I){var e=super.keys();e=new Ga(e,Ni.prototype.get,this)}else e=super.values();return e}forEach(e,t){this.I?super.forEach((n,i,s)=>{e.call(t,s.get(i),i,s)}):super.forEach(e,t)}set(e,t){return jc(this),(e=this.S(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.X(t,!0,!0,this.I,!1,this.M))}Ja(e){let t=this.S(e[0],!1,!0);e=e[1],e=this.I?e===void 0?null:e:this.X(e,!1,!0,void 0,!1,this.M),super.set(t,e)}has(e){return super.has(this.S(e,!1,!1))}get(e){e=this.S(e,!1,!1);let t=super.get(e);if(t!==void 0){var n=this.I;return n?((n=this.X(t,!1,!0,n,this.pa,this.M))!==t&&super.set(e,n),n):t}}[Symbol.iterator](){return this.entries()}};function M1(e,t,n,i,s,r){return e=zh(e,i,n,r),s&&(e=ol(e)),e}function S1(e){return e}function b1(e){return[e,this.get(e)]}var E1,wm,Tm,w1;function hp(){return E1||=new Ni(Or([]),void 0,void 0,void 0,v1)}function uh(e,t,n,i,s){if(e!=null){if(Array.isArray(e)){let r=0|e[Ft];return e.length===0&&1&r?void 0:s&&2&r?e:sl(e,t,n,i!==void 0,s)}return t(e,i)}}function sl(e,t,n,i,s){let r=i||n?0|e[Ft]:0,o=i?!!(32&r):void 0,a=0,l=(i=Pn(e)).length;for(let g=0;g<l;g++){var c=i[g];if(g===l-1&&Qa(c)){var h=t,d=n,u=o,m=s;let v;for(let f in c){let p=uh(c[f],h,d,u,m);p!=null&&((v??={})[f]=p)}c=v}else c=uh(i[g],t,n,o,s);i[g]=c,c!=null&&(a=g+1)}return a<l&&(i.length=a),n&&((e=Uh(e))&&(i[Ar]=Pn(e)),n(r,i)),i}function T1(e){return uh(e,Hh,void 0,void 0,!1)}function Hh(e){switch(typeof e){case"number":return Number.isFinite(e)?e:""+e;case"bigint":return ch(e)?Number(e):""+e;case"boolean":return e?1:0;case"object":if(Ys(e))return Ys(e)&&Ih(pm),Jf(e);if(e.W===Jo)return Am(e);if(e instanceof Xi){let t=e.g;return t==null?"":typeof t=="string"?t:e.g=Jf(t)}return e instanceof Ni?e.La():void 0}return e}function Am(e){var t=e.u;e=sl(t,Hh,void 0,void 0,!1);var n=0|t[Ft];if((t=e.length)&&!(512&n)){var i=e[t-1],s=!1;Qa(i)?(t--,s=!0):i=void 0;var r=t-(n=512&n?0:-1),o=(wm??_1)(r,n,e,i);if(i&&(e[t]=void 0),r<o&&i){for(var a in r=!0,i){let l=+a;l<=o?(e[s=l+n]=i[a],t=Math.max(s+1,t),s=!1,delete i[a]):r=!1}r&&(i=void 0)}for(r=t-1;t>0;r=t-1)if((a=e[r])==null)t--,s=!0;else{if(!((r-=n)>=o))break;(i??={})[r]=a,t--,s=!0}s&&(e.length=t),i&&e.push(i)}return e}function gs(e,t,n){return e=Rm(e,t[0],t[1],n?1:2),t!==Tm&&n&&ja(e,8192),e}function Rm(e,t,n,i){if(e==null){var s=96;n?(e=[n],s|=512):e=[],t&&(s=-16760833&s|(1023&t)<<14)}else{if(!Array.isArray(e))throw Error("narr");if(8192&(s=0|e[Ft])||!(64&s)||2&s||Ih(n1),1024&s)throw Error("farr");if(64&s)return e;if(i===1||i===2||(s|=64),n&&(s|=512,n!==e[0]))throw Error("mid");t:{var r=(n=e).length;if(r){var o=r-1;if(Qa(i=n[o])){if((o-=t=512&(s|=256)?0:-1)>=1024)throw Error("pvtlmt");for(var a in i)(r=+a)<o&&(n[r+t]=i[a],delete i[a]);s=-16760833&s|(1023&o)<<14;break t}}if(t){if((a=Math.max(t,r-(512&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&a)<<14}}}return Je(e,s),e}function dh(e,t,n=lh){if(e!=null){if(cm&&e instanceof Uint8Array)return t?e:new Uint8Array(e);if(Array.isArray(e)){var i=0|e[Ft];return 2&i?e:(t&&=i===0||!!(32&i)&&!(64&i||!(16&i)),t?(Je(e,34|i),4&i&&Object.freeze(e),e):sl(e,dh,4&i?lh:n,!0,!0))}return e.W===Jo?e=2&(i=0|(n=e.u)[Ft])?e:new e.constructor(rl(n,i,!0)):e instanceof Ni&&!(2&e.M)&&(n=Or(e.da(dh)),e=new Ni(n,e.I,e.S,e.X)),e}}function rl(e,t,n){let i=n||2&t?lh:i1,s=!!(32&t);return e=function(r,o,a){let l=Pn(r);var c=l.length;let h=256&o?l[c-1]:void 0;for(c+=h?-1:0,o=512&o?1:0;o<c;o++)l[o]=a(l[o]);if(h){o=l[o]={};for(let d in h)o[d]=a(h[d])}return(r=Uh(r))&&(l[Ar]=Pn(r)),l}(e,t,r=>dh(r,s,i)),ja(e,32|(n?2:0)),e}function ol(e){let t=e.u,n=0|t[Ft];return 2&n?new e.constructor(rl(t,n,!1)):e}function Pr(e,t){return Ki(e=e.u,0|e[Ft],t)}function Ki(e,t,n){if(n===-1)return null;let i=n+(512&t?0:-1),s=e.length-1;return i>=s&&256&t?e[s][n]:i<=s?e[i]:void 0}function Pe(e,t,n){let i=e.u,s=0|i[Ft];return Ms(s),ze(i,s,t,n),e}function ze(e,t,n,i){let s=512&t?0:-1,r=n+s;var o=e.length-1;return r>=o&&256&t?(e[o][n]=i,t):r<=o?(e[r]=i,t):(i!==void 0&&(n>=(o=t>>14&1023||536870912)?i!=null&&(e[o+s]={[n]:i},Je(e,t|=256)):e[r]=i),t)}function Oa(e,t){let n=0|(e=e.u)[Ft],i=Ki(e,n,t),s=Ss(i);return s!=null&&s!==i&&ze(e,n,t,s),s}function Cm(e){let t=0|(e=e.u)[Ft],n=Ki(e,t,1),i=Dh(n,!0);return i!=null&&i!==n&&ze(e,t,1,i),i}function Gs(){return s1===void 0?2:4}function Ws(e,t,n,i,s){let r=e.u,o=2&(e=0|r[Ft])?1:i;s=!!s;let a=0|(i=Vh(r,e,t))[Ft];if(!(4&a)){4&a&&(i=Pn(i),a=Yi(a,e),e=ze(r,e,t,i));let l=0,c=0;for(;l<i.length;l++){let h=n(i[l]);h!=null&&(i[c++]=h)}c<l&&(i.length=c),a=Gh(a,e),n=-2049&(20|a),a=n&=-4097,Je(i,a),2&a&&Object.freeze(i)}return o===1||o===4&&32&a?Wi(a)||(s=a,a|=2,a!==s&&Je(i,a),Object.freeze(i)):(o===2&&Wi(a)&&(i=Pn(i),a=Yi(a,e),a=_s(a,e,s),Je(i,a),e=ze(r,e,t,i)),Wi(a)||(t=a,a=_s(a,e,s),a!==t&&Je(i,a))),i}function Vh(e,t,n){return e=Ki(e,t,n),Array.isArray(e)?e:Lh}function Gh(e,t){return e===0&&(e=Yi(e,t)),1|e}function Wi(e){return!!(2&e)&&!!(4&e)||!!(1024&e)}function Pm(e){e=Pn(e);for(let t=0;t<e.length;t++){let n=e[t]=Pn(e[t]);Array.isArray(n[1])&&(n[1]=Or(n[1]))}return e}function fh(e,t,n,i){let s=0|(e=e.u)[Ft];Ms(s),ze(e,s,t,(i==="0"?Number(n)===0:n===i)?void 0:n)}function zr(e,t,n,i){Ms(t);let s=Vh(e,t,n),r=s!==Lh;if(64&t||!(8192&t)||!r){let o=r?0|s[Ft]:0,a=o;(!r||2&a||Wi(a)||4&a&&!(32&a))&&(s=Pn(s),a=Yi(a,t),t=ze(e,t,n,s)),a=-13&Gh(a,t),a=_s(i?-17&a:16|a,t,!0),a!==o&&Je(s,a)}return s}function Jc(e,t){var n=v0;return Xh(Wh(e=e.u),e,0|e[Ft],n)===t?t:-1}function Wh(e){if($a)return e[Fo]??(e[Fo]=new Map);if(Fo in e)return e[Fo];let t=new Map;return Object.defineProperty(e,Fo,{value:t}),t}function Im(e,t,n,i){let s=Wh(e),r=Xh(s,e,t,n);return r!==i&&(r&&(t=ze(e,t,r)),s.set(n,i)),t}function Xh(e,t,n,i){let s=e.get(i);if(s!=null)return s;s=0;for(let r=0;r<i.length;r++){let o=i[r];Ki(t,n,o)!=null&&(s!==0&&(n=ze(t,n,s)),s=o)}return e.set(i,s),s}function Yh(e,t,n){let i=0|e[Ft],s=Ki(e,i,n),r;if(s!=null&&s.W===Jo)return(t=ol(s))!==s&&ze(e,i,n,t),t.u;if(Array.isArray(s)){let o=0|s[Ft];r=2&o?gs(rl(s,o,!1),t,!0):64&o?s:gs(r,t,!0)}else r=gs(void 0,t,!0);return r!==s&&ze(e,i,n,r),r}function Lm(e,t,n){let i=0|(e=e.u)[Ft],s=Ki(e,i,n);return(t=zh(s,t,!1,i))!==s&&t!=null&&ze(e,i,n,t),t}function ge(e,t,n){if((t=Lm(e,t,n))==null)return t;let i=0|(e=e.u)[Ft];if(!(2&i)){let s=ol(t);s!==t&&ze(e,i,n,t=s)}return t}function Dm(e,t,n,i,s,r,o){e=e.u;var a=!!(2&t);let l=a?1:s;r=!!r,o&&=!a;var c=0|(s=Vh(e,t,i))[Ft];if(!(a=!!(4&c))){var h=s,d=t;let u=!!(2&(c=Gh(c,t)));u&&(d|=2);let m=!u,g=!0,v=0,f=0;for(;v<h.length;v++){let p=zh(h[v],n,!1,d);if(p instanceof n){if(!u){let E=!!(2&(0|p.u[Ft]));m&&=!E,g&&=E}h[f++]=p}}f<v&&(h.length=f),c|=4,c=g?16|c:-17&c,Je(h,c=m?8|c:-9&c),u&&Object.freeze(h)}if(o&&!(8&c||!s.length&&(l===1||l===4&&32&c))){for(Wi(c)&&(s=Pn(s),c=Yi(c,t),t=ze(e,t,i,s)),n=s,o=c,h=0;h<n.length;h++)(c=n[h])!==(d=ol(c))&&(n[h]=d);o|=8,Je(n,o=n.length?-17&o:16|o),c=o}return l===1||l===4&&32&c?Wi(c)||(t=c,(c|=!s.length||16&c&&(!a||32&c)?2:1024)!==t&&Je(s,c),Object.freeze(s)):(l===2&&Wi(c)&&(Je(s=Pn(s),c=_s(c=Yi(c,t),t,r)),t=ze(e,t,i,s)),Wi(c)||(i=c,(c=_s(c,t,r))!==i&&Je(s,c))),s}function qi(e,t,n){let i=0|e.u[Ft];return Dm(e,i,t,n,Gs(),!1,!(2&i))}function Vt(e,t,n,i){return i==null&&(i=void 0),Pe(e,n,i)}function Vo(e,t,n,i){i==null&&(i=void 0);t:{let s=0|(e=e.u)[Ft];if(Ms(s),i==null){let r=Wh(e);if(Xh(r,e,s,n)!==t)break t;r.set(n,0)}else s=Im(e,s,n,t);ze(e,s,t,i)}}function Yi(e,t){return-1025&(e=32|(2&t?2|e:-3&e))}function _s(e,t,n){return 32&t&&n||(e&=-33),e}function al(e,t,n){Ms(0|e.u[Ft]),Ws(e,t,Cr,2,!0).push(Em(n))}function Wa(e,t,n,i){let s=0|e.u[Ft];Ms(s),e=Dm(e,s,n,t,2,!0),i=i??new n,e.push(i),e[Ft]=2&(0|i.u[Ft])?-9&e[Ft]:-17&e[Ft]}function si(e,t){return Br(Pr(e,t))}function ri(e,t){return Cr(Pr(e,t))}function Ze(e,t){return Oa(e,t)??0}function Ko(e,t,n){if(n!=null&&typeof n!="boolean")throw e=typeof n,Error(`Expected boolean but got ${e!="object"?e:n?Array.isArray(n)?"array":e:"null"}: ${n}`);Pe(e,t,n)}function Fi(e,t,n){if(n!=null){if(typeof n!="number"||!il(n))throw ah("int32");n|=0}Pe(e,t,n)}function Lt(e,t,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);Pe(e,t,n)}function Xa(e,t,n){{let o=e.u,a=0|o[Ft];if(Ms(a),n==null)ze(o,a,t);else{var i=e=0|n[Ft],s=Wi(e),r=s||Object.isFrozen(n);for(s||(e=0),r||(n=Pn(n),i=0,e=_s(e=Yi(e,a),a,!0),r=!1),e|=21,s=0;s<n.length;s++){let l=n[s],c=Em(l);Object.is(l,c)||(r&&(n=Pn(n),i=0,e=_s(e=Yi(e,a),a,!0),r=!1),n[s]=c)}e!==i&&(r&&(n=Pn(n),e=_s(e=Yi(e,a),a,!0)),Je(n,e)),ze(o,a,t,n)}}}function Um(e,t){return Error(`Invalid wire type: ${e} (at position ${t})`)}function qh(){return Error("Failed to read varint, encoding is invalid.")}function Nm(e,t){return Error(`Tried to read past the end of the data ${t} > ${e}`)}function Zh(e){if(typeof e=="string")return{buffer:um(e),O:!1};if(Array.isArray(e))return{buffer:new Uint8Array(e),O:!1};if(e.constructor===Uint8Array)return{buffer:e,O:!1};if(e.constructor===ArrayBuffer)return{buffer:new Uint8Array(e),O:!1};if(e.constructor===Xi)return{buffer:Ph(e)||new Uint8Array(0),O:!0};if(e instanceof Uint8Array)return{buffer:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),O:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Kh(e,t){let n,i=0,s=0,r=0,o=e.h,a=e.g;do n=o[a++],i|=(127&n)<<r,r+=7;while(r<32&&128&n);for(r>32&&(s|=(127&n)>>4),r=3;r<32&&128&n;r+=7)n=o[a++],s|=(127&n)<<r;if(Xs(e,a),n<128)return t(i>>>0,s>>>0);throw qh()}function $h(e){let t=0,n=e.g,i=n+10,s=e.h;for(;n<i;){let r=s[n++];if(t|=r,(128&r)==0)return Xs(e,n),!!(127&t)}throw qh()}function vs(e){let t=e.h,n=e.g,i=t[n++],s=127&i;if(128&i&&(i=t[n++],s|=(127&i)<<7,128&i&&(i=t[n++],s|=(127&i)<<14,128&i&&(i=t[n++],s|=(127&i)<<21,128&i&&(i=t[n++],s|=i<<28,128&i&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw qh();return Xs(e,n),s}function Zi(e){return vs(e)>>>0}function ph(e){var t=e.h;let n=e.g,i=t[n],s=t[n+1],r=t[n+2];return t=t[n+3],Xs(e,e.g+4),(i<<0|s<<8|r<<16|t<<24)>>>0}function mh(e){var t=ph(e);e=2*(t>>31)+1;let n=t>>>23&255;return t&=8388607,n==255?t?NaN:e*(1/0):n==0?1401298464324817e-60*e*t:e*Math.pow(2,n-150)*(t+8388608)}function A1(e){return vs(e)}function Qc(e,t,{aa:n=!1}={}){e.aa=n,t&&(t=Zh(t),e.h=t.buffer,e.m=t.O,e.j=0,e.l=e.h.length,e.g=e.j)}function Xs(e,t){if(e.g=t,t>e.l)throw Nm(e.l,t)}function Fm(e,t){if(t<0)throw Error(`Tried to read a negative byte length: ${t}`);let n=e.g,i=n+t;if(i>e.l)throw Nm(t,e.l-n);return e.g=i,n}function Om(e,t){if(t==0)return qs();var n=Fm(e,t);return e.aa&&e.m?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?new Uint8Array(0):u1?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?qs():new Xi(n,Tr)}Ni.prototype.toJSON=void 0;var up=[];function Bm(e){var t=e.g;if(t.g==t.l)return!1;e.l=e.g.g;var n=Zi(e.g);if(t=n>>>3,!((n&=7)>=0&&n<=5))throw Um(n,e.l);if(t<1)throw Error(`Invalid field number: ${t} (at position ${e.l})`);return e.m=t,e.h=n,!0}function Ba(e){switch(e.h){case 0:e.h!=0?Ba(e):$h(e.g);break;case 1:Xs(e=e.g,e.g+8);break;case 2:if(e.h!=2)Ba(e);else{var t=Zi(e.g);Xs(e=e.g,e.g+t)}break;case 5:Xs(e=e.g,e.g+4);break;case 3:for(t=e.m;;){if(!Bm(e))throw Error("Unmatched start-group tag: stream EOF");if(e.h==4){if(e.m!=t)throw Error("Unmatched end-group tag");break}Ba(e)}break;default:throw Um(e.h,e.l)}}function Qo(e,t,n){let i=e.g.l,s=Zi(e.g),r=e.g.g+s,o=r-i;if(o<=0&&(e.g.l=r,n(t,e,void 0,void 0,void 0),o=r-e.g.g),o)throw Error(`Message parsing ended unexpectedly. Expected to read ${s} bytes, instead read ${s-o} bytes, either the data ended unexpectedly or the message misreported its own length`);return e.g.g=r,e.g.l=i,t}function jh(e){var t=Zi(e.g),n=Fm(e=e.g,t);if(e=e.h,Y_){var i,s=e;(i=Zc)||(i=Zc=new TextDecoder("utf-8",{fatal:!0})),t=n+t,s=n===0&&t===s.length?s:s.subarray(n,t);try{var r=i.decode(s)}catch(a){if(Pa===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Pa=!0}catch{Pa=!1}}throw!Pa&&(Zc=void 0),a}}else{t=(r=n)+t,n=[];let a,l=null;for(;r<t;){var o=e[r++];o<128?n.push(o):o<224?r>=t?Vs():(a=e[r++],o<194||(192&a)!=128?(r--,Vs()):n.push((31&o)<<6|63&a)):o<240?r>=t-1?Vs():(a=e[r++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=e[r++]))!=128?(r--,Vs()):n.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?r>=t-2?Vs():(a=e[r++],(192&a)!=128||a-144+(o<<28)>>30||(192&(i=e[r++]))!=128||(192&(s=e[r++]))!=128?(r--,Vs()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&s,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):Vs(),n.length>=8192&&(l=Kf(l,n),n.length=0)}r=Kf(l,n)}return r}function km(e){let t=Zi(e.g);return Om(e.g,t)}function ll(e,t,n){var i=Zi(e.g);for(i=e.g.g+i;e.g.g<i;)n.push(t(e.g))}var Da=[];function gi(e,t,n){t.g?t.m(e,t.g,t.h,n):t.m(e,t.h,n)}var Pt=class{constructor(e,t){this.u=Rm(e,t)}toJSON(){try{var e=Am(this)}finally{wm=void 0}return e}l(){var e=lv;return e.g?e.l(this,e.g,e.h):e.l(this,e.h,e.defaultValue)}clone(){let e=this.u;return new this.constructor(rl(e,0|e[Ft],!1))}O(){return!!(2&(0|this.u[Ft]))}};function dp(e){return e?/^\d+$/.test(e)?(nl(e),new gh(Ae,Xe)):null:R1||=new gh(0,0)}Pt.prototype.W=Jo,Pt.prototype.toString=function(){return this.u.toString()};var gh=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}},R1;function fp(e){return e?/^-?\d+$/.test(e)?(nl(e),new _h(Ae,Xe)):null:C1||=new _h(0,0)}var _h=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}},C1;function Sr(e,t,n){for(;n>0||t>127;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function Hr(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function cl(e,t){if(t>=0)Hr(e,t);else{for(let n=0;n<9;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function $o(e,t){e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function Ir(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function Vn(e,t,n){Hr(e.g,8*t+n)}function Jh(e,t){return Vn(e,t,2),t=e.g.end(),Ir(e,t),t.push(e.h),t}function Qh(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function hl(e,t,n){Vn(e,t,2),Hr(e.g,n.length),Ir(e,e.g.end()),Ir(e,n)}function Ya(e,t,n,i){n!=null&&(t=Jh(e,t),i(n,e),Qh(e,t))}function _i(){let e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var tu=_i(),zm=_i(),eu=_i(),nu=_i(),Hm=_i(),Vm=_i(),iu=_i(),Gm=_i(),Wm=_i(),Vr=class{constructor(e,t,n){this.g=e,this.h=t,e=tu,this.l=!!e&&n===e||!1}};function ul(e,t){return new Vr(e,t,tu)}function Xm(e,t,n,i,s){Ya(e,n,Km(t,i),s)}var P1=ul(function(e,t,n,i,s){return e.h===2&&(Qo(e,Yh(t,i,n),s),!0)},Xm),I1=ul(function(e,t,n,i,s){return e.h===2&&(Qo(e,Yh(t,i,n),s),!0)},Xm),dl=Symbol(),su=Symbol(),pp=Symbol(),mp=Symbol(),Ym,qm;function Ks(e,t,n,i){var s=i[e];if(s)return s;(s={}).Ma=i,s.T=function(d){switch(typeof d){case"boolean":return Tm||=[0,void 0,!0];case"number":return d>0?void 0:d===0?w1||=[0,void 0]:[-d,void 0];case"string":return[0,d];case"object":return d}}(i[0]);var r=i[1];let o=1;r&&r.constructor===Object&&(s.ga=r,typeof(r=i[++o])=="function"&&(s.la=!0,Ym??=r,qm??=i[o+1],r=i[o+=2]));let a={};for(;r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var l=0;l<r.length;l++)a[r[l]]=r;r=i[++o]}for(l=1;r!==void 0;){let d;typeof r=="number"&&(l+=r,r=i[++o]);var c=void 0;if(r instanceof Vr?d=r:(d=P1,o--),d?.l){r=i[++o],c=i;var h=o;typeof r=="function"&&(r=r(),c[h]=r),c=r}for(h=l+1,typeof(r=i[++o])=="number"&&r<0&&(h-=r,r=i[++o]);l<h;l++){let u=a[l];c?n(s,l,d,c,u):t(s,l,d,u)}}return i[e]=s}function Zm(e){return Array.isArray(e)?e[0]instanceof Vr?e:[I1,e]:[e,void 0]}function Km(e,t){return e instanceof Pt?e.u:Array.isArray(e)?gs(e,t,!1):void 0}function ru(e,t,n,i){let s=n.g;e[t]=i?(r,o,a)=>s(r,o,a,i):s}function ou(e,t,n,i,s){let r=n.g,o,a;e[t]=(l,c,h)=>r(l,c,h,a||=Ks(su,ru,ou,i).T,o||=au(i),s)}function au(e){let t=e[pp];if(t!=null)return t;let n=Ks(su,ru,ou,e);return t=n.la?(i,s)=>Ym(i,s,n):(i,s)=>{let r=0|i[Ft];for(;Bm(s)&&s.h!=4;){var o=s.m,a=n[o];if(a==null){var l=n.ga;l&&(l=l[o])&&(l=L1(l))!=null&&(a=n[o]=l)}a!=null&&a(s,i,o)||(o=(a=s).l,Ba(a),a.fa?a=void 0:(l=a.g.g-o,a.g.g=o,a=Om(a.g,l)),o=i,a&&((l=o[Ar])?l.push(a):o[Ar]=[a]))}return 8192&r&&Or(i),!0},e[pp]=t}function L1(e){let t=(e=Zm(e))[0].g;if(e=e[1]){let n=au(e),i=Ks(su,ru,ou,e).T;return(s,r,o)=>t(s,r,o,i,n)}return t}function fl(e,t,n){e[t]=n.h}function pl(e,t,n,i){let s,r,o=n.h;e[t]=(a,l,c)=>o(a,l,c,r||=Ks(dl,fl,pl,i).T,s||=$m(i))}function $m(e){let t=e[mp];if(!t){let n=Ks(dl,fl,pl,e);t=(i,s)=>jm(i,s,n),e[mp]=t}return t}function jm(e,t,n){(function(i,s,r){let o=512&s?0:-1,a=i.length,l=a+((s=64&s?256&s:!!a&&Qa(i[a-1]))?-1:0);for(let c=0;c<l;c++)r(c-o,i[c]);if(s){i=i[a-1];for(let c in i)!isNaN(c)&&r(+c,i[c])}})(e,0|e[Ft]|(n.T[1]?512:0),(i,s)=>{if(s!=null){var r=function(o,a){var l=o[a];if(l)return l;if((l=o.ga)&&(l=l[a])){var c=(l=Zm(l))[0].h;if(l=l[1]){let h=$m(l),d=Ks(dl,fl,pl,l).T;l=o.la?qm(d,h):(u,m,g)=>c(u,m,g,d,h)}else l=c;return o[a]=l}}(n,i);r&&r(t,s,i)}}),(e=Uh(e))&&function(i,s){Ir(i,i.g.end());for(let r=0;r<s.length;r++)Ir(i,Ph(s[r])||new Uint8Array(0))}(t,e)}function Gr(e,t){if(Array.isArray(t)){var n=0|t[Ft];if(4&n)return t;for(var i=0,s=0;i<t.length;i++){let r=e(t[i]);r!=null&&(t[s++]=r)}return s<i&&(t.length=s),Je(t,-6145&(5|n)),2&n&&Object.freeze(t),t}}function Sn(e,t,n){return new Vr(e,t,n)}function Wr(e,t,n){return new Vr(e,t,n)}function bn(e,t,n){ze(e,0|e[Ft],t,n)}var D1=ul(function(e,t,n,i,s){return e.h===2&&(e=Qo(e,gs([void 0,void 0],i,!0),s),Ms(i=0|t[Ft]),(s=Ki(t,i,n))instanceof Ni?2&s.M?((s=s.da()).push(e),ze(t,i,n,s)):s.Ja(e):Array.isArray(s)?(2&(0|s[Ft])&&ze(t,i,n,s=Pm(s)),s.push(e)):ze(t,i,n,[e]),!0)},function(e,t,n,i,s){if(t instanceof Ni)t.forEach((r,o)=>{Ya(e,n,gs([o,r],i,!1),s)});else if(Array.isArray(t))for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)&&Ya(e,n,gs(o,i,!1),s)}});function Jm(e,t,n){if(t=function(i){if(i==null)return i;let s=typeof i;if(s==="bigint")return String(qo(64,i));if(Zo(i)){if(s==="string")return bm(i);if(s==="number")return kh(i)}}(t),t!=null&&(typeof t=="string"&&fp(t),t!=null))switch(Vn(e,n,0),typeof t){case"number":e=e.g,Zs(t),Sr(e,Ae,Xe);break;case"bigint":n=BigInt.asUintN(64,t),n=new _h(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Sr(e.g,n.h,n.g);break;default:n=fp(t),Sr(e.g,n.h,n.g)}}function Qm(e,t,n){(t=Br(t))!=null&&t!=null&&(Vn(e,n,0),cl(e.g,t))}function t0(e,t,n){(t=xm(t))!=null&&(Vn(e,n,0),e.g.g.push(t?1:0))}function e0(e,t,n){(t=Cr(t))!=null&&hl(e,n,om(t))}function n0(e,t,n,i,s){Ya(e,n,Km(t,i),s)}function i0(e,t,n){t==null||typeof t=="string"||t instanceof Xi||(Ys(t)?Ys(t)&&Ih(pm):t=void 0),t!=null&&hl(e,n,Zh(t).buffer)}function s0(e,t,n){return(e.h===5||e.h===2)&&(t=zr(t,0|t[Ft],n,!1),e.h==2?ll(e,mh,t):t.push(mh(e.g)),!0)}var Vi=Sn(function(e,t,n){if(e.h!==1)return!1;var i=e.g;e=ph(i);let s=ph(i);i=2*(s>>31)+1;let r=s>>>20&2047;return e=4294967296*(1048575&s)+e,bn(t,n,r==2047?e?NaN:i*(1/0):r==0?5e-324*i*e:i*Math.pow(2,r-1075)*(e+4503599627370496)),!0},function(e,t,n){(t=Ss(t))!=null&&(Vn(e,n,1),e=e.g,(n=_m||=new DataView(new ArrayBuffer(8))).setFloat64(0,+t,!0),Ae=n.getUint32(0,!0),Xe=n.getUint32(4,!0),$o(e,Ae),$o(e,Xe))},_i()),Qe=Sn(function(e,t,n){return e.h===5&&(bn(t,n,mh(e.g)),!0)},function(e,t,n){(t=Ss(t))!=null&&(Vn(e,n,5),e=e.g,Nh(t),$o(e,Ae))},iu),U1=Wr(s0,function(e,t,n){if((t=Gr(Ss,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&(Vn(i,s,5),i=i.g,Nh(r),$o(i,Ae))}},iu),lu=Wr(s0,function(e,t,n){if((t=Gr(Ss,t))!=null&&t.length){Vn(e,n,2),Hr(e.g,4*t.length);for(let i=0;i<t.length;i++)n=e.g,Nh(t[i]),$o(n,Ae)}},iu),xs=Sn(function(e,t,n){return e.h===0&&(bn(t,n,Kh(e.g,Oh)),!0)},Jm,Vm),th=Sn(function(e,t,n){return e.h===0&&(bn(t,n,(e=Kh(e.g,Oh))===0?void 0:e),!0)},Jm,Vm),N1=Sn(function(e,t,n){return e.h===0&&(bn(t,n,Kh(e.g,Fh)),!0)},function(e,t,n){if((t=m1(t))!=null&&(typeof t=="string"&&dp(t),t!=null))switch(Vn(e,n,0),typeof t){case"number":e=e.g,Zs(t),Sr(e,Ae,Xe);break;case"bigint":n=BigInt.asUintN(64,t),n=new gh(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Sr(e.g,n.h,n.g);break;default:n=dp(t),Sr(e.g,n.h,n.g)}},_i()),Ye=Sn(function(e,t,n){return e.h===0&&(bn(t,n,vs(e.g)),!0)},Qm,nu),ml=Wr(function(e,t,n){return(e.h===0||e.h===2)&&(t=zr(t,0|t[Ft],n,!1),e.h==2?ll(e,vs,t):t.push(vs(e.g)),!0)},function(e,t,n){if((t=Gr(Br,t))!=null&&t.length){n=Jh(e,n);for(let i=0;i<t.length;i++)cl(e.g,t[i]);Qh(e,n)}},nu),Mr=Sn(function(e,t,n){return e.h===0&&(bn(t,n,(e=vs(e.g))===0?void 0:e),!0)},Qm,nu),Fe=Sn(function(e,t,n){return e.h===0&&(bn(t,n,$h(e.g)),!0)},t0,zm),br=Sn(function(e,t,n){return e.h===0&&(bn(t,n,(e=$h(e.g))===!1?void 0:e),!0)},t0,zm),pn=Wr(function(e,t,n){return e.h===2&&(e=jh(e),zr(t,0|t[Ft],n,!1).push(e),!0)},function(e,t,n){if((t=Gr(Cr,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&hl(i,s,om(r))}},eu),fs=Sn(function(e,t,n){return e.h===2&&(bn(t,n,(e=jh(e))===""?void 0:e),!0)},e0,eu),be=Sn(function(e,t,n){return e.h===2&&(bn(t,n,jh(e)),!0)},e0,eu),sn=function(e,t,n=tu){return new Vr(e,t,n)}(function(e,t,n,i,s){return e.h===2&&(i=gs(void 0,i,!0),zr(t,0|t[Ft],n,!0).push(i),Qo(e,i,s),!0)},function(e,t,n,i,s){if(Array.isArray(t))for(let r=0;r<t.length;r++)n0(e,t[r],n,i,s)}),Se=ul(function(e,t,n,i,s,r){return e.h===2&&(Im(t,0|t[Ft],r,n),Qo(e,t=Yh(t,i,n),s),!0)},n0),r0=Sn(function(e,t,n){return e.h===2&&(bn(t,n,km(e)),!0)},i0,Gm),F1=Wr(function(e,t,n){return(e.h===0||e.h===2)&&(t=zr(t,0|t[Ft],n,!1),e.h==2?ll(e,Zi,t):t.push(Zi(e.g)),!0)},function(e,t,n){if((t=Gr(ym,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&(Vn(i,s,0),Hr(i.g,r))}},Hm),O1=Sn(function(e,t,n){return e.h===0&&(bn(t,n,(e=Zi(e.g))===0?void 0:e),!0)},function(e,t,n){(t=ym(t))!=null&&t!=null&&(Vn(e,n,0),Hr(e.g,t))},Hm),zn=Sn(function(e,t,n){return e.h===0&&(bn(t,n,vs(e.g)),!0)},function(e,t,n){(t=Br(t))!=null&&(t=parseInt(t,10),Vn(e,n,0),cl(e.g,t))},Wm),vh=class{constructor(t,n){this.h=t,this.g=n,this.l=ge,this.m=Vt,this.defaultValue=void 0}register(){Ka(this)}};function vi(e,t){return new vh(e,t)}function bs(e,t){return(n,i)=>{if(Da.length){let r=Da.pop();r.o(i),Qc(r.g,n,i),n=r}else n=new class{constructor(r,o){if(up.length){let a=up.pop();Qc(a,r,o),r=a}else r=new class{constructor(a,l){this.h=null,this.m=!1,this.g=this.l=this.j=0,Qc(this,a,l)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.aa=!1}}(r,o);this.g=r,this.l=this.g.g,this.h=this.m=-1,this.o(o)}o({fa:r=!1}={}){this.fa=r}}(n,i);try{let r=new e,o=r.u;au(t)(o,n);var s=r}finally{n.g.clear(),n.m=-1,n.h=-1,Da.length<100&&Da.push(n)}return s}}function gl(e){return function(){let t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){let o=this.g;return this.g=[],o}}}};jm(this.u,t,Ks(dl,fl,pl,e)),Ir(t,t.g.end());let n=new Uint8Array(t.h),i=t.l,s=i.length,r=0;for(let o=0;o<s;o++){let a=i[o];n.set(a,r),r+=a.length}return t.l=[n],n}}var gp=class extends Pt{constructor(e){super(e)}},_p=[0,fs,Sn(function(e,t,n){return e.h===2&&(bn(t,n,(e=km(e))===qs()?void 0:e),!0)},function(e,t,n){if(t!=null){if(t instanceof Pt){let i=t.Oa;return void(i&&(t=i(t),t!=null&&hl(e,n,Zh(t).buffer)))}if(Array.isArray(t))return}i0(e,t,n)},Gm)],eh,vp=globalThis.trustedTypes;function xp(e){eh===void 0&&(eh=function(){let n=null;if(!vp)return n;try{let i=s=>s;n=vp.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n}());var t=eh;return new class{constructor(n){this.g=n}toString(){return this.g+""}}(t?t.createScriptURL(e):e)}function B1(e,...t){if(t.length===0)return xp(e[0]);let n=e[0];for(let i=0;i<t.length;i++)n+=encodeURIComponent(t[i])+e[i+1];return xp(n)}var o0=[0,Ye,zn,Fe,-1,ml,zn,-1],k1=class extends Pt{constructor(e){super(e)}},a0=[0,Fe,be,Fe,zn,-1,Wr(function(e,t,n){return(e.h===0||e.h===2)&&(t=zr(t,0|t[Ft],n,!1),e.h==2?ll(e,A1,t):t.push(vs(e.g)),!0)},function(e,t,n){if((t=Gr(Br,t))!=null&&t.length){n=Jh(e,n);for(let i=0;i<t.length;i++)cl(e.g,t[i]);Qh(e,n)}},Wm),be,-1,[0,Fe,-1],zn,Fe,-1],l0=[0,be,-2],yp=class extends Pt{constructor(e){super(e)}},c0=[0],h0=[0,Ye,Fe,1,Fe,-3],Hn=class extends Pt{constructor(e){super(e,2)}},tn={};tn[336783863]=[0,be,Fe,-1,Ye,[0,[1,2,3,4,5,6,7,8,9],Se,c0,Se,a0,Se,l0,Se,h0,Se,o0,Se,[0,be,-2],Se,[0,be,zn],Se,[0,zn,be,-1],Se,[0,zn,-1]],[0,be],Fe,[0,[1,3],[2,4],Se,[0,ml],-1,Se,[0,pn],-1,sn,[0,be,-1]],be];var Mp=[0,th,-1,br,-3,th,ml,fs,Mr,th,-1,br,Mr,br,-2,fs];function Gn(e,t){fh(e,2,kr(t),"")}function Ie(e,t){al(e,3,t)}function pe(e,t){al(e,4,t)}var Mn=class extends Pt{constructor(e){super(e,500)}o(e){return Vt(this,0,7,e)}},Go=[-1,{}],Sp=[0,be,1,Go],bp=[0,be,pn,Go];function Wn(e,t){Wa(e,1,Mn,t)}function De(e,t){al(e,10,t)}function _e(e,t){al(e,15,t)}var Ln=class extends Pt{constructor(e){super(e,500)}o(e){return Vt(this,0,1001,e)}},u0=[-500,sn,[-500,fs,-1,pn,-3,[-2,tn,Fe],sn,_p,Mr,-1,Sp,bp,sn,[0,fs,br],fs,Mp,Mr,pn,987,pn],4,sn,[-500,be,-1,[-1,{}],998,be],sn,[-500,be,pn,-1,[-2,{},Fe],997,pn,-1],Mr,sn,[-500,be,pn,Go,998,pn],pn,Mr,Sp,bp,sn,[0,fs,-1,Go],pn,-2,Mp,fs,-1,br,[0,br,O1],978,Go,sn,_p];Ln.prototype.g=gl(u0);var z1=bs(Ln,u0),H1=class extends Pt{constructor(e){super(e)}},d0=class extends Pt{constructor(e){super(e)}g(){return qi(this,H1,1)}},f0=[0,sn,[0,Ye,Qe,be,-1]],_l=bs(d0,f0),V1=class extends Pt{constructor(e){super(e)}},G1=class extends Pt{constructor(e){super(e)}},nh=class extends Pt{constructor(e){super(e)}h(){return ge(this,V1,2)}g(){return qi(this,G1,5)}},p0=bs(class extends Pt{constructor(e){super(e)}},[0,pn,ml,lu,[0,zn,[0,Ye,-3],[0,Qe,-3],[0,Ye,-1,[0,sn,[0,Ye,-2]]],sn,[0,Qe,-1,be,Qe]],be,-1,xs,sn,[0,Ye,Qe],pn,xs]),m0=class extends Pt{constructor(e){super(e)}},Er=bs(class extends Pt{constructor(e){super(e)}},[0,sn,[0,Qe,-4]]),g0=class extends Pt{constructor(e){super(e)}},ta=bs(class extends Pt{constructor(e){super(e)}},[0,sn,[0,Qe,-4]]),W1=class extends Pt{constructor(e){super(e)}},X1=[0,Ye,-1,lu,zn],_0=class extends Pt{constructor(e){super(e)}};_0.prototype.g=gl([0,Qe,-4,xs]);var Y1=class extends Pt{constructor(e){super(e)}},q1=bs(class extends Pt{constructor(e){super(e)}},[0,sn,[0,1,Ye,be,f0],xs]),Ep=class extends Pt{constructor(e){super(e)}},Z1=class extends Pt{constructor(e){super(e)}ma(){let e=Cm(this);return e??qs()}},K1=class extends Pt{constructor(e){super(e)}},v0=[1,2],$1=bs(class extends Pt{constructor(e){super(e)}},[0,sn,[0,v0,Se,[0,lu],Se,[0,r0],Ye,be],xs]),cu=class extends Pt{constructor(e){super(e)}},x0=[0,be,Ye,Qe,pn,-1],wp=class extends Pt{constructor(e){super(e)}},j1=[0,Fe,-1],Tp=class extends Pt{constructor(e){super(e)}},ka=[1,2,3,4,5],qa=class extends Pt{constructor(e){super(e)}g(){return Cm(this)!=null}h(){return ri(this,2)!=null}},Oe=class extends Pt{constructor(e){super(e)}g(){return xm(Pr(this,2))??!1}},y0=[0,r0,be,[0,Ye,xs,-1],[0,N1,xs]],Ke=[0,y0,Fe,[0,ka,Se,h0,Se,a0,Se,o0,Se,c0,Se,l0],zn],vl=class extends Pt{constructor(e){super(e)}},hu=[0,Ke,Qe,-1,Ye],J1=vi(502141897,vl);tn[502141897]=hu;var Q1=bs(class extends Pt{constructor(e){super(e)}},[0,[0,zn,-1,U1,F1],X1]),M0=class extends Pt{constructor(e){super(e)}},S0=class extends Pt{constructor(e){super(e)}},uu=[0,Ke,Qe,[0,Ke],Fe],b0=[0,Ke,hu,uu,Qe,[0,[0,y0]]],tv=vi(508968150,S0);tn[508968150]=b0,tn[508968149]=uu;var E0=class extends Pt{constructor(e){super(e)}},ev=vi(513916220,E0);tn[513916220]=[0,Ke,b0,Ye];var vr=class extends Pt{constructor(e){super(e)}h(){return ge(this,cu,2)}g(){Pe(this,2)}},w0=[0,Ke,x0];tn[478825465]=w0;var nv=class extends Pt{constructor(e){super(e)}},T0=class extends Pt{constructor(e){super(e)}},du=class extends Pt{constructor(e){super(e)}},fu=class extends Pt{constructor(e){super(e)}},A0=class extends Pt{constructor(e){super(e)}},Ap=[0,Ke,[0,Ke],w0,-1],R0=[0,Ke,Qe,Ye],pu=[0,Ke,Qe],C0=[0,Ke,R0,pu,Qe],iv=vi(479097054,A0);tn[479097054]=[0,Ke,C0,Ap],tn[463370452]=Ap,tn[464864288]=R0;var sv=vi(462713202,fu);tn[462713202]=C0,tn[474472470]=pu;var rv=class extends Pt{constructor(e){super(e)}},P0=class extends Pt{constructor(e){super(e)}},I0=class extends Pt{constructor(e){super(e)}},L0=class extends Pt{constructor(e){super(e)}},mu=[0,Ke,Qe,-1,Ye],xh=[0,Ke,Qe,Fe];L0.prototype.g=gl([0,Ke,pu,[0,Ke],hu,uu,mu,xh]);var D0=class extends Pt{constructor(e){super(e)}},ov=vi(456383383,D0);tn[456383383]=[0,Ke,x0];var U0=class extends Pt{constructor(e){super(e)}},av=vi(476348187,U0);tn[476348187]=[0,Ke,j1];var N0=class extends Pt{constructor(e){super(e)}},Rp=class extends Pt{constructor(e){super(e)}},F0=[0,zn,-1],lv=vi(458105876,class extends Pt{constructor(e){super(e)}g(){var e=this.u;let t=0|e[Ft],n=2&t;return e=function(i,s,r){var o=Rp;let a=2&s,l=!1;if(r==null){if(a)return hp();r=[]}else if(r.constructor===Ni){if(!(2&r.M)||a)return r;r=r.da()}else Array.isArray(r)?l=!!(2&(0|r[Ft])):r=[];if(a){if(!r.length)return hp();l||(l=!0,Or(r))}else l&&(l=!1,r=Pm(r));return l||(64&(0|r[Ft])?r[Ft]&=-33:32&s&&ja(r,32)),ze(i,s,2,o=new Ni(r,o,g1,void 0)),o}(e,t,Ki(e,t,2)),!n&&Rp&&(e.pa=!0),e}});tn[458105876]=[0,F0,D1,[!0,xs,[0,be,-1,pn]]];var gu=class extends Pt{constructor(e){super(e)}},O0=vi(458105758,gu);tn[458105758]=[0,Ke,be,F0];var B0=class extends Pt{constructor(e){super(e)}},cv=vi(443442058,B0);tn[443442058]=[0,Ke,be,Ye,Qe,pn,-1,Fe,Qe],tn[514774813]=mu;var k0=class extends Pt{constructor(e){super(e)}},hv=vi(516587230,k0);function yh(e,t){return t=t?t.clone():new cu,e.displayNamesLocale!==void 0?Pe(t,1,kr(e.displayNamesLocale)):e.displayNamesLocale===void 0&&Pe(t,1),e.maxResults!==void 0?Fi(t,2,e.maxResults):"maxResults"in e&&Pe(t,2),e.scoreThreshold!==void 0?Lt(t,3,e.scoreThreshold):"scoreThreshold"in e&&Pe(t,3),e.categoryAllowlist!==void 0?Xa(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&Pe(t,4),e.categoryDenylist!==void 0?Xa(t,5,e.categoryDenylist):"categoryDenylist"in e&&Pe(t,5),t}function _u(e,t=-1,n=""){return{categories:e.map(i=>({index:si(i,1)??0??-1,score:Ze(i,2)??0,categoryName:ri(i,3)??""??"",displayName:ri(i,4)??""??""})),headIndex:t,headName:n}}function z0(e){var t=Ws(e,3,Ss,Gs()),n=Ws(e,2,Br,Gs()),i=Ws(e,1,Cr,Gs()),s=Ws(e,9,Cr,Gs());let r={categories:[],keypoints:[]};for(let o=0;o<t.length;o++)r.categories.push({score:t[o],index:n[o]??-1,categoryName:i[o]??"",displayName:s[o]??""});if((t=ge(e,nh,4)?.h())&&(r.boundingBox={originX:si(t,1)??0,originY:si(t,2)??0,width:si(t,3)??0,height:si(t,4)??0,angle:0}),ge(e,nh,4)?.g().length)for(let o of ge(e,nh,4).g())r.keypoints.push({x:Oa(o,1)??0,y:Oa(o,2)??0,score:Oa(o,4)??0,label:ri(o,3)??""});return r}function xl(e){let t=[];for(let n of qi(e,g0,1))t.push({x:Ze(n,1)??0,y:Ze(n,2)??0,z:Ze(n,3)??0,visibility:Ze(n,4)??0});return t}function Wo(e){let t=[];for(let n of qi(e,m0,1))t.push({x:Ze(n,1)??0,y:Ze(n,2)??0,z:Ze(n,3)??0,visibility:Ze(n,4)??0});return t}function Cp(e){return Array.from(e,t=>t>127?t-256:t)}function Pp(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let n=0,i=0,s=0;for(let r=0;r<e.length;r++)n+=e[r]*t[r],i+=e[r]*e[r],s+=t[r]*t[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}var Ua;tn[516587230]=[0,Ke,mu,xh,Qe],tn[518928384]=xh;var uv=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function H0(){if(Ua===void 0)try{await WebAssembly.instantiate(uv),Ua=!0}catch{Ua=!1}return Ua}async function Oo(e,t=B1``){let n=await H0()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${t}/${e}_${n}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var xr=class{};function V0(){var e=navigator;return typeof OffscreenCanvas<"u"&&(!function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")}(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function Ip(e){if(typeof importScripts!="function"){let t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise((n,i)=>{t.addEventListener("load",()=>{n()},!1),t.addEventListener("error",s=>{i(s)},!1),document.body.appendChild(t)})}importScripts(e.toString())}function G0(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function Nt(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function Lp(e,t,n){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);let[i,s]=G0(t);return!e.l||i===e.i.canvas.width&&s===e.i.canvas.height||(e.i.canvas.width=i,e.i.canvas.height=s),[i,s]}function Dp(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");let i=new Uint32Array(t.length);for(let s=0;s<t.length;s++)i[s]=e.i.stringToNewUTF8(t[s]);t=e.i._malloc(4*i.length),e.i.HEAPU32.set(i,t>>2),n(t);for(let s of i)e.i._free(s);e.i._free(t)}function Ii(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function us(e,t,n){let i=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(s,r,o)=>{r?(n(i,o),i=[]):i.push(s)}}xr.forVisionTasks=function(e){return Oo("vision",e)},xr.forTextTasks=function(e){return Oo("text",e)},xr.forGenAiExperimentalTasks=function(e){return Oo("genai_experimental",e)},xr.forGenAiTasks=function(e){return Oo("genai",e)},xr.forAudioTasks=function(e){return Oo("audio",e)},xr.isSimdSupported=function(){return H0()};async function dv(e,t,n,i){return e=await(async(s,r,o,a,l)=>{if(r&&await Ip(r),!self.ModuleFactory||o&&(await Ip(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((r=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new s(l,a)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),await e.o(i),e}function ih(e,t){let n=ge(e.baseOptions,qa,1)||new qa;typeof t=="string"?(Pe(n,2,kr(t)),Pe(n,1)):t instanceof Uint8Array&&(Pe(n,1,Dh(t,!1)),Pe(n,2)),Vt(e.baseOptions,0,1,n)}function Up(e){try{let t=e.G.length;if(t===1)throw Error(e.G[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.G.map(n=>n.message).join(", "))}finally{e.G=[]}}function Tt(e,t){e.B=Math.max(e.B,t)}function yl(e,t){e.A=new Mn,Gn(e.A,"PassThroughCalculator"),Ie(e.A,"free_memory"),pe(e.A,"free_memory_unused_out"),De(t,"free_memory"),Wn(t,e.A)}function Lr(e,t){Ie(e.A,t),pe(e.A,t+"_unused_out")}function Ml(e){e.g.addBoolToStream(!0,"free_memory",e.B)}var Mh=class{constructor(e){this.g=e,this.G=[],this.B=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){if(t){let n=e.baseOptions||{};if(e.baseOptions?.modelAssetBuffer&&e.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(ge(this.baseOptions,qa,1)?.g()||ge(this.baseOptions,qa,1)?.h()||e.baseOptions?.modelAssetBuffer||e.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(i,s){let r=ge(i.baseOptions,Tp,3);if(!r){var o=r=new Tp,a=new yp;Vo(o,4,ka,a)}"delegate"in s&&(s.delegate==="GPU"?(s=r,o=new k1,Vo(s,2,ka,o)):(s=r,o=new yp,Vo(s,4,ka,o))),Vt(i.baseOptions,0,3,r)}(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then(i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)}).then(i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),ih(this,"/model.dat"),this.m(),this.J()});if(n.modelAssetBuffer instanceof Uint8Array)ih(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return async function(i){let s=[];for(var r=0;;){let{done:o,value:a}=await i.read();if(o)break;s.push(a),r+=a.length}if(s.length===0)return new Uint8Array(0);if(s.length===1)return s[0];i=new Uint8Array(r),r=0;for(let o of s)i.set(o,r),r+=o.length;return i}(n.modelAssetBuffer).then(i=>{ih(this,i),this.m(),this.J()})}return this.m(),this.J(),Promise.resolve()}J(){}ca(){let e;if(this.g.ca(t=>{e=z1(t)}),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){this.g.attachErrorListener((n,i)=>{this.G.push(Error(i))}),this.g.Ha(),this.g.setGraph(e,t),this.A=void 0,Up(this)}finishProcessing(){this.g.finishProcessing(),Up(this)}close(){this.A=void 0,this.g.closeGraph()}};function yn(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}Mh.prototype.close=Mh.prototype.close;var Sh=class{constructor(t,n,i,s){this.g=t,this.h=n,this.m=i,this.l=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}};function Np(e,t,n){let i=e.g;if(n=yn(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(e.h,n),n}function Fp(e,t){let n=e.g,i=yn(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);let s=yn(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(e.P),n.vertexAttribPointer(e.P,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);let r=yn(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(e.J),n.vertexAttribPointer(e.J,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new Sh(n,i,s,r)}function vu(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function ea(e,t,n,i){return vu(e,t),e.h||(e.m(),e.C()),n?(e.s||(e.s=Fp(e,!0)),n=e.s):(e.v||(e.v=Fp(e,!1)),n=e.v),t.useProgram(e.h),n.bind(),e.l(),e=i(),n.g.bindVertexArray(null),e}function ys(e,t,n){return vu(e,t),e=yn(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function Sl(e,t,n){vu(e,t),e.A||(e.A=yn(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.A),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function xu(e){e.g?.bindFramebuffer(e.g.FRAMEBUFFER,null)}var Xr=class{G(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){let e=this.g;if(this.h=yn(e.createProgram(),"Failed to create WebGL program"),this.Z=Np(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.Y=Np(this,this.G(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.P=e.getAttribLocation(this.h,"aVertex"),this.J=e.getAttribLocation(this.h,"aTex")}C(){}l(){}close(){if(this.h){let e=this.g;e.deleteProgram(this.h),e.deleteShader(this.Z),e.deleteShader(this.Y)}this.A&&this.g.deleteFramebuffer(this.A),this.v&&this.v.close(),this.s&&this.s.close()}},fv=class extends Xr{G(){return`
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `}C(){let e=this.g;e.activeTexture(e.TEXTURE1),this.B=ys(this,e,e.LINEAR),e.activeTexture(e.TEXTURE2),this.j=ys(this,e,e.NEAREST)}m(){super.m();let e=this.g;this.L=yn(e.getUniformLocation(this.h,"backgroundTexture"),"Uniform location"),this.U=yn(e.getUniformLocation(this.h,"colorMappingTexture"),"Uniform location"),this.K=yn(e.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();let e=this.g;e.uniform1i(this.K,0),e.uniform1i(this.L,1),e.uniform1i(this.U,2)}close(){this.B&&this.g.deleteTexture(this.B),this.j&&this.g.deleteTexture(this.j),super.close()}},pv=class extends Xr{G(){return`
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `}C(){let e=this.g;e.activeTexture(e.TEXTURE1),this.j=ys(this,e),e.activeTexture(e.TEXTURE2),this.B=ys(this,e)}m(){super.m();let e=this.g;this.K=yn(e.getUniformLocation(this.h,"defaultTexture"),"Uniform location"),this.L=yn(e.getUniformLocation(this.h,"overlayTexture"),"Uniform location"),this.H=yn(e.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();let e=this.g;e.uniform1i(this.H,0),e.uniform1i(this.K,1),e.uniform1i(this.L,2)}close(){this.j&&this.g.deleteTexture(this.j),this.B&&this.g.deleteTexture(this.B),super.close()}};function Gi(e,t){switch(t){case 0:return e.g.find(n=>n instanceof Uint8Array);case 1:return e.g.find(n=>n instanceof Float32Array);case 2:return e.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function bh(e){var t=Gi(e,1);if(!t){if(t=Gi(e,0))t=new Float32Array(t).map(i=>i/255);else{t=new Float32Array(e.width*e.height);let i=Dr(e);var n=yu(e);if(Sl(n,i,W0(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(e.width*e.height*4),i.readPixels(0,0,e.width,e.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<t.length;++s,r+=4)t[s]=n[r]}else i.readPixels(0,0,e.width,e.height,i.RED,i.FLOAT,t)}e.g.push(t)}return t}function W0(e){let t=Gi(e,2);if(!t){let n=Dr(e);t=Y0(e);let i=bh(e),s=X0(e);n.texImage2D(n.TEXTURE_2D,0,s,e.width,e.height,0,n.RED,n.FLOAT,i),Eh(e)}return t}function Dr(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=yn(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function X0(e){if(e=Dr(e),!Na)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))Na=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Na=e.R16F}return Na}function yu(e){return e.l||(e.l=new Xr),e.l}function Y0(e){let t=Dr(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=Gi(e,2);return n||(n=ys(yu(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.j=!0),t.bindTexture(t.TEXTURE_2D,n),n}function Eh(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var Na,nn=class{constructor(e,t,n,i,s,r,o){this.g=e,this.m=t,this.j=n,this.canvas=i,this.l=s,this.width=r,this.height=o,this.j&&--Op===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Da(){return!!Gi(this,0)}ja(){return!!Gi(this,1)}R(){return!!Gi(this,2)}ia(){return(t=Gi(e=this,0))||(t=bh(e),t=new Uint8Array(t.map(n=>255*n)),e.g.push(t)),t;var e,t}ha(){return bh(this)}N(){return W0(this)}clone(){let e=[];for(let t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{let i=Dr(this),s=yu(this);i.activeTexture(i.TEXTURE1),n=ys(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);let r=X0(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),Sl(s,i,n),ea(s,i,!1,()=>{Y0(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Eh(this)}),xu(s),Eh(this)}}e.push(n)}return new nn(e,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Dr(this).deleteTexture(Gi(this,2)),Op=-1}};nn.prototype.close=nn.prototype.close,nn.prototype.clone=nn.prototype.clone,nn.prototype.getAsWebGLTexture=nn.prototype.N,nn.prototype.getAsFloat32Array=nn.prototype.ha,nn.prototype.getAsUint8Array=nn.prototype.ia,nn.prototype.hasWebGLTexture=nn.prototype.R,nn.prototype.hasFloat32Array=nn.prototype.ja,nn.prototype.hasUint8Array=nn.prototype.Da;var Op=250,mv={color:"white",lineWidth:4,radius:6};function sh(e){return{...mv,fillColor:(e=e||{}).color,...e}}function Hi(e,t){return e instanceof Function?e(t):e}function Bp(e,t,n){return Math.max(Math.min(t,n),Math.min(Math.max(t,n),e))}function Bo(e){if(!e.l)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return e.l}function jo(e){if(!e.j)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return e.j}function kp(e,t,n){if(t.R())n(t.N());else{let i=t.ja()?t.ha():t.ia();e.m=e.m??new Xr;let s=jo(e);n((e=new nn([i],t.m,!1,s.canvas,e.m,t.width,t.height)).N()),e.close()}}function zp(e,t,n,i){let s=function(a){return a.g||(a.g=new fv),a.g}(e),r=jo(e),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;ea(s,r,!0,()=>{(function(l,c,h,d){let u=l.g;if(u.activeTexture(u.TEXTURE0),u.bindTexture(u.TEXTURE_2D,c),u.activeTexture(u.TEXTURE1),u.bindTexture(u.TEXTURE_2D,l.B),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,u.RGBA,u.UNSIGNED_BYTE,h),l.H&&function(m,g){if(m!==g)return!1;m=m.entries(),g=g.entries();for(let[f,p]of m){m=f;let E=p;var v=g.next();if(v.done)return!1;let[S,b]=v.value;if(v=b,m!==S||E[0]!==v[0]||E[1]!==v[1]||E[2]!==v[2]||E[3]!==v[3])return!1}return!!g.next().done}(l.H,d))u.activeTexture(u.TEXTURE2),u.bindTexture(u.TEXTURE_2D,l.j);else{l.H=d;let m=Array(1024).fill(0);d.forEach((g,v)=>{if(g.length!==4)throw Error(`Color at index ${v} is not a four-channel value.`);m[4*v]=g[0],m[4*v+1]=g[1],m[4*v+2]=g[2],m[4*v+3]=g[3]}),u.activeTexture(u.TEXTURE2),u.bindTexture(u.TEXTURE_2D,l.j),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,256,1,0,u.RGBA,u.UNSIGNED_BYTE,new Uint8Array(m))}})(s,t,o,i),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4);let a=s.g;a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,null)})}function Hp(e,t,n,i){let s=jo(e),r=function(l){return l.h||(l.h=new pv),l.h}(e),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n,a=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;ea(r,s,!0,()=>{var l=r.g;l.activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,t),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,r.j),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,o),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,r.B),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,a),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4),s.bindTexture(s.TEXTURE_2D,null),(l=r.g).activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,null)})}var fn=class{constructor(e,t){typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||e instanceof OffscreenCanvasRenderingContext2D?(this.l=e,this.j=t):this.j=e}wa(e,t){if(e){var n=Bo(this);t=sh(t),n.save();var i=n.canvas,s=0;for(let r of e)n.fillStyle=Hi(t.fillColor,{index:s,from:r}),n.strokeStyle=Hi(t.color,{index:s,from:r}),n.lineWidth=Hi(t.lineWidth,{index:s,from:r}),(e=new Path2D).arc(r.x*i.width,r.y*i.height,Hi(t.radius,{index:s,from:r}),0,2*Math.PI),n.fill(e),n.stroke(e),++s;n.restore()}}va(e,t,n){if(e&&t){var i=Bo(this);n=sh(n),i.save();var s=i.canvas,r=0;for(let o of t){i.beginPath(),t=e[o.start];let a=e[o.end];t&&a&&(i.strokeStyle=Hi(n.color,{index:r,from:t,to:a}),i.lineWidth=Hi(n.lineWidth,{index:r,from:t,to:a}),i.moveTo(t.x*s.width,t.y*s.height),i.lineTo(a.x*s.width,a.y*s.height)),++r,i.stroke()}i.restore()}}sa(e,t){let n=Bo(this);t=sh(t),n.save(),n.beginPath(),n.lineWidth=Hi(t.lineWidth,{}),n.strokeStyle=Hi(t.color,{}),n.fillStyle=Hi(t.fillColor,{}),n.moveTo(e.originX,e.originY),n.lineTo(e.originX+e.width,e.originY),n.lineTo(e.originX+e.width,e.originY+e.height),n.lineTo(e.originX,e.originY+e.height),n.lineTo(e.originX,e.originY),n.stroke(),n.fill(),n.restore()}ta(e,t,n=[0,0,0,255]){this.l?function(i,s,r,o){let a=jo(i);kp(i,s,l=>{zp(i,l,r,o),(l=Bo(i)).drawImage(a.canvas,0,0,l.canvas.width,l.canvas.height)})}(this,e,n,t):zp(this,e.N(),n,t)}ua(e,t,n){this.l?function(i,s,r,o){let a=jo(i);kp(i,s,l=>{Hp(i,l,r,o),(l=Bo(i)).drawImage(a.canvas,0,0,l.canvas.width,l.canvas.height)})}(this,e,t,n):Hp(this,e.N(),t,n)}close(){this.g?.close(),this.g=void 0,this.h?.close(),this.h=void 0,this.m?.close(),this.m=void 0}};function Ui(e,t){switch(t){case 0:return e.g.find(n=>n instanceof ImageData);case 1:return e.g.find(n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap);case 2:return e.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function q0(e){var t=Ui(e,0);if(!t){t=Ur(e);let n=bl(e),i=new Uint8Array(e.width*e.height*4);Sl(n,t,za(e)),t.readPixels(0,0,e.width,e.height,t.RGBA,t.UNSIGNED_BYTE,i),xu(n),t=new ImageData(new Uint8ClampedArray(i.buffer),e.width,e.height),e.g.push(t)}return t}function za(e){let t=Ui(e,2);if(!t){let n=Ur(e);t=Ha(e);let i=Ui(e,1)||q0(e);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),zo(e)}return t}function Ur(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=yn(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function bl(e){return e.l||(e.l=new Xr),e.l}function Ha(e){let t=Ur(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=Ui(e,2);return n||(n=ys(bl(e),t),e.g.push(n),e.m=!0),t.bindTexture(t.TEXTURE_2D,n),n}function zo(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}function Vp(e){let t=Ur(e);return ea(bl(e),t,!0,()=>function(n,i){let s=n.canvas;if(s.width===n.width&&s.height===n.height)return i();let r=s.width,o=s.height;return s.width=n.width,s.height=n.height,n=i(),s.width=r,s.height=o,n}(e,()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(e.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return e.canvas.transferToImageBitmap()}))}fn.prototype.close=fn.prototype.close,fn.prototype.drawConfidenceMask=fn.prototype.ua,fn.prototype.drawCategoryMask=fn.prototype.ta,fn.prototype.drawBoundingBox=fn.prototype.sa,fn.prototype.drawConnectors=fn.prototype.va,fn.prototype.drawLandmarks=fn.prototype.wa,fn.lerp=function(e,t,n,i,s){return Bp(i*(1-(e-t)/(n-t))+s*(1-(n-e)/(n-t)),i,s)},fn.clamp=Bp;var cn=class{constructor(e,t,n,i,s,r,o){this.g=e,this.j=t,this.m=n,this.canvas=i,this.l=s,this.width=r,this.height=o,(this.j||this.m)&&--Gp===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ca(){return!!Ui(this,0)}ka(){return!!Ui(this,1)}R(){return!!Ui(this,2)}Aa(){return q0(this)}za(){var e=Ui(this,1);return e||(za(this),Ha(this),e=Vp(this),zo(this),this.g.push(e),this.j=!0),e}N(){return za(this)}clone(){let e=[];for(let t of this.g){let n;if(t instanceof ImageData)n=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){let i=Ur(this),s=bl(this);i.activeTexture(i.TEXTURE1),n=ys(s,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),Sl(s,i,n),ea(s,i,!1,()=>{Ha(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),zo(this)}),xu(s),zo(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);za(this),Ha(this),n=Vp(this),zo(this)}e.push(n)}return new cn(e,this.ka(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Ui(this,1).close(),this.m&&Ur(this).deleteTexture(Ui(this,2)),Gp=-1}};cn.prototype.close=cn.prototype.close,cn.prototype.clone=cn.prototype.clone,cn.prototype.getAsWebGLTexture=cn.prototype.N,cn.prototype.getAsImageBitmap=cn.prototype.za,cn.prototype.getAsImageData=cn.prototype.Aa,cn.prototype.hasWebGLTexture=cn.prototype.R,cn.prototype.hasImageBitmap=cn.prototype.ka,cn.prototype.hasImageData=cn.prototype.Ca;var Gp=250;function xi(...e){return e.map(([t,n])=>({start:t,end:n}))}var gv=function(e){return class extends e{Ha(){this.i._registerModelResourcesGraphService()}}}((Wp=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:V0()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){let t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){let n=e.length,i=this.i._malloc(n);this.i.HEAPU8.set(e,i),t?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(e,t,n,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Nt(this,i||"input_audio",r=>{Nt(this,s=s||"audio_header",o=>{this.i._configureAudio(r,o,e,t??0,n)})})}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}ca(e){Ii(this,"__graph_config__",t=>{e(t)}),Nt(this,"__graph_config__",t=>{this.i._getGraphConfig(t,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,i,s){let r=4*e.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(e,this.g/4),Nt(this,i,o=>{this.i._addAudioToInputStream(this.g,t,n,o,s)})}addGpuBufferToStream(e,t,n){Nt(this,t,i=>{let[s,r]=Lp(this,e,i);this.i._addBoundTextureToStream(i,s,r,n)})}addBoolToStream(e,t,n){Nt(this,t,i=>{this.i._addBoolToInputStream(e,i,n)})}addDoubleToStream(e,t,n){Nt(this,t,i=>{this.i._addDoubleToInputStream(e,i,n)})}addFloatToStream(e,t,n){Nt(this,t,i=>{this.i._addFloatToInputStream(e,i,n)})}addIntToStream(e,t,n){Nt(this,t,i=>{this.i._addIntToInputStream(e,i,n)})}addUintToStream(e,t,n){Nt(this,t,i=>{this.i._addUintToInputStream(e,i,n)})}addStringToStream(e,t,n){Nt(this,t,i=>{Nt(this,e,s=>{this.i._addStringToInputStream(s,i,n)})})}addStringRecordToStream(e,t,n){Nt(this,t,i=>{Dp(this,Object.keys(e),s=>{Dp(this,Object.values(e),r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(e).length,i,n)})})})}addProtoToStream(e,t,n,i){Nt(this,n,s=>{Nt(this,t,r=>{let o=this.i._malloc(e.length);this.i.HEAPU8.set(e,o),this.i._addProtoToInputStream(o,e.length,r,s,i),this.i._free(o)})})}addEmptyPacketToStream(e,t){Nt(this,e,n=>{this.i._addEmptyPacketToInputStream(n,t)})}addBoolVectorToStream(e,t,n){Nt(this,t,i=>{let s=this.i._allocateBoolVector(e.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(let r of e)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,n)})}addDoubleVectorToStream(e,t,n){Nt(this,t,i=>{let s=this.i._allocateDoubleVector(e.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(let r of e)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,n)})}addFloatVectorToStream(e,t,n){Nt(this,t,i=>{let s=this.i._allocateFloatVector(e.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(let r of e)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,n)})}addIntVectorToStream(e,t,n){Nt(this,t,i=>{let s=this.i._allocateIntVector(e.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(let r of e)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,n)})}addUintVectorToStream(e,t,n){Nt(this,t,i=>{let s=this.i._allocateUintVector(e.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of e)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,n)})}addStringVectorToStream(e,t,n){Nt(this,t,i=>{let s=this.i._allocateStringVector(e.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(let r of e)Nt(this,r,o=>{this.i._addStringVectorEntry(s,o)});this.i._addStringVectorToInputStream(s,i,n)})}addBoolToInputSidePacket(e,t){Nt(this,t,n=>{this.i._addBoolToInputSidePacket(e,n)})}addDoubleToInputSidePacket(e,t){Nt(this,t,n=>{this.i._addDoubleToInputSidePacket(e,n)})}addFloatToInputSidePacket(e,t){Nt(this,t,n=>{this.i._addFloatToInputSidePacket(e,n)})}addIntToInputSidePacket(e,t){Nt(this,t,n=>{this.i._addIntToInputSidePacket(e,n)})}addUintToInputSidePacket(e,t){Nt(this,t,n=>{this.i._addUintToInputSidePacket(e,n)})}addStringToInputSidePacket(e,t){Nt(this,t,n=>{Nt(this,e,i=>{this.i._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(e,t,n){Nt(this,n,i=>{Nt(this,t,s=>{let r=this.i._malloc(e.length);this.i.HEAPU8.set(e,r),this.i._addProtoToInputSidePacket(r,e.length,s,i),this.i._free(r)})})}addBoolVectorToInputSidePacket(e,t){Nt(this,t,n=>{let i=this.i._allocateBoolVector(e.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(let s of e)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(e,t){Nt(this,t,n=>{let i=this.i._allocateDoubleVector(e.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(let s of e)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(e,t){Nt(this,t,n=>{let i=this.i._allocateFloatVector(e.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(let s of e)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(e,t){Nt(this,t,n=>{let i=this.i._allocateIntVector(e.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(let s of e)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(e,t){Nt(this,t,n=>{let i=this.i._allocateUintVector(e.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of e)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(e,t){Nt(this,t,n=>{let i=this.i._allocateStringVector(e.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(let s of e)Nt(this,s,r=>{this.i._addStringVectorEntry(i,r)});this.i._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(e,t){Ii(this,e,t),Nt(this,e,n=>{this.i._attachBoolListener(n)})}attachBoolVectorListener(e,t){us(this,e,t),Nt(this,e,n=>{this.i._attachBoolVectorListener(n)})}attachIntListener(e,t){Ii(this,e,t),Nt(this,e,n=>{this.i._attachIntListener(n)})}attachIntVectorListener(e,t){us(this,e,t),Nt(this,e,n=>{this.i._attachIntVectorListener(n)})}attachUintListener(e,t){Ii(this,e,t),Nt(this,e,n=>{this.i._attachUintListener(n)})}attachUintVectorListener(e,t){us(this,e,t),Nt(this,e,n=>{this.i._attachUintVectorListener(n)})}attachDoubleListener(e,t){Ii(this,e,t),Nt(this,e,n=>{this.i._attachDoubleListener(n)})}attachDoubleVectorListener(e,t){us(this,e,t),Nt(this,e,n=>{this.i._attachDoubleVectorListener(n)})}attachFloatListener(e,t){Ii(this,e,t),Nt(this,e,n=>{this.i._attachFloatListener(n)})}attachFloatVectorListener(e,t){us(this,e,t),Nt(this,e,n=>{this.i._attachFloatVectorListener(n)})}attachStringListener(e,t){Ii(this,e,t),Nt(this,e,n=>{this.i._attachStringListener(n)})}attachStringVectorListener(e,t){us(this,e,t),Nt(this,e,n=>{this.i._attachStringVectorListener(n)})}attachProtoListener(e,t,n){Ii(this,e,t),Nt(this,e,i=>{this.i._attachProtoListener(i,n||!1)})}attachProtoVectorListener(e,t,n){us(this,e,t),Nt(this,e,i=>{this.i._attachProtoVectorListener(i,n||!1)})}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Ii(this,e,(i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,s)}),Nt(this,e,i=>{this.i._attachAudioListener(i,n||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Wp{get ea(){return this.i}oa(e,t,n){Nt(this,t,i=>{let[s,r]=Lp(this,e,i);this.ea._addBoundTextureAsImageToStream(i,s,r,n)})}V(e,t){Ii(this,e,t),Nt(this,e,n=>{this.ea._attachImageListener(n)})}ba(e,t){us(this,e,t),Nt(this,e,n=>{this.ea._attachImageVectorListener(n)})}})),Wp,oi=class extends gv{};async function fe(e,t,n){return async function(i,s,r,o){return dv(i,s,r,o)}(e,n.canvas??(V0()?void 0:document.createElement("canvas")),t,n)}function Z0(e,t,n,i){if(e.U){let r=new _0;if(n?.regionOfInterest){if(!e.na)throw Error("This task doesn't support region-of-interest.");var s=n.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(s.left<0||s.top<0||s.right>1||s.bottom>1)throw Error("Expected RectF values to be in [0,1].");Lt(r,1,(s.left+s.right)/2),Lt(r,2,(s.top+s.bottom)/2),Lt(r,4,s.right-s.left),Lt(r,3,s.bottom-s.top)}else Lt(r,1,.5),Lt(r,2,.5),Lt(r,4,1),Lt(r,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90\xB0.");if(Lt(r,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){let[o,a]=G0(t);n=Ze(r,3)*a/o,s=Ze(r,4)*o/a,Lt(r,4,n),Lt(r,3,s)}}e.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",e.U,i)}e.g.oa(t,e.Z,i??performance.now()),e.finishProcessing()}function ai(e,t,n){if(e.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Z0(e,t,n,e.B+1)}function Oi(e,t,n,i){if(!e.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Z0(e,t,n,i)}function Nr(e,t,n,i){var s=t.data;let r=t.width,o=r*(t=t.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==o)throw Error("Unsupported channel count: "+s.length/o);return e=new nn([s],n,!1,e.g.i.canvas,e.P,r,t),i?e.clone():e}var In=class extends Mh{constructor(e,t,n,i){super(e),this.g=e,this.Z=t,this.U=n,this.na=i,this.P=new Xr}l(e,t=!0){if("runningMode"in e&&Ko(this.baseOptions,2,!!e.runningMode&&e.runningMode!=="IMAGE"),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(e,t)}close(){this.P.close(),super.close()}};In.prototype.close=In.prototype.close;var ti=class extends In{constructor(e,t){super(new oi(e,t),"image_in","norm_rect_in",!1),this.j={detections:[]},Vt(e=this.h=new vl,0,1,t=new Oe),Lt(this.h,2,.5),Lt(this.h,3,.3)}get baseOptions(){return ge(this.h,Oe,1)}set baseOptions(e){Vt(this.h,0,1,e)}o(e){return"minDetectionConfidence"in e&&Lt(this.h,2,e.minDetectionConfidence??.5),"minSuppressionThreshold"in e&&Lt(this.h,3,e.minSuppressionThreshold??.3),this.l(e)}D(e,t){return this.j={detections:[]},ai(this,e,t),this.j}F(e,t,n){return this.j={detections:[]},Oi(this,e,n,t),this.j}m(){var e=new Ln;De(e,"image_in"),De(e,"norm_rect_in"),_e(e,"detections");let t=new Hn;gi(t,J1,this.h);let n=new Mn;Gn(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Ie(n,"IMAGE:image_in"),Ie(n,"NORM_RECT:norm_rect_in"),pe(n,"DETECTIONS:detections"),n.o(t),Wn(e,n),this.g.attachProtoVectorListener("detections",(i,s)=>{for(let r of i)i=p0(r),this.j.detections.push(z0(i));Tt(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{Tt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ti.prototype.detectForVideo=ti.prototype.F,ti.prototype.detect=ti.prototype.D,ti.prototype.setOptions=ti.prototype.o,ti.createFromModelPath=async function(e,t){return fe(ti,e,{baseOptions:{modelAssetPath:t}})},ti.createFromModelBuffer=function(e,t){return fe(ti,e,{baseOptions:{modelAssetBuffer:t}})},ti.createFromOptions=function(e,t){return fe(ti,e,t)};var Mu=xi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Su=xi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),bu=xi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),K0=xi([474,475],[475,476],[476,477],[477,474]),Eu=xi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),wu=xi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),$0=xi([469,470],[470,471],[471,472],[472,469]),Tu=xi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),j0=[...Mu,...Su,...bu,...Eu,...wu,...Tu],J0=xi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Xp(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var We=class extends In{constructor(e,t){super(new oi(e,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Vt(e=this.h=new S0,0,1,t=new Oe),this.v=new M0,Vt(this.h,0,3,this.v),this.s=new vl,Vt(this.h,0,2,this.s),Fi(this.s,4,1),Lt(this.s,2,.5),Lt(this.v,2,.5),Lt(this.h,4,.5)}get baseOptions(){return ge(this.h,Oe,1)}set baseOptions(e){Vt(this.h,0,1,e)}o(e){return"numFaces"in e&&Fi(this.s,4,e.numFaces??1),"minFaceDetectionConfidence"in e&&Lt(this.s,2,e.minFaceDetectionConfidence??.5),"minTrackingConfidence"in e&&Lt(this.h,4,e.minTrackingConfidence??.5),"minFacePresenceConfidence"in e&&Lt(this.v,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}D(e,t){return Xp(this),ai(this,e,t),this.j}F(e,t,n){return Xp(this),Oi(this,e,n,t),this.j}m(){var e=new Ln;De(e,"image_in"),De(e,"norm_rect"),_e(e,"face_landmarks");let t=new Hn;gi(t,tv,this.h);let n=new Mn;Gn(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Ie(n,"IMAGE:image_in"),Ie(n,"NORM_RECT:norm_rect"),pe(n,"NORM_LANDMARKS:face_landmarks"),n.o(t),Wn(e,n),this.g.attachProtoVectorListener("face_landmarks",(i,s)=>{for(let r of i)i=ta(r),this.j.faceLandmarks.push(xl(i));Tt(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{Tt(this,i)}),this.outputFaceBlendshapes&&(_e(e,"blendshapes"),pe(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,s)=>{if(this.outputFaceBlendshapes)for(let r of i)i=_l(r),this.j.faceBlendshapes.push(_u(i.g()??[]));Tt(this,s)}),this.g.attachEmptyPacketListener("blendshapes",i=>{Tt(this,i)})),this.outputFacialTransformationMatrixes&&(_e(e,"face_geometry"),pe(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,s)=>{if(this.outputFacialTransformationMatrixes)for(let r of i)(i=ge(Q1(r),W1,2))&&this.j.facialTransformationMatrixes.push({rows:si(i,1)??0??0,columns:si(i,2)??0??0,data:Ws(i,3,Ss,Gs()).slice()??[]});Tt(this,s)}),this.g.attachEmptyPacketListener("face_geometry",i=>{Tt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};We.prototype.detectForVideo=We.prototype.F,We.prototype.detect=We.prototype.D,We.prototype.setOptions=We.prototype.o,We.createFromModelPath=function(e,t){return fe(We,e,{baseOptions:{modelAssetPath:t}})},We.createFromModelBuffer=function(e,t){return fe(We,e,{baseOptions:{modelAssetBuffer:t}})},We.createFromOptions=function(e,t){return fe(We,e,t)},We.FACE_LANDMARKS_LIPS=Mu,We.FACE_LANDMARKS_LEFT_EYE=Su,We.FACE_LANDMARKS_LEFT_EYEBROW=bu,We.FACE_LANDMARKS_LEFT_IRIS=K0,We.FACE_LANDMARKS_RIGHT_EYE=Eu,We.FACE_LANDMARKS_RIGHT_EYEBROW=wu,We.FACE_LANDMARKS_RIGHT_IRIS=$0,We.FACE_LANDMARKS_FACE_OVAL=Tu,We.FACE_LANDMARKS_CONTOURS=j0,We.FACE_LANDMARKS_TESSELATION=J0;var Li=class extends In{constructor(e,t){super(new oi(e,t),"image_in","norm_rect",!0),Vt(e=this.j=new E0,0,1,t=new Oe)}get baseOptions(){return ge(this.j,Oe,1)}set baseOptions(e){Vt(this.j,0,1,e)}o(e){return super.l(e)}Ka(e,t,n){let i=typeof t!="function"?t:{};if(this.h=typeof t=="function"?t:n,ai(this,e,i??{}),!this.h)return this.s}m(){var e=new Ln;De(e,"image_in"),De(e,"norm_rect"),_e(e,"stylized_image");let t=new Hn;gi(t,ev,this.j);let n=new Mn;Gn(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),Ie(n,"IMAGE:image_in"),Ie(n,"NORM_RECT:norm_rect"),pe(n,"STYLIZED_IMAGE:stylized_image"),n.o(t),Wn(e,n),this.g.V("stylized_image",(i,s)=>{var r=!this.h,o=i.data,a=i.width;let l=a*(i=i.height);if(o instanceof Uint8Array)if(o.length===3*l){let c=new Uint8ClampedArray(4*l);for(let h=0;h<l;++h)c[4*h]=o[3*h],c[4*h+1]=o[3*h+1],c[4*h+2]=o[3*h+2],c[4*h+3]=255;o=new ImageData(c,a,i)}else{if(o.length!==4*l)throw Error("Unsupported channel count: "+o.length/l);o=new ImageData(new Uint8ClampedArray(o.buffer,o.byteOffset,o.length),a,i)}else if(!(o instanceof WebGLTexture))throw Error(`Unsupported format: ${o.constructor.name}`);a=new cn([o],!1,!1,this.g.i.canvas,this.P,a,i),this.s=r=r?a.clone():a,this.h&&this.h(r),Tt(this,s)}),this.g.attachEmptyPacketListener("stylized_image",i=>{this.s=null,this.h&&this.h(null),Tt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Li.prototype.stylize=Li.prototype.Ka,Li.prototype.setOptions=Li.prototype.o,Li.createFromModelPath=function(e,t){return fe(Li,e,{baseOptions:{modelAssetPath:t}})},Li.createFromModelBuffer=function(e,t){return fe(Li,e,{baseOptions:{modelAssetBuffer:t}})},Li.createFromOptions=function(e,t){return fe(Li,e,t)};var Au=xi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Yp(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function qp(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function Zp(e,t=!0){let n=[];for(let s of e){var i=_l(s);e=[];for(let r of i.g())i=t&&si(r,1)!=null?si(r,1)??0:-1,e.push({score:Ze(r,2)??0,index:i,categoryName:ri(r,3)??""??"",displayName:ri(r,4)??""??""});n.push(e)}return n}var xn=class extends In{constructor(e,t){super(new oi(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Vt(e=this.j=new A0,0,1,t=new Oe),this.s=new fu,Vt(this.j,0,2,this.s),this.C=new du,Vt(this.s,0,3,this.C),this.v=new T0,Vt(this.s,0,2,this.v),this.h=new nv,Vt(this.j,0,3,this.h),Lt(this.v,2,.5),Lt(this.s,4,.5),Lt(this.C,2,.5)}get baseOptions(){return ge(this.j,Oe,1)}set baseOptions(e){Vt(this.j,0,1,e)}o(e){if(Fi(this.v,3,e.numHands??1),"minHandDetectionConfidence"in e&&Lt(this.v,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&Lt(this.s,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&Lt(this.C,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new vr,n=t,i=yh(e.cannedGesturesClassifierOptions,ge(this.h,vr,3)?.h());Vt(n,0,2,i),Vt(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&ge(this.h,vr,3)?.g();return e.customGesturesClassifierOptions?(Vt(n=t=new vr,0,2,i=yh(e.customGesturesClassifierOptions,ge(this.h,vr,4)?.h())),Vt(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&ge(this.h,vr,4)?.g(),this.l(e)}Fa(e,t){return Yp(this),ai(this,e,t),qp(this)}Ga(e,t,n){return Yp(this),Oi(this,e,n,t),qp(this)}m(){var e=new Ln;De(e,"image_in"),De(e,"norm_rect"),_e(e,"hand_gestures"),_e(e,"hand_landmarks"),_e(e,"world_hand_landmarks"),_e(e,"handedness");let t=new Hn;gi(t,iv,this.j);let n=new Mn;Gn(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Ie(n,"IMAGE:image_in"),Ie(n,"NORM_RECT:norm_rect"),pe(n,"HAND_GESTURES:hand_gestures"),pe(n,"LANDMARKS:hand_landmarks"),pe(n,"WORLD_LANDMARKS:world_hand_landmarks"),pe(n,"HANDEDNESS:handedness"),n.o(t),Wn(e,n),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(let r of i){i=ta(r);let o=[];for(let a of qi(i,g0,1))o.push({x:Ze(a,1)??0,y:Ze(a,2)??0,z:Ze(a,3)??0,visibility:Ze(a,4)??0});this.landmarks.push(o)}Tt(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{Tt(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(let r of i){i=Er(r);let o=[];for(let a of qi(i,m0,1))o.push({x:Ze(a,1)??0,y:Ze(a,2)??0,z:Ze(a,3)??0,visibility:Ze(a,4)??0});this.worldLandmarks.push(o)}Tt(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{Tt(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,s)=>{this.gestures.push(...Zp(i,!1)),Tt(this,s)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{Tt(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{this.handedness.push(...Zp(i)),Tt(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{Tt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function Kp(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}xn.prototype.recognizeForVideo=xn.prototype.Ga,xn.prototype.recognize=xn.prototype.Fa,xn.prototype.setOptions=xn.prototype.o,xn.createFromModelPath=function(e,t){return fe(xn,e,{baseOptions:{modelAssetPath:t}})},xn.createFromModelBuffer=function(e,t){return fe(xn,e,{baseOptions:{modelAssetBuffer:t}})},xn.createFromOptions=function(e,t){return fe(xn,e,t)},xn.HAND_CONNECTIONS=Au;var On=class extends In{constructor(e,t){super(new oi(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Vt(e=this.h=new fu,0,1,t=new Oe),this.s=new du,Vt(this.h,0,3,this.s),this.j=new T0,Vt(this.h,0,2,this.j),Fi(this.j,3,1),Lt(this.j,2,.5),Lt(this.s,2,.5),Lt(this.h,4,.5)}get baseOptions(){return ge(this.h,Oe,1)}set baseOptions(e){Vt(this.h,0,1,e)}o(e){return"numHands"in e&&Fi(this.j,3,e.numHands??1),"minHandDetectionConfidence"in e&&Lt(this.j,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&Lt(this.h,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&Lt(this.s,2,e.minHandPresenceConfidence??.5),this.l(e)}D(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ai(this,e,t),Kp(this)}F(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Oi(this,e,n,t),Kp(this)}m(){var e=new Ln;De(e,"image_in"),De(e,"norm_rect"),_e(e,"hand_landmarks"),_e(e,"world_hand_landmarks"),_e(e,"handedness");let t=new Hn;gi(t,sv,this.h);let n=new Mn;Gn(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Ie(n,"IMAGE:image_in"),Ie(n,"NORM_RECT:norm_rect"),pe(n,"LANDMARKS:hand_landmarks"),pe(n,"WORLD_LANDMARKS:world_hand_landmarks"),pe(n,"HANDEDNESS:handedness"),n.o(t),Wn(e,n),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(let r of i)i=ta(r),this.landmarks.push(xl(i));Tt(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{Tt(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(let r of i)i=Er(r),this.worldLandmarks.push(Wo(i));Tt(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{Tt(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{var r=this.handedness,o=r.push;let a=[];for(let l of i){i=_l(l);let c=[];for(let h of i.g())c.push({score:Ze(h,2)??0,index:si(h,1)??0??-1,categoryName:ri(h,3)??""??"",displayName:ri(h,4)??""??""});a.push(c)}o.call(r,...a),Tt(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{Tt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};On.prototype.detectForVideo=On.prototype.F,On.prototype.detect=On.prototype.D,On.prototype.setOptions=On.prototype.o,On.createFromModelPath=function(e,t){return fe(On,e,{baseOptions:{modelAssetPath:t}})},On.createFromModelBuffer=function(e,t){return fe(On,e,{baseOptions:{modelAssetBuffer:t}})},On.createFromOptions=function(e,t){return fe(On,e,t)},On.HAND_CONNECTIONS=Au;var Q0=xi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function $p(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function jp(e){try{if(!e.C)return e.h;e.C(e.h)}finally{Ml(e)}}function Fa(e,t){e=ta(e),t.push(xl(e))}var Ne=class extends In{constructor(e,t){super(new oi(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Vt(e=this.j=new L0,0,1,t=new Oe),this.K=new du,Vt(this.j,0,2,this.K),this.Y=new rv,Vt(this.j,0,3,this.Y),this.s=new vl,Vt(this.j,0,4,this.s),this.H=new M0,Vt(this.j,0,5,this.H),this.v=new P0,Vt(this.j,0,6,this.v),this.L=new I0,Vt(this.j,0,7,this.L),Lt(this.s,2,.5),Lt(this.s,3,.3),Lt(this.H,2,.5),Lt(this.v,2,.5),Lt(this.v,3,.3),Lt(this.L,2,.5),Lt(this.K,2,.5)}get baseOptions(){return ge(this.j,Oe,1)}set baseOptions(e){Vt(this.j,0,1,e)}o(e){return"minFaceDetectionConfidence"in e&&Lt(this.s,2,e.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in e&&Lt(this.s,3,e.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in e&&Lt(this.H,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&Lt(this.v,2,e.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in e&&Lt(this.v,3,e.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in e&&Lt(this.L,2,e.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&Lt(this.K,2,e.minHandLandmarksConfidence??.5),this.l(e)}D(e,t,n){let i=typeof t!="function"?t:{};return this.C=typeof t=="function"?t:n,$p(this),ai(this,e,i),jp(this)}F(e,t,n,i){let s=typeof n!="function"?n:{};return this.C=typeof n=="function"?n:i,$p(this),Oi(this,e,s,t),jp(this)}m(){var e=new Ln;De(e,"input_frames_image"),_e(e,"pose_landmarks"),_e(e,"pose_world_landmarks"),_e(e,"face_landmarks"),_e(e,"left_hand_landmarks"),_e(e,"left_hand_world_landmarks"),_e(e,"right_hand_landmarks"),_e(e,"right_hand_world_landmarks");let t=new Hn,n=new gp;fh(n,1,kr("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),function(s,r){if(r!=null)if(Array.isArray(r))Pe(s,2,sl(r,Hh,void 0,void 0,!1));else{if(!(typeof r=="string"||r instanceof Xi||Ys(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");fh(s,2,Dh(r,!1),qs())}}(n,this.j.g());let i=new Mn;Gn(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Wa(i,8,gp,n),Ie(i,"IMAGE:input_frames_image"),pe(i,"POSE_LANDMARKS:pose_landmarks"),pe(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),pe(i,"FACE_LANDMARKS:face_landmarks"),pe(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),pe(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),pe(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),pe(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),Wn(e,i),yl(this,e),this.g.attachProtoListener("pose_landmarks",(s,r)=>{Fa(s,this.h.poseLandmarks),Tt(this,r)}),this.g.attachEmptyPacketListener("pose_landmarks",s=>{Tt(this,s)}),this.g.attachProtoListener("pose_world_landmarks",(s,r)=>{var o=this.h.poseWorldLandmarks;s=Er(s),o.push(Wo(s)),Tt(this,r)}),this.g.attachEmptyPacketListener("pose_world_landmarks",s=>{Tt(this,s)}),this.outputPoseSegmentationMasks&&(pe(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Lr(this,"pose_segmentation_mask"),this.g.V("pose_segmentation_mask",(s,r)=>{this.h.poseSegmentationMasks=[Nr(this,s,!0,!this.C)],Tt(this,r)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",s=>{this.h.poseSegmentationMasks=[],Tt(this,s)})),this.g.attachProtoListener("face_landmarks",(s,r)=>{Fa(s,this.h.faceLandmarks),Tt(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",s=>{Tt(this,s)}),this.outputFaceBlendshapes&&(_e(e,"extra_blendshapes"),pe(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(s,r)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=_l(s),o.push(_u(s.g()??[]))),Tt(this,r)}),this.g.attachEmptyPacketListener("extra_blendshapes",s=>{Tt(this,s)})),this.g.attachProtoListener("left_hand_landmarks",(s,r)=>{Fa(s,this.h.leftHandLandmarks),Tt(this,r)}),this.g.attachEmptyPacketListener("left_hand_landmarks",s=>{Tt(this,s)}),this.g.attachProtoListener("left_hand_world_landmarks",(s,r)=>{var o=this.h.leftHandWorldLandmarks;s=Er(s),o.push(Wo(s)),Tt(this,r)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",s=>{Tt(this,s)}),this.g.attachProtoListener("right_hand_landmarks",(s,r)=>{Fa(s,this.h.rightHandLandmarks),Tt(this,r)}),this.g.attachEmptyPacketListener("right_hand_landmarks",s=>{Tt(this,s)}),this.g.attachProtoListener("right_hand_world_landmarks",(s,r)=>{var o=this.h.rightHandWorldLandmarks;s=Er(s),o.push(Wo(s)),Tt(this,r)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",s=>{Tt(this,s)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ne.prototype.detectForVideo=Ne.prototype.F,Ne.prototype.detect=Ne.prototype.D,Ne.prototype.setOptions=Ne.prototype.o,Ne.createFromModelPath=function(e,t){return fe(Ne,e,{baseOptions:{modelAssetPath:t}})},Ne.createFromModelBuffer=function(e,t){return fe(Ne,e,{baseOptions:{modelAssetBuffer:t}})},Ne.createFromOptions=function(e,t){return fe(Ne,e,t)},Ne.HAND_CONNECTIONS=Au,Ne.POSE_CONNECTIONS=Q0,Ne.FACE_LANDMARKS_LIPS=Mu,Ne.FACE_LANDMARKS_LEFT_EYE=Su,Ne.FACE_LANDMARKS_LEFT_EYEBROW=bu,Ne.FACE_LANDMARKS_LEFT_IRIS=K0,Ne.FACE_LANDMARKS_RIGHT_EYE=Eu,Ne.FACE_LANDMARKS_RIGHT_EYEBROW=wu,Ne.FACE_LANDMARKS_RIGHT_IRIS=$0,Ne.FACE_LANDMARKS_FACE_OVAL=Tu,Ne.FACE_LANDMARKS_CONTOURS=j0,Ne.FACE_LANDMARKS_TESSELATION=J0;var ei=class extends In{constructor(e,t){super(new oi(e,t),"input_image","norm_rect",!0),this.j={classifications:[]},Vt(e=this.h=new D0,0,1,t=new Oe)}get baseOptions(){return ge(this.h,Oe,1)}set baseOptions(e){Vt(this.h,0,1,e)}o(e){return Vt(this.h,0,2,yh(e,ge(this.h,cu,2))),this.l(e)}qa(e,t){return this.j={classifications:[]},ai(this,e,t),this.j}ra(e,t,n){return this.j={classifications:[]},Oi(this,e,n,t),this.j}m(){var e=new Ln;De(e,"input_image"),De(e,"norm_rect"),_e(e,"classifications");let t=new Hn;gi(t,ov,this.h);let n=new Mn;Gn(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Ie(n,"IMAGE:input_image"),Ie(n,"NORM_RECT:norm_rect"),pe(n,"CLASSIFICATIONS:classifications"),n.o(t),Wn(e,n),this.g.attachProtoListener("classifications",(i,s)=>{this.j=function(r){let o={classifications:qi(r,Y1,1).map(a=>_u(ge(a,d0,4)?.g()??[],si(a,2)??0,ri(a,3)??""))};return hh(Pr(r,2))!=null&&(o.timestampMs=hh(Pr(r,2))??0),o}(q1(i)),Tt(this,s)}),this.g.attachEmptyPacketListener("classifications",i=>{Tt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ei.prototype.classifyForVideo=ei.prototype.ra,ei.prototype.classify=ei.prototype.qa,ei.prototype.setOptions=ei.prototype.o,ei.createFromModelPath=function(e,t){return fe(ei,e,{baseOptions:{modelAssetPath:t}})},ei.createFromModelBuffer=function(e,t){return fe(ei,e,{baseOptions:{modelAssetBuffer:t}})},ei.createFromOptions=function(e,t){return fe(ei,e,t)};var Bn=class extends In{constructor(e,t){super(new oi(e,t),"image_in","norm_rect",!0),this.h=new U0,this.embeddings={embeddings:[]},Vt(e=this.h,0,1,t=new Oe)}get baseOptions(){return ge(this.h,Oe,1)}set baseOptions(e){Vt(this.h,0,1,e)}o(e){var t=this.h,n=ge(this.h,wp,2);return n=n?n.clone():new wp,e.l2Normalize!==void 0?Ko(n,1,e.l2Normalize):"l2Normalize"in e&&Pe(n,1),e.quantize!==void 0?Ko(n,2,e.quantize):"quantize"in e&&Pe(n,2),Vt(t,0,2,n),this.l(e)}xa(e,t){return ai(this,e,t),this.embeddings}ya(e,t,n){return Oi(this,e,n,t),this.embeddings}m(){var e=new Ln;De(e,"image_in"),De(e,"norm_rect"),_e(e,"embeddings_out");let t=new Hn;gi(t,av,this.h);let n=new Mn;Gn(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Ie(n,"IMAGE:image_in"),Ie(n,"NORM_RECT:norm_rect"),pe(n,"EMBEDDINGS:embeddings_out"),n.o(t),Wn(e,n),this.g.attachProtoListener("embeddings_out",(i,s)=>{i=$1(i),this.embeddings=function(r){return{embeddings:qi(r,K1,1).map(o=>{let a={headIndex:si(o,3)??0??-1,headName:ri(o,4)??""??""};if(Lm(o,Ep,Jc(o,1))!==void 0)o=Ws(o=ge(o,Ep,Jc(o,1)),1,Ss,Gs()),a.floatEmbedding=o.slice();else{let l=new Uint8Array(0);a.quantizedEmbedding=ge(o,Z1,Jc(o,2))?.ma()?.h()??l}return a}),timestampMs:hh(Pr(r,2))??0}}(i),Tt(this,s)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{Tt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Bn.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=Pp(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=Pp(Cp(e.quantizedEmbedding),Cp(t.quantizedEmbedding))}return e},Bn.prototype.embedForVideo=Bn.prototype.ya,Bn.prototype.embed=Bn.prototype.xa,Bn.prototype.setOptions=Bn.prototype.o,Bn.createFromModelPath=function(e,t){return fe(Bn,e,{baseOptions:{modelAssetPath:t}})},Bn.createFromModelBuffer=function(e,t){return fe(Bn,e,{baseOptions:{modelAssetBuffer:t}})},Bn.createFromOptions=function(e,t){return fe(Bn,e,t)};var wh=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach(e=>{e.close()}),this.categoryMask?.close()}};function Jp(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function Qp(e){try{let t=new wh(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{Ml(e)}}wh.prototype.close=wh.prototype.close;var Cn=class extends In{constructor(e,t){super(new oi(e,t),"image_in","norm_rect",!1),this.s=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new gu,this.v=new N0,Vt(this.h,0,3,this.v),Vt(e=this.h,0,1,t=new Oe)}get baseOptions(){return ge(this.h,Oe,1)}set baseOptions(e){Vt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?Pe(this.h,2,kr(e.displayNamesLocale)):"displayNamesLocale"in e&&Pe(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}J(){(function(e){let t=qi(e.ca(),Mn,1).filter(n=>(ri(n,1)??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(e.s=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(ge(t[0],Hn,7)?.l()?.g()??new Map).forEach((n,i)=>{e.s[Number(i)]=ri(n,1)??""})})(this)}segment(e,t,n){let i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:n,Jp(this),ai(this,e,i),Qp(this)}Ia(e,t,n,i){let s=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Jp(this),Oi(this,e,s,t),Qp(this)}Ba(){return this.s}m(){var e=new Ln;De(e,"image_in"),De(e,"norm_rect");let t=new Hn;gi(t,O0,this.h);let n=new Mn;Gn(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Ie(n,"IMAGE:image_in"),Ie(n,"NORM_RECT:norm_rect"),n.o(t),Wn(e,n),yl(this,e),this.outputConfidenceMasks&&(_e(e,"confidence_masks"),pe(n,"CONFIDENCE_MASKS:confidence_masks"),Lr(this,"confidence_masks"),this.g.ba("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>Nr(this,r,!0,!this.j)),Tt(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],Tt(this,i)})),this.outputCategoryMask&&(_e(e,"category_mask"),pe(n,"CATEGORY_MASK:category_mask"),Lr(this,"category_mask"),this.g.V("category_mask",(i,s)=>{this.categoryMask=Nr(this,i,!1,!this.j),Tt(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,Tt(this,i)})),_e(e,"quality_scores"),pe(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,Tt(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,Tt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Cn.prototype.getLabels=Cn.prototype.Ba,Cn.prototype.segmentForVideo=Cn.prototype.Ia,Cn.prototype.segment=Cn.prototype.segment,Cn.prototype.setOptions=Cn.prototype.o,Cn.createFromModelPath=function(e,t){return fe(Cn,e,{baseOptions:{modelAssetPath:t}})},Cn.createFromModelBuffer=function(e,t){return fe(Cn,e,{baseOptions:{modelAssetBuffer:t}})},Cn.createFromOptions=function(e,t){return fe(Cn,e,t)};var Th=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach(e=>{e.close()}),this.categoryMask?.close()}};Th.prototype.close=Th.prototype.close;var _v=class extends Pt{constructor(e){super(e)}},yr=[0,Ye,-2],Za=[0,Vi,-3,Fe,Vi,-1],tm=[0,Za],em=[0,Za,Ye,-1],rh=class extends Pt{constructor(e){super(e)}},nm=[0,Vi,-1,Fe],vv=class extends Pt{constructor(e){super(e)}},im=class extends Pt{constructor(e){super(e)}},Ah=[1,2,3,4,5,6,7,8,9,10,14,15],tg=class extends Pt{constructor(e){super(e)}};tg.prototype.g=gl([0,sn,[0,Ah,Se,Za,Se,[0,Za,yr],Se,tm,Se,[0,tm,yr],Se,nm,Se,[0,Vi,-3,Fe,zn],Se,[0,Vi,-3,Fe],Se,[0,be,Vi,-2,Fe,Ye,Fe,-1,2,Vi,yr],Se,em,Se,[0,em,yr],Vi,yr,be,Se,[0,Vi,-3,Fe,yr,-1],Se,[0,sn,nm]],be,[0,be,Ye,-1,Fe]]);var Di=class extends In{constructor(e,t){super(new oi(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new gu,this.s=new N0,Vt(this.h,0,3,this.s),Vt(e=this.h,0,1,t=new Oe)}get baseOptions(){return ge(this.h,Oe,1)}set baseOptions(e){Vt(this.h,0,1,e)}o(e){return"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}segment(e,t,n,i){let s=typeof n!="function"?n:{};this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.B+1,i=new tg;let r=new im;var o=new _v;if(Fi(o,1,255),Vt(r,0,12,o),t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var a=new rh;Ko(a,3,!0),Lt(a,1,t.keypoint.x),Lt(a,2,t.keypoint.y),Vo(r,5,Ah,a)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");for(a of(o=new vv,t.scribble))Ko(t=new rh,3,!0),Lt(t,1,a.x),Lt(t,2,a.y),Wa(o,1,rh,t);Vo(r,15,Ah,o)}Wa(i,1,im,r),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",n),ai(this,e,s);t:{try{let c=new Th(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var l=c;break t}this.j(c)}finally{Ml(this)}l=void 0}return l}m(){var e=new Ln;De(e,"image_in"),De(e,"roi_in"),De(e,"norm_rect_in");let t=new Hn;gi(t,O0,this.h);let n=new Mn;Gn(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),Ie(n,"IMAGE:image_in"),Ie(n,"ROI:roi_in"),Ie(n,"NORM_RECT:norm_rect_in"),n.o(t),Wn(e,n),yl(this,e),this.outputConfidenceMasks&&(_e(e,"confidence_masks"),pe(n,"CONFIDENCE_MASKS:confidence_masks"),Lr(this,"confidence_masks"),this.g.ba("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>Nr(this,r,!0,!this.j)),Tt(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],Tt(this,i)})),this.outputCategoryMask&&(_e(e,"category_mask"),pe(n,"CATEGORY_MASK:category_mask"),Lr(this,"category_mask"),this.g.V("category_mask",(i,s)=>{this.categoryMask=Nr(this,i,!1,!this.j),Tt(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,Tt(this,i)})),_e(e,"quality_scores"),pe(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,Tt(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,Tt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Di.prototype.segment=Di.prototype.segment,Di.prototype.setOptions=Di.prototype.o,Di.createFromModelPath=function(e,t){return fe(Di,e,{baseOptions:{modelAssetPath:t}})},Di.createFromModelBuffer=function(e,t){return fe(Di,e,{baseOptions:{modelAssetBuffer:t}})},Di.createFromOptions=function(e,t){return fe(Di,e,t)};var ni=class extends In{constructor(e,t){super(new oi(e,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Vt(e=this.h=new B0,0,1,t=new Oe)}get baseOptions(){return ge(this.h,Oe,1)}set baseOptions(e){Vt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?Pe(this.h,2,kr(e.displayNamesLocale)):"displayNamesLocale"in e&&Pe(this.h,2),e.maxResults!==void 0?Fi(this.h,3,e.maxResults):"maxResults"in e&&Pe(this.h,3),e.scoreThreshold!==void 0?Lt(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&Pe(this.h,4),e.categoryAllowlist!==void 0?Xa(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&Pe(this.h,5),e.categoryDenylist!==void 0?Xa(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&Pe(this.h,6),this.l(e)}D(e,t){return this.j={detections:[]},ai(this,e,t),this.j}F(e,t,n){return this.j={detections:[]},Oi(this,e,n,t),this.j}m(){var e=new Ln;De(e,"input_frame_gpu"),De(e,"norm_rect"),_e(e,"detections");let t=new Hn;gi(t,cv,this.h);let n=new Mn;Gn(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),Ie(n,"IMAGE:input_frame_gpu"),Ie(n,"NORM_RECT:norm_rect"),pe(n,"DETECTIONS:detections"),n.o(t),Wn(e,n),this.g.attachProtoVectorListener("detections",(i,s)=>{for(let r of i)i=p0(r),this.j.detections.push(z0(i));Tt(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{Tt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ni.prototype.detectForVideo=ni.prototype.F,ni.prototype.detect=ni.prototype.D,ni.prototype.setOptions=ni.prototype.o,ni.createFromModelPath=async function(e,t){return fe(ni,e,{baseOptions:{modelAssetPath:t}})},ni.createFromModelBuffer=function(e,t){return fe(ni,e,{baseOptions:{modelAssetBuffer:t}})},ni.createFromOptions=function(e,t){return fe(ni,e,t)};var Rh=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach(e=>{e.close()})}};function sm(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function rm(e){try{let t=new Rh(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.s)return t;e.s(t)}finally{Ml(e)}}Rh.prototype.close=Rh.prototype.close;var kn=class extends In{constructor(e,t){super(new oi(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Vt(e=this.h=new k0,0,1,t=new Oe),this.v=new I0,Vt(this.h,0,3,this.v),this.j=new P0,Vt(this.h,0,2,this.j),Fi(this.j,4,1),Lt(this.j,2,.5),Lt(this.v,2,.5),Lt(this.h,4,.5)}get baseOptions(){return ge(this.h,Oe,1)}set baseOptions(e){Vt(this.h,0,1,e)}o(e){return"numPoses"in e&&Fi(this.j,4,e.numPoses??1),"minPoseDetectionConfidence"in e&&Lt(this.j,2,e.minPoseDetectionConfidence??.5),"minTrackingConfidence"in e&&Lt(this.h,4,e.minTrackingConfidence??.5),"minPosePresenceConfidence"in e&&Lt(this.v,2,e.minPosePresenceConfidence??.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}D(e,t,n){let i=typeof t!="function"?t:{};return this.s=typeof t=="function"?t:n,sm(this),ai(this,e,i),rm(this)}F(e,t,n,i){let s=typeof n!="function"?n:{};return this.s=typeof n=="function"?n:i,sm(this),Oi(this,e,s,t),rm(this)}m(){var e=new Ln;De(e,"image_in"),De(e,"norm_rect"),_e(e,"normalized_landmarks"),_e(e,"world_landmarks"),_e(e,"segmentation_masks");let t=new Hn;gi(t,hv,this.h);let n=new Mn;Gn(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Ie(n,"IMAGE:image_in"),Ie(n,"NORM_RECT:norm_rect"),pe(n,"NORM_LANDMARKS:normalized_landmarks"),pe(n,"WORLD_LANDMARKS:world_landmarks"),n.o(t),Wn(e,n),yl(this,e),this.g.attachProtoVectorListener("normalized_landmarks",(i,s)=>{this.landmarks=[];for(let r of i)i=ta(r),this.landmarks.push(xl(i));Tt(this,s)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],Tt(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,s)=>{this.worldLandmarks=[];for(let r of i)i=Er(r),this.worldLandmarks.push(Wo(i));Tt(this,s)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],Tt(this,i)}),this.outputSegmentationMasks&&(pe(n,"SEGMENTATION_MASK:segmentation_masks"),Lr(this,"segmentation_masks"),this.g.ba("segmentation_masks",(i,s)=>{this.segmentationMasks=i.map(r=>Nr(this,r,!0,!this.s)),Tt(this,s)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],Tt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};kn.prototype.detectForVideo=kn.prototype.F,kn.prototype.detect=kn.prototype.D,kn.prototype.setOptions=kn.prototype.o,kn.createFromModelPath=function(e,t){return fe(kn,e,{baseOptions:{modelAssetPath:t}})},kn.createFromModelBuffer=function(e,t){return fe(kn,e,{baseOptions:{modelAssetBuffer:t}})},kn.createFromOptions=function(e,t){return fe(kn,e,t)},kn.POSE_CONNECTIONS=Q0;var Mf="169",dr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xv=0,eg=1,yv=2;var e_=1,Mv=2,es=3,Ds=0,vn=1,Ei=2,ki=0,uo=1,go=2,ng=3,ig=4,Sv=5,ir=100,bv=101,Ev=102,wv=103,Tv=104,Av=200,Rv=201,Cv=202,Pv=203,sd=204,rd=205,Iv=206,Lv=207,Dv=208,Uv=209,Nv=210,Fv=211,Ov=212,Bv=213,kv=214,od=0,ad=1,ld=2,_o=3,cd=4,hd=5,ud=6,dd=7,n_=0,zv=1,Hv=2,Ls=0,Sf=1,bf=2,Ef=3,wf=4,Vv=5,Tf=6,Af=7;var i_=300,vo=301,xo=302,fd=303,pd=304,Ac=306,md=1e3,rr=1001,gd=1002,hi=1003,Gv=1004;var El=1005;var wi=1006,Ru=1007;var or=1008;var rs=1009,s_=1010,r_=1011,pa=1012,Rf=1013,ar=1014,ns=1015,Pi=1016,Cf=1017,Pf=1018,yo=1020,o_=35902,a_=1021,l_=1022,Ai=1023,c_=1024,h_=1025,fo=1026,Mo=1027,u_=1028,If=1029,d_=1030,Lf=1031;var Df=1033,jl=33776,Jl=33777,Ql=33778,tc=33779,_d=35840,vd=35841,xd=35842,yd=35843,Md=36196,Sd=37492,bd=37496,Ed=37808,wd=37809,Td=37810,Ad=37811,Rd=37812,Cd=37813,Pd=37814,Id=37815,Ld=37816,Dd=37817,Ud=37818,Nd=37819,Fd=37820,Od=37821,ec=36492,Bd=36494,kd=36495,f_=36283,zd=36284,Hd=36285,Vd=36286;var ic=2300,Gd=2301,Cu=2302,sg=2400,rg=2401,og=2402;var Wv=3200,Xv=3201;var Yv=0,qv=1,Ps="",ci="srgb",Os="srgb-linear",Uf="display-p3",Rc="display-p3-linear",sc="linear",Re="srgb",rc="rec709",oc="p3";var Yr=7680;var ag=519,Zv=512,Kv=513,$v=514,p_=515,jv=516,Jv=517,Qv=518,tx=519,Wd=35044;var lg="300 es",is=2e3,ac=2001,os=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cg=1234567,ua=Math.PI/180,ma=180/Math.PI;function ss(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[e&255]+mn[e>>8&255]+mn[e>>16&255]+mn[e>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[n&63|128]+mn[n>>8&255]+"-"+mn[n>>16&255]+mn[n>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function _n(e,t,n){return Math.max(t,Math.min(n,e))}function Nf(e,t){return(e%t+t)%t}function ex(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function nx(e,t,n){return e!==t?(n-e)/(t-e):0}function da(e,t,n){return(1-n)*e+n*t}function ix(e,t,n,i){return da(e,t,1-Math.exp(-n*i))}function sx(e,t=1){return t-Math.abs(Nf(e,t*2)-t)}function rx(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ox(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function ax(e,t){return e+Math.floor(Math.random()*(t-e+1))}function lx(e,t){return e+Math.random()*(t-e)}function cx(e){return e*(.5-Math.random())}function hx(e){e!==void 0&&(cg=e);let t=cg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ux(e){return e*ua}function dx(e){return e*ma}function fx(e){return(e&e-1)===0&&e!==0}function px(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function mx(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function gx(e,t,n,i,s){let r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),u=o((t-i)/2),m=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":e.set(a*h,l*d,l*u,a*c);break;case"YZY":e.set(l*u,a*h,l*d,a*c);break;case"ZXZ":e.set(l*d,l*u,a*h,a*c);break;case"XZX":e.set(a*h,l*g,l*m,a*c);break;case"YXY":e.set(l*m,a*h,l*g,a*c);break;case"ZYZ":e.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ti(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function we(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var di={DEG2RAD:ua,RAD2DEG:ma,generateUUID:ss,clamp:_n,euclideanModulo:Nf,mapLinear:ex,inverseLerp:nx,lerp:da,damp:ix,pingpong:sx,smoothstep:rx,smootherstep:ox,randInt:ax,randFloat:lx,randFloatSpread:cx,seededRandom:hx,degToRad:ux,radToDeg:dx,isPowerOfTwo:fx,ceilPowerOfTwo:px,floorPowerOfTwo:mx,setQuaternionFromProperEuler:gx,normalize:we,denormalize:Ti},It=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(_n(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ae=class e{constructor(t,n,i,s,r,o,a,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,l,c)}set(t,n,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],m=i[5],g=i[8],v=s[0],f=s[3],p=s[6],E=s[1],S=s[4],b=s[7],N=s[2],R=s[5],T=s[8];return r[0]=o*v+a*E+l*N,r[3]=o*f+a*S+l*R,r[6]=o*p+a*b+l*T,r[1]=c*v+h*E+d*N,r[4]=c*f+h*S+d*R,r[7]=c*p+h*b+d*T,r[2]=u*v+m*E+g*N,r[5]=u*f+m*S+g*R,r[8]=u*p+m*b+g*T,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return n*o*h-n*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,m=c*r-o*l,g=n*d+i*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(s*c-h*i)*v,t[2]=(a*i-s*o)*v,t[3]=u*v,t[4]=(h*n-s*l)*v,t[5]=(s*r-a*n)*v,t[6]=m*v,t[7]=(i*l-c*n)*v,t[8]=(o*n-i*r)*v,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(t,n){return this.premultiply(Pu.makeScale(t,n)),this}rotate(t){return this.premultiply(Pu.makeRotation(-t)),this}translate(t,n){return this.premultiply(Pu.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Pu=new ae;function m_(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function lc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function _x(){let e=lc("canvas");return e.style.display="block",e}var hg={};function nc(e){e in hg||(hg[e]=!0,console.warn(e))}function vx(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function xx(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yx(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ug=new ae().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dg=new ae().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),na={[Os]:{transfer:sc,primaries:rc,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e,fromReference:e=>e},[ci]:{transfer:Re,primaries:rc,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[Rc]:{transfer:sc,primaries:oc,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.applyMatrix3(dg),fromReference:e=>e.applyMatrix3(ug)},[Uf]:{transfer:Re,primaries:oc,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.convertSRGBToLinear().applyMatrix3(dg),fromReference:e=>e.applyMatrix3(ug).convertLinearToSRGB()}},Mx=new Set([Os,Rc]),ve={enabled:!0,_workingColorSpace:Os,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!Mx.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let i=na[t].toReference,s=na[n].fromReference;return s(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return na[e].primaries},getTransfer:function(e){return e===Ps?sc:na[e].transfer},getLuminanceCoefficients:function(e,t=this._workingColorSpace){return e.fromArray(na[t].luminanceCoefficients)}};function po(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Iu(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var qr,Xd=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qr===void 0&&(qr=lc("canvas")),qr.width=t.width,qr.height=t.height;let i=qr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=qr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=lc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=po(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(po(n[i]/255)*255):n[i]=po(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Sx=0,cc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=ss(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Lu(s[o].image)):r.push(Lu(s[o]))}else r=Lu(s);i.url=r}return n||(t.images[this.uuid]=i),i}};function Lu(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Xd.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var bx=0,qn=class e extends os{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=rr,s=rr,r=wi,o=or,a=Ai,l=rs,c=e.DEFAULT_ANISOTROPY,h=Ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=ss(),this.name="",this.source=new cc(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==i_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case md:t.x=t.x-Math.floor(t.x);break;case rr:t.x=t.x<0?0:1;break;case gd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case md:t.y=t.y-Math.floor(t.y);break;case rr:t.y=t.y<0?0:1;break;case gd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=i_;qn.DEFAULT_ANISOTROPY=1;var $e=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],g=l[9],v=l[2],f=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(c+1)/2,b=(m+1)/2,N=(p+1)/2,R=(h+u)/4,T=(d+v)/4,B=(g+f)/4;return S>b&&S>N?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=R/i,r=T/i):b>N?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=R/s,r=B/s):N<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),i=T/r,s=B/r),this.set(i,s,r,n),this}let E=Math.sqrt((f-g)*(f-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(f-g)/E,this.y=(d-v)/E,this.z=(u-h)/E,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yd=class extends os{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new $e(0,0,t,n),this.scissorTest=!1,this.viewport=new $e(0,0,t,n);let s={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new qn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let n=Object.assign({},t.texture.image);return this.texture.source=new cc(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends Yd{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},hc=class extends qn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=hi,this.minFilter=hi,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var qd=class extends qn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=hi,this.minFilter=hi,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ri=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[n+0]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d;return}if(a===1){t[n+0]=u,t[n+1]=m,t[n+2]=g,t[n+3]=v;return}if(d!==v||l!==u||c!==m||h!==g){let f=1-a,p=l*u+c*m+h*g+d*v,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let N=Math.sqrt(S),R=Math.atan2(N,p*E);f=Math.sin(f*R)/N,a=Math.sin(a*R)/N}let b=a*E;if(l=l*f+u*b,c=c*f+m*b,h=h*f+g*b,d=d*f+v*b,f===1-a){let N=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=N,c*=N,h*=N,d*=N}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],m=r[o+2],g=r[o+3];return t[n]=a*g+h*d+l*m-c*u,t[n+1]=l*g+h*u+c*d-a*m,t[n+2]=c*g+h*m+a*u-l*d,t[n+3]=h*g-a*d-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"YZX":this._x=u*h*d+c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d-u*m*g;break;case"XZY":this._x=u*h*d-c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],d=n[10],u=i+a+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>d){let m=2*Math.sqrt(1+i-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-i-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_n(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,r=t._z,o=t._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*s+n*this._y,this._z=m*r+n*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-n)*h)/c,u=Math.sin(n*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(fg.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(fg.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,r=t.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Du.copy(this).projectOnVector(t),this.sub(Du)}reflect(t){return this.sub(Du.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(_n(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Du=new I,fg=new Ri,lr=class{constructor(t=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(yi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(yi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=yi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yi):yi.fromBufferAttribute(r,o),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wl.copy(i.boundingBox)),wl.applyMatrix4(t.matrixWorld),this.union(wl)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ia),Tl.subVectors(this.max,ia),Zr.subVectors(t.a,ia),Kr.subVectors(t.b,ia),$r.subVectors(t.c,ia),Es.subVectors(Kr,Zr),ws.subVectors($r,Kr),$s.subVectors(Zr,$r);let n=[0,-Es.z,Es.y,0,-ws.z,ws.y,0,-$s.z,$s.y,Es.z,0,-Es.x,ws.z,0,-ws.x,$s.z,0,-$s.x,-Es.y,Es.x,0,-ws.y,ws.x,0,-$s.y,$s.x,0];return!Uu(n,Zr,Kr,$r,Tl)||(n=[1,0,0,0,1,0,0,0,1],!Uu(n,Zr,Kr,$r,Tl))?!1:(Al.crossVectors(Es,ws),n=[Al.x,Al.y,Al.z],Uu(n,Zr,Kr,$r,Tl))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},$i=[new I,new I,new I,new I,new I,new I,new I,new I],yi=new I,wl=new lr,Zr=new I,Kr=new I,$r=new I,Es=new I,ws=new I,$s=new I,ia=new I,Tl=new I,Al=new I,js=new I;function Uu(e,t,n,i,s){for(let r=0,o=e.length-3;r<=o;r+=3){js.fromArray(e,r);let a=s.x*Math.abs(js.x)+s.y*Math.abs(js.y)+s.z*Math.abs(js.z),l=t.dot(js),c=n.dot(js),h=i.dot(js);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ex=new lr,sa=new I,Nu=new I,So=class{constructor(t=new I,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):Ex.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sa.subVectors(t,this.center);let n=sa.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(sa,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sa.copy(t.center).add(Nu)),this.expandByPoint(sa.copy(t.center).sub(Nu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ji=new I,Fu=new I,Rl=new I,Ts=new I,Ou=new I,Cl=new I,Bu=new I,bo=class{constructor(t=new I,n=new I(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ji)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=ji.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ji.copy(this.origin).addScaledVector(this.direction,n),ji.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Fu.copy(t).add(n).multiplyScalar(.5),Rl.copy(n).sub(t).normalize(),Ts.copy(this.origin).sub(Fu);let r=t.distanceTo(n)*.5,o=-this.direction.dot(Rl),a=Ts.dot(this.direction),l=-Ts.dot(Rl),c=Ts.lengthSq(),h=Math.abs(1-o*o),d,u,m,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let v=1/h;d*=v,u*=v,m=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Fu).addScaledVector(Rl,u),m}intersectSphere(t,n){ji.subVectors(t.center,this.origin);let i=ji.dot(this.direction),s=ji.dot(ji)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,ji)!==null}intersectTriangle(t,n,i,s,r){Ou.subVectors(n,t),Cl.subVectors(i,t),Bu.crossVectors(Ou,Cl);let o=this.direction.dot(Bu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ts.subVectors(this.origin,t);let l=a*this.direction.dot(Cl.crossVectors(Ts,Cl));if(l<0)return null;let c=a*this.direction.dot(Ou.cross(Ts));if(c<0||l+c>o)return null;let h=-a*Ts.dot(Bu);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class e{constructor(t,n,i,s,r,o,a,l,c,h,d,u,m,g,v,f){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,l,c,h,d,u,m,g,v,f)}set(t,n,i,s,r,o,a,l,c,h,d,u,m,g,v,f){let p=this.elements;return p[0]=t,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=m,p[7]=g,p[11]=v,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/jr.setFromMatrixColumn(t,0).length(),r=1/jr.setFromMatrixColumn(t,1).length(),o=1/jr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,m=o*d,g=a*h,v=a*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=m+g*c,n[5]=u-v*c,n[9]=-a*l,n[2]=v-u*c,n[6]=g+m*c,n[10]=o*l}else if(t.order==="YXZ"){let u=l*h,m=l*d,g=c*h,v=c*d;n[0]=u+v*a,n[4]=g*a-m,n[8]=o*c,n[1]=o*d,n[5]=o*h,n[9]=-a,n[2]=m*a-g,n[6]=v+u*a,n[10]=o*l}else if(t.order==="ZXY"){let u=l*h,m=l*d,g=c*h,v=c*d;n[0]=u-v*a,n[4]=-o*d,n[8]=g+m*a,n[1]=m+g*a,n[5]=o*h,n[9]=v-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(t.order==="ZYX"){let u=o*h,m=o*d,g=a*h,v=a*d;n[0]=l*h,n[4]=g*c-m,n[8]=u*c+v,n[1]=l*d,n[5]=v*c+u,n[9]=m*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(t.order==="YZX"){let u=o*l,m=o*c,g=a*l,v=a*c;n[0]=l*h,n[4]=v-u*d,n[8]=g*d+m,n[1]=d,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=m*d+g,n[10]=u-v*d}else if(t.order==="XZY"){let u=o*l,m=o*c,g=a*l,v=a*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=u*d+v,n[5]=o*h,n[9]=m*d-g,n[2]=g*d-m,n[6]=a*h,n[10]=v*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wx,t,Tx)}lookAt(t,n,i){let s=this.elements;return Xn.subVectors(t,n),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),As.crossVectors(i,Xn),As.lengthSq()===0&&(Math.abs(i.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),As.crossVectors(i,Xn)),As.normalize(),Pl.crossVectors(Xn,As),s[0]=As.x,s[4]=Pl.x,s[8]=Xn.x,s[1]=As.y,s[5]=Pl.y,s[9]=Xn.y,s[2]=As.z,s[6]=Pl.z,s[10]=Xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],m=i[13],g=i[2],v=i[6],f=i[10],p=i[14],E=i[3],S=i[7],b=i[11],N=i[15],R=s[0],T=s[4],B=s[8],nt=s[12],_=s[1],M=s[5],G=s[9],V=s[13],X=s[2],A=s[6],D=s[10],K=s[14],F=s[3],at=s[7],rt=s[11],ft=s[15];return r[0]=o*R+a*_+l*X+c*F,r[4]=o*T+a*M+l*A+c*at,r[8]=o*B+a*G+l*D+c*rt,r[12]=o*nt+a*V+l*K+c*ft,r[1]=h*R+d*_+u*X+m*F,r[5]=h*T+d*M+u*A+m*at,r[9]=h*B+d*G+u*D+m*rt,r[13]=h*nt+d*V+u*K+m*ft,r[2]=g*R+v*_+f*X+p*F,r[6]=g*T+v*M+f*A+p*at,r[10]=g*B+v*G+f*D+p*rt,r[14]=g*nt+v*V+f*K+p*ft,r[3]=E*R+S*_+b*X+N*F,r[7]=E*T+S*M+b*A+N*at,r[11]=E*B+S*G+b*D+N*rt,r[15]=E*nt+S*V+b*K+N*ft,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],v=t[7],f=t[11],p=t[15];return g*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*m-i*l*m)+v*(+n*l*m-n*c*u+r*o*u-s*o*m+s*c*h-r*l*h)+f*(+n*c*d-n*a*m-r*o*d+i*o*m+r*a*h-i*c*h)+p*(-s*a*h-n*l*d+n*a*u+s*o*d-i*o*u+i*l*h)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],v=t[13],f=t[14],p=t[15],E=d*f*c-v*u*c+v*l*m-a*f*m-d*l*p+a*u*p,S=g*u*c-h*f*c-g*l*m+o*f*m+h*l*p-o*u*p,b=h*v*c-g*d*c+g*a*m-o*v*m-h*a*p+o*d*p,N=g*d*l-h*v*l-g*a*u+o*v*u+h*a*f-o*d*f,R=n*E+i*S+s*b+r*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/R;return t[0]=E*T,t[1]=(v*u*r-d*f*r-v*s*m+i*f*m+d*s*p-i*u*p)*T,t[2]=(a*f*r-v*l*r+v*s*c-i*f*c-a*s*p+i*l*p)*T,t[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*m-i*l*m)*T,t[4]=S*T,t[5]=(h*f*r-g*u*r+g*s*m-n*f*m-h*s*p+n*u*p)*T,t[6]=(g*l*r-o*f*r-g*s*c+n*f*c+o*s*p-n*l*p)*T,t[7]=(o*u*r-h*l*r+h*s*c-n*u*c-o*s*m+n*l*m)*T,t[8]=b*T,t[9]=(g*d*r-h*v*r-g*i*m+n*v*m+h*i*p-n*d*p)*T,t[10]=(o*v*r-g*a*r+g*i*c-n*v*c-o*i*p+n*a*p)*T,t[11]=(h*a*r-o*d*r-h*i*c+n*d*c+o*i*m-n*a*m)*T,t[12]=N*T,t[13]=(h*v*s-g*d*s+g*i*u-n*v*u-h*i*f+n*d*f)*T,t[14]=(g*a*s-o*v*s-g*i*l+n*v*l+o*i*f-n*a*f)*T,t[15]=(o*d*s-h*a*s+h*i*l-n*d*l-o*i*u+n*a*u)*T,this}scale(t){let n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,h=o+o,d=a+a,u=r*c,m=r*h,g=r*d,v=o*h,f=o*d,p=a*d,E=l*c,S=l*h,b=l*d,N=i.x,R=i.y,T=i.z;return s[0]=(1-(v+p))*N,s[1]=(m+b)*N,s[2]=(g-S)*N,s[3]=0,s[4]=(m-b)*R,s[5]=(1-(u+p))*R,s[6]=(f+E)*R,s[7]=0,s[8]=(g+S)*T,s[9]=(f-E)*T,s[10]=(1-(u+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,r=jr.set(s[0],s[1],s[2]).length(),o=jr.set(s[4],s[5],s[6]).length(),a=jr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mi.copy(this);let c=1/r,h=1/o,d=1/a;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=h,Mi.elements[5]*=h,Mi.elements[6]*=h,Mi.elements[8]*=d,Mi.elements[9]*=d,Mi.elements[10]*=d,n.setFromRotationMatrix(Mi),i.x=r,i.y=o,i.z=a,this}makePerspective(t,n,i,s,r,o,a=is){let l=this.elements,c=2*r/(n-t),h=2*r/(i-s),d=(n+t)/(n-t),u=(i+s)/(i-s),m,g;if(a===is)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ac)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,s,r,o,a=is){let l=this.elements,c=1/(n-t),h=1/(i-s),d=1/(o-r),u=(n+t)*c,m=(i+s)*h,g,v;if(a===is)g=(o+r)*d,v=-2*d;else if(a===ac)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},jr=new I,Mi=new je,wx=new I(0,0,0),Tx=new I(1,1,1),As=new I,Pl=new I,Xn=new I,pg=new je,mg=new Ri,as=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(n){case"XYZ":this._y=Math.asin(_n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(_n(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_n(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-_n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return pg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pg,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return mg.setFromEuler(this),this.setFromQuaternion(mg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};as.DEFAULT_ORDER="XYZ";var uc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ax=0,gg=new I,Jr=new Ri,Ji=new je,Il=new I,ra=new I,Rx=new I,Cx=new Ri,_g=new I(1,0,0),vg=new I(0,1,0),xg=new I(0,0,1),yg={type:"added"},Px={type:"removed"},Qr={type:"childadded",child:null},ku={type:"childremoved",child:null},Zn=class e extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new I,n=new as,i=new Ri,s=new I(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new ae}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Jr.setFromAxisAngle(t,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(t,n){return Jr.setFromAxisAngle(t,n),this.quaternion.premultiply(Jr),this}rotateX(t){return this.rotateOnAxis(_g,t)}rotateY(t){return this.rotateOnAxis(vg,t)}rotateZ(t){return this.rotateOnAxis(xg,t)}translateOnAxis(t,n){return gg.copy(t).applyQuaternion(this.quaternion),this.position.add(gg.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(_g,t)}translateY(t){return this.translateOnAxis(vg,t)}translateZ(t){return this.translateOnAxis(xg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Il.copy(t):Il.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(ra,Il,this.up):Ji.lookAt(Il,ra,this.up),this.quaternion.setFromRotationMatrix(Ji),s&&(Ji.extractRotation(s.matrixWorld),Jr.setFromRotationMatrix(Ji),this.quaternion.premultiply(Jr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yg),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Px),ku.child=t,this.dispatchEvent(ku),ku.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yg),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,t,Rx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,Cx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(n){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Zn.DEFAULT_UP=new I(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Si=new I,Qi=new I,zu=new I,ts=new I,to=new I,eo=new I,Mg=new I,Hu=new I,Vu=new I,Gu=new I,Wu=new $e,Xu=new $e,Yu=new $e,Is=class e{constructor(t=new I,n=new I,i=new I){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Si.subVectors(t,n),s.cross(Si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){Si.subVectors(s,n),Qi.subVectors(i,n),zu.subVectors(t,n);let o=Si.dot(Si),a=Si.dot(Qi),l=Si.dot(zu),c=Qi.dot(Qi),h=Qi.dot(zu),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,m=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-m-g,g,m)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,ts)===null?!1:ts.x>=0&&ts.y>=0&&ts.x+ts.y<=1}static getInterpolation(t,n,i,s,r,o,a,l){return this.getBarycoord(t,n,i,s,ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ts.x),l.addScaledVector(o,ts.y),l.addScaledVector(a,ts.z),l)}static getInterpolatedAttribute(t,n,i,s,r,o){return Wu.setScalar(0),Xu.setScalar(0),Yu.setScalar(0),Wu.fromBufferAttribute(t,n),Xu.fromBufferAttribute(t,i),Yu.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Wu,r.x),o.addScaledVector(Xu,r.y),o.addScaledVector(Yu,r.z),o}static isFrontFacing(t,n,i,s){return Si.subVectors(i,n),Qi.subVectors(t,n),Si.cross(Qi).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Si.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,r){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,r=this.c,o,a;to.subVectors(s,i),eo.subVectors(r,i),Hu.subVectors(t,i);let l=to.dot(Hu),c=eo.dot(Hu);if(l<=0&&c<=0)return n.copy(i);Vu.subVectors(t,s);let h=to.dot(Vu),d=eo.dot(Vu);if(h>=0&&d<=h)return n.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(to,o);Gu.subVectors(t,r);let m=to.dot(Gu),g=eo.dot(Gu);if(g>=0&&m<=g)return n.copy(r);let v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(eo,a);let f=h*g-m*d;if(f<=0&&d-h>=0&&m-g>=0)return Mg.subVectors(r,s),a=(d-h)/(d-h+(m-g)),n.copy(s).addScaledVector(Mg,a);let p=1/(f+v+u);return o=v*p,a=u*p,n.copy(i).addScaledVector(to,o).addScaledVector(eo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},g_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rs={h:0,s:0,l:0},Ll={h:0,s:0,l:0};function qu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var te=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,n),this}setRGB(t,n,i,s=ve.workingColorSpace){return this.r=t,this.g=n,this.b=i,ve.toWorkingColorSpace(this,s),this}setHSL(t,n,i,s=ve.workingColorSpace){if(t=Nf(t,1),n=_n(n,0,1),i=_n(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=qu(o,r,t+1/3),this.g=qu(o,r,t),this.b=qu(o,r,t-1/3)}return ve.toWorkingColorSpace(this,s),this}setStyle(t,n=ci){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ci){let i=g_[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=po(t.r),this.g=po(t.g),this.b=po(t.b),this}copyLinearToSRGB(t){return this.r=Iu(t.r),this.g=Iu(t.g),this.b=Iu(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return ve.fromWorkingColorSpace(gn.copy(this),t),Math.round(_n(gn.r*255,0,255))*65536+Math.round(_n(gn.g*255,0,255))*256+Math.round(_n(gn.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ve.workingColorSpace){ve.fromWorkingColorSpace(gn.copy(this),n);let i=gn.r,s=gn.g,r=gn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=ve.workingColorSpace){return ve.fromWorkingColorSpace(gn.copy(this),n),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=ci){ve.fromWorkingColorSpace(gn.copy(this),t);let n=gn.r,i=gn.g,s=gn.b;return t!==ci?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Rs),this.setHSL(Rs.h+t,Rs.s+n,Rs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Rs),t.getHSL(Ll);let i=da(Rs.h,Ll.h,n),s=da(Rs.s,Ll.s,n),r=da(Rs.l,Ll.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new te;te.NAMES=g_;var Ix=0,Us=class extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=uo,this.side=Ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=rd,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(i.blending=this.blending),this.side!==Ds&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sd&&(i.blendSrc=this.blendSrc),this.blendDst!==rd&&(i.blendDst=this.blendDst),this.blendEquation!==ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ag&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(n){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Eo=class extends Us{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.combine=n_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var en=new I,Dl=new It,Gt=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Wd,this.updateRanges=[],this.gpuType=ns,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Dl.fromBufferAttribute(this,n),Dl.applyMatrix3(t),this.setXY(n,Dl.x,Dl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyMatrix3(t),this.setXYZ(n,en.x,en.y,en.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyMatrix4(t),this.setXYZ(n,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyNormalMatrix(t),this.setXYZ(n,en.x,en.y,en.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.transformDirection(t),this.setXYZ(n,en.x,en.y,en.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=we(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ti(n,this.array)),n}setX(t,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ti(n,this.array)),n}setY(t,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ti(n,this.array)),n}setZ(t,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ti(n,this.array)),n}setW(t,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=we(n,this.array),i=we(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=we(n,this.array),i=we(i,this.array),s=we(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=we(n,this.array),i=we(i,this.array),s=we(s,this.array),r=we(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wd&&(t.usage=this.usage),t}};var dc=class extends Gt{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var fc=class extends Gt{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var un=class extends Gt{constructor(t,n,i){super(new Float32Array(t),n,i)}},Lx=0,li=new je,Zu=new Zn,no=new I,Yn=new lr,oa=new lr,hn=new I,Ce=class e extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(m_(t)?fc:dc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ae().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,n,i){return li.makeTranslation(t,n,i),this.applyMatrix4(li),this}scale(t,n,i){return li.makeScale(t,n,i),this.applyMatrix4(li),this}lookAt(t){return Zu.lookAt(t),Zu.updateMatrix(),this.applyMatrix4(Zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(t){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new un(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lr);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new So);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),n)for(let r=0,o=n.length;r<o;r++){let a=n[r];oa.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Yn.min,oa.min),Yn.expandByPoint(hn),hn.addVectors(Yn.max,oa.max),Yn.expandByPoint(hn)):(Yn.expandByPoint(oa.min),Yn.expandByPoint(oa.max))}Yn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)hn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(hn));if(n)for(let r=0,o=n.length;r<o;r++){let a=n[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(no.fromBufferAttribute(t,c),hn.add(no)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<i.count;B++)a[B]=new I,l[B]=new I;let c=new I,h=new I,d=new I,u=new It,m=new It,g=new It,v=new I,f=new I;function p(B,nt,_){c.fromBufferAttribute(i,B),h.fromBufferAttribute(i,nt),d.fromBufferAttribute(i,_),u.fromBufferAttribute(r,B),m.fromBufferAttribute(r,nt),g.fromBufferAttribute(r,_),h.sub(c),d.sub(c),m.sub(u),g.sub(u);let M=1/(m.x*g.y-g.x*m.y);isFinite(M)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(M),f.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(M),a[B].add(v),a[nt].add(v),a[_].add(v),l[B].add(f),l[nt].add(f),l[_].add(f))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let B=0,nt=E.length;B<nt;++B){let _=E[B],M=_.start,G=_.count;for(let V=M,X=M+G;V<X;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let S=new I,b=new I,N=new I,R=new I;function T(B){N.fromBufferAttribute(s,B),R.copy(N);let nt=a[B];S.copy(nt),S.sub(N.multiplyScalar(N.dot(nt))).normalize(),b.crossVectors(R,nt);let M=b.dot(l[B])<0?-1:1;o.setXYZW(B,S.x,S.y,S.z,M)}for(let B=0,nt=E.length;B<nt;++B){let _=E[B],M=_.start,G=_.count;for(let V=M,X=M+G;V<X;V+=3)T(t.getX(V+0)),T(t.getX(V+1)),T(t.getX(V+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let u=0,m=t.count;u<m;u+=3){let g=t.getX(u+0),v=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,f),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,f),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=n.count;u<m;u+=3)s.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)hn.fromBufferAttribute(t,n),hn.normalize(),t.setXYZ(n,hn.x,hn.y,hn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),m=0,g=0;for(let v=0,f=l.length;v<f;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[m++]}return new Gt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);n.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],m=t(u,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(n));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sg=new je,Js=new bo,Ul=new So,bg=new I,Nl=new I,Fl=new I,Ol=new I,Ku=new I,Bl=new I,Eg=new I,kl=new I,He=class extends Zn{constructor(t=new Ce,n=new Eo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Bl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Ku.fromBufferAttribute(d,t),o?Bl.addScaledVector(Ku,h):Bl.addScaledVector(Ku.sub(n),h))}n.add(Bl)}return n}raycast(t,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(r),Js.copy(t.ray).recast(t.near),!(Ul.containsPoint(Js.origin)===!1&&(Js.intersectSphere(Ul,bg)===null||Js.origin.distanceToSquared(bg)>(t.far-t.near)**2))&&(Sg.copy(r).invert(),Js.copy(t.ray).applyMatrix4(Sg),!(i.boundingBox!==null&&Js.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Js)))}_computeIntersections(t,n,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let f=u[g],p=o[f.materialIndex],E=Math.max(f.start,m.start),S=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let b=E,N=S;b<N;b+=3){let R=a.getX(b),T=a.getX(b+1),B=a.getX(b+2);s=zl(this,p,t,i,c,h,d,R,T,B),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,n.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let f=g,p=v;f<p;f+=3){let E=a.getX(f),S=a.getX(f+1),b=a.getX(f+2);s=zl(this,o,t,i,c,h,d,E,S,b),s&&(s.faceIndex=Math.floor(f/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let f=u[g],p=o[f.materialIndex],E=Math.max(f.start,m.start),S=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let b=E,N=S;b<N;b+=3){let R=b,T=b+1,B=b+2;s=zl(this,p,t,i,c,h,d,R,T,B),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,n.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=g,p=v;f<p;f+=3){let E=f,S=f+1,b=f+2;s=zl(this,o,t,i,c,h,d,E,S,b),s&&(s.faceIndex=Math.floor(f/3),n.push(s))}}}};function Dx(e,t,n,i,s,r,o,a){let l;if(t.side===vn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ds,a),l===null)return null;kl.copy(a),kl.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(kl);return c<n.near||c>n.far?null:{distance:c,point:kl.clone(),object:e}}function zl(e,t,n,i,s,r,o,a,l,c){e.getVertexPosition(a,Nl),e.getVertexPosition(l,Fl),e.getVertexPosition(c,Ol);let h=Dx(e,t,n,i,Nl,Fl,Ol,Eg);if(h){let d=new I;Is.getBarycoord(Eg,Nl,Fl,Ol,d),s&&(h.uv=Is.getInterpolatedAttribute(s,a,l,c,d,new It)),r&&(h.uv1=Is.getInterpolatedAttribute(r,a,l,c,d,new It)),o&&(h.normal=Is.getInterpolatedAttribute(o,a,l,c,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};Is.getNormal(Nl,Fl,Ol,u.normal),h.face=u,h.barycoord=d}return h}var ga=class e extends Ce{constructor(t=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,m=0;g("z","y","x",-1,-1,i,n,t,o,r,0),g("z","y","x",1,-1,i,n,-t,o,r,1),g("x","z","y",1,1,t,i,n,s,o,2),g("x","z","y",1,-1,t,i,-n,s,o,3),g("x","y","z",1,-1,t,n,i,s,r,4),g("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(h,3)),this.setAttribute("uv",new un(d,2));function g(v,f,p,E,S,b,N,R,T,B,nt){let _=b/T,M=N/B,G=b/2,V=N/2,X=R/2,A=T+1,D=B+1,K=0,F=0,at=new I;for(let rt=0;rt<D;rt++){let ft=rt*M-V;for(let Ct=0;Ct<A;Ct++){let $=Ct*_-G;at[v]=$*E,at[f]=ft*S,at[p]=X,c.push(at.x,at.y,at.z),at[v]=0,at[f]=0,at[p]=R>0?1:-1,h.push(at.x,at.y,at.z),d.push(Ct/T),d.push(1-rt/B),K+=1}}for(let rt=0;rt<B;rt++)for(let ft=0;ft<T;ft++){let Ct=u+ft+A*rt,$=u+ft+A*(rt+1),k=u+(ft+1)+A*(rt+1),j=u+(ft+1)+A*rt;l.push(Ct,$,j),l.push($,k,j),F+=6}a.addGroup(m,F,nt),m+=F,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function wo(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function wn(e){let t={};for(let n=0;n<e.length;n++){let i=wo(e[n]);for(let s in i)t[s]=i[s]}return t}function Ux(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function __(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}var Bs={clone:wo,merge:wn},Nx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,le=class extends Us{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nx,this.fragmentShader=Fx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wo(t.uniforms),this.uniformsGroups=Ux(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},pc=class extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=is}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Cs=new I,wg=new It,Tg=new It,rn=class extends pc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=ma*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cs.x,Cs.y).multiplyScalar(-t/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Cs.x,Cs.y).multiplyScalar(-t/Cs.z)}getViewSize(t,n){return this.getViewBounds(t,wg,Tg),n.subVectors(Tg,wg)}setViewOffset(t,n,i,s,r,o){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(ua*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},io=-90,so=1,Zd=class extends Zn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(io,so,t,n);s.layers=this.layers,this.add(s);let r=new rn(io,so,t,n);r.layers=this.layers,this.add(r);let o=new rn(io,so,t,n);o.layers=this.layers,this.add(o);let a=new rn(io,so,t,n);a.layers=this.layers,this.add(a);let l=new rn(io,so,t,n);l.layers=this.layers,this.add(l);let c=new rn(io,so,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(let c of n)this.remove(c);if(t===is)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ac)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,r),t.setRenderTarget(i,1,s),t.render(n,o),t.setRenderTarget(i,2,s),t.render(n,a),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(n,h),t.setRenderTarget(d,u,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},mc=class extends qn{constructor(t,n,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],n=n!==void 0?n:vo,super(t,n,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Kd=class extends Tn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new mc(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:wi}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ga(5,5,5),r=new le({name:"CubemapFromEquirect",uniforms:wo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:ki});r.uniforms.tEquirect.value=n;let o=new He(s,r),a=n.minFilter;return n.minFilter===or&&(n.minFilter=wi),new Zd(1,10,this).update(t,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,n,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,s);t.setRenderTarget(r)}},$u=new I,Ox=new I,Bx=new ae,bi=class{constructor(t=new I(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=$u.subVectors(i,n).cross(Ox.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta($u),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||Bx.getNormalMatrix(t),s=this.coplanarPoint($u).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qs=new So,Hl=new I,gc=class{constructor(t=new bi,n=new bi,i=new bi,s=new bi,r=new bi,o=new bi){this.planes=[t,n,i,s,r,o]}set(t,n,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=is){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],m=s[8],g=s[9],v=s[10],f=s[11],p=s[12],E=s[13],S=s[14],b=s[15];if(i[0].setComponents(l-r,u-c,f-m,b-p).normalize(),i[1].setComponents(l+r,u+c,f+m,b+p).normalize(),i[2].setComponents(l+o,u+h,f+g,b+E).normalize(),i[3].setComponents(l-o,u-h,f-g,b-E).normalize(),i[4].setComponents(l-a,u-d,f-v,b-S).normalize(),n===is)i[5].setComponents(l+a,u+d,f+v,b+S).normalize();else if(n===ac)i[5].setComponents(a,d,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(t){return Qs.center.set(0,0,0),Qs.radius=.7071067811865476,Qs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Hl.x=s.normal.x>0?t.max.x:t.min.x,Hl.y=s.normal.y>0?t.max.y:t.min.y,Hl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function v_(){let e=null,t=!1,n=null,i=null;function s(r,o){n(r,o),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function kx(e){let t=new WeakMap;function n(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=e.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=e.HALF_FLOAT:m=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=e.SHORT;else if(c instanceof Uint32Array)m=e.UNSIGNED_INT;else if(c instanceof Int32Array)m=e.INT;else if(c instanceof Int8Array)m=e.BYTE;else if(c instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(e.bindBuffer(c,a),d.length===0)e.bufferSubData(c,0,h);else{d.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<d.length;m++){let g=d[u],v=d[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let m=0,g=d.length;m<g;m++){let v=d[m];e.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(e.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ls=class e extends Ce{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let r=t/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=n/l,m=[],g=[],v=[],f=[];for(let p=0;p<h;p++){let E=p*u-o;for(let S=0;S<c;S++){let b=S*d-r;g.push(b,-E,0),v.push(0,0,1),f.push(S/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){let S=E+c*p,b=E+c*(p+1),N=E+1+c*(p+1),R=E+1+c*p;m.push(S,b,R),m.push(b,N,R)}this.setIndex(m),this.setAttribute("position",new un(g,3)),this.setAttribute("normal",new un(v,3)),this.setAttribute("uv",new un(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},zx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$x=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ty=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ry=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ay=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ly=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,py=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,my=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",_y=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,My=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,by=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ey=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ty=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ay=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ry=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Py=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ly=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ny=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Oy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,By=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ky=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ky=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$y=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,n2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,s2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,r2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,l2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,c2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,m2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,S2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,b2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,E2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,A2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,C2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,D2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,N2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,B2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,k2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Y2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,q2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Z2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,K2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,aM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_M=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:zx,alphahash_pars_fragment:Hx,alphamap_fragment:Vx,alphamap_pars_fragment:Gx,alphatest_fragment:Wx,alphatest_pars_fragment:Xx,aomap_fragment:Yx,aomap_pars_fragment:qx,batching_pars_vertex:Zx,batching_vertex:Kx,begin_vertex:$x,beginnormal_vertex:jx,bsdfs:Jx,iridescence_fragment:Qx,bumpmap_pars_fragment:ty,clipping_planes_fragment:ey,clipping_planes_pars_fragment:ny,clipping_planes_pars_vertex:iy,clipping_planes_vertex:sy,color_fragment:ry,color_pars_fragment:oy,color_pars_vertex:ay,color_vertex:ly,common:cy,cube_uv_reflection_fragment:hy,defaultnormal_vertex:uy,displacementmap_pars_vertex:dy,displacementmap_vertex:fy,emissivemap_fragment:py,emissivemap_pars_fragment:my,colorspace_fragment:gy,colorspace_pars_fragment:_y,envmap_fragment:vy,envmap_common_pars_fragment:xy,envmap_pars_fragment:yy,envmap_pars_vertex:My,envmap_physical_pars_fragment:Ly,envmap_vertex:Sy,fog_vertex:by,fog_pars_vertex:Ey,fog_fragment:wy,fog_pars_fragment:Ty,gradientmap_pars_fragment:Ay,lightmap_pars_fragment:Ry,lights_lambert_fragment:Cy,lights_lambert_pars_fragment:Py,lights_pars_begin:Iy,lights_toon_fragment:Dy,lights_toon_pars_fragment:Uy,lights_phong_fragment:Ny,lights_phong_pars_fragment:Fy,lights_physical_fragment:Oy,lights_physical_pars_fragment:By,lights_fragment_begin:ky,lights_fragment_maps:zy,lights_fragment_end:Hy,logdepthbuf_fragment:Vy,logdepthbuf_pars_fragment:Gy,logdepthbuf_pars_vertex:Wy,logdepthbuf_vertex:Xy,map_fragment:Yy,map_pars_fragment:qy,map_particle_fragment:Zy,map_particle_pars_fragment:Ky,metalnessmap_fragment:$y,metalnessmap_pars_fragment:jy,morphinstance_vertex:Jy,morphcolor_vertex:Qy,morphnormal_vertex:t2,morphtarget_pars_vertex:e2,morphtarget_vertex:n2,normal_fragment_begin:i2,normal_fragment_maps:s2,normal_pars_fragment:r2,normal_pars_vertex:o2,normal_vertex:a2,normalmap_pars_fragment:l2,clearcoat_normal_fragment_begin:c2,clearcoat_normal_fragment_maps:h2,clearcoat_pars_fragment:u2,iridescence_pars_fragment:d2,opaque_fragment:f2,packing:p2,premultiplied_alpha_fragment:m2,project_vertex:g2,dithering_fragment:_2,dithering_pars_fragment:v2,roughnessmap_fragment:x2,roughnessmap_pars_fragment:y2,shadowmap_pars_fragment:M2,shadowmap_pars_vertex:S2,shadowmap_vertex:b2,shadowmask_pars_fragment:E2,skinbase_vertex:w2,skinning_pars_vertex:T2,skinning_vertex:A2,skinnormal_vertex:R2,specularmap_fragment:C2,specularmap_pars_fragment:P2,tonemapping_fragment:I2,tonemapping_pars_fragment:L2,transmission_fragment:D2,transmission_pars_fragment:U2,uv_pars_fragment:N2,uv_pars_vertex:F2,uv_vertex:O2,worldpos_vertex:B2,background_vert:k2,background_frag:z2,backgroundCube_vert:H2,backgroundCube_frag:V2,cube_vert:G2,cube_frag:W2,depth_vert:X2,depth_frag:Y2,distanceRGBA_vert:q2,distanceRGBA_frag:Z2,equirect_vert:K2,equirect_frag:$2,linedashed_vert:j2,linedashed_frag:J2,meshbasic_vert:Q2,meshbasic_frag:tM,meshlambert_vert:eM,meshlambert_frag:nM,meshmatcap_vert:iM,meshmatcap_frag:sM,meshnormal_vert:rM,meshnormal_frag:oM,meshphong_vert:aM,meshphong_frag:lM,meshphysical_vert:cM,meshphysical_frag:hM,meshtoon_vert:uM,meshtoon_frag:dM,points_vert:fM,points_frag:pM,shadow_vert:mM,shadow_frag:gM,sprite_vert:_M,sprite_frag:vM},vt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},Bi={basic:{uniforms:wn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:wn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new te(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:wn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:wn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:wn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new te(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:wn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:wn([vt.points,vt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:wn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:wn([vt.common,vt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:wn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:wn([vt.sprite,vt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:wn([vt.common,vt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:wn([vt.lights,vt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Bi.physical={uniforms:wn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var Vl={r:0,b:0,g:0},tr=new as,xM=new je;function yM(e,t,n,i,s,r,o){let a=new te(0),l=r===!0?0:1,c,h,d=null,u=0,m=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?n:t).get(S)),S}function v(E){let S=!1,b=g(E);b===null?p(a,l):b&&b.isColor&&(p(b,1),S=!0);let N=e.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(e.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function f(E,S){let b=g(S);b&&(b.isCubeTexture||b.mapping===Ac)?(h===void 0&&(h=new He(new ga(1,1,1),new le({name:"BackgroundCubeMaterial",uniforms:wo(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),tr.copy(S.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xM.makeRotationFromEuler(tr)),h.material.toneMapped=ve.getTransfer(b.colorSpace)!==Re,(d!==b||u!==b.version||m!==e.toneMapping)&&(h.material.needsUpdate=!0,d=b,u=b.version,m=e.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new He(new ls(2,2),new le({name:"BackgroundMaterial",uniforms:wo(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Ds,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ve.getTransfer(b.colorSpace)!==Re,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||u!==b.version||m!==e.toneMapping)&&(c.material.needsUpdate=!0,d=b,u=b.version,m=e.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,S){E.getRGB(Vl,__(e)),i.buffers.color.setClear(Vl.r,Vl.g,Vl.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:v,addToRenderList:f}}function MM(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(_,M,G,V,X){let A=!1,D=d(V,G,M);r!==D&&(r=D,c(r.object)),A=m(_,V,G,X),A&&g(_,V,G,X),X!==null&&t.update(X,e.ELEMENT_ARRAY_BUFFER),(A||o)&&(o=!1,b(_,M,G,V),X!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return e.createVertexArray()}function c(_){return e.bindVertexArray(_)}function h(_){return e.deleteVertexArray(_)}function d(_,M,G){let V=G.wireframe===!0,X=i[_.id];X===void 0&&(X={},i[_.id]=X);let A=X[M.id];A===void 0&&(A={},X[M.id]=A);let D=A[V];return D===void 0&&(D=u(l()),A[V]=D),D}function u(_){let M=[],G=[],V=[];for(let X=0;X<n;X++)M[X]=0,G[X]=0,V[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:G,attributeDivisors:V,object:_,attributes:{},index:null}}function m(_,M,G,V){let X=r.attributes,A=M.attributes,D=0,K=G.getAttributes();for(let F in K)if(K[F].location>=0){let rt=X[F],ft=A[F];if(ft===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(ft=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(ft=_.instanceColor)),rt===void 0||rt.attribute!==ft||ft&&rt.data!==ft.data)return!0;D++}return r.attributesNum!==D||r.index!==V}function g(_,M,G,V){let X={},A=M.attributes,D=0,K=G.getAttributes();for(let F in K)if(K[F].location>=0){let rt=A[F];rt===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(rt=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(rt=_.instanceColor));let ft={};ft.attribute=rt,rt&&rt.data&&(ft.data=rt.data),X[F]=ft,D++}r.attributes=X,r.attributesNum=D,r.index=V}function v(){let _=r.newAttributes;for(let M=0,G=_.length;M<G;M++)_[M]=0}function f(_){p(_,0)}function p(_,M){let G=r.newAttributes,V=r.enabledAttributes,X=r.attributeDivisors;G[_]=1,V[_]===0&&(e.enableVertexAttribArray(_),V[_]=1),X[_]!==M&&(e.vertexAttribDivisor(_,M),X[_]=M)}function E(){let _=r.newAttributes,M=r.enabledAttributes;for(let G=0,V=M.length;G<V;G++)M[G]!==_[G]&&(e.disableVertexAttribArray(G),M[G]=0)}function S(_,M,G,V,X,A,D){D===!0?e.vertexAttribIPointer(_,M,G,X,A):e.vertexAttribPointer(_,M,G,V,X,A)}function b(_,M,G,V){v();let X=V.attributes,A=G.getAttributes(),D=M.defaultAttributeValues;for(let K in A){let F=A[K];if(F.location>=0){let at=X[K];if(at===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(at=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(at=_.instanceColor)),at!==void 0){let rt=at.normalized,ft=at.itemSize,Ct=t.get(at);if(Ct===void 0)continue;let $=Ct.buffer,k=Ct.type,j=Ct.bytesPerElement,gt=k===e.INT||k===e.UNSIGNED_INT||at.gpuType===Rf;if(at.isInterleavedBufferAttribute){let ut=at.data,Mt=ut.stride,Et=at.offset;if(ut.isInstancedInterleavedBuffer){for(let Xt=0;Xt<F.locationSize;Xt++)p(F.location+Xt,ut.meshPerAttribute);_.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Xt=0;Xt<F.locationSize;Xt++)f(F.location+Xt);e.bindBuffer(e.ARRAY_BUFFER,$);for(let Xt=0;Xt<F.locationSize;Xt++)S(F.location+Xt,ft/F.locationSize,k,rt,Mt*j,(Et+ft/F.locationSize*Xt)*j,gt)}else{if(at.isInstancedBufferAttribute){for(let ut=0;ut<F.locationSize;ut++)p(F.location+ut,at.meshPerAttribute);_.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ut=0;ut<F.locationSize;ut++)f(F.location+ut);e.bindBuffer(e.ARRAY_BUFFER,$);for(let ut=0;ut<F.locationSize;ut++)S(F.location+ut,ft/F.locationSize,k,rt,ft*j,ft/F.locationSize*ut*j,gt)}}else if(D!==void 0){let rt=D[K];if(rt!==void 0)switch(rt.length){case 2:e.vertexAttrib2fv(F.location,rt);break;case 3:e.vertexAttrib3fv(F.location,rt);break;case 4:e.vertexAttrib4fv(F.location,rt);break;default:e.vertexAttrib1fv(F.location,rt)}}}}E()}function N(){B();for(let _ in i){let M=i[_];for(let G in M){let V=M[G];for(let X in V)h(V[X].object),delete V[X];delete M[G]}delete i[_]}}function R(_){if(i[_.id]===void 0)return;let M=i[_.id];for(let G in M){let V=M[G];for(let X in V)h(V[X].object),delete V[X];delete M[G]}delete i[_.id]}function T(_){for(let M in i){let G=i[M];if(G[_.id]===void 0)continue;let V=G[_.id];for(let X in V)h(V[X].object),delete V[X];delete G[_.id]}}function B(){nt(),o=!0,r!==s&&(r=s,c(r.object))}function nt(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:B,resetDefaultState:nt,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:f,disableUnusedAttributes:E}}function SM(e,t,n){let i;function s(c){i=c}function r(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,d){d!==0&&(e.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];n.update(m,i,1)}function l(c,h,d,u){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v];for(let v=0;v<u.length;v++)n.update(g,i,u[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function bM(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Ai&&i.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let B=T===Pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==rs&&i.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ns&&!B)}function l(T){if(T==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=n.logarithmicDepthBuffer===!0,u=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){let T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),E=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,R=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:b,vertexTextures:N,maxSamples:R}}function EM(e){let t=this,n=null,i=0,s=!1,r=!1,o=new bi,a=new ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||i!==0||s;return s=u,i=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,m){let g=d.clippingPlanes,v=d.clipIntersection,f=d.clipShadows,p=e.get(d);if(!s||g===null||g.length===0||r&&!f)r?h(null):c();else{let E=r?0:i,S=E*4,b=p.clippingState||null;l.value=b,b=h(g,u,S,m);for(let N=0;N!==S;++N)b[N]=n[N];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,m,g){let v=d!==null?d.length:0,f=null;if(v!==0){if(f=l.value,g!==!0||f===null){let p=m+v*4,E=u.matrixWorldInverse;a.getNormalMatrix(E),(f===null||f.length<p)&&(f=new Float32Array(p));for(let S=0,b=m;S!==v;++S,b+=4)o.copy(d[S]).applyMatrix4(E,a),o.normal.toArray(f,b),f[b+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}function wM(e){let t=new WeakMap;function n(o,a){return a===fd?o.mapping=vo:a===pd&&(o.mapping=xo),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===fd||a===pd)if(t.has(o)){let l=t.get(o).texture;return n(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Kd(l.height);return c.fromEquirectangularTexture(e,o),t.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var _a=class extends pc{constructor(t=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},ho=4,Ag=[.125,.215,.35,.446,.526,.582],sr=20,ju=new _a,Rg=new te,Ju=null,Qu=0,td=0,ed=!1,nr=(1+Math.sqrt(5))/2,ro=1/nr,Cg=[new I(-nr,ro,0),new I(nr,ro,0),new I(-ro,0,nr),new I(ro,0,nr),new I(0,nr,-ro),new I(0,nr,ro),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],_c=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100){Ju=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ju,Qu,td),this._renderer.xr.enabled=ed,t.scissorTest=!1,Gl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===vo||t.mapping===xo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ju=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:Pi,format:Ai,colorSpace:Os,depthBuffer:!1},s=Pg(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pg(t,n,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TM(r)),this._blurMaterial=AM(r,t,n)}return s}_compileMaterial(t){let n=new He(this._lodPlanes[0],t);this._renderer.compile(n,ju)}_sceneToCubeUV(t,n,i,s){let a=new rn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Rg),h.toneMapping=Ls,h.autoClear=!1;let m=new Eo({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new He(new ga,m),v=!1,f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,v=!0):(m.color.copy(Rg),v=!0);for(let p=0;p<6;p++){let E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let S=this._cubeSize;Gl(s,E*S,p>2?S:0,S,S),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=f}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===vo||t.mapping===xo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ig());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new He(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Gl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ju)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cg[(s-r-1)%Cg.length];this._blur(t,r-1,r,o,a)}n.autoClear=i}_blur(t,n,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,n,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new He(this._lodPlanes[s],c),u=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*sr-1),v=r/g,f=isFinite(r)?1+Math.floor(h*v):sr;f>sr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${sr}`);let p=[],E=0;for(let T=0;T<sr;++T){let B=T/v,nt=Math.exp(-B*B/2);p.push(nt),T===0?E+=nt:T<f&&(E+=2*nt)}for(let T=0;T<p.length;T++)p[T]=p[T]/E;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-i;let b=this._sizeLods[s],N=3*b*(s>S-ho?s-S+ho:0),R=4*(this._cubeSize-b);Gl(n,N,R,3*b,2*b),l.setRenderTarget(n),l.render(d,ju)}};function TM(e){let t=[],n=[],i=[],s=e,r=e-ho+1+Ag.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);n.push(a);let l=1/a;o>e-ho?l=Ag[o-e+ho-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,v=3,f=2,p=1,E=new Float32Array(v*g*m),S=new Float32Array(f*g*m),b=new Float32Array(p*g*m);for(let R=0;R<m;R++){let T=R%3*2/3-1,B=R>2?0:-1,nt=[T,B,0,T+2/3,B,0,T+2/3,B+1,0,T,B,0,T+2/3,B+1,0,T,B+1,0];E.set(nt,v*g*R),S.set(u,f*g*R);let _=[R,R,R,R,R,R];b.set(_,p*g*R)}let N=new Ce;N.setAttribute("position",new Gt(E,v)),N.setAttribute("uv",new Gt(S,f)),N.setAttribute("faceIndex",new Gt(b,p)),t.push(N),s>ho&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Pg(e,t,n){let i=new Tn(e,t,n);return i.texture.mapping=Ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gl(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function AM(e,t,n){let i=new Float32Array(sr),s=new I(0,1,0);return new le({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Ig(){return new le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Lg(){return new le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Ff(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function RM(e){let t=new WeakMap,n=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===fd||l===pd,h=l===vo||l===xo;if(c||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return n===null&&(n=new _c(e)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(n===null&&(n=new _c(e)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function CM(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&nc("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function PM(e,t,n,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let v=u.morphAttributes[g];for(let f=0,p=v.length;f<p;f++)t.remove(v[f])}u.removeEventListener("dispose",o),delete s[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,n.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)t.update(u[g],e.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let v=m[g];for(let f=0,p=v.length;f<p;f++)t.update(v[f],e.ARRAY_BUFFER)}}function c(d){let u=[],m=d.index,g=d.attributes.position,v=0;if(m!==null){let E=m.array;v=m.version;for(let S=0,b=E.length;S<b;S+=3){let N=E[S+0],R=E[S+1],T=E[S+2];u.push(N,R,R,T,T,N)}}else if(g!==void 0){let E=g.array;v=g.version;for(let S=0,b=E.length/3-1;S<b;S+=3){let N=S+0,R=S+1,T=S+2;u.push(N,R,R,T,T,N)}}else return;let f=new(m_(u)?fc:dc)(u,1);f.version=v;let p=r.get(d);p&&t.remove(p),r.set(d,f)}function h(d){let u=r.get(d);if(u){let m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function IM(e,t,n){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,m){e.drawElements(i,m,r,u*o),n.update(m,i,1)}function c(u,m,g){g!==0&&(e.drawElementsInstanced(i,m,r,u*o,g),n.update(m,i,g))}function h(u,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,u,0,g);let f=0;for(let p=0;p<g;p++)f+=m[p];n.update(f,i,1)}function d(u,m,g,v){if(g===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<u.length;p++)c(u[p]/o,m[p],v[p]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,r,u,0,v,0,g);let p=0;for(let E=0;E<g;E++)p+=m[E];for(let E=0;E<v.length;E++)n.update(p,i,v[E])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function LM(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(r/3);break;case e.LINES:n.lines+=a*(r/2);break;case e.LINE_STRIP:n.lines+=a*(r-1);break;case e.LINE_LOOP:n.lines+=a*r;break;case e.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function DM(e,t,n){let i=new WeakMap,s=new $e;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let nt=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",nt)};u!==void 0&&u.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],S=0;m===!0&&(S=1),g===!0&&(S=2),v===!0&&(S=3);let b=a.attributes.position.count*S,N=1;b>t.maxTextureSize&&(N=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let R=new Float32Array(b*N*4*d),T=new hc(R,b,N,d);T.type=ns,T.needsUpdate=!0;let B=S*4;for(let _=0;_<d;_++){let M=f[_],G=p[_],V=E[_],X=b*N*4*_;for(let A=0;A<M.count;A++){let D=A*B;m===!0&&(s.fromBufferAttribute(M,A),R[X+D+0]=s.x,R[X+D+1]=s.y,R[X+D+2]=s.z,R[X+D+3]=0),g===!0&&(s.fromBufferAttribute(G,A),R[X+D+4]=s.x,R[X+D+5]=s.y,R[X+D+6]=s.z,R[X+D+7]=0),v===!0&&(s.fromBufferAttribute(V,A),R[X+D+8]=s.x,R[X+D+9]=s.y,R[X+D+10]=s.z,R[X+D+11]=V.itemSize===4?s.w:1)}}u={count:d,texture:T,size:new It(b,N)},i.set(a,u),a.addEventListener("dispose",nt)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:r}}function UM(e,t,n,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}var vc=class extends qn{constructor(t,n,i,s,r,o,a,l,c,h=fo){if(h!==fo&&h!==Mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===fo&&(i=ar),i===void 0&&h===Mo&&(i=yo),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=a!==void 0?a:hi,this.minFilter=l!==void 0?l:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},x_=new qn,Dg=new vc(1,1),y_=new hc,M_=new qd,S_=new mc,Ug=[],Ng=[],Fg=new Float32Array(16),Og=new Float32Array(9),Bg=new Float32Array(4);function Ao(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=Ug[s];if(r===void 0&&(r=new Float32Array(s),Ug[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(r,a)}return r}function on(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function an(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Cc(e,t){let n=Ng[t];n===void 0&&(n=new Int32Array(t),Ng[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function NM(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function FM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(on(n,t))return;e.uniform2fv(this.addr,t),an(n,t)}}function OM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(on(n,t))return;e.uniform3fv(this.addr,t),an(n,t)}}function BM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(on(n,t))return;e.uniform4fv(this.addr,t),an(n,t)}}function kM(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(on(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),an(n,t)}else{if(on(n,i))return;Bg.set(i),e.uniformMatrix2fv(this.addr,!1,Bg),an(n,i)}}function zM(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(on(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),an(n,t)}else{if(on(n,i))return;Og.set(i),e.uniformMatrix3fv(this.addr,!1,Og),an(n,i)}}function HM(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(on(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),an(n,t)}else{if(on(n,i))return;Fg.set(i),e.uniformMatrix4fv(this.addr,!1,Fg),an(n,i)}}function VM(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function GM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(on(n,t))return;e.uniform2iv(this.addr,t),an(n,t)}}function WM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(on(n,t))return;e.uniform3iv(this.addr,t),an(n,t)}}function XM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(on(n,t))return;e.uniform4iv(this.addr,t),an(n,t)}}function YM(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function qM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(on(n,t))return;e.uniform2uiv(this.addr,t),an(n,t)}}function ZM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(on(n,t))return;e.uniform3uiv(this.addr,t),an(n,t)}}function KM(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(on(n,t))return;e.uniform4uiv(this.addr,t),an(n,t)}}function $M(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(Dg.compareFunction=p_,r=Dg):r=x_,n.setTexture2D(t||r,s)}function jM(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||M_,s)}function JM(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||S_,s)}function QM(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||y_,s)}function tS(e){switch(e){case 5126:return NM;case 35664:return FM;case 35665:return OM;case 35666:return BM;case 35674:return kM;case 35675:return zM;case 35676:return HM;case 5124:case 35670:return VM;case 35667:case 35671:return GM;case 35668:case 35672:return WM;case 35669:case 35673:return XM;case 5125:return YM;case 36294:return qM;case 36295:return ZM;case 36296:return KM;case 35678:case 36198:case 36298:case 36306:case 35682:return $M;case 35679:case 36299:case 36307:return jM;case 35680:case 36300:case 36308:case 36293:return JM;case 36289:case 36303:case 36311:case 36292:return QM}}function eS(e,t){e.uniform1fv(this.addr,t)}function nS(e,t){let n=Ao(t,this.size,2);e.uniform2fv(this.addr,n)}function iS(e,t){let n=Ao(t,this.size,3);e.uniform3fv(this.addr,n)}function sS(e,t){let n=Ao(t,this.size,4);e.uniform4fv(this.addr,n)}function rS(e,t){let n=Ao(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function oS(e,t){let n=Ao(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function aS(e,t){let n=Ao(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function lS(e,t){e.uniform1iv(this.addr,t)}function cS(e,t){e.uniform2iv(this.addr,t)}function hS(e,t){e.uniform3iv(this.addr,t)}function uS(e,t){e.uniform4iv(this.addr,t)}function dS(e,t){e.uniform1uiv(this.addr,t)}function fS(e,t){e.uniform2uiv(this.addr,t)}function pS(e,t){e.uniform3uiv(this.addr,t)}function mS(e,t){e.uniform4uiv(this.addr,t)}function gS(e,t,n){let i=this.cache,s=t.length,r=Cc(n,s);on(i,r)||(e.uniform1iv(this.addr,r),an(i,r));for(let o=0;o!==s;++o)n.setTexture2D(t[o]||x_,r[o])}function _S(e,t,n){let i=this.cache,s=t.length,r=Cc(n,s);on(i,r)||(e.uniform1iv(this.addr,r),an(i,r));for(let o=0;o!==s;++o)n.setTexture3D(t[o]||M_,r[o])}function vS(e,t,n){let i=this.cache,s=t.length,r=Cc(n,s);on(i,r)||(e.uniform1iv(this.addr,r),an(i,r));for(let o=0;o!==s;++o)n.setTextureCube(t[o]||S_,r[o])}function xS(e,t,n){let i=this.cache,s=t.length,r=Cc(n,s);on(i,r)||(e.uniform1iv(this.addr,r),an(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(t[o]||y_,r[o])}function yS(e){switch(e){case 5126:return eS;case 35664:return nS;case 35665:return iS;case 35666:return sS;case 35674:return rS;case 35675:return oS;case 35676:return aS;case 5124:case 35670:return lS;case 35667:case 35671:return cS;case 35668:case 35672:return hS;case 35669:case 35673:return uS;case 5125:return dS;case 36294:return fS;case 36295:return pS;case 36296:return mS;case 35678:case 36198:case 36298:case 36306:case 35682:return gS;case 35679:case 36299:case 36307:return _S;case 35680:case 36300:case 36308:case 36293:return vS;case 36289:case 36303:case 36311:case 36292:return xS}}var $d=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=tS(n.type)}},jd=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yS(n.type)}},Jd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,n[a.id],i)}}},nd=/(\w+)(\])?(\[|\.)?/g;function kg(e,t){e.seq.push(t),e.map[t.id]=t}function MS(e,t,n){let i=e.name,s=i.length;for(nd.lastIndex=0;;){let r=nd.exec(i),o=nd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){kg(n,c===void 0?new $d(a,e,t):new jd(a,e,t));break}else{let d=n.map[a];d===void 0&&(d=new Jd(a),kg(n,d)),n=d}}}var mo=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(n,s),o=t.getUniformLocation(n,r.name);MS(r,o,this)}}setValue(t,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,o=n.length;r!==o;++r){let a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in n&&i.push(o)}return i}};function zg(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var SS=37297,bS=0;function ES(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function wS(e){let t=ve.getPrimaries(ve.workingColorSpace),n=ve.getPrimaries(e),i;switch(t===n?i="":t===oc&&n===rc?i="LinearDisplayP3ToLinearSRGB":t===rc&&n===oc&&(i="LinearSRGBToLinearDisplayP3"),e){case Os:case Rc:return[i,"LinearTransferOETF"];case ci:case Uf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function Hg(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),s=e.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+ES(e.getShaderSource(t),o)}else return s}function TS(e,t){let n=wS(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function AS(e,t){let n;switch(t){case Sf:n="Linear";break;case bf:n="Reinhard";break;case Ef:n="Cineon";break;case wf:n="ACESFilmic";break;case Tf:n="AgX";break;case Af:n="Neutral";break;case Vv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Wl=new I;function RS(){ve.getLuminanceCoefficients(Wl);let e=Wl.x.toFixed(4),t=Wl.y.toFixed(4),n=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CS(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function PS(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function IS(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),o=r.name,a=1;r.type===e.FLOAT_MAT2&&(a=2),r.type===e.FLOAT_MAT3&&(a=3),r.type===e.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:e.getAttribLocation(t,o),locationSize:a}}return n}function ha(e){return e!==""}function Vg(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gg(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var LS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(e){return e.replace(LS,US)}var DS=new Map;function US(e,t){let n=oe[t];if(n===void 0){let i=DS.get(t);if(i!==void 0)n=oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Qd(n)}var NS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wg(e){return e.replace(NS,FS)}function FS(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xg(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function OS(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===e_?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Mv?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===es&&(t="SHADOWMAP_TYPE_VSM"),t}function BS(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case vo:case xo:t="ENVMAP_TYPE_CUBE";break;case Ac:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kS(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case xo:t="ENVMAP_MODE_REFRACTION";break}return t}function zS(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case n_:t="ENVMAP_BLENDING_MULTIPLY";break;case zv:t="ENVMAP_BLENDING_MIX";break;case Hv:t="ENVMAP_BLENDING_ADD";break}return t}function HS(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function VS(e,t,n,i){let s=e.getContext(),r=n.defines,o=n.vertexShader,a=n.fragmentShader,l=OS(n),c=BS(n),h=kS(n),d=zS(n),u=HS(n),m=CS(n),g=PS(r),v=s.createProgram(),f,p,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ha).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ha).join(`
`),p.length>0&&(p+=`
`)):(f=[Xg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),p=[Xg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ls?"#define TONE_MAPPING":"",n.toneMapping!==Ls?oe.tonemapping_pars_fragment:"",n.toneMapping!==Ls?AS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,TS("linearToOutputTexel",n.outputColorSpace),RS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ha).join(`
`)),o=Qd(o),o=Vg(o,n),o=Gg(o,n),a=Qd(a),a=Vg(a,n),a=Gg(a,n),o=Wg(o),a=Wg(a),n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",n.glslVersion===lg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===lg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=E+f+o,b=E+p+a,N=zg(s,s.VERTEX_SHADER,S),R=zg(s,s.FRAGMENT_SHADER,b);s.attachShader(v,N),s.attachShader(v,R),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(M){if(e.debug.checkShaderErrors){let G=s.getProgramInfoLog(v).trim(),V=s.getShaderInfoLog(N).trim(),X=s.getShaderInfoLog(R).trim(),A=!0,D=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(A=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,v,N,R);else{let K=Hg(s,N,"vertex"),F=Hg(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+G+`
`+K+`
`+F)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(V===""||X==="")&&(D=!1);D&&(M.diagnostics={runnable:A,programLog:G,vertexShader:{log:V,prefix:f},fragmentShader:{log:X,prefix:p}})}s.deleteShader(N),s.deleteShader(R),B=new mo(s,v),nt=IS(s,v)}let B;this.getUniforms=function(){return B===void 0&&T(this),B};let nt;this.getAttributes=function(){return nt===void 0&&T(this),nt};let _=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,SS)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bS++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=R,this}var GS=0,tf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new ef(t),n.set(t,i)),i}},ef=class{constructor(t){this.id=GS++,this.code=t,this.usedTimes=0}};function WS(e,t,n,i,s,r,o){let a=new uc,l=new tf,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,m=s.vertexTextures,g=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,M,G,V,X){let A=V.fog,D=X.geometry,K=_.isMeshStandardMaterial?V.environment:null,F=(_.isMeshStandardMaterial?n:t).get(_.envMap||K),at=F&&F.mapping===Ac?F.image.height:null,rt=v[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));let ft=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Ct=ft!==void 0?ft.length:0,$=0;D.morphAttributes.position!==void 0&&($=1),D.morphAttributes.normal!==void 0&&($=2),D.morphAttributes.color!==void 0&&($=3);let k,j,gt,ut;if(rt){let Z=Bi[rt];k=Z.vertexShader,j=Z.fragmentShader}else k=_.vertexShader,j=_.fragmentShader,l.update(_),gt=l.getVertexShaderID(_),ut=l.getFragmentShaderID(_);let Mt=e.getRenderTarget(),Et=X.isInstancedMesh===!0,Xt=X.isBatchedMesh===!0,Kt=!!_.map,lt=!!_.matcap,P=!!F,me=!!_.aoMap,ee=!!_.lightMap,$t=!!_.bumpMap,At=!!_.normalMap,ne=!!_.displacementMap,Ot=!!_.emissiveMap,w=!!_.metalnessMap,x=!!_.roughnessMap,H=_.anisotropy>0,J=_.clearcoat>0,it=_.dispersion>0,O=_.iridescence>0,_t=_.sheen>0,pt=_.transmission>0,St=H&&!!_.anisotropyMap,ce=J&&!!_.clearcoatMap,ct=J&&!!_.clearcoatNormalMap,xt=J&&!!_.clearcoatRoughnessMap,Bt=O&&!!_.iridescenceMap,Yt=O&&!!_.iridescenceThicknessMap,wt=_t&&!!_.sheenColorMap,re=_t&&!!_.sheenRoughnessMap,Q=!!_.specularMap,bt=!!_.specularColorMap,C=!!_.specularIntensityMap,st=pt&&!!_.transmissionMap,z=pt&&!!_.thicknessMap,q=!!_.gradientMap,ot=!!_.alphaMap,dt=_.alphaTest>0,jt=!!_.alphaHash,ue=!!_.extensions,xe=Ls;_.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(xe=e.toneMapping);let Zt={shaderID:rt,shaderType:_.type,shaderName:_.name,vertexShader:k,fragmentShader:j,defines:_.defines,customVertexShaderID:gt,customFragmentShaderID:ut,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Xt,batchingColor:Xt&&X._colorsTexture!==null,instancing:Et,instancingColor:Et&&X.instanceColor!==null,instancingMorph:Et&&X.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Mt===null?e.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Os,alphaToCoverage:!!_.alphaToCoverage,map:Kt,matcap:lt,envMap:P,envMapMode:P&&F.mapping,envMapCubeUVHeight:at,aoMap:me,lightMap:ee,bumpMap:$t,normalMap:At,displacementMap:m&&ne,emissiveMap:Ot,normalMapObjectSpace:At&&_.normalMapType===qv,normalMapTangentSpace:At&&_.normalMapType===Yv,metalnessMap:w,roughnessMap:x,anisotropy:H,anisotropyMap:St,clearcoat:J,clearcoatMap:ce,clearcoatNormalMap:ct,clearcoatRoughnessMap:xt,dispersion:it,iridescence:O,iridescenceMap:Bt,iridescenceThicknessMap:Yt,sheen:_t,sheenColorMap:wt,sheenRoughnessMap:re,specularMap:Q,specularColorMap:bt,specularIntensityMap:C,transmission:pt,transmissionMap:st,thicknessMap:z,gradientMap:q,opaque:_.transparent===!1&&_.blending===uo&&_.alphaToCoverage===!1,alphaMap:ot,alphaTest:dt,alphaHash:jt,combine:_.combine,mapUv:Kt&&f(_.map.channel),aoMapUv:me&&f(_.aoMap.channel),lightMapUv:ee&&f(_.lightMap.channel),bumpMapUv:$t&&f(_.bumpMap.channel),normalMapUv:At&&f(_.normalMap.channel),displacementMapUv:ne&&f(_.displacementMap.channel),emissiveMapUv:Ot&&f(_.emissiveMap.channel),metalnessMapUv:w&&f(_.metalnessMap.channel),roughnessMapUv:x&&f(_.roughnessMap.channel),anisotropyMapUv:St&&f(_.anisotropyMap.channel),clearcoatMapUv:ce&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:ct&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&f(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:re&&f(_.sheenRoughnessMap.channel),specularMapUv:Q&&f(_.specularMap.channel),specularColorMapUv:bt&&f(_.specularColorMap.channel),specularIntensityMapUv:C&&f(_.specularIntensityMap.channel),transmissionMapUv:st&&f(_.transmissionMap.channel),thicknessMapUv:z&&f(_.thicknessMap.channel),alphaMapUv:ot&&f(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(At||H),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!D.attributes.uv&&(Kt||ot),fog:!!A,useFog:_.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:$,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&G.length>0,shadowMapType:e.shadowMap.type,toneMapping:xe,decodeVideoTexture:Kt&&_.map.isVideoTexture===!0&&ve.getTransfer(_.map.colorSpace)===Re,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ei,flipSided:_.side===vn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ue&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&_.extensions.multiDraw===!0||Xt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function E(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let G in _.defines)M.push(G),M.push(_.defines[G]);return _.isRawShaderMaterial===!1&&(S(M,_),b(M,_),M.push(e.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function S(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function b(_,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),_.push(a.mask)}function N(_){let M=v[_.type],G;if(M){let V=Bi[M];G=Bs.clone(V.uniforms)}else G=_.uniforms;return G}function R(_,M){let G;for(let V=0,X=h.length;V<X;V++){let A=h[V];if(A.cacheKey===M){G=A,++G.usedTimes;break}}return G===void 0&&(G=new VS(e,M,_,r),h.push(G)),G}function T(_){if(--_.usedTimes===0){let M=h.indexOf(_);h[M]=h[h.length-1],h.pop(),_.destroy()}}function B(_){l.remove(_)}function nt(){l.dispose()}return{getParameters:p,getProgramCacheKey:E,getUniforms:N,acquireProgram:R,releaseProgram:T,releaseShaderCache:B,programs:h,dispose:nt}}function XS(){let e=new WeakMap;function t(o){return e.has(o)}function n(o){let a=e.get(o);return a===void 0&&(a={},e.set(o,a)),a}function i(o){e.delete(o)}function s(o,a,l){e.get(o)[a]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function YS(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Yg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function qg(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function o(d,u,m,g,v,f){let p=e[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:f},e[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=m,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=f),t++,p}function a(d,u,m,g,v,f){let p=o(d,u,m,g,v,f);m.transmission>0?i.push(p):m.transparent===!0?s.push(p):n.push(p)}function l(d,u,m,g,v,f){let p=o(d,u,m,g,v,f);m.transmission>0?i.unshift(p):m.transparent===!0?s.unshift(p):n.unshift(p)}function c(d,u){n.length>1&&n.sort(d||YS),i.length>1&&i.sort(u||Yg),s.length>1&&s.sort(u||Yg)}function h(){for(let d=t,u=e.length;d<u;d++){let m=e[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function qS(){let e=new WeakMap;function t(i,s){let r=e.get(i),o;return r===void 0?(o=new qg,e.set(i,[o])):s>=r.length?(o=new qg,r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function ZS(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new I,color:new te};break;case"SpotLight":n={position:new I,direction:new I,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new te,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new te,groundColor:new te};break;case"RectAreaLight":n={color:new te,position:new I,halfWidth:new I,halfHeight:new I};break}return e[t.id]=n,n}}}function KS(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var $S=0;function jS(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function JS(e){let t=new ZS,n=KS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new je,o=new je;function a(c){let h=0,d=0,u=0;for(let nt=0;nt<9;nt++)i.probe[nt].set(0,0,0);let m=0,g=0,v=0,f=0,p=0,E=0,S=0,b=0,N=0,R=0,T=0;c.sort(jS);for(let nt=0,_=c.length;nt<_;nt++){let M=c[nt],G=M.color,V=M.intensity,X=M.distance,A=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=G.r*V,d+=G.g*V,u+=G.b*V;else if(M.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(M.sh.coefficients[D],V);T++}else if(M.isDirectionalLight){let D=t.get(M);if(D.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){let K=M.shadow,F=n.get(M);F.shadowIntensity=K.intensity,F.shadowBias=K.bias,F.shadowNormalBias=K.normalBias,F.shadowRadius=K.radius,F.shadowMapSize=K.mapSize,i.directionalShadow[m]=F,i.directionalShadowMap[m]=A,i.directionalShadowMatrix[m]=M.shadow.matrix,E++}i.directional[m]=D,m++}else if(M.isSpotLight){let D=t.get(M);D.position.setFromMatrixPosition(M.matrixWorld),D.color.copy(G).multiplyScalar(V),D.distance=X,D.coneCos=Math.cos(M.angle),D.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),D.decay=M.decay,i.spot[v]=D;let K=M.shadow;if(M.map&&(i.spotLightMap[N]=M.map,N++,K.updateMatrices(M),M.castShadow&&R++),i.spotLightMatrix[v]=K.matrix,M.castShadow){let F=n.get(M);F.shadowIntensity=K.intensity,F.shadowBias=K.bias,F.shadowNormalBias=K.normalBias,F.shadowRadius=K.radius,F.shadowMapSize=K.mapSize,i.spotShadow[v]=F,i.spotShadowMap[v]=A,b++}v++}else if(M.isRectAreaLight){let D=t.get(M);D.color.copy(G).multiplyScalar(V),D.halfWidth.set(M.width*.5,0,0),D.halfHeight.set(0,M.height*.5,0),i.rectArea[f]=D,f++}else if(M.isPointLight){let D=t.get(M);if(D.color.copy(M.color).multiplyScalar(M.intensity),D.distance=M.distance,D.decay=M.decay,M.castShadow){let K=M.shadow,F=n.get(M);F.shadowIntensity=K.intensity,F.shadowBias=K.bias,F.shadowNormalBias=K.normalBias,F.shadowRadius=K.radius,F.shadowMapSize=K.mapSize,F.shadowCameraNear=K.camera.near,F.shadowCameraFar=K.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=A,i.pointShadowMatrix[g]=M.shadow.matrix,S++}i.point[g]=D,g++}else if(M.isHemisphereLight){let D=t.get(M);D.skyColor.copy(M.color).multiplyScalar(V),D.groundColor.copy(M.groundColor).multiplyScalar(V),i.hemi[p]=D,p++}}f>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let B=i.hash;(B.directionalLength!==m||B.pointLength!==g||B.spotLength!==v||B.rectAreaLength!==f||B.hemiLength!==p||B.numDirectionalShadows!==E||B.numPointShadows!==S||B.numSpotShadows!==b||B.numSpotMaps!==N||B.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=f,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=b+N-R,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,B.directionalLength=m,B.pointLength=g,B.spotLength=v,B.rectAreaLength=f,B.hemiLength=p,B.numDirectionalShadows=E,B.numPointShadows=S,B.numSpotShadows=b,B.numSpotMaps=N,B.numLightProbes=T,i.version=$S++)}function l(c,h){let d=0,u=0,m=0,g=0,v=0,f=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){let S=c[p];if(S.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),d++}else if(S.isSpotLight){let b=i.spot[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),m++}else if(S.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),o.identity(),r.copy(S.matrixWorld),r.premultiply(f),o.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let b=i.point[u];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),u++}else if(S.isHemisphereLight){let b=i.hemi[v];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(f),v++}}}return{setup:a,setupView:l,state:i}}function Zg(e){let t=new JS(e),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function o(h){i.push(h)}function a(){t.setup(n)}function l(h){t.setupView(n,h)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function QS(e){let t=new WeakMap;function n(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Zg(e),t.set(s,[a])):r>=o.length?(a=new Zg(e),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:n,dispose:i}}var nf=class extends Us{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sf=class extends Us{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},t3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function n3(e,t,n){let i=new gc,s=new It,r=new It,o=new $e,a=new nf({depthPacking:Xv}),l=new sf,c={},h=n.maxTextureSize,d={[Ds]:vn,[vn]:Ds,[Ei]:Ei},u=new le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:t3,fragmentShader:e3}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new Ce;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new He(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=e_;let p=this.type;this.render=function(R,T,B){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;let nt=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),G=e.state;G.setBlending(ki),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let V=p!==es&&this.type===es,X=p===es&&this.type!==es;for(let A=0,D=R.length;A<D;A++){let K=R[A],F=K.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let at=F.getFrameExtents();if(s.multiply(at),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,F.mapSize.y=r.y)),F.map===null||V===!0||X===!0){let ft=this.type!==es?{minFilter:hi,magFilter:hi}:{};F.map!==null&&F.map.dispose(),F.map=new Tn(s.x,s.y,ft),F.map.texture.name=K.name+".shadowMap",F.camera.updateProjectionMatrix()}e.setRenderTarget(F.map),e.clear();let rt=F.getViewportCount();for(let ft=0;ft<rt;ft++){let Ct=F.getViewport(ft);o.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),G.viewport(o),F.updateMatrices(K,ft),i=F.getFrustum(),b(T,B,F.camera,K,this.type)}F.isPointLightShadow!==!0&&this.type===es&&E(F,B),F.needsUpdate=!1}p=this.type,f.needsUpdate=!1,e.setRenderTarget(nt,_,M)};function E(R,T){let B=t.update(v);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Tn(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(T,null,B,u,v,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(T,null,B,m,v,null)}function S(R,T,B,nt){let _=null,M=B.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(M!==void 0)_=M;else if(_=B.isPointLight===!0?l:a,e.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let G=_.uuid,V=T.uuid,X=c[G];X===void 0&&(X={},c[G]=X);let A=X[V];A===void 0&&(A=_.clone(),X[V]=A,T.addEventListener("dispose",N)),_=A}if(_.visible=T.visible,_.wireframe=T.wireframe,nt===es?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:d[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,B.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let G=e.properties.get(_);G.light=B}return _}function b(R,T,B,nt,_){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===es)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,R.matrixWorld);let V=t.update(R),X=R.material;if(Array.isArray(X)){let A=V.groups;for(let D=0,K=A.length;D<K;D++){let F=A[D],at=X[F.materialIndex];if(at&&at.visible){let rt=S(R,at,nt,_);R.onBeforeShadow(e,R,T,B,V,rt,F),e.renderBufferDirect(B,null,V,rt,R,F),R.onAfterShadow(e,R,T,B,V,rt,F)}}}else if(X.visible){let A=S(R,X,nt,_);R.onBeforeShadow(e,R,T,B,V,A,null),e.renderBufferDirect(B,null,V,A,R,null),R.onAfterShadow(e,R,T,B,V,A,null)}}let G=R.children;for(let V=0,X=G.length;V<X;V++)b(G[V],T,B,nt,_)}function N(R){R.target.removeEventListener("dispose",N);for(let B in c){let nt=c[B],_=R.target.uuid;_ in nt&&(nt[_].dispose(),delete nt[_])}}}var i3={[od]:ad,[ld]:ud,[cd]:dd,[_o]:hd,[ad]:od,[ud]:ld,[dd]:cd,[hd]:_o};function s3(e){function t(){let C=!1,st=new $e,z=null,q=new $e(0,0,0,0);return{setMask:function(ot){z!==ot&&!C&&(e.colorMask(ot,ot,ot,ot),z=ot)},setLocked:function(ot){C=ot},setClear:function(ot,dt,jt,ue,xe){xe===!0&&(ot*=ue,dt*=ue,jt*=ue),st.set(ot,dt,jt,ue),q.equals(st)===!1&&(e.clearColor(ot,dt,jt,ue),q.copy(st))},reset:function(){C=!1,z=null,q.set(-1,0,0,0)}}}function n(){let C=!1,st=!1,z=null,q=null,ot=null;return{setReversed:function(dt){st=dt},setTest:function(dt){dt?gt(e.DEPTH_TEST):ut(e.DEPTH_TEST)},setMask:function(dt){z!==dt&&!C&&(e.depthMask(dt),z=dt)},setFunc:function(dt){if(st&&(dt=i3[dt]),q!==dt){switch(dt){case od:e.depthFunc(e.NEVER);break;case ad:e.depthFunc(e.ALWAYS);break;case ld:e.depthFunc(e.LESS);break;case _o:e.depthFunc(e.LEQUAL);break;case cd:e.depthFunc(e.EQUAL);break;case hd:e.depthFunc(e.GEQUAL);break;case ud:e.depthFunc(e.GREATER);break;case dd:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}q=dt}},setLocked:function(dt){C=dt},setClear:function(dt){ot!==dt&&(e.clearDepth(dt),ot=dt)},reset:function(){C=!1,z=null,q=null,ot=null}}}function i(){let C=!1,st=null,z=null,q=null,ot=null,dt=null,jt=null,ue=null,xe=null;return{setTest:function(Zt){C||(Zt?gt(e.STENCIL_TEST):ut(e.STENCIL_TEST))},setMask:function(Zt){st!==Zt&&!C&&(e.stencilMask(Zt),st=Zt)},setFunc:function(Zt,Z,mt){(z!==Zt||q!==Z||ot!==mt)&&(e.stencilFunc(Zt,Z,mt),z=Zt,q=Z,ot=mt)},setOp:function(Zt,Z,mt){(dt!==Zt||jt!==Z||ue!==mt)&&(e.stencilOp(Zt,Z,mt),dt=Zt,jt=Z,ue=mt)},setLocked:function(Zt){C=Zt},setClear:function(Zt){xe!==Zt&&(e.clearStencil(Zt),xe=Zt)},reset:function(){C=!1,st=null,z=null,q=null,ot=null,dt=null,jt=null,ue=null,xe=null}}}let s=new t,r=new n,o=new i,a=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,u=[],m=null,g=!1,v=null,f=null,p=null,E=null,S=null,b=null,N=null,R=new te(0,0,0),T=0,B=!1,nt=null,_=null,M=null,G=null,V=null,X=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),A=!1,D=0,K=e.getParameter(e.VERSION);K.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(K)[1]),A=D>=1):K.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),A=D>=2);let F=null,at={},rt=e.getParameter(e.SCISSOR_BOX),ft=e.getParameter(e.VIEWPORT),Ct=new $e().fromArray(rt),$=new $e().fromArray(ft);function k(C,st,z,q){let ot=new Uint8Array(4),dt=e.createTexture();e.bindTexture(C,dt),e.texParameteri(C,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(C,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let jt=0;jt<z;jt++)C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY?e.texImage3D(st,0,e.RGBA,1,1,q,0,e.RGBA,e.UNSIGNED_BYTE,ot):e.texImage2D(st+jt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ot);return dt}let j={};j[e.TEXTURE_2D]=k(e.TEXTURE_2D,e.TEXTURE_2D,1),j[e.TEXTURE_CUBE_MAP]=k(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[e.TEXTURE_2D_ARRAY]=k(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),j[e.TEXTURE_3D]=k(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),gt(e.DEPTH_TEST),r.setFunc(_o),ee(!1),$t(eg),gt(e.CULL_FACE),P(ki);function gt(C){c[C]!==!0&&(e.enable(C),c[C]=!0)}function ut(C){c[C]!==!1&&(e.disable(C),c[C]=!1)}function Mt(C,st){return h[C]!==st?(e.bindFramebuffer(C,st),h[C]=st,C===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=st),C===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=st),!0):!1}function Et(C,st){let z=u,q=!1;if(C){z=d.get(st),z===void 0&&(z=[],d.set(st,z));let ot=C.textures;if(z.length!==ot.length||z[0]!==e.COLOR_ATTACHMENT0){for(let dt=0,jt=ot.length;dt<jt;dt++)z[dt]=e.COLOR_ATTACHMENT0+dt;z.length=ot.length,q=!0}}else z[0]!==e.BACK&&(z[0]=e.BACK,q=!0);q&&e.drawBuffers(z)}function Xt(C){return m!==C?(e.useProgram(C),m=C,!0):!1}let Kt={[ir]:e.FUNC_ADD,[bv]:e.FUNC_SUBTRACT,[Ev]:e.FUNC_REVERSE_SUBTRACT};Kt[wv]=e.MIN,Kt[Tv]=e.MAX;let lt={[Av]:e.ZERO,[Rv]:e.ONE,[Cv]:e.SRC_COLOR,[sd]:e.SRC_ALPHA,[Nv]:e.SRC_ALPHA_SATURATE,[Dv]:e.DST_COLOR,[Iv]:e.DST_ALPHA,[Pv]:e.ONE_MINUS_SRC_COLOR,[rd]:e.ONE_MINUS_SRC_ALPHA,[Uv]:e.ONE_MINUS_DST_COLOR,[Lv]:e.ONE_MINUS_DST_ALPHA,[Fv]:e.CONSTANT_COLOR,[Ov]:e.ONE_MINUS_CONSTANT_COLOR,[Bv]:e.CONSTANT_ALPHA,[kv]:e.ONE_MINUS_CONSTANT_ALPHA};function P(C,st,z,q,ot,dt,jt,ue,xe,Zt){if(C===ki){g===!0&&(ut(e.BLEND),g=!1);return}if(g===!1&&(gt(e.BLEND),g=!0),C!==Sv){if(C!==v||Zt!==B){if((f!==ir||S!==ir)&&(e.blendEquation(e.FUNC_ADD),f=ir,S=ir),Zt)switch(C){case uo:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case go:e.blendFunc(e.ONE,e.ONE);break;case ng:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ig:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case uo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case go:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case ng:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ig:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}p=null,E=null,b=null,N=null,R.set(0,0,0),T=0,v=C,B=Zt}return}ot=ot||st,dt=dt||z,jt=jt||q,(st!==f||ot!==S)&&(e.blendEquationSeparate(Kt[st],Kt[ot]),f=st,S=ot),(z!==p||q!==E||dt!==b||jt!==N)&&(e.blendFuncSeparate(lt[z],lt[q],lt[dt],lt[jt]),p=z,E=q,b=dt,N=jt),(ue.equals(R)===!1||xe!==T)&&(e.blendColor(ue.r,ue.g,ue.b,xe),R.copy(ue),T=xe),v=C,B=!1}function me(C,st){C.side===Ei?ut(e.CULL_FACE):gt(e.CULL_FACE);let z=C.side===vn;st&&(z=!z),ee(z),C.blending===uo&&C.transparent===!1?P(ki):P(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),s.setMask(C.colorWrite);let q=C.stencilWrite;o.setTest(q),q&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ne(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?gt(e.SAMPLE_ALPHA_TO_COVERAGE):ut(e.SAMPLE_ALPHA_TO_COVERAGE)}function ee(C){nt!==C&&(C?e.frontFace(e.CW):e.frontFace(e.CCW),nt=C)}function $t(C){C!==xv?(gt(e.CULL_FACE),C!==_&&(C===eg?e.cullFace(e.BACK):C===yv?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ut(e.CULL_FACE),_=C}function At(C){C!==M&&(A&&e.lineWidth(C),M=C)}function ne(C,st,z){C?(gt(e.POLYGON_OFFSET_FILL),(G!==st||V!==z)&&(e.polygonOffset(st,z),G=st,V=z)):ut(e.POLYGON_OFFSET_FILL)}function Ot(C){C?gt(e.SCISSOR_TEST):ut(e.SCISSOR_TEST)}function w(C){C===void 0&&(C=e.TEXTURE0+X-1),F!==C&&(e.activeTexture(C),F=C)}function x(C,st,z){z===void 0&&(F===null?z=e.TEXTURE0+X-1:z=F);let q=at[z];q===void 0&&(q={type:void 0,texture:void 0},at[z]=q),(q.type!==C||q.texture!==st)&&(F!==z&&(e.activeTexture(z),F=z),e.bindTexture(C,st||j[C]),q.type=C,q.texture=st)}function H(){let C=at[F];C!==void 0&&C.type!==void 0&&(e.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function J(){try{e.compressedTexImage2D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function it(){try{e.compressedTexImage3D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function O(){try{e.texSubImage2D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _t(){try{e.texSubImage3D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pt(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function St(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(){try{e.texStorage2D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ct(){try{e.texStorage3D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xt(){try{e.texImage2D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Bt(){try{e.texImage3D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Yt(C){Ct.equals(C)===!1&&(e.scissor(C.x,C.y,C.z,C.w),Ct.copy(C))}function wt(C){$.equals(C)===!1&&(e.viewport(C.x,C.y,C.z,C.w),$.copy(C))}function re(C,st){let z=l.get(st);z===void 0&&(z=new WeakMap,l.set(st,z));let q=z.get(C);q===void 0&&(q=e.getUniformBlockIndex(st,C.name),z.set(C,q))}function Q(C,st){let q=l.get(st).get(C);a.get(st)!==q&&(e.uniformBlockBinding(st,q,C.__bindingPointIndex),a.set(st,q))}function bt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},F=null,at={},h={},d=new WeakMap,u=[],m=null,g=!1,v=null,f=null,p=null,E=null,S=null,b=null,N=null,R=new te(0,0,0),T=0,B=!1,nt=null,_=null,M=null,G=null,V=null,Ct.set(0,0,e.canvas.width,e.canvas.height),$.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:gt,disable:ut,bindFramebuffer:Mt,drawBuffers:Et,useProgram:Xt,setBlending:P,setMaterial:me,setFlipSided:ee,setCullFace:$t,setLineWidth:At,setPolygonOffset:ne,setScissorTest:Ot,activeTexture:w,bindTexture:x,unbindTexture:H,compressedTexImage2D:J,compressedTexImage3D:it,texImage2D:xt,texImage3D:Bt,updateUBOMapping:re,uniformBlockBinding:Q,texStorage2D:ce,texStorage3D:ct,texSubImage2D:O,texSubImage3D:_t,compressedTexSubImage2D:pt,compressedTexSubImage3D:St,scissor:Yt,viewport:wt,reset:bt}}function Kg(e,t,n,i){let s=r3(i);switch(n){case a_:return e*t;case c_:return e*t;case h_:return e*t*2;case u_:return e*t/s.components*s.byteLength;case If:return e*t/s.components*s.byteLength;case d_:return e*t*2/s.components*s.byteLength;case Lf:return e*t*2/s.components*s.byteLength;case l_:return e*t*3/s.components*s.byteLength;case Ai:return e*t*4/s.components*s.byteLength;case Df:return e*t*4/s.components*s.byteLength;case jl:case Jl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ql:case tc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case vd:case yd:return Math.max(e,16)*Math.max(t,8)/4;case _d:case xd:return Math.max(e,8)*Math.max(t,8)/2;case Md:case Sd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case bd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ed:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case wd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Td:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ad:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Rd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Cd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Id:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ld:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ud:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Nd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Fd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Od:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ec:case Bd:case kd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case f_:case zd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Hd:case Vd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function r3(e){switch(e){case rs:case s_:return{byteLength:1,components:1};case pa:case r_:case Pi:return{byteLength:2,components:1};case Cf:case Pf:return{byteLength:2,components:4};case ar:case Rf:case ns:return{byteLength:4,components:1};case o_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function o3(e,t,n,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,h=new WeakMap,d,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return m?new OffscreenCanvas(w,x):lc("canvas")}function v(w,x,H){let J=1,it=Ot(w);if((it.width>H||it.height>H)&&(J=H/Math.max(it.width,it.height)),J<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let O=Math.floor(J*it.width),_t=Math.floor(J*it.height);d===void 0&&(d=g(O,_t));let pt=x?g(O,_t):d;return pt.width=O,pt.height=_t,pt.getContext("2d").drawImage(w,0,0,O,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+O+"x"+_t+")."),pt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),w;return w}function f(w){return w.generateMipmaps&&w.minFilter!==hi&&w.minFilter!==wi}function p(w){e.generateMipmap(w)}function E(w,x,H,J,it=!1){if(w!==null){if(e[w]!==void 0)return e[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let O=x;if(x===e.RED&&(H===e.FLOAT&&(O=e.R32F),H===e.HALF_FLOAT&&(O=e.R16F),H===e.UNSIGNED_BYTE&&(O=e.R8)),x===e.RED_INTEGER&&(H===e.UNSIGNED_BYTE&&(O=e.R8UI),H===e.UNSIGNED_SHORT&&(O=e.R16UI),H===e.UNSIGNED_INT&&(O=e.R32UI),H===e.BYTE&&(O=e.R8I),H===e.SHORT&&(O=e.R16I),H===e.INT&&(O=e.R32I)),x===e.RG&&(H===e.FLOAT&&(O=e.RG32F),H===e.HALF_FLOAT&&(O=e.RG16F),H===e.UNSIGNED_BYTE&&(O=e.RG8)),x===e.RG_INTEGER&&(H===e.UNSIGNED_BYTE&&(O=e.RG8UI),H===e.UNSIGNED_SHORT&&(O=e.RG16UI),H===e.UNSIGNED_INT&&(O=e.RG32UI),H===e.BYTE&&(O=e.RG8I),H===e.SHORT&&(O=e.RG16I),H===e.INT&&(O=e.RG32I)),x===e.RGB_INTEGER&&(H===e.UNSIGNED_BYTE&&(O=e.RGB8UI),H===e.UNSIGNED_SHORT&&(O=e.RGB16UI),H===e.UNSIGNED_INT&&(O=e.RGB32UI),H===e.BYTE&&(O=e.RGB8I),H===e.SHORT&&(O=e.RGB16I),H===e.INT&&(O=e.RGB32I)),x===e.RGBA_INTEGER&&(H===e.UNSIGNED_BYTE&&(O=e.RGBA8UI),H===e.UNSIGNED_SHORT&&(O=e.RGBA16UI),H===e.UNSIGNED_INT&&(O=e.RGBA32UI),H===e.BYTE&&(O=e.RGBA8I),H===e.SHORT&&(O=e.RGBA16I),H===e.INT&&(O=e.RGBA32I)),x===e.RGB&&H===e.UNSIGNED_INT_5_9_9_9_REV&&(O=e.RGB9_E5),x===e.RGBA){let _t=it?sc:ve.getTransfer(J);H===e.FLOAT&&(O=e.RGBA32F),H===e.HALF_FLOAT&&(O=e.RGBA16F),H===e.UNSIGNED_BYTE&&(O=_t===Re?e.SRGB8_ALPHA8:e.RGBA8),H===e.UNSIGNED_SHORT_4_4_4_4&&(O=e.RGBA4),H===e.UNSIGNED_SHORT_5_5_5_1&&(O=e.RGB5_A1)}return(O===e.R16F||O===e.R32F||O===e.RG16F||O===e.RG32F||O===e.RGBA16F||O===e.RGBA32F)&&t.get("EXT_color_buffer_float"),O}function S(w,x){let H;return w?x===null||x===ar||x===yo?H=e.DEPTH24_STENCIL8:x===ns?H=e.DEPTH32F_STENCIL8:x===pa&&(H=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ar||x===yo?H=e.DEPTH_COMPONENT24:x===ns?H=e.DEPTH_COMPONENT32F:x===pa&&(H=e.DEPTH_COMPONENT16),H}function b(w,x){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==hi&&w.minFilter!==wi?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function N(w){let x=w.target;x.removeEventListener("dispose",N),T(x),x.isVideoTexture&&h.delete(x)}function R(w){let x=w.target;x.removeEventListener("dispose",R),nt(x)}function T(w){let x=i.get(w);if(x.__webglInit===void 0)return;let H=w.source,J=u.get(H);if(J){let it=J[x.__cacheKey];it.usedTimes--,it.usedTimes===0&&B(w),Object.keys(J).length===0&&u.delete(H)}i.remove(w)}function B(w){let x=i.get(w);e.deleteTexture(x.__webglTexture);let H=w.source,J=u.get(H);delete J[x.__cacheKey],o.memory.textures--}function nt(w){let x=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let it=0;it<x.__webglFramebuffer[J].length;it++)e.deleteFramebuffer(x.__webglFramebuffer[J][it]);else e.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)e.deleteFramebuffer(x.__webglFramebuffer[J]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let H=w.textures;for(let J=0,it=H.length;J<it;J++){let O=i.get(H[J]);O.__webglTexture&&(e.deleteTexture(O.__webglTexture),o.memory.textures--),i.remove(H[J])}i.remove(w)}let _=0;function M(){_=0}function G(){let w=_;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),_+=1,w}function V(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function X(w,x){let H=i.get(w);if(w.isVideoTexture&&At(w),w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){let J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(H,w,x);return}}n.bindTexture(e.TEXTURE_2D,H.__webglTexture,e.TEXTURE0+x)}function A(w,x){let H=i.get(w);if(w.version>0&&H.__version!==w.version){$(H,w,x);return}n.bindTexture(e.TEXTURE_2D_ARRAY,H.__webglTexture,e.TEXTURE0+x)}function D(w,x){let H=i.get(w);if(w.version>0&&H.__version!==w.version){$(H,w,x);return}n.bindTexture(e.TEXTURE_3D,H.__webglTexture,e.TEXTURE0+x)}function K(w,x){let H=i.get(w);if(w.version>0&&H.__version!==w.version){k(H,w,x);return}n.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture,e.TEXTURE0+x)}let F={[md]:e.REPEAT,[rr]:e.CLAMP_TO_EDGE,[gd]:e.MIRRORED_REPEAT},at={[hi]:e.NEAREST,[Gv]:e.NEAREST_MIPMAP_NEAREST,[El]:e.NEAREST_MIPMAP_LINEAR,[wi]:e.LINEAR,[Ru]:e.LINEAR_MIPMAP_NEAREST,[or]:e.LINEAR_MIPMAP_LINEAR},rt={[Zv]:e.NEVER,[tx]:e.ALWAYS,[Kv]:e.LESS,[p_]:e.LEQUAL,[$v]:e.EQUAL,[Qv]:e.GEQUAL,[jv]:e.GREATER,[Jv]:e.NOTEQUAL};function ft(w,x){if(x.type===ns&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===wi||x.magFilter===Ru||x.magFilter===El||x.magFilter===or||x.minFilter===wi||x.minFilter===Ru||x.minFilter===El||x.minFilter===or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,F[x.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,F[x.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,F[x.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,at[x.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,at[x.minFilter]),x.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,rt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===hi||x.minFilter!==El&&x.minFilter!==or||x.type===ns&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ct(w,x){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",N));let J=x.source,it=u.get(J);it===void 0&&(it={},u.set(J,it));let O=V(x);if(O!==w.__cacheKey){it[O]===void 0&&(it[O]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,H=!0),it[O].usedTimes++;let _t=it[w.__cacheKey];_t!==void 0&&(it[w.__cacheKey].usedTimes--,_t.usedTimes===0&&B(x)),w.__cacheKey=O,w.__webglTexture=it[O].texture}return H}function $(w,x,H){let J=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=e.TEXTURE_3D);let it=Ct(w,x),O=x.source;n.bindTexture(J,w.__webglTexture,e.TEXTURE0+H);let _t=i.get(O);if(O.version!==_t.__version||it===!0){n.activeTexture(e.TEXTURE0+H);let pt=ve.getPrimaries(ve.workingColorSpace),St=x.colorSpace===Ps?null:ve.getPrimaries(x.colorSpace),ce=x.colorSpace===Ps||pt===St?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let ct=v(x.image,!1,s.maxTextureSize);ct=ne(x,ct);let xt=r.convert(x.format,x.colorSpace),Bt=r.convert(x.type),Yt=E(x.internalFormat,xt,Bt,x.colorSpace,x.isVideoTexture);ft(J,x);let wt,re=x.mipmaps,Q=x.isVideoTexture!==!0,bt=_t.__version===void 0||it===!0,C=O.dataReady,st=b(x,ct);if(x.isDepthTexture)Yt=S(x.format===Mo,x.type),bt&&(Q?n.texStorage2D(e.TEXTURE_2D,1,Yt,ct.width,ct.height):n.texImage2D(e.TEXTURE_2D,0,Yt,ct.width,ct.height,0,xt,Bt,null));else if(x.isDataTexture)if(re.length>0){Q&&bt&&n.texStorage2D(e.TEXTURE_2D,st,Yt,re[0].width,re[0].height);for(let z=0,q=re.length;z<q;z++)wt=re[z],Q?C&&n.texSubImage2D(e.TEXTURE_2D,z,0,0,wt.width,wt.height,xt,Bt,wt.data):n.texImage2D(e.TEXTURE_2D,z,Yt,wt.width,wt.height,0,xt,Bt,wt.data);x.generateMipmaps=!1}else Q?(bt&&n.texStorage2D(e.TEXTURE_2D,st,Yt,ct.width,ct.height),C&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ct.width,ct.height,xt,Bt,ct.data)):n.texImage2D(e.TEXTURE_2D,0,Yt,ct.width,ct.height,0,xt,Bt,ct.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Q&&bt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,st,Yt,re[0].width,re[0].height,ct.depth);for(let z=0,q=re.length;z<q;z++)if(wt=re[z],x.format!==Ai)if(xt!==null)if(Q){if(C)if(x.layerUpdates.size>0){let ot=Kg(wt.width,wt.height,x.format,x.type);for(let dt of x.layerUpdates){let jt=wt.data.subarray(dt*ot/wt.data.BYTES_PER_ELEMENT,(dt+1)*ot/wt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,z,0,0,dt,wt.width,wt.height,1,xt,jt,0,0)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,z,0,0,0,wt.width,wt.height,ct.depth,xt,wt.data,0,0)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,z,Yt,wt.width,wt.height,ct.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Q?C&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,z,0,0,0,wt.width,wt.height,ct.depth,xt,Bt,wt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,z,Yt,wt.width,wt.height,ct.depth,0,xt,Bt,wt.data)}else{Q&&bt&&n.texStorage2D(e.TEXTURE_2D,st,Yt,re[0].width,re[0].height);for(let z=0,q=re.length;z<q;z++)wt=re[z],x.format!==Ai?xt!==null?Q?C&&n.compressedTexSubImage2D(e.TEXTURE_2D,z,0,0,wt.width,wt.height,xt,wt.data):n.compressedTexImage2D(e.TEXTURE_2D,z,Yt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?C&&n.texSubImage2D(e.TEXTURE_2D,z,0,0,wt.width,wt.height,xt,Bt,wt.data):n.texImage2D(e.TEXTURE_2D,z,Yt,wt.width,wt.height,0,xt,Bt,wt.data)}else if(x.isDataArrayTexture)if(Q){if(bt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,st,Yt,ct.width,ct.height,ct.depth),C)if(x.layerUpdates.size>0){let z=Kg(ct.width,ct.height,x.format,x.type);for(let q of x.layerUpdates){let ot=ct.data.subarray(q*z/ct.data.BYTES_PER_ELEMENT,(q+1)*z/ct.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,q,ct.width,ct.height,1,xt,Bt,ot)}x.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,xt,Bt,ct.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Yt,ct.width,ct.height,ct.depth,0,xt,Bt,ct.data);else if(x.isData3DTexture)Q?(bt&&n.texStorage3D(e.TEXTURE_3D,st,Yt,ct.width,ct.height,ct.depth),C&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,xt,Bt,ct.data)):n.texImage3D(e.TEXTURE_3D,0,Yt,ct.width,ct.height,ct.depth,0,xt,Bt,ct.data);else if(x.isFramebufferTexture){if(bt)if(Q)n.texStorage2D(e.TEXTURE_2D,st,Yt,ct.width,ct.height);else{let z=ct.width,q=ct.height;for(let ot=0;ot<st;ot++)n.texImage2D(e.TEXTURE_2D,ot,Yt,z,q,0,xt,Bt,null),z>>=1,q>>=1}}else if(re.length>0){if(Q&&bt){let z=Ot(re[0]);n.texStorage2D(e.TEXTURE_2D,st,Yt,z.width,z.height)}for(let z=0,q=re.length;z<q;z++)wt=re[z],Q?C&&n.texSubImage2D(e.TEXTURE_2D,z,0,0,xt,Bt,wt):n.texImage2D(e.TEXTURE_2D,z,Yt,xt,Bt,wt);x.generateMipmaps=!1}else if(Q){if(bt){let z=Ot(ct);n.texStorage2D(e.TEXTURE_2D,st,Yt,z.width,z.height)}C&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,xt,Bt,ct)}else n.texImage2D(e.TEXTURE_2D,0,Yt,xt,Bt,ct);f(x)&&p(J),_t.__version=O.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function k(w,x,H){if(x.image.length!==6)return;let J=Ct(w,x),it=x.source;n.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+H);let O=i.get(it);if(it.version!==O.__version||J===!0){n.activeTexture(e.TEXTURE0+H);let _t=ve.getPrimaries(ve.workingColorSpace),pt=x.colorSpace===Ps?null:ve.getPrimaries(x.colorSpace),St=x.colorSpace===Ps||_t===pt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let ce=x.isCompressedTexture||x.image[0].isCompressedTexture,ct=x.image[0]&&x.image[0].isDataTexture,xt=[];for(let q=0;q<6;q++)!ce&&!ct?xt[q]=v(x.image[q],!0,s.maxCubemapSize):xt[q]=ct?x.image[q].image:x.image[q],xt[q]=ne(x,xt[q]);let Bt=xt[0],Yt=r.convert(x.format,x.colorSpace),wt=r.convert(x.type),re=E(x.internalFormat,Yt,wt,x.colorSpace),Q=x.isVideoTexture!==!0,bt=O.__version===void 0||J===!0,C=it.dataReady,st=b(x,Bt);ft(e.TEXTURE_CUBE_MAP,x);let z;if(ce){Q&&bt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,st,re,Bt.width,Bt.height);for(let q=0;q<6;q++){z=xt[q].mipmaps;for(let ot=0;ot<z.length;ot++){let dt=z[ot];x.format!==Ai?Yt!==null?Q?C&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ot,0,0,dt.width,dt.height,Yt,dt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ot,re,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ot,0,0,dt.width,dt.height,Yt,wt,dt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ot,re,dt.width,dt.height,0,Yt,wt,dt.data)}}}else{if(z=x.mipmaps,Q&&bt){z.length>0&&st++;let q=Ot(xt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,st,re,q.width,q.height)}for(let q=0;q<6;q++)if(ct){Q?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,xt[q].width,xt[q].height,Yt,wt,xt[q].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,re,xt[q].width,xt[q].height,0,Yt,wt,xt[q].data);for(let ot=0;ot<z.length;ot++){let jt=z[ot].image[q].image;Q?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ot+1,0,0,jt.width,jt.height,Yt,wt,jt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ot+1,re,jt.width,jt.height,0,Yt,wt,jt.data)}}else{Q?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Yt,wt,xt[q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,re,Yt,wt,xt[q]);for(let ot=0;ot<z.length;ot++){let dt=z[ot];Q?C&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ot+1,0,0,Yt,wt,dt.image[q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ot+1,re,Yt,wt,dt.image[q])}}}f(x)&&p(e.TEXTURE_CUBE_MAP),O.__version=it.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function j(w,x,H,J,it,O){let _t=r.convert(H.format,H.colorSpace),pt=r.convert(H.type),St=E(H.internalFormat,_t,pt,H.colorSpace);if(!i.get(x).__hasExternalTextures){let ct=Math.max(1,x.width>>O),xt=Math.max(1,x.height>>O);it===e.TEXTURE_3D||it===e.TEXTURE_2D_ARRAY?n.texImage3D(it,O,St,ct,xt,x.depth,0,_t,pt,null):n.texImage2D(it,O,St,ct,xt,0,_t,pt,null)}n.bindFramebuffer(e.FRAMEBUFFER,w),$t(x)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,it,i.get(H).__webglTexture,0,ee(x)):(it===e.TEXTURE_2D||it>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,J,it,i.get(H).__webglTexture,O),n.bindFramebuffer(e.FRAMEBUFFER,null)}function gt(w,x,H){if(e.bindRenderbuffer(e.RENDERBUFFER,w),x.depthBuffer){let J=x.depthTexture,it=J&&J.isDepthTexture?J.type:null,O=S(x.stencilBuffer,it),_t=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pt=ee(x);$t(x)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,pt,O,x.width,x.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,pt,O,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,O,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,_t,e.RENDERBUFFER,w)}else{let J=x.textures;for(let it=0;it<J.length;it++){let O=J[it],_t=r.convert(O.format,O.colorSpace),pt=r.convert(O.type),St=E(O.internalFormat,_t,pt,O.colorSpace),ce=ee(x);H&&$t(x)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,ce,St,x.width,x.height):$t(x)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ce,St,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,St,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ut(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);let J=i.get(x.depthTexture).__webglTexture,it=ee(x);if(x.depthTexture.format===fo)$t(x)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,J,0,it):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,J,0);else if(x.depthTexture.format===Mo)$t(x)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,J,0,it):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Mt(w){let x=i.get(w),H=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let J=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){let it=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",it)};J.addEventListener("dispose",it),x.__depthDisposeCallback=it}x.__boundDepthTexture=J}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ut(x.__webglFramebuffer,w)}else if(H){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=e.createRenderbuffer(),gt(x.__webglDepthbuffer[J],w,!1);else{let it=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,O=x.__webglDepthbuffer[J];e.bindRenderbuffer(e.RENDERBUFFER,O),e.framebufferRenderbuffer(e.FRAMEBUFFER,it,e.RENDERBUFFER,O)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),gt(x.__webglDepthbuffer,w,!1);else{let J=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,it=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,it),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,it)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Et(w,x,H){let J=i.get(w);x!==void 0&&j(J.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),H!==void 0&&Mt(w)}function Xt(w){let x=w.texture,H=i.get(w),J=i.get(x);w.addEventListener("dispose",R);let it=w.textures,O=w.isWebGLCubeRenderTarget===!0,_t=it.length>1;if(_t||(J.__webglTexture===void 0&&(J.__webglTexture=e.createTexture()),J.__version=x.version,o.memory.textures++),O){H.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[pt]=[];for(let St=0;St<x.mipmaps.length;St++)H.__webglFramebuffer[pt][St]=e.createFramebuffer()}else H.__webglFramebuffer[pt]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let pt=0;pt<x.mipmaps.length;pt++)H.__webglFramebuffer[pt]=e.createFramebuffer()}else H.__webglFramebuffer=e.createFramebuffer();if(_t)for(let pt=0,St=it.length;pt<St;pt++){let ce=i.get(it[pt]);ce.__webglTexture===void 0&&(ce.__webglTexture=e.createTexture(),o.memory.textures++)}if(w.samples>0&&$t(w)===!1){H.__webglMultisampledFramebuffer=e.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let pt=0;pt<it.length;pt++){let St=it[pt];H.__webglColorRenderbuffer[pt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,H.__webglColorRenderbuffer[pt]);let ce=r.convert(St.format,St.colorSpace),ct=r.convert(St.type),xt=E(St.internalFormat,ce,ct,St.colorSpace,w.isXRRenderTarget===!0),Bt=ee(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,Bt,xt,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+pt,e.RENDERBUFFER,H.__webglColorRenderbuffer[pt])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=e.createRenderbuffer(),gt(H.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(O){n.bindTexture(e.TEXTURE_CUBE_MAP,J.__webglTexture),ft(e.TEXTURE_CUBE_MAP,x);for(let pt=0;pt<6;pt++)if(x.mipmaps&&x.mipmaps.length>0)for(let St=0;St<x.mipmaps.length;St++)j(H.__webglFramebuffer[pt][St],w,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,St);else j(H.__webglFramebuffer[pt],w,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);f(x)&&p(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(_t){for(let pt=0,St=it.length;pt<St;pt++){let ce=it[pt],ct=i.get(ce);n.bindTexture(e.TEXTURE_2D,ct.__webglTexture),ft(e.TEXTURE_2D,ce),j(H.__webglFramebuffer,w,ce,e.COLOR_ATTACHMENT0+pt,e.TEXTURE_2D,0),f(ce)&&p(e.TEXTURE_2D)}n.unbindTexture()}else{let pt=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pt=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(pt,J.__webglTexture),ft(pt,x),x.mipmaps&&x.mipmaps.length>0)for(let St=0;St<x.mipmaps.length;St++)j(H.__webglFramebuffer[St],w,x,e.COLOR_ATTACHMENT0,pt,St);else j(H.__webglFramebuffer,w,x,e.COLOR_ATTACHMENT0,pt,0);f(x)&&p(pt),n.unbindTexture()}w.depthBuffer&&Mt(w)}function Kt(w){let x=w.textures;for(let H=0,J=x.length;H<J;H++){let it=x[H];if(f(it)){let O=w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,_t=i.get(it).__webglTexture;n.bindTexture(O,_t),p(O),n.unbindTexture()}}}let lt=[],P=[];function me(w){if(w.samples>0){if($t(w)===!1){let x=w.textures,H=w.width,J=w.height,it=e.COLOR_BUFFER_BIT,O=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,_t=i.get(w),pt=x.length>1;if(pt)for(let St=0;St<x.length;St++)n.bindFramebuffer(e.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+St,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,_t.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+St,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let St=0;St<x.length;St++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(it|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(it|=e.STENCIL_BUFFER_BIT)),pt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,_t.__webglColorRenderbuffer[St]);let ce=i.get(x[St]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ce,0)}e.blitFramebuffer(0,0,H,J,0,0,H,J,it,e.NEAREST),l===!0&&(lt.length=0,P.length=0,lt.push(e.COLOR_ATTACHMENT0+St),w.depthBuffer&&w.resolveDepthBuffer===!1&&(lt.push(O),P.push(O),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,P)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),pt)for(let St=0;St<x.length;St++){n.bindFramebuffer(e.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+St,e.RENDERBUFFER,_t.__webglColorRenderbuffer[St]);let ce=i.get(x[St]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,_t.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+St,e.TEXTURE_2D,ce,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let x=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function ee(w){return Math.min(s.maxSamples,w.samples)}function $t(w){let x=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function At(w){let x=o.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function ne(w,x){let H=w.colorSpace,J=w.format,it=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==Os&&H!==Ps&&(ve.getTransfer(H)===Re?(J!==Ai||it!==rs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function Ot(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=M,this.setTexture2D=X,this.setTexture2DArray=A,this.setTexture3D=D,this.setTextureCube=K,this.rebindTextures=Et,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=$t}function a3(e,t){function n(i,s=Ps){let r,o=ve.getTransfer(s);if(i===rs)return e.UNSIGNED_BYTE;if(i===Cf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Pf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===o_)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===s_)return e.BYTE;if(i===r_)return e.SHORT;if(i===pa)return e.UNSIGNED_SHORT;if(i===Rf)return e.INT;if(i===ar)return e.UNSIGNED_INT;if(i===ns)return e.FLOAT;if(i===Pi)return e.HALF_FLOAT;if(i===a_)return e.ALPHA;if(i===l_)return e.RGB;if(i===Ai)return e.RGBA;if(i===c_)return e.LUMINANCE;if(i===h_)return e.LUMINANCE_ALPHA;if(i===fo)return e.DEPTH_COMPONENT;if(i===Mo)return e.DEPTH_STENCIL;if(i===u_)return e.RED;if(i===If)return e.RED_INTEGER;if(i===d_)return e.RG;if(i===Lf)return e.RG_INTEGER;if(i===Df)return e.RGBA_INTEGER;if(i===jl||i===Jl||i===Ql||i===tc)if(o===Re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===jl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===jl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ql)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_d||i===vd||i===xd||i===yd)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_d)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yd)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Md||i===Sd||i===bd)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Md||i===Sd)return o===Re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bd)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ed||i===wd||i===Td||i===Ad||i===Rd||i===Cd||i===Pd||i===Id||i===Ld||i===Dd||i===Ud||i===Nd||i===Fd||i===Od)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ed)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wd)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Td)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ad)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rd)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cd)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pd)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Id)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ld)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dd)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ud)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nd)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fd)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Od)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ec||i===Bd||i===kd)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ec)return o===Re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===f_||i===zd||i===Hd||i===Vd)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ec)return r.COMPRESSED_RED_RGTC1_EXT;if(i===zd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var rf=class extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ui=class extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}},l3={type:"move"},fa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let f=n.getJointPose(v,i),p=this._getHandJoint(c,v);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(l3)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new ui;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},c3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,of=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){let s=new qn,r=t.properties.get(s);r.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new le({vertexShader:c3,fragmentShader:h3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new He(new ls(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},af=class extends os{constructor(t,n){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,g=null,v=new of,f=n.getContextAttributes(),p=null,E=null,S=[],b=[],N=new It,R=null,T=new rn;T.layers.enable(1),T.viewport=new $e;let B=new rn;B.layers.enable(2),B.viewport=new $e;let nt=[T,B],_=new rf;_.layers.enable(1),_.layers.enable(2);let M=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let j=S[k];return j===void 0&&(j=new fa,S[k]=j),j.getTargetRaySpace()},this.getControllerGrip=function(k){let j=S[k];return j===void 0&&(j=new fa,S[k]=j),j.getGripSpace()},this.getHand=function(k){let j=S[k];return j===void 0&&(j=new fa,S[k]=j),j.getHandSpace()};function V(k){let j=b.indexOf(k.inputSource);if(j===-1)return;let gt=S[j];gt!==void 0&&(gt.update(k.inputSource,k.frame,c||o),gt.dispatchEvent({type:k.type,data:k.inputSource}))}function X(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",A);for(let k=0;k<S.length;k++){let j=b[k];j!==null&&(b[k]=null,S[k].disconnect(j))}M=null,G=null,v.reset(),t.setRenderTarget(p),m=null,u=null,d=null,s=null,E=null,$.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",X),s.addEventListener("inputsourceschange",A),f.xrCompatible!==!0&&await n.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){let j={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,n,j),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Tn(m.framebufferWidth,m.framebufferHeight,{format:Ai,type:rs,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let j=null,gt=null,ut=null;f.depth&&(ut=f.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,j=f.stencil?Mo:fo,gt=f.stencil?yo:ar);let Mt={colorFormat:n.RGBA8,depthFormat:ut,scaleFactor:r};d=new XRWebGLBinding(s,n),u=d.createProjectionLayer(Mt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new Tn(u.textureWidth,u.textureHeight,{format:Ai,type:rs,depthTexture:new vc(u.textureWidth,u.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$.setContext(s),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function A(k){for(let j=0;j<k.removed.length;j++){let gt=k.removed[j],ut=b.indexOf(gt);ut>=0&&(b[ut]=null,S[ut].disconnect(gt))}for(let j=0;j<k.added.length;j++){let gt=k.added[j],ut=b.indexOf(gt);if(ut===-1){for(let Et=0;Et<S.length;Et++)if(Et>=b.length){b.push(gt),ut=Et;break}else if(b[Et]===null){b[Et]=gt,ut=Et;break}if(ut===-1)break}let Mt=S[ut];Mt&&Mt.connect(gt)}}let D=new I,K=new I;function F(k,j,gt){D.setFromMatrixPosition(j.matrixWorld),K.setFromMatrixPosition(gt.matrixWorld);let ut=D.distanceTo(K),Mt=j.projectionMatrix.elements,Et=gt.projectionMatrix.elements,Xt=Mt[14]/(Mt[10]-1),Kt=Mt[14]/(Mt[10]+1),lt=(Mt[9]+1)/Mt[5],P=(Mt[9]-1)/Mt[5],me=(Mt[8]-1)/Mt[0],ee=(Et[8]+1)/Et[0],$t=Xt*me,At=Xt*ee,ne=ut/(-me+ee),Ot=ne*-me;if(j.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ot),k.translateZ(ne),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Mt[10]===-1)k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let w=Xt+ne,x=Kt+ne,H=$t-Ot,J=At+(ut-Ot),it=lt*Kt/x*w,O=P*Kt/x*w;k.projectionMatrix.makePerspective(H,J,it,O,w,x),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function at(k,j){j===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(j.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let j=k.near,gt=k.far;v.texture!==null&&(v.depthNear>0&&(j=v.depthNear),v.depthFar>0&&(gt=v.depthFar)),_.near=B.near=T.near=j,_.far=B.far=T.far=gt,(M!==_.near||G!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,G=_.far);let ut=k.parent,Mt=_.cameras;at(_,ut);for(let Et=0;Et<Mt.length;Et++)at(Mt[Et],ut);Mt.length===2?F(_,T,B):_.projectionMatrix.copy(T.projectionMatrix),rt(k,_,ut)};function rt(k,j,gt){gt===null?k.matrix.copy(j.matrixWorld):(k.matrix.copy(gt.matrixWorld),k.matrix.invert(),k.matrix.multiply(j.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=ma*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(k){l=k,u!==null&&(u.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let ft=null;function Ct(k,j){if(h=j.getViewerPose(c||o),g=j,h!==null){let gt=h.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let ut=!1;gt.length!==_.cameras.length&&(_.cameras.length=0,ut=!0);for(let Et=0;Et<gt.length;Et++){let Xt=gt[Et],Kt=null;if(m!==null)Kt=m.getViewport(Xt);else{let P=d.getViewSubImage(u,Xt);Kt=P.viewport,Et===0&&(t.setRenderTargetTextures(E,P.colorTexture,u.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(E))}let lt=nt[Et];lt===void 0&&(lt=new rn,lt.layers.enable(Et),lt.viewport=new $e,nt[Et]=lt),lt.matrix.fromArray(Xt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Xt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Et===0&&(_.matrix.copy(lt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ut===!0&&_.cameras.push(lt)}let Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")){let Et=d.getDepthInformation(gt[0]);Et&&Et.isValid&&Et.texture&&v.init(t,Et,s.renderState)}}for(let gt=0;gt<S.length;gt++){let ut=b[gt],Mt=S[gt];ut!==null&&Mt!==void 0&&Mt.update(ut,j,c||o)}ft&&ft(k,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let $=new v_;$.setAnimationLoop(Ct),this.setAnimationLoop=function(k){ft=k},this.dispose=function(){}}},er=new as,u3=new je;function d3(e,t){function n(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,__(e)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,E,S,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),d(f,p)):p.isMeshPhongMaterial?(r(f,p),h(f,p)):p.isMeshStandardMaterial?(r(f,p),u(f,p),p.isMeshPhysicalMaterial&&m(f,p,b)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),v(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,E,S):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,n(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,n(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,n(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===vn&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,n(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===vn&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,n(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,n(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let E=t.get(p),S=E.envMap,b=E.envMapRotation;S&&(f.envMap.value=S,er.copy(b),er.x*=-1,er.y*=-1,er.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),f.envMapRotation.value.setFromMatrix4(u3.makeRotationFromEuler(er)),f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,n(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,E,S){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*E,f.scale.value=S*.5,p.map&&(f.map.value=p.map,n(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,n(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,n(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,n(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,E){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function v(f,p){let E=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(E.matrixWorld),f.nearDistance.value=E.shadow.camera.near,f.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function f3(e,t,n,i){let s={},r={},o=[],a=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){let b=S.program;i.uniformBlockBinding(E,b)}function c(E,S){let b=s[E.id];b===void 0&&(g(E),b=h(E),s[E.id]=b,E.addEventListener("dispose",f));let N=S.program;i.updateUBOMapping(E,N);let R=t.render.frame;r[E.id]!==R&&(u(E),r[E.id]=R)}function h(E){let S=d();E.__bindingPointIndex=S;let b=e.createBuffer(),N=E.__size,R=E.usage;return e.bindBuffer(e.UNIFORM_BUFFER,b),e.bufferData(e.UNIFORM_BUFFER,N,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,S,b),b}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){let S=s[E.id],b=E.uniforms,N=E.__cache;e.bindBuffer(e.UNIFORM_BUFFER,S);for(let R=0,T=b.length;R<T;R++){let B=Array.isArray(b[R])?b[R]:[b[R]];for(let nt=0,_=B.length;nt<_;nt++){let M=B[nt];if(m(M,R,nt,N)===!0){let G=M.__offset,V=Array.isArray(M.value)?M.value:[M.value],X=0;for(let A=0;A<V.length;A++){let D=V[A],K=v(D);typeof D=="number"||typeof D=="boolean"?(M.__data[0]=D,e.bufferSubData(e.UNIFORM_BUFFER,G+X,M.__data)):D.isMatrix3?(M.__data[0]=D.elements[0],M.__data[1]=D.elements[1],M.__data[2]=D.elements[2],M.__data[3]=0,M.__data[4]=D.elements[3],M.__data[5]=D.elements[4],M.__data[6]=D.elements[5],M.__data[7]=0,M.__data[8]=D.elements[6],M.__data[9]=D.elements[7],M.__data[10]=D.elements[8],M.__data[11]=0):(D.toArray(M.__data,X),X+=K.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,G,M.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(E,S,b,N){let R=E.value,T=S+"_"+b;if(N[T]===void 0)return typeof R=="number"||typeof R=="boolean"?N[T]=R:N[T]=R.clone(),!0;{let B=N[T];if(typeof R=="number"||typeof R=="boolean"){if(B!==R)return N[T]=R,!0}else if(B.equals(R)===!1)return B.copy(R),!0}return!1}function g(E){let S=E.uniforms,b=0,N=16;for(let T=0,B=S.length;T<B;T++){let nt=Array.isArray(S[T])?S[T]:[S[T]];for(let _=0,M=nt.length;_<M;_++){let G=nt[_],V=Array.isArray(G.value)?G.value:[G.value];for(let X=0,A=V.length;X<A;X++){let D=V[X],K=v(D),F=b%N,at=F%K.boundary,rt=F+at;b+=at,rt!==0&&N-rt<K.storage&&(b+=N-rt),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=K.storage}}}let R=b%N;return R>0&&(b+=N-R),E.__size=b,E.__cache={},this}function v(E){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function f(E){let S=E.target;S.removeEventListener("dispose",f);let b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),e.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let E in s)e.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Ns=class{constructor(t={}){let{canvas:n=_x(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=o;let m=new Uint32Array(4),g=new Int32Array(4),v=null,f=null,p=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ci,this.toneMapping=Ls,this.toneMappingExposure=1;let S=this,b=!1,N=0,R=0,T=null,B=-1,nt=null,_=new $e,M=new $e,G=null,V=new te(0),X=0,A=n.width,D=n.height,K=1,F=null,at=null,rt=new $e(0,0,A,D),ft=new $e(0,0,A,D),Ct=!1,$=new gc,k=!1,j=!1,gt=new je,ut=new je,Mt=new I,Et=new $e,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function lt(){return T===null?K:1}let P=i;function me(y,L){return n.getContext(y,L)}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Mf}`),n.addEventListener("webglcontextlost",q,!1),n.addEventListener("webglcontextrestored",ot,!1),n.addEventListener("webglcontextcreationerror",dt,!1),P===null){let L="webgl2";if(P=me(L,y),P===null)throw me(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ee,$t,At,ne,Ot,w,x,H,J,it,O,_t,pt,St,ce,ct,xt,Bt,Yt,wt,re,Q,bt,C;function st(){ee=new CM(P),ee.init(),Q=new a3(P,ee),$t=new bM(P,ee,t,Q),At=new s3(P),$t.reverseDepthBuffer&&At.buffers.depth.setReversed(!0),ne=new LM(P),Ot=new XS,w=new o3(P,ee,At,Ot,$t,Q,ne),x=new wM(S),H=new RM(S),J=new kx(P),bt=new MM(P,J),it=new PM(P,J,ne,bt),O=new UM(P,it,J,ne),Yt=new DM(P,$t,w),ct=new EM(Ot),_t=new WS(S,x,H,ee,$t,bt,ct),pt=new d3(S,Ot),St=new qS,ce=new QS(ee),Bt=new yM(S,x,H,At,O,u,l),xt=new n3(S,O,$t),C=new f3(P,ne,$t,At),wt=new SM(P,ee,ne),re=new IM(P,ee,ne),ne.programs=_t.programs,S.capabilities=$t,S.extensions=ee,S.properties=Ot,S.renderLists=St,S.shadowMap=xt,S.state=At,S.info=ne}st();let z=new af(S,P);this.xr=z,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let y=ee.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ee.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(y){y!==void 0&&(K=y,this.setSize(A,D,!1))},this.getSize=function(y){return y.set(A,D)},this.setSize=function(y,L,W=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=y,D=L,n.width=Math.floor(y*K),n.height=Math.floor(L*K),W===!0&&(n.style.width=y+"px",n.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(A*K,D*K).floor()},this.setDrawingBufferSize=function(y,L,W){A=y,D=L,K=W,n.width=Math.floor(y*W),n.height=Math.floor(L*W),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(_)},this.getViewport=function(y){return y.copy(rt)},this.setViewport=function(y,L,W,Y){y.isVector4?rt.set(y.x,y.y,y.z,y.w):rt.set(y,L,W,Y),At.viewport(_.copy(rt).multiplyScalar(K).round())},this.getScissor=function(y){return y.copy(ft)},this.setScissor=function(y,L,W,Y){y.isVector4?ft.set(y.x,y.y,y.z,y.w):ft.set(y,L,W,Y),At.scissor(M.copy(ft).multiplyScalar(K).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(y){At.setScissorTest(Ct=y)},this.setOpaqueSort=function(y){F=y},this.setTransparentSort=function(y){at=y},this.getClearColor=function(y){return y.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(y=!0,L=!0,W=!0){let Y=0;if(y){let U=!1;if(T!==null){let et=T.texture.format;U=et===Df||et===Lf||et===If}if(U){let et=T.texture.type,tt=et===rs||et===ar||et===pa||et===yo||et===Cf||et===Pf,ht=Bt.getClearColor(),yt=Bt.getClearAlpha(),Ut=ht.r,zt=ht.g,Dt=ht.b;tt?(m[0]=Ut,m[1]=zt,m[2]=Dt,m[3]=yt,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=Ut,g[1]=zt,g[2]=Dt,g[3]=yt,P.clearBufferiv(P.COLOR,0,g))}else Y|=P.COLOR_BUFFER_BIT}L&&(Y|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(Y|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",q,!1),n.removeEventListener("webglcontextrestored",ot,!1),n.removeEventListener("webglcontextcreationerror",dt,!1),St.dispose(),ce.dispose(),Ot.dispose(),x.dispose(),H.dispose(),O.dispose(),bt.dispose(),C.dispose(),_t.dispose(),z.dispose(),z.removeEventListener("sessionstart",kt),z.removeEventListener("sessionend",qt),Rt.stop()};function q(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let y=ne.autoReset,L=xt.enabled,W=xt.autoUpdate,Y=xt.needsUpdate,U=xt.type;st(),ne.autoReset=y,xt.enabled=L,xt.autoUpdate=W,xt.needsUpdate=Y,xt.type=U}function dt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function jt(y){let L=y.target;L.removeEventListener("dispose",jt),ue(L)}function ue(y){xe(y),Ot.remove(y)}function xe(y){let L=Ot.get(y).programs;L!==void 0&&(L.forEach(function(W){_t.releaseProgram(W)}),y.isShaderMaterial&&_t.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,W,Y,U,et){L===null&&(L=Xt);let tt=U.isMesh&&U.matrixWorld.determinant()<0,ht=No(y,L,W,Y,U);At.setMaterial(Y,tt);let yt=W.index,Ut=1;if(Y.wireframe===!0){if(yt=it.getWireframeAttribute(W),yt===void 0)return;Ut=2}let zt=W.drawRange,Dt=W.attributes.position,se=zt.start*Ut,Le=(zt.start+zt.count)*Ut;et!==null&&(se=Math.max(se,et.start*Ut),Le=Math.min(Le,(et.start+et.count)*Ut)),yt!==null?(se=Math.max(se,0),Le=Math.min(Le,yt.count)):Dt!=null&&(se=Math.max(se,0),Le=Math.min(Le,Dt.count));let Ge=Le-se;if(Ge<0||Ge===1/0)return;bt.setup(U,Y,ht,W,yt);let Nn,ye=wt;if(yt!==null&&(Nn=J.get(yt),ye=re,ye.setIndex(Nn)),U.isMesh)Y.wireframe===!0?(At.setLineWidth(Y.wireframeLinewidth*lt()),ye.setMode(P.LINES)):ye.setMode(P.TRIANGLES);else if(U.isLine){let Ht=Y.linewidth;Ht===void 0&&(Ht=1),At.setLineWidth(Ht*lt()),U.isLineSegments?ye.setMode(P.LINES):U.isLineLoop?ye.setMode(P.LINE_LOOP):ye.setMode(P.LINE_STRIP)}else U.isPoints?ye.setMode(P.POINTS):U.isSprite&&ye.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ye.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))ye.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Ht=U._multiDrawStarts,dn=U._multiDrawCounts,Me=U._multiDrawCount,mi=yt?J.get(yt).bytesPerElement:1,_r=Ot.get(Y).currentProgram.getUniforms();for(let Fn=0;Fn<Me;Fn++)_r.setValue(P,"_gl_DrawID",Fn),ye.render(Ht[Fn]/mi,dn[Fn])}else if(U.isInstancedMesh)ye.renderInstances(se,Ge,U.count);else if(W.isInstancedBufferGeometry){let Ht=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,dn=Math.min(W.instanceCount,Ht);ye.renderInstances(se,Ge,dn)}else ye.render(se,Ge)};function Zt(y,L,W){y.transparent===!0&&y.side===Ei&&y.forceSinglePass===!1?(y.side=vn,y.needsUpdate=!0,Ue(y,L,W),y.side=Ds,y.needsUpdate=!0,Ue(y,L,W),y.side=Ei):Ue(y,L,W)}this.compile=function(y,L,W=null){W===null&&(W=y),f=ce.get(W),f.init(L),E.push(f),W.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),y!==W&&y.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();let Y=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let et=U.material;if(et)if(Array.isArray(et))for(let tt=0;tt<et.length;tt++){let ht=et[tt];Zt(ht,W,U),Y.add(ht)}else Zt(et,W,U),Y.add(et)}),E.pop(),f=null,Y},this.compileAsync=function(y,L,W=null){let Y=this.compile(y,L,W);return new Promise(U=>{function et(){if(Y.forEach(function(tt){Ot.get(tt).currentProgram.isReady()&&Y.delete(tt)}),Y.size===0){U(y);return}setTimeout(et,10)}ee.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Z=null;function mt(y){Z&&Z(y)}function kt(){Rt.stop()}function qt(){Rt.start()}let Rt=new v_;Rt.setAnimationLoop(mt),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(y){Z=y,z.setAnimationLoop(y),y===null?Rt.stop():Rt.start()},z.addEventListener("sessionstart",kt),z.addEventListener("sessionend",qt),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(L),L=z.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,L,T),f=ce.get(y,E.length),f.init(L),E.push(f),ut.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),$.setFromProjectionMatrix(ut),j=this.localClippingEnabled,k=ct.init(this.clippingPlanes,j),v=St.get(y,p.length),v.init(),p.push(v),z.enabled===!0&&z.isPresenting===!0){let et=S.xr.getDepthSensingMesh();et!==null&&ie(et,L,-1/0,S.sortObjects)}ie(y,L,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(F,at),Kt=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Kt&&Bt.addToRenderList(v,y),this.info.render.frame++,k===!0&&ct.beginShadows();let W=f.state.shadowsArray;xt.render(W,y,L),k===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=v.opaque,U=v.transmissive;if(f.setupLights(),L.isArrayCamera){let et=L.cameras;if(U.length>0)for(let tt=0,ht=et.length;tt<ht;tt++){let yt=et[tt];he(Y,U,y,yt)}Kt&&Bt.render(y);for(let tt=0,ht=et.length;tt<ht;tt++){let yt=et[tt];Jt(v,y,yt,yt.viewport)}}else U.length>0&&he(Y,U,y,L),Kt&&Bt.render(y),Jt(v,y,L);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),y.isScene===!0&&y.onAfterRender(S,y,L),bt.resetDefaultState(),B=-1,nt=null,E.pop(),E.length>0?(f=E[E.length-1],k===!0&&ct.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function ie(y,L,W,Y){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||$.intersectsSprite(y)){Y&&Et.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ut);let tt=O.update(y),ht=y.material;ht.visible&&v.push(y,tt,ht,W,Et.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||$.intersectsObject(y))){let tt=O.update(y),ht=y.material;if(Y&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Et.copy(y.boundingSphere.center)):(tt.boundingSphere===null&&tt.computeBoundingSphere(),Et.copy(tt.boundingSphere.center)),Et.applyMatrix4(y.matrixWorld).applyMatrix4(ut)),Array.isArray(ht)){let yt=tt.groups;for(let Ut=0,zt=yt.length;Ut<zt;Ut++){let Dt=yt[Ut],se=ht[Dt.materialIndex];se&&se.visible&&v.push(y,tt,se,W,Et.z,Dt)}}else ht.visible&&v.push(y,tt,ht,W,Et.z,null)}}let et=y.children;for(let tt=0,ht=et.length;tt<ht;tt++)ie(et[tt],L,W,Y)}function Jt(y,L,W,Y){let U=y.opaque,et=y.transmissive,tt=y.transparent;f.setupLightsView(W),k===!0&&ct.setGlobalState(S.clippingPlanes,W),Y&&At.viewport(_.copy(Y)),U.length>0&&Qt(U,L,W),et.length>0&&Qt(et,L,W),tt.length>0&&Qt(tt,L,W),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function he(y,L,W,Y){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new Tn(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Pi:rs,minFilter:or,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ve.workingColorSpace}));let et=f.state.transmissionRenderTarget[Y.id],tt=Y.viewport||_;et.setSize(tt.z,tt.w);let ht=S.getRenderTarget();S.setRenderTarget(et),S.getClearColor(V),X=S.getClearAlpha(),X<1&&S.setClearColor(16777215,.5),S.clear(),Kt&&Bt.render(W);let yt=S.toneMapping;S.toneMapping=Ls;let Ut=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),k===!0&&ct.setGlobalState(S.clippingPlanes,Y),Qt(y,W,Y),w.updateMultisampleRenderTarget(et),w.updateRenderTargetMipmap(et),ee.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Dt=0,se=L.length;Dt<se;Dt++){let Le=L[Dt],Ge=Le.object,Nn=Le.geometry,ye=Le.material,Ht=Le.group;if(ye.side===Ei&&Ge.layers.test(Y.layers)){let dn=ye.side;ye.side=vn,ye.needsUpdate=!0,Ee(Ge,W,Y,Nn,ye,Ht),ye.side=dn,ye.needsUpdate=!0,zt=!0}}zt===!0&&(w.updateMultisampleRenderTarget(et),w.updateRenderTargetMipmap(et))}S.setRenderTarget(ht),S.setClearColor(V,X),Ut!==void 0&&(Y.viewport=Ut),S.toneMapping=yt}function Qt(y,L,W){let Y=L.isScene===!0?L.overrideMaterial:null;for(let U=0,et=y.length;U<et;U++){let tt=y[U],ht=tt.object,yt=tt.geometry,Ut=Y===null?tt.material:Y,zt=tt.group;ht.layers.test(W.layers)&&Ee(ht,L,W,yt,Ut,zt)}}function Ee(y,L,W,Y,U,et){y.onBeforeRender(S,L,W,Y,U,et),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(S,L,W,Y,y,et),U.transparent===!0&&U.side===Ei&&U.forceSinglePass===!1?(U.side=vn,U.needsUpdate=!0,S.renderBufferDirect(W,L,Y,U,y,et),U.side=Ds,U.needsUpdate=!0,S.renderBufferDirect(W,L,Y,U,y,et),U.side=Ei):S.renderBufferDirect(W,L,Y,U,y,et),y.onAfterRender(S,L,W,Y,U,et)}function Ue(y,L,W){L.isScene!==!0&&(L=Xt);let Y=Ot.get(y),U=f.state.lights,et=f.state.shadowsArray,tt=U.state.version,ht=_t.getParameters(y,U.state,et,L,W),yt=_t.getProgramCacheKey(ht),Ut=Y.programs;Y.environment=y.isMeshStandardMaterial?L.environment:null,Y.fog=L.fog,Y.envMap=(y.isMeshStandardMaterial?H:x).get(y.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Ut===void 0&&(y.addEventListener("dispose",jt),Ut=new Map,Y.programs=Ut);let zt=Ut.get(yt);if(zt!==void 0){if(Y.currentProgram===zt&&Y.lightsStateVersion===tt)return Uo(y,ht),zt}else ht.uniforms=_t.getUniforms(y),y.onBeforeCompile(ht,S),zt=_t.acquireProgram(ht,yt),Ut.set(yt,zt),Y.uniforms=ht.uniforms;let Dt=Y.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Dt.clippingPlanes=ct.uniform),Uo(y,ht),Y.needsLights=gr(y),Y.lightsStateVersion=tt,Y.needsLights&&(Dt.ambientLightColor.value=U.state.ambient,Dt.lightProbe.value=U.state.probe,Dt.directionalLights.value=U.state.directional,Dt.directionalLightShadows.value=U.state.directionalShadow,Dt.spotLights.value=U.state.spot,Dt.spotLightShadows.value=U.state.spotShadow,Dt.rectAreaLights.value=U.state.rectArea,Dt.ltc_1.value=U.state.rectAreaLTC1,Dt.ltc_2.value=U.state.rectAreaLTC2,Dt.pointLights.value=U.state.point,Dt.pointLightShadows.value=U.state.pointShadow,Dt.hemisphereLights.value=U.state.hemi,Dt.directionalShadowMap.value=U.state.directionalShadowMap,Dt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Dt.spotShadowMap.value=U.state.spotShadowMap,Dt.spotLightMatrix.value=U.state.spotLightMatrix,Dt.spotLightMap.value=U.state.spotLightMap,Dt.pointShadowMap.value=U.state.pointShadowMap,Dt.pointShadowMatrix.value=U.state.pointShadowMatrix),Y.currentProgram=zt,Y.uniformsList=null,zt}function pi(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=mo.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function Uo(y,L){let W=Ot.get(y);W.outputColorSpace=L.outputColorSpace,W.batching=L.batching,W.batchingColor=L.batchingColor,W.instancing=L.instancing,W.instancingColor=L.instancingColor,W.instancingMorph=L.instancingMorph,W.skinning=L.skinning,W.morphTargets=L.morphTargets,W.morphNormals=L.morphNormals,W.morphColors=L.morphColors,W.morphTargetsCount=L.morphTargetsCount,W.numClippingPlanes=L.numClippingPlanes,W.numIntersection=L.numClipIntersection,W.vertexAlphas=L.vertexAlphas,W.vertexTangents=L.vertexTangents,W.toneMapping=L.toneMapping}function No(y,L,W,Y,U){L.isScene!==!0&&(L=Xt),w.resetTextureUnits();let et=L.fog,tt=Y.isMeshStandardMaterial?L.environment:null,ht=T===null?S.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Os,yt=(Y.isMeshStandardMaterial?H:x).get(Y.envMap||tt),Ut=Y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,zt=!!W.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Dt=!!W.morphAttributes.position,se=!!W.morphAttributes.normal,Le=!!W.morphAttributes.color,Ge=Ls;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ge=S.toneMapping);let Nn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ye=Nn!==void 0?Nn.length:0,Ht=Ot.get(Y),dn=f.state.lights;if(k===!0&&(j===!0||y!==nt)){let Qn=y===nt&&Y.id===B;ct.setState(Y,y,Qn)}let Me=!1;Y.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==dn.state.version||Ht.outputColorSpace!==ht||U.isBatchedMesh&&Ht.batching===!1||!U.isBatchedMesh&&Ht.batching===!0||U.isBatchedMesh&&Ht.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ht.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ht.instancing===!1||!U.isInstancedMesh&&Ht.instancing===!0||U.isSkinnedMesh&&Ht.skinning===!1||!U.isSkinnedMesh&&Ht.skinning===!0||U.isInstancedMesh&&Ht.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ht.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ht.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ht.instancingMorph===!1&&U.morphTexture!==null||Ht.envMap!==yt||Y.fog===!0&&Ht.fog!==et||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==ct.numPlanes||Ht.numIntersection!==ct.numIntersection)||Ht.vertexAlphas!==Ut||Ht.vertexTangents!==zt||Ht.morphTargets!==Dt||Ht.morphNormals!==se||Ht.morphColors!==Le||Ht.toneMapping!==Ge||Ht.morphTargetsCount!==ye)&&(Me=!0):(Me=!0,Ht.__version=Y.version);let mi=Ht.currentProgram;Me===!0&&(mi=Ue(Y,L,U));let _r=!1,Fn=!1,Xc=!1,qe=mi.getUniforms(),hs=Ht.uniforms;if(At.useProgram(mi.program)&&(_r=!0,Fn=!0,Xc=!0),Y.id!==B&&(B=Y.id,Fn=!0),_r||nt!==y){$t.reverseDepthBuffer?(gt.copy(y.projectionMatrix),xx(gt),yx(gt),qe.setValue(P,"projectionMatrix",gt)):qe.setValue(P,"projectionMatrix",y.projectionMatrix),qe.setValue(P,"viewMatrix",y.matrixWorldInverse);let Qn=qe.map.cameraPosition;Qn!==void 0&&Qn.setValue(P,Mt.setFromMatrixPosition(y.matrixWorld)),$t.logarithmicDepthBuffer&&qe.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&qe.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),nt!==y&&(nt=y,Fn=!0,Xc=!0)}if(U.isSkinnedMesh){qe.setOptional(P,U,"bindMatrix"),qe.setOptional(P,U,"bindMatrixInverse");let Qn=U.skeleton;Qn&&(Qn.boneTexture===null&&Qn.computeBoneTexture(),qe.setValue(P,"boneTexture",Qn.boneTexture,w))}U.isBatchedMesh&&(qe.setOptional(P,U,"batchingTexture"),qe.setValue(P,"batchingTexture",U._matricesTexture,w),qe.setOptional(P,U,"batchingIdTexture"),qe.setValue(P,"batchingIdTexture",U._indirectTexture,w),qe.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&qe.setValue(P,"batchingColorTexture",U._colorsTexture,w));let Yc=W.morphAttributes;if((Yc.position!==void 0||Yc.normal!==void 0||Yc.color!==void 0)&&Yt.update(U,W,mi),(Fn||Ht.receiveShadow!==U.receiveShadow)&&(Ht.receiveShadow=U.receiveShadow,qe.setValue(P,"receiveShadow",U.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(hs.envMap.value=yt,hs.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&L.environment!==null&&(hs.envMapIntensity.value=L.environmentIntensity),Fn&&(qe.setValue(P,"toneMappingExposure",S.toneMappingExposure),Ht.needsLights&&Hs(hs,Xc),et&&Y.fog===!0&&pt.refreshFogUniforms(hs,et),pt.refreshMaterialUniforms(hs,Y,K,D,f.state.transmissionRenderTarget[y.id]),mo.upload(P,pi(Ht),hs,w)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(mo.upload(P,pi(Ht),hs,w),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&qe.setValue(P,"center",U.center),qe.setValue(P,"modelViewMatrix",U.modelViewMatrix),qe.setValue(P,"normalMatrix",U.normalMatrix),qe.setValue(P,"modelMatrix",U.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Qn=Y.uniformsGroups;for(let qc=0,X_=Qn.length;qc<X_;qc++){let Zf=Qn[qc];C.update(Zf,mi),C.bind(Zf,mi)}}return mi}function Hs(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function gr(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(y,L,W){Ot.get(y.texture).__webglTexture=L,Ot.get(y.depthTexture).__webglTexture=W;let Y=Ot.get(y);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=W===void 0,Y.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,L){let W=Ot.get(y);W.__webglFramebuffer=L,W.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,W=0){T=y,N=L,R=W;let Y=!0,U=null,et=!1,tt=!1;if(y){let yt=Ot.get(y);if(yt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(P.FRAMEBUFFER,null),Y=!1;else if(yt.__webglFramebuffer===void 0)w.setupRenderTarget(y);else if(yt.__hasExternalTextures)w.rebindTextures(y,Ot.get(y.texture).__webglTexture,Ot.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Dt=y.depthTexture;if(yt.__boundDepthTexture!==Dt){if(Dt!==null&&Ot.has(Dt)&&(y.width!==Dt.image.width||y.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(y)}}let Ut=y.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(tt=!0);let zt=Ot.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(zt[L])?U=zt[L][W]:U=zt[L],et=!0):y.samples>0&&w.useMultisampledRTT(y)===!1?U=Ot.get(y).__webglMultisampledFramebuffer:Array.isArray(zt)?U=zt[W]:U=zt,_.copy(y.viewport),M.copy(y.scissor),G=y.scissorTest}else _.copy(rt).multiplyScalar(K).floor(),M.copy(ft).multiplyScalar(K).floor(),G=Ct;if(At.bindFramebuffer(P.FRAMEBUFFER,U)&&Y&&At.drawBuffers(y,U),At.viewport(_),At.scissor(M),At.setScissorTest(G),et){let yt=Ot.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,yt.__webglTexture,W)}else if(tt){let yt=Ot.get(y.texture),Ut=L||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,yt.__webglTexture,W||0,Ut)}B=-1},this.readRenderTargetPixels=function(y,L,W,Y,U,et,tt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=Ot.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&tt!==void 0&&(ht=ht[tt]),ht){At.bindFramebuffer(P.FRAMEBUFFER,ht);try{let yt=y.texture,Ut=yt.format,zt=yt.type;if(!$t.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-Y&&W>=0&&W<=y.height-U&&P.readPixels(L,W,Y,U,Q.convert(Ut),Q.convert(zt),et)}finally{let yt=T!==null?Ot.get(T).__webglFramebuffer:null;At.bindFramebuffer(P.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(y,L,W,Y,U,et,tt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=Ot.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&tt!==void 0&&(ht=ht[tt]),ht){let yt=y.texture,Ut=yt.format,zt=yt.type;if(!$t.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=y.width-Y&&W>=0&&W<=y.height-U){At.bindFramebuffer(P.FRAMEBUFFER,ht);let Dt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Dt),P.bufferData(P.PIXEL_PACK_BUFFER,et.byteLength,P.STREAM_READ),P.readPixels(L,W,Y,U,Q.convert(Ut),Q.convert(zt),0);let se=T!==null?Ot.get(T).__webglFramebuffer:null;At.bindFramebuffer(P.FRAMEBUFFER,se);let Le=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await vx(P,Le,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Dt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,et),P.deleteBuffer(Dt),P.deleteSync(Le),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,L=null,W=0){y.isTexture!==!0&&(nc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,y=arguments[1]);let Y=Math.pow(2,-W),U=Math.floor(y.image.width*Y),et=Math.floor(y.image.height*Y),tt=L!==null?L.x:0,ht=L!==null?L.y:0;w.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,tt,ht,U,et),At.unbindTexture()},this.copyTextureToTexture=function(y,L,W=null,Y=null,U=0){y.isTexture!==!0&&(nc("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,y=arguments[1],L=arguments[2],U=arguments[3]||0,W=null);let et,tt,ht,yt,Ut,zt;W!==null?(et=W.max.x-W.min.x,tt=W.max.y-W.min.y,ht=W.min.x,yt=W.min.y):(et=y.image.width,tt=y.image.height,ht=0,yt=0),Y!==null?(Ut=Y.x,zt=Y.y):(Ut=0,zt=0);let Dt=Q.convert(L.format),se=Q.convert(L.type);w.setTexture2D(L,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);let Le=P.getParameter(P.UNPACK_ROW_LENGTH),Ge=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Nn=P.getParameter(P.UNPACK_SKIP_PIXELS),ye=P.getParameter(P.UNPACK_SKIP_ROWS),Ht=P.getParameter(P.UNPACK_SKIP_IMAGES),dn=y.isCompressedTexture?y.mipmaps[U]:y.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,dn.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,dn.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ht),P.pixelStorei(P.UNPACK_SKIP_ROWS,yt),y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,Ut,zt,et,tt,Dt,se,dn.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,Ut,zt,dn.width,dn.height,Dt,dn.data):P.texSubImage2D(P.TEXTURE_2D,U,Ut,zt,et,tt,Dt,se,dn),P.pixelStorei(P.UNPACK_ROW_LENGTH,Le),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ge),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Nn),P.pixelStorei(P.UNPACK_SKIP_ROWS,ye),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ht),U===0&&L.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(y,L,W=null,Y=null,U=0){y.isTexture!==!0&&(nc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,Y=arguments[1]||null,y=arguments[2],L=arguments[3],U=arguments[4]||0);let et,tt,ht,yt,Ut,zt,Dt,se,Le,Ge=y.isCompressedTexture?y.mipmaps[U]:y.image;W!==null?(et=W.max.x-W.min.x,tt=W.max.y-W.min.y,ht=W.max.z-W.min.z,yt=W.min.x,Ut=W.min.y,zt=W.min.z):(et=Ge.width,tt=Ge.height,ht=Ge.depth,yt=0,Ut=0,zt=0),Y!==null?(Dt=Y.x,se=Y.y,Le=Y.z):(Dt=0,se=0,Le=0);let Nn=Q.convert(L.format),ye=Q.convert(L.type),Ht;if(L.isData3DTexture)w.setTexture3D(L,0),Ht=P.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)w.setTexture2DArray(L,0),Ht=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);let dn=P.getParameter(P.UNPACK_ROW_LENGTH),Me=P.getParameter(P.UNPACK_IMAGE_HEIGHT),mi=P.getParameter(P.UNPACK_SKIP_PIXELS),_r=P.getParameter(P.UNPACK_SKIP_ROWS),Fn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ge.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ge.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,yt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ut),P.pixelStorei(P.UNPACK_SKIP_IMAGES,zt),y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Ht,U,Dt,se,Le,et,tt,ht,Nn,ye,Ge.data):L.isCompressedArrayTexture?P.compressedTexSubImage3D(Ht,U,Dt,se,Le,et,tt,ht,Nn,Ge.data):P.texSubImage3D(Ht,U,Dt,se,Le,et,tt,ht,Nn,ye,Ge),P.pixelStorei(P.UNPACK_ROW_LENGTH,dn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Me),P.pixelStorei(P.UNPACK_SKIP_PIXELS,mi),P.pixelStorei(P.UNPACK_SKIP_ROWS,_r),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Fn),U===0&&L.generateMipmaps&&P.generateMipmap(Ht),At.unbindTexture()},this.initRenderTarget=function(y){Ot.get(y).__webglFramebuffer===void 0&&w.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?w.setTextureCube(y,0):y.isData3DTexture?w.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?w.setTexture2DArray(y,0):w.setTexture2D(y,0),At.unbindTexture()},this.resetState=function(){N=0,R=0,T=null,At.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return is}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=t===Uf?"display-p3":"srgb",n.unpackColorSpace=ve.workingColorSpace===Rc?"display-p3":"srgb"}};var Fs=class extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new as,this.environmentIntensity=1,this.environmentRotation=new as,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},lf=class{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Wd,this.updateRanges=[],this.version=0,this.uuid=ss()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=n.array[i+s];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ss()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ss()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},En=new I,xc=class e{constructor(t,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)En.fromBufferAttribute(this,n),En.applyMatrix4(t),this.setXYZ(n,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)En.fromBufferAttribute(this,n),En.applyNormalMatrix(t),this.setXYZ(n,En.x,En.y,En.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)En.fromBufferAttribute(this,n),En.transformDirection(t),this.setXYZ(n,En.x,En.y,En.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=we(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=we(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=we(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=we(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=we(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Ti(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Ti(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Ti(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Ti(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=we(n,this.array),i=we(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=we(n,this.array),i=we(i,this.array),s=we(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=we(n,this.array),i=we(i,this.array),s=we(s,this.array),r=we(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new Gt(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},va=class extends Us{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},oo,aa=new I,ao=new I,lo=new I,co=new It,la=new It,b_=new je,Xl=new I,ca=new I,Yl=new I,$g=new It,id=new It,jg=new It,yc=class extends Zn{constructor(t=new va){if(super(),this.isSprite=!0,this.type="Sprite",oo===void 0){oo=new Ce;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new lf(n,5);oo.setIndex([0,1,2,0,2,3]),oo.setAttribute("position",new xc(i,3,0,!1)),oo.setAttribute("uv",new xc(i,2,3,!1))}this.geometry=oo,this.material=t,this.center=new It(.5,.5)}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ao.setFromMatrixScale(this.matrixWorld),b_.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),lo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ao.multiplyScalar(-lo.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ql(Xl.set(-.5,-.5,0),lo,o,ao,s,r),ql(ca.set(.5,-.5,0),lo,o,ao,s,r),ql(Yl.set(.5,.5,0),lo,o,ao,s,r),$g.set(0,0),id.set(1,0),jg.set(1,1);let a=t.ray.intersectTriangle(Xl,ca,Yl,!1,aa);if(a===null&&(ql(ca.set(-.5,.5,0),lo,o,ao,s,r),id.set(0,1),a=t.ray.intersectTriangle(Xl,Yl,ca,!1,aa),a===null))return;let l=t.ray.origin.distanceTo(aa);l<t.near||l>t.far||n.push({distance:l,point:aa.clone(),uv:Is.getInterpolation(aa,Xl,ca,Yl,$g,id,jg,new It),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ql(e,t,n,i,s,r){co.subVectors(e,n).addScalar(.5).multiply(i),s!==void 0?(la.x=r*co.x-s*co.y,la.y=s*co.x+r*co.y):la.copy(co),e.copy(t),e.x+=la.x,e.y+=la.y,e.applyMatrix4(b_)}var cf=class extends Us{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Jg=new je,hf=new bo,Zl=new So,Kl=new I,An=class extends Zn{constructor(t=new Ce,n=new cf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(s),Zl.radius+=r,t.ray.intersectsSphere(Zl)===!1)return;Jg.copy(s).invert(),hf.copy(t.ray).applyMatrix4(Jg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=u,v=m;g<v;g++){let f=c.getX(g);Kl.fromBufferAttribute(d,f),Qg(Kl,f,l,s,t,n,this)}}else{let u=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=u,v=m;g<v;g++)Kl.fromBufferAttribute(d,g),Qg(Kl,g,l,s,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qg(e,t,n,i,s,r,o){let a=hf.distanceSqToPoint(e);if(a<n){let l=new I;hf.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Mc=class extends qn{constructor(t,n,i,s,r,o,a,l,c){super(t,n,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var cr=class e extends Ce{constructor(t=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);let r=[],o=[],a=[],l=[],c=new I,h=new It;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=n;d++,u+=3){let m=i+d/n*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=n;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new un(o,3)),this.setAttribute("normal",new un(a,3)),this.setAttribute("uv",new un(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var Sc=class e extends Ce{constructor(t=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new I,u=new I,m=[],g=[],v=[],f=[];for(let p=0;p<=i;p++){let E=[],S=p/i,b=0;p===0&&o===0?b=.5/n:p===i&&l===Math.PI&&(b=-.5/n);for(let N=0;N<=n;N++){let R=N/n;d.x=-t*Math.cos(s+R*r)*Math.sin(o+S*a),d.y=t*Math.cos(o+S*a),d.z=t*Math.sin(s+R*r)*Math.sin(o+S*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),f.push(R+b,1-S),E.push(c++)}h.push(E)}for(let p=0;p<i;p++)for(let E=0;E<n;E++){let S=h[p][E+1],b=h[p][E],N=h[p+1][E],R=h[p+1][E+1];(p!==0||o>0)&&m.push(S,b,R),(p!==i-1||l<Math.PI)&&m.push(b,N,R)}this.setIndex(m),this.setAttribute("position",new un(g,3)),this.setAttribute("normal",new un(v,3)),this.setAttribute("uv",new un(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var bc=class extends le{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};function $l(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function p3(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var To=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=n[++i],t<s)break e}o=n.length;break n}if(!(t>=r)){let a=n[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],t>=r)break e}o=i,i=0;break n}break t}for(;i<o;){let a=i+o>>>1;t<n[a]?o=a:i=a+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)n[o]=i[r+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uf=class extends To{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sg,endingEnd:sg}}intervalChanged_(t,n,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case rg:r=t,a=2*n-i;break;case og:r=s.length-2,a=n+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case rg:o=t,l=2*i-n;break;case og:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(i-n)/(s-n),v=g*g,f=v*g,p=-u*f+2*u*v-u*g,E=(1+u)*f+(-1.5-2*u)*v+(-.5+u)*g+1,S=(-1-m)*f+(1.5+m)*v+.5*g,b=m*f-m*v;for(let N=0;N!==a;++N)r[N]=p*o[h+N]+E*o[c+N]+S*o[l+N]+b*o[d+N];return r}},df=class extends To{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-n)/(s-n),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},ff=class extends To{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ci=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$l(n,this.TimeBufferType),this.values=$l(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:$l(t.times,Array),values:$l(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ff(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new df(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new uf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case ic:n=this.InterpolantFactoryMethodDiscrete;break;case Gd:n=this.InterpolantFactoryMethodLinear;break;case Cu:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ic;case this.InterpolantFactoryMethodLinear:return Gd;case this.InterpolantFactoryMethodSmooth:return Cu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>n;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&p3(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Cu,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,u=d-i,m=d+i;for(let g=0;g!==i;++g){let v=n[d+g];if(v!==n[u+g]||v!==n[m+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let m=0;m!==i;++m)n[u+m]=n[d+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=n.slice(0,o*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};Ci.prototype.TimeBufferType=Float32Array;Ci.prototype.ValueBufferType=Float32Array;Ci.prototype.DefaultInterpolation=Gd;var hr=class extends Ci{constructor(t,n,i){super(t,n,i)}};hr.prototype.ValueTypeName="bool";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=ic;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;var pf=class extends Ci{};pf.prototype.ValueTypeName="color";var mf=class extends Ci{};mf.prototype.ValueTypeName="number";var gf=class extends To{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(s-n),c=t*a;for(let h=c+a;c!==h;c+=4)Ri.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ec=class extends Ci{InterpolantFactoryMethodLinear(t){return new gf(this.times,this.values,this.getValueSize(),t)}};Ec.prototype.ValueTypeName="quaternion";Ec.prototype.InterpolantFactoryMethodSmooth=void 0;var ur=class extends Ci{constructor(t,n,i){super(t,n,i)}};ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=ic;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var _f=class extends Ci{};_f.prototype.ValueTypeName="vector";var vf=class{constructor(t,n,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},m3=new vf,xf=class{constructor(t){this.manager=t!==void 0?t:m3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,r){i.load(t,s,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};xf.DEFAULT_MATERIAL_NAME="__DEFAULT";var wc=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=t_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=t_();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}};function t_(){return performance.now()}var Of="\\[\\]\\.:\\/",g3=new RegExp("["+Of+"]","g"),Bf="[^"+Of+"]",_3="[^"+Of.replace("\\.","")+"]",v3=/((?:WC+[\/:])*)/.source.replace("WC",Bf),x3=/(WCOD+)?/.source.replace("WCOD",_3),y3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bf),M3=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bf),S3=new RegExp("^"+v3+x3+y3+M3+"$"),b3=["material","materials","bones","map"],yf=class{constructor(t,n,i){let s=i||Be.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Be=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(g3,"")}static parseTrackName(t){let n=S3.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);b3.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Be.Composite=yf;Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray];Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var WE=new Float32Array(1);var xa=class{constructor(t=1,n=0,i=0){return this.radius=t,this.phi=n,this.theta=i,this}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(_n(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Tc=class extends os{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mf);var E3=`
uniform float uBurst;
vec3 burstPoint(vec3 p, float seed) {
  vec3 d = p - vec3(0.,4.8,0.);
  float a = atan(d.z,d.x) + .9*(seed-.5);
  float lift = clamp(d.y*.13 + .6*(seed-.5),-.85,.85);
  vec3 dir = vec3(cos(a)*sqrt(1.-lift*lift),lift,sin(a)*sqrt(1.-lift*lift));
  float travel = clamp(uBurst*1.13-.12*seed,0.,1.);
  float kick = travel + .50*sin(travel*3.14159);
  vec3 target = vec3(0.,4.8,0.) + dir*(4.15+5.0*seed);
  vec3 outPos = mix(p,target,kick);
  float twist = (.35+.55*seed)*travel;
  outPos.xz = mat2(cos(twist),-sin(twist),sin(twist),cos(twist))*outPos.xz;
  return outPos;
}`;function Pc(e){let t={value:0};for(let[n,i]of e){n.m.uniforms.uBurst=t;let s=n.m.vertexShader,r="vec4("+i+", 1.0)";if(!s.includes(r))throw Error("Missing particle position for expansion");n.m.vertexShader=E3+s.replace(r,"vec4(burstPoint("+i+",aRand), 1.0)"),n.points.frustumCulled=!1}return t}var Ic={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Kn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},w3=new _a(-1,1,1,-1,0,1),kf=class extends Ce{constructor(){super(),this.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new un([0,2,0,0,2,0],2))}},T3=new kf,ks=class{constructor(t){this._mesh=new He(T3,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,w3)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var pr=class extends Kn{constructor(t,n){super(),this.textureID=n!==void 0?n:"tDiffuse",t instanceof le?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Bs.clone(t.uniforms),this.material=new le({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ks(this.material)}render(t,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ya=class extends Kn{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Lc=class extends Kn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Dc=class{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){let i=t.getSize(new It);this._width=i.width,this._height=i.height,n=new Tn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pi}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new pr(Ic),this.copyPass.material.blending=ki,this.clock=new wc}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let n=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ya!==void 0&&(o instanceof ya?i=!0:o instanceof Lc&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){let n=this.renderer.getSize(new It);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Uc=class extends Kn{constructor(t,n,i=null,s=null,r=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new te}render(t,n,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var w_={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new te(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ro=class e extends Kn{constructor(t,n,i,s){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new It(t.x,t.y):new It(256,256),this.clearColor=new te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Tn(r,o,{type:Pi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new Tn(r,o,{type:Pi});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let m=new Tn(r,o,{type:Pi});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=w_;this.highPassUniforms=Bs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new le({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new It(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ic;this.copyUniforms=Bs.clone(h.uniforms),this.blendMaterial=new le({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:go,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new te,this.oldClearAlpha=1,this.basic=new Eo,this.fsQuad=new ks(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,n){let i=Math.round(t/2),s=Math.round(n/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new It(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,n,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let n=[];for(let i=0;i<t;i++)n.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new le({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new It(.5,.5)},direction:{value:new It(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new le({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Ro.BlurDirectionX=new It(1,0);Ro.BlurDirectionY=new It(0,1);var T_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Nc=class extends Kn{constructor(){super();let t=T_;this.uniforms=Bs.clone(t.uniforms),this.material=new bc({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ks(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ve.getTransfer(this._outputColorSpace)===Re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Sf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ef?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===wf?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Tf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Af&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var A_={type:"change"},Hf={type:"start"},C_={type:"end"},Fc=new bo,R_=new bi,A3=Math.cos(70*di.DEG2RAD),ln=new I,Dn=2*Math.PI,Te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zf=1e-6,Co=class extends Tc{constructor(t,n=null){super(t,n),this.state=Te.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:dr.ROTATE,MIDDLE:dr.DOLLY,RIGHT:dr.PAN},this.touches={ONE:fr.ROTATE,TWO:fr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Ri,this._lastTargetPosition=new I,this._quat=new Ri().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xa,this._sphericalDelta=new xa,this._scale=1,this._panOffset=new I,this._rotateStart=new It,this._rotateEnd=new It,this._rotateDelta=new It,this._panStart=new It,this._panEnd=new It,this._panDelta=new It,this._dollyStart=new It,this._dollyEnd=new It,this._dollyDelta=new It,this._dollyDirection=new I,this._mouse=new It,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=C3.bind(this),this._onPointerDown=R3.bind(this),this._onPointerUp=P3.bind(this),this._onContextMenu=O3.bind(this),this._onMouseWheel=D3.bind(this),this._onKeyDown=U3.bind(this),this._onTouchStart=N3.bind(this),this._onTouchMove=F3.bind(this),this._onMouseDown=I3.bind(this),this._onMouseMove=L3.bind(this),this._interceptControlDown=B3.bind(this),this._interceptControlUp=k3.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(A_),this.update(),this.state=Te.NONE}update(t=null){let n=this.object.position;ln.copy(n).sub(this.target),ln.applyQuaternion(this._quat),this._spherical.setFromVector3(ln),this.autoRotate&&this.state===Te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Dn:i>Math.PI&&(i-=Dn),s<-Math.PI?s+=Dn:s>Math.PI&&(s-=Dn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ln.setFromSpherical(this._spherical),ln.applyQuaternion(this._quatInverse),n.copy(this.target).add(ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=ln.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Fc.origin.copy(this.object.position),Fc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fc.direction))<A3?this.object.lookAt(this.target):(R_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fc.intersectPlane(R_,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>zf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zf||this._lastTargetPosition.distanceToSquared(this.target)>zf?(this.dispatchEvent(A_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Dn/60*this.autoRotateSpeed*t:Dn/60/60*this.autoRotateSpeed}_getZoomScale(t){let n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){ln.setFromMatrixColumn(n,0),ln.multiplyScalar(-t),this._panOffset.add(ln)}_panUp(t,n){this.screenSpacePanning===!0?ln.setFromMatrixColumn(n,1):(ln.setFromMatrixColumn(n,0),ln.crossVectors(this.object.up,ln)),ln.multiplyScalar(t),this._panOffset.add(ln)}_pan(t,n){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ln.copy(s).sub(this.target);let r=ln.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+n.x)*.5,a=(t.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new It,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){let n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function R3(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e)))}function C3(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function P3(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(C_),this.state=Te.NONE;break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function I3(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case dr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Te.DOLLY;break;case dr.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Te.ROTATE}break;case dr.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Te.PAN}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(Hf)}function L3(e){switch(this.state){case Te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function D3(e){this.enabled===!1||this.enableZoom===!1||this.state!==Te.NONE||(e.preventDefault(),this.dispatchEvent(Hf),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(C_))}function U3(e){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(e)}function N3(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case fr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Te.TOUCH_ROTATE;break;case fr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Te.TOUCH_PAN;break;default:this.state=Te.NONE}break;case 2:switch(this.touches.TWO){case fr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Te.TOUCH_DOLLY_PAN;break;case fr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Te.TOUCH_DOLLY_ROTATE;break;default:this.state=Te.NONE}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(Hf)}function F3(e){switch(this._trackPointer(e),this.state){case Te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Te.NONE}}function O3(e){this.enabled!==!1&&e.preventDefault()}function B3(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function k3(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Wt={B0:1.4,B1:7.8,C0:8.2,C1:12.7,D0:12.9,D1:14.4,TEXT:15.2,ENTER:16},z3=1.4,Ma=Wt.D0-.2,cs=10,$n=.9,Sa=4.1,H3=5,Po=cs+.45,jn=e=>Math.min(1,Math.max(0,e)),de=(e,t,n)=>{let i=jn((n-e)/(t-e));return i*i*(3-2*i)},Vf=e=>.5-.5*Math.cos(Math.PI*jn(e)),Un=(e,t,n)=>e+(t-e)*n;function zs(e){let t=jn((e-$n)/(cs-$n)),n=Sa*Math.pow(1-t,.92),i=t*H3%1,s=i<.8?Math.pow(i/.8,.85):1-de(.8,1,i);return n*(1-.3*s)}function Bc(e,t,n,i){let s=$n+e*(cs-$n),r=e*t*Math.PI*2,o=zs(s)*n;return i.set(o*Math.cos(r),s,o*Math.sin(r))}var fi=`
  varying vec3 vCol; varying float vB;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;
    float a = exp(-d * d * 4.0) + 0.6 * exp(-d * d * 22.0);
    gl_FragColor = vec4(vCol * vB * a, 1.0);
  }`,Rn={transparent:!0,depthWrite:!1,blending:go},P_="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }";function ba(e,t,n,i,s,[r,o,a],l){let c=new Dc(e);c.addPass(new Uc(t,n)),c.addPass(new pr({uniforms:{tDiffuse:{value:null}},vertexShader:P_,fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
      void main(){ vec3 c = texture2D(tDiffuse, vUv).rgb;
        if (!(c.r >= 0.0 && c.g >= 0.0 && c.b >= 0.0) || any(isinf(c))) c = vec3(0.0); // \u515C\u5E95\uFF1A\u574F\u70B9\u76F4\u63A5\u5F53\u9ED1\uFF0C\u522B\u8BA9\u6CDB\u5149\u6269\u6563
        c = min(c, vec3(64.0)); vec3 e = max(c - 1.0, 0.0); gl_FragColor = vec4(min(c, 1.0) + e / (1.0 + e) * 0.6, 1.0); }`}));let h=new Ro(new It(i,s),r,o,a);return c.addPass(h),c.addPass(new Nc),l&&c.addPass(new pr({uniforms:{tDiffuse:{value:null}},vertexShader:P_,fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
        void main(){ vec3 c = texture2D(tDiffuse, vUv).rgb; gl_FragColor = vec4(max(c - ${l.toFixed(3)}, 0.0) / ${(1-l).toFixed(3)}, 1.0); }`})),{composer:c,bloom:h}}var Gf=8;function kc(e,t){let i=new I,s=new I,r=new Float32Array(24001);Bc(0,Gf,1.04,s);for(let g=1;g<=24e3;g++)Bc(g/24e3,Gf,1.04,i),r[g]=r[g-1]+i.distanceTo(s),s.copy(i);let o=r[24e3],a=Math.round(o/t),l=new Float32Array(a*3),c=new Float32Array(a),h=new Float32Array(a),d=0;for(let g=0;g<a;g++){let v=g/(a-1)*o;for(;d<24e3&&r[d+1]<v;)d++;let f=(v-r[d])/Math.max(1e-6,r[d+1]-r[d]);Bc((d+f)/24e3,Gf,1.04,i),l.set([i.x,i.y,i.z],g*3),c[g]=g/(a-1),h[g]=Math.random()}let u=new Ce;u.setAttribute("position",new Gt(l,3)),u.setAttribute("aU",new Gt(c,1)),u.setAttribute("aRand",new Gt(h,1));let m=new le({uniforms:{uPx:e,uTime:{value:0},uProg:{value:0},uGain:{value:.3},uGlint:{value:0},uSize:{value:1},uFade:{value:1}},vertexShader:`
      attribute float aU, aRand; uniform float uPx, uTime, uProg, uGain, uGlint, uSize, uFade;
      varying vec3 vCol; varying float vB;
      void main() {
        float vis = step(aU, uProg) * step(0.0001, uProg); // \u8FD8\u6CA1\u5F00\u59CB\u753B\u65F6\u7B2C\u4E00\u4E2A\u70B9\u4E5F\u522B\u4EAE
        float head = exp(-max(uProg - aU, 0.0) * 90.0) * vis;
        float gl = uGlint * exp(-abs(fract(uTime * 0.06) - aU) * 260.0);
        vB = uFade * vis * (uGain * (0.7 + 0.3 * sin(uTime * 4.0 + aRand * 60.0)) + head * 0.9 + gl * 1.2);
        vCol = mix(vec3(1.0, 0.72, 0.38), vec3(1.0, 0.95, 0.86), clamp(head + gl, 0.0, 1.0));
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = max(1.0, (0.06 + head * 0.16 + gl * 0.06) * uSize * uPx / -mv.z);
      }`,fragmentShader:fi,...Rn});return{m,pos:l,n:a,points:new An(u,m)}}var Wf=5;function L_(e,t,n){let i=t+n,s=new Float32Array(i*3),r=new Float32Array(i*3),o=new Float32Array(i),a=new Float32Array(i),l=new Float32Array(i),c=[[.015,.16,.04],[.03,.26,.07],[.06,.36,.1],[.02,.2,.1]];for(let u=0;u<t;u++){let m,g;do m=$n+Math.random()*(cs-$n),g=zs(m);while(Math.random()*Sa>g+.25);let v=Math.pow(Math.random(),2.4),f=g*(1-.6*v),p=Math.random()*Math.PI*2,E=m-f/Sa*.35*Math.random();s.set([f*Math.cos(p),E,f*Math.sin(p)],u*3);let S=Math.random()<.05,b=S?[.7,.8,.95]:c[Math.random()*c.length|0];r.set(b,u*3),a[u]=S?.09:.05+Math.random()*.06,l[u]=Math.random();let N=jn((E-$n)/(cs-$n)),R=p/(Math.PI*2);R-=Math.floor(R);let T=Math.floor(N*Wf-R);o[u]=(T+R+.5)/Wf}for(let u=t;u<i;u++){let m=Math.random()*Math.PI*2,g=.3+Math.random()*.08;s.set([g*Math.cos(m),Math.random()*($n+.4),g*Math.sin(m)],u*3),r.set([.08,.04,.02],u*3),a[u]=.05,l[u]=Math.random(),o[u]=.02}let h=new Ce;h.setAttribute("position",new Gt(s,3)),h.setAttribute("aCol",new Gt(r,3)),h.setAttribute("aKey",new Gt(o,1)),h.setAttribute("aSize",new Gt(a,1)),h.setAttribute("aRand",new Gt(l,1));let d=new le({uniforms:{uPx:e,uTime:{value:0},uSweepK:{value:2},uFlash:{value:1},uFill:{value:0},uLightY:{value:-5},uSize:{value:1}},vertexShader:`
      attribute vec3 aCol; attribute float aKey, aSize, aRand;
      uniform float uPx, uTime, uSweepK, uFlash, uFill, uLightY, uSize;
      varying vec3 vCol; varying float vB;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vec2 radial = normalize(wp.xz + vec2(1e-4));
        vec2 vd = normalize(cameraPosition.xz - wp.xz);
        float facing = dot(radial, vd);
        // \u4E24\u4E2A\u5355\u4F4D\u5411\u91CF\u70B9\u4E58\u5076\u5C14\u4F1A\u56E0\u4E3A\u6D6E\u70B9\u8BEF\u5DEE\u7565\u5927\u4E8E 1\uFF0Cpow \u8D1F\u6570 = NaN\uFF0C\u6CDB\u5149\u4F1A\u628A\u8FD9\u4E00\u4E2A\u574F\u70B9\u7CCA\u6210\u4E00\u5927\u7247\u9ED1\uFF0C\u6240\u4EE5\u4E00\u5B9A\u8981 clamp
        float rim = pow(clamp(1.0 - abs(facing), 0.0, 1.0), 2.2); // \u4FA7\u9762\uFF08\u8F6E\u5ED3\u8FB9\u7F18\uFF09\u6700\u4EAE
        float side = facing > 0.0 ? 1.0 : 0.4;            // \u80CC\u9762\u7684\u6697\u4E00\u4E9B
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
      }`,fragmentShader:fi,...Rn});return{m:d,points:new An(h,d)}}function I_(e,t){return Bc(jn(e),Wf,1.14,t)}function zc(e,t=i=>Wt.D0+(Wt.D1-Wt.D0)*jn((i-.2)/(cs+.2)),n){let i=[],s=[1,.78,.45],r=[[1,.16,.2],[1,.72,.15],[.25,.65,1],[1,.35,.65],[.45,1,.55],[1,.78,.45]];n&&n.colors.lights.join()!=="#ff454f,#ffb726,#64adff,#ff6ca8"&&r.splice(0,r.length,...n.colors.lights.map(g=>new te(g).toArray()));for(let g=0;g<2;g++){let v=n?Math.floor(n.counts.lights*.31):120;for(let f=0;f<v;f++){let p=.02+f/v*.95,E=p*3.6*Math.PI*2+g*Math.PI,S=$n+p*(cs-$n),b=zs(S)*.98;i.push({p:[b*Math.cos(E),S-.1*Math.abs(Math.sin(E*3)),b*Math.sin(E)],c:s,s:.13})}}for(let g=0;g<(n?n.counts.lights-2*Math.floor(n.counts.lights*.31):150);g++){let v,f;do v=$n+.2+Math.random()*(cs-$n-.8),f=zs(v);while(Math.random()*Sa>f);let p=Math.random()*Math.PI*2,E=f*(.9+Math.random()*.08);i.push({p:[E*Math.cos(p),v,E*Math.sin(p)],c:r[Math.random()*r.length|0],s:.17+Math.random()*.08})}let o=i.length,a=new Float32Array(o*3),l=new Float32Array(o*3),c=new Float32Array(o),h=new Float32Array(o),d=new Float32Array(o);i.forEach((g,v)=>{a.set(g.p,v*3),l.set(g.c,v*3),h[v]=g.s,d[v]=Math.random(),c[v]=t(g.p[1])+Math.random()*.05});let u=new Ce;u.setAttribute("position",new Gt(a,3)),u.setAttribute("aCol",new Gt(l,3)),u.setAttribute("aOn",new Gt(c,1)),u.setAttribute("aSize",new Gt(h,1)),u.setAttribute("aRand",new Gt(d,1));let m=new le({uniforms:{uPx:e,uTime:{value:0},uSize:{value:1},uFade:{value:1}},vertexShader:`
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
      }`,fragmentShader:fi,...Rn});return{m,points:new An(u,m)}}function Oc(e,t){let n=document.createElement("canvas");n.width=n.height=e,t(n.getContext("2d"),e);let i=new Mc(n);return i.colorSpace=ci,i}function Ea(){let e=Oc(128,(s,r)=>{let o=s.createRadialGradient(r/2,r/2,0,r/2,r/2,r/2);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.12,"rgba(255,246,225,0.95)"),o.addColorStop(.35,"rgba(255,196,120,0.28)"),o.addColorStop(1,"rgba(255,150,60,0)"),s.fillStyle=o,s.fillRect(0,0,r,r)}),t=Oc(256,(s,r)=>{let o=r/2;s.translate(o,o),s.beginPath();for(let l=0;l<10;l++){let c=l%2?r*.13:r*.33,h=-Math.PI/2+l*Math.PI/5;s.lineTo(Math.cos(h)*c,Math.sin(h)*c)}s.closePath();let a=s.createRadialGradient(0,0,0,0,0,r*.33);a.addColorStop(0,"#fffdf2"),a.addColorStop(.5,"#ffe28a"),a.addColorStop(1,"#ffb53c"),s.shadowColor="rgba(255,190,80,0.9)",s.shadowBlur=r*.12,s.fillStyle=a,s.fill(),s.fill()}),n=Oc(256,(s,r)=>{let o=r/2,a=(l,c,h,d)=>{s.save(),s.translate(o,o),s.rotate(l);let u=s.createLinearGradient(-c,0,c,0);u.addColorStop(0,"rgba(255,220,160,0)"),u.addColorStop(.5,`rgba(255,248,230,${d})`),u.addColorStop(1,"rgba(255,220,160,0)"),s.fillStyle=u,s.fillRect(-c,-h/2,c*2,h),s.restore()};a(0,o,3,1),a(Math.PI/2,o,3,1),a(Math.PI/4,o*.55,2,.5),a(-Math.PI/4,o*.55,2,.5)}),i=Oc(256,(s,r)=>{let o=s.createRadialGradient(r/2,r/2,0,r/2,r/2,r/2);o.addColorStop(0,"rgba(255,220,160,0)"),o.addColorStop(.72,"rgba(255,220,160,0)"),o.addColorStop(.86,"rgba(255,236,200,0.9)"),o.addColorStop(1,"rgba(255,200,120,0)"),s.fillStyle=o,s.fillRect(0,0,r,r)});return{glow:e,star:t,flare:n,ring:i}}var ke=(e,t=16777215)=>{let n=new yc(new va({map:e,color:t,...Rn}));return n.material.opacity=0,n};function wa(e,t,[n,i,s],r=1){let o=new Float32Array(t*3),a=new Float32Array(t);for(let d=0;d<t;d++)o.set([(Math.random()-.5)*n,Math.random()*i,(Math.random()-.5)*s],d*3),a[d]=Math.random();let l=new Ce;l.setAttribute("position",new Gt(o,3)),l.setAttribute("aRand",new Gt(a,1));let c=new le({uniforms:{uPx:e,uTime:{value:0},uSnow:{value:0}},vertexShader:`
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
        mv.y = center + mod(position.y / ${i.toFixed(1)} * span - uTime * (0.35 + aRand * 0.5), span) - span * 0.5;
        gl_Position = projectionMatrix * mv;
        gl_PointSize = max(1.0, (0.05 + aRand * 0.08) * ${r.toFixed(2)} * uPx / -mv.z);
      }`,fragmentShader:fi,...Rn}),h=new An(l,c);return h.frustumCulled=!1,{m:c,points:h}}function Ta(e,t,n=[]){e.traverse(i=>{i.geometry?.dispose();let s=i.material;s&&(s.map?.dispose(),s.dispose())});for(let i of n)i?.dispose?.();t.dispose(),t.forceContextLoss(),t.domElement.remove()}function D_(e,{ui:t,cream:n,onDone:i,album:s,start:r="full"}){let o=Math.min(innerWidth,innerHeight)<700,a=new Ns({antialias:!1,powerPreference:"high-performance"});a.setPixelRatio(Math.min(devicePixelRatio,2)),a.setSize(innerWidth,innerHeight),a.setClearColor(0,1),e.appendChild(a.domElement);let l=new Fs,c=new rn(38,innerWidth/innerHeight,.1,200),h=0,d=0,u=!1;l.scale.set(s.tree.radius/8,s.tree.height/22,s.tree.radius/8);let m=new ui;l.add(m);let{composer:g,bloom:v}=ba(a,l,c,innerWidth,innerHeight,[.6,.05,.85],.06),f=new Co(c,a.domElement);f.enablePan=!1,f.enableDamping=!0,f.dampingFactor=.08,f.rotateSpeed=.6,f.zoomSpeed=.8,f.minPolarAngle=di.degToRad(48),f.maxPolarAngle=di.degToRad(96),f.target.set(0,4.4,0);let p=!1,E=!1,S=-99;f.addEventListener("start",()=>{p=!0,E=!0}),f.addEventListener("end",()=>{p=!1,S=P});let b={value:1},N=0,R=new I;function T(){let Q=innerWidth,bt=innerHeight;if(!Q||!bt)return;let C=!!(document.fullscreenElement||document.webkitFullscreenElement||matchMedia("(display-mode: fullscreen)").matches);c.aspect=Q/bt;let st=Math.tan(di.degToRad(c.fov/2)),z=(C?13.4*l.scale.y:15.5)/2/st,q=(2*Sa+1.8)/2/(st*c.aspect)*(C?l.scale.x:1),ot=Math.max(z,q);R.subVectors(c.position,f.target),f.target.y=C?Po*l.scale.y/2:4.4,N?(R.multiplyScalar(ot/N),c.position.copy(f.target).add(R)):c.position.set(0,f.target.y+.6+ot*.1,ot),N=ot,f.minDistance=ot*.42,f.maxDistance=ot*1.3,f.update(),c.updateProjectionMatrix(),a.setSize(Q,bt),g.setSize(Q,bt),g.setPixelRatio(a.getPixelRatio()),b.value=bt*a.getPixelRatio()/(2*st),B.uniforms.uAspect.value=c.aspect}let B=new le({uniforms:{uGlow:{value:0},uAspect:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.9999, 1.0); }",fragmentShader:`
      uniform float uGlow, uAspect; varying vec2 vUv;
      void main() {
        // \u5E95\u662F\u7EAF\u9ED1\uFF1B\u53EA\u5728\u6811\u540E\u9762\u7559\u5F88\u6DE1\u7684\u4E00\u70B9\u6696\u5149\uFF08\u5927\u9762\u79EF\u7684\u6DE1\u5149\u5728\u624B\u673A\u4E0A\u4F1A\u663E\u5F97\u6574\u5C4F\u53D1\u767D\uFF09
        vec2 p = vUv - vec2(0.5, 0.5); p.x *= uAspect;
        float g = exp(-dot(p, p) * 4.5);
        gl_FragColor = vec4(vec3(0.007, 0.004, 0.001) * g * uGlow, 1.0);
      }`,depthWrite:!1,depthTest:!1}),nt=new He(new ls(2,2),B);nt.frustumCulled=!1,nt.renderOrder=-10,l.add(nt);let _=new le({uniforms:{uGlow:B.uniforms.uGlow},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uGlow; varying vec3 vW;
      void main() {
        float r = length(vW.xz);
        float a = smoothstep(20.0, 3.0, r);
        gl_FragColor = vec4(vec3(0.05, 0.028, 0.01) * exp(-r * r / 12.0) * uGlow, a);
      }`,transparent:!0,depthWrite:!1}),M=new He(new cr(20,64),_);M.rotation.x=-Math.PI/2,M.renderOrder=-5,l.add(M);let G=(()=>{let bt=new Float32Array(2700),C=new Float32Array(900);for(let ot=0;ot<900;ot++){let dt=Math.random()*Math.PI*2,jt=45+Math.random()*30;bt.set([Math.cos(dt)*jt,-4+Math.random()*60,Math.sin(dt)*jt],ot*3),C[ot]=Math.random()}let st=new Ce;st.setAttribute("position",new Gt(bt,3)),st.setAttribute("aRand",new Gt(C,1));let z=new le({uniforms:{uPx:b,uTime:{value:0},uSky:{value:0}},vertexShader:`
        attribute float aRand; uniform float uPx, uTime, uSky; varying vec3 vCol; varying float vB;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = max(1.0, (0.10 + aRand * 0.16) * uPx / -mv.z);
          vB = uSky * (0.25 + 0.5 * aRand) * (0.6 + 0.4 * sin(uTime * (0.8 + aRand * 2.0) + aRand * 40.0));
          vCol = mix(vec3(0.75, 0.82, 1.0), vec3(1.0, 0.9, 0.75), step(0.8, aRand));
        }`,fragmentShader:fi,...Rn}),q=new An(st,z);return q.frustumCulled=!1,l.add(q),z})(),V=kc(b,.016),X=L_(b,s.counts.foliage,700);if(s.colors.emerald!=="#388b74"){let Q=new te(s.colors.emerald),bt=X.points.geometry.getAttribute("aCol");for(let C=0;C<bt.count;C++){let st=Math.max(bt.getX(C),bt.getY(C),bt.getZ(C));bt.setXYZ(C,Q.r*st*3,Q.g*st*3,Q.b*st*3)}}let A=zc(b,void 0,s),D=Pc([[X,"position"],[V,"position"],[A,"position"]]);m.add(V.points,X.points,A.points);function K(Q,bt){let C=jn(Q)*(V.n-1),st=Math.floor(C),z=Math.min(st+1,V.n-1),q=C-st,ot=V.pos;return bt.set(Un(ot[st*3],ot[z*3],q),Un(ot[st*3+1],ot[z*3+1],q),Un(ot[st*3+2],ot[z*3+2],q))}let F=Ea(),at=ke(F.glow),rt=ke(F.glow),ft=ke(F.flare);m.add(at,rt,ft);let Ct=ke(F.glow,16765066),$=ke(F.star),k=ke(F.flare),j=ke(F.ring);for(let Q of[Ct,$,k,j])Q.position.set(0,Po,0),m.add(Q);let gt=(()=>{let bt=new Float32Array(2100),C=new Float32Array(700),st=new Float32Array(700),z=new Float32Array(700*3),q=new Float32Array(700).fill(1e9),ot=new Float32Array(700).fill(1),dt=new Ce;dt.setAttribute("position",new Gt(bt,3)),dt.setAttribute("aLife",new Gt(C,1)),dt.setAttribute("aSize",new Gt(st,1));let jt=new le({uniforms:{uPx:b},vertexShader:`
        attribute float aLife, aSize; uniform float uPx; varying vec3 vCol; varying float vB;
        void main() {
          vB = aLife * 1.6;
          vCol = mix(vec3(1.0, 0.55, 0.2), vec3(1.0, 0.95, 0.8), aLife);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = max(1.0, aSize * (0.4 + 0.6 * aLife) * uPx / -mv.z);
        }`,fragmentShader:fi,...Rn}),ue=new An(dt,jt);ue.frustumCulled=!1,m.add(ue);let xe=0,Zt=0;return{emit(Z,mt,kt,qt=.5){for(Zt+=mt*kt;Zt>=1;){Zt--;let Rt=xe;xe=(xe+1)%700,bt[Rt*3]=Z.x,bt[Rt*3+1]=Z.y,bt[Rt*3+2]=Z.z,z[Rt*3]=(Math.random()-.5)*qt,z[Rt*3+1]=(Math.random()-.3)*qt,z[Rt*3+2]=(Math.random()-.5)*qt,q[Rt]=0,ot[Rt]=.5+Math.random()*.9,st[Rt]=.05+Math.random()*.09}},burst(Z,mt,kt){for(let qt=0;qt<mt;qt++){let Rt=xe;xe=(xe+1)%700;let ie=new I().randomDirection().multiplyScalar(kt*(.4+Math.random()*.6));bt[Rt*3]=Z.x,bt[Rt*3+1]=Z.y,bt[Rt*3+2]=Z.z,z[Rt*3]=ie.x,z[Rt*3+1]=ie.y,z[Rt*3+2]=ie.z,q[Rt]=0,ot[Rt]=1+Math.random()*1.2,st[Rt]=.06+Math.random()*.1}},update(Z){for(let mt=0;mt<700;mt++){q[mt]+=Z;let kt=1-q[mt]/ot[mt];if(kt<=0){C[mt]=0;continue}C[mt]=kt,z[mt*3+1]-=.9*Z;let qt=Math.exp(-1.6*Z);z[mt*3]*=qt,z[mt*3+1]*=qt,z[mt*3+2]*=qt,bt[mt*3]+=z[mt*3]*Z,bt[mt*3+1]+=z[mt*3+1]*Z,bt[mt*3+2]+=z[mt*3+2]*Z}dt.attributes.position.needsUpdate=!0,dt.attributes.aLife.needsUpdate=!0,dt.attributes.aSize.needsUpdate=!0}}})(),ut=wa(b,s.counts.elements,[30,18,18]);l.add(ut.points);let Mt=new I,Et=new I,Xt=new I(0,Po,0),Kt=new I(0,.2,0),lt=r==="view"?Ma:0,P=0,me=null,ee=r==="view",$t=.4+.16*lt,At=1,ne=performance.now(),Ot=!1,w=0,x=!1,H=!1,J=!1;function it(Q,bt){at.position.copy(Mt),rt.position.copy(Mt),ft.position.copy(Mt),at.material.opacity=Q*.45,rt.material.opacity=Q*.8,ft.material.opacity=Q*.6,at.scale.setScalar(bt),rt.scale.setScalar(bt*.32),ft.scale.setScalar(bt*1.5)}function O(){t.glass.style.backgroundColor=`rgba(0, 0, 0, ${de(0,.9,P).toFixed(3)})`}let _t=[255,222,170];function pt(Q){if(Q<=0){t.flood.style.background="none";return}Et.copy(Xt).project(c);let bt=innerWidth,C=innerHeight,st=Math.min(bt,Math.max(0,(Et.x*.5+.5)*bt)),z=Math.min(C,Math.max(0,(-Et.y*.5+.5)*C)),q=Math.hypot(Math.max(st,bt-st),Math.max(z,C-z)),ot=Q*Q*(3-2*Q),dt=30+ot*q*2.4,jt=de(.15,.85,Q),ue=_t.map((xe,Zt)=>Math.round(Un(xe,n[Zt],jt))).join(",");t.flood.style.background=`radial-gradient(circle at ${st}px ${z}px, rgba(${ue},1) 0, rgba(${ue},${Un(.85,1,ot)}) ${dt*.45}px, rgba(${ue},0) ${dt}px)`,t.flood.style.opacity=String(Math.min(1,.4+Q*1.2))}function St(Q){D.value+=(Number(u)-D.value)*(1-Math.exp(-Q*(u?6.4:3.4)));let bt=p||!u&&P-S<2?0:1;At+=(bt-At)*Math.min(1,Q*1.5),$t+=(.16+.08*D.value+1.55*D.value*(1-D.value))*At*Q,d+=(h-d)*(1-Math.exp(-Q*9)),window.treeAimActive&&(d=0),$t+=d*Q,m.rotation.y=$t,B.uniforms.uGlow.value=.25*de(Wt.C0,Wt.C1,lt)+.9*de(Wt.D0,Wt.D1+1.2,lt),G.uniforms.uSky.value=de(2,10,lt),V.m.uniforms.uProg.value=lt<Wt.B0?0:Vf((lt-Wt.B0)/(Wt.B1-Wt.B0)),V.m.uniforms.uGain.value=Un(.3,.16,de(Wt.D0,Wt.D1,lt)),V.m.uniforms.uGlint.value=de(Wt.TEXT,Wt.TEXT+1,lt);let C=2;lt>=Wt.C0&&(C=Un(1.03,-.03,Vf((lt-Wt.C0)/(Wt.C1-Wt.C0))));let st=X.m.uniforms;st.uSweepK.value=C,st.uFlash.value=1-de(Wt.C1,Wt.C1+1,lt),st.uFill.value=de(Wt.D0,Wt.D1,lt);let z=1,q=1.3+.15*Math.sin(lt*9),ot=150,dt=-5;if(lt<Wt.B0)K(0,Mt),z=de(.6,Wt.B0,lt),ot=0;else if(lt<Wt.B1)K(V.m.uniforms.uProg.value,Mt);else if(lt<Wt.C0)K(1,Mt),q*=1+.3*de(Wt.B1,Wt.C0,lt),ot=60;else if(lt<Wt.C1)I_(C,Mt);else if(lt<Wt.D0)I_(0,Et),Mt.lerpVectors(Et,Kt,Vf((lt-Wt.C1)/(Wt.D0-Wt.C1))),ot=80,ee&&(z=de(Ma,Wt.D0,lt));else if(lt<Wt.D1){let Zt=(lt-Wt.D0)/(Wt.D1-Wt.D0);Mt.set(0,.2+Zt*(cs+.2),0),dt=Mt.y,ot=260,q=1.6}else Mt.set(0,Po,0),z=1-de(Wt.D1,Wt.D1+.15,lt),ot=0,dt=99;st.uLightY.value=dt,it(z,q),ot>0&&Q>0&&gt.emit(Mt,ot,Q,lt>Wt.D0?.9:.5);for(let Zt of[V.m,X.m,A.m,G,ut.m])Zt.uniforms.uTime.value=lt;let jt=me==null?0:jn((lt-me)/z3);for(let Zt of[$,Ct,k,j])Zt.position.set(3.5*D.value,Po-.8*D.value,-2*D.value);$.getWorldPosition(Xt);let ue=lt-Wt.D1;if(ue>=0){Ot||(m.worldToLocal(Et.copy(Xt)),gt.burst(Et,260,4.5),Ot=!0);let Zt=1+5*de(0,1,jt),Z=1.5*(1-Math.exp(-ue*7))*(1+.5*Math.exp(-ue*2.5))*(1+.04*Math.sin(lt*3));$.scale.setScalar(Z),$.material.opacity=1,Ct.scale.setScalar((Z*2.2+3*Math.exp(-ue*3))*Zt),Ct.material.opacity=.4+.08*Math.sin(lt*2.2),k.scale.setScalar(Z*3.4*Math.sqrt(Zt)),k.material.opacity=.7+.3*Math.exp(-ue*2),k.material.rotation=lt*.15,j.scale.setScalar(1+ue*14),j.material.opacity=Math.max(0,1-ue/1.3)}else for(let Zt of[$,Ct,k,j])Zt.material.opacity=0;ut.m.uniforms.uSnow.value=de(Wt.D1+.3,Wt.D1+3,lt);let xe=me!=null;t.msg.classList.toggle("on",lt>=Wt.TEXT&&!xe),t.skip.classList.toggle("on",P>=1.2&&lt<Ma-.3),t.enter.classList.toggle("on",lt>=Wt.ENTER&&!xe),t.hint.classList.toggle("on",lt>=Wt.ENTER+.8&&lt<Wt.ENTER+7&&!E&&!xe),f.enabled=!xe,O(),gt.update(Q),pt(jt),jt>=1&&!x&&(x=!0,i?.())}function ce(Q){if(H)return;let bt=Math.min(.05,Math.max(0,(Q-ne)/1e3));ne=Q,ct(J?0:bt),w=requestAnimationFrame(ce)}function ct(Q){lt+=Q,P+=Q,f.update(),St(Q),g.render(),m.userData.drawAlbum?.(performance.now())}let xt=a.domElement,Bt=null,Yt=Q=>{Bt=Q.isPrimary?{id:Q.pointerId,x:Q.clientX,y:Q.clientY}:null},wt=()=>{Bt=null},re=Q=>{Bt?.id===Q.pointerId&&Math.hypot(Bt.x-Q.clientX,Bt.y-Q.clientY)<5&&lt>=Wt.TEXT&&me==null&&(u=!u),Bt=null};return xt.addEventListener("pointerdown",Yt),xt.addEventListener("pointercancel",wt),xt.addEventListener("pointerup",re),addEventListener("resize",T),document.addEventListener("fullscreenchange",T),T(),w=requestAnimationFrame(ce),{skip(){lt<Ma&&(lt=Ma,ee=!0)},enter(){me==null&&(me=Math.max(lt,Wt.D1))},dispose(){H=!0,cancelAnimationFrame(w),removeEventListener("resize",T),document.removeEventListener("fullscreenchange",T),xt.removeEventListener("pointerdown",Yt),xt.removeEventListener("pointercancel",wt),xt.removeEventListener("pointerup",re),f.dispose(),Ta(l,a,[g,v])},albumModel:{tree:m,camera:c,lights:A.points.geometry.attributes.position,branches:X.points.geometry.attributes.position,burstProgress:()=>D.value,expand:Q=>{u=Q},ready:()=>lt>=Wt.TEXT&&me==null,scattered:()=>u},setSpeed(Q){h=Q},setSpread(Q){lt>=Wt.TEXT&&me==null&&(u=Q)},_debug:{seek:Q=>{lt=Q},step:ct,time:()=>lt,pause:Q=>{J=Q},bloom:Q=>Object.assign(v,Q),camera:c,controls:f}}}function Hc(e,{still:t=!1}={}){let n=()=>Math.max(1,e.clientWidth),i=new Ns({antialias:!1,alpha:!1});i.setPixelRatio(Math.min(devicePixelRatio,2)),i.setSize(n(),n()),i.setClearColor(0,1),e.appendChild(i.domElement);let s=new Fs,r=new He(new ls(2,2),new le({vertexShader:"varying vec2 vUv; void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.9999, 1.0); }",fragmentShader:"varying vec2 vUv; void main(){ gl_FragColor = vec4(mix(vec3(0.023, 0.009, 0.020), vec3(0.0070, 0.0034, 0.0103), smoothstep(0.1, 0.9, vUv.y)), 1.0); }",depthWrite:!1,depthTest:!1}));r.frustumCulled=!1,r.renderOrder=-10,s.add(r);let o=new rn(30,1,.1,100);o.position.set(0,6.8,23.5),o.lookAt(0,5.5,0);let a=new ui;s.add(a);let{composer:l,bloom:c}=ba(i,s,o,n(),n(),[.45,.05,.85],0),h={value:1},d=()=>{let X=n();i.setSize(X,X),l.setSize(X,X),l.setPixelRatio(i.getPixelRatio()),h.value=X*i.getPixelRatio()/(2*Math.tan(di.degToRad(o.fov/2)))},u=kc(h,.05),m=L_(h,3200,160),g=zc(h);a.add(u.points,m.points,g.points),u.m.uniforms.uProg.value=1,u.m.uniforms.uGain.value=.22,u.m.uniforms.uGlint.value=1,u.m.uniforms.uSize.value=1.6;let v=m.m.uniforms;v.uSweepK.value=-.03,v.uFlash.value=0,v.uFill.value=1,v.uLightY.value=99,v.uSize.value=1.9,g.m.uniforms.uSize.value=1.5;let f=Ea(),p=ke(f.glow,16765066),E=ke(f.star),S=ke(f.flare);for(let X of[p,E,S])X.position.set(0,Po,0),s.add(X);E.material.opacity=1,p.material.opacity=.45,S.material.opacity=.8;let b=wa(h,70,[14,14,8],1.5);b.m.uniforms.uSnow.value=1,s.add(b.points);let N=new He(new cr(7,48),new le({vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:"varying vec3 vW; void main(){ float r = length(vW.xz); gl_FragColor = vec4(vec3(0.08, 0.045, 0.02) * exp(-r * r / 8.0), 1.0); }",...Rn}));N.rotation.x=-Math.PI/2,s.add(N);let R=30,T=0,B=0,nt=!0,_=!1;function M(X){R+=X,a.rotation.y+=X*.35;for(let D of[u.m,m.m,g.m,b.m])D.uniforms.uTime.value=R;let A=1.6*(1+.05*Math.sin(R*3));E.scale.setScalar(A),p.scale.setScalar(A*2.6),S.scale.setScalar(A*3.4),S.material.rotation=R*.2,l.render()}function G(X){if(_||nt)return;let A=B?Math.min(.05,(X-B)/1e3):0;B=X,M(A),T=requestAnimationFrame(G)}let V=new ResizeObserver(()=>{d(),nt&&M(0)});return V.observe(e),d(),M(0),{pause(X){(t||_)&&(X=!0),X!==nt&&(nt=X,cancelAnimationFrame(T),nt||(B=0,T=requestAnimationFrame(G)))},dispose(){_=!0,cancelAnimationFrame(T),V.disconnect(),Ta(s,i,[l,c])},_debug:{renderer:i,render:M,scene:s,composer:l}}}var Ve=(e,t,n)=>e+(t-e)*n,Xf=e=>e*e*(3-2*e);function G3(e,t,n){let i=zs(t)*.92,s=i*Math.cos(n),r=i*Math.sin(n),o=1/0,a=0;for(let l=0;l<e.count;l++){let c=e.getX(l)-s,h=e.getY(l)-t,d=e.getZ(l)-r,u=c*c+h*h+d*d;u<o&&(o=u,a=l)}return new I().fromBufferAttribute(e,a)}var mr=!0;try{mr=localStorage.getItem("showTreePhotos")!=="false"}catch{}function U_(e,t,n){let i=document.createElement("div");i.className="frame-layer",e.after(i);let s=document.getElementById("album-toggle"),r=document.getElementById("tree-photos");function o(){r.setAttribute("aria-pressed",String(mr)),r.textContent=mr?"\u9690\u85CF\u6811\u4E0A\u7167\u7247":"\u663E\u793A\u6811\u4E0A\u7167\u7247"}o(),r.onclick=()=>{mr=!mr,o();try{localStorage.setItem("showTreePhotos",String(mr))}catch{}};let a=[...new Set(n.photos)],l=Math.min(n.counts.ornaments,a.length),c=Array.from({length:l},(A,D)=>{let K=document.createElement("button"),F=new Image;K.type="button",K.className="snapshot",K.hidden=!0,K.setAttribute("aria-label","\u67E5\u770B\u7167\u7247 "+(D+1)),K.style.setProperty("--mat",n.colors.borders[D%n.colors.borders.length]),F.alt="",F.src=a[D],K.append(F),i.append(K);let at=2.1+5.1*(D+.5)/l,rt=D*2.39996+.6,ft=rt+Math.sin(D*3.7)*.35,Ct=4.7+1.6*Math.sin(D*2.13+.8),$=new I(Ct*Math.cos(ft),2.1+5.3*((D*.618+.29)%1),Ct*Math.sin(ft)),k={index:D,ornament:D%Math.ceil(l/4)===0,cloud:$,button:K,image:F,anchor:G3(t.lights.count?t.lights:t.branches,at,rt),returnTime:0,returnDuration:0,offsetX:0,offsetY:0,angle:ft,tilt:Math.sin(rt)*9,x:0,y:0,zoom:0,hover:0,depth:1,yaw:0,pitch:0,roll:0,initialized:!1,held:!1,catching:!1,spinSign:D%2?-1:1,turns:1,cruise:0};return K.onclick=()=>{h=h===k?null:k},k}),h=null,d=null,u=0,m=0,g=0,v=0,f=!1,p=!1,E=new I,S=new I,b=new I,N=0;function R(){h=d=null,u=0}function T(){t.ready()&&(l||t.burstProgress)&&t.expand(!t.scattered())}s.onclick=T;let B=A=>{if(A.key==="Escape"){R();return}A.code==="Space"&&!A.repeat&&(document.fullscreenElement||!["INPUT","BUTTON","TEXTAREA"].includes(A.target.tagName))&&(A.preventDefault(),T())};document.addEventListener("keydown",B);let nt={pick(A,D){if(!t.ready()||!t.scattered()||m<.6)return null;if(d&&Math.hypot(A*innerWidth-d.x,D*innerHeight-d.y)<d.width*.72+12)return d;let K=null,F=1/0;for(let at of c){let rt=Math.hypot(A*innerWidth-at.x,D*innerHeight-at.y);rt<F&&rt<at.width*.62+12&&(F=rt,K=at)}return K},focus(A,D){d=A,u=D},get expanded(){return l>0&&t.ready()&&t.scattered()}};window.treeFrames=nt;function _(A,D,K,F,at,rt,ft){let Ct=D===A,$=Math.sin(N*.7+A.angle);!f&&F<.015&&(A.cruise=0),t.burstProgress&&F>.96&&!Ct&&(A.cruise+=K);let k=t.burstProgress?A.spinSign*360*A.turns*F:0,j=12*$+k+A.spinSign*14*Math.sin(A.cruise*.36),gt=t.burstProgress?60*Math.sin(Math.PI*F)*Math.cos(A.angle)+8*$*F:0,ut=A.tilt+3*$+18*Math.sin(Math.PI*F)*Math.cos(A.angle);if(Ct&&A.initialized)A.yaw=Ve(A.yaw,Math.round(A.yaw/360)*360,1-Math.exp(-K*14)),A.pitch*=Math.exp(-K*14),A.roll*=Math.exp(-K*14);else{A.held&&(A.catching=!0);let Mt=A.catching?1-Math.exp(-K*10):1;A.x=t.galaxy?rt:Ve(A.x,rt,Mt),A.y=t.galaxy?ft:Ve(A.y,ft,Mt),A.depth=Ve(A.depth,at,Mt);let Et=A.catching?j+360*Math.round((A.yaw-j)/360):j;A.yaw=Ve(A.yaw,Et,Mt),A.pitch=Ve(A.pitch,gt,Mt),A.roll=Ve(A.roll,ut,Mt),Math.hypot(A.x-rt,A.y-ft)<1&&Math.abs(A.yaw-Et)<1&&(A.catching=!1)}A.held=Ct,A.initialized=!0}function M(A,D,K,F){if(t.galaxy)t.galaxy.position(A.cloud,A.index,l),E.lerpVectors(A.anchor,A.cloud,D);else{let rt=D+(t.burstProgress?.5:.13)*Math.sin(Math.PI*D);E.copy(A.anchor).lerp(A.cloud,rt),E.y+=D*.18*Math.sin(N*.8+A.angle),E.x+=D*.14*Math.cos(N*.64+A.angle)}t.tree.localToWorld(E),S.copy(E).applyMatrix4(t.camera.matrixWorldInverse);let at=Math.max(.72,Math.min(1.38,t.camera.position.length()/Math.max(1,-S.z)));E.project(t.camera),A.projectedDepth=at,A.targetX=(1+E.x)*K/2,A.targetY=(1-E.y)*F/2}function G(A,D,K,F,at,rt){let ft=Math.exp(-K*2.8),Ct=1-Math.exp(-K*12);for(let $ of c){if($===A||!t.scattered())$.returnDuration=0;else if($.held){$.returnX=$.x,$.returnY=$.y,$.returnTime=0;let k=Math.hypot($.targetX-$.x,$.targetY-$.y);$.returnDuration=1.1+Math.min(1.5,k/(rt*5)),$.offsetX=0,$.offsetY=0}if($.returnDuration){$.returnTime=Math.min($.returnDuration,$.returnTime+K);let k=Xf($.returnTime/$.returnDuration);$.targetX=Ve($.returnX,$.targetX,k),$.targetY=Ve($.returnY,$.targetY,k),$.returnTime===$.returnDuration&&($.returnDuration=0)}$.homeX=$.targetX,$.homeY=$.targetY,$.targetX+=$.offsetX*ft,$.targetY+=$.offsetY*ft,$.clearance=rt*$.projectedDepth*.92,$===A&&($.targetX=$.x,$.targetY=$.y)}for(let $=0;$<5;$++){for(let k=0;k<c.length;k++){let j=c[k];for(let gt=k+1;gt<c.length;gt++){let ut=c[gt],Mt=ut.targetX-j.targetX,Et=ut.targetY-j.targetY,Xt=Math.hypot(Mt,Et),Kt=(j.clearance+ut.clearance)*D-Xt;if(Kt<=0)continue;let lt=j===A||ut===A?1:.5,P=Xt?Mt/Xt*Kt*lt:Kt*lt,me=Xt?Et/Xt*Kt*lt:0;j!==A&&(j.targetX-=P,j.targetY-=me),ut!==A&&(ut.targetX+=P,ut.targetY+=me)}}for(let k of c){if(k===A)continue;let j=k.clearance;k.targetX=Ve(k.targetX,Math.max(j,Math.min(F-j,k.targetX)),D),k.targetY=Ve(k.targetY,Math.max(j,Math.min(at-j,k.targetY)),D)}}for(let $ of c){if($===A){$.offsetX=0,$.offsetY=0;continue}$.offsetX=Ve($.offsetX*ft,$.targetX-$.homeX,Ct),$.offsetY=Ve($.offsetY*ft,$.targetY-$.homeY,Ct),$.targetX=$.homeX+$.offsetX,$.targetY=$.homeY+$.offsetY}}function V(A,{dt:D,ready:K,open:F,w:at,h:rt,small:ft,focus:Ct,motion:$}){let k=h===A?1:d===A?u:0;A.zoom=Ve(A.zoom,k,1-Math.exp(-D*9)),A.hover=Ve(A.hover,+(A===Ct),1-Math.exp(-D*13));let j=Math.atan2(A.anchor.x,A.anchor.z)-Math.atan2(b.x-A.anchor.x,b.z-A.anchor.z),gt=Math.cos(j),ut=mr&&A.ornament&&gt>0;if(A.button.tabIndex=F?0:-1,A.button.hidden=!K||!ut&&!F&&$<.008&&A.zoom<.008,A.button.hidden){A.cruise=0,A.initialized=!1;return}let Mt=at*.5,Et=rt*.49;_(A,Ct,D,$,A.projectedDepth,A.targetX,A.targetY);let Xt=A.image.naturalWidth/Math.max(1,A.image.naturalHeight)||1.35,Kt=Xf(A.zoom),lt=Math.min(at*.79,rt*.72*Xt,850),P=t.galaxy?Ve(ft,Math.max(27,Math.min(43,Math.min(at,rt)*.049)),$):ft,me=Ve(P*A.depth*(1+.13*A.hover),lt,Kt),ee=Ve(P*.79*A.depth*(1+.13*A.hover),lt/Xt,Kt),$t=A.button.style;$t.width=me+"px",$t.height=ee+"px";let At=Ve(A.x,Mt,Kt),ne=Ve(A.y,Et,Kt),Ot=Xf(Math.min(1,$/.75)),w=Ve(ut?.6:0,1,Ot),x=Math.atan2(Math.sin(j),Math.max(0,gt))*180/Math.PI,H=A.yaw+x*(1-Ot);A.width=me*w;let J=Math.round(A.yaw/360)*360;$t.transform="translate3d("+At+"px,"+ne+"px,0) translate(-50%,-50%) scale("+w+") perspective(560px) rotateY("+Ve(H,J,Kt)+"deg) rotateX("+A.pitch*(1-Kt)+"deg) rotate("+A.roll*(1-Kt)+"deg)",$t.zIndex=A.zoom>.015?"300":A===Ct?"250":String(Math.round(A.projectedDepth*100)),$t.pointerEvents=F?"auto":"none",A.button.classList.toggle("lit",A===Ct)}function X(A){let D=Math.min(.1,(A-v)/1e3);v=A;let K=t.ready()&&!!(l||t.burstProgress),F=!!(K&&t.scattered());s.hidden=!K,r.hidden=!K||!l||F,(F!==f||!s.hasAttribute("aria-expanded"))&&(s.textContent=t.burstProgress?F?"\u805A\u56DE\u5723\u8BDE\u6811":"\u661F\u5C18\u7206\u5F00":F?"\u6536\u8D77\u76F8\u6846":"\u5C55\u5F00\u76F8\u6846",s.setAttribute("aria-expanded",String(!!F))),F||(R(),f&&(p=!0)),F&&!f&&p&&a.length>l&&(g=(g+l)%a.length,c.forEach((k,j)=>{k.image.src=a[(g+j)%a.length]}),p=!1),f=F,m=Ve(m,+!!F,1-Math.exp(-D*7));let at=innerWidth,rt=innerHeight,ft=Math.max(46,Math.min(86,Math.min(at,rt)*.095)),Ct=h||d;N+=D;let $=t.burstProgress?t.burstProgress():t.galaxy?.progress()??m;t.tree.worldToLocal(t.camera.getWorldPosition(b));for(let k of c)M(k,$,at,rt);t.galaxy&&$>0&&G(Ct,$,D,at,rt,Math.max(27,Math.min(43,Math.min(at,rt)*.049)));for(let k of c)V(k,{dt:D,ready:K,open:F,w:at,h:rt,small:ft,focus:Ct,motion:$});i.classList.toggle("inspecting",c.some(k=>k.zoom>.08))}return t.tree.userData.drawAlbum=X,()=>{delete t.tree.userData.drawAlbum,document.removeEventListener("keydown",B),r.hidden=!0,r.onclick=null,s.hidden=!0,s.removeAttribute("aria-expanded"),s.onclick=null,i.remove(),delete window.treeFrames}}var W3=.9,X3={BURST:1.6,FORM0:4.4,RIB0:5.6,RIB1:9.4,TOP:9.6,TITLE:10.2,FW:10.4,LETTER:11,ENTER:12.6,SKIP:8.7},Y3={BURST:1.6,DROP:3.6,BEAM0:4.3,BEAM1:10.3,TOP:10.6,TITLE:11.3,FW:11.6,LETTER:12.2,ENTER:13.8,SKIP:9.4},q3=1.4,Aa=10,Yf=.35,N_=3.7,Io=Aa+.4,Lo=new I(0,5.5,0),Vc=e=>{let t=jn(e);return t*t*(3-2*t)},F_=e=>N_*Math.max(0,1-(e-Yf)/(Aa-Yf)),Jn=()=>(Math.random()+Math.random()+Math.random()-1.5)/1.5;function O_(e,t,n="b"){let i=n==="c",s=new Float32Array(t*3),r=new Float32Array(t*3),o=new Float32Array(t*3),a=new Float32Array(t*3),l=new Float32Array(t),c=new Float32Array(t),h=new Float32Array(t),d=[[1,.06,.42],[1,.04,.5],[1,.18,.55],[.85,.04,.6],[1,.1,.32]],u=[[.015,.16,.04],[.03,.26,.07],[.06,.36,.1],[.02,.2,.1]],m=34,g=i?Math.round(t*.03):0,v=i?W3:Yf;for(let S=0;S<t;S++){let b,N,R,T;if(S>=t-g){let M=Math.random()*Math.PI*2,G=.3+Math.random()*.08;N=Math.random()*(v+.4),b=G*Math.cos(M),R=G*Math.sin(M),T=0,a.set([.08,.04,.02],S*3)}else{let M=Math.random()<.12?.5+.5*Math.sqrt(Math.random()):1-Math.sqrt(1-Math.random());N=v+M*(Aa-v);let G=i?zs(N):F_(N),V=!i&&Math.random()<.55?M*7*Math.PI*2+S%m/m*Math.PI*2+Jn()*.05:Math.random()*Math.PI*2,X=Math.pow(Math.random(),i?2.4:2.2),A=G*(1-.6*X);b=A*Math.cos(V),R=A*Math.sin(V),N-=(i?.35:.12)*(A/4)*Math.random(),T=M,i?a.set(Math.random()<.05?[.7,.8,.95]:u[Math.random()*u.length|0],S*3):a.set(Math.random()<.03?[1,.9,.95]:d[Math.random()*d.length|0],S*3)}s.set([b,N,R],S*3);let B=new I().randomDirection().multiplyScalar(14*Math.pow(Math.random(),.6));r.set([Lo.x+B.x,Lo.y+B.y*.75,Lo.z+B.z*.8],S*3);let nt=Math.random()<.22?16*Math.sqrt(Math.random()):.5+15*Math.pow(Math.random(),1.5),_=S%2*Math.PI;o.set([nt,_+nt*.5+Jn()*(.25+nt*.02),Jn()*.5/(1+nt*.25)],S*3),l[S]=Math.random(),c[S]=i?T:T*1.8+Math.random()*.35,h[S]=i?.05+Math.random()*.06:.055+Math.random()*.06}let f=new Ce;f.setAttribute("position",new Gt(s,3)),f.setAttribute("aCloud",new Gt(r,3)),f.setAttribute("aGal",new Gt(o,3)),f.setAttribute("aCol",new Gt(a,3)),f.setAttribute("aRand",new Gt(l,1)),f.setAttribute("aDelay",new Gt(c,1)),f.setAttribute("aSize",new Gt(h,1));let p=new le({uniforms:{uPx:e,uTime:{value:0},uTs:{value:-1},uGal:{value:0},uSize:{value:1},uOrigin:{value:Lo},uC:{value:i?1:0},uBeam:{value:0}},vertexShader:`
      attribute vec3 aCloud, aGal, aCol; attribute float aRand, aDelay, aSize;
      uniform float uPx, uTime, uTs, uGal, uSize, uC, uBeam; uniform vec3 uOrigin;
      varying vec3 vCol; varying float vB;
      mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
      float eo(float x) { x = clamp(x, 0.0, 1.0); return 1.0 - pow(1.0 - x, 3.0); }
      float eio(float x) { x = clamp(x, 0.0, 1.0); return x * x * (3.0 - 2.0 * x); }
      void main() {
        // 1. \u70B8\u5F00\uFF1A\u4ECE\u661F\u661F\u98DE\u5230\u661F\u5C18\u91CC\u7684\u4F4D\u7F6E\uFF0C\u661F\u5C18\u81EA\u5DF1\u6162\u6162\u8F6C\u3001\u4E0A\u4E0B\u6D6E\u52A8
        float kb = eo((uTs - 1.6 - aRand * 0.25) / 1.7);
        vec3 cl = aCloud - uOrigin;
        cl.xz = rot(max(uTs - 1.6, 0.0) * 0.06) * cl.xz;
        cl.y += sin(uTs * 0.8 + aRand * 20.0) * 0.12;
        vec3 p = mix(uOrigin, uOrigin + cl, kb);
        // 2. \u843D\u6210\u6811\uFF1A\u8FB9\u843D\u8FB9\u7ED5\u7740\u6811\u5E72\u8F6C\uFF08\u5F00\u59CB\u548C\u7ED3\u675F\u65F6\u4E0D\u8F6C\uFF0C\u4E2D\u95F4\u8F6C\u5F97\u6700\u591A\uFF09
        float kf = uC > 0.5 ? eio((uBeam - aDelay + 0.16) / 0.18) : eio((uTs - 4.4 - aDelay) / 2.8);
        vec3 q = mix(p, position, kf);
        q.xz = rot(2.4 * sin(3.14159 * kf) * (0.6 + 0.4 * aRand)) * q.xz;
        // 3. \u6563\u5F00\u6210\u661F\u7CFB
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
        float rim = pow(clamp(1.0 - abs(facing), 0.0, 1.0), 2.0); // pow \u5E95\u6570\u4E00\u5B9A clamp\uFF0C\u514D\u5F97 NaN
        float tw = 0.65 + 0.35 * sin(uTime * (2.0 + aRand * 3.0) + aRand * 40.0);
        // \u521A\u843D\u597D\u65F6\u95EA\u4E00\u4E0B\uFF08B \u6309\u65F6\u95F4\uFF1BC \u662F\u5149\u521A\u626B\u8FC7\u7684\u90A3\u4E00\u5708\uFF09
        float land = uC > 0.5
          ? kf * exp(-max(uBeam - aDelay, 0.0) * 22.0) * (1.0 - smoothstep(0.985, 1.0, uBeam))
          : (kf >= 1.0 ? exp(-max(uTs - 7.2 - aDelay, 0.0) * 3.0) : 0.0);
        // B\uFF1A\u5355\u4E2A\u70B9\u522B\u592A\u4EAE\uFF0C\u53E0\u591A\u4E86\u7EA2\u8272\u5148\u9876\u5230\u5934\u88AB\u538B\u3001\u84DD\u8272\u8FD8\u5728\u6DA8\uFF0C\u73AB\u7EA2\u4F1A\u53D8\u6210\u53D1\u7070\u7684\u6DE1\u7D2B
        float treeB = uC > 0.5
          ? (0.1 + 0.72 * rim) * (facing > 0.0 ? 1.0 : 0.45) * tw + land * 0.55
          : (0.21 + 0.42 * rim) * tw + land * 0.6;
        float cloudB = (0.12 + 0.95 * pow(aRand, 3.0)) * tw; // \u661F\u5C18\uFF1A\u5927\u591A\u6570\u6697\u6697\u7684\uFF0C\u5C11\u6570\u5F88\u4EAE\uFF0C\u4E00\u95EA\u4E00\u95EA
        float galB = (0.35 + 0.9 * exp(-aGal.x * 0.35)) * tw;
        vB = mix(mix(cloudB, treeB, kf), galB, g) * smoothstep(1.6, 1.75, uTs);
        vec3 treeCol = aCol;
        if (uC > 0.5) { // A \u7248\u5F00\u597D\u706F\u7684\u989C\u8272\uFF1A\u7EFF\u8272\u679D\u53F6\uFF0C\u4FA7\u8FB9\u4E00\u5708\u6696\u8272\u7684\u5149
          treeCol = mix(aCol * 1.8, vec3(1.0, 0.86, 0.62), clamp(rim * 0.45 + land, 0.0, 1.0)) * vec3(1.25, 1.05, 0.7);
        }
        vec3 cloudCol = uC > 0.5 ? vec3(1.0, 0.88, 0.72) : mix(vec3(1.0, 0.8, 0.86), aCol, 0.3);
        vec3 galCol = mix(vec3(1.0, 0.9, 0.8), mix(vec3(0.7, 0.72, 1.0), aCol, 0.4), clamp(aGal.x / 6.0, 0.0, 1.0));
        vCol = mix(mix(cloudCol, treeCol, kf), galCol, g);
        vec4 mv = viewMatrix * wp;
        gl_Position = projectionMatrix * mv;
        gl_PointSize = max(1.0, aSize * uSize * (1.0 + land * 0.5) * uPx / -mv.z);
      }`,fragmentShader:fi,...Rn}),E=new An(f,p);return E.frustumCulled=!1,{m:p,points:E}}function B_(e,t){let i=new I,s=new I,r=(v,f)=>{let p=.25+v*(Aa-.4),E=F_(p)*1.1+.18,S=v*6.5*Math.PI*2;return f.set(E*Math.cos(S),p,E*Math.sin(S))},o=12e3,a=new Float32Array(o+1);r(0,s);for(let v=1;v<=o;v++)r(v/o,i),a[v]=a[v-1]+i.distanceTo(s),s.copy(i);let l=Math.round(a[o]/t),c=new Float32Array(l*3),h=new Float32Array(l),d=new Float32Array(l),u=0;for(let v=0;v<l;v++){let f=v/(l-1)*a[o];for(;u<o&&a[u+1]<f;)u++;r((u+(f-a[u])/Math.max(1e-6,a[u+1]-a[u]))/o,i),c.set([i.x+Jn()*.03,i.y+Jn()*.03,i.z+Jn()*.03],v*3),h[v]=v/(l-1),d[v]=Math.random()}let m=new Ce;m.setAttribute("position",new Gt(c,3)),m.setAttribute("aU",new Gt(h,1)),m.setAttribute("aRand",new Gt(d,1));let g=new le({uniforms:{uPx:e,uTime:{value:0},uProg:{value:0},uFade:{value:1},uSize:{value:1}},vertexShader:`
      attribute float aU, aRand; uniform float uPx, uTime, uProg, uFade, uSize;
      varying vec3 vCol; varying float vB;
      void main() {
        float vis = step(aU, uProg) * step(0.0001, uProg); // uProg = 0 \u65F6\u7B2C\u4E00\u4E2A\u70B9\u4E5F\u522B\u4EAE
        float head = exp(-(uProg - aU) * 70.0) * vis;
        float bulb = step(0.93, aRand); // \u6BCF\u9694\u4E00\u6BB5\u4E00\u9897\u4EAE\u4E00\u70B9\u7684\u5C0F\u706F
        float tw = 0.6 + 0.4 * sin(uTime * (3.0 + aRand * 4.0) + aRand * 50.0);
        vB = vis * uFade * (0.45 * tw + bulb * 0.9 * tw + head * 1.2);
        vCol = mix(vec3(1.0, 0.74, 0.36), vec3(1.0, 0.95, 0.82), clamp(head + bulb * 0.5, 0.0, 1.0));
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = max(1.0, (0.06 + bulb * 0.08 + head * 0.2) * uSize * uPx / -mv.z);
      }`,fragmentShader:fi,...Rn});return{m:g,points:new An(m,g)}}function Z3(){let e=new le({uniforms:{uBase:{value:0},uDisc:{value:new te(.55,.2,.42)},uRing:{value:new te(.9,.6,.8)}},vertexShader:"varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uBase; uniform vec3 uDisc, uRing; varying vec2 vP;
      void main() {
        float r = length(vP);
        float disc = exp(-r * r / 9.0);
        float ring = exp(-pow((r - 3.6) / 0.6, 2.0));
        vec3 c = uDisc * disc * 0.5 + uRing * ring * 0.35;
        gl_FragColor = vec4(c * uBase, 1.0);
      }`,...Rn}),t=new He(new cr(7,64),e);return t.rotation.x=-Math.PI/2,t.position.y=.03,{m:e,mesh:t}}function k_(e,{ui:t,cream:n,onDone:i,album:s,start:r="full",variant:o="b"}){let a=o==="c",l=a?Y3:X3,c=l.SKIP,h=Math.min(innerWidth,innerHeight)<700,d=new Ns({antialias:!1,powerPreference:"high-performance"});d.setPixelRatio(Math.min(devicePixelRatio,2)),d.setSize(innerWidth,innerHeight),d.setClearColor(0,1),e.appendChild(d.domElement);let u=new Fs,m=new rn(38,innerWidth/innerHeight,.1,300),g=0,v=0,f=!1;u.scale.set(s.tree.radius/8,s.tree.height/22,s.tree.radius/8);let p=new ui;u.add(p);let{composer:E,bloom:S}=ba(d,u,m,innerWidth,innerHeight,[.7,.12,.8],.015),b=new Co(m,d.domElement);b.enablePan=!1,b.enableDamping=!0,b.dampingFactor=.08,b.rotateSpeed=.6,b.zoomSpeed=.8,b.minPolarAngle=di.degToRad(50),b.maxPolarAngle=di.degToRad(92);let N=!1,R=!1,T=-99;b.addEventListener("start",()=>{N=!0,O>l.TOP&&(R=!0)}),b.addEventListener("end",()=>{N=!1,T=_t});let B={value:1},nt=0,_=!1,M=new I;function G(){let Z=innerWidth,mt=innerHeight;if(!Z||!mt)return;let kt=!!(document.fullscreenElement||document.webkitFullscreenElement||matchMedia("(display-mode: fullscreen)").matches);m.aspect=Z/mt,_=!kt&&Z/mt>1.15&&Z>=700;let qt=Math.tan(di.degToRad(m.fov/2)),Rt=(kt?13.4*u.scale.y:15)/2/qt,ie=(2*N_+2.6)/2/(qt*m.aspect)*(kt?u.scale.x:1)*(_?1:1.24),Jt=Math.max(Rt,ie);M.subVectors(m.position,b.target),b.target.y=kt?Io*u.scale.y/2:_?5.4:3.6,nt?(M.multiplyScalar(Jt/nt),m.position.copy(b.target).add(M)):m.position.set(0,b.target.y+Jt*.17,Jt),nt=Jt,b.minDistance=Jt*.4,b.maxDistance=Jt*1.35,_?m.setViewOffset(Z,mt,Z*.16,0,Z,mt):m.clearViewOffset(),b.update(),m.updateProjectionMatrix(),d.setSize(Z,mt),E.setSize(Z,mt),E.setPixelRatio(d.getPixelRatio()),B.value=mt*d.getPixelRatio()/(2*qt)}let V=new le({uniforms:{uGlow:{value:0}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uGlow; varying vec3 vD;
      void main() {
        // \u8FD9\u4E9B\u662F\u7EBF\u6027\u8272\uFF08\u540E\u671F\u4F1A\u8F6C\u6210 sRGB\uFF09\uFF1A\u5730\u5E73\u7EBF\u5927\u7EA6 #5a1946\uFF0C\u5934\u9876\u63A5\u8FD1\u9ED1
        float h = vD.y;
        vec3 top = vec3(0.0035, 0.003, 0.008);
        vec3 glow = vec3(0.085, 0.009, 0.055);
        vec3 c = h > 0.0 ? mix(top, glow, exp(-pow(h * 11.0, 1.1))) : vec3(0.006, 0.002, 0.005); // \u53EA\u5728\u5C71\u540E\u9762\u4E00\u7A84\u6761
        gl_FragColor = vec4(c * uGlow, 1.0);
      }`,side:vn,depthWrite:!1}),X=new He(new Sc(120,32,16),V);X.renderOrder=-10,u.add(X);let A=(()=>{let kt=new Float32Array(1086);for(let he=0;he<=180;he++){let Qt=he/180*Math.PI*2,Ee=3.2+1.6*Math.sin(Qt*3+1.3)+1.1*Math.sin(Qt*7+.4)+.5*Math.sin(Qt*17+2.1)+.25*Math.sin(Qt*41);kt.set([95*Math.cos(Qt),-2,95*Math.sin(Qt),95*Math.cos(Qt),Ee,95*Math.sin(Qt)],he*6)}let qt=[];for(let he=0;he<180;he++){let Qt=he*2;qt.push(Qt,Qt+1,Qt+2,Qt+1,Qt+3,Qt+2)}let Rt=new Ce;Rt.setAttribute("position",new Gt(kt,3)),Rt.setIndex(qt);let ie=new le({uniforms:{uGlow:V.uniforms.uGlow},vertexShader:"void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform float uGlow; void main(){ gl_FragColor = vec4(vec3(0.0045, 0.0018, 0.004) * uGlow, 1.0); }",side:Ei}),Jt=new He(Rt,ie);return Jt.renderOrder=-9,u.add(Jt),Jt})(),D=(()=>{let mt=new Float32Array(4200),kt=new Float32Array(1400);for(let Jt=0;Jt<1400;Jt++){let he=Math.random()*Math.PI*2,Qt=Math.asin(Math.random()*.98),Ee=85;mt.set([Ee*Math.cos(Qt)*Math.cos(he),Ee*Math.sin(Qt)-2,Ee*Math.cos(Qt)*Math.sin(he)],Jt*3),kt[Jt]=Math.random()}let qt=new Ce;qt.setAttribute("position",new Gt(mt,3)),qt.setAttribute("aRand",new Gt(kt,1));let Rt=new le({uniforms:{uPx:B,uTime:{value:0},uSky:{value:0}},vertexShader:`
        attribute float aRand; uniform float uPx, uTime, uSky; varying vec3 vCol; varying float vB;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = max(1.0, (0.12 + aRand * 0.2) * uPx / -mv.z);
          vB = uSky * (0.25 + 0.6 * aRand * aRand) * (0.55 + 0.45 * sin(uTime * (0.7 + aRand * 2.0) + aRand * 40.0));
          vCol = mix(vec3(0.85, 0.85, 1.0), vec3(1.0, 0.8, 0.92), step(0.7, aRand));
        }`,fragmentShader:fi,...Rn}),ie=new An(qt,Rt);return ie.frustumCulled=!1,u.add(ie),Rt})(),K=(()=>{let Z=h?4500:7e3,mt=new Float32Array(Z*3),kt=new Float32Array(Z);for(let Jt=0;Jt<Z;Jt++){let he=30*Math.pow(Math.random(),.75),Qt=Math.random()*Math.PI*2;mt.set([he*Math.cos(Qt),.02,he*Math.sin(Qt)],Jt*3),kt[Jt]=Math.random()}let qt=new Ce;qt.setAttribute("position",new Gt(mt,3)),qt.setAttribute("aRand",new Gt(kt,1));let Rt=new le({uniforms:{uPx:B,uTime:{value:0},uGround:{value:0},uSnowy:{value:a?1:0}},vertexShader:`
        attribute float aRand; uniform float uPx, uTime, uGround, uSnowy; varying vec3 vCol; varying float vB;
        void main() {
          float r = length(position.xz);
          float tw = 0.5 + 0.5 * sin(uTime * (1.5 + aRand * 4.0) + aRand * 60.0);
          vB = uGround * (0.12 + 0.6 * pow(aRand, 4.0) * tw) * (0.35 + 0.65 * exp(-r * r / 120.0));
          vCol = mix(mix(vec3(0.95, 0.4, 0.8), vec3(0.75, 0.55, 1.0), aRand), mix(vec3(0.75, 0.85, 1.0), vec3(1.0, 0.88, 0.95), aRand), uSnowy); // C \u662F\u96EA\u5730
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = max(1.0, (0.04 + 0.05 * aRand) * uPx / -mv.z);
        }`,fragmentShader:fi,...Rn}),ie=new An(qt,Rt);return ie.frustumCulled=!1,u.add(ie),Rt})(),F=O_(B,s.counts.foliage,o);if(s.colors.emerald!=="#388b74"){let Z=new te(s.colors.emerald),mt=F.points.geometry.getAttribute("aCol");for(let kt=0;kt<mt.count;kt++){let qt=Math.max(mt.getX(kt),mt.getY(kt),mt.getZ(kt));mt.setXYZ(kt,Z.r*qt*3,Z.g*qt*3,Z.b*qt*3)}}let at=a?kc(B,.016):B_(B,.02),rt=zc(B,Z=>l.TOP+.35+(1-jn(Z/Aa))*1.5,s),ft=a?Pc([[F,"q"],[at,"position"],[rt,"position"]]):null,Ct=Z3();a&&(Ct.m.uniforms.uDisc.value.setRGB(.5,.3,.12),Ct.m.uniforms.uRing.value.setRGB(1,.8,.5)),p.add(F.points,at.points),rt&&p.add(rt.points);function $(Z,mt){let kt=jn(Z)*(at.n-1),qt=Math.floor(kt),Rt=Math.min(qt+1,at.n-1),ie=kt-qt,Jt=at.pos;return mt.set(Un(Jt[qt*3],Jt[Rt*3],ie),Un(Jt[qt*3+1],Jt[Rt*3+1],ie),Un(Jt[qt*3+2],Jt[Rt*3+2],ie))}u.add(Ct.mesh);let k=Ea(),j=ke(k.glow,16766696),gt=ke(k.flare);for(let Z of[j,gt])Z.position.copy(Lo),u.add(Z);let ut=ke(k.glow,16763104),Mt=ke(k.star),Et=ke(k.flare),Xt=ke(k.ring,16765160);for(let Z of[ut,Mt,Et,Xt])Z.position.set(0,Io,0),(a?p:u).add(Z);let Kt=ke(k.glow),lt=ke(k.glow),P=ke(k.flare);p.add(Kt,lt,P);let me=ke(k.glow,16773340);me.position.set(0,5.5,0),u.add(me);let ee=wa(B,s.counts.elements,[34,20,24]);u.add(ee.points);let $t=(()=>{let Z=h?2600:3600,mt=new Float32Array(Z*3),kt=new Float32Array(Z*3),qt=new Float32Array(Z),Rt=new Float32Array(Z),ie=new Float32Array(Z*3),Jt=new Float32Array(Z).fill(1e9),he=new Float32Array(Z).fill(1),Qt=new Float32Array(Z),Ee=new Float32Array(Z),Ue=new Ce;Ue.setAttribute("position",new Gt(mt,3)),Ue.setAttribute("aCol",new Gt(kt,3)),Ue.setAttribute("aLife",new Gt(qt,1)),Ue.setAttribute("aSize",new Gt(Rt,1));let pi=new le({uniforms:{uPx:B},vertexShader:`
        attribute vec3 aCol; attribute float aLife, aSize; uniform float uPx; varying vec3 vCol; varying float vB;
        void main() {
          vB = pow(aLife, 1.2) * 1.5;
          vCol = mix(aCol, vec3(1.0), smoothstep(0.88, 1.0, aLife) * 0.5); // \u53EA\u5728\u521A\u70B8\u5F00\u90A3\u4E00\u4E0B\u504F\u767D\uFF0C\u4E4B\u540E\u662F\u672C\u6765\u7684\u989C\u8272
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = aLife > 0.0 ? max(1.0, aSize * (0.5 + 0.5 * aLife) * uPx / -mv.z) : 0.0;
        }`,fragmentShader:fi,...Rn}),Uo=new An(Ue,pi);Uo.frustumCulled=!1,u.add(Uo);let No=0,Hs=[],gr=[[1,.12,.55],[1,.62,.12],[1,.1,.12],[.6,.2,1],[.2,.45,1],[.25,1,.4],[1,.85,.5]];function y(et,tt,ht,yt,Ut,zt,Dt){let se=No;No=(No+1)%Z,mt[se*3]=et.x,mt[se*3+1]=et.y,mt[se*3+2]=et.z,ie[se*3]=tt.x,ie[se*3+1]=tt.y,ie[se*3+2]=tt.z,kt.set(ht,se*3),Jt[se]=0,he[se]=yt,Rt[se]=Ut,Qt[se]=zt,Ee[se]=Dt}let L=new I,W=new I;function Y(et){typeof window<"u"&&window.__xmasEvent?.("firework");let tt=gr[Math.random()*gr.length|0],ht=Math.random()<.5?gr[Math.random()*gr.length|0]:tt,yt=h?170:240,Ut=3.4+Math.random()*1.8;for(let zt=0;zt<yt;zt++)W.randomDirection(),L.copy(W).multiplyScalar(Ut*(.88+Math.random()*.12)),y(et,L,zt%3?tt:ht,1.6+Math.random()*.9,.2+Math.random()*.12,1.4,1.3);for(let zt=0;zt<30;zt++)L.randomDirection().multiplyScalar(Math.random()*1.2),y(et,L,[1,.95,.85],.7+Math.random()*.4,.2,2,.5)}let U=0;return{dust(et,tt,ht){for(U+=tt*ht;U>=1;)U--,L.set(Jn()*.5,Jn()*.5-.15,Jn()*.5),y(et,L,[1,.7,.35],.5+Math.random()*.9,.07+Math.random()*.09,1.6,.9)},launch(){let et=(Math.random()*2-1)*.8,tt=.35+Math.random()*.5;W.set(et,tt,.5).unproject(m).sub(m.position).normalize();let ht=m.position.clone().addScaledVector(W,34+Math.random()*14);ht.y=Math.max(ht.y,9);let yt=1+Math.random()*.3,Ut=ht.clone().add(new I(Jn()*1.5,-8,0));Hs.push({p:Ut,v:ht.clone().sub(Ut).divideScalar(yt),fuse:yt})},meteor(){let et=-.9+Math.random()*.6,tt=.6+Math.random()*.3;W.set(et,tt,.5).unproject(m).sub(m.position).normalize();let ht=m.position.clone().addScaledVector(W,60),yt=new I(1,-.45,0).applyQuaternion(m.quaternion).normalize().multiplyScalar(40);Hs.push({p:ht,v:yt,fuse:.7,meteor:!0})},update(et){for(let tt=Hs.length-1;tt>=0;tt--){let ht=Hs[tt];ht.p.addScaledVector(ht.v,et),ht.fuse-=et;let yt=Math.max(1,Math.round(et*(ht.meteor?260:120)));for(let Ut=0;Ut<yt;Ut++)L.set(Jn()*.15,Jn()*.15-(ht.meteor?0:.6),Jn()*.15),y(ht.p,L,ht.meteor?[.9,.92,1]:[1,.75,.45],ht.meteor?.35:.45,ht.meteor?.16:.09,2,0);ht.fuse<=0&&(ht.meteor||Y(ht.p),Hs.splice(tt,1))}for(let tt=0;tt<Z;tt++){Jt[tt]+=et;let ht=1-Jt[tt]/he[tt];if(ht<=0){qt[tt]=0;continue}qt[tt]=ht<.3?ht*(.4+.6*(Math.sin(Jt[tt]*40+tt)>0?1:0)):ht;let yt=Math.exp(-Qt[tt]*et);ie[tt*3]*=yt,ie[tt*3+1]=ie[tt*3+1]*yt-Ee[tt]*et,ie[tt*3+2]*=yt,mt[tt*3]+=ie[tt*3]*et,mt[tt*3+1]+=ie[tt*3+1]*et,mt[tt*3+2]+=ie[tt*3+2]*et}Ue.attributes.position.needsUpdate=!0,Ue.attributes.aLife.needsUpdate=!0,Ue.attributes.aCol.needsUpdate=!0,Ue.attributes.aSize.needsUpdate=!0}}})(),At=0,ne=0,Ot=0,w=new Map,x=Z=>{w.set(Z.pointerId,{x:Z.clientX,y:Z.clientY,t:performance.now(),multi:w.size>0});for(let mt of w.values())w.size>1&&(mt.multi=!0)},H=Z=>{let mt=w.get(Z.pointerId);w.delete(Z.pointerId),!(!mt||mt.multi||pt!=null||O<l.TOP+.5)&&Math.hypot(Z.clientX-mt.x,Z.clientY-mt.y)<8&&performance.now()-mt.t<350&&(ne=ne?0:1,Ot=_t,R=!0)},J=Z=>w.delete(Z.pointerId);d.domElement.addEventListener("pointerdown",x),d.domElement.addEventListener("pointerup",H),d.domElement.addEventListener("pointercancel",J);let it=r==="view",O=it?c:-1,_t=0,pt=null,St=.3,ce=1,ct=0,xt=3,Bt=performance.now(),Yt=0,wt=!1,re=!1,Q=!1,bt=new I,C=new I(0,Io,0),st=new I,z=new I,q=new I(0,Io,0);function ot(){t.glass.style.backgroundColor=`rgba(0, 0, 0, ${de(0,.9,_t).toFixed(3)})`}let dt=a?[255,222,170]:[255,214,232];function jt(Z){if(Z<=0){t.flood.style.background="none";return}bt.copy(C).project(m);let mt=innerWidth,kt=innerHeight,qt=Math.min(mt,Math.max(0,(bt.x*.5+.5)*mt)),Rt=Math.min(kt,Math.max(0,(-bt.y*.5+.5)*kt)),ie=Math.hypot(Math.max(qt,mt-qt),Math.max(Rt,kt-Rt)),Jt=Z*Z*(3-2*Z),he=30+Jt*ie*2.4,Qt=de(.15,.85,Z),Ee=dt.map((Ue,pi)=>Math.round(Un(Ue,n[pi],Qt))).join(",");t.flood.style.background=`radial-gradient(circle at ${qt}px ${Rt}px, rgba(${Ee},1) 0, rgba(${Ee},${Un(.85,1,Jt)}) ${he*.45}px, rgba(${Ee},0) ${he}px)`,t.flood.style.opacity=String(Math.min(1,.4+Z*1.2))}function ue(Z){let mt=N||_t-T<2?0:1;ce+=(mt-ce)*Math.min(1,Z*1.5),St+=(.14+(a?.08*At+1.55*At*(1-At):0))*ce*Z,v+=(g-v)*(1-Math.exp(-Z*9)),window.treeAimActive&&(v=0),St+=v*Z,p.rotation.y=St,a?At+=(ne-At)*(1-Math.exp(-Z*(ne?6.4:3.4))):At+=Math.sign(ne-At)*Math.min(Math.abs(ne-At),Z/1.8);let kt=de(0,1,At),qt=F.m.uniforms;qt.uTs.value=O,qt.uTime.value=_t,qt.uGal.value=a?0:At,ft&&(ft.value=At);for(let he of a?[D,K,ee.m]:[at.m,D,K,ee.m])he.uniforms.uTime.value=_t;if(D.uniforms.uSky.value=.35*de(.3,2,_t)+.65*de(l.BURST,5,O),V.uniforms.uGlow.value=de(2.5,7.5,O),K.uniforms.uGround.value=de(3.5,8,O),rt.m.uniforms.uTime.value=O,rt.m.uniforms.uFade.value=(1-kt)*(a?1:.27),a){let he=O<l.BEAM0?0:Vc((O-l.BEAM0)/(l.BEAM1-l.BEAM0));at.points.visible=he>0,qt.uBeam.value=O<l.BEAM0?-.3:he;let Qt=at.m.uniforms;Qt.uProg.value=he,Qt.uTime.value=O,Qt.uGain.value=Un(.3,.16,de(l.TOP,l.TOP+1.5,O)),Qt.uGlint.value=de(l.TITLE,l.TITLE+1,O),Qt.uFade.value=1-.45*kt,rt.m.uniforms.uTime.value=O,rt.m.uniforms.uFade.value=1-.18*kt,Ct.m.uniforms.uBase.value=de(l.BEAM0,l.BEAM0+1.5,O)*(1-.6*de(l.BEAM1,l.TOP+1.5,O))*(1-kt);let Ee=0,Ue=0,pi=1.3+.15*Math.sin(_t*9);O>=l.DROP&&O<l.BEAM0?($(0,z),st.copy(Lo).lerp(z,Vc((O-l.DROP)/(l.BEAM0-l.DROP))),Ee=de(l.DROP,l.DROP+.3,O),Ue=60):O>=l.BEAM0&&O<l.BEAM1?($(he,st),Ee=1,Ue=150):O>=l.BEAM1&&O<l.TOP+.15&&($(1,z),st.copy(z).lerp(q,Vc((O-l.BEAM1)/(l.TOP-l.BEAM1))),Ee=1-de(l.TOP,l.TOP+.15,O),Ue=80,pi*=1.2),Kt.position.copy(st),lt.position.copy(st),P.position.copy(st),Kt.material.opacity=Ee*.45,lt.material.opacity=Ee*.8,P.material.opacity=Ee*.6,Kt.scale.setScalar(pi),lt.scale.setScalar(pi*.32),P.scale.setScalar(pi*1.5),Ue&&Z>0&&$t.dust(p.localToWorld(z.copy(st)),Ue,Z)}else Ct.m.uniforms.uBase.value=de(l.FORM0+.3,6.2,O)*(1-.65*de(8.6,10.5,O))*(1-kt),at.m.uniforms.uProg.value=Vc((O-l.RIB0)/(l.RIB1-l.RIB0)),at.m.uniforms.uFade.value=1-kt;if(ee.m.uniforms.uSnow.value=de(l.TOP+.2,l.TOP+2.5,O),O>=0&&O<l.BURST+.5){let he=de(0,l.BURST,O),Qt=O>=l.BURST?Math.exp(-(O-l.BURST)*5):0,Ee=de(0,.4,O)*(O<l.BURST?1:Qt);j.material.opacity=Ee*.8,gt.material.opacity=Ee,j.scale.setScalar(.8+1.6*he+6*Qt),gt.scale.setScalar((1.5+3*he+4*Qt)*(1+.06*Math.sin(_t*9))),gt.material.rotation=O*.4}else j.material.opacity=0,gt.material.opacity=0;let Rt=O-l.TOP,ie=pt==null?0:jn((O-pt)/q3);if(Rt>=0){let he=1+5*de(0,1,ie),Qt=1.4*(1-Math.exp(-Rt*7))*(1+.5*Math.exp(-Rt*2.5))*(1+.04*Math.sin(_t*3)),Ee=1-(a?.35:1)*kt;if(a)for(let Ue of[Mt,ut,Et,Xt])Ue.position.set(3.5*kt,Io-.8*kt,-2*kt);Mt.scale.setScalar(Qt),Mt.material.opacity=Ee,ut.scale.setScalar((Qt*2.4+3*Math.exp(-Rt*3))*he),ut.material.opacity=(.42+.08*Math.sin(_t*2.2))*Math.max(Ee,ie),Et.scale.setScalar(Qt*3.6*Math.sqrt(he)),Et.material.opacity=(.75+.25*Math.exp(-Rt*2))*Ee,Et.material.rotation=_t*.12,Xt.scale.setScalar(1+Rt*14),Xt.material.opacity=Math.max(0,1-Rt/1.3)}else for(let he of[Mt,ut,Et,Xt])he.material.opacity=0;me.material.opacity=a?.6*Math.sin(kt*Math.PI):kt*.9,me.scale.setScalar(4+.3*Math.sin(_t*2)),O>=l.FW&&pt==null&&Z>0&&(ct-=Z,ct<=0&&($t.launch(),Math.random()<.3&&$t.launch(),ct=1.6+Math.random()*1.8),xt-=Z,xt<=0&&($t.meteor(),xt=5+Math.random()*5)),$t.update(Z);let Jt=pt!=null;t.card.classList.toggle("on",!it&&_t>=.5),t.title.classList.toggle("on",O>=l.TITLE&&!Jt),t.skip.classList.toggle("on",it&&r!=="view"&&O>=.8&&O<c-.3),t.enter.classList.toggle("on",O>=l.ENTER&&!Jt),t.hint.classList.toggle("on",O>=l.ENTER+.6&&O<l.ENTER+9&&!R&&!Jt),b.enabled=!Jt,ot(),jt(ie),ie>=1&&!wt&&(wt=!0,i?.())}function xe(Z){if(re)return;let mt=Math.min(.05,Math.max(0,(Z-Bt)/1e3));Bt=Z,Zt(Q?0:mt),Yt=requestAnimationFrame(xe)}function Zt(Z){_t+=Z,it&&(O+=Z),b.update(),ue(Z),E.render(),p.userData.drawAlbum?.(performance.now())}return addEventListener("resize",G),document.addEventListener("fullscreenchange",G),G(),Yt=requestAnimationFrame(xe),{light(){it||(it=!0,O=0)},skip(){it||(it=!0),O<c&&(O=c)},enter(){pt==null&&(pt=Math.max(O,l.TOP),ne=0)},dispose(){re=!0,cancelAnimationFrame(Yt),removeEventListener("resize",G),document.removeEventListener("fullscreenchange",G),d.domElement.removeEventListener("pointerdown",x),d.domElement.removeEventListener("pointerup",H),d.domElement.removeEventListener("pointercancel",J),b.dispose(),Ta(u,d,[E,S])},albumModel:{tree:p,camera:m,galaxy:a?null:{progress:()=>de(0,1,At),position(Z,mt,kt){let Rt=2.9+5.5*(Math.floor(mt/2)+.5)/Math.ceil(kt/2),ie=mt%2*Math.PI+Rt*.5+_t*.35/(1+Rt*.15),Jt=Rt*Math.sin(ie);return Z.set(Rt*Math.cos(ie),5.5+Jt*Math.sin(.5),Jt*Math.cos(.5))}},lights:rt.points.geometry.attributes.position,branches:F.points.geometry.attributes.position,burstProgress:a?()=>At:null,expand:Z=>{ne=Number(Z),Ot=_t},ready:()=>O>=l.TITLE&&pt==null,scattered:()=>!!ne},setSpeed(Z){g=Z},setSpread(Z){O>=l.TOP&&(ne=Number(Z),Ot=_t)},_debug:{seek:Z=>{it=!0,O=Z},step:Zt,time:()=>O,pause:Z=>{Q=Z},camera:m,controls:b,galaxy:()=>{ne=ne?0:1,Ot=_t}}}}function z_(e,{still:t=!1,variant:n="b"}={}){if(n==="c")return Hc(e,{still:t});let i=()=>Math.max(1,e.clientWidth),s=new Ns({antialias:!1,alpha:!1});s.setPixelRatio(Math.min(devicePixelRatio,2)),s.setSize(i(),i()),s.setClearColor(0,1),e.appendChild(s.domElement);let r=new Fs,o=new rn(30,1,.1,100);o.position.set(0,6.6,23.5),o.lookAt(0,5.3,0);let a=new ui;r.add(a);let{composer:l,bloom:c}=ba(s,r,o,i(),i(),[.45,.05,.85],0),h=new He(new ls(2,2),new le({vertexShader:"varying vec2 vUv; void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.9999, 1.0); }",fragmentShader:"varying vec2 vUv; void main(){ gl_FragColor = vec4(mix(vec3(0.045, 0.008, 0.03), vec3(0.006, 0.003, 0.011), smoothstep(0.05, 0.75, vUv.y)), 1.0); }",depthWrite:!1,depthTest:!1}));h.frustumCulled=!1,h.renderOrder=-10,r.add(h);let d={value:1},u=()=>{let G=i();s.setSize(G,G),l.setSize(G,G),l.setPixelRatio(s.getPixelRatio()),d.value=G*s.getPixelRatio()/(2*Math.tan(di.degToRad(o.fov/2)))},m=O_(d,3500),g=B_(d,.05);a.add(m.points,g.points),m.m.uniforms.uTs.value=99,m.m.uniforms.uSize.value=2.4,g.m.uniforms.uProg.value=1,g.m.uniforms.uSize.value=1.5;let v=Ea(),f=ke(v.glow,16763104),p=ke(v.star),E=ke(v.flare);for(let G of[f,p,E])G.position.set(0,Io,0),r.add(G);p.material.opacity=1,f.material.opacity=.45,E.material.opacity=.8;let S=wa(d,70,[14,14,8],1.5);S.m.uniforms.uSnow.value=1,r.add(S.points);let b=0,N=0,R=0,T=!0,B=!1;function nt(G){b+=G,a.rotation.y+=G*.35;for(let X of[m.m,g.m,S.m])X.uniforms.uTime.value=b;let V=1.5*(1+.05*Math.sin(b*3));p.scale.setScalar(V),f.scale.setScalar(V*2.6),E.scale.setScalar(V*3.4),E.material.rotation=b*.2,l.render()}function _(G){if(B||T)return;let V=R?Math.min(.05,(G-R)/1e3):0;R=G,nt(V),N=requestAnimationFrame(_)}let M=new ResizeObserver(()=>{u(),T&&nt(0)});return M.observe(e),u(),nt(0),{pause(G){(t||B)&&(G=!0),G!==T&&(T=G,cancelAnimationFrame(N),T||(R=0,N=requestAnimationFrame(_)))},dispose(){B=!0,cancelAnimationFrame(N),M.disconnect(),Ta(r,s,[l,c])}}}var V_=new URLSearchParams(location.search),$3=e=>["a","b","c"].includes(e)?e:"a",Ca=$3(V_.get("v")),zi=null,Do=null,Gc=(e,t="")=>{let n=document.createElement("div");return n.className=e,n.innerHTML=t,n},j3=()=>getComputedStyle(document.body).backgroundColor.match(/[\d.]+/g).slice(0,3).map(Number),Ra=document.querySelector(".globe"),H_=Ra.querySelector(".globe-ball");function G_(e){Do?.dispose(),Do=null;try{Do=e==="a"?Hc(H_):z_(H_,{variant:e})}catch(t){console.warn(t)}}document.addEventListener("visibilitychange",()=>Do?.pause(document.hidden||!!zi));function Wc(e,t="full"){if(zi)return;Ca=e,document.body.classList.add("playing");let n=Gc("xi-glass"),i=Gc("xi-stage"),s=Gc(e==="a"?"xi-ui":"xi-ui xb");s.innerHTML=(e==="a"?`<div class="xi-msg"><b>Merry Christmas</b><span>\u5723\u8BDE\u5FEB\u4E50</span></div>
       <div class="xi-hint">\u62D6\u52A8\u8F6C\u4E00\u8F6C \xB7 \u53CC\u6307\u653E\u5927</div>`:`<div class="xb-card"><b class="xb-neon">Merry Christmas</b><span>\u5723\u8BDE\u5FEB\u4E50</span><button type="button" class="xb-light">\u70B9\u4EAE\u8FD9\u9897\u661F</button></div>
       <div class="xb-title" aria-hidden="true"><b class="xb-neon">Merry Christmas</b><span>\u5723\u8BDE\u5FEB\u4E50</span></div>
       <div class="xi-hint">\u62D6\u52A8\u8F6C\u4E00\u8F6C \xB7 \u53CC\u6307\u653E\u5927 \xB7 \u8F7B\u70B9\u6563\u5F00</div>`)+`<button type="button" class="xi-btn xi-skip">\u8DF3\u8FC7<span aria-hidden="true"> \u203A</span></button>
       <button type="button" class="xi-btn xi-enter">\u8FD4\u56DE\u9009\u6811</button>
       <div class="xi-flood"></div>`,document.body.append(n,i,s);let r=d=>s.querySelector(d);Do?.pause(!0);let o,a,l=()=>{o?.(),window.resetTreePointer(),document.body.classList.remove("playing"),a?.dispose(),n.remove(),i.remove(),s.remove(),zi=null,window.__starlight=null},c=!1,h=()=>!c&&(c=!0)&&setTimeout(()=>{l();let d=Gc("xi-fade");document.body.append(d),d.addEventListener("animationend",()=>d.remove()),G_(e),Ra.classList.remove("pop"),Ra.offsetWidth,Ra.classList.add("pop")});try{let d={ui:{glass:n,msg:r(".xi-msg"),hint:r(".xi-hint"),flood:r(".xi-flood"),skip:r(".xi-skip"),enter:r(".xi-enter"),card:r(".xb-card"),title:r(".xb-title")},album:qf,cream:j3(),start:t,onDone:h};a=e==="a"?D_(i,d):k_(i,{...d,variant:e}),o=U_(i,a.albumModel,qf)}catch(d){console.warn(d),l(),Do?.pause(!1),document.getElementById("status").textContent="\u5F53\u524D\u8BBE\u5907\u65E0\u6CD5\u542F\u52A8 3D \u6F14\u51FA\uFF0C\u8BF7\u5728\u5F00\u542F\u786C\u4EF6\u52A0\u901F\u7684\u684C\u9762\u6D4F\u89C8\u5668\u4E2D\u91CD\u8BD5\u3002";return}r(".xi-skip").addEventListener("click",()=>a.skip()),r(".xi-enter").addEventListener("click",()=>a.enter()),r(".xb-light")?.addEventListener("click",()=>a.light()),zi=window.__starlight=a}document.querySelectorAll(".pick").forEach(e=>e.addEventListener("click",()=>Wc(e.dataset.v)));Ra.addEventListener("click",()=>Wc(Ca,"view"));var W_={counts:{foliage:17e3,ornaments:6,lights:390,elements:900},tree:{height:22,radius:8},colors:{emerald:"#388b74",lights:["#ff454f","#ffb726","#64adff","#ff6ca8"],borders:["#fff4db","#ebe4d5","#dccca7"]}},qf={...W_,photos:window.treeAlbum||[]};window.treeControls={defaults:W_,DrawingUtils:fn,GestureRecognizer:xn,configure(e){qf=e},setSpeed(e){zi?.setSpeed(e)},setState(e){zi&&(e==="FORMED"&&zi.light?.(),zi.setSpread(e==="CHAOS"))}};window.dispatchEvent(new Event("tree-ready"));document.addEventListener("fullscreenchange",()=>{document.fullscreenElement&&(zi||Wc(Ca),zi?.light?.())});G_(Ca);V_.has("autoplay")&&Wc(Ca);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
