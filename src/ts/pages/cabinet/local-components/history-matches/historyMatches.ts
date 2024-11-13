import { createBaseMarkup } from './createMarkup';

export function historyMatches(container: HTMLElement, targetEl: HTMLElement) {
  createBaseMarkup(container);

  // --------------------

  const hash = targetEl.dataset.hash;
  if (hash) location.hash = hash;

  console.log(hash);
}
