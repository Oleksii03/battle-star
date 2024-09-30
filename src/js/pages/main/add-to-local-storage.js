import { getCardData } from '../../utils/mixins';

export function addToLocalStorage() {
  const mainContainer = document.querySelector('.js-main-container');
  const countOfFavorite = document.querySelectorAll('.js-favorite-amount');
  const countOfBasket = document.querySelectorAll('.js-basket-amount');
  // ---/-refs-------

  const KEY_BASKET = 'basket';
  const KEY_FAVORITE = 'favorite';
  const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
  let favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];

  // ----handlers-------
  mainContainer.addEventListener('click', addProduct);

  function addProduct({ target }) {
    if (target.classList.contains('js-basket')) {
      addProductToBasket(target);
    }

    if (target.classList.contains('js-favorite') || target.tagName === 'use') {
      addProductToFavorite(target);
    }
  }

  // ---add-product-to-basket-------
  function addProductToBasket(target) {
    const cardData = getCardData(target);
    const inStorage = basketArr.some(({ id }) => id === cardData.id);

    if (inStorage) return;

    basketArr.push(cardData);
    localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr));
    updateCounter(KEY_BASKET, countOfBasket);
  }

  // ---add-product-to-favorite-------
  function addProductToFavorite(target) {
    let targetEl = target.closest('.js-favorite');
    if (!targetEl) return;

    if (!targetEl.classList.contains('slide-stock__content-top-favorite_active')) {
      targetEl.classList.add('slide-stock__content-top-favorite_active');
      const cardData = getCardData(target);
      favoriteArr.push(cardData);
      localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoriteArr));

      updateCounter(KEY_FAVORITE, countOfFavorite);
    } else {
      targetEl.classList.remove('slide-stock__content-top-favorite_active');
      const targetElId = targetEl.closest('.js-main-swiper-slide').dataset.id;
      favoriteArr = favoriteArr.filter(({ id }) => id !== targetElId);
      localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoriteArr));

      updateCounter(KEY_FAVORITE, countOfFavorite);
    }
  }

  // ---update-selected-counter-------
  function updateCounter(key, elements) {
    const amount = JSON.parse(localStorage.getItem(key))
      ? JSON.parse(localStorage.getItem(key)).length
      : 0;

    [...elements].forEach(el => {
      console.log((el.textContent = amount));
    });
  }

  updateCounter(KEY_FAVORITE, countOfFavorite);
  updateCounter(KEY_BASKET, countOfBasket);

  // ---set-favorite-status-------
  addEventListener('load', () => {
    const allSlides = document.querySelectorAll('.js-main-swiper-slide');

    favoriteArr.forEach(({ id }) => {
      [...allSlides].forEach(slide => {
        if (slide.dataset.id === id) {
          slide
            .querySelector('.js-favorite')
            .classList.add('slide-stock__content-top-favorite_active');
        }
      });
    });
  });
}
