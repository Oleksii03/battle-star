import { KEY_FAVORITE } from '../utils/constants';
import { cardsMarkup } from '../pages/main/cards-markup';

export function modalFavorite() {
  const favoriteBtns = document.querySelectorAll('.js-favorite-btn');
  const backdrop = document.querySelector('.js-backdrop-favotite');
  const modalWindow = document.querySelector('.js-modal-favorite');
  const swiperContainer = document.querySelector('.js-swiper-favorite');
  const btnClose = document.querySelector('.js-swiper-btn-close');
  const mobMenu = document.querySelector('.js-mob-menu');
  // ---refs--

  favoriteBtns.forEach(btn => btn.addEventListener('click', openModalFavorite));

  function openModalFavorite(e) {
    let cardDataFavorite = JSON.parse(localStorage.getItem(KEY_FAVORITE));
    backdrop.classList.add('backdrop-favorite--visible');
    modalWindow.classList.add('modal-favorite--visible');
    document.body.classList.add('to-freeze');
    cardsMarkup(cardDataFavorite, swiperContainer);
  }

  backdrop.addEventListener('click', closeModalWindow);
  btnClose.addEventListener('click', closeModalWindow);

  function closeModalWindow(e) {
    backdrop.classList.remove('backdrop-favorite--visible');
    modalWindow.classList.remove('modal-favorite--visible');

    if (mobMenu.classList.contains('mob-menu--visible')) return;

    document.body.classList.remove('to-freeze');
  }
}
