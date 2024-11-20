import { settingsHtmlComponents } from './utils/settingsHtmlComponents';
import { signInOrSignUpHandler } from './pages/sign-in/loginOrRegistrationHandler';
import { onStateUserChanged } from './pages/sign-in/cabinet/cabinet';
import { header } from './components/header';
import { logoutThroughSidebar } from './pages/sign-in/cabinet/signOut';
import { pageCabinet } from './pages/cabinet/pageCabinet';
import { checkAuth } from './utils/checkAuth';
import { closeDropDownList } from './components/closeDropDownList';

document.addEventListener('DOMContentLoaded', () => {
  settingsHtmlComponents();
  header();
  signInOrSignUpHandler();
  onStateUserChanged();
  onStateUserChanged();
  logoutThroughSidebar();
  pageCabinet();
  checkAuth();
  closeDropDownList();
});

// const cabinetUrl = window.location.pathname;
