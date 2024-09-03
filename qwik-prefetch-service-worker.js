(()=>{const n=Number.MAX_SAFE_INTEGER>>>1;function e(e,i){const[o,a]=s(i),c=e.t.find((n=>o===n.i));if(c)return e.o("intercepting",i.pathname),t(e,c,[a],n).then((()=>async function(n,e){const t=n.u.find((n=>n.$.pathname===e.pathname));return t?t.l:(n.o("CACHE HIT",e.pathname),(await n.p).match(e))}(e,i)))}async function t(e,t,o,s){const c=new Set;o.forEach((n=>a(t.h,c,n))),await Promise.all(Array.from(c).map((i=>async function(e,t,i){let o=e.u.find((n=>n.$.pathname===t.pathname));const a=i>=n?"direct":"prefetch";if(o){const n=o.m?"fetching":"waiting";o.C<i?(e.o("queue update priority",n,t.pathname),o.C=i):e.o("already in queue",a,n,t.pathname)}else await(await e.p).match(t)||(e.o("enqueue",a,t.pathname),o={C:i,$:t,R:null,l:null,m:!1},o.l=new Promise((n=>o.R=n)),e.u.push(o));return o}(e,new URL(t.i+i,e.$),s)))),i(e)}function i(e){e.u.sort(o);let t=0;for(const o of e.u)if(o.m)t++;else if(t<e.H||o.C>=n){o.m=!0,t++;const a=o.C>=n?"FETCH (CACHE MISS)":"FETCH";e.o(a,o.$.pathname),e.S(o.$).then((async n=>{200===n.status&&(e.o("CACHED",o.$.pathname),await(await e.p).put(o.$,n.clone())),o.R(n)})).finally((()=>{e.o("FETCH DONE",o.$.pathname),e.u.splice(e.u.indexOf(o),1),i(e)}))}}function o(n,e){return e.C-n.C}function a(n,e,t){if(!e.has(t)){e.add(t);let i=n.findIndex((n=>n===t));if(-1!==i)for(;"number"==typeof n[++i];)a(n,e,n[n[i]])}return e}function s(n){const e=new URL(n).pathname,t=e.lastIndexOf("/");return[e.substring(0,t+1),e.substring(t+1)]}const c=(...n)=>{console.log("⚙️ Prefetch SW:",...n)};async function r(n,e,t,i){const o=n.t.findIndex((n=>n==n));if(-1!==o&&n.t.splice(o,1),n.o("adding base:",e),n.t.push({i:e,h:t}),i){const i=new Set(t.filter((n=>"string"==typeof n)));for(const t of await(await n.p).keys()){const[o,a]=s(new URL(t.url)),c=[];o!==e||i.has(a)||(n.o("deleting",t.url),c.push((await n.p).delete(t))),await Promise.all(c)}}}function u(n,e,i){const o=n.t.find((n=>e===n.i));o?t(n,o,i,0):console.error(`Base path not found: ${e}, ignoring prefetch.`)}function f(n){if(!n.U&&n.L.length){const t=n.L.shift();n.U=(async(n,t)=>{const i=t[0];n.o("received message:",i,t[1],t.slice(2)),"graph"===i?await r(n,t[1],t.slice(2),!0):"graph-url"===i?await async function(n,t,i){await r(n,t,[],!1);const o=await e(n,new URL(t+i,n.$));if(o&&200===o.status){const e=await o.json();e.push(i),await r(n,t,e,!0)}}(n,t[1],t[2]):"prefetch"===i?await u(n,t[1],t.slice(2)):"prefetch-all"===i?await function(n,e){const t=n.t.find((n=>e===n.i));t?u(n,e,t.h.filter((n=>"string"==typeof n))):console.error(`Base path not found: ${e}, ignoring prefetch.`)}(n,t[1]):"ping"===i?c("ping"):"verbose"===i?(n.o=c)("mode: verbose"):console.error("UNKNOWN MESSAGE:",t)})(n,t).then((()=>{n.U=null,f(n)}))}}(n=>{const t={S:n.fetch.bind(n),u:[],t:[],p:null,L:[],U:null,H:10,$:new URL(n.location.href),o:()=>{}};n.addEventListener("fetch",(async n=>{const i=n.request;if("GET"===i.method){const o=e(t,new URL(i.url));o&&n.respondWith(o)}})),n.addEventListener("message",(n=>{t.L.push(n.data),f(t)})),n.addEventListener("install",(()=>n.skipWaiting())),n.addEventListener("activate",(async e=>{e.waitUntil(n.clients.claim()),t.p=n.caches.open("QwikBundles")}))})(globalThis)})();