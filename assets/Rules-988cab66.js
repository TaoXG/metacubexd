import{c as p,o as R,i as e,b as u,F as b,t as a}from"./vendor-0eff7de0.js";import{u as j}from"./index-ec03787d.js";const q=a('<div class="flex flex-col gap-4"><div><h1 class="pb-4 text-lg font-semibold">Rules</h1><div class="grid grid-cols-2 gap-2 sm:grid-cols-1"></div></div><div><h1 class="pb-4 text-lg font-semibold">Rules Providers</h1><div class="grid grid-cols-2 gap-2 sm:grid-cols-1">'),w=a('<div class="card card-bordered card-compact border-secondary p-4"><div></div><div>: '),F=a('<div class="card card-bordered card-compact border-secondary p-4"><div></div><div>: <!> (<!>)'),T=()=>{const o=j(),[v,_]=p([]),[$,h]=p([]);return R(async()=>{const{rules:r}=await o.get("rules").json();_(Object.values(r));const{providers:n}=await o.get("providers/rules").json();h(Object.values(n))}),(()=>{const r=q(),n=r.firstChild,m=n.firstChild,x=m.nextSibling,f=n.nextSibling,S=f.firstChild,C=S.nextSibling;return e(x,u(b,{get each(){return v()},children:l=>(()=>{const t=w(),i=t.firstChild,s=i.nextSibling,d=s.firstChild;return e(i,()=>l.payload),e(s,()=>l.type,d),e(s,()=>l.proxy,null),t})()})),e(C,u(b,{get each(){return $()},children:l=>(()=>{const t=F(),i=t.firstChild,s=i.nextSibling,d=s.firstChild,c=d.nextSibling,y=c.nextSibling,g=y.nextSibling;return g.nextSibling,e(i,()=>l.name),e(s,()=>l.vehicleType,d),e(s,()=>l.behavior,c),e(s,()=>l.ruleCount,g),t})()})),r})()};export{T as default};
