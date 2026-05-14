// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const query = event.target.elements['search-text'].value;
  console.log(query);
  if (query === '') {
    alert('введіть значення');
    return;
  }
  getImagesByQuery(query)
    .catch(error => {
      alert(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    })
    .finally(() => {
      event.target.reset();
    });
}

function getImagesByQuery(query) {
  return axios('https://pixabay.com/api/', {
    params: {
      key: '55656452-b960420c5594901b542f03c34',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  }).then(response => {
    console.log(response);
    const images = response.data.hits;
    createGallery(images);
  });
}
function createGallery(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
  const markup = images
    .map(
      image => `
      <li class="gallery-item">
        <a href="${image.largeImageURL}">
          <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="${image.tags}"
          />
        </a>

        <ul class="item-indicators">
          <li>
            <h2>Likes</h2>
            <p>${image.likes}</p>
          </li>
          <li>
            <h2>Views</h2>
            <p>${image.views}</p>
          </li>
          <li>
            <h2>Comments</h2>
            <p>${image.comments}</p>
          </li>
          <li>
            <h2>Downloads</h2>
            <p>${image.downloads}</p>
          </li> 
        </ul>
      </li>
    `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}
