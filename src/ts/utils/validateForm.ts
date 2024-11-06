import JustValidate from 'just-validate';

export function validateForm(form: HTMLFormElement) {
  const emailEl = form.querySelector('#email') as HTMLInputElement;
  const passwordEl = form.querySelector('#password') as HTMLInputElement;
  const namedEl = form.querySelector('#name') as HTMLInputElement;

  const validate: any = new JustValidate(form);

  validate.addField(emailEl, [
    { rule: 'required', errorMessage: 'Email is required.' },
    { rule: 'email', errorMessage: 'Email is invalid!' },
  ]);

  validate.addField(passwordEl, [
    { rule: 'required', errorMessage: 'Password is required.' },
    { rule: 'password', errorMessage: 'Password must be strong.' },
  ]);

  if (namedEl) {
    validate.addField(namedEl, [
      { rule: 'required', errorMessage: 'Name is required.' },
      { rule: 'minLength', value: 2, errorMessage: 'Name must be between 2 and 30 characters.' },
      { rule: 'maxLength', value: 30, errorMessage: 'Name must be between 2 and 30 characters.' },
    ]);
  }
}
