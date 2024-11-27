import { backdropListMarkup } from './backdropListMarkup';

export function openTournamentsBackdrop(formObj: any) {
  const backdrop = document.querySelector('.js-tournaments-backdrop');

  backdrop?.classList.add('tournaments-backdrop_active');
  document.body.classList.add('to-freeze');

  setTimeout(() => backdropListMarkup(formObj), 5000);
}
