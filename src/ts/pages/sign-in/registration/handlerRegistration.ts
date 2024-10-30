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
        const uid = user.uid;
        const email = user.email;
        const displayName = user.displayName;
        console.log('User ID:', uid);
        console.log('User Email:', email);
        console.log('User Display Name:', displayName);
      })
      .catch(error => {
        console.error('Registration failed:', error.message);
      });

    form.reset();
  });

  // toggleVisiblePassword
  toggleVisiblePassword(form);
}
