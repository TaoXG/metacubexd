import{m as E,c as S,k as z,d as q,u as B,a as P,i,b as e,I as F,A as O,F as $,S as A,e as U,t as b,f as j,s as T,g as H,h as M,j as G,l as K,n as W,o as J,p as Q,R as m,q as X,r as Y,v as f,w as Z,x as ee,y as te}from"./vendor-60d7ee8f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const ne="modulepreload",re=function(t){return"/metacubexd/"+t},I={},p=function(s,a,l){if(!a||a.length===0)return s();const r=document.getElementsByTagName("link");return Promise.all(a.map(n=>{if(n=re(n),n in I)return;I[n]=!0;const o=n.endsWith(".css"),d=o?'[rel="stylesheet"]':"";if(!!l)for(let h=r.length-1;h>=0;h--){const g=r[h];if(g.href===n&&(!o||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${d}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":ne,o||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),o)return new Promise((h,g)=>{c.addEventListener("load",h),c.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>s()).catch(n=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=n,window.dispatchEvent(o),!o.defaultPrevented)throw n})},se=["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter"],[y,oe]=E(S(""),{name:"selectedEndpoint",storage:localStorage}),[ae,Le]=E(S([]),{name:"endpointList",storage:localStorage}),[le,ie]=E(S("business"),{name:"theme",storage:localStorage}),C=()=>ae().find(({id:t})=>t===y()),Re=()=>{var t;return(t=C())==null?void 0:t.secret},Ie=()=>{var t;return(t=C())==null?void 0:t.url.replace("http","ws")},ke=()=>{const t=C();return z.create({prefixUrl:t==null?void 0:t.url,headers:{Authorization:t!=null&&t.secret?`Bearer ${t.secret}`:""}})},D=b("<li>"),ce=b('<div class="drawer drawer-end w-auto sm:ml-auto"><input id="themes" type="checkbox" class="drawer-toggle"><div class="drawer-content flex items-center"><label for="themes" class="btn btn-circle btn-primary drawer-button btn-sm"></label></div><div class="drawer-side"><label for="themes" class="drawer-overlay"></label><ul class="menu rounded-box z-50 gap-2 bg-base-300 p-2 shadow">'),de=b('<li class="btn btn-xs">'),ue=b('<div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1">'),he=b('<ul class="navbar rounded-box sticky inset-x-0 top-2 z-10 mx-2 mt-2 flex w-auto items-center justify-center bg-base-200 p-2 sm:gap-2"><div class="navbar-start"><div class="drawer w-auto lg:hidden"><input id="navs" type="checkbox" class="drawer-toggle"><div class="drawer-content flex items-center"><label for="navs" class="btn btn-circle drawer-button btn-sm"></label></div><div class="drawer-side"><label for="navs" class="drawer-overlay"></label><ul class="menu rounded-box z-50 gap-2 bg-base-300 p-2 shadow"></ul></div></div><a class="btn btn-ghost text-xl normal-case" href="https://github.com/metacubex/metacubexd" target="_blank">metacubexd</a></div><div class="navbar-end"><div class="flex items-center gap-2"><button class="btn btn-circle btn-secondary btn-sm">'),me=({href:t,tooltip:s,children:a})=>(()=>{const l=D();return i(l,e(O,{class:"tooltip tooltip-bottom rounded-full",href:t,"data-tip":s,children:a})),l})(),fe=()=>(()=>{const t=ce(),s=t.firstChild,a=s.nextSibling,l=a.firstChild,r=a.nextSibling,n=r.firstChild,o=n.nextSibling;return i(l,e(j,{})),i(o,e($,{each:se,children:d=>(()=>{const u=de();return u.$$click=()=>ie(d),T(u,"data-theme",d),i(u,d),u})()})),t})(),k=()=>[{href:"/",name:"Overview",icon:e(H,{})},{href:"/proxies",name:"Proxies",icon:e(M,{})},{href:"/rules",name:"Rules",icon:e(G,{})},{href:"/conns",name:"Connections",icon:e(K,{})},{href:"/logs",name:"Logs",icon:e(W,{})},{href:"/config",name:"Config",icon:e(J,{})}],pe=()=>{const t=B(),s=P(),a=()=>{oe(""),s("/setup")};return(()=>{const l=he(),r=l.firstChild,n=r.firstChild,o=n.firstChild,d=o.nextSibling,u=d.firstChild,c=d.nextSibling,h=c.firstChild,g=h.nextSibling,L=r.nextSibling,R=L.firstChild,w=R.firstChild;return i(u,e(F,{})),i(g,e($,{get each(){return k()},children:({href:_,name:x})=>(()=>{const v=D();return i(v,e(O,{href:_,children:x})),v})()})),i(l,e(A,{get when(){return t.pathname!=="/setup"},get children(){const _=ue(),x=_.firstChild;return i(x,e($,{get each(){return k()},children:({href:v,name:N,icon:V})=>e(me,{href:v,tooltip:N,children:V})})),_}}),L),i(R,e(fe,{}),w),w.$$click=a,i(w,e(U,{})),l})()};q(["click"]);const ge=b('<div class="relative flex h-screen flex-col subpixel-antialiased"><div class="flex-1 overflow-y-auto p-4">'),be=f(()=>p(()=>import("./Setup-651fa4a1.js"),["assets/Setup-651fa4a1.js","assets/vendor-60d7ee8f.js","assets/index-5b8fcc07.js"])),_e=f(()=>p(()=>import("./Overview-197dfea8.js"),["assets/Overview-197dfea8.js","assets/vendor-60d7ee8f.js","assets/index-7d8c4584.js","assets/index-ac54fc13.js"])),ve=f(()=>p(()=>import("./Connections-8eafe939.js"),["assets/Connections-8eafe939.js","assets/vendor-60d7ee8f.js","assets/index-7d8c4584.js","assets/index-ac54fc13.js","assets/tw-merge-1166cefb.js"])),we=f(()=>p(()=>import("./Logs-c50de87a.js"),["assets/Logs-c50de87a.js","assets/vendor-60d7ee8f.js","assets/index-7d8c4584.js"])),xe=f(()=>p(()=>import("./Proxies-e3f0d81d.js"),["assets/Proxies-e3f0d81d.js","assets/vendor-60d7ee8f.js","assets/tw-merge-1166cefb.js"])),$e=f(()=>p(()=>import("./Rules-86d874c6.js"),["assets/Rules-86d874c6.js","assets/vendor-60d7ee8f.js"])),ye=f(()=>p(()=>import("./Config-b926320d.js"),["assets/Config-b926320d.js","assets/vendor-60d7ee8f.js","assets/index-5b8fcc07.js"])),Ee=()=>{const t=P();return Q(()=>{y()||t("/setup")}),(()=>{const s=ge(),a=s.firstChild;return i(s,e(pe,{}),a),i(a,e(X,{get children(){return[e(A,{get when(){return y()},get children(){return[e(m,{path:"/",component:_e}),e(m,{path:"/proxies",component:xe}),e(m,{path:"/rules",component:$e}),e(m,{path:"/conns",component:ve}),e(m,{path:"/logs",component:we}),e(m,{path:"/config",component:ye})]}}),e(m,{path:"/setup",component:be})]}})),Y(()=>T(s,"data-theme",le())),s})()},Se=document.getElementById("root");Z(()=>e(te,{get source(){return ee()},get children(){return e(Ee,{})}}),Se);export{oe as a,Re as b,ae as e,Le as s,ke as u,Ie as w};
