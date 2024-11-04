export function toggleVisiblePassword(form: HTMLFormElement): void {
  const btnReview = form.querySelector('.js-form-input-icon-view');

  btnReview?.addEventListener('click', () => {
    const passwordInput = form.querySelector('.js-form-input-password') as HTMLInputElement;
    const lineCrossOut = form.querySelector('.js-icon-line-cross-out') as HTMLElement;

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      lineCrossOut.style.display = 'none';
      return;
    }

    passwordInput.type = 'password';
    lineCrossOut.style.display = 'inline-block';
  });
}
