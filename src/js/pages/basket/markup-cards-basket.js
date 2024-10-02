export function markupCardsSuccess(arrData) {
  return arrData.map((obj, i) => {
    const {
      id,
      discount,
      price,
      oldPrice,
      title,
      img: { png, webp },
    } = obj;

    // Return HTML markup for cards
    return `
      <li class="basket-main__list-item" data-id="${id}">
          <picture class="basket-main__list-picture">
            <source
              srcset="${webp}"
              type="image/webp" />
            <img
              class="basket-main__list-img"
              width="83"
              height="104"
              src="${png}"
              alt="#" />
          </picture>

          <div class="basket-main__list-info">
            <h3 class="basket-main__list-title">${title}</h3>

            <div class="basket-main__list-price-piece">
              <p class="basket-main__list-price-piece_new">${price} <span>₴</span></p>
              ${discount ? `<p class="basket-main__list-price-piece_old js-old-price" data-old-price="${oldPrice}">${oldPrice} <span>₴</span></p>` : ''}
            </div>

            <div class="basket-main__list-amount-box">
              <button class="basket-main__list-btn js-basket-btn-decrement">
                <svg
                  class="basket-main__list-btn-icon"
                  width="9"
                  height="4">
                  <use xlink:href="#small-arrow-left"></use>
                </svg>
              </button>
              <span class="basket-main__list-amount js-basket-amount">1</span>
              <button class="basket-main__list-btn js-basket-btn-increment">
                <svg
                  class="basket-main__list-btn-icon"
                  width="9"
                  height="4">
                  <use xlink:href="#small-arrow-righ"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="basket-main__list-price-box list-price">
            <div class="list-price__icon-box">
              <svg
                width="18"
                height="18"
                class="list-price__icon list-price__icon_remove js-remove-card">
                <use class="js-remove-card" xlink:href="#remove-basket"></use>
              </svg>
              <svg
                width="16"
                height="14"
                class="list-price__icon list-price__icon_favorite">
                <use xlink:href="#icon-heart"></use>
              </svg>
            </div>
            <p class="list-price__price js-current-price" 
            data-price="${price}">
            ${price}<span> ₴</span>
            </p>
          </div>
        </li>`;
  });
}

export function markupCardsError() {
  return `
      <li
        class="basket-main__list-item_empty-basket list-item__empty-basket js-empty-basket-item">
        <h3 class="list-item__empty-basket-title">
          Ваш кошик порожній - додайте товари, щоб він не сумував.
        </h3>
        <img
          class="list-item__empty-basket-img"
          width="500"
          height="500"
          src="https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fempty-shopping-cart.webp?alt=media&token=3c262b31-1194-4d5e-9cc7-4c1f827f99a0"
          alt="#" />
      </li>`;
}
