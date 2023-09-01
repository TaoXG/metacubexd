import{i as b,b as T,S as ne,f as re,t as Q,g as z,d as ae,h as E,c as K,O as pe,s as be,F as se,v as _e,a5 as ce,a6 as we}from"./vendor-d5356dcc.js";import{I as Me}from"./index-f3629057.js";import{D as Z}from"./enum-cbdb10ae.js";import{u as Se}from"./index-097393f3.js";import{b as ue}from"./index-ac54fc13.js";const Ce=E('<div><div class="collapse-title pr-4 text-xl font-medium after:!top-8"></div><div>'),De=r=>{const{title:p,content:i,onCollapse:h}=r,y=()=>{const _="collapse-open",d="collapse-close";return r.isOpen?_:d},S=()=>{const _="opacity-100",d="opacity-0";return r.isOpen?_:d};return(()=>{const _=Ce(),d=_.firstChild,o=d.nextSibling;return d.$$click=()=>h(!r.isOpen),b(d,p),b(o,T(ne,{get when(){return r.isOpen},children:i})),re(a=>{const f=Q(y(),"collapse collapse-arrow overflow-visible border-secondary bg-base-200"),m=Q(S(),"collapse-content grid auto-rows-min grid-cols-2 gap-2 transition-opacity duration-1000 lg:grid-cols-3 xl:grid-cols-4");return f!==a._v$&&z(_,a._v$=f),m!==a._v$2&&z(o,a._v$2=m),a},{_v$:void 0,_v$2:void 0}),_})()},de=De;ae(["click"]);const[Ne,Oe]=K([]),[Te,Pe]=K([]),[te,fe]=K({});function ie(){const r=Se(),p=d=>{d.forEach(o=>{var a;fe({...te(),[o.name]:{udp:o.udp,type:o.type,delay:((a=o.history.at(-1))==null?void 0:a.delay)??0,name:o.name}})})},i=async()=>{const{providers:d}=await r.get("providers/proxies").json();Object.values(d).forEach(f=>{p(f.proxies)}),Pe(Object.values(d).filter(f=>f.name!=="default"&&f.vehicleType!=="Compatible"));const{proxies:o}=await r.get("proxies").json(),a=[...o.GLOBAL.all??[],"GLOBAL"];p(Object.values(o)),Oe(Object.values(o).filter(f=>{var m;return(m=f.all)==null?void 0:m.length}).sort((f,m)=>a.indexOf(f.name)-a.indexOf(m.name)))};return{proxies:Ne,proxyProviders:Te,delayTestByProxyGroupName:async d=>{const o=await r.get(`group/${d}/delay`,{searchParams:{url:"https://www.gstatic.com/generate_204",timeout:2e3}}).json();Object.entries(o).forEach(([a,f])=>{fe({...te(),[a]:{...te()[a],delay:f}})})},proxyNodeMap:te,updateProxy:i,setProxyGroupByProxyName:async(d,o)=>{await r.put(`proxies/${d.name}`,{body:JSON.stringify({name:o})}),await i()},updateProviderByProviderName:async d=>{await r.put(`providers/proxies/${d}`),await i()},healthCheckByProviderName:async d=>{await r.get(`providers/proxies/${d}/healthcheck`,{timeout:30*1e3}),await i()}}}const ke=E("<span>ms"),Le=E('<div><div class="truncate text-left"></div><div class="flex items-center justify-between gap-1"><div></div><div class="text-xs">'),je=r=>{const{proxyName:p,isSelected:i,onClick:h}=r,{proxyNodeMap:y}=ie(),S=pe(()=>y()[p]),_=o=>{if(typeof o!="number"||o===Z.NOT_CONNECTED)return"";let a="text-success";return o>Z.HIGH?a="text-error":o>Z.MEDIUM&&(a="text-warning"),(()=>{const f=ke(),m=f.firstChild;return z(f,a),b(f,o,m),f})()},d=(o="")=>{const a=o.toLowerCase();return a.includes("shadowsocks")?a.replace("shadowsocks","ss"):a};return(()=>{const o=Le(),a=o.firstChild,f=a.nextSibling,m=f.firstChild,D=m.nextSibling;return o.$$click=()=>h==null?void 0:h(),be(o,"data-tip",p),b(a,p),b(m,()=>{var $;return d(($=S())==null?void 0:$.type)},null),b(m,()=>{var $;return(($=S())==null?void 0:$.udp)&&" :: udp"},null),b(D,()=>{var $;return _(($=S())==null?void 0:$.delay)}),re($=>{const w=Q("card card-bordered tooltip tooltip-bottom card-compact flex gap-1 border-neutral-focus bg-neutral p-3 text-neutral-content",i&&"border-primary bg-primary-content text-primary",h&&"cursor-pointer"),H=Q("truncate text-xs text-slate-500",i&&"text-primary");return w!==$._v$&&z(o,$._v$=w),H!==$._v$2&&z(m,$._v$2=H),$},{_v$:void 0,_v$2:void 0}),o})()};ae(["click"]);const he=r=>{const[p,i]=K(30),h=pe(()=>r.proxies.slice(0,p()));return T(Me,{get each(){return h()},get hasMore(){return h().length<r.proxies.length},next:()=>i(p()+30),children:y=>T(je,{proxyName:y,get isSelected(){return r.now===y}})})},Be=E("<div>"),Ee=E('<div class="flex w-full flex-wrap">'),Ye=r=>{let p=r.selected?"bg-white border-4 border-success":"bg-success";return typeof r.delay!="number"||r.delay===Z.NOT_CONNECTED?p=r.selected?"bg-white border-4 border-neutral":"bg-neutral":r.delay>Z.HIGH?p=r.selected?"bg-white border-4 border-error":"bg-error":r.delay>Z.MEDIUM&&(p=r.selected?"bg-white border-4 border-warning":"bg-warning"),(()=>{const i=Be();return re(()=>z(i,Q("m-1 h-4 w-4 rounded-full",p))),i})()},me=r=>{const{proxyNodeMap:p}=ie();return(()=>{const i=Ee();return b(i,T(se,{get each(){return r.proxyNameList.map(h=>p()[h])},children:h=>{const y=h==null?void 0:h.delay,S=r.now===h.name;return T(Ye,{delay:y,selected:S})}})),i})()};var ge=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ve(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ye={exports:{}};(function(r,p){(function(i,h){r.exports=h()})(ge,function(){var i=1e3,h=6e4,y=36e5,S="millisecond",_="second",d="minute",o="hour",a="day",f="week",m="month",D="quarter",$="year",w="date",H="Invalid Date",O=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,P=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,U={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(l){var n=["th","st","nd","rd"],e=l%100;return"["+l+(n[(e-20)%10]||n[e]||n[0])+"]"}},k=function(l,n,e){var s=String(l);return!s||s.length>=n?l:""+Array(n+1-s.length).join(e)+l},g={s:k,z:function(l){var n=-l.utcOffset(),e=Math.abs(n),s=Math.floor(e/60),t=e%60;return(n<=0?"+":"-")+k(s,2,"0")+":"+k(t,2,"0")},m:function l(n,e){if(n.date()<e.date())return-l(e,n);var s=12*(e.year()-n.year())+(e.month()-n.month()),t=n.clone().add(s,m),c=e-t<0,u=n.clone().add(s+(c?-1:1),m);return+(-(s+(e-t)/(c?t-u:u-t))||0)},a:function(l){return l<0?Math.ceil(l)||0:Math.floor(l)},p:function(l){return{M:m,y:$,w:f,d:a,D:w,h:o,m:d,s:_,ms:S,Q:D}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(l){return l===void 0}},M="en",L={};L[M]=U;var A=function(l){return l instanceof X},G=function l(n,e,s){var t;if(!n)return M;if(typeof n=="string"){var c=n.toLowerCase();L[c]&&(t=c),e&&(L[c]=e,t=c);var u=n.split("-");if(!t&&u.length>1)return l(u[0])}else{var x=n.name;L[x]=n,t=x}return!s&&t&&(M=t),t||!s&&M},C=function(l,n){if(A(l))return l.clone();var e=typeof n=="object"?n:{};return e.date=l,e.args=arguments,new X(e)},v=g;v.l=G,v.i=A,v.w=function(l,n){return C(l,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var X=function(){function l(e){this.$L=G(e.locale,null,!0),this.parse(e)}var n=l.prototype;return n.parse=function(e){this.$d=function(s){var t=s.date,c=s.utc;if(t===null)return new Date(NaN);if(v.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var u=t.match(O);if(u){var x=u[2]-1||0,N=(u[7]||"0").substring(0,3);return c?new Date(Date.UTC(u[1],x,u[3]||1,u[4]||0,u[5]||0,u[6]||0,N)):new Date(u[1],x,u[3]||1,u[4]||0,u[5]||0,u[6]||0,N)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},n.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},n.$utils=function(){return v},n.isValid=function(){return this.$d.toString()!==H},n.isSame=function(e,s){var t=C(e);return this.startOf(s)<=t&&t<=this.endOf(s)},n.isAfter=function(e,s){return C(e)<this.startOf(s)},n.isBefore=function(e,s){return this.endOf(s)<C(e)},n.$g=function(e,s,t){return v.u(e)?this[s]:this.set(t,e)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(e,s){var t=this,c=!!v.u(s)||s,u=v.p(e),x=function(J,Y){var F=v.w(t.$u?Date.UTC(t.$y,Y,J):new Date(t.$y,Y,J),t);return c?F:F.endOf(a)},N=function(J,Y){return v.w(t.toDate()[J].apply(t.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(Y)),t)},j=this.$W,B=this.$M,I=this.$D,R="set"+(this.$u?"UTC":"");switch(u){case $:return c?x(1,0):x(31,11);case m:return c?x(1,B):x(0,B+1);case f:var W=this.$locale().weekStart||0,q=(j<W?j+7:j)-W;return x(c?I-q:I+(6-q),B);case a:case w:return N(R+"Hours",0);case o:return N(R+"Minutes",1);case d:return N(R+"Seconds",2);case _:return N(R+"Milliseconds",3);default:return this.clone()}},n.endOf=function(e){return this.startOf(e,!1)},n.$set=function(e,s){var t,c=v.p(e),u="set"+(this.$u?"UTC":""),x=(t={},t[a]=u+"Date",t[w]=u+"Date",t[m]=u+"Month",t[$]=u+"FullYear",t[o]=u+"Hours",t[d]=u+"Minutes",t[_]=u+"Seconds",t[S]=u+"Milliseconds",t)[c],N=c===a?this.$D+(s-this.$W):s;if(c===m||c===$){var j=this.clone().set(w,1);j.$d[x](N),j.init(),this.$d=j.set(w,Math.min(this.$D,j.daysInMonth())).$d}else x&&this.$d[x](N);return this.init(),this},n.set=function(e,s){return this.clone().$set(e,s)},n.get=function(e){return this[v.p(e)]()},n.add=function(e,s){var t,c=this;e=Number(e);var u=v.p(s),x=function(B){var I=C(c);return v.w(I.date(I.date()+Math.round(B*e)),c)};if(u===m)return this.set(m,this.$M+e);if(u===$)return this.set($,this.$y+e);if(u===a)return x(1);if(u===f)return x(7);var N=(t={},t[d]=h,t[o]=y,t[_]=i,t)[u]||1,j=this.$d.getTime()+e*N;return v.w(j,this)},n.subtract=function(e,s){return this.add(-1*e,s)},n.format=function(e){var s=this,t=this.$locale();if(!this.isValid())return t.invalidDate||H;var c=e||"YYYY-MM-DDTHH:mm:ssZ",u=v.z(this),x=this.$H,N=this.$m,j=this.$M,B=t.weekdays,I=t.months,R=t.meridiem,W=function(Y,F,V,ee){return Y&&(Y[F]||Y(s,c))||V[F].slice(0,ee)},q=function(Y){return v.s(x%12||12,Y,"0")},J=R||function(Y,F,V){var ee=Y<12?"AM":"PM";return V?ee.toLowerCase():ee};return c.replace(P,function(Y,F){return F||function(V){switch(V){case"YY":return String(s.$y).slice(-2);case"YYYY":return v.s(s.$y,4,"0");case"M":return j+1;case"MM":return v.s(j+1,2,"0");case"MMM":return W(t.monthsShort,j,I,3);case"MMMM":return W(I,j);case"D":return s.$D;case"DD":return v.s(s.$D,2,"0");case"d":return String(s.$W);case"dd":return W(t.weekdaysMin,s.$W,B,2);case"ddd":return W(t.weekdaysShort,s.$W,B,3);case"dddd":return B[s.$W];case"H":return String(x);case"HH":return v.s(x,2,"0");case"h":return q(1);case"hh":return q(2);case"a":return J(x,N,!0);case"A":return J(x,N,!1);case"m":return String(N);case"mm":return v.s(N,2,"0");case"s":return String(s.$s);case"ss":return v.s(s.$s,2,"0");case"SSS":return v.s(s.$ms,3,"0");case"Z":return u}return null}(Y)||u.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(e,s,t){var c,u=this,x=v.p(s),N=C(e),j=(N.utcOffset()-this.utcOffset())*h,B=this-N,I=function(){return v.m(u,N)};switch(x){case $:c=I()/12;break;case m:c=I();break;case D:c=I()/3;break;case f:c=(B-j)/6048e5;break;case a:c=(B-j)/864e5;break;case o:c=B/y;break;case d:c=B/h;break;case _:c=B/i;break;default:c=B}return t?c:v.a(c)},n.daysInMonth=function(){return this.endOf(m).$D},n.$locale=function(){return L[this.$L]},n.locale=function(e,s){if(!e)return this.$L;var t=this.clone(),c=G(e,s,!0);return c&&(t.$L=c),t},n.clone=function(){return v.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},l}(),le=X.prototype;return C.prototype=le,[["$ms",S],["$s",_],["$m",d],["$H",o],["$W",a],["$M",m],["$y",$],["$D",w]].forEach(function(l){le[l[1]]=function(n){return this.$g(n,l[0],l[1])}}),C.extend=function(l,n){return l.$i||(l(n,X,C),l.$i=!0),C},C.locale=G,C.isDayjs=A,C.unix=function(l){return C(1e3*l)},C.en=L[M],C.Ls=L,C.p={},C})})(ye);var He=ye.exports;const oe=ve(He),Ie=E('<progress class="progress" max="100">'),Ae=E('<div class="text-sm text-slate-500"> / <!> ( <!>% )'),Ge=E('<div class="text-sm text-slate-500">Expire: <!> '),Ue=r=>{const p=ue(r.Total),i=ue(r.Download+r.Upload),h=((r.Download+r.Upload)/r.Total*100).toFixed(2);return{total:p,used:i,percentage:h,expireStr:()=>r.Expire===0?"Null":oe(r.Expire*1e3).format("YYYY-MM-DD")}},Fe=r=>{if(!r.subscriptionInfo)return;const p=Ue(r.subscriptionInfo);return[(()=>{const i=Ie();return re(()=>i.value=p.percentage),i})(),(()=>{const i=Ae(),h=i.firstChild,y=h.nextSibling,S=y.nextSibling,_=S.nextSibling;return _.nextSibling,b(i,()=>`${p.used}`,h),b(i,()=>`${p.total}`,y),b(i,()=>p.percentage,_),i})(),(()=>{const i=Ge(),h=i.firstChild,y=h.nextSibling;return y.nextSibling,b(i,()=>p.expireStr(),y),i})()]};var xe={exports:{}};(function(r,p){(function(i,h){r.exports=h()})(ge,function(){return function(i,h,y){i=i||{};var S=h.prototype,_={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function d(a,f,m,D){return S.fromToBase(a,f,m,D)}y.en.relativeTime=_,S.fromToBase=function(a,f,m,D,$){for(var w,H,O,P=m.$locale().relativeTime||_,U=i.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],k=U.length,g=0;g<k;g+=1){var M=U[g];M.d&&(w=D?y(a).diff(m,M.d,!0):m.diff(a,M.d,!0));var L=(i.rounding||Math.round)(Math.abs(w));if(O=w>0,L<=M.r||!M.r){L<=1&&g>0&&(M=U[g-1]);var A=P[M.l];$&&(L=$(""+L)),H=typeof A=="string"?A.replace("%d",L):A(L,f,M.l,O);break}}if(f)return H;var G=O?P.future:P.past;return typeof G=="function"?G(H):G.replace("%s",H)},S.to=function(a,f){return d(a,f,this,!0)},S.from=function(a,f){return d(a,f,this)};var o=function(a){return a.$u?y.utc():y()};S.toNow=function(a){return this.to(o(this),a)},S.fromNow=function(a){return this.from(o(this),a)}}})})(xe);var We=xe.exports;const Je=ve(We);oe.extend(Je);function Re(r){return oe(r).fromNow()}const ze=E('<h1 class="pb-4 text-lg font-semibold">Proxy Providers'),Ze=E('<div class="grid grid-cols-1 gap-2 sm:grid-cols-2">'),qe=E('<div class="flex flex-col gap-4"><div><h1 class="pb-4 text-lg font-semibold">Proxies</h1><div class="grid grid-cols-1 gap-2 sm:grid-cols-2">'),Ve=E('<div class="mr-10 flex items-center justify-between"><span></span><button class="btn btn-circle btn-sm">'),Qe=E('<div class="text-sm text-slate-500"> :: '),$e=E("<div>"),Ke=E('<div class="mr-10 flex items-center justify-between"><span></span><div><button class="btn btn-circle btn-sm mr-2"></button><button class="btn btn-circle btn-sm">'),Xe=E('<div class="text-sm text-slate-500"> :: Updated '),at=()=>{const{proxies:r,proxyProviders:p,updateProxy:i,setProxyGroupByProxyName:h,delayTestByProxyGroupName:y,updateProviderByProviderName:S,healthCheckByProviderName:_}=ie(),[d,o]=K({});_e(async()=>{await i()});const a=async(D,$)=>{const w=D.target;w.classList.add("animate-pulse"),D.stopPropagation(),await y($),w.classList.remove("animate-pulse")},f=async(D,$)=>{const w=D.target;w.classList.add("animate-pulse"),D.stopPropagation(),await _($),w.classList.remove("animate-pulse")},m=async(D,$)=>{const w=D.target;w.classList.add("animate-spin"),D.stopPropagation(),await S($),w.classList.remove("animate-spin")};return(()=>{const D=qe(),$=D.firstChild,w=$.firstChild,H=w.nextSibling;return b(H,T(se,{get each(){return r()},children:O=>{const P=[(()=>{const k=Ve(),g=k.firstChild,M=g.nextSibling;return b(g,()=>O.name),M.$$click=L=>a(L,O.name),b(M,T(ce,{})),k})(),(()=>{const k=Qe(),g=k.firstChild;return b(k,()=>O.type,g),b(k,()=>O.now,null),k})(),T(ne,{get when(){return!d()[`group-${O.name}`]},get children(){return T(me,{get proxyNameList(){return O.all??[]},get now(){return O.now}})}})],U=T(he,{get proxies(){return O.all},get now(){return O.now}});return(()=>{const k=$e();return b(k,T(de,{get isOpen(){return d()[`group-${O.name}`]},title:P,content:U,onCollapse:g=>o({...d(),[`group-${O.name}`]:g})})),k})()}})),b(D,T(ne,{get when(){return p().length>0},get children(){return[ze(),(()=>{const O=Ze();return b(O,T(se,{get each(){return p()},children:P=>{const U=[(()=>{const g=Ke(),M=g.firstChild,L=M.nextSibling,A=L.firstChild,G=A.nextSibling;return b(M,()=>P.name),A.$$click=C=>m(C,P.name),b(A,T(we,{})),G.$$click=C=>f(C,P.name),b(G,T(ce,{})),g})(),T(Fe,{get subscriptionInfo(){return P.subscriptionInfo}}),(()=>{const g=Xe(),M=g.firstChild;return b(g,()=>P.vehicleType,M),b(g,()=>Re(P.updatedAt),null),g})(),T(ne,{get when(){return!d()[`provider-${P.name}`]},get children(){return T(me,{get proxyNameList(){return P.proxies.map(g=>g.name)??[]}})}})],k=T(he,{get proxies(){return P.proxies.map(g=>g.name)}});return(()=>{const g=$e();return b(g,T(de,{get isOpen(){return d()[`provider-${P.name}`]},title:U,content:k,onCollapse:M=>o({...d(),[`provider-${P.name}`]:M})})),g})()}})),O})()]}}),null),D})()};ae(["click"]);export{at as default};
