import { createMarkup } from './createMarkup';

export function statisticHandler(container: HTMLElement, targetEl: HTMLLIElement) {
  // -----handlerMarkup-----
  createMarkup(container);

  // -----handlerHash-------
  const hash = targetEl.dataset.hash;
  if (hash) location.hash = hash;
  console.log(hash);
}
