import { header } from './partials/header';
import { mobMenu } from './partials/mob-menu';
import { initSwiper } from './partials/swiper';

document.addEventListener('DOMContentLoaded', () => {
  header();
  mobMenu();
  initSwiper();
});
