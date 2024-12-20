import { disablePageScroll } from 'scroll-lock';
import { backdropListMarkup } from './backdropListMarkup';
import { TournamentsForm } from '@/ts/types/pages/tournaments';

export function openTournamentsBackdrop(formObj: TournamentsForm) {
  const backdrop = document.querySelector('.js-tournaments-backdrop');

  backdrop?.classList.add('tournaments-backdrop_active');
  disablePageScroll();

  setTimeout(() => backdropListMarkup(formObj), 5000);
}
