import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");
const galleryMarkUp = createGalleryItems(galleryItems);


galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp);

galleryContainer.addEventListener('click', onItemClick);

function createGalleryItems(items) {
    return items.map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `
    }).join('');
       
}

function onItemClick(e) {
    e.preventDefault();

    console.log(e.target);
}

let gallery = new SimpleLightbox('.gallery a', { captions: true, captionsData: 'alt', captionDelay: 250 });
gallery.on('show.simplelightbox', function () {
       

});
