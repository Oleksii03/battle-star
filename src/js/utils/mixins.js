function getCardData(target) {
  const currentCard = target.closest('.js-main-swiper-slide');

  const title = currentCard.querySelector('.js-main-swiper-slide-title').textContent.trim();
  const imgSrc = currentCard.querySelector('.js-main-swiper-slide-img').src;
  const oldPrice = currentCard.querySelector('.js-main-swiper-slide-price-old')
    ? currentCard.querySelector('.js-main-swiper-slide-price-old').textContent.trim()
    : 0;
  const price = currentCard.querySelector('.js-main-swiper-slide-price-new').textContent.trim();

  return {
    id: currentCard.dataset.id,
    title: title,
    imgSrc: imgSrc,
    price: parseInt(price),
    oldPrice: parseInt(oldPrice),
  };
}

// ----exports----------
export { getCardData };
