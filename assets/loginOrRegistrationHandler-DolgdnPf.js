import{b as c,v as r,d as u,u as d}from"./vendor-CWeQpfky.js";import{b as a}from"./cabinet-C8vGW7nv.js";function m(){return`
        <div class="sign-in__form-input__wrapper">
          <div class="sign-in__form-input-box">
            <input
              type="email"
              class="sign-in__form-input js-login-email"
              placeholder="Електронна пошта"
              required />
          </div>

          <div class="sign-in__form-input-box">
            <input
              type="password"
              class="sign-in__form-input js-form-input-password js-login-password"
              placeholder="Пароль"
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
        </ul>`}function l(i){const s=i.querySelector(".js-form-input-icon-view");s==null||s.addEventListener("click",()=>{const n=i.querySelector(".js-form-input-password"),e=i.querySelector(".js-icon-line-cross-out");if(n.type==="password"){n.type="text",e.style.display="none";return}n.type="password",e.style.display="inline-block"})}function g(i){i.innerHTML=m(),i.addEventListener("submit",s=>{s.preventDefault();const n=document.querySelector(".js-login-email").value,e=document.querySelector(".js-login-password").value;c(a,n,e).then(t=>{const o=t.user;console.log("User signed in:",o),window.location.href="/cabinet"}).catch(t=>{console.error("Error signing in:",t),alert("Не вдалося увійти. Перевірте свій email або пароль і спробуйте ще раз.")})}),l(i)}function p(){return`
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
        </button>`}const _={minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:0};async function v(i,s,n){if(!r.isEmail(i)){console.log("Invalid email address");return}if(!r.isStrongPassword(s,_)){console.log("Password is not strong enough");return}try{const t=(await u(a,i,s)).user;return await d(t,{displayName:n}),window.location.href="cabinet.html",t}catch(e){throw console.error("Error creating user:",e.code,e.message),e}}function f(i){i.innerHTML=p(),i.addEventListener("submit",s=>{s.preventDefault();const n=document.querySelector(".js-form-input-email").value,e=document.querySelector(".js-form-input-password").value,t=document.querySelector(".js-input-nickname").value;v(n,e,t).then(o=>{i.reset()}).catch(o=>{console.error("Registration failed:",o.message)})}),l(i)}function w(){const i=document.querySelector(".js-form-btn-enter"),s=document.querySelector(".js-form-btn-create"),n=document.querySelector(".js-form-btns-tumb"),e=document.querySelector(".js-sign-in-form");i==null||i.addEventListener("click",t);function t(){i==null||i.classList.add("active-btn"),s==null||s.classList.remove("active-btn"),n==null||n.classList.remove("sign-in__form-btns-tumb_active"),e instanceof HTMLFormElement&&g(e)}t(),s==null||s.addEventListener("click",o);function o(){s==null||s.classList.add("active-btn"),i==null||i.classList.remove("active-btn"),n==null||n.classList.add("sign-in__form-btns-tumb_active"),e instanceof HTMLFormElement&&f(e)}}export{w as s};
//# sourceMappingURL=loginOrRegistrationHandler-DolgdnPf.js.map
