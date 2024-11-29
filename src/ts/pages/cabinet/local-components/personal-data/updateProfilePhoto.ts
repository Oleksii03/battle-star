import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import { auth } from '@/ts/utils/firebaseConfig';

const storage = getStorage();
const db = getFirestore();

export function updateProfilePhoto() {
  const label = document.querySelector('.js-personal-data-input-img');

  label?.addEventListener('change', async (e: Event) => {
    if (e.target instanceof HTMLInputElement && e.target.files) {
      const file = e.target.files[0];

      const storageRef = ref(storage, `profileImages/${file.name}`);
      await uploadBytes(storageRef, file);

      const downloadURL = await getDownloadURL(storageRef);
      // const user = JSON.parse(localStorage.getItem('user') ?? '');
      // const user = auth.currentUser;

      // if (user) {
      //   await updateProfile(user, { photoURL: downloadURL });
      // }

      const userDocRef = doc(db, 'users', 'USER_ID');
      await setDoc(userDocRef, { profileImageUrl: downloadURL }, { merge: true });

      if (document.querySelector('.js-personal-data-img')) {
        (document.querySelector('.js-personal-data-img') as HTMLImageElement).src = downloadURL;
        localStorage.setItem('userImg', downloadURL);
      }
    }
  });
}
