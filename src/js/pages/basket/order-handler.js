const orderTotalPrice = document.querySelector('.js-order-total-price');
const goodsPrice = document.querySelector('.js-goods-price');
const discount = document.querySelector('.js-discount-price');

export function calculateOrde(arrData) {
  let priceWithoutDiscount = 0;
  let discountPrice = 0;

  arrData.forEach(item => {
    console.log(item);
    priceWithoutDiscount += item.oldPrice;
    discountPrice += item.price;
  });

  orderTotalPrice.textContent = `${discountPrice} ₴`;
  goodsPrice.textContent = `${priceWithoutDiscount} ₴`;
  discount.textContent = `${priceWithoutDiscount - discountPrice} ₴`;

  // console.log(orderTotalPrice.textContent);
}
