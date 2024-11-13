import { createBaseMarkup } from './createMarkup';

export function historyMatches(container: HTMLElement, targetEl: HTMLElement) {
  // -----handlerMarkup-----
  createBaseMarkup(container);

  // -----handlerHash-------
  const hash = targetEl.dataset.hash;
  if (hash) location.hash = hash;
}
