import { signInOrSignUpHandler } from './pages/sign-in/loginOrRegistrationHandler';
import { onStateUserChanged } from './pages/sign-in/cabinet/cabinet';
import { header } from './components/header';

document.addEventListener('DOMContentLoaded', () => {
  header();
  signInOrSignUpHandler();
  onStateUserChanged();
  onStateUserChanged();

  const currentPath = window.location.pathname;

  if (currentPath.includes('/cabinet')) {
    console.log('You are on the cabinet page.');
    console.log(currentPath);
  }
});
