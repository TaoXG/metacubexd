if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let u={};const t=e=>i(e,r),o={module:{uri:r},exports:u,require:t};s[r]=Promise.all(n.map((e=>o[e]||t(e)))).then((e=>(l(...e),u)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Config-5ee269e5.js",revision:null},{url:"assets/Connections-c2e6df15.js",revision:null},{url:"assets/enum-cbdb10ae.js",revision:null},{url:"assets/index-0ca94641.css",revision:null},{url:"assets/index-563644f8.js",revision:null},{url:"assets/index-ac54fc13.js",revision:null},{url:"assets/index-f3629057.js",revision:null},{url:"assets/index-f7a91590.js",revision:null},{url:"assets/index-f84e5ee6.js",revision:null},{url:"assets/Logs-fb90f3ec.js",revision:null},{url:"assets/Overview-055f6a83.js",revision:null},{url:"assets/Proxies-1eaeacf5.js",revision:null},{url:"assets/Rules-d465c60a.js",revision:null},{url:"assets/Setup-24305d6e.js",revision:null},{url:"assets/vendor-d5356dcc.js",revision:null},{url:"index.html",revision:"8e522febfcf302b0c14cf165e12e9291"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"511189c1ff286c5644d9d2a99ea12b1a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
