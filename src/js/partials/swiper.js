// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';
// import { Pagination, Autoplay, Grid, Navigation } from 'swiper/modules';
// import 'swiper/css/pagination';
// import 'swiper/css/grid';

// Swiper.use([Pagination, Autoplay, Grid, Navigation]);

// export function stockSwiper() {
//   return new Swiper('.stock-swiper', {
//     slidesPerView: 2, // Кількість слайдів в одному рядку
//     slidesPerColumn: 2, // Кількість слайдів у кожному стовпці
//     spaceBetween: 10,

//     // grid: {
//     //   rows: 2,
//     // },
//     // spaceBetween: 9,
//     pagination: {
//       el: '.swiper-pagination',
//     },
//     navigation: {
//       nextEl: '.stock__swiper-button-next',
//       prevEl: '.stock__swiper-button-prev',
//     },
//   });
// }

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay, Grid, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/grid';

Swiper.use([Pagination, Autoplay, Grid, Navigation]);

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

  function updateSpaceBetween() {
    if (window.innerWidth >= 1440) {
      swiperStock.params.spaceBetween = 20;
    } else {
      swiperStock.params.spaceBetween = 9;
    }
    swiperStock.update();
  }

  updateSpaceBetween();

  window.addEventListener('resize', updateSpaceBetween);
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
