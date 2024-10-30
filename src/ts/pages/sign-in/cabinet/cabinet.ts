import { getAuth, onAuthStateChanged } from 'firebase/auth';

export function onStateUserChanged() {
  const userA = document.querySelector('.js-user');
  const auth = getAuth();

  onAuthStateChanged(auth, user => {
    if (user) {
      // Отримання інформації про користувача
      const uid = user.uid;
      const email = user.email;
      const displayName = user.displayName;

      console.log('User ID:', uid);
      console.log('User Email:', email);
      console.log('User Display Name:', displayName);

      if (userA) userA.textContent = displayName;
    } else {
      console.log('No user is signed in.');
    }
  });
}
