fetch('https://jsonp4laceholder.typicode.com/photos')
  .then(resp => {
    return resp.json();
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err.message);
  });
