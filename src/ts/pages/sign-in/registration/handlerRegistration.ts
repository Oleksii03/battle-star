import { markup } from './createMarkup';
import { toggleVisiblePassword } from '@/ts/utils/toggleVisiblePassword';
import { registerUser } from './registerUser';
import { validateForm } from '@/ts/utils/validateForm';
import { handleError } from '@/ts/utils/handleError';

export function handlerRegistration(form: HTMLFormElement): void {
  // markup
  form.innerHTML = markup();

  // handlerForm
  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let emailEl = document.querySelector('.js-form-input-email') as HTMLInputElement;
    if (!emailEl) return;
    const email = emailEl.value.trim();
    const password = (document.querySelector('.js-form-input-password') as HTMLInputElement).value;
    const nickname = (
      document.querySelector('.js-input-nickname') as HTMLInputElement
    ).value.trim();

    registerUser(email, password, nickname)
      .then(user => {
        form.reset();
      })
      .catch(error => {
        handleError(error);
      });
  });

  // toggleVisiblePassword
  toggleVisiblePassword(form);
  // validateForm
  validateForm(form);
}
