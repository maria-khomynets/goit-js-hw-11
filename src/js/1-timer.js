const listIm = document.querySelector('.image-list');

function fetchData(url) {
  return fetch(url).then(resp => {
    if (!resp.ok) throw new Error('Error');
    return resp.json();
  });
}

function render(arr) {
  listIm.innerHTML = arr
    .map(
      ({ thumbnailUrl, title, url }) => `
      <li class="gallery-item">
        <a href="${url}">
          <img src="${thumbnailUrl}" alt="${title}" />
        </a>
      </li>
    `
    )
    .join('');
}

fetchData('https://jsonplaceholder.typicode.com/photos?_limit=10')
  .then(res => {
    render(res); // 👈 ОЦЕ важливо
  })
  .catch(err => console.log(err.message));
