if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>n(e,o),a={module:{uri:o},exports:c,require:t};i[o]=Promise.all(s.map((e=>a[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-10099431.js",revision:null},{url:"assets/index-702933b0.css",revision:null},{url:"icon.png",revision:"fa5089d0d9d7814986c072cadb071caa"},{url:"icons/apple-icon-180.png",revision:"82178e7202f81690740c91a0ba1dfb34"},{url:"icons/manifest-icon-192.maskable.png",revision:"103dba81afa1480ed77aae574da02600"},{url:"icons/manifest-icon-512.maskable.png",revision:"281cd08df1541af0917cbd04da7cc04e"},{url:"index.html",revision:"5b3a6efd635af91f9c4ac4f29d09772e"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.webmanifest",revision:"5b9d9041777f11571594be5422cf1ac4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
