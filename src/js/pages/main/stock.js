import { getFirestore, collection, getDocs } from 'firebase/firestore';

import { cardsMarkup } from './cards-markup';

export function createCard(app) {
  const stockBox = document.querySelector('.js-main-swiper-stock');

  const collectionTitles = ['Stock'];
  const arrContainers = [stockBox];

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

  for (let i = 0; i < collectionTitles.length; i++) {
    const title = collectionTitles[i];
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
