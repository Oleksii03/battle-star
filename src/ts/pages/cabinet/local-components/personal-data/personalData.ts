import { createMarkup } from './createMarkup';

export function personalData(container: HTMLElement, targetEl: HTMLLIElement) {
  // -----handlerMarkup-----
  container.innerHTML = createMarkup();
  // console.log(createMarkup());

  // -----handlerHash-------
  const hash = targetEl.dataset.hash;
  if (hash) location.hash = hash;
}
