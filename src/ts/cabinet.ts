import { settingsHtmlComponents } from './utils/settingsHtmlComponents';
import { signInOrSignUpHandler } from './pages/sign-in/loginOrRegistrationHandler';
import { onStateUserChanged } from './pages/sign-in/cabinet/cabinet';
import { header } from './components/header';
import { logout } from './pages/sign-in/cabinet/signOut';
import { pageCabinet } from './pages/cabinet/pageCabinet';

document.addEventListener('DOMContentLoaded', () => {
  settingsHtmlComponents();
  header();
  signInOrSignUpHandler();
  onStateUserChanged();
  onStateUserChanged();
  logout();
  pageCabinet();
});

// const cabinetUrl = window.location.pathname;
