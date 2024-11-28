import { createMainBodyMarkupDota } from './createMainBodyMarkupDota';
import { createMainBodyMarkupCsgo } from './createMainBodyMarkupCsgo';

export function handlerMainBodyMarkup(
  contentContainer: HTMLDivElement,
  btnsBox: HTMLDivElement,
  targetEl: HTMLLIElement
) {
  const thumb = document.querySelector('.js-cabinet-statistics-thumb');
  const btnCsgo = btnsBox.querySelector('.js-statistics-btn-csgo');
  const btnDota = btnsBox.querySelector('.js-statistics-btn-dota');
  // ---/-refs--------

  // default-markup-handler
  contentContainer.innerHTML = createMainBodyMarkupDota();

  // click-markup-handler
  btnsBox.addEventListener('click', (e: Event) => {
    const targetBtn = e.target as HTMLButtonElement;

    if (targetBtn.tagName !== 'BUTTON') return;

    [...btnsBox.children].forEach(btn => btn.classList.remove('cabinet-statistics__btn_active'));

    // handler-markups
    if (targetBtn.classList.contains('js-statistics-btn-csgo')) {
      contentContainer.innerHTML = createMainBodyMarkupCsgo();

      targetEl.dataset.hash = 'statistics-csgo';
      const hash = targetEl.dataset.hash;
      if (hash) location.hash = hash;
      localStorage.setItem('statistics', hash);

      thumb?.classList.add('cabinet-statistics__btns-thumb_active');
      targetBtn.classList.add('cabinet-statistics__btn_active');
      return;
    }

    if (targetBtn.classList.contains('js-statistics-btn-dota')) {
      contentContainer.innerHTML = createMainBodyMarkupDota();

      targetEl.dataset.hash = 'statistics-dota';
      const hash = targetEl.dataset.hash;
      if (hash) location.hash = hash;
      localStorage.setItem('statistics', hash);

      thumb?.classList.remove('cabinet-statistics__btns-thumb_active');
      targetBtn.classList.add('cabinet-statistics__btn_active');
      return;
    }
  });

  switch (targetEl.dataset.hash) {
    case 'statistics-csgo':
      contentContainer.innerHTML = createMainBodyMarkupCsgo();
      thumb?.classList.add('cabinet-statistics__btns-thumb_active');
      btnCsgo?.classList.add('cabinet-statistics__btn_active');
      btnDota?.classList.remove('cabinet-statistics__btn_active');
      break;

    case 'statistics-dota':
      contentContainer.innerHTML = createMainBodyMarkupDota();
      thumb?.classList.remove('cabinet-statistics__btns-thumb_active');
      btnDota?.classList.add('cabinet-statistics__btn_active');
      break;
  }
}
