import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig';

export async function getDatFaromFirestore(collectionName: string): Promise<any[]> {
  let app = firebaseConfig();
  const db = getFirestore(app);

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
