import{u as ue,c as O,i as s,e as a,Y as _e,Z as xe,_ as Se,F as k,$ as Ce,S as ye,a0 as Ie,h as $,a1 as we,a2 as Ee,M as Re,f as K,W as Fe,x as De,m as se,a3 as re,y as oe,b as V,v as Oe,a as M,a4 as q,a5 as le,a6 as ce,a7 as Te,a8 as Me,t as j,g as B,s as Pe,d as Ne}from"./vendor-5206a119.js";import{c as ke}from"./index-8774f926.js";import{c as Ke,f as H,g as Le,a as Ae,b as Ge,d as ze,e as Ve}from"./index-fcf37c20.js";import{B as X}from"./Button-10367ce5.js";import{d as ge,f as $e,u as je,w as Be,c as He,g as i,h as Ue,t as We,T as U}from"./index-a6fe377e.js";const Ze=$('<div class="sortable"><div class="m-1 flex cursor-grab justify-between p-1"><span class="select-none"></span><input type="checkbox" class="toggle">'),Ye=$('<input type="checkbox" id="connection-modal" class="modal-toggle">'),qe=$('<div class="column self-stretch">'),Xe=$('<div class="sortable">'),Je=$('<div class="modal"><div class="modal-box w-80"></div><label class="modal-backdrop" for="connection-modal">'),Qe=e=>{const[c]=ue(),[f,_]=O(null),y=({draggable:d})=>_(d.id),Z=({draggable:d,droppable:v})=>{if(d&&v){const u=e.order,m=u.indexOf(d.id),F=u.indexOf(v.id);if(m!==F){const I=u.slice();I.splice(F,0,...I.splice(m,1)),e.onOrderChange(I)}}},L=({key:d})=>{const v=we(d),[u]=Ee();return(()=>{const m=Ze(),F=m.firstChild,I=F.firstChild,A=I.nextSibling;return Re(v,m,()=>!0),s(I,()=>c(d)),A.addEventListener("change",x=>{e.onVisibleChange({...e.visible,[d]:x.target.checked})}),K(x=>{const G=!!v.isActiveDraggable,z=!!u.active.draggable;return G!==x._v$&&m.classList.toggle("opacity-25",x._v$=G),z!==x._v$2&&m.classList.toggle("transition-transform",x._v$2=z),x},{_v$:void 0,_v$2:void 0}),K(()=>A.checked=e.visible[d]),m})()};return[Ye(),(()=>{const d=Je(),v=d.firstChild;return s(v,a(Ie,{onDragStart:y,onDragEnd:Z,collisionDetector:_e,get children(){return[a(xe,{}),(()=>{const u=qe();return s(u,a(Se,{get ids(){return e.order},get children(){return a(k,{get each(){return e.order},children:m=>a(L,{key:m})})}})),u})(),a(Ce,{get children(){return a(ye,{get when(){return f()},get children(){const u=Xe();return s(u,()=>c(f())),u}})}})]}}),null),s(v,a(X,{class:"btn-neutral btn-sm ml-auto mt-4 block",onClick:()=>{e.onOrderChange(ge),e.onVisibleChange($e)},get children(){return c("reset")}}),null),d})()]};var et=async e=>{typeof e=="string"?await navigator.clipboard.writeText(e):await navigator.clipboard.write(e)};const ie="[a-fA-F\\d:]",R=e=>e&&e.includeBoundaries?`(?:(?<=\\s|^)(?=${ie})|(?<=${ie})(?=\\s|$))`:"",h="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",r="[a-fA-F\\d]{1,4}",W=`
(?:
(?:${r}:){7}(?:${r}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${r}:){6}(?:${h}|:${r}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${r}:){5}(?::${h}|(?::${r}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${r}:){4}(?:(?::${r}){0,1}:${h}|(?::${r}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${r}:){3}(?:(?::${r}){0,2}:${h}|(?::${r}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${r}:){2}(?:(?::${r}){0,3}:${h}|(?::${r}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${r}:){1}(?:(?::${r}){0,4}:${h}|(?::${r}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${r}){0,5}:${h}|(?::${r}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),tt=new RegExp(`(?:^${h}$)|(?:^${W}$)`),nt=new RegExp(`^${h}$`),at=new RegExp(`^${W}$`),J=e=>e&&e.exact?tt:new RegExp(`(?:${R(e)}${h}${R(e)})|(?:${R(e)}${W}${R(e)})`,"g");J.v4=e=>e&&e.exact?nt:new RegExp(`${R(e)}${h}${R(e)}`,"g");J.v6=e=>e&&e.exact?at:new RegExp(`${R(e)}${W}${R(e)}`,"g");function st(e){const c=(...f)=>e(...f);return Object.defineProperty(c,"name",{value:`functionTimeout(${e.name||"<anonymous>"})`,configurable:!0}),c}const{toString:rt}=Object.prototype;function ot(e){return rt.call(e)==="[object RegExp]"}const de={global:"g",ignoreCase:"i",multiline:"m",dotAll:"s",sticky:"y",unicode:"u"};function lt(e,c={}){if(!ot(e))throw new TypeError("Expected a RegExp instance");const f=Object.keys(de).map(y=>(typeof c[y]=="boolean"?c[y]:e[y])?de[y]:"").join(""),_=new RegExp(c.source||e.source,f);return _.lastIndex=typeof c.lastIndex=="number"?c.lastIndex:e.lastIndex,_}function ct(e,c,{timeout:f}={}){try{return st(()=>lt(e).test(c),{timeout:f})()}catch(_){throw _}}const it=45,dt={timeout:400};function ut(e){return e.length>it?!1:ct(J.v6({exact:!0}),e,dt)}const gt=$('<div class="flex h-4 items-center">'),$t=$('<div class="flex h-full flex-col gap-4 overflow-y-auto p-1"><div class="tabs-boxed tabs"><a class="tab tab-active"> (<!>)</a></div><div class="flex w-full items-center gap-2"><input class="input input-primary flex-1"><label for="connection-modal" class="btn btn-circle"></label></div><div class="overflow-x-auto whitespace-nowrap rounded-md bg-base-300"><table><thead class="sticky top-0 z-10 h-8"></thead><tbody>'),mt=$("<tr>"),pt=$('<th class="bg-base-200"><div><div>'),bt=$('<button class="cursor-pointer">'),ht=$('<tr class="h-8 hover:!bg-primary hover:text-primary-content">'),ft=$("<td>"),vt=$("<button><div></div><div></div><div>(<!>)"),It=()=>{const[e]=ue(),c=je(),[f,_]=O(""),y=ke(`${Be()}/connections?token=${He()}`),Z=Fe(y,"message"),[L,d]=O([]);De(()=>{var l;const t=(l=Z())==null?void 0:l.data;t&&d(P=>{const N=new Map;return P.forEach(g=>N.set(g.id,g)),JSON.parse(t).connections.map(g=>{const S=N.get(g.id);return S?{...g,downloadSpeed:S.download?g.download-S.download:0,uploadSpeed:S.upload?g.upload-S.upload:0}:{...g,downloadSpeed:0,uploadSpeed:0}}).slice(-100)})});const v=t=>c.delete(`connections/${t}`),[u,m]=se(O($e),{name:"columnVisibility",storage:localStorage}),[F,I]=se(O(ge),{name:"columnOrder",storage:localStorage}),A=[{header:()=>e("close"),enableGrouping:!1,enableSorting:!1,accessorKey:i.Close,cell:({row:t})=>(()=>{const l=gt();return s(l,a(X,{class:"btn-circle btn-xs",onClick:()=>v(t.id),get children(){return a(re,{size:"16"})}})),l})()},{header:()=>e("ID"),enableGrouping:!1,accessorKey:i.ID,accessorFn:t=>t.id},{header:()=>e("type"),accessorKey:i.Type,accessorFn:t=>`${t.metadata.type}(${t.metadata.network})`},{header:()=>e("process"),accessorKey:i.Process,accessorFn:t=>t.metadata.process||t.metadata.processPath.replace(/^.*[/\\](.*)$/,"$1")||"-"},{header:()=>e("host"),accessorKey:i.Host,accessorFn:t=>`${t.metadata.host?t.metadata.host:t.metadata.destinationIP}:${t.metadata.destinationPort}`},{header:()=>e("rules"),accessorKey:i.Rule,accessorFn:t=>t.rulePayload?`${t.rule} :: ${t.rulePayload}`:t.rule},{header:()=>e("chains"),accessorKey:i.Chains,accessorFn:t=>t.chains.slice().reverse().join(" :: ")},{header:()=>e("connectTime"),accessorKey:i.ConnectTime,accessorFn:t=>Ue(t.start),sortingFn:(t,l)=>oe(t.original.start).valueOf()-oe(l.original.start).valueOf()},{header:()=>e("dlSpeed"),accessorKey:i.DlSpeed,accessorFn:t=>`${V(t.downloadSpeed)}/s`,sortingFn:(t,l)=>t.original.downloadSpeed-l.original.downloadSpeed},{header:()=>e("ulSpeed"),accessorKey:i.ULSpeed,accessorFn:t=>`${V(t.uploadSpeed)}/s`,sortingFn:(t,l)=>t.original.uploadSpeed-l.original.uploadSpeed},{header:()=>e("dl"),accessorKey:i.Download,accessorFn:t=>V(t.download),sortingFn:(t,l)=>t.original.download-l.original.download},{header:()=>e("ul"),accessorKey:i.Upload,accessorFn:t=>V(t.upload),sortingFn:(t,l)=>t.original.upload-l.original.upload},{header:()=>e("source"),accessorKey:i.Source,accessorFn:t=>ut(t.metadata.sourceIP)?`[${t.metadata.sourceIP}]:${t.metadata.sourcePort}`:`${t.metadata.sourceIP}:${t.metadata.sourcePort}`},{header:()=>e("destination"),accessorKey:i.Destination,accessorFn:t=>t.metadata.remoteDestination||t.metadata.destinationIP||t.metadata.host}],[x,G]=O([]),[z,me]=O([{id:i.ConnectTime,desc:!0}]),Q=Ke({state:{get columnOrder(){return F()},get grouping(){return x()},get sorting(){return z()},get columnVisibility(){return u()},get globalFilter(){return f()}},get data(){return L()},sortDescFirst:!0,enableHiding:!0,columns:A,onGlobalFilterChange:_,onGroupingChange:G,onSortingChange:me,getFilteredRowModel:Le(),getSortedRowModel:Ae(),getExpandedRowModel:Ge(),getGroupedRowModel:ze(),getCoreRowModel:Ve()}),pe=()=>{const t=We();return t===U.XS?"table-xs":t===U.SM?"table-sm":t===U.MD?"table-md":t===U.LG?"table-lg":""};return(()=>{const t=$t(),l=t.firstChild,P=l.firstChild,N=P.firstChild,Y=N.nextSibling;Y.nextSibling;const g=l.nextSibling,S=g.firstChild,ee=S.nextSibling,be=g.nextSibling,te=be.firstChild,ne=te.firstChild,he=ne.nextSibling;return s(P,()=>e("activeConnections"),N),s(P,()=>L().length,Y),S.$$input=o=>_(o.target.value),s(g,a(X,{class:"btn-circle",onClick:()=>c.delete("connections"),get children(){return a(re,{})}}),ee),s(ee,a(Oe,{})),s(g,a(Qe,{get order(){return F()},get visible(){return u()},onOrderChange:o=>{I([...o])},onVisibleChange:o=>m({...o})}),null),s(ne,a(k,{get each(){return Q.getHeaderGroups()},children:o=>(()=>{const w=mt();return s(w,a(k,{get each(){return o.headers},children:n=>(()=>{const T=pt(),E=T.firstChild,b=E.firstChild;return s(E,(()=>{const p=M(()=>!!n.column.getCanGroup());return()=>p()?(()=>{const C=bt();return q(C,"click",n.column.getToggleGroupingHandler(),!0),s(C,(()=>{const D=M(()=>!!n.column.getIsGrouped());return()=>D()?a(le,{size:18}):a(ce,{size:18})})()),C})():null})(),b),q(b,"click",n.column.getToggleSortingHandler(),!0),s(b,()=>H(n.column.columnDef.header,n.getContext())),s(E,()=>({asc:a(Te,{}),desc:a(Me,{})})[n.column.getIsSorted()]??null,null),K(p=>{const C=j("flex items-center gap-2"),D=j(n.column.getCanSort()&&"cursor-pointer select-none","flex-1");return C!==p._v$3&&B(E,p._v$3=C),D!==p._v$4&&B(b,p._v$4=D),p},{_v$3:void 0,_v$4:void 0}),T})()})),w})()})),s(he,a(k,{get each(){return Q.getRowModel().rows},children:o=>(()=>{const w=ht();return s(w,a(k,{get each(){return o.getVisibleCells()},children:n=>(()=>{const T=ft();return T.$$contextmenu=E=>{E.preventDefault(),typeof n.renderValue()=="string"&&et(n.renderValue())},s(T,(()=>{const E=M(()=>!!n.getIsGrouped());return()=>E()?(()=>{const b=vt(),p=b.firstChild,C=p.nextSibling,D=C.nextSibling,fe=D.firstChild,ae=fe.nextSibling;return ae.nextSibling,q(b,"click",o.getToggleExpandedHandler(),!0),s(p,(()=>{const ve=M(()=>!!o.getIsExpanded());return()=>ve()?a(le,{size:18}):a(ce,{size:18})})()),s(C,()=>H(n.column.columnDef.cell,n.getContext())),s(D,()=>o.subRows.length,ae),K(()=>B(b,j(o.getCanExpand()?"cursor-pointer":"cursor-normal","flex items-center gap-2"))),b})():(()=>{const b=M(()=>!!n.getIsAggregated());return()=>b()?H(n.column.columnDef.aggregatedCell??n.column.columnDef.cell,n.getContext()):(()=>{const p=M(()=>!!n.getIsPlaceholder());return()=>p()?null:H(n.column.columnDef.cell,n.getContext())})()})()})()),T})()})),w})()})),K(o=>{const w=e("search"),n=j(pe(),"table table-zebra relative rounded-none");return w!==o._v$&&Pe(S,"placeholder",o._v$=w),n!==o._v$2&&B(te,o._v$2=n),o},{_v$:void 0,_v$2:void 0}),t})()};Ne(["input","click","contextmenu"]);export{It as default};
