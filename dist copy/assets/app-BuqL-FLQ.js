const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./home-CRNFlK6L.js","./authGuard-DDO8JLiG.js","./headers-ahJeJWcP.js","./create-COmdal_b.js","./auth-DcpJDUdk.js","./login-D_1ifuk3.js","./register-C-rshvmx.js","./post-C59-o1Jh.js","./postEdit-BOEXUO_o.js","./postCreate-DgVVLxVJ.js","./profile-L_L6sM9k.js"])))=>i.map(i=>d[i]);
(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const E="modulepreload",w=function(c,s){return new URL(c,s).href},p={},n=function(s,l,u){let e=Promise.resolve();if(l&&l.length>0){const r=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),_=o?.nonce||o?.getAttribute("nonce");e=Promise.allSettled(l.map(i=>{if(i=w(i,u),i in p)return;p[i]=!0;const m=i.endsWith(".css"),h=m?'[rel="stylesheet"]':"";if(!!u)for(let d=r.length-1;d>=0;d--){const f=r[d];if(f.href===i&&(!m||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${h}`))return;const a=document.createElement("link");if(a.rel=m?"stylesheet":E,m||(a.as="script"),a.crossOrigin="",a.href=i,_&&a.setAttribute("nonce",_),document.head.appendChild(a),m)return new Promise((d,f)=>{a.addEventListener("load",d),a.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})}))}function t(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return e.then(r=>{for(const o of r||[])o.status==="rejected"&&t(o.reason);return s().catch(t)})};async function v(c=window.location.pathname){switch(c){case"/":await n(()=>import("./home-CRNFlK6L.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);break;case"/auth/":await n(()=>import("./auth-DcpJDUdk.js"),__vite__mapDeps([4,1]),import.meta.url);break;case"/auth/login/":await n(()=>import("./login-D_1ifuk3.js"),__vite__mapDeps([5,2]),import.meta.url);break;case"/auth/register/":await n(()=>import("./register-C-rshvmx.js"),__vite__mapDeps([6,2]),import.meta.url);break;case"/post/":await n(()=>import("./post-C59-o1Jh.js"),__vite__mapDeps([7,2]),import.meta.url);break;case"/post/edit/":await n(()=>import("./postEdit-BOEXUO_o.js"),__vite__mapDeps([8,1,2]),import.meta.url);break;case"/post/create/":await n(()=>import("./postCreate-DgVVLxVJ.js"),__vite__mapDeps([9,3,2,1]),import.meta.url);break;case"/profile/":await n(()=>import("./profile-L_L6sM9k.js"),__vite__mapDeps([10,1,2,0,3]),import.meta.url);break;default:await n(()=>import("./notFound-BNXFWLKC.js"),[],import.meta.url)}}await v(window.location.pathname);
