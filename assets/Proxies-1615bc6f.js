import{u as b,f as _,i as r,c as n,af as v,S as m,b as o}from"./vendor-a04c6957.js";import{i as y,j as k,p as B,B as N,k as S,F as T,r as G,l as I}from"./index-9a70db9d.js";import{P as M,a as O,b as j}from"./ProxyProvider-f1deac41.js";const F=o('<div class="flex flex-col gap-2"><h1 class="flex h-8 items-center pb-2 text-lg font-semibold">'),A=o('<div class="divider">'),L=o('<div class="mr-10 flex items-center justify-between"><span>'),W=o('<div class="text-sm text-slate-500"> '),E=()=>{const[u]=b(),{proxies:p,setProxyGroupByProxyName:g,latencyTestByProxyGroupName:C,latencyMap:P}=y(),[i,f]=_({}),h=async(s,l)=>{g(s,l)},x=(s,l)=>{I(s,C.bind(null,l),"animate-pulse")};return[(()=>{const s=F(),l=s.firstChild;return r(l,()=>u("proxies")),r(s,n(T,{get subChild(){return p().map(e=>{const d=k(e.all??[],P(),B()),$=[(()=>{const t=L(),c=t.firstChild;return r(c,()=>e.name),r(t,n(N,{class:"btn-circle btn-sm",onClick:a=>x(a,e.name),get children(){return n(v,{})}}),null),t})(),(()=>{const t=W(),c=t.firstChild;return r(t,()=>e.type,c),r(t,()=>{var a;return((a=e.now)==null?void 0:a.length)>0&&` :: ${e.now}`},null),t})(),n(m,{get when(){return!i()[`group-${e.name}`]},get children(){return n(M,{proxyNameList:d,get now(){return e.now}})}})],w=n(O,{proxyNames:d,get now(){return e.now},onClick:t=>{h(e,t)}});return n(S,{get isOpen(){return i()[`group-${e.name}`]},title:$,content:w,onCollapse:t=>f({...i(),[`group-${e.name}`]:t})})})}}),null),s})(),n(m,{get when(){return G()},get children(){return[A(),n(j,{})]}})]};export{E as default};