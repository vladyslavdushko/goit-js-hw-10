import{S as l,i as c}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const u="44111421-e553a4c4acf6f519f7af5aa9e",p="https://pixabay.com/api/";async function m(n){const t={origin:p,key:u,image_type:"photo",q:n,orientation:"horizontal",safesearch:!0},e=`${t.origin}?key=${t.key}&q=${t.q}&image_type=${t.image_type}&orientation=${t.orientation}&safesearch=${t.safesearch}`;return fetch(e).then(i=>{if(!i.ok)throw new Error(i.statusText);return i.json()})}let d=new l(".gallery a",{captionDelay:250});const f=document.querySelector(".gallery");function y(n){let t=n.hits.map(e=>`
                <li class='gallery-item'>
                <a href=${e.largeImageURL}>
                <img src=${e.webformatURL} alt=${e.tags} class="gallery-img" title="${e.tags}">
                <div class="inner-container">
                <ul class="inner-item-ul">
                <li class="inner-item-li">
                    <p class="inner-item-p">Likes</p>
                    <span class="inner-item-span">${e.likes}</span>
                </li>

                <li class="inner-item-li">
                    <p class="inner-item-p">Views</p>
                    <span class="inner-item-span">${e.views}</span>
                </li>

                <li class="inner-item-li">
                    <p class="inner-item-p">Comments</p>
                    <span class="inner-item-span">${e.comments}</span>
                </li>

                <li class="inner-item-li">
                    <p class="inner-item-p">Downloads</p>
                    <span class="inner-item-span">${e.downloads}</span>
                </li>
                </ul>
                </div>
                </a> 
                </li>`).join("");d.refresh(),f.insertAdjacentHTML("beforeend",t)}const h=document.querySelector("button"),g=document.querySelector("form"),L=document.querySelector(".gallery"),o=document.querySelector(".loader-container");h.addEventListener("click",n=>{n.preventDefault(),L.innerHTML="";const t=g.elements.q.value.trim();if(t==="")return alert("Enter text");o.classList.add("is-visible"),o.classList.remove("is-hidden"),m(t).then(e=>{if(e.total===0)return c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});console.log(e),y(e),o.classList.remove("is-visible"),o.classList.add("is-hidden")}).catch(e=>{throw new Error(e)})});
//# sourceMappingURL=commonHelpers.js.map
