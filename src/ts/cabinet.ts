import { signInOrSignUpHandler } from './pages/sign-in/loginOrRegistrationHandler';
import { onStateUserChanged } from './pages/sign-in/cabinet/cabinet';
import { header } from './components/header';

document.addEventListener('DOMContentLoaded', () => {
  header();
  signInOrSignUpHandler();
  onStateUserChanged();
  onStateUserChanged();

  console.log(window.location.pathname === '/cabinet.html');
});
