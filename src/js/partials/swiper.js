import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay, Grid } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/grid';

Swiper.use([Pagination, Autoplay, Grid]);

export function stockSwiper() {
  return new Swiper('.stock-swiper', {
    slidesPerView: 'auto',
    // grid: {
    //   rows: 2,
    // },
    spaceBetween: 9,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.stock__swiper-button-next',
      prevEl: '.stock__swiper-button-prev',
    },
  });
}

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
