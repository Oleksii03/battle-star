import { markup } from './createMarkup';
import { toggleVisiblePassword } from './toggleVisiblePassword';
import { registerUser } from './registerUser';

export function handlerRegistration(form: HTMLFormElement): void {
  // markup
  form.innerHTML = markup();

  // handlerForm
  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const email = (document.querySelector('.js-form-input-email') as HTMLInputElement).value;
    const password = (document.querySelector('.js-form-input-password') as HTMLInputElement).value;
    const nickname = (document.querySelector('.js-input-nickname') as HTMLInputElement).value;

    registerUser(email, password, nickname)
      .then(user => {
        console.log(user);
        form.reset();
      })
      .catch(error => {
        console.error('Registration failed:', error.message);
      });
  });

  // toggleVisiblePassword
  toggleVisiblePassword(form);
}
