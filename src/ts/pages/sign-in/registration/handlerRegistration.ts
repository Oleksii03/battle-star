import { markup } from './createMarkup';

export function handlerRegistration(form: HTMLFormElement) {
  form.innerHTML = markup();
}
