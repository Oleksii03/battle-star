import { markup } from './createMarkup';
import { toggleVisiblePassword } from '@/ts/utils/toggleVisiblePassword';
import { registerUser } from './registerUser';

export function handlerRegistration(form: HTMLFormElement): void {
  // markup
  form.innerHTML = markup();

  // handlerForm
  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let emailEl = document.querySelector('.js-form-input-email') as HTMLInputElement;
    if (!emailEl) return;
    const email = emailEl.value;
    const password = (document.querySelector('.js-form-input-password') as HTMLInputElement).value;
    const nickname = (document.querySelector('.js-input-nickname') as HTMLInputElement).value;

    registerUser(email, password, nickname)
      .then(user => {
        form.reset();
      })
      .catch(error => {
        // console.error('Registration failed:', error.message);
        alert('Користувч з таким email вже зареєстрований');
      });
  });

  // toggleVisiblePassword
  toggleVisiblePassword(form);
}
