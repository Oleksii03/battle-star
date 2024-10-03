function getCardData(target) {
  const currentCard = target.closest('.js-main-swiper-slide');

  const title = currentCard.querySelector('.js-main-swiper-slide-title').textContent.trim();
  const imgPng = currentCard.querySelector('.js-main-swiper-slide-img').src;
  const imgWebp = currentCard.querySelector('.js-main-swiper-slide-img').dataset.src;
  const oldPrice = currentCard.querySelector('.js-main-swiper-slide-price-old')
    ? currentCard.querySelector('.js-main-swiper-slide-price-old').textContent.trim()
    : 0;
  const price = currentCard.querySelector('.js-main-swiper-slide-price-new').textContent.trim();
  const discount = currentCard.querySelector('.js-main-swiper-slide-price-new').dataset.discount;

  return {
    id: currentCard.dataset.id,
    title: title,
    img: {
      png: imgPng
        ? imgPng
        : 'https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.png?alt=media&token=f6fac92f-15df-4da5-a695-b57533957121',
      webp: imgWebp
        ? imgWebp
        : 'https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-small-404.webp?alt=media&token=76b2ee6e-35c7-4f93-855a-01e009d82bea',
    },
    price: parseInt(price),
    oldPrice: parseInt(oldPrice) ? parseInt(oldPrice) : parseInt(price),
    discount: Number(discount),
  };
}

// ====================================================

import { cardsMarkup } from '../pages/main/cards-markup';
import { collection, getDocs } from 'firebase/firestore';

async function getAllDocuments(db, title = '', container = '') {
  try {
    const querySnapshot = await getDocs(collection(db, title));

    const stockArray = [];

    querySnapshot.forEach(doc => {
      stockArray.push({ id: doc.id, ...doc.data() });
    });

    cardsMarkup(stockArray, container);
  } catch (error) {
    console.error('Error getting documents:', error);
    return [];
  }
}

// ----exports----------
export { getCardData, getAllDocuments };
