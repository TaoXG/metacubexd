import{a as $,k as v,y as U,i as l,b as m,z as S,F as _,t as b,d as E}from"./vendor-0eff7de0.js";import{c as I,v as k,z as d}from"./index-58d801f5.js";import{s as g,e as p,a as D}from"./index-ec03787d.js";let c;const R=new Uint8Array(16);function f(){if(!c&&(c=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!c))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(R)}const o=[];for(let t=0;t<256;++t)o.push((t+256).toString(16).slice(1));function j(t,e=0){return(o[t[e+0]]+o[t[e+1]]+o[t[e+2]]+o[t[e+3]]+"-"+o[t[e+4]]+o[t[e+5]]+"-"+o[t[e+6]]+o[t[e+7]]+"-"+o[t[e+8]]+o[t[e+9]]+"-"+o[t[e+10]]+o[t[e+11]]+o[t[e+12]]+o[t[e+13]]+o[t[e+14]]+o[t[e+15]]).toLowerCase()}const C=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),y={randomUUID:C};function V(t,e,i){if(y.randomUUID&&!e&&!t)return y.randomUUID();t=t||{};const n=t.random||(t.rng||f)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){i=i||0;for(let r=0;r<16;++r)e[i+r]=n[r];return e}return j(n)}const z=b('<div class="mx-auto flex flex-col items-center gap-4 py-10 sm:w-2/3"><form class="contents"><div class="flex w-full flex-col gap-4"><input name="url" type="url" class="input input-bordered" placeholder="http://127.0.0.1:9000" list="defaultEndpoints"><datalist id="defaultEndpoints"><option value="http://127.0.0.1:9000"></option></datalist><input name="secret" type="password" autocomplete="new-password" class="input input-bordered" placeholder="secret"><button type="submit" class="btn btn-primary join-item uppercase">Add</button></div></form><div class="flex w-full flex-col gap-4">'),A=b('<div class="badge badge-info flex w-full cursor-pointer items-center gap-4 py-4"><button class="btn btn-circle btn-ghost btn-xs text-white">'),F=d.object({url:d.string().url().nonempty(),secret:d.string()}),N=()=>{const t=$(),{form:e}=I({extend:k({schema:F}),async onSubmit(n){const{hello:r}=await v.get(n.url,{headers:n.secret?{Authorization:`Bearer ${n.secret}`}:{}}).json();r&&g([{id:V(),url:n.url,secret:n.secret},...p()])}}),i=n=>g(p().filter(r=>r.id!==n));return(()=>{const n=z(),r=n.firstChild,x=r.nextSibling;return U(e,r,()=>e),l(x,m(_,{get each(){return p()},children:({id:u,url:h})=>(()=>{const s=A(),a=s.firstChild;return s.$$click=()=>{D(u),t("/")},l(s,h,a),a.$$click=w=>{w.stopPropagation(),i(u)},l(a,m(S,{})),s})()})),n})()};E(["click"]);export{N as default};
