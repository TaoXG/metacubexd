import{u as C,b as D,J as R,i as m,e as w,K as V,F as j,l as f,k as F,d as L}from"./vendor-48c5660e.js";import{c as z,v as A,z as b}from"./index-bb44c23f.js";import{e as l,s as h,a as B}from"./index-f2405638.js";let g;const H=new Uint8Array(16);function J(){if(!g&&(g=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!g))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(H)}const i=[];for(let t=0;t<256;++t)i.push((t+256).toString(16).slice(1));function K(t,n=0){return(i[t[n+0]]+i[t[n+1]]+i[t[n+2]]+i[t[n+3]]+"-"+i[t[n+4]]+i[t[n+5]]+"-"+i[t[n+6]]+i[t[n+7]]+"-"+i[t[n+8]]+i[t[n+9]]+"-"+i[t[n+10]]+i[t[n+11]]+i[t[n+12]]+i[t[n+13]]+i[t[n+14]]+i[t[n+15]]).toLowerCase()}const N=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),S={randomUUID:N};function P(t,n,a){if(S.randomUUID&&!n&&!t)return S.randomUUID();t=t||{};const s=t.random||(t.rng||J)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,n){a=a||0;for(let r=0;r<16;++r)n[a+r]=s[r];return n}return K(s)}const T=f('<div class="mx-auto flex flex-col items-center gap-4 py-10 sm:w-2/3"><form class="contents"><div class="flex w-full flex-col gap-4"><input name="url" type="url" class="input input-bordered" placeholder="http://127.0.0.1:9090" list="defaultEndpoints"><datalist id="defaultEndpoints"><option value="http://127.0.0.1:9090"></option></datalist><input name="secret" type="password" class="input input-bordered" placeholder="secret"><button type="submit" class="btn btn-primary join-item uppercase"></button></div></form><div class="flex w-full flex-col gap-4">'),X=f('<div class="badge badge-info flex w-full cursor-pointer items-center gap-4 py-4"><button class="btn btn-circle btn-ghost btn-xs text-white">'),q=b.object({url:b.string().url().nonempty(),secret:b.string()}),Q=()=>{const[t]=C(),n=D(),a=o=>{B(o),n("/overview")},s=(o,e)=>F.get(o,{headers:e?{Authorization:`Bearer ${e}`}:{}}).then(({ok:c})=>c).catch(()=>!1),r=async o=>{const e=l().find(c=>c.id===o);e&&await s(e.url,e.secret)&&a(o)},{form:v}=z({extend:A({schema:q}),async onSubmit({url:o,secret:e}){const c=l().findIndex(d=>d.url===o);if(c>-1){const{id:d,secret:y}=l()[c];e!==y&&!await s(o,e)&&(l()[c].secret=e,h(l())),a(d);return}if(!await s(o,e))return;const u=P();h([{id:u,url:o,secret:e},...l()]),a(u)}}),_=o=>h(l().filter(e=>e.id!==o));return(()=>{const o=T(),e=o.firstChild,c=e.firstChild,u=c.firstChild,d=u.nextSibling,y=d.nextSibling,U=y.nextSibling,E=e.nextSibling;return R(v,e,()=>v),m(U,()=>t("add")),m(E,w(j,{get each(){return l()},children:({id:$,url:I})=>(()=>{const p=X(),x=p.firstChild;return p.$$click=()=>r($),m(p,I,x),x.$$click=k=>{k.stopPropagation(),_($)},m(x,w(V,{})),p})()})),o})()};L(["click"]);export{Q as default};
