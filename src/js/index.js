import { header } from './partials/header';
import { mobMenu } from './partials/mob-menu';
import { initSwiper, stockSwiper, seasonalSwiper } from './partials/swiper';
import { createCard } from './pages/main/stock';
import { preloader } from './partials/preloader';
import { firebaseConfig } from './partials/firebaseConfig';

document.addEventListener('DOMContentLoaded', () => {
  let app = firebaseConfig();
  header();
  mobMenu();
  initSwiper();
  createCard(app);
  stockSwiper();
  preloader();
  seasonalSwiper();
});
