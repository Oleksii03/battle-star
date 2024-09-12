import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

import { cardsMarkup } from './cards-markup';

export function stockCard() {
  const firebaseConfig = {
    // https://firebase.google.com/docs/web/setup#available-libraries
    apiKey: 'AIzaSyCeoo8r7oEqKQs1O_YxVO2RAd8WWV3HWso',
    authDomain: 'flowers-4b1a5.firebaseapp.com',
    projectId: 'flowers-4b1a5',
    storageBucket: 'flowers-4b1a5.appspot.com',
    messagingSenderId: '719757325067',
    appId: '1:719757325067:web:6e609ba7f0d37bdd23e80e',
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  async function getAllDocuments() {
    try {
      const querySnapshot = await getDocs(collection(db, 'Stock'));
      const stockArray = [];

      querySnapshot.forEach(doc => {
        stockArray.push({ id: doc.id, ...doc.data() });
      });

      return stockArray;
    } catch (error) {
      console.error('Error getting documents:', error);
      return [];
    }
  }

  getAllDocuments()
    .then(doc => cardsMarkup(doc))
    .catch(error => {
      console.error('Error in getAllDocuments:', error);
    });
}
