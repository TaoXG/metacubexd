import{m as _,c as h,k as se,d as ae,u as z,o as V,a as ie,b as le,e as q,i as m,f as t,I as ce,A as Q,F as N,S as Z,g as de,h as ue,j as E,l as pe,t as me,n as P,s as T,p as he,q as ge,r as fe,v as ve,w as ye,x as xe,y as be,z as we,R as f,N as _e,B as Pe,C as x,D as Ce,E as $e,G as Se,H as De,J as Ie,K as Le}from"./vendor-a821092a.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();const Ne="modulepreload",Ee=function(e,r){return new URL(e,r).href},U={},b=function(r,i,u){if(!i||i.length===0)return r();const s=document.getElementsByTagName("link");return Promise.all(i.map(o=>{if(o=Ee(o,u),o in U)return;U[o]=!0;const d=o.endsWith(".css"),v=d?'[rel="stylesheet"]':"";if(!!u)for(let c=s.length-1;c>=0;c--){const l=s[c];if(l.href===o&&(!d||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${v}`))return;const n=document.createElement("link");if(n.rel=d?"stylesheet":Ne,d||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),d)return new Promise((c,l)=>{n.addEventListener("load",c),n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>r()).catch(o=>{const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=o,window.dispatchEvent(d),!d.defaultPrevented)throw o})};var p=(e=>(e.Overview="/overview",e.Proxies="/proxies",e.Proxyprovider="/proxyprovider",e.Rules="/rules",e.Conns="/conns",e.Log="/logs",e.Config="/config",e))(p||{}),J=(e=>(e.Close="close",e.ID="ID",e.Type="type",e.Process="process",e.Host="host",e.Rule="rules",e.Chains="chains",e.DlSpeed="dlSpeed",e.ULSpeed="ulSpeed",e.Download="dl",e.Upload="ul",e.Source="source",e.Destination="destination",e))(J||{}),Oe=(e=>(e[e.NOT_CONNECTED=0]="NOT_CONNECTED",e[e.MEDIUM=200]="MEDIUM",e[e.HIGH=500]="HIGH",e))(Oe||{}),W=(e=>(e.DOTS="dots",e.BAR="bar",e.Auto="auto",e))(W||{}),w=(e=>(e.EN="en-US",e.ZH="zh-CN",e))(w||{});const Te=Object.values(J),ft={...Object.fromEntries(Te.map(e=>[e,!0])),ID:!1},ke=["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter"],[O,Re]=_(h(""),{name:"selectedEndpoint",storage:localStorage}),[Be,vt]=_(h([]),{name:"endpointList",storage:localStorage}),[Me,Ue]=_(h("halloween"),{name:"theme",storage:localStorage}),k=()=>Be().find(({id:e})=>e===O()),yt=()=>{var e;return(e=k())==null?void 0:e.secret},xt=()=>{var e;return(e=k())==null?void 0:e.url.replace("http","ws")},je=()=>{const e=k();return se.create({prefixUrl:e==null?void 0:e.url,headers:{Authorization:e!=null&&e.secret?`Bearer ${e.secret}`:""}})},[bt,wt]=_(h(W.BAR),{name:"proxiesPreviewType",storage:localStorage}),[Ge,_t]=_(h("https://www.gstatic.com/generate_204"),{name:"urlForDelayTest",storage:localStorage}),[He,Pt]=_(h(!1),{name:"autoCloseConns",storage:localStorage}),[j,G]=h([]),[H,Fe]=h([]),[L,F]=h({}),[A,Ae]=h({});function ze(){const e=je(),r=a=>{a.forEach(n=>{var l;const c=((l=n.history.at(-1))==null?void 0:l.delay)??0;Ae({...A(),[n.name]:{udp:n.udp,type:n.type,name:n.name}}),F({...L(),[n.name]:c})})},i=async()=>{const{providers:a}=await e.get("providers/proxies").json();Object.values(a).forEach(l=>{r(l.proxies)}),Fe(Object.values(a).filter(l=>l.name!=="default"&&l.vehicleType!=="Compatible"));const{proxies:n}=await e.get("proxies").json(),c=[...n.GLOBAL.all??[],"GLOBAL"];r(Object.values(n)),G(Object.values(n).filter(l=>{var g;return(g=l.all)==null?void 0:g.length}).sort((l,g)=>c.indexOf(l.name)-c.indexOf(g.name)))};return{proxies:j,proxyProviders:H,delayTestByProxyGroupName:async a=>{const n=await e.get(`group/${a}/delay`,{searchParams:{url:Ge(),timeout:2e3}}).json();F({...L(),...n})},delayMap:L,proxyNodeMap:A,updateProxy:i,setProxyGroupByProxyName:async(a,n)=>{const c=j().slice(),l=c.find(g=>g.name===a.name);He()&&e.delete("connections"),await e.put(`proxies/${a.name}`,{body:JSON.stringify({name:n})}),l.now=n,G(c)},updateProviderByProviderName:async a=>{try{await e.put(`providers/proxies/${a}`)}catch{}await i()},updateAllProvider:async()=>{await Promise.all(H().map(a=>e.put(`providers/proxies/${a.name}`))),await i()},healthCheckByProviderName:async a=>{await e.get(`providers/proxies/${a}/healthcheck`,{timeout:30*1e3}),await i()}}}const Ve=P('<li class="tooltip tooltip-bottom">'),qe=P('<div class="drawer drawer-end w-auto sm:ml-auto"><input id="themes" type="checkbox" class="drawer-toggle"><div class="drawer-content flex items-center"><label for="themes" class="btn btn-circle btn-primary drawer-button btn-sm"></label></div><div class="drawer-side"><label for="themes" class="drawer-overlay"></label><ul class="menu rounded-box gap-2 bg-base-300 p-2 shadow">'),Qe=P('<li class="btn btn-xs">'),Ze=P('<div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal gap-2">'),Je=P('<ul class="navbar rounded-box sticky inset-x-0 top-2 z-10 mx-2 mt-2 flex w-auto items-center justify-center bg-base-300 px-4"><div class="navbar-start gap-4"><div><input id="navs" type="checkbox" class="drawer-toggle"><div class="drawer-content flex items-center"><label for="navs" class="btn btn-circle drawer-button btn-sm"></label></div><div class="drawer-side"><label for="navs" class="drawer-overlay"></label><ul class="menu rounded-box min-h-full w-2/5 gap-2 bg-base-300 pt-20 shadow"></ul></div></div><a class="text-xl font-bold normal-case" href="https://github.com/metacubex/metacubexd" target="_blank">metacubexd</a></div><div class="navbar-end"><div class="flex items-center gap-2"><button class="btn btn-circle btn-sm"></button><button class="btn btn-circle btn-secondary btn-sm">'),We=P("<li>"),Xe=({href:e,tooltip:r,children:i})=>(()=>{const u=Ve();return T(u,"data-tip",r),m(u,t(Q,{class:"rounded-box",href:e,children:i})),u})(),Ye=()=>(()=>{const e=qe(),r=e.firstChild,i=r.nextSibling,u=i.firstChild,s=i.nextSibling,o=s.firstChild,d=o.nextSibling;return m(u,t(he,{})),m(d,t(N,{each:ke,children:v=>(()=>{const a=Qe();return a.$$click=()=>Ue(v),T(a,"data-theme",v),m(a,v),a})()})),e})(),Ke=()=>{const[e,{locale:r}]=z(),{updateProxy:i,proxyProviders:u}=ze();V(()=>{i()});const s=ie(()=>{const c=[{href:p.Overview,name:e("overview"),icon:t(ge,{})},{href:p.Proxies,name:e("proxies"),icon:t(fe,{})},{href:p.Rules,name:e("rules"),icon:t(ve,{})},{href:p.Conns,name:e("connections"),icon:t(ye,{})},{href:p.Log,name:e("logs"),icon:t(xe,{})},{href:p.Config,name:e("config"),icon:t(be,{})}];return u().length>0&&c.splice(2,0,{href:p.Proxyprovider,name:e("proxyProviders"),icon:t(we,{})}),c}),o=le(),d=q(),[v,a]=h(!1),n=()=>{Re(""),d("/setup")};return(()=>{const c=Je(),l=c.firstChild,g=l.firstChild,$=g.firstChild,R=$.nextSibling,K=R.firstChild,ee=R.nextSibling,te=ee.firstChild,re=te.nextSibling,B=l.nextSibling,M=B.firstChild,S=M.firstChild,D=S.nextSibling;return $.addEventListener("change",y=>a(y.target.checked)),m(K,t(ce,{})),m(re,t(N,{get each(){return s()},children:({href:y,name:I})=>(()=>{const C=We();return C.$$click=()=>a(!1),m(C,t(Q,{href:y,children:I})),C})()})),m(c,t(Z,{get when(){return o.pathname!=="/setup"},get children(){const y=Ze(),I=y.firstChild;return m(I,t(N,{get each(){return s()},children:({href:C,name:oe,icon:ne})=>t(Xe,{href:C,tooltip:oe,children:ne})})),y}}),B),S.$$click=()=>{const y=r();r(y===w.EN?w.ZH:w.EN)},m(S,t(de,{})),m(M,t(Ye,{}),D),D.$$click=n,m(D,t(ue,{})),E(()=>pe(g,me("drawer w-auto lg:hidden",""))),E(()=>$.checked=v()),c})()};ae(["click"]);const et=P('<div class="relative flex h-screen flex-col subpixel-antialiased"><div class="flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-4">'),tt=x(()=>b(()=>import("./Setup-c806dad9.js"),["./Setup-c806dad9.js","./vendor-a821092a.js","./index-23343ee3.js"],import.meta.url)),rt=x(()=>b(()=>import("./Overview-ecd7d32c.js"),["./Overview-ecd7d32c.js","./vendor-a821092a.js","./index-f4fc6973.js","./index-ac54fc13.js"],import.meta.url)),ot=x(()=>b(()=>import("./Connections-42dff2ad.js"),["./Connections-42dff2ad.js","./vendor-a821092a.js","./index-f4fc6973.js","./index-6c81a447.js","./index-ac54fc13.js"],import.meta.url)),nt=x(()=>b(()=>import("./Logs-eb310699.js"),["./Logs-eb310699.js","./vendor-a821092a.js","./index-f4fc6973.js","./index-6c81a447.js"],import.meta.url)),st=x(()=>b(()=>import("./Proxies-e4620240.js"),["./Proxies-e4620240.js","./vendor-a821092a.js","./ProxyNodePreview-ce5bd2f3.js","./index-d4e52c73.js"],import.meta.url)),at=x(()=>b(()=>import("./ProxyProvider-2f2a3d14.js"),["./ProxyProvider-2f2a3d14.js","./vendor-a821092a.js","./ProxyNodePreview-ce5bd2f3.js","./index-d4e52c73.js","./index-ac54fc13.js"],import.meta.url)),it=x(()=>b(()=>import("./Rules-d68b26f6.js"),["./Rules-d68b26f6.js","./vendor-a821092a.js","./index-d4e52c73.js"],import.meta.url)),lt=x(()=>b(()=>import("./Config-201dbb23.js"),["./Config-201dbb23.js","./vendor-a821092a.js","./index-23343ee3.js"],import.meta.url)),ct=()=>{const e=q();return V(async()=>{O()||e("/setup")}),(()=>{const r=et(),i=r.firstChild;return m(r,t(Ke,{}),i),m(i,t(Pe,{get children(){return[t(Z,{get when(){return O()},get children(){return[t(f,{get path(){return p.Overview},component:rt}),t(f,{get path(){return p.Proxies},component:st}),t(f,{get path(){return p.Proxyprovider},component:at}),t(f,{get path(){return p.Rules},component:it}),t(f,{get path(){return p.Conns},component:ot}),t(f,{get path(){return p.Log},component:nt}),t(f,{get path(){return p.Config},component:lt}),t(f,{path:"*",get element(){return t(_e,{get href(){return p.Overview}})}})]}}),t(f,{path:"/setup",component:tt})]}})),E(()=>T(r,"data-theme",Me())),r})()},dt={add:"Add",overview:"Overview",proxies:"Proxies",rules:"Rules",connections:"Connections",logs:"Logs",config:"Config",upload:"Upload",download:"Download",uploadTotal:"Upload Total",downloadTotal:"Download Total",activeConnections:"Active Connections",memoryUsage:"Memory Usage",traffic:"Traffic",memory:"Memory",down:"Down",up:"Up",proxyProviders:"Proxy Providers",ruleProviders:"Rule Providers",search:"Search",ID:"ID",type:"Type",name:"Name",process:"Process",host:"Host",chains:"Chains",dlSpeed:"DL Speed",ulSpeed:"UL Speed",dl:"DL",ul:"UL",source:"Source",destination:"Destination",close:"Close",reset:"Reset",dnsQuery:"DNS Query",dots:"Dots",bar:"Bar",auto:"Auto",proxiesPreviewType:"Proxies preview type",urlForDelayTest:"Url for delay test",autoCloseConns:"Automatically close all connections"},ut={add:"添加",overview:"概览",proxies:"代理",rules:"规则",connections:"连接",logs:"日志",config:"配置",upload:"上传",download:"下载",uploadTotal:"上传总量",downloadTotal:"下载总量",activeConnections:"活动连接",memoryUsage:"内存使用情况",traffic:"流量",memory:"内存",down:"下载",up:"上传",proxyProviders:"代理提供者",ruleProviders:"规则提供者",search:"搜索",ID:"ID",type:"类型",name:"名字",process:"进程",host:"主机",chains:"链路",dlSpeed:"下载速度",ulSpeed:"上传速度",dl:"下载量",ul:"上传量",source:"源地址",destination:"目标地址",close:"关闭",reset:"重置",dnsQuery:"DNS 查询",dots:"点阵",bar:"条形",auto:"自适应",proxiesPreviewType:"节点组预览样式",urlForDelayTest:"测速链接",autoCloseConns:"切换代理时自动断开全部连接"},X={[w.EN]:dt,[w.ZH]:ut},Y=()=>{const[e,r]=_(h(Reflect.has(X,navigator.language)?navigator.language:w.EN),{name:"lang",storage:localStorage});return{lang:e,setLang:r}},pt=e=>{const{setLang:r}=Y(),[i,{locale:u}]=z();return Se(()=>{r(u())}),e.children},mt=e=>{const{lang:r}=Y(),i=Ce(X,r());return t($e.Provider,{value:i,get children(){return t(pt,{get children(){return e.children}})}})},ht=document.getElementById("root");De(()=>t(mt,{get children(){return t(Ie,{get source(){return Le()},get children(){return t(ct,{})}})}}),ht);export{J as A,Oe as D,W as P,Re as a,yt as b,ft as c,ze as d,Be as e,wt as f,Pt as g,_t as h,Te as i,He as j,Ge as k,bt as p,vt as s,je as u,xt as w};
