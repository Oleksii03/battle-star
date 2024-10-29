export function markup() {
  return `
        <div class="sign-in__form-input-box">
          <input
            type="text"
            class="sign-in__form-input"
            placeholder="Введіть нікнейм"
            required />
        </div>

        <div class="sign-in__form-input-box">
          <input
            type="email"
            class="sign-in__form-input"
            placeholder="Електронна пошта"
            required />
        </div>

        <div class="sign-in__form-input-box">
          <input
            type="password"
            class="sign-in__form-input"
            placeholder="Придумайте пароль"
            required />

          <div class="sign-in__form-input-icon-box">
            <svg
              width="24"
              height="24"
              class="sign-in__form-input-icon">
              <use xlink:href="#icon-eye-views"></use>
            </svg>
            <span class="sign-in__form-input-icon-line"></span>
          </div>
        </div>

        <button
          class="sign-in__form-btn-submit sign-in__form-btn-submit_create"
          type="submit">
          Створити
        </button>`;
}
