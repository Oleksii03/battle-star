import { header } from './components/header';
import { closeDropDownList } from './components/closeDropDownList';
import { onStateUserChanged } from './pages/sign-in/cabinet/cabinet';
import { logoutThroughSidebar } from './pages/sign-in/cabinet/signOut';
import { settingsHtmlComponents } from './utils/settingsHtmlComponents';
import { createCalendar } from './components/createCalendar';
import { handlerTournaments } from './pages/tournaments/tournamentsPageHandler';

document.addEventListener('DOMContentLoaded', () => {
  header();
  closeDropDownList();
  onStateUserChanged();
  logoutThroughSidebar();
  settingsHtmlComponents();
  createCalendar();
  handlerTournaments();
});
