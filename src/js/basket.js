import { header } from './partials/header';
import { mobMenu } from './partials/mob-menu';
import { createAccordionFaq } from './partials/accordion';
import { getLocalStorageData } from './pages/basket/get-local-storage-data';
import { updateLocalStorageCounter } from './utils/update-local-storage-counter';

document.addEventListener('DOMContentLoaded', () => {
  header();
  mobMenu();
  createAccordionFaq();
  getLocalStorageData();
  updateLocalStorageCounter();
});
