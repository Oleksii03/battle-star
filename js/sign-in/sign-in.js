import{b as d}from"../../assets/firebaseConfig-wgdHWFF0.js";import{v as r,b as m,u as g}from"../../assets/vendor-F-QY0OwA.js";function p(){return`
        <div class="sign-in__form-input__wrapper">
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
              placeholder="Пароль"
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
        </div>

        <div class="sign-in__form-restore">
          <a
            href="#"
            class="sign-in__form-forgot-password-link">
            Забули пароль?
          </a>
          <a
            href="#"
            class="sign-in__form-restore-link">
            Відновити
          </a>
        </div>

        <button
          class="sign-in__form-btn-submit"
          type="submit">
          Увійти
        </button>

        <div class="sign-in__log-in-via-title-box">
          <p class="sign-in__log-in-via-title">Або увійдіть через</p>
        </div>

        <ul class="sign-in__log-in-via-list">
          <li class="sign-in__log-in-via-item">
            <svg
              width="44"
              height="44"
              class="sign-in__log-in-via-icon">
              <use xlink:href="#icon-form_steam"></use>
            </svg>
          </li>

          <li class="sign-in__log-in-via-item">
            <svg
              width="44"
              height="44"
              class="sign-in__log-in-via-icon">
              <use xlink:href="#icon-form-apple"></use>
            </svg>
          </li>

          <li class="sign-in__log-in-via-item">
            <svg
              width="44"
              height="44"
              class="sign-in__log-in-via-icon">
              <use xlink:href="#icon-form_google"></use>
            </svg>
          </li>

          <li class="sign-in__log-in-via-item">
            <svg
              width="44"
              height="44"
              class="sign-in__log-in-via-icon">
              <use xlink:href="#icon-form-facebook"></use>
            </svg>
          </li>
        </ul>`}function _(i){i.innerHTML=p()}function f(){return`
        <div class="sign-in__form-input-box">
          <input
            type="text"
            class="sign-in__form-input js-input-nickname"
            placeholder="Введіть нікнейм"
            required />
        </div>

        <div class="sign-in__form-input-box">
          <input
            type="email"
            class="sign-in__form-input js-form-input-email"
            placeholder="Електронна пошта"
            required />
        </div>

        <div class="sign-in__form-input-box">
          <input
            type="password"
            class="sign-in__form-input js-form-input-password"
            placeholder="Придумайте пароль"
            required />

          <div class="sign-in__form-input-icon-box">
            <svg
              width="24"
              height="24"
              class="sign-in__form-input-icon js-form-input-icon-view">
              <use xlink:href="#icon-eye-views"></use>
            </svg>
            <span class="sign-in__form-input-icon-line js-icon-line-cross-out"></span>
          </div>
        </div>

        <button
          class="sign-in__form-btn-submit sign-in__form-btn-submit_create"
          type="submit">
          Створити
        </button>`}function v(i){const n=i.querySelector(".js-form-input-icon-view");n==null||n.addEventListener("click",()=>{const s=document.querySelector(".js-form-input-password"),e=document.querySelector(".js-icon-line-cross-out");if(s.type==="password"){s.type="text",e.style.display="none";return}s.type="password",e.style.display="inline-block"})}const a={minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:0};async function h(i,n,s){if(console.log(a),!r.isEmail(i)){console.log("Invalid email address");return}if(!r.isStrongPassword(n,a)){console.log("Password is not strong enough");return}try{const o=(await m(d,i,n)).user;return await g(o,{displayName:s}),window.location.href="cabinet.html",o}catch(e){throw console.error("Error creating user:",e.code,e.message),e}}function b(i){i.innerHTML=f(),i.addEventListener("submit",n=>{n.preventDefault();const s=document.querySelector(".js-form-input-email").value,e=document.querySelector(".js-form-input-password").value,o=document.querySelector(".js-input-nickname").value;h(s,e,o).then(t=>{const l=t.uid,c=t.email,u=t.displayName;console.log("User ID:",l),console.log("User Email:",c),console.log("User Display Name:",u)}).catch(t=>{console.error("Registration failed:",t.message)}),i.reset()}),v(i)}function y(){const i=document.querySelector(".js-form-btn-enter"),n=document.querySelector(".js-form-btn-create"),s=document.querySelector(".js-form-btns-tumb"),e=document.querySelector(".js-sign-in-form");i==null||i.addEventListener("click",o);function o(){i==null||i.classList.add("active-btn"),n==null||n.classList.remove("active-btn"),s==null||s.classList.remove("sign-in__form-btns-tumb_active"),e instanceof HTMLFormElement&&_(e)}o(),n==null||n.addEventListener("click",t);function t(){n==null||n.classList.add("active-btn"),i==null||i.classList.remove("active-btn"),s==null||s.classList.add("sign-in__form-btns-tumb_active"),e instanceof HTMLFormElement&&b(e)}}document.addEventListener("DOMContentLoaded",()=>{y()});
//# sourceMappingURL=sign-in.js.map
