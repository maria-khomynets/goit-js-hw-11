import{a as c,S as u,i as s}from"./assets/vendor-D1AWmRWP.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();function f(e){return c.get("https://pixabay.com/api/",{params:{key:"55656452-b960420c5594901b542f03c34",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(i=>i.data)}let n=null;function d(e){const i=document.querySelector(".gallery"),a=e.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="${r.tags}"
          />
        </a>

        <ul class="item-indicators">
          <li>
            <h2>Likes</h2>
            <p>${r.likes}</p>
          </li>
          <li>
            <h2>Views</h2>
            <p>${r.views}</p>
          </li>
          <li>
            <h2>Comments</h2>
            <p>${r.comments}</p>
          </li>
          <li>
            <h2>Downloads</h2>
            <p>${r.downloads}</p>
          </li>
        </ul>
      </li>
    `).join("");i.insertAdjacentHTML("beforeend",a),n||(n=new u(".gallery-item a",{captionsData:"alt",captionPosition:"bottom"})),n.refresh()}function p(){const e=document.querySelector(".gallery");e.innerHTML=""}function m(){const e=document.querySelector(".loader-wrapper");e&&e.classList.add("loader-wrapper-show")}function h(){const e=document.querySelector(".loader-wrapper");e&&e.classList.remove("loader-wrapper-show")}const g=document.querySelector(".form");g.addEventListener("submit",y);function y(e){e.preventDefault();const i=e.target.elements["search-text"].value.trim();if(!i){s.show({title:"Warning",message:"The form field must be filled in.",backgroundColor:"pink",position:"topLeft",timeout:8e3});return}p(),m(),f(i).then(a=>{var r;(r=a==null?void 0:a.hits)!=null&&r.length?d(a.hits):s.show({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"pink",position:"topLeft",timeout:8e3}),e.target.reset()}).catch(a=>{s.error({message:a.message,position:"topLeft",timeout:8e3})}).finally(()=>{h()})}
//# sourceMappingURL=index.js.map
