import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api.js';
import {
  handleSuccess,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loaderIndicator = document.getElementById('loader-indicator');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const query = form.elements.state.value.trim();
  if (query === '') {
    iziToast.error({
      message: 'Enter a search query',
      position: 'center',
    });
    return;
  }

  gallery.innerHTML = '';
  showLoader(loaderIndicator);

  const result = fetchImages(query);
  result
    .then(value => {
      hideLoader(loaderIndicator);
      const images = value.hits;
      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'center',
        });
        // loader.style.display = 'none';
        return;
      }
      gallery.insertAdjacentHTML('beforeend', handleSuccess(images));

      lightbox.refresh();
    })
    .catch(error => {
      hideLoader(loaderIndicator);
      iziToast.error({
        message: 'Error! Something went wrong.',
        position: 'center',
      });
    });
}
