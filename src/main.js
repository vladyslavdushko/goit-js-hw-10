import getPicture from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const searchBtn = document.querySelector('button');
const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader-container')



searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  gallery.innerHTML = '';

  const query = form.elements.q.value.trim();

  if(query === ''){
    return alert("Enter text")
   }
   loader.classList.add("is-visible");
   loader.classList.remove("is-hidden");
   getPicture(query)
  .then(res => {
    if (res.total === 0) {
      return iziToast.error({
        title: 'Error',
        message: `Sorry, there are no images matching your search query. Please try again!`
      });
    }
    console.log(res);
    renderGallery(res)

    loader.classList.remove("is-visible");
    loader.classList.add("is-hidden");
  })
  .catch(err => {

    throw new Error(err)
  })




});
