import { header } from './partials/header';
import { mobMenu } from './partials/mob-menu';
import {
  initSwiper,
  stockSwiper,
  seasonalSwiper,
  presentSwiper,
  forumSwiper,
  modalFavoriteSwiper,
} from './partials/swiper';
import { createCard } from './pages/main/get-сards-data';
import { preloader } from './partials/preloader';
import { firebaseConfig } from './partials/firebaseConfig';
import { forumSlider } from './pages/main/forum-slider';
import { createAccordionFaq } from './partials/accordion';
import { addToLocalStorage } from './pages/main/add-to-local-storage';
import { calculateTotalBasket } from './partials/calculateTotalBasket';
import { modalFavorite } from './partials/modalFavorite';
import { searchProduct } from './partials/searchProduct';

document.addEventListener('DOMContentLoaded', () => {
  let app = firebaseConfig();
  header();
  mobMenu();
  initSwiper();
  createCard(app);
  stockSwiper();
  preloader();
  seasonalSwiper();
  presentSwiper();
  forumSwiper();
  forumSlider(app);
  createAccordionFaq();
  addToLocalStorage();
  calculateTotalBasket();
  modalFavorite();
  modalFavoriteSwiper();
  searchProduct(app);
});
