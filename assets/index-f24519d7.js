import{s as xe,a as we,m as be,t as L,i as u,c as s,S as N,b as x,d as $e,e as y,f as p,k as Pe,g as q,h as T,j as k,l as S,u as Z,n as _e,o as te,I as Ce,A as re,F as O,p as De,q as Le,r as F,v as Ne,w as Se,x as ke,y as Ie,z as Me,B as Te,C as je,D as Fe,E as A,G as V,H as Be,R as b,N as ze,J as Ge,K as P,L as Ue,M as Oe,O as Re,P as He,Q as qe,T as Ze}from"./vendor-a313f5e6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=l(n);fetch(n.href,r)}})();const Ae="modulepreload",Ve=function(e,t){return new URL(e,t).href},Q={},_=function(t,l,o){if(!l||l.length===0)return t();const n=document.getElementsByTagName("link");return Promise.all(l.map(r=>{if(r=Ve(r,o),r in Q)return;Q[r]=!0;const i=r.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!o)for(let m=n.length-1;m>=0;m--){const h=n[m];if(h.href===r&&(!i||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const d=document.createElement("link");if(d.rel=i?"stylesheet":Ae,i||(d.as="script",d.crossOrigin=""),d.href=r,document.head.appendChild(d),i)return new Promise((m,h)=>{d.addEventListener("load",m),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})},Je=x('<span class="loading loading-spinner">'),We=x("<button>"),X=e=>{const[t,l]=xe(e,["class","loading"]);return(()=>{const o=We();return we(o,be({get class(){return L("btn",t.loading?"btn-disabled":t.class)}},l),!1,!0),u(o,s(N,{get when(){return t.loading},get children(){return Je()}}),null),u(o,()=>e.children,null),o})()},Qe=["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter"];var g=(e=>(e.Overview="/overview",e.Proxies="/proxies",e.ProxyProvider="/proxyprovider",e.Rules="/rules",e.Conns="/conns",e.Log="/logs",e.Config="/config",e.Setup="/setup",e))(g||{});const Xe=10,qt={title:{align:"center",style:{color:"gray",fontSize:"8px"}},chart:{toolbar:{show:!1},zoom:{enabled:!1},animations:{easing:"linear"}},noData:{text:"Loading..."},legend:{showForSingleSeries:!0,fontSize:"8px",labels:{colors:"gray"},itemMargin:{horizontal:32}},dataLabels:{enabled:!1},grid:{yaxis:{lines:{show:!1}}},stroke:{curve:"smooth"},tooltip:{enabled:!1},xaxis:{range:Xe,labels:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{style:{colors:"gray",fontSize:"8px"},formatter:e=>$e(e).toString()}}};var J=(e=>(e[e.NOT_CONNECTED=-1]="NOT_CONNECTED",e[e.MEDIUM=200]="MEDIUM",e[e.HIGH=500]="HIGH",e))(J||{}),oe=(e=>(e[e.NOT_CONNECTED=-1]="NOT_CONNECTED",e[e.MEDIUM=800]="MEDIUM",e[e.HIGH=1500]="HIGH",e))(oe||{}),se=(e=>(e.OFF="off",e.DOTS="dots",e.BAR="bar",e.Auto="auto",e))(se||{}),C=(e=>(e.NATURAL="orderNatural",e.LATENCY_ASC="orderLatency_asc",e.LATENCY_DESC="orderLatency_desc",e.NAME_ASC="orderName_asc",e.NAME_DESC="orderName_desc",e))(C||{}),D=(e=>(e.EN="en-US",e.ZH="zh-CN",e))(D||{}),ne=(e=>(e.Close="close",e.ID="ID",e.Type="type",e.Process="process",e.Host="host",e.Rule="rules",e.Chains="chains",e.DlSpeed="dlSpeed",e.ULSpeed="ulSpeed",e.Download="dl",e.Upload="ul",e.ConnectTime="connectTime",e.Source="source",e.Destination="destination",e))(ne||{});const Ee=Object.values(ne),Zt={...Object.fromEntries(Ee.map(e=>[e,!0])),ID:!1},[At,Vt]=y(p(se.Auto),{name:"proxiesPreviewType",storage:localStorage}),[Jt,Wt]=y(p(C.NATURAL),{name:"proxiesOrderingType",storage:localStorage}),[ae,Qt]=y(p("https://www.gstatic.com/generate_204"),{name:"urlForLatencyTest",storage:localStorage}),[Ke,Xt]=y(p(!1),{name:"autoCloseConns",storage:localStorage}),[Ye,Et]=y(p(!0),{name:"useTwemoji",storage:localStorage}),[et,Kt]=y(p(!1),{name:"autoSwitchTheme",storage:localStorage}),[tt,Yt]=y(p("light"),{name:"favDayTheme",storage:localStorage}),[rt,er]=y(p("night"),{name:"favNightTheme",storage:localStorage}),[ot,tr]=y(p(!0),{name:"renderInTwoColumn",storage:localStorage}),[le,rr]=y(p(!1),{name:"renderProxiesInSamePage",storage:localStorage}),st=()=>ae().startsWith("https"),E=()=>st()?oe:J,ie=e=>{et()&&H(e?rt():tt())},nt=()=>ie(window.matchMedia("(prefers-color-scheme: dark)").matches),at=()=>{nt(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>ie(e.matches))},[K,Y]=p([]),[ee,lt]=p([]),[R,ce]=p({}),[de,it]=p({}),ct=e=>{const t={...de()},l={...R()};e.forEach(o=>{var r;const n=((r=o.history.at(-1))==null?void 0:r.delay)||-1;t[o.name]={udp:o.udp,xudp:o.xudp,type:o.type,now:o.now,name:o.name},l[o.name]=n}),it(t),ce(l)},B=()=>{const e=ue(),t=async()=>{const[{providers:a},{proxies:c}]=await Promise.all([e.get("providers/proxies").json(),e.get("proxies").json()]),d=[...c.GLOBAL.all??[],"GLOBAL"],m=Object.values(c).filter(v=>{var w;return(w=v.all)==null?void 0:w.length}).sort((v,w)=>d.indexOf(v.name)-d.indexOf(w.name)),h=Object.values(a).filter(v=>v.name!=="default"&&v.vehicleType!=="Compatible"),f=[...Object.values(c),...h.flatMap(v=>v.proxies)];Y(m),lt(h),ct(f)};return{proxies:K,proxyProviders:ee,latencyTestByProxyGroupName:async a=>{const c=await e.get(`group/${a}/delay`,{searchParams:{url:ae(),timeout:2e3}}).json();ce({...R(),...c})},latencyMap:R,proxyNodeMap:de,updateProxies:t,setProxyGroupByProxyName:async(a,c)=>{const d=K().slice(),m=d.find(h=>h.name===a.name);Ke()&&e.delete("connections"),await e.put(`proxies/${a.name}`,{body:JSON.stringify({name:c})}),m.now=c,Y(d)},updateProviderByProviderName:async a=>{try{await e.put(`providers/proxies/${a}`)}catch{}await t()},updateAllProvider:async()=>{await Promise.all(ee().map(a=>e.put(`providers/proxies/${a.name}`))),await t()},healthCheckByProviderName:async a=>{await e.get(`providers/proxies/${a}/healthcheck`,{timeout:30*1e3}),await t()}}},[M,dt]=y(p(""),{name:"selectedEndpoint",storage:localStorage}),[ut,or]=y(p([]),{name:"endpointList",storage:localStorage}),ue=()=>{const e=z();return Pe.create({prefixUrl:e==null?void 0:e.url,headers:{Authorization:e!=null&&e.secret?`Bearer ${e.secret}`:""}})},z=()=>ut().find(({id:e})=>e===M()),sr=()=>{var e;return(e=z())==null?void 0:e.secret},nr=()=>{var e;return(e=z())==null?void 0:e.url.replace("http","ws")},j=ue(),ar=()=>{const[e,t]=p([]),[l,o]=p([]),n=async()=>{const[{rules:a},{providers:c}]=await Promise.all([j.get("rules").json(),j.get("providers/rules").json()]);t(Object.values(a)),o(Object.values(c))};return{rules:e,rulesProviders:l,updateRules:n,updateAllRuleProvider:async()=>{await Promise.all(l().map(a=>j.put(`providers/rules/${a.name}`))),await n()},updateRuleProviderByName:async a=>{await j.put(`providers/rules/${a}`),await n()}}},[mt,H]=y(p("halloween"),{name:"theme",storage:localStorage}),pt=x('<div><div class="collapse-title pr-4 text-xl font-medium after:!top-8"></div><div>'),lr=e=>{const{title:t,content:l,onCollapse:o}=e,n=()=>{const a="collapse-open",c="collapse-close";return e.isOpen?a:c},r=()=>{const a="opacity-100",c="opacity-0";return e.isOpen?a:c},i=T(()=>ot()?"lg:grid-cols-3 xl:grid-cols-4":"sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7");return(()=>{const a=pt(),c=a.firstChild,d=c.nextSibling;return c.$$click=()=>o(!e.isOpen),u(c,t),u(d,s(N,{get when(){return e.isOpen},children:l})),k(m=>{const h=L(n(),"collapse collapse-arrow mb-2 select-none border-secondary bg-base-200"),f=L(r(),i(),"collapse-content grid auto-rows-min grid-cols-2 gap-2 transition-opacity duration-1000");return h!==m._v$&&S(a,m._v$=h),f!==m._v$2&&S(d,m._v$2=f),m},{_v$:void 0,_v$2:void 0}),a})()};q(["click"]);const gt=x('<li class="tooltip tooltip-bottom">'),ht=x('<div class="drawer drawer-end w-auto sm:ml-auto"><input id="themes" type="checkbox" class="drawer-toggle"><div class="drawer-content flex items-center"><label for="themes" class="btn btn-circle btn-primary drawer-button btn-sm"></label></div><div class="drawer-side"><label for="themes" class="drawer-overlay"></label><ul class="menu rounded-l-box gap-2 bg-base-300 p-2 shadow">'),ft=x('<li class="btn btn-xs">'),vt=x('<div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal gap-2">'),yt=x('<ul class="navbar rounded-box sticky inset-x-0 top-2 z-50 mx-2 mt-2 flex w-auto items-center justify-center bg-base-300 px-4"><div class="navbar-start gap-4"><div><input id="navs" type="checkbox" class="drawer-toggle"><div class="drawer-content flex items-center"><label for="navs" class="btn btn-circle drawer-button btn-sm"></label></div><div class="drawer-side"><label for="navs" class="drawer-overlay"></label><ul class="menu rounded-r-box min-h-full w-2/5 gap-2 bg-base-300 pt-20 shadow"></ul></div></div><a class="flex whitespace-nowrap text-xl font-bold uppercase" href="https://github.com/metacubex/metacubexd" target="_blank"><span class="mr-2">metacube, </span><div class="transition-transform hover:rotate-90 hover:scale-125">xd</div></a></div><div class="navbar-end"><div class="flex items-center gap-2">'),xt=x("<li>"),wt=({href:e,tooltip:t,children:l})=>(()=>{const o=gt();return F(o,"data-tip",t),u(o,s(re,{class:"rounded-box",href:e,children:l})),o})(),bt=()=>(()=>{const e=ht(),t=e.firstChild,l=t.nextSibling,o=l.firstChild,n=l.nextSibling,r=n.firstChild,i=r.nextSibling;return u(o,s(Ne,{})),u(i,s(O,{each:Qe,children:a=>(()=>{const c=ft();return c.$$click=()=>H(a),F(c,"data-theme",a),u(c,a),c})()})),e})(),$t=()=>{const[e,{locale:t}]=Z(),{proxyProviders:l}=B(),o=T(()=>{const d=[{href:g.Overview,name:e("overview"),icon:s(Se,{})},{href:g.Proxies,name:e("proxies"),icon:s(ke,{})},{href:g.Rules,name:e("rules"),icon:s(Ie,{})},{href:g.Conns,name:e("connections"),icon:s(Me,{})},{href:g.Log,name:e("logs"),icon:s(Te,{})},{href:g.Config,name:e("config"),icon:s(je,{})}];return l().length>0&&!le()&&d.splice(2,0,{href:g.ProxyProvider,name:e("proxyProviders"),icon:s(Fe,{})}),d}),n=_e(),r=te(),[i,a]=p(!1),c=()=>{dt(""),r(g.Setup)};return(()=>{const d=yt(),m=d.firstChild,h=m.firstChild,f=h.firstChild,v=f.nextSibling,w=v.firstChild,ge=v.nextSibling,he=ge.firstChild,fe=he.nextSibling,W=m.nextSibling,G=W.firstChild;return f.addEventListener("change",$=>a($.target.checked)),u(w,s(Ce,{})),u(fe,s(O,{get each(){return o()},children:({href:$,name:U})=>(()=>{const I=xt();return I.$$click=()=>a(!1),u(I,s(re,{href:$,children:U})),I})()})),u(d,s(N,{get when(){return n.pathname!==g.Setup},get children(){const $=vt(),U=$.firstChild;return u(U,s(O,{get each(){return o()},children:({href:I,name:ve,icon:ye})=>s(wt,{href:I,tooltip:ve,children:ye})})),$}}),W),u(G,s(X,{class:"btn-circle btn-sm",onClick:()=>{const $=t();t($===D.EN?D.ZH:D.EN)},get children(){return s(De,{})}}),null),u(G,s(bt,{}),null),u(G,s(X,{class:"btn-circle btn-secondary btn-sm",onClick:c,get children(){return s(Le,{})}}),null),k(()=>S(h,L("drawer w-auto lg:hidden",""))),k(()=>f.checked=i()),d})()};q(["click"]);const Pt=x("<span>"),_t=e=>{const[t]=Z(),{latencyMap:l}=B(),[o,n]=p(""),r=T(()=>l()[e.name]);return A(()=>{n("text-success"),r()>E().HIGH?n("text-error"):r()>E().MEDIUM&&n("text-warning")}),s(N,{get when(){return T(()=>typeof r()=="number")()&&r()!==J.NOT_CONNECTED},get children(){const i=Pt();return u(i,r,null),u(i,()=>t("ms"),null),k(()=>S(i,`whitespace-nowrap text-xs ${o()}`)),i}})},ir=e=>V(e).fromNow(),Ct=(e="")=>{const t=e.toLowerCase();return t.includes("shadowsocks")?"ss":t},Dt=(e="")=>{const t=e.toLowerCase();return!["selector","direct","reject","urltest","loadbalance","fallback","relay"].includes(t)},cr=(e,t,l)=>l===C.NATURAL?e:e.sort((o,n)=>{const r=t[o],i=t[n];switch(l){case C.LATENCY_ASC:return r===-1?1:i===-1?-1:r-i;case C.LATENCY_DESC:return r===-1?1:i===-1?-1:i-r;case C.NAME_ASC:return o.localeCompare(n);case C.NAME_DESC:return n.localeCompare(o);default:return 0}}),Lt=x('<div><div class="truncate text-left"></div><div class="flex items-center justify-between gap-1"><div></div><div class="text-xs">'),dr=e=>{const{proxyName:t,isSelected:l,onClick:o}=e,{proxyNodeMap:n}=B(),r=T(()=>n()[t]),i=()=>{var a,c,d;return Dt((a=r())==null?void 0:a.type)?(c=r())!=null&&c.xudp?"xudp":(d=r())!=null&&d.udp?"udp":null:null};return(()=>{const a=Lt(),c=a.firstChild,d=c.nextSibling,m=d.firstChild,h=m.nextSibling;return a.$$click=()=>o==null?void 0:o(),F(a,"data-tip",t),u(c,t),u(m,()=>{var f;return Ct((f=r())==null?void 0:f.type)},null),u(m,s(N,{get when(){return i()},get children(){return` :: ${i()}`}}),null),u(h,s(_t,{get name(){return e.proxyName}})),k(f=>{const v=L("card card-bordered tooltip-bottom card-compact flex gap-1 border-neutral-focus bg-neutral p-3 text-neutral-content sm:tooltip",l&&"border-primary bg-primary-content text-primary",o&&"cursor-pointer"),w=L("truncate text-xs text-slate-500",l&&"text-primary");return v!==f._v$&&S(a,f._v$=v),w!==f._v$2&&S(m,f._v$2=w),f},{_v$:void 0,_v$2:void 0}),a})()};q(["click"]);const Nt=x('<div><div class="flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-4">'),St=P(()=>_(()=>import("./Setup-2b2b2653.js"),["./Setup-2b2b2653.js","./vendor-a313f5e6.js","./index-4b33cc6b.js"],import.meta.url)),kt=P(()=>_(()=>import("./Overview-58e7d978.js"),["./Overview-58e7d978.js","./vendor-a313f5e6.js","./index-167ace07.js"],import.meta.url)),It=P(()=>_(()=>import("./Connections-b08511a3.js"),["./Connections-b08511a3.js","./vendor-a313f5e6.js","./index-167ace07.js","./index-82f7b786.js"],import.meta.url)),Mt=P(()=>_(()=>import("./Logs-f8eff2b5.js"),["./Logs-f8eff2b5.js","./vendor-a313f5e6.js","./index-167ace07.js","./index-82f7b786.js"],import.meta.url)),Tt=P(()=>_(()=>import("./Proxies-5c1241f3.js"),["./Proxies-5c1241f3.js","./vendor-a313f5e6.js","./ProxyProvider-c1278ea6.js","./global-bddbc16e.js"],import.meta.url)),jt=P(()=>_(()=>import("./ProxyProvider-c1278ea6.js").then(e=>e.c),["./ProxyProvider-c1278ea6.js","./vendor-a313f5e6.js","./global-bddbc16e.js"],import.meta.url)),Ft=P(()=>_(()=>import("./Rules-05ede7d4.js"),["./Rules-05ede7d4.js","./vendor-a313f5e6.js","./global-bddbc16e.js"],import.meta.url)),Bt=P(()=>_(()=>import("./Config-7d475629.js"),["./Config-7d475629.js","./vendor-a313f5e6.js","./index-4b33cc6b.js"],import.meta.url)),zt=()=>{const e=te();return at(),A(()=>{M()&&z()&&B().updateProxies()}),Be(()=>{M()||e(g.Setup)}),(()=>{const t=Nt(),l=t.firstChild;return u(t,s($t,{}),l),u(l,s(Ge,{get children(){return[s(N,{get when(){return M()},get children(){return[s(b,{get path(){return g.Overview},component:kt}),s(b,{get path(){return g.Proxies},component:Tt}),s(N,{get when(){return!le()},get children(){return s(b,{get path(){return g.ProxyProvider},component:jt})}}),s(b,{get path(){return g.Rules},component:Ft}),s(b,{get path(){return g.Conns},component:It}),s(b,{get path(){return g.Log},component:Mt}),s(b,{get path(){return g.Config},component:Bt}),s(b,{path:"*",get element(){return s(ze,{get href(){return g.Overview}})}})]}}),s(b,{get path(){return M()?g.Setup:"*"},component:St})]}})),k(o=>{const n=L("relative flex h-screen flex-col subpixel-antialiased p-safe",Ye()?"font-twemoji":"font-no-twemoji"),r=mt();return n!==o._v$&&S(t,o._v$=n),r!==o._v$2&&F(t,"data-theme",o._v$2=r),o},{_v$:void 0,_v$2:void 0}),t})()},Gt={add:"Add",overview:"Overview",proxies:"Proxies",rules:"Rules",connections:"Connections",logs:"Logs",config:"Config",upload:"Upload",download:"Download",uploadTotal:"Upload Total",downloadTotal:"Download Total",activeConnections:"Active Connections",memoryUsage:"Memory Usage",traffic:"Traffic",memory:"Memory",down:"Down",up:"Up",proxyProviders:"Proxy Providers",ruleProviders:"Rule Providers",search:"Search",ID:"ID",type:"Type",name:"Name",process:"Process",host:"Host",chains:"Chains",connectTime:"Time",dlSpeed:"DL Speed",ulSpeed:"UL Speed",dl:"DL",ul:"UL",source:"Source",destination:"Destination",close:"Close",reset:"Reset",dnsQuery:"DNS Query",dots:"Dots",bar:"Bar",auto:"Auto",off:"Off",proxiesPreviewType:"Proxies preview type",urlForLatencyTest:"Url for latency test",autoCloseConns:"Automatically close all connections",useTwemoji:"Use Twemoji Mozilla Font",autoSwitchTheme:"Automatically switch theme",favDayTheme:"Favorite light theme",favNightTheme:"Favorite dark theme",renderInTwoColumns:"Render Proxies in two columns",updateGEODatabases:"Update GEO Databases",restartCore:"Restart Core",upgradeCore:"Upgrade Core",proxiesSorting:"Proxies Sorting",orderNatural:"Original order in config file",orderLatency_asc:"By latency from low to high",orderLatency_desc:"By latency from high to low",orderName_asc:"By name alphabetically (A-Z)",orderName_desc:"By name alphabetically (Z-A)",ms:"ms",updated:"Updated",renderProxiesInSamePage:"Render proxies and proxy provider in same page"},Ut={add:"添加",overview:"概览",proxies:"代理",rules:"规则",connections:"连接",logs:"日志",config:"配置",upload:"上传",download:"下载",uploadTotal:"上传总量",downloadTotal:"下载总量",activeConnections:"活动连接",memoryUsage:"内存使用情况",traffic:"流量",memory:"内存",down:"下载",up:"上传",proxyProviders:"代理提供者",ruleProviders:"规则提供者",search:"搜索",ID:"ID",type:"类型",name:"名字",process:"进程",host:"主机",chains:"链路",connectTime:"连接时间",dlSpeed:"下载速度",ulSpeed:"上传速度",dl:"下载量",ul:"上传量",source:"源地址",destination:"目标地址",close:"关闭",reset:"重置",dnsQuery:"DNS 查询",dots:"点阵",bar:"条形",auto:"自适应",off:"关闭",proxiesPreviewType:"节点组预览样式",urlForLatencyTest:"测速链接",autoCloseConns:"切换代理时自动断开全部连接",useTwemoji:"使用 Twemoji Mozilla 字体",autoSwitchTheme:"自动切换主题",favDayTheme:"浅色主题偏好",favNightTheme:"深色主题偏好",renderInTwoColumns:"节点双列渲染",updateGEODatabases:"更新 GEO 数据库文件",restartCore:"重启核心",upgradeCore:"更新核心",proxiesSorting:"节点排序",orderNatural:"原配置文件中的排序",orderLatency_asc:"按延迟从低到高",orderLatency_desc:"按延迟从高到低",orderName_asc:"按名称字母排序 (A-Z)",orderName_desc:"按名称字母排序 (Z-A)",ms:"毫秒",updated:"更新于",renderProxiesInSamePage:"将代理和代理提供者显示在同一页"},me={[D.EN]:Gt,[D.ZH]:Ut},pe=()=>{const[e,t]=y(p(Reflect.has(me,navigator.language)?navigator.language:D.EN),{name:"lang",storage:localStorage});return{lang:e,setLang:t}},Ot=e=>{const{setLang:t}=pe(),[,{locale:l}]=Z();return A(()=>{t(l()),V.locale(l())}),e.children},Rt=e=>{const{lang:t}=pe(),l=Ue(me,t());return s(Oe.Provider,{value:l,get children(){return s(Ot,{get children(){return e.children}})}})};V.extend(Re);He(()=>s(Rt,{get children(){return s(qe,{get source(){return Ze()},get children(){return s(zt,{})}})}}),document.getElementById("root"));export{Yt as A,X as B,Xe as C,qt as D,Qe as E,tt as F,er as G,rt as H,Vt as I,C as J,Wt as K,_t as L,Xt as M,Et as N,Qt as O,dr as P,Ke as Q,Ye as R,ae as S,M as a,dt as b,sr as c,Ee as d,ut as e,Zt as f,ne as g,ir as h,B as i,cr as j,lr as k,ot as l,At as m,se as n,E as o,Jt as p,ar as q,le as r,or as s,tr as t,ue as u,rr as v,nr as w,Kt as x,nt as y,et as z};
