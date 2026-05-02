// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// const form = document.querySelector('.form');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   let delay = Number(event.target.elements.delay.value);
//   const state = event.target.elements.state.value;

//   const promise = new Promise((resolve, reject) => {
//     delay = Math.max(0, delay);

//     setTimeout(() => {
//       if (state === 'fulfilled') {
//         resolve(delay);
//       } else {
//         reject(delay);
//       }
//     }, delay);
//   });

//   promise
//     .then(delay => {
//       iziToast.success({
//         title: 'OK',
//         message: `Fulfilled promise in ${delay}ms`,
//       });
//     })
//     .catch(delay => {
//       iziToast.error({
//         title: 'Error',
//         message: `Rejected promise in ${delay}ms`,
//       });
//     });
// }
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Ця функція повинна приймати масив images, створювати HTML - розмітку для галереї,
//   додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh().Нічого не повертає.
function createGallery(images) { }

// Ця функція нічого не приймає та 
// повинна очищати вміст контейнера галереї.Нічого не повертає.
function clearGallery() {
  
}
// .Ця функція нічого не приймає,
//   повинна додавати клас для відображення лоадера.Нічого не повертає.
function showLoader() {
  
}
//   .Ця функція нічого не приймає,
//     повинна прибирати клас для відображення лоадера.Нічого не повертає.

functionhideLoader(){
  
}