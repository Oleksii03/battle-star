import { createMarkup } from './createMarkup';

export function statisticHandler(container: HTMLElement, targetEl: HTMLElement) {
  createMarkup(container);

  // ------------

  const hash = targetEl.dataset.hash;

  console.log(hash);

  if (hash) location.hash = hash;
}
