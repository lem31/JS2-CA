import{a as E}from"./authGuard-DDO8JLiG.js";import{G as m,h as i}from"./headers-ahJeJWcP.js";import{h as u}from"./create-COmdal_b.js";function T(n){const t=n.target.closest(".my-post").dataset.id;window.location.href=`/post/edit/?id=${t} `}function h(){localStorage.removeItem("accessToken"),window.location.href="/auth/login/"}function p(){document.getElementById("logout-button").addEventListener("click",h)}async function O(n){try{const t=await fetch(`${m}${n}`,{method:"DELETE",headers:i()});if(t.ok)alert("Post deleted successfully"),window.location.href="/profile/";else{const r=await t.json();throw new Error(r.message||"Failed to delete post")}}catch(t){u(t)}}function f(n){const t=n.target.dataset.id;O(t)}E();p();class l{constructor(t,r){const e=document.createElement("div");e.classList.add("individual-post-box");const a=document.createElement("h2"),o=document.createElement("p"),s=document.createElement("p"),c=document.createElement("img");c.classList.add("post-image");const d=document.createElement("button");return d.textContent="View post",a.textContent=t.title||"No title available",o.textContent=t.body||"No content available",s.textContent=t.tags?t.tags.join(", "):"No tags available",t.media?.url?c.src=t.media.url:c.alt="No image available",e.appendChild(a),e.appendChild(o),e.appendChild(s),e.appendChild(c),e.appendChild(d),r.appendChild(e),c.addEventListener("click",()=>{window.location.href=`/post/?id=${t.id}`}),d.addEventListener("click",()=>{window.location.href=`/post/?id=${t.id}`}),e}}class C extends l{constructor(t,r){const e=super(t,r),a=document.createElement("button"),o=document.createElement("button"),s=document.createElement("div");return e.classList.add("my-post"),a.textContent="Edit",o.textContent="Delete",e.dataset.id=t.id,a.addEventListener("click",c=>{T(c)}),o.dataset.id=t.id,a.classList.add("edit-button"),o.classList.add("delete-button"),o.addEventListener("click",f),s.appendChild(a),s.appendChild(o),e.appendChild(s),e}}async function P(){try{if(!localStorage.getItem("accessToken"))throw new Error("No access token found. Please log in.");const t=await fetch("https://v2.api.noroff.dev/social/posts?_tag=MEYERAPP",{method:"GET",headers:i()});if(!t.ok)throw console.error("HTTP error response:",t),new Error(`HTTP error! status: ${t.status||"unknown"}`);const r=await t.json(),e=r.data.sort((o,s)=>new Date(s.created)-new Date(o.created)).slice(0,12);localStorage.setItem("posts",JSON.stringify(r.data));const a=document.getElementById("posts-container");a&&(a.innerHTML="",e.forEach(o=>{try{new l(o,a)}catch(s){console.error("Error creating post elements:",s,o)}}))}catch(n){console.error("Error fetching posts:",n)}}P();export{l as CreateAllPostElements,C as CreateMyPostsElements,P as getAllPosts};
