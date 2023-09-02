var Pe=Object.defineProperty;var Re=(e,r,t)=>r in e?Pe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var Q=(e,r,t)=>(Re(e,typeof r!="symbol"?r+"":r,t),t);import{L as je,U as Ie,e as S,Q as ue,S as De,i as k,h as te,j as Se,V as Fe,W as Te,D as N,X as K,l as L,Y as we,Z as Ce,x as oe,O as re,J as _e,c as z,_ as X,u as Oe,F as ee,d as Ee,m as pe,$ as me,w as Ke,a0 as Le,a1 as qe,a2 as Ve,t as Ne,s as We}from"./vendor-f843f104.js";import{c as Ue,a as Xe}from"./index-51ca559d.js";import{c as ze,f as ye,g as Be,a as He}from"./index-947514a4.js";import{b as ae}from"./index-ac54fc13.js";import{A as P,u as Ye,w as Je,b as Ze}from"./index-f954ad50.js";const he="[a-fA-F\\d:]",B=e=>e&&e.includeBoundaries?`(?:(?<=\\s|^)(?=${he})|(?<=${he})(?=\\s|$))`:"",V="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",w="[a-fA-F\\d]{1,4}",se=`
(?:
(?:${w}:){7}(?:${w}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${w}:){6}(?:${V}|:${w}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${w}:){5}(?::${V}|(?::${w}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${w}:){4}(?:(?::${w}){0,1}:${V}|(?::${w}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${w}:){3}(?:(?::${w}){0,2}:${V}|(?::${w}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${w}:){2}(?:(?::${w}){0,3}:${V}|(?::${w}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${w}:){1}(?:(?::${w}){0,4}:${V}|(?::${w}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${w}){0,5}:${V}|(?::${w}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),Ge=new RegExp(`(?:^${V}$)|(?:^${se}$)`),Qe=new RegExp(`^${V}$`),et=new RegExp(`^${se}$`),ge=e=>e&&e.exact?Ge:new RegExp(`(?:${B(e)}${V}${B(e)})|(?:${B(e)}${se}${B(e)})`,"g");ge.v4=e=>e&&e.exact?Qe:new RegExp(`${B(e)}${V}${B(e)}`,"g");ge.v6=e=>e&&e.exact?et:new RegExp(`${B(e)}${se}${B(e)}`,"g");function tt(e){const r=(...t)=>e(...t);return Object.defineProperty(r,"name",{value:`functionTimeout(${e.name||"<anonymous>"})`,configurable:!0}),r}const{toString:rt}=Object.prototype;function nt(e){return rt.call(e)==="[object RegExp]"}const $e={global:"g",ignoreCase:"i",multiline:"m",dotAll:"s",sticky:"y",unicode:"u"};function at(e,r={}){if(!nt(e))throw new TypeError("Expected a RegExp instance");const t=Object.keys($e).map(l=>(typeof r[l]=="boolean"?r[l]:e[l])?$e[l]:"").join(""),o=new RegExp(r.source||e.source,t);return o.lastIndex=typeof r.lastIndex=="number"?r.lastIndex:e.lastIndex,o}function ot(e,r,{timeout:t}={}){try{return tt(()=>at(e).test(r),{timeout:t})()}catch(o){throw o}}const st=45,lt={timeout:400};function ct(e){return e.length>st?!1:ot(ge.v6({exact:!0}),e,lt)}const it=L("<div>");var le=class{constructor(e){Q(this,"x");Q(this,"y");Q(this,"width");Q(this,"height");this.x=Math.floor(e.x),this.y=Math.floor(e.y),this.width=Math.floor(e.width),this.height=Math.floor(e.height)}get rect(){return{x:this.x,y:this.y,width:this.width,height:this.height}}get left(){return this.x}get top(){return this.y}get right(){return this.x+this.width}get bottom(){return this.y+this.height}get center(){return{x:this.x+this.width*.5,y:this.y+this.height*.5}}get corners(){return{topLeft:{x:this.left,y:this.top},topRight:{x:this.right,y:this.top},bottomRight:{x:this.left,y:this.bottom},bottomLeft:{x:this.right,y:this.bottom}}}},G=e=>{let r=new le(e.getBoundingClientRect());const{transform:t}=getComputedStyle(e);return t&&(r=dt(r,t)),r},dt=(e,r)=>{let t,o;if(r.startsWith("matrix3d(")){const l=r.slice(9,-1).split(/, /);t=+l[12],o=+l[13]}else if(r.startsWith("matrix(")){const l=r.slice(7,-1).split(/, /);t=+l[4],o=+l[5]}else t=0,o=0;return new le({...e,x:e.x-t,y:e.y-o})},W=()=>({x:0,y:0}),be=(e,r)=>e.x===r.x&&e.y===r.y,ie=(e,r)=>new le({...e,x:e.x+r.x,y:e.y+r.y}),ut=(e,r)=>Math.sqrt(Math.pow(e.x-r.x,2)+Math.pow(e.y-r.y,2)),gt=(e,r)=>{const t=Math.max(e.top,r.top),o=Math.max(e.left,r.left),l=Math.min(e.right,r.right),p=Math.min(e.bottom,r.bottom),g=l-o,m=p-t;if(o<l&&t<p){const c=e.width*e.height,u=r.width*r.height,i=g*m;return i/(c+u-i)}return 0},de=(e,r)=>e.x===r.x&&e.y===r.y&&e.width===r.width&&e.height===r.height,bt=(e,r,t)=>{const o=e.transformed.center,l={distance:1/0,droppable:null};for(const p of r){const g=ut(o,p.layout.center);g<l.distance?(l.distance=g,l.droppable=p):g===l.distance&&p.id===t.activeDroppableId&&(l.droppable=p)}return l.droppable},vt=(e,r,t)=>{const o=e.transformed,l={ratio:0,droppable:null};for(const p of r){const g=gt(o,p.layout);g>l.ratio?(l.ratio=g,l.droppable=p):g>0&&g===l.ratio&&p.id===t.activeDroppableId&&(l.droppable=p)}return l.droppable},ke=we(),ft=e=>{const r=je({collisionDetector:vt},e),[t,o]=Ie({draggables:{},droppables:{},sensors:{},active:{draggableId:null,get draggable(){return t.active.draggableId!==null?t.draggables[t.active.draggableId]:null},droppableId:null,get droppable(){return t.active.droppableId!==null?t.droppables[t.active.droppableId]:null},sensorId:null,get sensor(){return t.active.sensorId!==null?t.sensors[t.active.sensorId]:null},overlay:null}}),l=(n,s,d)=>{n.substring(0,n.length-1),K(()=>t[n][s])&&o(n,s,"transformers",d.id,d)},p=(n,s,d)=>{n.substring(0,n.length-1),K(()=>t[n][s])&&K(()=>t[n][s].transformers[d])&&o(n,s,"transformers",d,void 0)},g=({id:n,node:s,layout:d,data:R})=>{const v=t.draggables[n],f={id:n,node:s,layout:d,data:R,_pendingCleanup:!1};let x;if(!v)Object.defineProperties(f,{transformers:{enumerable:!0,configurable:!0,writable:!0,value:{}},transform:{enumerable:!0,configurable:!0,get:()=>{if(t.active.overlay)return W();const A=Object.values(t.draggables[n].transformers);return A.sort((q,Z)=>q.order-Z.order),A.reduce((q,Z)=>Z.callback(q),W())}},transformed:{enumerable:!0,configurable:!0,get:()=>ie(t.draggables[n].layout,t.draggables[n].transform)}});else if(t.active.draggableId===n&&!t.active.overlay){const A={x:v.layout.x-d.x,y:v.layout.y-d.y},q="addDraggable-existing-offset",Z=v.transformers[q],ve=Z?Z.callback(A):A;x={id:q,order:100,callback:fe=>({x:fe.x+ve.x,y:fe.y+ve.y})},j(()=>p("draggables",n,q))}X(()=>{o("draggables",n,f),x&&l("draggables",n,x)}),t.active.draggable&&O()},m=n=>{K(()=>t.draggables[n])&&(o("draggables",n,"_pendingCleanup",!0),queueMicrotask(()=>c(n)))},c=n=>{var s;if((s=t.draggables[n])!=null&&s._pendingCleanup){const d=t.active.draggableId===n;X(()=>{d&&o("active","draggableId",null),o("draggables",n,void 0)})}},u=({id:n,node:s,layout:d,data:R})=>{const v=t.droppables[n],f={id:n,node:s,layout:d,data:R,_pendingCleanup:!1};v||Object.defineProperties(f,{transformers:{enumerable:!0,configurable:!0,writable:!0,value:{}},transform:{enumerable:!0,configurable:!0,get:()=>{const x=Object.values(t.droppables[n].transformers);return x.sort((A,q)=>A.order-q.order),x.reduce((A,q)=>q.callback(A),W())}},transformed:{enumerable:!0,configurable:!0,get:()=>ie(t.droppables[n].layout,t.droppables[n].transform)}}),o("droppables",n,f),t.active.draggable&&O()},i=n=>{K(()=>t.droppables[n])&&(o("droppables",n,"_pendingCleanup",!0),queueMicrotask(()=>b(n)))},b=n=>{var s;if((s=t.droppables[n])!=null&&s._pendingCleanup){const d=t.active.droppableId===n;X(()=>{d&&o("active","droppableId",null),o("droppables",n,void 0)})}},$=({id:n,activators:s})=>{o("sensors",n,{id:n,activators:s,coordinates:{origin:{x:0,y:0},current:{x:0,y:0},get delta(){return{x:t.sensors[n].coordinates.current.x-t.sensors[n].coordinates.origin.x,y:t.sensors[n].coordinates.current.y-t.sensors[n].coordinates.origin.y}}}})},_=n=>{if(!K(()=>t.sensors[n]))return;const s=t.active.sensorId===n;X(()=>{s&&o("active","sensorId",null),o("sensors",n,void 0)})},I=({node:n,layout:s})=>{const d=t.active.overlay,R={node:n,layout:s};d||Object.defineProperties(R,{id:{enumerable:!0,configurable:!0,get:()=>{var v;return(v=t.active.draggable)==null?void 0:v.id}},data:{enumerable:!0,configurable:!0,get:()=>{var v;return(v=t.active.draggable)==null?void 0:v.data}},transformers:{enumerable:!0,configurable:!0,get:()=>Object.fromEntries(Object.entries(t.active.draggable?t.active.draggable.transformers:{}).filter(([v])=>v!=="addDraggable-existing-offset"))},transform:{enumerable:!0,configurable:!0,get:()=>{const v=Object.values(t.active.overlay?t.active.overlay.transformers:[]);return v.sort((f,x)=>f.order-x.order),v.reduce((f,x)=>x.callback(f),W())}},transformed:{enumerable:!0,configurable:!0,get:()=>t.active.overlay?ie(t.active.overlay.layout,t.active.overlay.transform):new le({x:0,y:0,width:0,height:0})}}),o("active","overlay",R)},D=()=>o("active","overlay",null),y=(n,s)=>{X(()=>{o("sensors",n,"coordinates",{origin:{...s},current:{...s}}),o("active","sensorId",n)})},a=n=>{const s=t.active.sensorId;s&&o("sensors",s,"coordinates","current",{...n})},h=()=>o("active","sensorId",null),M=(n,s)=>{const d={};for(const v of Object.values(t.sensors))if(v)for(const[f,x]of Object.entries(v.activators))d[f]??(d[f]=[]),d[f].push({sensor:v,activator:x});const R={};for(const v in d){let f=v;s&&(f=`on${v}`),R[f]=x=>{for(const{activator:A}of d[v]){if(t.active.sensor)break;A(x,n)}}}return R},O=()=>{let n=!1;const s=Object.values(t.draggables),d=Object.values(t.droppables),R=t.active.overlay;return X(()=>{const v=new WeakMap;for(const f of s)if(f){const x=f.layout;v.has(f.node)||v.set(f.node,G(f.node));const A=v.get(f.node);de(x,A)||(o("draggables",f.id,"layout",A),n=!0)}for(const f of d)if(f){const x=f.layout;v.has(f.node)||v.set(f.node,G(f.node));const A=v.get(f.node);de(x,A)||(o("droppables",f.id,"layout",A),n=!0)}if(R){const f=R.layout,x=G(R.node);de(f,x)||(o("active","overlay","layout",x),n=!0)}}),n},C=()=>{const n=t.active.overlay??t.active.draggable;if(n){const s=r.collisionDetector(n,Object.values(t.droppables),{activeDroppableId:t.active.droppableId}),d=s?s.id:null;t.active.droppableId!==d&&o("active","droppableId",d)}},E=n=>{const s={id:"sensorMove",order:0,callback:d=>t.active.sensor?{x:d.x+t.active.sensor.coordinates.delta.x,y:d.y+t.active.sensor.coordinates.delta.y}:d};O(),X(()=>{o("active","draggableId",n),l("draggables",n,s)}),C()},F=()=>{const n=K(()=>t.active.draggableId);X(()=>{n!==null&&p("draggables",n,"sensorMove"),o("active",["draggableId","droppableId"],null)}),O()},ne=n=>{N(()=>{const s=t.active.draggable;s&&K(()=>n({draggable:s}))})},T=n=>{N(()=>{const s=t.active.draggable;if(s){const d=K(()=>t.active.overlay);Object.values(d?d.transform:s.transform),K(()=>n({draggable:s,overlay:d}))}})},U=n=>{N(()=>{const s=t.active.draggable,d=t.active.droppable;s&&K(()=>n({draggable:s,droppable:d,overlay:t.active.overlay}))})},j=n=>{N(({previousDraggable:s,previousDroppable:d,previousOverlay:R})=>{const v=t.active.draggable,f=v?t.active.droppable:null,x=v?t.active.overlay:null;return!v&&s&&K(()=>n({draggable:s,droppable:d,overlay:R})),{previousDraggable:v,previousDroppable:f,previousOverlay:x}},{previousDraggable:null,previousDroppable:null,previousOverlay:null})};T(()=>C()),r.onDragStart&&ne(r.onDragStart),r.onDragMove&&T(r.onDragMove),r.onDragOver&&U(r.onDragOver),r.onDragEnd&&j(r.onDragEnd);const J=[t,{addTransformer:l,removeTransformer:p,addDraggable:g,removeDraggable:m,addDroppable:u,removeDroppable:i,addSensor:$,removeSensor:_,setOverlay:I,clearOverlay:D,recomputeLayouts:O,detectCollisions:C,draggableActivators:M,sensorStart:y,sensorMove:a,sensorEnd:h,dragStart:E,dragEnd:F,onDragStart:ne,onDragMove:T,onDragOver:U,onDragEnd:j}];return S(ke.Provider,{value:J,get children(){return r.children}})},H=()=>Ce(ke)||null,pt=(e="pointer-sensor")=>{const[r,{addSensor:t,removeSensor:o,sensorStart:l,sensorMove:p,sensorEnd:g,dragStart:m,dragEnd:c}]=H(),u=250,i=10;oe(()=>{t({id:e,activators:{pointerdown:D}})}),re(()=>{o(e)});const b=()=>r.active.sensorId===e,$={x:0,y:0};let _=null,I=null;const D=(C,E)=>{C.button===0&&(document.addEventListener("pointermove",h),document.addEventListener("pointerup",M),I=E,$.x=C.clientX,$.y=C.clientY,_=window.setTimeout(a,u))},y=()=>{_&&(clearTimeout(_),_=null),document.removeEventListener("pointermove",h),document.removeEventListener("pointerup",M),document.removeEventListener("selectionchange",O)},a=()=>{r.active.sensor?b()||y():(l(e,$),m(I),O(),document.addEventListener("selectionchange",O))},h=C=>{const E={x:C.clientX,y:C.clientY};if(!r.active.sensor){const F={x:E.x-$.x,y:E.y-$.y};Math.sqrt(F.x**2+F.y**2)>i&&a()}b()&&(C.preventDefault(),p(E))},M=C=>{y(),b()&&(C.preventDefault(),c(),g())},O=()=>{var C;(C=window.getSelection())==null||C.removeAllRanges()}},mt=e=>(pt(),ue(()=>e.children)),ce=e=>({transform:`translate3d(${e.x}px, ${e.y}px, 0)`}),yt=(e,r={})=>{const[t,{addDraggable:o,removeDraggable:l,draggableActivators:p}]=H(),[g,m]=z(null);oe(()=>{const b=g();b&&o({id:e,node:b,layout:G(b),data:r})}),re(()=>l(e));const c=()=>t.active.draggableId===e,u=()=>{var b;return((b=t.draggables[e])==null?void 0:b.transform)||W()};return Object.defineProperties((b,$)=>{const _=$?$():{};N(()=>{const I=g(),D=p(e);if(I)for(const y in D)I.addEventListener(y,D[y]);re(()=>{if(I)for(const y in D)I.removeEventListener(y,D[y])})}),m(b),_.skipTransform||N(()=>{const I=u();if(be(I,W()))b.style.removeProperty("transform");else{const D=ce(u());b.style.setProperty("transform",D.transform??null)}})},{ref:{enumerable:!0,value:m},isActiveDraggable:{enumerable:!0,get:c},dragActivators:{enumerable:!0,get:()=>p(e,!0)},transform:{enumerable:!0,get:u}})},ht=(e,r={})=>{const[t,{addDroppable:o,removeDroppable:l}]=H(),[p,g]=z(null);oe(()=>{const i=p();i&&o({id:e,node:i,layout:G(i),data:r})}),re(()=>l(e));const m=()=>t.active.droppableId===e,c=()=>{var i;return((i=t.droppables[e])==null?void 0:i.transform)||W()};return Object.defineProperties((i,b)=>{const $=b?b():{};g(i),$.skipTransform||N(()=>{const _=c();if(be(_,W()))i.style.removeProperty("transform");else{const I=ce(c());i.style.setProperty("transform",I.transform??null)}})},{ref:{enumerable:!0,value:g},isActiveDroppable:{enumerable:!0,get:m},transform:{enumerable:!0,get:c}})},$t=e=>{const[r,{onDragStart:t,onDragEnd:o,setOverlay:l,clearOverlay:p}]=H();let g;t(({draggable:c})=>{l({node:c.node,layout:c.layout}),queueMicrotask(()=>{if(g){const u=G(g),i={x:(c.layout.width-u.width)/2,y:(c.layout.height-u.height)/2};u.x+=i.x,u.y+=i.y,l({node:g,layout:u})}})}),o(()=>queueMicrotask(p));const m=()=>{const c=r.active.overlay,u=r.active.draggable;return!c||!u?{}:{position:"fixed",transition:"transform 0s",top:`${c.layout.top}px`,left:`${c.layout.left}px`,"min-width":`${u.layout.width}px`,"min-height":`${u.layout.height}px`,...ce(c.transform),...e.style}};return S(Te,{get mount(){return document.body},get children(){return S(De,{get when(){return r.active.draggable},get children(){const c=it(),u=g;return typeof u=="function"?_e(u,c):g=c,k(c,(()=>{const i=ue(()=>typeof e.children=="function");return()=>i()?e.children(r.active.draggable):e.children})()),te(i=>{const b=e.class,$=m();return b!==i._v$&&Se(c,i._v$=b),i._v$2=Fe(c,$,i._v$2),i},{_v$:void 0,_v$2:void 0}),c}})}})},xt=(e,r,t)=>{const o=e.slice();return o.splice(t,0,...o.splice(r,1)),o},Me=we(),It=e=>{const[r]=H(),[t,o]=Ie({initialIds:[],sortedIds:[]}),l=m=>m>=0&&m<t.initialIds.length;N(()=>{o("initialIds",[...e.ids]),o("sortedIds",[...e.ids])}),N(()=>{r.active.draggableId&&r.active.droppableId?K(()=>{const m=t.sortedIds.indexOf(r.active.draggableId),c=t.initialIds.indexOf(r.active.droppableId);if(!l(m)||!l(c))o("sortedIds",[...e.ids]);else if(m!==c){const u=xt(t.sortedIds,m,c);o("sortedIds",u)}}):o("sortedIds",[...e.ids])});const g=[t,{}];return S(Me.Provider,{value:g,get children(){return e.children}})},Dt=()=>Ce(Me)||null,St=(e,r)=>t=>{e(t),r(t)},wt=(e,r={})=>{const[t,{addTransformer:o,removeTransformer:l}]=H(),[p]=Dt(),g=yt(e,r),m=ht(e,r),c=St(g.ref,m.ref),u=()=>p.initialIds.indexOf(e),i=()=>p.sortedIds.indexOf(e),b=y=>{var a;return((a=t.droppables[y])==null?void 0:a.layout)||null},$=()=>{const y=W(),a=u(),h=i();if(h!==a){const M=b(e),O=b(p.initialIds[h]);M&&O&&(y.x=O.x-M.x,y.y=O.y-M.y)}return y},_={id:"sortableOffset",order:100,callback:y=>{const a=$();return{x:y.x+a.x,y:y.y+a.y}}};oe(()=>o("droppables",e,_)),re(()=>l("droppables",e,_.id));const I=()=>{var y,a;return(e===t.active.draggableId&&!t.active.overlay?(y=t.draggables[e])==null?void 0:y.transform:(a=t.droppables[e])==null?void 0:a.transform)||W()};return Object.defineProperties(y=>{g(y,()=>({skipTransform:!0})),m(y,()=>({skipTransform:!0})),N(()=>{const a=I();if(be(a,W()))y.style.removeProperty("transform");else{const h=ce(I());y.style.setProperty("transform",h.transform??null)}})},{ref:{enumerable:!0,value:c},transform:{enumerable:!0,get:I},isActiveDraggable:{enumerable:!0,get:()=>g.isActiveDraggable},dragActivators:{enumerable:!0,get:()=>g.dragActivators},isActiveDroppable:{enumerable:!0,get:()=>m.isActiveDroppable}})};const Ct=L('<div class="sortable"><div class="m-1 flex cursor-grab justify-between p-1"><span class="select-none"></span><input type="checkbox" class="toggle">'),_t=L('<input type="checkbox" id="connection-modal" class="modal-toggle">'),Ot=L('<div class="column self-stretch">'),Et=L('<div class="sortable">'),kt=L('<div class="modal"><div class="modal-box w-80"><button class="btn btn-neutral btn-sm ml-auto mt-4 block"></button></div><label class="modal-backdrop" for="connection-modal">'),Mt=e=>{const[r]=Oe(),[t,o]=z(null),l=({draggable:m})=>o(m.id),p=({draggable:m,droppable:c})=>{if(m&&c){const u=e.order,i=u.indexOf(m.id),b=u.indexOf(c.id);if(i!==b){const $=u.slice();$.splice(b,0,...$.splice(i,1)),e.onOrderChange($)}}},g=m=>{const c=m.key,u=wt(c),[i]=H();return(()=>{const b=Ct(),$=b.firstChild,_=$.firstChild,I=_.nextSibling;return _e(u,b,()=>!0),k(_,()=>r(c)),I.addEventListener("change",D=>{e.onVisibleChange({...e.visible,[c]:D.target.checked})}),te(D=>{const y=!!u.isActiveDraggable,a=!!i.active.draggable;return y!==D._v$&&b.classList.toggle("opacity-25",D._v$=y),a!==D._v$2&&b.classList.toggle("transition-transform",D._v$2=a),D},{_v$:void 0,_v$2:void 0}),te(()=>I.checked=e.visible[c]),b})()};return[_t(),(()=>{const m=kt(),c=m.firstChild,u=c.firstChild;return k(c,S(ft,{onDragStart:l,onDragEnd:p,collisionDetector:bt,get children(){return[S(mt,{}),(()=>{const i=Ot();return k(i,S(It,{get ids(){return e.order},get children(){return S(ee,{get each(){return e.order},children:b=>S(g,{key:b})})}})),i})(),S($t,{get children(){return S(De,{get when(){return t()},get children(){const i=Et();return k(i,()=>r(t())),i}})}})]}}),u),u.$$click=()=>e.onOrderChange(Object.values(P)),k(u,()=>r("reset")),m})()]};Ee(["click"]);const xe=L('<div class="flex h-full items-center"><button class="btn btn-circle btn-xs">'),At=L('<div class="flex flex-col gap-4"><div class="flex w-full"><input class="input input-primary mr-4 w-40 flex-1"><label for="connection-modal" class="btn btn-circle"></label></div><div class="overflow-x-auto whitespace-nowrap rounded-md"><table class="table table-xs rounded-none bg-base-200"><thead></thead><tbody>'),Pt=L("<tr>"),Rt=L('<th class="bg-base-300"><div>'),jt=L("<span>"),Ft=L('<tr class="hover">'),Tt=L("<td>"),Ae=Object.values(P),Kt={...Object.fromEntries(Ae.map(e=>[e,!0])),[P.ID]:!1},Xt=()=>{const[e]=Oe(),[r,t]=pe(z(Kt),{name:"columnVisibility",storage:localStorage}),[o,l]=pe(z(Ae),{name:"columnOrder",storage:localStorage}),p=Ye(),[g,m]=z(""),c=Ue(`${Je()}/connections?token=${Ze()}`),u=Xe(c,"message"),[i,b]=z([]);N(()=>{var h;const a=(h=u())==null?void 0:h.data;a&&b(M=>{const O=new Map;return M.forEach(E=>O.set(E.id,E)),JSON.parse(a).connections.map(E=>{const F=O.get(E.id);return F?{...E,downloadSpeed:F.download?E.download-F.download:0,uploadSpeed:F.upload?E.upload-F.upload:0}:{...E,downloadSpeed:0,uploadSpeed:0}}).slice(-100)})});const $=a=>p.delete(`connections/${a}`),_=[{accessorKey:P.Close,header:()=>(()=>{const a=xe(),h=a.firstChild;return h.$$click=()=>p.delete("connections"),k(h,S(me,{size:"18"})),a})(),cell:({row:a})=>(()=>{const h=xe(),M=h.firstChild;return M.$$click=()=>$(a.id),k(M,S(me,{size:"18"})),h})()},{accessorKey:P.ID,accessorFn:a=>a.id},{accessorKey:P.Type,accessorFn:a=>`${a.metadata.type}(${a.metadata.network})`},{accessorKey:P.Process,accessorFn:a=>a.metadata.process||a.metadata.processPath.replace(/^.*[/\\](.*)$/,"$1")||"-"},{accessorKey:P.Host,accessorFn:a=>`${a.metadata.host?a.metadata.host:a.metadata.destinationIP}:${a.metadata.destinationPort}`},{accessorKey:P.Rule,accessorFn:a=>a.rulePayload?`${a.rule} :: ${a.rulePayload}`:a.rule},{accessorKey:P.Chains,accessorFn:a=>a.chains.slice().reverse().join(" :: ")},{accessorKey:P.DlSpeed,accessorFn:a=>`${ae(a.downloadSpeed)}/s`,sortingFn:(a,h)=>a.original.downloadSpeed-h.original.downloadSpeed},{accessorKey:P.ULSpeed,accessorFn:a=>`${ae(a.uploadSpeed)}/s`,sortingFn:(a,h)=>a.original.uploadSpeed-h.original.uploadSpeed},{accessorKey:P.Download,accessorFn:a=>ae(a.download),sortingFn:(a,h)=>a.original.download-h.original.download},{accessorKey:P.Upload,accessorFn:a=>ae(a.upload),sortingFn:(a,h)=>a.original.upload-h.original.upload},{accessorKey:P.Source,accessorFn:a=>ct(a.metadata.sourceIP)?`[${a.metadata.sourceIP}]:${a.metadata.sourcePort}`:`${a.metadata.sourceIP}:${a.metadata.sourcePort}`},{accessorKey:P.Destination,accessorFn:a=>a.metadata.remoteDestination||a.metadata.destinationIP||a.metadata.host}],[I,D]=z([{id:"ID",desc:!0}]),y=ze({state:{get columnOrder(){return o()},get sorting(){return I()},get columnVisibility(){return r()}},get data(){return g()?i().filter(a=>Object.values(a).some(h=>JSON.stringify(h).toLowerCase().includes(g().toLowerCase()))):i()},enableHiding:!0,columns:_,onSortingChange:D,getSortedRowModel:Be(),getCoreRowModel:He()});return(()=>{const a=At(),h=a.firstChild,M=h.firstChild,O=M.nextSibling,C=h.nextSibling,E=C.firstChild,F=E.firstChild,ne=F.nextSibling;return M.$$input=T=>m(T.target.value),k(O,S(Ke,{})),k(h,S(Mt,{get order(){return o()},get visible(){return r()},onOrderChange:T=>{l([...T])},onVisibleChange:T=>t({...T})}),null),k(F,S(ee,{get each(){return y.getHeaderGroups()},children:T=>(()=>{const U=Pt();return k(U,S(ee,{get each(){return T.headers},children:j=>(()=>{const Y=Rt(),J=Y.firstChild;return Le(J,"click",j.column.getToggleSortingHandler(),!0),k(J,(()=>{const n=ue(()=>j.column.id===P.Close);return()=>n()?ye(j.column.columnDef.header,j.getContext()):(()=>{const s=jt();return k(s,()=>e(j.column.id)),s})()})(),null),k(J,()=>({asc:S(qe,{}),desc:S(Ve,{})})[j.column.getIsSorted()]??null,null),te(()=>Se(J,Ne("flex items-center justify-between",j.column.getCanSort()&&"cursor-pointer select-none"))),Y})()})),U})()})),k(ne,S(ee,{get each(){return y.getRowModel().rows},children:T=>(()=>{const U=Ft();return k(U,S(ee,{get each(){return T.getVisibleCells()},children:j=>(()=>{const Y=Tt();return k(Y,()=>ye(j.column.columnDef.cell,j.getContext())),Y})()})),U})()})),te(()=>We(M,"placeholder",e("search"))),a})()};Ee(["click","input"]);export{Xt as default};
