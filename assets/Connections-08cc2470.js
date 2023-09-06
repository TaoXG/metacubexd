import{u as ve,c as v,i as a,e as s,X as Pe,Y as Te,Z as Me,F as K,_ as ke,S as Ae,$ as Ke,h as $,a0 as Ne,a1 as Le,M as Ge,f as N,V as Ve,x as ce,a2 as le,a as F,m as ie,a3 as de,y as ue,b as B,g as L,t as G,a4 as ze,a5 as We,v as je,a6 as Q,a7 as ge,a8 as $e,a9 as Be,aa as He,s as Ue,d as Ze}from"./vendor-cb4efd1e.js";import{c as qe}from"./index-253f8914.js";import{c as Ye,f as H,g as Xe,a as Je,b as Qe,d as et,e as tt}from"./index-2d64f093.js";import{l as me}from"./lodash-a3a9ebf3.js";import{B as U}from"./Button-7c6b8c49.js";import{d as fe,f as be,u as nt,w as st,c as ot,g as u,h as at,t as rt,i as ct}from"./index-46cb073c.js";const lt=$('<div class="sortable"><div class="m-1 flex cursor-grab justify-between p-1"><span class="select-none"></span><input type="checkbox" class="toggle">'),it=$('<input type="checkbox" id="connection-modal" class="modal-toggle">'),dt=$('<div class="column self-stretch">'),ut=$('<div class="sortable">'),gt=$('<div class="modal"><div class="modal-box w-80"></div><label class="modal-backdrop" for="connection-modal">'),$t=e=>{const[l]=ve(),[x,y]=v(null),I=({draggable:g})=>y(g.id),q=({draggable:g,droppable:f})=>{if(g&&f){const m=e.order,p=m.indexOf(g.id),M=m.indexOf(f.id);if(p!==M){const b=m.slice();b.splice(M,0,...b.splice(p,1)),e.onOrderChange(b)}}},Y=({key:g})=>{const f=Ne(g),[m]=Le();return(()=>{const p=lt(),M=p.firstChild,b=M.firstChild,z=b.nextSibling;return Ge(f,p,()=>!0),a(b,()=>l(g)),z.addEventListener("change",w=>{e.onVisibleChange({...e.visible,[g]:w.target.checked})}),N(w=>{const W=!!f.isActiveDraggable,j=!!m.active.draggable;return W!==w._v$&&p.classList.toggle("opacity-25",w._v$=W),j!==w._v$2&&p.classList.toggle("transition-transform",w._v$2=j),w},{_v$:void 0,_v$2:void 0}),N(()=>z.checked=e.visible[g]),p})()};return[it(),(()=>{const g=gt(),f=g.firstChild;return a(f,s(Ke,{onDragStart:I,onDragEnd:q,collisionDetector:Pe,get children(){return[s(Te,{}),(()=>{const m=dt();return a(m,s(Me,{get ids(){return e.order},get children(){return s(K,{get each(){return e.order},children:p=>s(Y,{key:p})})}})),m})(),s(ke,{get children(){return s(Ae,{get when(){return x()},get children(){const m=ut();return a(m,()=>l(x())),m}})}})]}}),null),a(f,s(U,{class:"btn-neutral btn-sm ml-auto mt-4 block",onClick:()=>{e.onOrderChange(fe),e.onVisibleChange(be)},get children(){return l("reset")}}),null),g})()]};var mt=async e=>{typeof e=="string"?await navigator.clipboard.writeText(e):await navigator.clipboard.write(e)};const pe="[a-fA-F\\d:]",P=e=>e&&e.includeBoundaries?`(?:(?<=\\s|^)(?=${pe})|(?<=${pe})(?=\\s|$))`:"",_="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",r="[a-fA-F\\d]{1,4}",Z=`
(?:
(?:${r}:){7}(?:${r}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${r}:){6}(?:${_}|:${r}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${r}:){5}(?::${_}|(?::${r}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${r}:){4}(?:(?::${r}){0,1}:${_}|(?::${r}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${r}:){3}(?:(?::${r}){0,2}:${_}|(?::${r}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${r}:){2}(?:(?::${r}){0,3}:${_}|(?::${r}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${r}:){1}(?:(?::${r}){0,4}:${_}|(?::${r}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${r}){0,5}:${_}|(?::${r}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),pt=new RegExp(`(?:^${_}$)|(?:^${Z}$)`),ht=new RegExp(`^${_}$`),vt=new RegExp(`^${Z}$`),ee=e=>e&&e.exact?pt:new RegExp(`(?:${P(e)}${_}${P(e)})|(?:${P(e)}${Z}${P(e)})`,"g");ee.v4=e=>e&&e.exact?ht:new RegExp(`${P(e)}${_}${P(e)}`,"g");ee.v6=e=>e&&e.exact?vt:new RegExp(`${P(e)}${Z}${P(e)}`,"g");function ft(e){const l=(...x)=>e(...x);return Object.defineProperty(l,"name",{value:`functionTimeout(${e.name||"<anonymous>"})`,configurable:!0}),l}const{toString:bt}=Object.prototype;function Ct(e){return bt.call(e)==="[object RegExp]"}const he={global:"g",ignoreCase:"i",multiline:"m",dotAll:"s",sticky:"y",unicode:"u"};function _t(e,l={}){if(!Ct(e))throw new TypeError("Expected a RegExp instance");const x=Object.keys(he).map(I=>(typeof l[I]=="boolean"?l[I]:e[I])?he[I]:"").join(""),y=new RegExp(l.source||e.source,x);return y.lastIndex=typeof l.lastIndex=="number"?l.lastIndex:e.lastIndex,y}function xt(e,l,{timeout:x}={}){try{return ft(()=>_t(e).test(l),{timeout:x})()}catch(y){throw y}}const St=45,yt={timeout:400};function It(e){return e.length>St?!1:xt(ee.v6({exact:!0}),e,yt)}const wt=$('<div class="flex h-4 items-center">'),Et=$('<div class="flex h-full flex-col gap-4 overflow-y-auto p-1"><div class="tabs-boxed tabs gap-2"></div><div class="flex w-full flex-wrap items-center gap-2"><input class="input input-primary flex-1"><label for="connection-modal" class="btn btn-circle"></label></div><div class="overflow-x-auto whitespace-nowrap rounded-md bg-base-300"><table><thead class="sticky top-0 z-10 h-8"></thead><tbody>'),Rt=$("<button> (<!>)"),Ft=$("<tr>"),Dt=$('<th class="bg-base-200"><div><div>'),Ot=$('<button class="cursor-pointer">'),Pt=$('<tr class="h-8 hover:!bg-primary hover:text-primary-content">'),Tt=$("<td>"),Mt=$("<button><div></div><div></div><div>(<!>)");var V=function(e){return e.activeConnections="activeConnections",e.closedConnections="closedConnections",e}(V||{});const Vt=()=>{const[e]=ve(),l=nt(),[x,y]=v(""),[I,q]=v(V.activeConnections),Y=qe(`${st()}/connections?token=${ot()}`),g=Ve(Y,"message"),[f,m]=v([]),[p,M]=v([]),[b,z]=v(!1),[w,W]=v([]),[j,Ce]=v([]);ce(()=>{var c;const t=(c=g())==null?void 0:c.data;t&&M(D=>{const k=new Map;D.forEach(i=>k.set(i.id,i));const A=JSON.parse(t).connections.map(i=>{const S=k.get(i.id);return S?{...i,downloadSpeed:S.download?i.download-S.download:0,uploadSpeed:S.upload?i.upload-S.upload:0}:{...i,downloadSpeed:0,uploadSpeed:0}}),X=me.differenceWith(D,A,(i,S)=>me.isEqualWith(i,S,(J,n)=>J.id===n.id));return m(i=>[...i,...X].slice(-100)),A.slice(-100)})}),ce(()=>{b()&&(W(le(()=>p())),Ce(le(()=>f())))});const te=F(()=>b()?w():p()),ne=F(()=>b()?j():f()),_e=t=>l.delete(`connections/${t}`),[se,xe]=ie(v(be),{name:"columnVisibility",storage:localStorage}),[oe,Se]=ie(v(fe),{name:"columnOrder",storage:localStorage}),ye=[{header:()=>e("close"),enableGrouping:!1,enableSorting:!1,accessorKey:u.Close,cell:({row:t})=>(()=>{const c=wt();return a(c,s(U,{class:"btn-circle btn-xs",onClick:()=>_e(t.id),get children(){return s(de,{size:"16"})}})),c})()},{header:()=>e("ID"),enableGrouping:!1,accessorKey:u.ID,accessorFn:t=>t.id},{header:()=>e("type"),accessorKey:u.Type,accessorFn:t=>`${t.metadata.type}(${t.metadata.network})`},{header:()=>e("process"),accessorKey:u.Process,accessorFn:t=>t.metadata.process||t.metadata.processPath.replace(/^.*[/\\](.*)$/,"$1")||"-"},{header:()=>e("host"),accessorKey:u.Host,accessorFn:t=>`${t.metadata.host?t.metadata.host:t.metadata.destinationIP}:${t.metadata.destinationPort}`},{header:()=>e("rules"),accessorKey:u.Rule,accessorFn:t=>t.rulePayload?`${t.rule} :: ${t.rulePayload}`:t.rule},{header:()=>e("chains"),accessorKey:u.Chains,accessorFn:t=>t.chains.slice().reverse().join(" :: ")},{header:()=>e("connectTime"),accessorKey:u.ConnectTime,accessorFn:t=>at(t.start),sortingFn:(t,c)=>ue(t.original.start).valueOf()-ue(c.original.start).valueOf()},{header:()=>e("dlSpeed"),accessorKey:u.DlSpeed,accessorFn:t=>`${B(t.downloadSpeed)}/s`,sortingFn:(t,c)=>t.original.downloadSpeed-c.original.downloadSpeed},{header:()=>e("ulSpeed"),accessorKey:u.ULSpeed,accessorFn:t=>`${B(t.uploadSpeed)}/s`,sortingFn:(t,c)=>t.original.uploadSpeed-c.original.uploadSpeed},{header:()=>e("dl"),accessorKey:u.Download,accessorFn:t=>B(t.download),sortingFn:(t,c)=>t.original.download-c.original.download},{header:()=>e("ul"),accessorKey:u.Upload,accessorFn:t=>B(t.upload),sortingFn:(t,c)=>t.original.upload-c.original.upload},{header:()=>e("source"),accessorKey:u.Source,accessorFn:t=>It(t.metadata.sourceIP)?`[${t.metadata.sourceIP}]:${t.metadata.sourcePort}`:`${t.metadata.sourceIP}:${t.metadata.sourcePort}`},{header:()=>e("destination"),accessorKey:u.Destination,accessorFn:t=>t.metadata.remoteDestination||t.metadata.destinationIP||t.metadata.host}],[Ie,we]=v([]),[Ee,Re]=v([{id:u.ConnectTime,desc:!0}]),ae=Ye({state:{get columnOrder(){return oe()},get grouping(){return Ie()},get sorting(){return Ee()},get columnVisibility(){return se()},get globalFilter(){return x()}},get data(){return I()===V.activeConnections?te():ne()},sortDescFirst:!0,enableHiding:!0,columns:ye,onGlobalFilterChange:y,onGroupingChange:we,onSortingChange:Re,getFilteredRowModel:Xe(),getSortedRowModel:Je(),getExpandedRowModel:Qe(),getGroupedRowModel:et(),getCoreRowModel:tt()}),Fe=()=>[{type:V.activeConnections,name:e("activeConnections"),count:te().length},{type:V.closedConnections,name:e("closedConnections"),count:ne().length}];return(()=>{const t=Et(),c=t.firstChild,D=c.nextSibling,k=D.firstChild,A=k.nextSibling,X=D.nextSibling,i=X.firstChild,S=i.firstChild,J=S.nextSibling;return a(c,s(K,{get each(){return Fe()},children:n=>(()=>{const d=Rt(),o=d.firstChild,E=o.nextSibling;return E.nextSibling,d.$$click=()=>q(n.type),a(d,()=>n.name,o),a(d,()=>n.count,E),N(()=>L(d,G(I()===n.type&&"tab-active","tab"))),d})()})),k.$$input=n=>y(n.target.value),a(D,s(U,{class:"btn-circle",onClick:()=>z(n=>!n),get children(){return F(()=>!!b())()?s(ze,{}):s(We,{})}}),A),a(D,s(U,{class:"btn-circle",onClick:()=>l.delete("connections"),get children(){return s(de,{})}}),A),a(A,s(je,{})),a(D,s($t,{get order(){return oe()},get visible(){return se()},onOrderChange:n=>{Se([...n])},onVisibleChange:n=>xe({...n})}),null),a(S,s(K,{get each(){return ae.getHeaderGroups()},children:n=>(()=>{const d=Ft();return a(d,s(K,{get each(){return n.headers},children:o=>(()=>{const E=Dt(),O=E.firstChild,C=O.firstChild;return a(O,(()=>{const h=F(()=>!!o.column.getCanGroup());return()=>h()?(()=>{const R=Ot();return Q(R,"click",o.column.getToggleGroupingHandler(),!0),a(R,(()=>{const T=F(()=>!!o.column.getIsGrouped());return()=>T()?s(ge,{size:18}):s($e,{size:18})})()),R})():null})(),C),Q(C,"click",o.column.getToggleSortingHandler(),!0),a(C,()=>H(o.column.columnDef.header,o.getContext())),a(O,()=>({asc:s(Be,{}),desc:s(He,{})})[o.column.getIsSorted()]??null,null),N(h=>{const R=G("flex items-center gap-2"),T=G(o.column.getCanSort()&&"cursor-pointer select-none","flex-1");return R!==h._v$3&&L(O,h._v$3=R),T!==h._v$4&&L(C,h._v$4=T),h},{_v$3:void 0,_v$4:void 0}),E})()})),d})()})),a(J,s(K,{get each(){return ae.getRowModel().rows},children:n=>(()=>{const d=Pt();return a(d,s(K,{get each(){return n.getVisibleCells()},children:o=>(()=>{const E=Tt();return E.$$contextmenu=O=>{O.preventDefault(),typeof o.renderValue()=="string"&&mt(o.renderValue())},a(E,(()=>{const O=F(()=>!!o.getIsGrouped());return()=>O()?(()=>{const C=Mt(),h=C.firstChild,R=h.nextSibling,T=R.nextSibling,De=T.firstChild,re=De.nextSibling;return re.nextSibling,Q(C,"click",n.getToggleExpandedHandler(),!0),a(h,(()=>{const Oe=F(()=>!!n.getIsExpanded());return()=>Oe()?s(ge,{size:18}):s($e,{size:18})})()),a(R,()=>H(o.column.columnDef.cell,o.getContext())),a(T,()=>n.subRows.length,re),N(()=>L(C,G(n.getCanExpand()?"cursor-pointer":"cursor-normal","flex items-center gap-2"))),C})():(()=>{const C=F(()=>!!o.getIsAggregated());return()=>C()?H(o.column.columnDef.aggregatedCell??o.column.columnDef.cell,o.getContext()):(()=>{const h=F(()=>!!o.getIsPlaceholder());return()=>h()?null:H(o.column.columnDef.cell,o.getContext())})()})()})()),E})()})),d})()})),N(n=>{const d=e("search"),o=G(rt(ct()),"table table-zebra relative rounded-none");return d!==n._v$&&Ue(k,"placeholder",n._v$=d),o!==n._v$2&&L(i,n._v$2=o),n},{_v$:void 0,_v$2:void 0}),t})()};Ze(["input","click","contextmenu"]);export{Vt as default};
