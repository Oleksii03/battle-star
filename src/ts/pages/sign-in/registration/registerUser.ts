import { createUserWithEmailAndPassword, updateProfile, User } from 'firebase/auth';
import { auth } from '../../../utils/firebaseConfig';

import { passwordCriteria } from './passwordCriteria';
import { isEmail, isStrongPassword } from 'validator';

export async function registerUser(
  email: string,
  password: string,
  nickname: string
): Promise<User> {
  // Валідація email та пароля

  if (!isEmail(email)) {
    // throw new Error('Invalid email address');
    console.log('Invalid email address');
  }
  if (!isStrongPassword(password, passwordCriteria)) {
    // throw new Error('Password is not strong enough');
    console.log('Password is not strong enough');
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await updateProfile(user, { displayName: nickname });
    return user;
  } catch (error: any) {
    console.error('Error creating user:', error.code, error.message);
    throw error;
  }
}
