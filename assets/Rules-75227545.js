import{f as $,v as q,n as W,T as D,i as t,c as l,F as G,q as H,r as J,t as y,S as f,al as M,ak as K,b as m,p as L}from"./vendor-5de92a4b.js";import{z as Q,A as V,E as B,B as F,j as X}from"./index-ae299b11.js";import{F as Y}from"./ForTwoColumns-66388065.js";import{u as Z}from"./global-bd28eeed.js";const ee=()=>{const[a,b]=$([]),[p,R]=$([]),h=async()=>{const[{rules:o},{providers:x}]=await Promise.all([Q(),V()]);b(Object.values(o)),R(Object.values(x))};return{rules:a,ruleProviders:p,updateRules:h,updateAllRuleProvider:async()=>{await Promise.all(p().map(o=>B(o.name))),await h()},updateRuleProviderByName:async o=>{await B(o),await h()}}},te=m('<div class="flex items-center gap-2"><div class="tabs tabs-boxed gap-2">'),se=m('<div class="flex h-full flex-col gap-2"><div class="flex-1 overflow-y-auto">'),le=m('<button><span></span><div class="badge badge-sm">'),ae=m('<div class="card card-bordered card-compact mb-2 bg-base-200 p-4"><div class="flex items-center gap-2 pr-8"><span class="break-all"></span><div class="badge badge-sm"></div></div><div class="text-xs text-slate-500"> / <!> /<!> '),re=m('<div class="badge badge-sm">'),ne=m('<div class="card card-bordered card-compact mb-2 bg-base-200 p-4"><div class="flex items-center gap-2"><span class="break-all"></span></div><div class="text-xs text-slate-500"> :: ');var u=function(a){return a.ruleProviders="ruleProviders",a.rules="rules",a}(u||{});const ue=()=>{const[a]=q(),{rules:b,ruleProviders:p,updateRules:R,updateAllRuleProvider:h,updateRuleProviderByName:C}=ee(),[P,o]=$(100),x=W(()=>b().slice(0,P()));D(R);const{map:w,setWithCallback:N}=Z(),[S,k]=$(!1),T=(d,g)=>{d.stopPropagation(),N(g,()=>C(g))},U=async d=>{d.stopPropagation(),k(!0);try{await h()}catch{}k(!1)},[_,z]=$(u.rules),j=()=>[{type:u.rules,name:a("rules"),count:b().length},{type:u.ruleProviders,name:a("ruleProviders"),count:p().length}];return(()=>{const d=se(),g=d.firstChild;return t(d,l(f,{get when(){return p().length>0},get children(){const e=te(),i=e.firstChild;return t(i,l(G,{get each(){return j()},children:s=>(()=>{const r=le(),c=r.firstChild,n=c.nextSibling;return r.$$click=()=>z(s.type),t(c,()=>s.name),t(n,()=>s.count),H(()=>J(r,y(_()===s.type&&"tab-active","tab tab-sm gap-2 px-2 md:tab-md"))),r})()})),t(e,l(f,{get when(){return _()===u.ruleProviders},get children(){return l(F,{class:"btn btn-circle btn-sm",get disabled(){return S()},onClick:s=>U(s),get children(){return l(M,{get class(){return y(S()&&"animate-spin text-success")}})}})}}),null),e}}),g),t(g,l(f,{get when(){return _()===u.ruleProviders},get children(){return l(Y,{get subChild(){return p().map(e=>(()=>{const i=ae(),s=i.firstChild,r=s.firstChild,c=r.nextSibling,n=s.nextSibling,v=n.firstChild,A=v.nextSibling,E=A.nextSibling,I=E.nextSibling;return I.nextSibling,t(r,()=>e.name),t(c,()=>e.ruleCount),t(n,()=>e.vehicleType,v),t(n,()=>e.behavior,A),t(n,()=>a("updated"),I),t(n,()=>X(e.updatedAt),null),t(i,l(F,{class:"btn-circle btn-sm absolute right-2 top-2 mr-2 h-4",get disabled(){return w()[e.name]},onClick:O=>T(O,e.name),get children(){return l(M,{get class(){return y(w()[e.name]&&"animate-spin text-success")}})}}),null),i})())}})}}),null),t(g,l(f,{get when(){return _()===u.rules},get children(){return l(K,{get each(){return x()},get hasMore(){return x().length<b().length},next:()=>o(P()+100),children:e=>(()=>{const i=ne(),s=i.firstChild,r=s.firstChild,c=s.nextSibling,n=c.firstChild;return t(r,()=>e.payload),t(s,l(f,{get when(){return typeof e.size=="number"&&e.size!==-1},get children(){const v=re();return t(v,()=>e.size),v}}),null),t(c,()=>e.type,n),t(c,()=>e.proxy,null),i})()})}}),null),d})()};L(["click"]);export{ue as default};
