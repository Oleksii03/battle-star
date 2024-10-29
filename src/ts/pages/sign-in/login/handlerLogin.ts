import { markup } from '../login/createMarkup';

export function handlerLogin(form: HTMLFormElement): void {
  form.innerHTML = markup();
}
