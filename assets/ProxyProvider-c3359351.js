import{h as N,i as l,b as d,Y as b,E as B,u as E,e as L,c as a,af as C,ae as T,S as F}from"./vendor-38af4582.js";import{f as M,B as $,g as U,p as Y,j as D,h as j,F as A,i as f}from"./index-7dbd82f9.js";import{P as O,a as I}from"./ProxyPreviewDots-f2b942c6.js";const R=d('<progress class="progress" max="100">'),z=d('<div class="text-sm text-slate-500"> / <!> ( <!>% )'),G=d('<div class="text-sm text-slate-500">Expire: <!> '),H=s=>{const i=b(s.Total,{units:"iec"}),t=b(s.Download+s.Upload,{units:"iec"}),c=((s.Download+s.Upload)/s.Total*100).toFixed(2);return{total:i,used:t,percentage:c,expireStr:()=>s.Expire===0?"Null":B(s.Expire*1e3).format("YYYY-MM-DD")}},q=s=>{if(!s.subscriptionInfo)return;const i=H(s.subscriptionInfo);return[(()=>{const t=R();return N(()=>t.value=i.percentage),t})(),(()=>{const t=z(),c=t.firstChild,p=c.nextSibling,g=p.nextSibling,m=g.nextSibling;return m.nextSibling,l(t,()=>`${i.used}`,c),l(t,()=>`${i.total}`,p),l(t,()=>i.percentage,m),t})(),(()=>{const t=G(),c=t.firstChild,p=c.nextSibling;return p.nextSibling,l(t,()=>i.expireStr(),p),t})()]},J=d('<div class="flex flex-col gap-2"><h1 class="flex h-8 items-center pb-2 text-lg font-semibold">'),K=d('<div class="mr-8 flex items-center justify-between"><span></span><div>'),Q=d('<div class="text-sm text-slate-500"> :: Updated '),Z=()=>{const[s]=E(),{proxyProviders:i,updateProviderByProviderName:t,updateAllProvider:c,healthCheckByProviderName:p,latencyMap:g}=M(),[m,S]=L({}),v=async(n,o)=>{const e=f(n);e.classList.add("animate-pulse"),n.stopPropagation(),await p(o),e.classList.remove("animate-pulse")},y=async(n,o)=>{const e=f(n);e.classList.add("animate-spin"),n.stopPropagation(),await t(o),e.classList.remove("animate-spin")},w=async n=>{const o=f(n);o.classList.add("animate-spin"),n.stopPropagation(),await c(),o.classList.remove("animate-spin")};return(()=>{const n=J(),o=n.firstChild;return l(o,()=>s("proxyProviders"),null),l(o,a($,{class:"btn-circle btn-ghost btn-sm ml-2",onClick:e=>w(e),get children(){return a(C,{})}}),null),l(n,a(A,{get subChild(){return i().map(e=>{const h=U(e.proxies.map(r=>r.name)??[],g(),Y()),P=[(()=>{const r=K(),u=r.firstChild,_=u.nextSibling;return l(u,()=>e.name),l(_,a($,{class:"btn btn-circle btn-sm mr-2",onClick:x=>y(x,e.name),get children(){return a(C,{})}}),null),l(_,a($,{class:"btn btn-circle btn-sm",onClick:x=>v(x,e.name),get children(){return a(T,{})}}),null),r})(),a(q,{get subscriptionInfo(){return e.subscriptionInfo}}),(()=>{const r=Q(),u=r.firstChild;return l(r,()=>e.vehicleType,u),l(r,()=>D(e.updatedAt),null),r})(),a(F,{get when(){return!m()[`provider-${e.name}`]},get children(){return a(O,{proxyNameList:h})}})],k=a(I,{proxyNames:h});return a(j,{get isOpen(){return m()[`provider-${e.name}`]},title:P,content:k,onCollapse:r=>S({...m(),[`provider-${e.name}`]:r})})})}}),null),n})()};export{Z as default};
