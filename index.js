import{a as l}from"./assets/vendor-GJd7uHwm.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const a=document.querySelector(".form");a.addEventListener("submit",c);function c(s){s.preventDefault();const t=s.target.elements["search-text"].value;if(console.log(t),t===""){alert("введіть значення");return}u(t).catch(i=>{alert("Sorry, there are no images matching your search query. Please try again!")}).finally(()=>{s.target.reset()})}function u(s){return l("https://pixabay.com/api/",{params:{key:"55656452-b960420c5594901b542f03c34",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{console.log(t);const i=t.data.hits;f(i)})}function f(s){const t=document.querySelector(".gallery");t.innerHTML="";const i=s.map(o=>`
      <li class="gallery-item">
        <a href="${o.largeImageURL}">
          <img
            class="gallery-image"
            src="${o.webformatURL}"
            alt="${o.tags}"
          />
        </a>

        <ul class="item-indicators">
          <li>
            <h2>Likes</h2>
            <p>${o.likes}</p>
          </li>
          <li>
            <h2>Views</h2>
            <p>${o.views}</p>
          </li>
          <li>
            <h2>Comments</h2>
            <p>${o.comments}</p>
          </li>
          <li>
            <h2>Downloads</h2>
            <p>${o.downloads}</p>
          </li> 
        </ul>
      </li>
    `).join("");t.insertAdjacentHTML("beforeend",i)}
//# sourceMappingURL=index.js.map
