import { KEY_FAVORITE } from '../utils/constants';
import { cardsMarkup } from '../pages/main/cards-markup';
import { updateLocalStorageCounter } from '../utils/update-local-storage-counter';
import { updateHeartStatus } from './updateHeartStatus';

export function modalFavorite() {
  const favoriteBtns = document.querySelectorAll('.js-favorite-btn');
  const backdrop = document.querySelector('.js-backdrop-favotite');
  const modalWindow = document.querySelector('.js-modal-favorite');
  const swiperContainer = document.querySelector('.js-swiper-favorite');
  const btnClose = document.querySelector('.js-swiper-btn-close');
  const mobMenu = document.querySelector('.js-mob-menu');
  // ---refs--
  // let cardDataFavorite = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
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

  // -----------------

  swiperContainer.addEventListener('click', removeTargetCard);

  function removeTargetCard({ target }) {
    if (target.tagName !== 'use') return;

    const targetEl = target.closest('.swiper-slide');
    const targetId = targetEl.dataset.id;

    let cardDataFavorite = JSON.parse(localStorage.getItem(KEY_FAVORITE));
    let newFavoriteArr = cardDataFavorite.filter(el => el.id !== targetId);

    localStorage.setItem(KEY_FAVORITE, JSON.stringify(newFavoriteArr));

    targetEl.remove();
    updateLocalStorageCounter();
    updateHeartStatus(targetId);

    if (!newFavoriteArr.length) closeModalWindow();

    window.dispatchEvent(new Event('storage'));
  }

  window.addEventListener('storage', event => {
    if (event.key === KEY_FAVORITE) {
      // Оновлення стану всіх сердечок на сторінці
      updateHeartsOnMainPage();
    }
  });

  function updateHeartsOnMainPage() {
    let favorites = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];

    console.log(favorites);

    cardsMarkup(favorites, swiperContainer);

    // const heartElements = document.querySelectorAll('.slide-stock__content-top-favorite');

    // heartElements.forEach(heart => {
    //   // const productId = heart.dataset.id;
    //   // console.log(heart);
    //   // if (favorites.includes(productId)) {
    //   //   heart.classList.add('slide-stock__content-top-favorite_active');
    //   // } else {
    //   //   heart.classList.remove('slide-stock__content-top-favorite_active');
    //   // }
    // });
  }
}
