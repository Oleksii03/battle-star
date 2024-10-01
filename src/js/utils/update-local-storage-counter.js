import { KEY_BASKET, KEY_FAVORITE } from './constants';

const countOfFavorite = document.querySelectorAll('.js-favorite-amount');
const countOfBasket = document.querySelectorAll('.js-basket-amount');

export function updateLocalStorageCounter() {
  function updateCounter(key, elements) {
    const amount = JSON.parse(localStorage.getItem(key))
      ? JSON.parse(localStorage.getItem(key)).length
      : 0;

    [...elements].forEach(el => {
      el.textContent = amount;
    });
  }

  updateCounter(KEY_FAVORITE, countOfFavorite);
  updateCounter(KEY_BASKET, countOfBasket);
}
