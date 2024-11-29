import { enablePageScroll } from 'scroll-lock';
import { setDataToFirebase } from './setDataToFirebase';
import { TournamentsForm } from '@/ts/types/pages/tournaments';

export function closeTournamentsBackdrop(formObj: TournamentsForm) {
  const backdrop = document.querySelector('.js-tournaments-backdrop');
  const closeBtn = document.querySelector('.js-cancel');
  const confirmBtn = document.querySelector('.js-confirm');

  closeBtn?.addEventListener('click', () => {
    location.reload();
    closeBackdrop();
  });

  confirmBtn?.addEventListener('click', () => {
    setDataToFirebase(formObj);
    closeBackdrop();
  });

  function closeBackdrop() {
    backdrop?.classList.remove('tournaments-backdrop_active');
    enablePageScroll();
  }
}
