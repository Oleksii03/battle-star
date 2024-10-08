import { KEY_BASKET } from '../../utils/constants';
import { markupCardsSuccess, markupCardsError } from './markup-cards-basket';
import { updateLocalStorageCounter } from '../../utils/update-local-storage-counter';

export function getLocalStorageData() {
  const cardList = document.querySelector('.js-basket-card-list');
  const titleShoppingList = document.querySelector('.js-title-shopping-list');
  const orderTotalPrice = document.querySelector('.js-order-total-price');
  const goodsPrice = document.querySelector('.js-goods-price');
  const discount = document.querySelector('.js-discount-price');
  const btnRemoveAll = document.querySelector('.js-remove-basket-all');
  // ---refs--
  let basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];

  // ---createMarkup---
  function createMarkup(arrData) {
    if (arrData.length) {
      cardList.innerHTML = markupCardsSuccess(arrData).join('');
      titleShoppingList.classList.remove('basket-main__continue-shopping-list_hidden');
      btnRemoveAll.classList.remove('basket-main__content-remove-all_hidden');
    } else {
      cardList.innerHTML = markupCardsError();
      titleShoppingList.classList.add('basket-main__continue-shopping-list_hidden');

      setTimeout(() => {
        btnRemoveAll.classList.add('basket-main__content-remove-all_hidden');
        btnRemoveAll.classList.remove('basket-main__content-remove-all_active');
      }, 2000);
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

  // ------calculateOrde--
  function calculateOrde(arrData) {
    let priceWithoutDiscount = 0;
    let discountPrice = 0;

    arrData.forEach(item => {
      priceWithoutDiscount += item.oldPrice;
      discountPrice += item.price;
    });

    orderTotalPrice.textContent = `${discountPrice} ₴`;
    goodsPrice.textContent = `${priceWithoutDiscount} ₴`;
    discount.textContent = `${priceWithoutDiscount - discountPrice} ₴`;
  }

  calculateOrde(basketArr);

  // ---incrementQuantity---
  function incrementQuantity(target) {
    const targetCard = target.closest('.basket-main__list-item');
    let amountEl = targetCard.querySelector('.js-basket-amount');
    let currentPriceEl = targetCard.querySelector('.js-current-price');
    let oldPrice = targetCard.querySelector('.js-old-price')
      ? targetCard.querySelector('.js-old-price').dataset.oldPrice
      : +currentPriceEl.dataset.price;

    // ---refs--
    let quantity = +amountEl.textContent;
    const currentPrice = +currentPriceEl.dataset.price;

    if (quantity >= 10) return;

    amountEl.textContent = quantity += 1;
    currentPriceEl.textContent = `${currentPrice * quantity} ₴`;
    goodsPrice.textContent = `${parseInt(goodsPrice.textContent) + Number(oldPrice)} ₴`;
    orderTotalPrice.textContent = `${parseInt(orderTotalPrice.textContent) + currentPrice} ₴`;
    discount.textContent = `${parseInt(discount.textContent) + (Number(oldPrice) - currentPrice)} ₴`;
  }

  // ---decrementQuantity---
  function decrementQuantity(target) {
    const targetCard = target.closest('.basket-main__list-item');
    let amountEl = targetCard.querySelector('.js-basket-amount');
    let currentPriceEl = targetCard.querySelector('.js-current-price');
    let oldPrice = targetCard.querySelector('.js-old-price')
      ? targetCard.querySelector('.js-old-price').dataset.oldPrice
      : +currentPriceEl.dataset.price;
    // ---refs--
    let quantity = +amountEl.textContent;
    const currentPrice = +currentPriceEl.dataset.price;

    if (quantity <= 1) return;

    amountEl.textContent = quantity -= 1;
    currentPriceEl.textContent = `${currentPrice * quantity} ₴`;
    goodsPrice.textContent = `${parseInt(goodsPrice.textContent) - Number(oldPrice)} ₴`;
    orderTotalPrice.textContent = `${parseInt(orderTotalPrice.textContent) - currentPrice} ₴`;
    discount.textContent = `${parseInt(discount.textContent) - (Number(oldPrice) - currentPrice)} ₴`;
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
    calculateOrde(basketArr);

    updateStorage();

    if (!basketArr.length) {
      cardList.innerHTML = markupCardsError();
    }
  }

  // --removeAllCards---
  btnRemoveAll.addEventListener('click', e => {
    e.currentTarget.classList.add('basket-main__content-remove-all_active');
    localStorage.removeItem(KEY_BASKET);
    basketArr = [];
    updateLocalStorageCounter();
    createMarkup(basketArr);
    orderTotalPrice.textContent = `${0} ₴`;
    goodsPrice.textContent = `${0} ₴`;
    discount.textContent = `${0} ₴`;
  });

  // --updateStorage---
  window.addEventListener('storage', updateStorage);

  function updateStorage() {
    basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
    updateLocalStorageCounter();
    createMarkup(basketArr);
    calculateOrde(basketArr);
  }
}
