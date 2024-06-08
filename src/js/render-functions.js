// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250});
const gallery = document.querySelector('.gallery');

export function renderGallery(res) {        
            let markup = res.hits.map( (image) => 
                `
                <li class='gallery-item'>
                <a href=${image.largeImageURL}>
                <img src=${image.webformatURL} alt=${image.tags} class="gallery-img" title="${image.tags}">
                <div class="inner-container">
                <ul class="inner-item-ul">
                <li class="inner-item-li">
                    <p class="inner-item-p">Likes</p>
                    <span class="inner-item-span">${image.likes}</span>
                </li>

                <li class="inner-item-li">
                    <p class="inner-item-p">Views</p>
                    <span class="inner-item-span">${image.views}</span>
                </li>

                <li class="inner-item-li">
                    <p class="inner-item-p">Comments</p>
                    <span class="inner-item-span">${image.comments}</span>
                </li>

                <li class="inner-item-li">
                    <p class="inner-item-p">Downloads</p>
                    <span class="inner-item-span">${image.downloads}</span>
                </li>
                </ul>
                </div>
                </a> 
                </li>`
            ).join('');

           gallery.insertAdjacentHTML("beforeend", markup);
           lightbox.refresh()

}
  
  