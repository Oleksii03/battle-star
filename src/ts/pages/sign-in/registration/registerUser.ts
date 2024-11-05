import { createUserWithEmailAndPassword, updateProfile, User } from 'firebase/auth';
import { auth } from '@/ts/utils/firebaseConfig';
// import { cabinetUrl } from '@/ts/cabinet';
import { passwordCriteria } from './passwordCriteria';
import { isEmail, isStrongPassword } from 'validator';

export async function registerUser(
  email: string,
  password: string,
  nickname: string
): Promise<User | void> {
  // Валідація email та пароля
  if (!isEmail(email)) {
    console.log('Invalid email address');
    return;
  }
  if (!isStrongPassword(password, passwordCriteria)) {
    console.log('Password is not strong enough');
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await updateProfile(user, { displayName: nickname });

    window.location.href = '/cabinet';
    return user;
  } catch (error: any) {
    console.error('Error creating user:', error.code, error.message);
    throw error;
  }
}
