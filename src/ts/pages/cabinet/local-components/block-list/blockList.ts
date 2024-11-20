import { createBlockListMarkup } from './createBlockListMarkup';

export function handlerBlockList(container: HTMLElement, targetEl: HTMLLIElement) {
  // createar-markup;
  createBlockListMarkup(container);

  // handler-URL;
  const hash = targetEl.dataset.hash;
  if (hash) location.hash = hash;
}
