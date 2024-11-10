import { loginThroughGoogle } from './loginThroughGoogle';

export function loginThroughProvider(form: HTMLFormElement) {
  const providerList = form.querySelector('.js-login-provider-list');

  providerList?.addEventListener('click', (e: Event) => {
    const targetEl = (e.target as HTMLElement).closest('li');

    if (targetEl?.classList.contains('js-form-item-google')) {
      loginThroughGoogle();
    }
  });
}
