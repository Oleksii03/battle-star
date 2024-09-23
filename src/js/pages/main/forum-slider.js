import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { cardsMarkupForum } from './cards-markup-forum';

export function forumSlider(app) {
  const db = getFirestore(app);

  async function getCollection() {
    try {
      const querySnapshot = await getDocs(collection(db, 'main-forum'));

      const forumArray = [];

      querySnapshot.forEach(doc => {
        forumArray.push({ id: doc.id, ...doc.data() });
      });

      cardsMarkupForum(forumArray);
    } catch (error) {
      console.error('Error getting documents:', error);
      return [];
    }
  }

  getCollection();
}
