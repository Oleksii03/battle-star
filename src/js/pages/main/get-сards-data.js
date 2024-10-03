import { getFirestore } from 'firebase/firestore';
import { getAllDocuments } from '../../utils/mixins';

export function createCard(app) {
  const stockBox = document.querySelector('.js-main-swiper-stock');
  const seasonalBox = document.querySelector('.js-main-swiper-seasonal');
  const presentBox = document.querySelector('.js-main-swiper-present');
  // ----refs------------
  const collectionName = ['Stock', 'Seasonal', 'Present'];
  const arrContainers = [stockBox, seasonalBox, presentBox];
  // ---arrs-------------

  const db = getFirestore(app);

  for (let i = 0; i < collectionName.length; i++) {
    const title = collectionName[i];
    const container = arrContainers[i];

    getAllDocuments(db, title, container);
  }
}
