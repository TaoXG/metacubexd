if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const u=s=>i(s,r),t={module:{uri:r},exports:o,require:u};e[r]=Promise.all(n.map((s=>t[s]||u(s)))).then((s=>(l(...s),o)))}}define(["./workbox-56a10583"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Config-7d475629.js",revision:null},{url:"assets/Connections-b08511a3.js",revision:null},{url:"assets/global-bddbc16e.js",revision:null},{url:"assets/index-167ace07.js",revision:null},{url:"assets/index-4b33cc6b.js",revision:null},{url:"assets/index-65e2e70d.css",revision:null},{url:"assets/index-82f7b786.js",revision:null},{url:"assets/index-f24519d7.js",revision:null},{url:"assets/Logs-f8eff2b5.js",revision:null},{url:"assets/Overview-58e7d978.js",revision:null},{url:"assets/Proxies-5c1241f3.js",revision:null},{url:"assets/ProxyProvider-c1278ea6.js",revision:null},{url:"assets/Rules-05ede7d4.js",revision:null},{url:"assets/Setup-2b2b2653.js",revision:null},{url:"assets/vendor-a313f5e6.js",revision:null},{url:"index.html",revision:"778f4009032d0e2424250e48c417acb4"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"511189c1ff286c5644d9d2a99ea12b1a"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
