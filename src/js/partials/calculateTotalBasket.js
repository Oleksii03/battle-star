import { KEY_BASKET } from '../utils/constants';
// -----------------------------
export function calculateTotalBasket() {
  const basketSum = document.querySelector('.js-basket-sum');
  let basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];

  let discountPrice = 0;

  basketArr.forEach(item => {
    discountPrice += item.price;
  });

  console.log(discountPrice);
  basketSum.textContent = `₴ ${discountPrice}`;
}
