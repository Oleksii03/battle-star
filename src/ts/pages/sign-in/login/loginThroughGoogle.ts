import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '@/ts/utils/firebaseConfig';

export function loginThroughGoogle() {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;

      console.log('User signed in with Google:', user);

      window.location.href = '/cabinet';
    })
    .catch(error => {
      console.error('Error signing in with Google:', error);
    });
}
