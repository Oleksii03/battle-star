import { createMarkupWallet } from './createMarkupWallet';

export function handlerWallet(container: HTMLElement, targetEl: HTMLLIElement) {
  createMarkupWallet(container);
  const hash = targetEl.dataset.hash;
  if (hash) location.hash = hash;
  console.log(hash);
}
