import { createMarkup } from './createMarkup';
import { updateProfilePhoto } from './updateProfilePhoto';

export function personalData(container: HTMLElement, targetEl: HTMLLIElement) {
  // -----handlerMarkup-----
  container.innerHTML = createMarkup();
  updateProfilePhoto();

  // -----handlerHash-------
  const hash = targetEl.dataset.hash;
  if (hash) location.hash = hash;
}
