if(!self.define){let e,s={};const t=(t,i)=>(t=new URL(t+".js",i).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const c=e=>t(e,n),f={module:{uri:n},exports:o,require:c};s[n]=Promise.all(i.map((e=>f[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-cd6972a6"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.js",revision:"a0d967cc3f136a6b1f82a0ac9719a466"},{url:"index.html",revision:"f7f98e98bc89df1899d18f44bab0061d"},{url:"style.css",revision:"87f0159239bd1f9e2b6cd73fe66e4479"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map