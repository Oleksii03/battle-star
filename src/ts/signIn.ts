import { signInOrSignUpHandler } from './pages/sign-in/loginOrRegistrationHandler';
import { onStateUserChanged } from './pages/sign-in/cabinet/cabinet';

document.addEventListener('DOMContentLoaded', () => {
  signInOrSignUpHandler();
  onStateUserChanged();
});
