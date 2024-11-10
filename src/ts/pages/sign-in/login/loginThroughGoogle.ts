import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '@/ts/utils/firebaseConfig';
import { handleError } from '@/ts/utils/handleError';

export function loginThroughGoogle() {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      console.log('User signed in with Google:', user);

      window.location.href =
        window.location.hostname === 'localhost' ? '/cabinet' : '/battle-star/cabinet';
      localStorage.setItem('logged', 'true');
    })
    .catch(handleError);
}
