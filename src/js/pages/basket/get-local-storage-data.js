import { KEY_BASKET } from '../../utils/constants';
import { markupCardsSuccess, markupCardsError } from './markup-cards-basket';
import { updateLocalStorageCounter } from '../../utils/update-local-storage-counter';

export function getLocalStorageData() {
  const cardList = document.querySelector('.js-basket-card-list');
  const titleShoppingList = document.querySelector('.js-title-shopping-list');
  // ---refs--
  let basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];

  console.log(basketArr);
  // ---createMarkup---
  function createMarkup(arrData) {
    if (arrData.length) {
      cardList.innerHTML = markupCardsSuccess(arrData).join('');
      titleShoppingList.style.display = 'flex';
    } else {
      cardList.innerHTML = markupCardsError();
      titleShoppingList.style.display = 'none';
    }
  }
  createMarkup(basketArr);

  // ---handlerLocalStorageData---
  cardList.addEventListener('click', handlerLocalStorageData);

  function handlerLocalStorageData({ target, type }) {
    if (target.classList.contains('js-remove-card')) {
      removeTargetCard(target);
    }

    if (target.closest('.js-basket-btn-increment')) {
      incrementQuantity(target);
    } else if (target.closest('.js-basket-btn-decrement')) {
      decrementQuantity(target);
    }
  }

  // ---incrementQuantity---
  function incrementQuantity(target) {
    const targetCard = target.closest('.basket-main__list-item');
    let amountEl = targetCard.querySelector('.js-basket-amount');
    let currentPriceEl = targetCard.querySelector('.js-current-price');
    // ---refs--
    let quantity = +amountEl.textContent;

    const currentPrice = +currentPriceEl.dataset.price;

    console.log(quantity);
    console.log(currentPrice);

    if (quantity >= 10) return;

    amountEl.textContent = quantity += 1;
    currentPriceEl.textContent = `${currentPrice * quantity} ₴`;
  }

  // ---decrementQuantity---
  function decrementQuantity(target) {
    const targetCard = target.closest('.basket-main__list-item');
    let amountEl = targetCard.querySelector('.js-basket-amount');
    let currentPriceEl = targetCard.querySelector('.js-current-price');
    // ---refs--
    let quantity = +amountEl.textContent;
    const currentPrice = +currentPriceEl.dataset.price;

    if (quantity <= 1) return;

    amountEl.textContent = quantity -= 1;
    currentPriceEl.textContent = `${currentPrice * quantity} ₴`;
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
      titleShoppingList.style.display = 'none';
    }
  }

  window.addEventListener('storage', () => {
    basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
    updateLocalStorageCounter();
    createMarkup(basketArr);
  });
}
