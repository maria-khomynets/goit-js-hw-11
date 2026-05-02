import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// import getImagesByQuery from './js/pixabay-api';
// import {
//   createGallery,
//   clearGallery,
//   showLoader,
//   hideLoader,
// } from './js/render-functions';

import axios from 'axios';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
function getImagesByQuery(query) {}

const API_KEY = '55656452-b960420c5594901b542f03c34';
const BASE_URL = 'https://pixabay.com/api/';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  const value = event.target.elements['search-text'].value.trim();

  if (value === '') {
    iziToast.show({
      title: 'Warning',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor: 'red',
      position: 'topLeft',
      timeout: 8000,
    });
  } else {
  }
}
function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    })

    .then(res => {
      return res.data.hits;
    });
}
