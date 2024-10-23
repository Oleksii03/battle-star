import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig';

export async function getDataFromFirestore(collectionName: string): Promise<any[]> {
  const app = firebaseConfig();
  const db: Firestore = getFirestore(app);

  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const collectionsArr: any[] = [];

    querySnapshot.forEach(doc => {
      collectionsArr.push({ id: doc.id, ...doc.data() });
    });

    return collectionsArr;
  } catch (error) {
    console.error('Error getting documents:', error);
    return [];
  }
}
