import { createMainBodyMarkupDota } from './createMainBodyMarkupDota';
import { createMainBodyMarkupCsgo } from './createMainBodyMarkupCsgo';

export function handlerMainBodyMarkup(contentContainer: HTMLDivElement, btnsBox: HTMLDivElement) {
  const thumb = document.querySelector('.js-cabinet-statistics-thumb');
  // ---/-refs--------

  // default-markup-handler
  contentContainer.innerHTML = createMainBodyMarkupDota();

  // click-markup-handler
  btnsBox.addEventListener('click', (e: Event) => {
    const targetEl = e.target as HTMLButtonElement;

    if (targetEl.tagName !== 'BUTTON') return;

    [...btnsBox.children].forEach(btn => btn.classList.remove('cabinet-statistics__btn_active'));

    // handler-markups
    if (targetEl.classList.contains('js-statistics-btn-csgo')) {
      contentContainer.innerHTML = createMainBodyMarkupCsgo();

      thumb?.classList.add('cabinet-statistics__btns-thumb_active');
      targetEl.classList.add('cabinet-statistics__btn_active');
      return;
    }

    if (targetEl.classList.contains('js-statistics-btn-dota')) {
      contentContainer.innerHTML = createMainBodyMarkupDota();

      thumb?.classList.remove('cabinet-statistics__btns-thumb_active');
      targetEl.classList.add('cabinet-statistics__btn_active');
      return;
    }
  });
}
