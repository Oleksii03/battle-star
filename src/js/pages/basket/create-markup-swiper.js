import { getFirestore } from 'firebase/firestore';
import { getAllDocuments } from '../../utils/mixins';

export function createMarkupSwiperCard(app) {
  const recommendationsBox = document.querySelector('.js-basket-recommendations-swiper');

  // ----refs------------
  const collectionName = ['Recommendations'];
  const arrContainers = [recommendationsBox];
  // ---arrs-------------

  const db = getFirestore(app);

  for (let i = 0; i < collectionName.length; i++) {
    const title = collectionName[i];
    const container = arrContainers[i];

    getAllDocuments(db, title, container);
  }
}
