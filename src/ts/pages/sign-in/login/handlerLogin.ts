import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/ts/utils/firebaseConfig';
import { markup } from './createMarkup';
import { toggleVisiblePassword } from '@/ts/utils/toggleVisiblePassword';

export function handlerLogin(form: HTMLFormElement) {
  form.innerHTML = markup();

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const email = (document.querySelector('.js-login-email') as HTMLInputElement).value;
    const password = (document.querySelector('.js-login-password') as HTMLInputElement).value;

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;

        window.location.href = '/cabinet';
        form.reset();
      })
      .catch(error => {
        console.error('Error signing in:', error);
        alert('Не вдалося увійти. Перевірте свій email або пароль і спробуйте ще раз.');
      });
  });

  toggleVisiblePassword(form);
}
