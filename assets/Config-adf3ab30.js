import{aa as V,ab as z,O as H,t as W,i as e,f as r,S as L,n as c,u as j,c as E,L as A,F as w,B as Y,j as b,s as R}from"./vendor-a57136fc.js";import{z as m,c as G,v as B}from"./index-c1f24b95.js";import{u as X,f as J,g as K,h as F,j as q,k as Z,t as M,l as ee,m as te,n as se,P as le,o as ne,p as re,q as ae,v as ie,r as oe,x as ce,y as de}from"./index-6ca4ff09.js";const ue=c('<span class="loading loading-spinner">'),pe=c("<button>"),P=t=>{const[a,g]=V(t,["class","loading"]);return(()=>{const i=pe();return z(i,H({get class(){return W("btn",a.loading?"btn-disabled":a.class)}},g),!1,!0),e(i,r(L,{get when(){return a.loading},get children(){return ue()}}),null),e(i,()=>t.children,null),i})()},ge=c('<div class="flex flex-col p-4">'),he=c('<div class="flex flex-col"><form class="flex flex-col gap-2 sm:flex-row"><input name="name" class="input input-bordered w-full max-w-xs sm:flex-1"><div class="flex items-center gap-2"><select name="type" class="select select-bordered"><option>A</option><option>AAAA</option><option>MX'),me=c('<div class="py-2">'),fe=c('<div class="flex flex-col gap-2"><form class="contents"></form><div class="flex items-center gap-2">'),be=c('<div class="form-control w-64 max-w-xs"><label class="label"><span class="label-text"></span></label><input type="number" class="input input-bordered">'),Q=c('<div class="flex flex-col"><div class="pb-4"></div><select class="select select-bordered w-full max-w-xs">'),ve=c('<div class="grid gap-4"><div class="flex flex-col"><div class="pb-4"></div><input type="checkbox" class="toggle"></div><div class="flex flex-col"><div class="pb-4"></div><input type="checkbox" class="toggle"></div><div><div class="pb-4"></div><div class="flex items-center gap-4"></div></div><div><div class="pb-4"></div><input class="toggle" type="checkbox"></div><div class="flex flex-col"><div class="pb-4"></div><input class="w-100 input input-bordered max-w-md">'),U=c("<option>"),xe=c('<label class="flex items-center gap-2"><span></span><input class="radio" type="radio">'),_e=c('<div class="flex flex-col gap-4">'),$e=m.object({name:m.string(),type:m.string()}),ye=()=>{const[t]=j(),a=X(),{form:g,isSubmitting:i}=G({extend:B({schema:$e}),onSubmit:async d=>{a.get("dns/query",{searchParams:{name:d.name,type:d.type}}).json().then(({Answer:o})=>y((o==null?void 0:o.map(({data:h})=>h))||[]))}}),[v,y]=E([]);return(()=>{const d=he(),o=d.firstChild,h=o.firstChild,f=h.nextSibling;return f.firstChild,A(g,o,()=>g),e(f,r(P,{type:"submit",class:"btn-primary",get loading(){return i()},get children(){return t("dnsQuery")}}),null),e(d,r(L,{get when(){return v().length>0},get children(){const C=ge();return e(C,r(w,{get each(){return v()},children:x=>(()=>{const _=me();return e(_,x),_})()})),C}}),null),d})()},Ce=m.object({port:m.number(),"socks-port":m.number(),"redir-port":m.number(),"tproxy-port":m.number(),"mixed-port":m.number()}),Se=()=>{const[t]=j(),a=X(),g=[{label:"Http Port",key:"port"},{label:"Socks Port",key:"socks-port"},{label:"Redir Port",key:"redir-port"},{label:"Tproxy Port",key:"tproxy-port"},{label:"Mixed Port",key:"mixed-port"}],{form:i,setInitialValues:v,reset:y}=G({extend:B({schema:Ce})});Y(async()=>{const $=await a.get("configs").json();v($),y()});const[d,o]=E(!1),[h,f]=E(!1),[C,x]=E(!1),_=async()=>{o(!0);try{await a.post("configs/geo")}catch{}o(!1)},T=async()=>{f(!0);try{await a.post("upgrade")}catch{}f(!1)},D=async()=>{x(!0);try{await a.post("restart")}catch{}x(!1)};return(()=>{const $=fe(),S=$.firstChild,s=S.nextSibling;return A(i,S,()=>i),e(S,r(w,{each:g,children:n=>(()=>{const u=be(),l=u.firstChild,p=l.firstChild,I=l.nextSibling;return e(p,()=>n.label),b(k=>{const O=n.key,N=n.label;return O!==k._v$&&R(I,"name",k._v$=O),N!==k._v$2&&R(I,"placeholder",k._v$2=N),k},{_v$:void 0,_v$2:void 0}),u})()})),e(s,r(P,{get loading(){return d()},onClick:_,get children(){return t("updateGEODatabases")}}),null),e(s,r(P,{get loading(){return C()},onClick:D,get children(){return t("restartCore")}}),null),e(s,r(P,{get loading(){return h()},onClick:T,get children(){return t("upgradeCore")}}),null),$})()},ke=()=>{const[t]=j();return(()=>{const a=ve(),g=a.firstChild,i=g.firstChild,v=i.nextSibling,y=g.nextSibling,d=y.firstChild,o=d.nextSibling,h=y.nextSibling,f=h.firstChild,C=f.nextSibling,x=h.nextSibling,_=x.firstChild,T=_.nextSibling,D=x.nextSibling,$=D.firstChild,S=$.nextSibling;return e(i,()=>t("renderInTwoColumns")),v.addEventListener("change",s=>{J(s.target.checked)}),e(d,()=>t("autoSwitchTheme")),o.addEventListener("change",s=>{K(s.target.checked),F()}),e(a,r(L,{get when(){return q()},get children(){return[(()=>{const s=Q(),n=s.firstChild,u=n.nextSibling;return e(n,()=>t("favDayTheme")),u.addEventListener("change",l=>{Z(l.target.value),F()}),e(u,r(w,{each:M,children:l=>(()=>{const p=U();return p.value=l,e(p,l),b(()=>p.selected=ee()===l),p})()})),s})(),(()=>{const s=Q(),n=s.firstChild,u=n.nextSibling;return e(n,()=>t("favNightTheme")),u.addEventListener("change",l=>{te(l.target.value),F()}),e(u,r(w,{each:M,children:l=>(()=>{const p=U();return p.value=l,e(p,l),b(()=>p.selected=se()===l),p})()})),s})()]}}),h),e(f,()=>t("proxiesPreviewType")),e(C,r(w,{get each(){return Object.values(le)},children:s=>(()=>{const n=xe(),u=n.firstChild,l=u.nextSibling;return e(u,()=>t(s)),l.addEventListener("change",()=>ne(s)),R(l,"aria-label",s),b(()=>l.checked=s===re()),n})()})),e(_,()=>t("autoCloseConns")),T.addEventListener("change",s=>ae(s.target.checked)),e($,()=>t("urlForDelayTest")),S.addEventListener("change",s=>{var n;return ie((n=s.target)==null?void 0:n.value)}),b(()=>v.checked=oe()),b(()=>o.checked=q()),b(()=>T.checked=ce()),b(()=>S.value=de()),a})()},Pe=()=>(()=>{const t=_e();return e(t,r(ye,{}),null),e(t,r(Se,{}),null),e(t,r(ke,{}),null),t})();export{Pe as default};
