import { markup } from './createMarkup';

export function handlerRegistration(form: HTMLFormElement): void {
  form.innerHTML = markup();
}
