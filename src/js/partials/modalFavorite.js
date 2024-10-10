import { KEY_FAVORITE } from '../utils/constants';
import { cardsMarkup } from '../pages/main/cards-markup';
import { updateLocalStorageCounter } from '../utils/update-local-storage-counter';
import { updateHeartStatus } from './updateHeartStatus';

export function modalFavorite() {
  const favoriteBtns = document.querySelectorAll('.js-favorite-btn');
  const backdrop = document.querySelector('.js-backdrop-favotite');
  const modalWindow = document.querySelector('.js-modal-favorite');
  const swiperContainer = document.querySelector('.js-swiper-favorite');
  const btnsClose = document.querySelectorAll('.js-swiper-btn-close');
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

  btnsClose.forEach(btnClose => btnClose.addEventListener('click', closeModalWindow));
  backdrop.addEventListener('click', closeModalWindow);

  function closeModalWindow(e) {
    backdrop.classList.remove('backdrop-favorite--visible');
    modalWindow.classList.remove('modal-favorite--visible');

    if (mobMenu.classList.contains('mob-menu--visible')) return;

    document.body.classList.remove('to-freeze');
  }

  // -------removeTargetCard----------
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
  }

  window.addEventListener('storage', event => {
    if (event.key === KEY_FAVORITE) {
      updateHeartsOnMainPage();
    }
  });

  function updateHeartsOnMainPage() {
    let favorites = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];

    const activeHearts = document.querySelectorAll('.slide-stock__content-top-favorite_active');

    activeHearts.forEach(heart =>
      heart.classList.remove('slide-stock__content-top-favorite_active')
    );

    favorites.forEach(el => {
      const currentCard = document.querySelector(`[data-id="${el.id}"]`);
      if (currentCard) {
        const activeHeart = currentCard.querySelector('.slide-stock__content-top-favorite');
        if (activeHeart) {
          activeHeart.classList.add('slide-stock__content-top-favorite_active');
        }
      }
    });

    cardsMarkup(favorites, swiperContainer);
    if (!favorites.length) closeModalWindow();
  }
}
