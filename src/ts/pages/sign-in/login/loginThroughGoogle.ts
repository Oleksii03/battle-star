import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '@/ts/utils/firebaseConfig';
import { cabinetUrl } from '@/ts/cabinet';

export function loginThroughGoogle() {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;

      console.log('User signed in with Google:', user);

      window.location.href = cabinetUrl;
    })
    .catch(error => {
      console.error('Error signing in with Google:', error);
    });
}
