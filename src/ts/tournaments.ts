import { header } from './components/header';
import { closeDropDownList } from './components/closeDropDownList';
import { onStateUserChanged } from './pages/sign-in/cabinet/cabinet';
import { logoutThroughSidebar } from './pages/sign-in/cabinet/signOut';
import { settingsHtmlComponents } from './utils/settingsHtmlComponents';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';

document.addEventListener('DOMContentLoaded', () => {
  header();
  closeDropDownList();
  onStateUserChanged();
  logoutThroughSidebar();
  settingsHtmlComponents();

  // Ініціалізація календаря
  flatpickr('#myCalendar', {
    locale: Ukrainian,
    inline: true,
    dateFormat: 'Y-m-d',
    mode: 'range',
  });
});
