import { markup } from '../login/createMarkup';

export function handlerLogin(form: HTMLFormElement) {
  form.innerHTML = markup();
}
