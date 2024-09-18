import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay, Grid, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/grid';

Swiper.use([Pagination, Autoplay, Grid, Navigation]);

// swiper-Hero--------------------------------------
export function initSwiper() {
  return new Swiper('.mainHeroSwiper', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    speed: 600,
  });
}

// swiper-Stock---------------------------------
export function stockSwiper() {
  const swiperStock = new Swiper('.stock-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 9,
    grid: {
      rows: 2,
      fill: 'row',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.stock__swiper-button-next',
      prevEl: '.stock__swiper-button-prev',
    },
  });

  updateSwiperParams(swiperStock);
  window.addEventListener('resize', () => updateSwiperParams(swiperStock));
}

// swiper-Seasonal--------------------------------
export function seasonalSwiper() {
  const swiperSeasonal = new Swiper('.seasona-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 9,
    grid: {
      rows: 2,
      fill: 'row',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.seasona__swiper-button-next',
      prevEl: '.seasona__swiper-button-prev',
    },
  });

  updateSwiperParams(swiperSeasonal);
  window.addEventListener('resize', () => updateSwiperParams(swiperSeasonal));
}

// swiper-Present--------------------------------
export function presentSwiper() {
  const swiperPresent = new Swiper('.present-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 9,
    grid: {
      rows: 2,
      fill: 'row',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.present__swiper-button-next',
      prevEl: '.present__swiper-button-prev',
    },
  });

  updateSwiperParams(swiperPresent);
  window.addEventListener('resize', () => updateSwiperParams(swiperPresent));
}

// --update---Swiper---Params-----------------------

function updateSwiperParams(swiper) {
  if (window.innerWidth <= 425) {
    swiper.params.slidesPerView = 2;
  } else if (window.innerWidth >= 1024) {
    swiper.params.spaceBetween = 20;
    swiper.params.slidesPerView = 4;
  } else {
    swiper.params.spaceBetween = 9;
    swiper.params.slidesPerView = 'auto';
  }
  swiper.update();
}
