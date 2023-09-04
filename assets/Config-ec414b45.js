import{i as t,c as n,b as g,u as G,f as L,U as X,F as T,S as B,H as Y,j as d,r as D}from"./vendor-a04c6957.js";import{z as u,c as H,v as z}from"./index-c360447f.js";import{u as V,B as O,t as J,v as K,x as W,y as j,z as Q,A as Z,E as U,G as ee,H as te,I as le,n as se,J as ne,m as re,K as ae,M as ie,p as oe,N as ce,O as de,Q as ge,r as pe,R as ue,S as fe}from"./index-4624111a.js";const he=g('<div class="flex flex-col p-4">'),me=g('<div class="flex flex-col"><form class="flex flex-col gap-2 sm:flex-row"><input name="name" class="input input-bordered w-full sm:flex-1"><div class="flex items-center gap-2"><select name="type" class="select select-bordered"><option>A</option><option>AAAA</option><option>MX'),xe=g('<div class="py-2">'),be=g('<div class="flex flex-col gap-2"><form class="contents"></form><div class="flex flex-wrap items-center gap-2">'),ve=g('<div class="form-control w-64 max-w-sm"><label class="label"><span class="label-text"></span></label><input type="number" class="input input-bordered">'),A=g('<div class="flex flex-col"><div class="pb-4 text-lg font-semibold"></div><select class="select select-bordered w-full max-w-xs">'),_e=g('<div class="grid gap-4"><div class="flex flex-col"><div class="pb-4 text-lg font-semibold"></div><input type="checkbox" class="toggle"></div><div class="flex flex-col"><div class="pb-4 text-lg font-semibold"></div><input type="checkbox" class="toggle"></div><div class="flex flex-col"><div class="pb-4 text-lg font-semibold"></div><input type="checkbox" class="toggle"></div><div><div class="pb-4 text-lg font-semibold"></div><div class="flex items-center gap-4"></div></div><div><div class="pb-4 text-lg font-semibold"></div><div class="flex flex-col gap-4"></div></div><div><div class="pb-4 text-lg font-semibold"></div><input class="toggle" type="checkbox"></div><div class="flex flex-col"><div class="pb-4 text-lg font-semibold"></div><input class="w-100 input input-bordered max-w-md">'),M=g("<option>"),q=g('<label class="flex items-center gap-2"><span></span><input class="radio" type="radio">'),$e=g('<div class="flex flex-col gap-4">'),ye=u.object({name:u.string(),type:u.string()}),Se=()=>{const[l]=G(),c=V(),{form:x,isSubmitting:b}=H({extend:z({schema:ye}),onSubmit:async o=>{c.get("dns/query",{searchParams:{name:o.name,type:o.type}}).json().then(({Answer:i})=>S((i==null?void 0:i.map(({data:f})=>f))||[]))}}),[v,S]=L([]);return(()=>{const o=me(),i=o.firstChild,f=i.firstChild,h=f.nextSibling;return h.firstChild,X(x,i,()=>x),t(h,n(O,{type:"submit",class:"btn-primary",get loading(){return b()},get children(){return l("dnsQuery")}}),null),t(o,n(B,{get when(){return v().length>0},get children(){const _=he();return t(_,n(T,{get each(){return v()},children:m=>(()=>{const $=xe();return t($,m),$})()})),_}}),null),o})()},Ce=u.object({port:u.number(),"socks-port":u.number(),"redir-port":u.number(),"tproxy-port":u.number(),"mixed-port":u.number()}),ke=()=>{const[l]=G(),c=V(),x=[{label:"Http Port",key:"port"},{label:"Socks Port",key:"socks-port"},{label:"Redir Port",key:"redir-port"},{label:"Tproxy Port",key:"tproxy-port"},{label:"Mixed Port",key:"mixed-port"}],{form:b,setInitialValues:v,reset:S}=H({extend:z({schema:Ce})});Y(async()=>{const y=await c.get("configs").json();v(y),S()});const[o,i]=L(!1),[f,h]=L(!1),[_,m]=L(!1),$=async()=>{i(!0);try{await c.post("configs/geo")}catch{}i(!1)},N=async()=>{h(!0);try{await c.post("upgrade")}catch{}h(!1)},R=async()=>{m(!0);try{await c.post("restart")}catch{}m(!1)};return(()=>{const y=be(),E=y.firstChild,C=E.nextSibling;return X(b,E,()=>b),t(E,n(T,{each:x,children:k=>(()=>{const P=ve(),F=P.firstChild,I=F.firstChild,w=F.nextSibling;return t(I,()=>k.label),d(e=>{const r=k.key,a=k.label;return r!==e._v$&&D(w,"name",e._v$=r),a!==e._v$2&&D(w,"placeholder",e._v$2=a),e},{_v$:void 0,_v$2:void 0}),P})()})),t(C,n(O,{get loading(){return o()},onClick:$,get children(){return l("updateGEODatabases")}}),null),t(C,n(O,{get loading(){return _()},onClick:R,get children(){return l("restartCore")}}),null),t(C,n(O,{get loading(){return f()},onClick:N,get children(){return l("upgradeCore")}}),null),y})()},Te=()=>{const[l]=G();return(()=>{const c=_e(),x=c.firstChild,b=x.firstChild,v=b.nextSibling,S=x.nextSibling,o=S.firstChild,i=o.nextSibling,f=S.nextSibling,h=f.firstChild,_=h.nextSibling,m=f.nextSibling,$=m.firstChild,N=$.nextSibling,R=m.nextSibling,y=R.firstChild,E=y.nextSibling,C=R.nextSibling,k=C.firstChild,P=k.nextSibling,F=C.nextSibling,I=F.firstChild,w=I.nextSibling;return t(b,()=>l("renderInTwoColumns")),v.addEventListener("change",e=>{J(e.target.checked)}),t(o,()=>l("renderProxiesInSamePage")),i.addEventListener("change",e=>{K(e.target.checked)}),t(h,()=>l("autoSwitchTheme")),_.addEventListener("change",e=>{W(e.target.checked),j()}),t(c,n(B,{get when(){return Q()},get children(){return[(()=>{const e=A(),r=e.firstChild,a=r.nextSibling;return t(r,()=>l("favDayTheme")),a.addEventListener("change",s=>{Z(s.target.value),j()}),t(a,n(T,{each:U,children:s=>(()=>{const p=M();return p.value=s,t(p,s),d(()=>p.selected=ee()===s),p})()})),e})(),(()=>{const e=A(),r=e.firstChild,a=r.nextSibling;return t(r,()=>l("favNightTheme")),a.addEventListener("change",s=>{te(s.target.value),j()}),t(a,n(T,{each:U,children:s=>(()=>{const p=M();return p.value=s,t(p,s),d(()=>p.selected=le()===s),p})()})),e})()]}}),m),t($,()=>l("proxiesPreviewType")),t(N,n(T,{get each(){return Object.values(se)},children:e=>(()=>{const r=q(),a=r.firstChild,s=a.nextSibling;return t(a,()=>l(e)),s.addEventListener("change",()=>ne(e)),D(s,"aria-label",e),d(()=>s.checked=e===re()),r})()})),t(y,()=>l("proxiesSorting")),t(E,n(T,{get each(){return Object.values(ae)},children:e=>(()=>{const r=q(),a=r.firstChild,s=a.nextSibling;return t(a,()=>l(e)),s.addEventListener("change",()=>ie(e)),D(s,"aria-label",e),d(()=>s.checked=e===oe()),r})()})),t(k,()=>l("autoCloseConns")),P.addEventListener("change",e=>ce(e.target.checked)),t(I,()=>l("urlForLatencyTest")),w.addEventListener("change",e=>de(e.target.value)),d(()=>v.checked=ge()),d(()=>i.checked=pe()),d(()=>_.checked=Q()),d(()=>P.checked=ue()),d(()=>w.value=fe()),c})()},Re=()=>(()=>{const l=$e();return t(l,n(Se,{}),null),t(l,n(ke,{}),null),t(l,n(Te,{}),null),t(l,()=>"1.61.0",null),l})();export{Re as default};
