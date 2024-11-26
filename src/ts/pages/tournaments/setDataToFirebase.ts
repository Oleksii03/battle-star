import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '@/ts/utils/firebaseConfig';
import { handleError } from '@/ts/utils/handleError';

export async function setDataToFirebase(formObj: any) {
  const db = getFirestore(app);

  try {
    const docRef = await addDoc(collection(db, 'tournaments'), formObj);
    console.log('Документ записано з ID: ', docRef.id);
  } catch (e) {
    handleError(e);
  }
}
