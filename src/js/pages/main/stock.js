import { getFirestore, collection, getDocs } from 'firebase/firestore';

import { cardsMarkup } from './cards-markup';

export function createCard(app) {
  const stockBox = document.querySelector('.js-main-swiper-stock');
  const seasonalBox = document.querySelector('.js-main-swiper-seasonal');

  const collectionName = ['Stock', 'Seasonal'];
  const arrContainers = [stockBox, seasonalBox];

  const db = getFirestore(app);

  async function getAllDocuments(title = '', container = '') {
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

  for (let i = 0; i < collectionName.length; i++) {
    const title = collectionName[i];
    const container = arrContainers[i];

    getAllDocuments(title, container);
  }

  // getAllDocuments(arrTitle, arrContainer);

  // getAllDocuments()
  //   .then(doc => cardsMarkup(doc))
  //   .catch(error => {
  //     console.error('Error in getAllDocuments:', error);
  //   });
}
