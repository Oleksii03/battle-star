import { getCardData } from '../../utils/mixins';

export function addToBasket() {
  const mainContainer = document.querySelector('.js-main-container');
  // ----refs-------

  const KEY_BASKET = 'basket';
  const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];

  mainContainer.addEventListener('click', addProduct);

  function addProduct({ target }) {
    if (!target.classList.contains('js-basket')) return;

    const cardData = getCardData(target);

    const inStorage = basketArr.some(({ id }) => id === cardData.id);

    if (inStorage) return;

    basketArr.push(cardData);
    localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr));
  }
}
