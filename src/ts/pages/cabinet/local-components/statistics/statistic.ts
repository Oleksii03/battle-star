import { createMarkup } from './createMarkup';

export function statisticHandler(container: HTMLElement, targetEl: HTMLElement) {
  createMarkup(container);

  // ------------

  const hash = targetEl.dataset.hash; // Отримуємо значення з data-url

  location.hash = hash;
}
