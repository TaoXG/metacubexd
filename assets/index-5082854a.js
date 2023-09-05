import{b as he,m as f,c as u,k as fe,d as O,a as M,i as p,e as n,S as L,f as S,t as N,g as _,h as x,u as H,j as ve,I as ye,A as Y,F as R,s as I,l as xe,n as we,o as be,p as $e,q as Pe,r as De,v as _e,w as Ce,x as V,y as J,z as Le,B as Se,R as b,N as Ne,C as Te,D as $,E as ke,G as Me,H as je,J as ze,K as Ie,L as Fe}from"./vendor-b4827f97.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(a){if(a.ep)return;a.ep=!0;const t=i(a);fetch(a.href,t)}})();const Be="modulepreload",Ge=function(e,r){return new URL(e,r).href},X={},P=function(r,i,s){if(!i||i.length===0)return r();const a=document.getElementsByTagName("link");return Promise.all(i.map(t=>{if(t=Ge(t,s),t in X)return;X[t]=!0;const l=t.endsWith(".css"),o=l?'[rel="stylesheet"]':"";if(!!s)for(let m=a.length-1;m>=0;m--){const h=a[m];if(h.href===t&&(!l||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${o}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":Be,l||(d.as="script",d.crossOrigin=""),d.href=t,document.head.appendChild(d),l)return new Promise((m,h)=>{d.addEventListener("load",m),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>r()).catch(t=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=t,window.dispatchEvent(l),!l.defaultPrevented)throw t})},Re=["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter"];var g=(e=>(e.Overview="/overview",e.Proxies="/proxies",e.ProxyProvider="/proxyprovider",e.Rules="/rules",e.Conns="/conns",e.Log="/logs",e.Config="/config",e.Setup="/setup",e))(g||{});const Ue=10,It={title:{align:"center",style:{color:"gray",fontSize:"8px"}},chart:{toolbar:{show:!1},zoom:{enabled:!1},animations:{easing:"linear"}},noData:{text:"Loading..."},legend:{showForSingleSeries:!0,fontSize:"8px",labels:{colors:"gray"},itemMargin:{horizontal:32}},dataLabels:{enabled:!1},grid:{yaxis:{lines:{show:!1}}},stroke:{curve:"smooth"},tooltip:{enabled:!1},xaxis:{range:Ue,labels:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{style:{colors:"gray",fontSize:"8px"},formatter:e=>he(e).toString()}}};var Z=(e=>(e[e.NOT_CONNECTED=-1]="NOT_CONNECTED",e[e.MEDIUM=200]="MEDIUM",e[e.HIGH=500]="HIGH",e))(Z||{}),ee=(e=>(e[e.NOT_CONNECTED=-1]="NOT_CONNECTED",e[e.MEDIUM=800]="MEDIUM",e[e.HIGH=1500]="HIGH",e))(ee||{}),te=(e=>(e.OFF="off",e.DOTS="dots",e.BAR="bar",e.Auto="auto",e))(te||{}),D=(e=>(e.NATURAL="orderNatural",e.LATENCY_ASC="orderLatency_asc",e.LATENCY_DESC="orderLatency_desc",e.NAME_ASC="orderName_asc",e.NAME_DESC="orderName_desc",e))(D||{}),z=(e=>(e.EN="en-US",e.ZH="zh-CN",e))(z||{}),re=(e=>(e.Close="close",e.ID="ID",e.Type="type",e.Process="process",e.Host="host",e.Rule="rules",e.Chains="chains",e.DlSpeed="dlSpeed",e.ULSpeed="ulSpeed",e.Download="dl",e.Upload="ul",e.ConnectTime="connectTime",e.Source="source",e.Destination="destination",e))(re||{});const qe=Object.values(re),Ft={...Object.fromEntries(qe.map(e=>[e,!0])),ID:!1};var oe=(e=>(e.XS="xs",e.SM="sm",e.MD="md",e.LG="lg",e))(oe||{});const[Bt,Gt]=f(u(te.Auto),{name:"proxiesPreviewType",storage:localStorage}),[Rt,Ut]=f(u(D.NATURAL),{name:"proxiesOrderingType",storage:localStorage}),[se,qt]=f(u("https://www.gstatic.com/generate_204"),{name:"urlForLatencyTest",storage:localStorage}),[Oe,Ot]=f(u(!1),{name:"autoCloseConns",storage:localStorage}),[He,Ht]=f(u(!0),{name:"useTwemoji",storage:localStorage}),[Ve,Vt]=f(u(!1),{name:"autoSwitchTheme",storage:localStorage}),[Je,Jt]=f(u("light"),{name:"favDayTheme",storage:localStorage}),[Ze,Zt]=f(u("night"),{name:"favNightTheme",storage:localStorage}),[Ae,At]=f(u(!0),{name:"renderInTwoColumn",storage:localStorage}),[ae,Xt]=f(u(!1),{name:"renderProxiesInSamePage",storage:localStorage}),[Wt,Qt]=f(u(oe.XS),{name:"tableSize",storage:localStorage}),[Xe,Kt]=f(u(1e4),{name:"requestTimeoutDuration",storage:localStorage}),We=()=>se().startsWith("https"),W=()=>We()?ee:Z,ne=e=>{Ve()&&q(e?Ze():Je())},Qe=()=>ne(window.matchMedia("(prefers-color-scheme: dark)").matches),Ke=()=>{Qe(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>ne(e.matches))},[Q,K]=u([]),[E,Ee]=u([]),[U,ie]=u({}),[le,Ye]=u({}),et=e=>{const r={...le()},i={...U()};e.forEach(s=>{var t;const a=((t=s.history.at(-1))==null?void 0:t.delay)||-1;r[s.name]={udp:s.udp,xudp:s.xudp,type:s.type,now:s.now,name:s.name},i[s.name]=a}),Ye(r),ie(i)},F=()=>{const e=ce(),r=async()=>{const[{providers:o},{proxies:c}]=await Promise.all([e.get("providers/proxies").json(),e.get("proxies").json()]),d=[...c.GLOBAL.all??[],"GLOBAL"],m=Object.values(c).filter(y=>{var w;return(w=y.all)==null?void 0:w.length}).sort((y,w)=>d.indexOf(y.name)-d.indexOf(w.name)),h=Object.values(o).filter(y=>y.name!=="default"&&y.vehicleType!=="Compatible"),v=[...Object.values(c),...h.flatMap(y=>y.proxies)];K(m),Ee(h),et(v)};return{proxies:Q,proxyProviders:E,latencyTestByProxyGroupName:async o=>{const c=await e.get(`group/${o}/delay`,{searchParams:{url:se()}}).json();ie({...U(),...c})},latencyMap:U,proxyNodeMap:le,updateProxies:r,setProxyGroupByProxyName:async(o,c)=>{const d=Q().slice(),m=d.find(h=>h.name===o.name);Oe()&&e.delete("connections"),await e.put(`proxies/${o.name}`,{body:JSON.stringify({name:c})}),m.now=c,K(d)},updateProviderByProviderName:async o=>{try{await e.put(`providers/proxies/${o}`)}catch{}await r()},updateAllProvider:async()=>{await Promise.all(E().map(o=>e.put(`providers/proxies/${o.name}`))),await r()},healthCheckByProviderName:async o=>{await e.get(`providers/proxies/${o}/healthcheck`),await r()}}},[k,Et]=f(u(""),{name:"selectedEndpoint",storage:localStorage}),[tt,Yt]=f(u([]),{name:"endpointList",storage:localStorage}),ce=()=>{const e=B();return fe.create({prefixUrl:e==null?void 0:e.url,timeout:Xe(),headers:{Authorization:e!=null&&e.secret?`Bearer ${e.secret}`:""}})},B=()=>tt().find(({id:e})=>e===k()),er=()=>{var e;return(e=B())==null?void 0:e.secret},tr=()=>{var e;return(e=B())==null?void 0:e.url.replace("http","ws")},j=ce(),rr=()=>{const[e,r]=u([]),[i,s]=u([]),a=async()=>{const[{rules:o},{providers:c}]=await Promise.all([j.get("rules").json(),j.get("providers/rules").json()]);r(Object.values(o)),s(Object.values(c))};return{rules:e,rulesProviders:i,updateRules:a,updateAllRuleProvider:async()=>{await Promise.all(i().map(o=>j.put(`providers/rules/${o.name}`))),await a()},updateRuleProviderByName:async o=>{await j.put(`providers/rules/${o}`),await a()}}},[rt,q]=f(u("halloween"),{name:"theme",storage:localStorage}),ot=x('<div><div class="collapse-title pr-4 text-xl font-medium after:!top-8"></div><div>'),or=e=>{const{title:r,content:i,onCollapse:s}=e,a=()=>{const o="collapse-open",c="collapse-close";return e.isOpen?o:c},t=()=>{const o="opacity-100",c="opacity-0";return e.isOpen?o:c},l=M(()=>Ae()?"lg:grid-cols-3 xl:grid-cols-4":"sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7");return(()=>{const o=ot(),c=o.firstChild,d=c.nextSibling;return c.$$click=()=>s(!e.isOpen),p(c,r),p(d,n(L,{get when(){return e.isOpen},children:i})),S(m=>{const h=N(a(),"collapse collapse-arrow mb-2 select-none border-secondary bg-base-200"),v=N(t(),l(),"collapse-content grid auto-rows-min grid-cols-2 gap-2 transition-opacity duration-1000");return h!==m._v$&&_(o,m._v$=h),v!==m._v$2&&_(d,m._v$2=v),m},{_v$:void 0,_v$2:void 0}),o})()};O(["click"]);const st=x('<li class="tooltip tooltip-bottom">'),at=x('<div class="drawer drawer-end w-auto sm:ml-auto"><input id="themes" type="checkbox" class="drawer-toggle"><div class="drawer-content flex items-center"><label for="themes" class="btn btn-circle btn-primary drawer-button btn-sm"></label></div><div class="drawer-side"><label for="themes" class="drawer-overlay"></label><ul class="menu rounded-l-box gap-2 bg-base-300 p-2 shadow">'),nt=x('<li class="btn btn-xs">'),it=x('<a class="flex gap-2 whitespace-nowrap text-xl font-bold uppercase" href="https://github.com/metacubex/metacubexd" target="_blank"><span>metacube, </span><div class="transition-transform hover:rotate-90 hover:scale-125">xd'),lt=x('<div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal menu-lg gap-2 p-0">'),ct=x('<ul class="navbar rounded-box sticky inset-x-0 top-2 z-50 mx-2 mt-2 flex w-auto items-center justify-center bg-base-300 px-4"><div class="navbar-start gap-4"><div><input id="navs" type="checkbox" class="drawer-toggle"><div class="drawer-content flex items-center"><label for="navs" class="btn btn-circle drawer-button btn-sm"></label></div><div class="drawer-side"><label for="navs" class="drawer-overlay"></label><ul class="menu rounded-r-box min-h-full w-2/5 gap-2 bg-base-300 pt-20 shadow"></ul></div></div></div><div class="navbar-end"><div class="flex items-center gap-2">'),dt=x("<li>"),ut=({href:e,tooltip:r,children:i})=>(()=>{const s=st();return I(s,"data-tip",r),p(s,n(Y,{class:"rounded-box",href:e,children:i})),s})(),mt=()=>(()=>{const e=at(),r=e.firstChild,i=r.nextSibling,s=i.firstChild,a=i.nextSibling,t=a.firstChild,l=t.nextSibling;return p(s,n(xe,{})),p(l,n(R,{each:Re,children:o=>(()=>{const c=nt();return c.$$click=()=>q(o),I(c,"data-theme",o),p(c,o),c})()})),e})(),pt=()=>it(),gt=()=>{const[e]=H(),{proxyProviders:r}=F(),i=M(()=>{const l=[{href:g.Overview,name:e("overview"),icon:n(we,{})},{href:g.Proxies,name:e("proxies"),icon:n(be,{})},{href:g.Rules,name:e("rules"),icon:n($e,{})},{href:g.Conns,name:e("connections"),icon:n(Pe,{})},{href:g.Log,name:e("logs"),icon:n(De,{})},{href:g.Config,name:e("config"),icon:n(_e,{})}];return r().length>0&&!ae()&&l.splice(2,0,{href:g.ProxyProvider,name:e("proxyProviders"),icon:n(Ce,{})}),l}),s=ve(),[a,t]=u(!1);return(()=>{const l=ct(),o=l.firstChild,c=o.firstChild,d=c.firstChild,m=d.nextSibling,h=m.firstChild,v=m.nextSibling,y=v.firstChild,w=y.nextSibling,A=o.nextSibling,me=A.firstChild;return d.addEventListener("change",C=>t(C.target.checked)),p(h,n(ye,{})),p(w,n(R,{get each(){return i()},children:({href:C,name:G})=>(()=>{const T=dt();return T.$$click=()=>t(!1),p(T,n(Y,{href:C,children:G})),T})()})),p(o,n(pt,{}),null),p(l,n(L,{get when(){return s.pathname!==g.Setup},get children(){const C=lt(),G=C.firstChild;return p(G,n(R,{get each(){return i()},children:({href:T,name:pe,icon:ge})=>n(ut,{href:T,tooltip:pe,children:ge})})),C}}),A),p(me,n(mt,{})),S(()=>_(c,N("drawer w-auto lg:hidden",""))),S(()=>d.checked=a()),l})()};O(["click"]);const ht=x("<span>"),ft=e=>{const[r]=H(),{latencyMap:i}=F(),[s,a]=u(""),t=M(()=>i()[e.name]);return V(()=>{a("text-success"),t()>W().HIGH?a("text-error"):t()>W().MEDIUM&&a("text-warning")}),n(L,{get when(){return M(()=>typeof t()=="number")()&&t()!==Z.NOT_CONNECTED},get children(){const l=ht();return p(l,t,null),p(l,()=>r("ms"),null),S(()=>_(l,`whitespace-nowrap text-xs ${s()}`)),l}})},sr=e=>J(e).fromNow(),vt=(e="")=>{const r=e.toLowerCase();return r.includes("shadowsocks")?"ss":r},yt=(e="")=>{const r=e.toLowerCase();return!["selector","direct","reject","urltest","loadbalance","fallback","relay"].includes(r)},ar=(e,r,i)=>i===D.NATURAL?e:e.sort((s,a)=>{const t=r[s],l=r[a];switch(i){case D.LATENCY_ASC:return t===-1?1:l===-1?-1:t-l;case D.LATENCY_DESC:return t===-1?1:l===-1?-1:l-t;case D.NAME_ASC:return s.localeCompare(a);case D.NAME_DESC:return a.localeCompare(s);default:return 0}}),xt=x('<div><div class="truncate text-left"></div><div class="flex items-center justify-between gap-1"><div></div><div class="text-xs">'),nr=e=>{const{proxyName:r,isSelected:i,onClick:s}=e,{proxyNodeMap:a}=F(),t=M(()=>a()[r]),l=()=>{var o,c,d;return yt((o=t())==null?void 0:o.type)?(c=t())!=null&&c.xudp?"xudp":(d=t())!=null&&d.udp?"udp":null:null};return(()=>{const o=xt(),c=o.firstChild,d=c.nextSibling,m=d.firstChild,h=m.nextSibling;return o.$$click=()=>s==null?void 0:s(),I(o,"data-tip",r),p(c,r),p(m,()=>{var v;return vt((v=t())==null?void 0:v.type)},null),p(m,n(L,{get when(){return l()},get children(){return` :: ${l()}`}}),null),p(h,n(ft,{get name(){return e.proxyName}})),S(v=>{const y=N("card card-bordered tooltip-bottom card-compact flex gap-1 border-neutral-focus bg-neutral p-3 text-neutral-content sm:tooltip",i&&"border-primary bg-primary-content text-primary",s&&"cursor-pointer"),w=N("truncate text-xs text-slate-500",i&&"text-primary");return y!==v._v$&&_(o,v._v$=y),w!==v._v$2&&_(m,v._v$2=w),v},{_v$:void 0,_v$2:void 0}),o})()};O(["click"]);const wt=x('<div><div class="flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-4">'),bt=$(()=>P(()=>import("./Setup-d31eac61.js"),["./Setup-d31eac61.js","./vendor-b4827f97.js","./index-b76c2330.js","./Button-b7595b70.js"],import.meta.url)),$t=$(()=>P(()=>import("./Overview-d4d2a49f.js"),["./Overview-d4d2a49f.js","./vendor-b4827f97.js","./index-6fc17acd.js"],import.meta.url)),Pt=$(()=>P(()=>import("./Connections-3fc1ee7e.js"),["./Connections-3fc1ee7e.js","./vendor-b4827f97.js","./index-6fc17acd.js","./index-bdef43b7.js","./Button-b7595b70.js"],import.meta.url)),Dt=$(()=>P(()=>import("./Logs-14fdb7a7.js"),["./Logs-14fdb7a7.js","./vendor-b4827f97.js","./index-6fc17acd.js","./index-bdef43b7.js"],import.meta.url)),_t=$(()=>P(()=>import("./Proxies-004467df.js"),["./Proxies-004467df.js","./vendor-b4827f97.js","./Button-b7595b70.js","./ProxyProvider-df29427f.js","./global-5fccb555.js"],import.meta.url)),Ct=$(()=>P(()=>import("./ProxyProvider-df29427f.js").then(e=>e.c),["./ProxyProvider-df29427f.js","./vendor-b4827f97.js","./Button-b7595b70.js","./global-5fccb555.js"],import.meta.url)),Lt=$(()=>P(()=>import("./Rules-7e247af4.js"),["./Rules-7e247af4.js","./vendor-b4827f97.js","./Button-b7595b70.js","./global-5fccb555.js"],import.meta.url)),St=$(()=>P(()=>import("./Config-f18a325b.js"),["./Config-f18a325b.js","./vendor-b4827f97.js","./index-b76c2330.js","./Button-b7595b70.js"],import.meta.url)),Nt=()=>{const e=Le();return Ke(),V(()=>{k()&&B()&&F().updateProxies()}),Se(()=>{k()||e(g.Setup)}),(()=>{const r=wt(),i=r.firstChild;return p(r,n(gt,{}),i),p(i,n(Te,{get children(){return[n(L,{get when(){return k()},get children(){return[n(b,{get path(){return g.Overview},component:$t}),n(b,{get path(){return g.Proxies},component:_t}),n(L,{get when(){return!ae()},get children(){return n(b,{get path(){return g.ProxyProvider},component:Ct})}}),n(b,{get path(){return g.Rules},component:Lt}),n(b,{get path(){return g.Conns},component:Pt}),n(b,{get path(){return g.Log},component:Dt}),n(b,{get path(){return g.Config},component:St}),n(b,{path:"*",get element(){return n(Ne,{get href(){return g.Overview}})}})]}}),n(b,{get path(){return k()?g.Setup:"*"},component:bt})]}})),S(s=>{const a=N("relative flex h-screen flex-col subpixel-antialiased p-safe",He()?"font-twemoji":"font-no-twemoji"),t=rt();return a!==s._v$&&_(r,s._v$=a),t!==s._v$2&&I(r,"data-theme",s._v$2=t),s},{_v$:void 0,_v$2:void 0}),r})()},Tt={add:"Add",overview:"Overview",proxies:"Proxies",rules:"Rules",connections:"Connections",logs:"Logs",config:"Config",upload:"Upload",download:"Download",uploadTotal:"Upload Total",downloadTotal:"Download Total",activeConnections:"Active Connections",memoryUsage:"Memory Usage",traffic:"Traffic",memory:"Memory",down:"Down",up:"Up",proxyProviders:"Proxy Providers",ruleProviders:"Rule Providers",search:"Search",ID:"ID",type:"Type",name:"Name",process:"Process",host:"Host",chains:"Chains",connectTime:"Time",dlSpeed:"DL Speed",ulSpeed:"UL Speed",dl:"DL",ul:"UL",source:"Source",destination:"Destination",close:"Close",reset:"Reset",dnsQuery:"DNS Query",dots:"Dots",bar:"Bar",auto:"Auto",off:"Off",proxiesPreviewType:"Proxies preview type",urlForLatencyTest:"URL for latency test",autoCloseConns:"Automatically close all connections",useTwemoji:"Use Twemoji Mozilla Font",autoSwitchTheme:"Automatically switch theme",favDayTheme:"Favorite light theme",favNightTheme:"Favorite dark theme",renderInTwoColumns:"Render Proxies in two columns",updateGEODatabases:"Update GEO Databases",restartCore:"Restart Core",upgradeCore:"Upgrade Core",proxiesSorting:"Proxies Sorting",orderNatural:"Original order in config file",orderLatency_asc:"By latency from low to high",orderLatency_desc:"By latency from high to low",orderName_asc:"By name alphabetically (A-Z)",orderName_desc:"By name alphabetically (Z-A)",ms:"ms",updated:"Updated",renderProxiesInSamePage:"Render proxies and proxy provider in same page",tableSize:"Table size",xs:"Extra small size",sm:"Small size",md:"Normal size",lg:"Large size",switchEndpoint:"Switch Endpoint",switchLanguage:"Switch Language",requestTimeoutDuration:"Request Timeout Duration"},kt={add:"添加",overview:"概览",proxies:"代理",rules:"规则",connections:"连接",logs:"日志",config:"配置",upload:"上传",download:"下载",uploadTotal:"上传总量",downloadTotal:"下载总量",activeConnections:"活动连接",memoryUsage:"内存使用情况",traffic:"流量",memory:"内存",down:"下载",up:"上传",proxyProviders:"代理提供者",ruleProviders:"规则提供者",search:"搜索",ID:"ID",type:"类型",name:"名字",process:"进程",host:"主机",chains:"链路",connectTime:"连接时间",dlSpeed:"下载速度",ulSpeed:"上传速度",dl:"下载量",ul:"上传量",source:"源地址",destination:"目标地址",close:"关闭",reset:"重置",dnsQuery:"DNS 查询",dots:"点阵",bar:"条形",auto:"自适应",off:"关闭",proxiesPreviewType:"节点组预览样式",urlForLatencyTest:"测速链接",autoCloseConns:"切换代理时自动断开全部连接",useTwemoji:"使用 Twemoji Mozilla 字体",autoSwitchTheme:"自动切换主题",favDayTheme:"浅色主题偏好",favNightTheme:"深色主题偏好",renderInTwoColumns:"节点双列渲染",updateGEODatabases:"更新 GEO 数据库文件",restartCore:"重启核心",upgradeCore:"更新核心",proxiesSorting:"节点排序",orderNatural:"原配置文件中的排序",orderLatency_asc:"按延迟从低到高",orderLatency_desc:"按延迟从高到低",orderName_asc:"按名称字母排序 (A-Z)",orderName_desc:"按名称字母排序 (Z-A)",ms:"毫秒",updated:"更新于",renderProxiesInSamePage:"将代理和代理提供者显示在同一页",tableSize:"表格大小",xs:"超小尺寸",sm:"小尺寸",md:"正常尺寸",lg:"超大尺寸",switchEndpoint:"切换后端",switchLanguage:"切换语言",requestTimeoutDuration:"请求超时时间"},de={[z.EN]:Tt,[z.ZH]:kt},ue=()=>{const[e,r]=f(u(Reflect.has(de,navigator.language)?navigator.language:z.EN),{name:"lang",storage:localStorage});return{lang:e,setLang:r}},Mt=e=>{const{setLang:r}=ue(),[,{locale:i}]=H();return V(()=>{r(i()),J.locale(i())}),e.children},jt=e=>{const{lang:r}=ue(),i=ke(de,r());return n(Me.Provider,{value:i,get children(){return n(Mt,{get children(){return e.children}})}})};J.extend(je);ze(()=>n(jt,{get children(){return n(Ie,{get source(){return Fe()},get children(){return n(Nt,{})}})}}),document.getElementById("root"));export{Xe as A,Oe as B,Ue as C,It as D,At as E,Xt as F,Vt as G,Qe as H,Ve as I,Jt as J,Re as K,ft as L,Je as M,Zt as N,Ze as O,nr as P,Ht as Q,Gt as R,Ut as S,oe as T,D as U,Qt as V,z as W,He as X,g as Y,k as a,Et as b,er as c,qe as d,tt as e,Ft as f,re as g,sr as h,F as i,ar as j,or as k,Ae as l,Bt as m,te as n,W as o,Rt as p,rr as q,ae as r,Yt as s,Wt as t,ce as u,qt as v,tr as w,Kt as x,Ot as y,se as z};
