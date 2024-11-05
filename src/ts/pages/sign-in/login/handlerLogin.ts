import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/ts/utils/firebaseConfig';
import { markup } from './createMarkup';
import { toggleVisiblePassword } from '@/ts/utils/toggleVisiblePassword';
import { loginThroughProvider } from './loginThroughProvider';
import 'toastr/build/toastr.min.css';
// import toastr from 'toastr';
// import { toastrOptions } from '@/ts/types/base/lib/lib';

import { validateForm } from '@/ts/utils/validateForm';

// toastr.options = toastrOptions;

export function handlerLogin(form: HTMLFormElement) {
  form.innerHTML = markup();

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let emailEl = document.querySelector('.js-login-email') as HTMLInputElement;
    if (!emailEl) return;
    const email = emailEl.value;
    const password = (document.querySelector('.js-login-password') as HTMLInputElement).value;

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // const user = userCredential.user;
        window.location.href = '/cabinet';
        form.reset();
      })
      .catch(error => {
        // console.error('Error signing in:', error);
        // toastr.error('Не вдалося увійти. Перевірте свій email або пароль і спробуйте ще раз.');
      });
  });

  // loginThroughProvider
  loginThroughProvider(form);
  // toggleVisiblePassword
  toggleVisiblePassword(form);
  //  validateForm
  validateForm(form);
}
