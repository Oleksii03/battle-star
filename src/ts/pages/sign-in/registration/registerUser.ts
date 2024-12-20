import { createUserWithEmailAndPassword, updateProfile, User } from 'firebase/auth';
import { auth } from '@/ts/utils/firebaseConfig';
import { handleError } from '@/ts/utils/handleError';

export async function registerUser(
  email: string,
  password: string,
  nickname: string
): Promise<User | void> {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await updateProfile(user, { displayName: nickname });

    window.location.href =
      window.location.hostname === 'localhost'
        ? '/cabinet'
        : '/battle-star/cabinet#statistics-dota';
    localStorage.setItem('logged', 'true');
    return user;
  } catch (error) {
    handleError(error);
  }
}
