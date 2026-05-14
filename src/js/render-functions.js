import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;
const loaderClassName = '.loader-wrapper';
const galleryClassName = '.gallery';
const loaderWrapperClassName = 'loader-wrapper-show';
export function createGallery(images) {
  const gallery = document.querySelector(galleryClassName);

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

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery-item a', {
      captionsData: 'alt',
      captionPosition: 'bottom',
    });
  }

  lightbox.refresh();
}

export function clearGallery() {
  const gallery = document.querySelector(galleryClassName);
  gallery.innerHTML = '';
}

export function showLoader() {
  const loaderWrapper = document.querySelector(loaderClassName);
  if (loaderWrapper) {
    loaderWrapper.classList.add(loaderWrapperClassName);
  }
}

export function hideLoader() {
  const loaderWrapper = document.querySelector(loaderClassName);
  if (loaderWrapper) {
    loaderWrapper.classList.remove(loaderWrapperClassName);
  }
}
