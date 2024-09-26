import { header } from './partials/header';
import { mobMenu } from './partials/mob-menu';
import { createAccordionFaq } from './partials/accordion';

document.addEventListener('DOMContentLoaded', () => {
  header();
  mobMenu();
  createAccordionFaq();
});
