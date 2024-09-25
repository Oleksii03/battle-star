import { header } from './partials/header';
import { mobMenu } from './partials/mob-menu';
import {
  initSwiper,
  stockSwiper,
  seasonalSwiper,
  presentSwiper,
  forumSwiper,
} from './partials/swiper';
import { createCard } from './pages/main/stock';
import { preloader } from './partials/preloader';
import { firebaseConfig } from './partials/firebaseConfig';
import { forumSlider } from './pages/main/forum-slider';
import { createAccordionFaq } from './partials/accordion';

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
});
