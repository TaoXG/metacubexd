if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const u=s=>i(s,r),t={module:{uri:r},exports:o,require:u};e[r]=Promise.all(n.map((s=>t[s]||u(s)))).then((s=>(l(...s),o)))}}define(["./workbox-56a10583"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Button-7c6b8c49.js",revision:null},{url:"assets/Config-0889d6bb.js",revision:null},{url:"assets/Connections-a06aa790.js",revision:null},{url:"assets/global-4c759fc4.js",revision:null},{url:"assets/index-253f8914.js",revision:null},{url:"assets/index-2d64f093.js",revision:null},{url:"assets/index-8e617c82.js",revision:null},{url:"assets/index-bc30f105.css",revision:null},{url:"assets/index-e92f51b9.js",revision:null},{url:"assets/lodash-a3a9ebf3.js",revision:null},{url:"assets/Logs-85cd85ac.js",revision:null},{url:"assets/Overview-0e279af1.js",revision:null},{url:"assets/Proxies-35de2019.js",revision:null},{url:"assets/ProxyProvider-861ee496.js",revision:null},{url:"assets/Rules-a7ffa580.js",revision:null},{url:"assets/Setup-50ee98c4.js",revision:null},{url:"assets/vendor-cb4efd1e.js",revision:null},{url:"index.html",revision:"d81de285c6008e2b056883f3dfd60af4"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"511189c1ff286c5644d9d2a99ea12b1a"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
