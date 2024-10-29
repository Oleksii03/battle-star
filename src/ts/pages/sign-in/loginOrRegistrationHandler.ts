import { handlerLogin } from './login/handlerLogin';
import { handlerRegistration } from './registration/handlerRegistration';

export function signInOrSignUpHandler() {
  const signIn = document.querySelector('.js-form-btn-enter');
  const signUp = document.querySelector('.js-form-btn-create');
  const tumbBtns = document.querySelector('.js-form-btns-tumb');
  const form = document.querySelector('.js-sign-in-form');
  // --local-refs---

  // signIn
  signIn?.addEventListener('click', handlerSignIn);

  function handlerSignIn() {
    signIn?.classList.add('active-btn');
    signUp?.classList.remove('active-btn');
    tumbBtns?.classList.remove('sign-in__form-btns-tumb_active');

    // handlerLogin
    if (form instanceof HTMLFormElement) {
      handlerLogin(form);
    }
  }
  handlerSignIn();

  // signUp
  signUp?.addEventListener('click', handlersignUp);

  function handlersignUp() {
    signUp?.classList.add('active-btn');
    signIn?.classList.remove('active-btn');
    tumbBtns?.classList.add('sign-in__form-btns-tumb_active');

    // handlerRegistration
    if (form instanceof HTMLFormElement) {
      handlerRegistration(form);
    }
  }
}
