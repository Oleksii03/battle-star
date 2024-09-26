export function addToBasket() {
  const mainContainer = document.querySelector('.js-main-container');
  // ----refs-------

  const KEY_BASKET = 'basket';
  const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];

  mainContainer.addEventListener('click', getCurrentCardData);

  function getCurrentCardData({ target }) {
    if (!target.classList.contains('js-basket')) return;

    const currentCard = target.closest('.js-main-swiper-slide');

    const title = currentCard.querySelector('.js-main-swiper-slide-title').textContent.trim();
    const imgSrc = currentCard.querySelector('.js-main-swiper-slide-img').src;
    const oldPrice = currentCard.querySelector('.js-main-swiper-slide-price-old')
      ? currentCard.querySelector('.js-main-swiper-slide-price-old').textContent.trim()
      : 0;
    const price = currentCard.querySelector('.js-main-swiper-slide-price-new').textContent.trim();

    const cardData = {
      id: currentCard.dataset.id,
      title: title,
      imgSrc: imgSrc,
      price: parseInt(price),
      oldPrice: parseInt(oldPrice),
    };

    const inStorage = basketArr.some(({ id }) => id === cardData.id);

    if (inStorage) return;

    basketArr.push(cardData);
    localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr));
  }
}
