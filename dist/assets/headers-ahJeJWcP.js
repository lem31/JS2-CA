const o="25afc7c1-31c2-43ed-9dac-bbb6249bb706",a="https://v2.api.noroff.dev/social/profiles/",c="https://v2.api.noroff.dev/auth/login",r="https://v2.api.noroff.dev/auth/register",d="https://v2.api.noroff.dev/social/posts",p="https://v2.api.noroff.dev/social/posts/",s=JSON.parse(localStorage.getItem("user"))||{},n=s.name||"defaultName",E=`https://v2.api.noroff.dev/social/profiles/${n}/posts`,t=localStorage.getItem("accessToken"),f=document.getElementById("error-message"),i=document.getElementById("register-form"),l=document.getElementById("login-form"),I=document.getElementById("create-form"),_=document.getElementById("update-profile-button"),m=document.getElementById("Update-Profile"),A=document.getElementById("cancel-button");function O(){const e=new Headers;return e.append("Content-Type","application/json"),t&&e.append("Authorization",`Bearer ${t}`),e.append("X-Noroff-API-Key",o),e}export{c as A,A as C,f as E,p as G,l as L,m as P,i as R,_ as U,r as a,a as b,E as c,I as d,d as e,O as h};