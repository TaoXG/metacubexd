import{u as F,f as h,E as L,i as a,c,F as l,h as M,j as q,r as K,b as i,g as z}from"./vendor-bcbfc1b2.js";import{c as D,a as P}from"./index-8592a353.js";import{c as T,f as $,a as j}from"./index-9f132d0e.js";import{w as k,c as A}from"./index-6640ac5e.js";const G=i('<div class="flex flex-col gap-4"><input class="input input-primary"><div class="overflow-x-auto whitespace-nowrap rounded-md"><table class="table table-zebra-zebra table-xs rounded-none bg-base-200"><thead></thead><tbody>'),b=i("<tr>"),H=i('<th class="bg-base-300"><div>'),I=i("<td>"),W=()=>{const[_]=F();let u=0;const[g,w]=h(""),[p,C]=h([]),x=D(`${k()}/logs?token=${A()}`),y=P(x,"message");L(()=>{var t;const e=(t=y())==null?void 0:t.data;e&&(C(d=>[{...JSON.parse(e),seq:u},...d].slice(0,100)),u++)});const m=T({get data(){return g()?p().filter(e=>e.payload.toLowerCase().includes(g().toLowerCase())):p()},columns:[{accessorKey:"Sequence",accessorFn:e=>e.seq},{accessorKey:"Type",accessorFn:e=>e.type},{accessorKey:"Payload",accessorFn:e=>e.payload}],getCoreRowModel:j()});return(()=>{const e=G(),t=e.firstChild,d=t.nextSibling,S=d.firstChild,f=S.firstChild,v=f.nextSibling;return t.$$input=r=>w(r.target.value),a(f,c(l,{get each(){return m.getHeaderGroups()},children:r=>(()=>{const o=b();return a(o,c(l,{get each(){return r.headers},children:s=>(()=>{const n=H(),E=n.firstChild;return a(E,(()=>{const R=M(()=>!!s.isPlaceholder);return()=>R()?null:$(s.column.columnDef.header,s.getContext())})()),n})()})),o})()})),a(v,c(l,{get each(){return m.getRowModel().rows},children:r=>(()=>{const o=b();return a(o,c(l,{get each(){return r.getVisibleCells()},children:s=>(()=>{const n=I();return a(n,()=>$(s.column.columnDef.cell,s.getContext())),n})()})),o})()})),q(()=>K(t,"placeholder",_("search"))),e})()};z(["input"]);export{W as default};
