import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const n=document.querySelector(".image-list");function i(t){return fetch(t).then(e=>{if(!e.ok)throw new Error("Error");return e.json()})}function c(t){n.innerHTML=t.map(({thumbnailUrl:e,title:o,url:r})=>`
      <li class="gallery-item">
        <a href="${r}">
          <img src="${e}" alt="${o}" />
        </a>
      </li>
    `).join("")}i("https://jsonplaceholder.typicode.com/photos?_limit=10").then(t=>{c(t)}).catch(t=>console.log(t.message));
//# sourceMappingURL=1-timer.js.map
