import { signInOrSignUpHandler } from './pages/sign-in/loginOrRegistrationHandler';
import { onStateUserChanged } from './pages/sign-in/cabinet/cabinet';

document.addEventListener('DOMContentLoaded', () => {
  signInOrSignUpHandler();
  onStateUserChanged();
});

export const signIntUrl = window.location.pathname;

console.log(signIntUrl);
