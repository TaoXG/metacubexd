if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>i(e,l),u={module:{uri:l},exports:o,require:t};s[l]=Promise.all(n.map((e=>u[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Config-0c0b09fe.js",revision:null},{url:"assets/Connections-770806cc.js",revision:null},{url:"assets/index-16ffeba9.js",revision:null},{url:"assets/index-4112bbec.css",revision:null},{url:"assets/index-4bbd83f8.js",revision:null},{url:"assets/index-c360447f.js",revision:null},{url:"assets/index-eec5962d.js",revision:null},{url:"assets/Logs-e38b26e7.js",revision:null},{url:"assets/Overview-5aab9bf8.js",revision:null},{url:"assets/Proxies-f773c812.js",revision:null},{url:"assets/ProxyProvider-dbc44e0c.js",revision:null},{url:"assets/Rules-b029798b.js",revision:null},{url:"assets/Setup-278a71cb.js",revision:null},{url:"assets/vendor-a04c6957.js",revision:null},{url:"index.html",revision:"92cfd73a2f1d2e4e312e40ae49971ede"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"511189c1ff286c5644d9d2a99ea12b1a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
