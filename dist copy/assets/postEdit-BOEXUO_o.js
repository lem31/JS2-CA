import{a as i}from"./authGuard-DDO8JLiG.js";import{h as s}from"./headers-ahJeJWcP.js";async function p(){const o=new URLSearchParams(window.location.search).get("id");if(o)try{const e=await(await fetch(`https://v2.api.noroff.dev/social/posts/${o}`,{headers:s()})).json();document.querySelector("#title").value=e.data.title,document.querySelector("#body").value=e.data.body,document.querySelector("#tags").value=e.data.tags.join(", "),document.querySelector("#media").value=e.data.media.url,document.querySelector("#alt").value=e.data.media.alt}catch(a){console.error("Error fetching post:",a)}}function m(){document.querySelector("#update-post-button").addEventListener("click",async r=>{r.preventDefault();const o=new URLSearchParams(window.location.search).get("id"),a=document.querySelector("#title").value,e=document.querySelector("#body").value,c=document.querySelector("#tags").value.split(",").map(t=>t.trim()),n=document.querySelector("#media").value,l=document.querySelector("#alt").value,d={title:a,body:e,tags:c,media:{url:n,alt:l}};try{const t=await fetch(`https://v2.api.noroff.dev/social/posts/${o}`,{method:"PUT",headers:s(),body:JSON.stringify(d)});if(t.ok)alert("Post updated successfully!"),window.location.href="/profile/";else{const u=await t.json();console.error("Error updating post:",u),alert("Failed to update post. Please try again.")}}catch(t){console.error("Error updating post:",t),alert("An error occurred while updating the post. Please try again.")}})}i();p();m();
