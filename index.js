import{S as p,i}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function h(r){const a=new URLSearchParams({key:"46332021-f156325159d295bd8ceb1a335",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${a}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function y(r){const a=r.map(({largeImageURL:o,webformatURL:e,tags:t,likes:c,views:u,comments:m,downloads:f})=>`<li class="gallery-item">
            <article class="card">
                <a class="card-link" href="${o}">
                    <img class="card-image" src="${e}" alt="${t}" loading="lazy"/>
                </a>
                <div class="card-container">
                    <div class="card-item">
                        <p class="card-title">Likes</p>
                        <p class="card-count">${c}</p>
                    </div>
                    <div class="card-item">
                        <p class="card-title">Views</p>
                        <p class="card-count">${u}</p>
                    </div>
                    <div class="card-item">
                        <p class="card-title">Comments</p>
                        <p class="card-count">${m}</p>
                    </div>
                    <div class="card-item">
                        <p class="card-title">Downloads</p>
                        <p class="card-count">${f}</p>
                    </div>
                </div>
            </article>
            </li>`).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",a)}function g(r){r.classList.remove("hidden"),r.style.display="block"}function l(r){r.classList.add("hidden"),r.style.display="none"}const L=document.querySelector(".form"),d=document.querySelector(".gallery"),n=document.getElementById("loader-indicator");let v=new p(".gallery a",{captionsData:"alt",captionDelay:250});L.addEventListener("submit",b);function b(r){r.preventDefault();const s=r.currentTarget.elements.state.value.trim();if(s===""){i.error({message:"Enter a search query",position:"center"});return}d.innerHTML="",g(n),h(s).then(e=>{l(n);const t=e.hits;if(t.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"});return}d.insertAdjacentHTML("beforeend",y(t)),v.refresh()}).catch(e=>{l(n),i.error({message:"Error! Something went wrong.",position:"center"})})}
//# sourceMappingURL=index.js.map
