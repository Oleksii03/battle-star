import { KEY_FAVORITE } from '../utils/constants';
import { cardsMarkup } from '../pages/main/cards-markup';

export function modalFavorite() {
  const favoriteBtns = document.querySelectorAll('.js-favorite-btn');
  const backdrop = document.querySelector('.js-backdrop-favotite');
  const modalWindow = document.querySelector('.js-modal-favorite');
  const swiperContainer = document.querySelector('.js-swiper-favorite');

  console.log(swiperContainer);
  // ---refs--
  favoriteBtns.forEach(btn => btn.addEventListener('click', openModalFavorite));

  function openModalFavorite(e) {
    let cardDataFavorite = JSON.parse(localStorage.getItem(KEY_FAVORITE));
    backdrop.classList.add('backdrop-favorite--visible');
    modalWindow.classList.add('modal-favorite--visible');

    cardsMarkup(cardDataFavorite, swiperContainer);
  }

  backdrop.addEventListener('click', e => {
    if (e.target !== backdrop) return;

    backdrop.classList.remove('backdrop-favorite--visible');
    modalWindow.classList.remove('modal-favorite--visible');
  });
}
