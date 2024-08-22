import { createMobileMenu } from './partials/mobile-menu';
import { createRoadmap } from './partials/roadmap';
import { createAccordionFaq } from './partials/accordion-faq';
import { footer } from './partials/footer';

document.addEventListener('DOMContentLoaded', () => {
  createMobileMenu();
  createRoadmap();
  createAccordionFaq();
  footer();
});
