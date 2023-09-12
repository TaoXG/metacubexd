import{i,c,S as pe,b as S,v as be,f as w,e as K,n as v,a8 as Ie,a9 as Q,Q as X,d as P,q as D,r as T,t as M,aa as _e,ab as $e,ac as Se,P as Ae,F as H,ad as z,ae as q,af as J,ag as ye,ah as ve,H as Ee,p as Oe}from"./vendor-5de92a4b.js";import{c as xe,g as we,a as Fe,b as Te,d as Me,e as Ne,f as G}from"./index-2b452b58.js";import{c as Re,d as ke,f as Ue,g as Pe,h as g,B as N,i as Z,j as De,k as He,m as Ge,t as Ve,n as Ke}from"./index-ae299b11.js";const ze=S("<pre><code>"),Le=S('<dialog id="connections-table-details-modal" class="modal"><div class="modal-box"></div><form method="dialog" class="modal-backdrop"><button>'),je=e=>(()=>{const t=Le(),o=t.firstChild;return i(o,c(pe,{get when(){return e.selectedConnectionID},get children(){const a=ze(),m=a.firstChild;return i(m,()=>JSON.stringify(Re.find(({id:d})=>d===e.selectedConnectionID),null,2)),a}})),t})();var We=async e=>{typeof e=="string"?await navigator.clipboard.writeText(e):await navigator.clipboard.write(e)};/**
 * match-sorter-utils
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const ae={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},Be=Object.keys(ae).join("|"),Ye=new RegExp(Be,"g");function Qe(e){return e.replace(Ye,t=>ae[t])}/**
 * @name match-sorter
 * @license MIT license.
 * @copyright (c) 2099 Kent C. Dodds
 * @author Kent C. Dodds <me@kentcdodds.com> (https://kentcdodds.com)
 */const p={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};function Xe(e,t,o){var a;if(o=o||{},o.threshold=(a=o.threshold)!=null?a:p.MATCHES,!o.accessors){const h=ee(e,t,o);return{rankedValue:e,rank:h,accessorIndex:-1,accessorThreshold:o.threshold,passed:h>=o.threshold}}const m=en(e,o.accessors),d={rankedValue:e,rank:p.NO_MATCH,accessorIndex:-1,accessorThreshold:o.threshold,passed:!1};for(let h=0;h<m.length;h++){const A=m[h];let l=ee(A.itemValue,t,o);const{minRanking:f,maxRanking:$,threshold:I=o.threshold}=A.attributes;l<f&&l>=p.MATCHES?l=f:l>$&&(l=$),l=Math.min(l,$),l>=I&&l>d.rank&&(d.rank=l,d.passed=!0,d.accessorIndex=h,d.accessorThreshold=I,d.rankedValue=A.itemValue)}return d}function ee(e,t,o){return e=ne(e,o),t=ne(t,o),t.length>e.length?p.NO_MATCH:e===t?p.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase(),t=t.toLowerCase(),e===t?p.EQUAL:e.startsWith(t)?p.STARTS_WITH:e.includes(` ${t}`)?p.WORD_STARTS_WITH:e.includes(t)?p.CONTAINS:t.length===1?p.NO_MATCH:qe(e).includes(t)?p.ACRONYM:Je(e,t))}function qe(e){let t="";return e.split(" ").forEach(a=>{a.split("-").forEach(d=>{t+=d.substr(0,1)})}),t}function Je(e,t){let o=0,a=0;function m(l,f,$){for(let I=$,V=f.length;I<V;I++)if(f[I]===l)return o+=1,I+1;return-1}function d(l){const f=1/l,$=o/t.length;return p.MATCHES+$*f}const h=m(t[0],e,0);if(h<0)return p.NO_MATCH;a=h;for(let l=1,f=t.length;l<f;l++){const $=t[l];if(a=m($,e,a),!(a>-1))return p.NO_MATCH}const A=a-h;return d(A)}function ne(e,t){let{keepDiacritics:o}=t;return e=`${e}`,o||(e=Qe(e)),e}function Ze(e,t){let o=t;typeof t=="object"&&(o=t.accessor);const a=o(e);return a==null?[]:Array.isArray(a)?a:[String(a)]}function en(e,t){const o=[];for(let a=0,m=t.length;a<m;a++){const d=t[a],h=nn(d),A=Ze(e,d);for(let l=0,f=A.length;l<f;l++)o.push({itemValue:A[l],attributes:h})}return o}const te={maxRanking:1/0,minRanking:-1/0};function nn(e){return typeof e=="function"?te:{...te,...e}}const oe=S('<div class="flex h-4 items-center">'),tn=S('<div class="flex h-full flex-col gap-2"><div class="flex w-full flex-wrap items-center gap-2"><div class="tabs-boxed tabs gap-2"></div><div class="join flex w-full items-center md:flex-1"><input type="search" class="input join-item input-primary input-sm min-w-0 flex-1 sm:input-md"></div></div><div class="overflow-x-auto whitespace-nowrap rounded-md bg-base-300"><table><thead class="sticky top-0 z-10 h-8"></thead><tbody>'),on=S('<button><span></span><div class="badge badge-sm">'),rn=S("<tr>"),an=S('<th class="bg-base-200"><div><div>'),sn=S('<button class="cursor-pointer">'),ln=S('<tr class="h-8 hover:!bg-primary hover:text-primary-content">'),cn=S("<td>"),dn=S("<button><div></div><div></div><div>(<!>)");var R=function(e){return e.activeConnections="activeConnections",e.closedConnections="closedConnections",e}(R||{});const re=(e,t,o,a)=>{const m=Xe(e.getValue(t),o);return a({itemRank:m}),m.passed},hn=()=>{const[e]=be(),[t,o]=w(R.activeConnections),{activeConnections:a,closedConnections:m,paused:d,setPaused:h}=ke(),[A,l]=w(""),[f,$]=K(w(Ue),{name:"columnVisibility",storage:localStorage}),[I,V]=K(w(Pe),{name:"columnOrder",storage:localStorage}),[L,se]=w(),le=v(()=>[{header:()=>e("details"),enableGrouping:!1,enableSorting:!1,enableColumnFilter:!1,enableGlobalFilter:!1,accessorKey:g.Details,cell:({row:n})=>(()=>{const u=oe();return i(u,c(N,{class:"btn-circle btn-xs",onClick:()=>{se(n.original.id);const F=document.querySelector("#connections-table-details-modal");F==null||F.showModal()},get children(){return c(Ie,{size:"16"})}})),u})()},{header:()=>e("close"),enableGrouping:!1,enableSorting:!1,enableColumnFilter:!1,enableGlobalFilter:!1,accessorKey:g.Close,cell:({row:n})=>(()=>{const u=oe();return i(u,c(N,{class:"btn-circle btn-xs",onClick:()=>Z(n.original.id),get children(){return c(Q,{size:"16"})}})),u})()},{header:()=>e("ID"),enableGrouping:!1,accessorKey:g.ID,accessorFn:n=>n.id},{header:()=>e("type"),accessorKey:g.Type,accessorFn:n=>`${n.metadata.type}(${n.metadata.network})`},{header:()=>e("process"),accessorKey:g.Process,accessorFn:n=>n.metadata.process||n.metadata.processPath.replace(/^.*[/\\](.*)$/,"$1")||"-"},{header:()=>e("host"),accessorKey:g.Host,accessorFn:n=>`${n.metadata.host?n.metadata.host:n.metadata.destinationIP}:${n.metadata.destinationPort}`},{header:()=>e("rules"),accessorKey:g.Rule,accessorFn:n=>n.rulePayload?`${n.rule} :: ${n.rulePayload}`:n.rule},{header:()=>e("chains"),accessorKey:g.Chains,accessorFn:n=>n.chains.slice().reverse().join(" :: ")},{header:()=>e("connectTime"),enableGrouping:!1,accessorKey:g.ConnectTime,accessorFn:n=>De(n.start),sortingFn:(n,u)=>X(n.original.start).valueOf()-X(u.original.start).valueOf()},{header:()=>e("dlSpeed"),enableGrouping:!1,accessorKey:g.DlSpeed,accessorFn:n=>`${P(n.downloadSpeed)}/s`,sortingFn:(n,u)=>n.original.downloadSpeed-u.original.downloadSpeed},{header:()=>e("ulSpeed"),enableGrouping:!1,accessorKey:g.ULSpeed,accessorFn:n=>`${P(n.uploadSpeed)}/s`,sortingFn:(n,u)=>n.original.uploadSpeed-u.original.uploadSpeed},{header:()=>e("dl"),enableGrouping:!1,accessorKey:g.Download,accessorFn:n=>P(n.download),sortingFn:(n,u)=>n.original.download-u.original.download},{header:()=>e("ul"),enableGrouping:!1,accessorKey:g.Upload,accessorFn:n=>P(n.upload),sortingFn:(n,u)=>n.original.upload-u.original.upload},{header:()=>e("sourceIP"),accessorKey:g.SourceIP,accessorFn:n=>n.metadata.sourceIP},{header:()=>e("sourcePort"),accessorKey:g.SourcePort,accessorFn:n=>n.metadata.sourcePort},{header:()=>e("destination"),accessorKey:g.Destination,accessorFn:n=>n.metadata.remoteDestination||n.metadata.destinationIP||n.metadata.host}]),[ce,ie]=w([]),[de,ue]=K(w([{id:g.ConnectTime,desc:!0}]),{name:"connectionsTableSorting",storage:localStorage}),k=xe({filterFns:{fuzzy:re},state:{get columnOrder(){return I()},get grouping(){return ce()},get sorting(){return de()},get columnVisibility(){return f()},get globalFilter(){return A()},get columnFilters(){return[]}},get data(){return t()===R.activeConnections?a():m()},sortDescFirst:!0,enableHiding:!0,columns:le(),onGlobalFilterChange:l,globalFilterFn:re,onGroupingChange:ie,onSortingChange:ue,getFilteredRowModel:we(),getSortedRowModel:Fe(),getExpandedRowModel:Te(),getGroupedRowModel:Me(),getCoreRowModel:Ne()}),ge=v(()=>[{type:R.activeConnections,name:e("activeConnections"),count:a().length},{type:R.closedConnections,name:e("closedConnections"),count:m().length}]);return(()=>{const n=tn(),u=n.firstChild,F=u.firstChild,U=F.nextSibling,j=U.firstChild,me=u.nextSibling,W=me.firstChild,B=W.firstChild,he=B.nextSibling;return i(F,c(_e,{get each(){return ge()},children:r=>(()=>{const b=on(),s=b.firstChild,E=s.nextSibling;return b.$$click=()=>o(r().type),i(s,()=>r().name),i(E,()=>r().count),D(()=>T(b,M(t()===r().type&&"tab-active","tab tab-sm gap-2 sm:tab-md"))),b})()})),j.$$input=r=>l(r.target.value),i(U,c(N,{class:"join-item btn-sm sm:btn-md",onClick:()=>h(r=>!r),get children(){return v(()=>!!d())()?c($e,{}):c(Se,{})}}),null),i(U,c(N,{class:"join-item btn-sm sm:btn-md",onClick:()=>{k.getState().globalFilter?k.getFilteredRowModel().rows.forEach(({id:r})=>Z(r)):He()},get children(){return c(Q,{})}}),null),i(U,c(N,{class:"btn join-item btn-sm sm:btn-md",onClick:()=>{const r=document.querySelector("#connections-table-ordering-modal");r==null||r.showModal()},get children(){return c(Ae,{})}}),null),i(B,c(H,{get each(){return k.getHeaderGroups()},children:r=>(()=>{const b=rn();return i(b,c(H,{get each(){return r.headers},children:s=>(()=>{const E=an(),O=E.firstChild,C=O.firstChild;return i(O,(()=>{const _=v(()=>!!s.column.getCanGroup());return()=>_()?(()=>{const y=sn();return z(y,"click",s.column.getToggleGroupingHandler(),!0),i(y,(()=>{const x=v(()=>!!s.column.getIsGrouped());return()=>x()?c(q,{size:18}):c(J,{size:18})})()),y})():null})(),C),z(C,"click",s.column.getToggleSortingHandler(),!0),i(C,()=>G(s.column.columnDef.header,s.getContext())),i(O,()=>({asc:c(ye,{}),desc:c(ve,{})})[s.column.getIsSorted()]??null,null),D(_=>{const y=M("flex items-center gap-2"),x=M(s.column.getCanSort()&&"cursor-pointer select-none","flex-1");return y!==_._v$3&&T(O,_._v$3=y),x!==_._v$4&&T(C,_._v$4=x),_},{_v$3:void 0,_v$4:void 0}),E})()})),b})()})),i(he,c(H,{get each(){return k.getRowModel().rows},children:r=>(()=>{const b=ln();return i(b,c(H,{get each(){return r.getVisibleCells()},children:s=>(()=>{const E=cn();return E.$$contextmenu=O=>{O.preventDefault();const C=s.renderValue();C&&We(C).catch(()=>{})},i(E,(()=>{const O=v(()=>!!s.getIsGrouped());return()=>O()?(()=>{const C=dn(),_=C.firstChild,y=_.nextSibling,x=y.nextSibling,fe=x.firstChild,Y=fe.nextSibling;return Y.nextSibling,z(C,"click",r.getToggleExpandedHandler(),!0),i(_,(()=>{const Ce=v(()=>!!r.getIsExpanded());return()=>Ce()?c(q,{size:18}):c(J,{size:18})})()),i(y,()=>G(s.column.columnDef.cell,s.getContext())),i(x,()=>r.subRows.length,Y),D(()=>T(C,M(r.getCanExpand()?"cursor-pointer":"cursor-normal","flex items-center gap-2"))),C})():(()=>{const C=v(()=>!!s.getIsAggregated());return()=>C()?G(s.column.columnDef.aggregatedCell??s.column.columnDef.cell,s.getContext()):(()=>{const _=v(()=>!!s.getIsPlaceholder());return()=>_()?null:G(s.column.columnDef.cell,s.getContext())})()})()})()),E})()})),b})()})),i(n,c(Ge,{get order(){return I()},get visible(){return f()},onOrderChange:r=>V(r),onVisibleChange:r=>$({...r})}),null),i(n,c(je,{get selectedConnectionID(){return L()}}),null),D(r=>{const b=e("search"),s=M(Ve(Ke()),"table table-zebra relative rounded-none");return b!==r._v$&&Ee(j,"placeholder",r._v$=b),s!==r._v$2&&T(W,r._v$2=s),r},{_v$:void 0,_v$2:void 0}),n})()};Oe(["input","click","contextmenu"]);export{hn as default};
