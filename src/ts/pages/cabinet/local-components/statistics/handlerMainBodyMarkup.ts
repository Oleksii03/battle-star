import { createMainBodyMarkupDota } from './createMainBodyMarkupDota';

export function handlerMainBodyMarkup(contentContainer: HTMLDivElement, btnsBox: HTMLDivElement) {
  // default-markup-handler
  contentContainer.innerHTML = createMainBodyMarkupDota();

  // click-markup-handler
  btnsBox.addEventListener('click', (e: Event) => {
    const targetEl = e.target as HTMLButtonElement;

    if (targetEl.tagName !== 'BUTTON') return;

    // handler-markups
    if (targetEl.classList.contains('js-statistics-btn-csgo')) {
      console.log(targetEl);
      return;
    }

    if (targetEl.classList.contains('js-statistics-btn-dota')) {
      contentContainer.innerHTML = createMainBodyMarkupDota();
      return;
    }
  });
}
