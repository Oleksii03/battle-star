import { KEY_BASKET } from '../../utils/constants';
import { markupCardsSuccess, markupCardsError } from './markup-cards-basket';
import { updateLocalStorageCounter } from '../../utils/update-local-storage-counter';

let basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];

export function getLocalStorageData() {
  const cardList = document.querySelector('.js-basket-card-list');
  const emptyItemBasket = document.querySelector('.js-empty-basket-item');
  // ---refs--

  function createMarkup(arrData) {
    if (arrData.length) {
      cardList.innerHTML = markupCardsSuccess(arrData).join('');
    } else {
      cardList.innerHTML = markupCardsError();
    }
  }
  createMarkup(basketArr);

  cardList.addEventListener('click', handlerLocalStorageData);

  function handlerLocalStorageData({ target }) {
    if (target.classList.contains('js-remove-card')) {
      removeTargetCard(target);
    }
  }

  // --removeTargetCard---

  function removeTargetCard(target) {
    const targetCard = target.closest('.basket-main__list-item');
    const cardId = targetCard.dataset.id;

    targetCard.remove();

    basketArr = basketArr.filter(({ id }) => {
      return id !== cardId;
    });

    localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr));

    updateLocalStorageCounter();

    if (!basketArr.length) {
      cardList.innerHTML = markupCardsError();
    }
  }
}

window.addEventListener('storage', () => {
  basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
  updateLocalStorageCounter();
  getLocalStorageData();
});
