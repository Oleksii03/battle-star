import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';

Swiper.use([Pagination, Autoplay]);

export function initSwiper() {
  new Swiper('.mainHeroSwiper', {
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
