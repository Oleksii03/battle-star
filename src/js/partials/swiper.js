import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

Swiper.use([Pagination]);

export function initSwiper() {
  const swiper = new Swiper('.mySwiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
