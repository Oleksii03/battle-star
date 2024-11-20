import { createMarkup } from './createMarkup';

export function statisticHandler(container: HTMLElement, targetEl: HTMLLIElement) {
  // -----handlerMarkup-----
  createMarkup(container);

  // handler-URL;
  const hash = targetEl.dataset.hash;
  if (hash) location.hash = hash;
}
