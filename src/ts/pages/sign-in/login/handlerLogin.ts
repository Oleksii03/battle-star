import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/ts/utils/firebaseConfig';
import { markup } from './createMarkup';
import { toggleVisiblePassword } from '@/ts/utils/toggleVisiblePassword';
import { loginThroughProvider } from './loginThroughProvider';
import 'toastr/build/toastr.min.css';
import { validateForm } from '@/ts/utils/validateForm';
import { handleError } from '@/ts/utils/handleError';

export function handlerLogin(form: HTMLFormElement) {
  // create-markup
  form.innerHTML = markup();
  // handler-login
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
        handleError(error);
      });
  });

  // login-through-provider
  loginThroughProvider(form);
  // toggle-visible-password
  toggleVisiblePassword(form);
  //  validate-form
  validateForm(form);
}
