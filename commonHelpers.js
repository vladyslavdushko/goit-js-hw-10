import{i as a,S as c}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const u="44111421-e553a4c4acf6f519f7af5aa9e",d="https://pixabay.com/api/";async function m(o){const t={origin:d,key:u,image_type:"photo",q:o,orientation:"horizontal",safesearch:!0},s=`${t.origin}?key=${t.key}&q=${t.q}&image_type=${t.image_type}&orientation=${t.orientation}&safesearch=${t.safesearch}`;return fetch(s).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()}).then(r=>r.total===0?(a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),null):r).catch(r=>(a.error({title:"Error",message:r.message}),null))}function l(o){const t=document.querySelector(".gallery"),s=document.querySelector(".loader-container");s.classList.add("is-visible"),s.classList.remove("is-hidden"),t.innerHTML="",o.then(r=>{let e=r.hits.map(i=>`
                <li class='gallery-item'>
                <a href=${i.largeImageURL}>
                <img src=${i.webformatURL} alt=${i.tags} class="gallery-img" title="${i.tags}">
                <div class="inner-container">
                <ul class="inner-item-ul">
                <li class="inner-item-li">
                    <p class="inner-item-p">Likes</p>
                    <span class="inner-item-span">${i.likes}</span>
                </li>

                <li class="inner-item-li">
                    <p class="inner-item-p">Views</p>
                    <span class="inner-item-span">${i.views}</span>
                </li>

                <li class="inner-item-li">
                    <p class="inner-item-p">Comments</p>
                    <span class="inner-item-span">${i.comments}</span>
                </li>

                <li class="inner-item-li">
                    <p class="inner-item-p">Downloads</p>
                    <span class="inner-item-span">${i.downloads}</span>
                </li>
                </ul>
                </div>
                </a> 
                </li>`).join("");t.insertAdjacentHTML("beforeend",e),new c(".gallery a",{captionDelay:250}).refresh(),s.classList.remove("is-visible"),s.classList.add("is-hidden")}).catch(r=>{throw s.classList.remove("is-visible"),s.classList.add("is-hidden"),new Error(r)})}const p=document.querySelector("button"),f=document.querySelector("form");document.querySelector(".gallery");document.querySelector(".loader-container");p.addEventListener("click",o=>{o.preventDefault();const t=f.elements.q.value.trim(),s=m(t);if(t==="")return alert("Enter text");s&&(l(s),console.log(typeof l))});
//# sourceMappingURL=commonHelpers.js.map
