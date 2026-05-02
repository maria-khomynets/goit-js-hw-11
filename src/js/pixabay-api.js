import axios from 'axios';

export default function getImagesByQuery(query) {
  const parameters = {
    params: {
      key: '55656452-b960420c5594901b542f03c34',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  };

  return axios
    .get('https://pixabay.com/api/', parameters)
    .then(response => response.data);
}
