import getPicture from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

const searchBtn = document.querySelector('button');
const form = document.querySelector('form');
const gallery = document.querySelector('.gallery')
const loader = document.querySelector('.loader-container')

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const query = form.elements.q.value.trim();
  const data = getPicture(query);

  if(query === ''){
   return alert("Enter text")
  }

  if (data) {
    renderGallery(data)
    console.log(typeof(renderGallery));
  }
});
