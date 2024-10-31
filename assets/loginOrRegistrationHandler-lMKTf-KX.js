import{v as r,b as a,u as c}from"./vendor-CPpcl-xY.js";import{b as l}from"./cabinet-Q0sU3oaF.js";function u(){return`
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
        </ul>`}function d(i){i.innerHTML=u()}function m(){return`
        <div class="sign-in__form-input-box">
          <input
            type="text"
            class="sign-in__form-input js-input-nickname"
            placeholder="Введіть нікнейм"
            pattern="^[a-zA-Zа-яА-ЯїЇєЄіІ]{2,15}$"
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
        </button>`}function g(i){const n=i.querySelector(".js-form-input-icon-view");n==null||n.addEventListener("click",()=>{const s=document.querySelector(".js-form-input-password"),e=document.querySelector(".js-icon-line-cross-out");if(s.type==="password"){s.type="text",e.style.display="none";return}s.type="password",e.style.display="inline-block"})}const _={minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:0};async function p(i,n,s){if(!r.isEmail(i)){console.log("Invalid email address");return}if(!r.isStrongPassword(n,_)){console.log("Password is not strong enough");return}try{const t=(await a(l,i,n)).user;return await c(t,{displayName:s}),window.location.href="cabinet.html",t}catch(e){throw console.error("Error creating user:",e.code,e.message),e}}function f(i){i.innerHTML=m(),i.addEventListener("submit",n=>{n.preventDefault();const s=document.querySelector(".js-form-input-email").value,e=document.querySelector(".js-form-input-password").value,t=document.querySelector(".js-input-nickname").value;p(s,e,t).then(o=>{console.log(o),i.reset()}).catch(o=>{console.error("Registration failed:",o.message)})}),g(i)}function b(){const i=document.querySelector(".js-form-btn-enter"),n=document.querySelector(".js-form-btn-create"),s=document.querySelector(".js-form-btns-tumb"),e=document.querySelector(".js-sign-in-form");i==null||i.addEventListener("click",t);function t(){i==null||i.classList.add("active-btn"),n==null||n.classList.remove("active-btn"),s==null||s.classList.remove("sign-in__form-btns-tumb_active"),e instanceof HTMLFormElement&&d(e)}t(),n==null||n.addEventListener("click",o);function o(){n==null||n.classList.add("active-btn"),i==null||i.classList.remove("active-btn"),s==null||s.classList.add("sign-in__form-btns-tumb_active"),e instanceof HTMLFormElement&&f(e)}}export{b as s};
//# sourceMappingURL=loginOrRegistrationHandler-lMKTf-KX.js.map
