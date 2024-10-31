import { settingsHtmlComponents } from './pages/sign-in/cabinet/settingsHtmlComponents';
import { signInOrSignUpHandler } from './pages/sign-in/loginOrRegistrationHandler';
import { onStateUserChanged } from './pages/sign-in/cabinet/cabinet';
import { header } from './components/header';

document.addEventListener('DOMContentLoaded', () => {
  settingsHtmlComponents();
  header();
  signInOrSignUpHandler();
  onStateUserChanged();
  onStateUserChanged();
});
