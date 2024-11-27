import { setDataToFirebase } from './setDataToFirebase';

export function closeTournamentsBackdrop(formObj: any) {
  const backdrop = document.querySelector('.js-tournaments-backdrop');
  const closeBtn = document.querySelector('.js-cancel');
  const confirmBtn = document.querySelector('.js-confirm');

  closeBtn?.addEventListener('click', () => {
    closeBackdrop();
    location.reload();
  });
  confirmBtn?.addEventListener('click', () => {
    setDataToFirebase(formObj);
    closeBackdrop();
  });

  function closeBackdrop() {
    backdrop?.classList.remove('tournaments-backdrop_active');
    document.body.classList.remove('to-freeze');
  }
}
