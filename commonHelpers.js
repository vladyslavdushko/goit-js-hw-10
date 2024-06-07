import{S as c,i as u}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();const p="44111421-e553a4c4acf6f519f7af5aa9e",m="https://pixabay.com/api/";async function d(s){const t={origin:m,key:p,image_type:"photo",q:s,orientation:"horizontal",safesearch:!0},e=`${t.origin}?key=${t.key}&q=${t.q}&image_type=${t.image_type}&orientation=${t.orientation}&safesearch=${t.safesearch}`;return fetch(e).then(i=>{if(!i.ok)throw new Error(i.statusText);return i.json()})}const l=document.querySelector(".gallery"),o=document.querySelector(".loader-container");function f(s){o.classList.add("is-visible"),o.classList.remove("is-hidden"),l.innerHTML="";let t=s.hits.map(e=>`
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
                </li>`).join("");l.insertAdjacentHTML("beforeend",t),o.classList.remove("is-visible"),o.classList.add("is-hidden")}const y=document.querySelector("button"),h=document.querySelector("form");document.querySelector(".gallery");document.querySelector(".loader-container");let g=new c(".gallery a",{captionDelay:250});y.addEventListener("click",s=>{s.preventDefault();const t=h.elements.q.value.trim();if(t==="")return alert("Enter text");d(t).then(e=>{if(e.total===0)return u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});console.log(e),f(e),g.refresh()}).catch(e=>{throw new Error(e)})});
//# sourceMappingURL=commonHelpers.js.map
