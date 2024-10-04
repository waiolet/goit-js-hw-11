import{S as h,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function y(r){const s=new URLSearchParams({key:"46332021-f156325159d295bd8ceb1a335",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}function g(r,s){if(!Array.isArray(r)||r.length===0){console.warn("No images to render.");return}const a=document.createDocumentFragment();r.forEach(({webformatURL:n,largeImageURL:e,tags:t,likes:o,views:u,comments:f,downloads:p})=>{const i=document.createElement("li");i.className="gallery-list-item",i.innerHTML=`
            <a class="gallery-link" href="${e}" aria-label="${t}">
                <img class="img" src="${n}" 
                alt="${t}" 
                title="${t}" />
            </a>
            <ul class="data-list">
                <li class="data-item">
                    <p class="data-item-name">Likes</p>
                    <p class="data-numbers">${o}</p>
                </li>
                <li class="data-item">
                    <p class="data-item-name">Views</p>
                    <p class="data-numbers">${u}</p>
                </li>
                <li class="data-item">
                    <p class="data-item-name">Comments</p>
                    <p class="data-numbers">${f}</p>
                </li>
                <li class="data-item">
                    <p class="data-item-name">Downloads</p>
                    <p class="data-numbers">${p}</p>
                </li>
            </ul>
        `,a.appendChild(i)}),s.appendChild(a)}function b(r){return g(r,document.querySelector(".gallery"))}function L(r){r.classList.remove("hidden"),r.style.display="block"}function d(r){r.classList.add("hidden"),r.style.display="none"}const w=document.querySelector(".form"),m=document.querySelector(".gallery"),c=document.getElementById("loader-indicator");let S=new h(".gallery a",{captionsData:"alt",captionDelay:250});w.addEventListener("submit",$);function $(r){r.preventDefault();const a=r.currentTarget.elements.state.value.trim();if(a===""){l.error({message:"Enter a search query",position:"center"});return}m.innerHTML="",L(c),y(a).then(e=>{d(c);const t=e.hits;if(t.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"});return}m.insertAdjacentHTML("beforeend",b(t)),S.refresh()}).catch(e=>{d(c),l.error({message:"Error! Something went wrong.",position:"center"})})}
//# sourceMappingURL=index.js.map
