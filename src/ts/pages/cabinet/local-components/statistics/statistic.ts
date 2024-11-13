import { createMarkup } from './createMarkup';

export function statisticHandler(container: HTMLElement, targetEl: HTMLElement) {
  // -----handlerMarkup-----
  createMarkup(container);

  // -----handlerHash-------
  const hash = targetEl.dataset.hash;
  if (hash) location.hash = hash;
}
