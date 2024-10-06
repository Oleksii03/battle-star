import { header } from './partials/header';
import { mobMenu } from './partials/mob-menu';
import { createAccordionFaq } from './partials/accordion';
import { getLocalStorageData } from './pages/basket/get-local-storage-data';
// import { resizeSwiper } from './utils/mixins';
import { updateLocalStorageCounter } from './utils/update-local-storage-counter';
import { recommendationsSwiper } from './partials/swiper';
import { firebaseConfig } from './partials/firebaseConfig';
import { createMarkupSwiperCard } from './pages/basket/create-markup-swiper';

document.addEventListener('DOMContentLoaded', () => {
  let app = firebaseConfig();
  header();
  mobMenu();
  createAccordionFaq();
  getLocalStorageData();
  updateLocalStorageCounter();
  recommendationsSwiper();
  createMarkupSwiperCard(app);
  // resizeSwiper();
});
