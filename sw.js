if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>i(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(n.map((s=>o[s]||t(s)))).then((s=>(l(...s),u)))}}define(["./workbox-56a10583"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Config-19fc8d18.js",revision:null},{url:"assets/Connections-15903975.js",revision:null},{url:"assets/enum-cbdb10ae.js",revision:null},{url:"assets/index-2de8f944.css",revision:null},{url:"assets/index-563644f8.js",revision:null},{url:"assets/index-ac54fc13.js",revision:null},{url:"assets/index-c8ca7110.js",revision:null},{url:"assets/index-f3629057.js",revision:null},{url:"assets/index-f7a91590.js",revision:null},{url:"assets/Logs-142c1fa0.js",revision:null},{url:"assets/Overview-35ef2374.js",revision:null},{url:"assets/Proxies-d8e40fcf.js",revision:null},{url:"assets/Rules-66ff7319.js",revision:null},{url:"assets/Setup-d4e250a7.js",revision:null},{url:"assets/vendor-d5356dcc.js",revision:null},{url:"index.html",revision:"50bc7d45f23473eec64463fe0f2a5756"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"511189c1ff286c5644d9d2a99ea12b1a"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
