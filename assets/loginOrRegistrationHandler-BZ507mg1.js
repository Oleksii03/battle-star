import{b as d,d as m,t as r,e as g,v as l,f as p,u as _}from"./vendor-Cuq87dUK.js";import{b as a}from"./cabinet-CutMVcwI.js";function f(){return`
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

        <ul class="sign-in__log-in-via-list js-login-provider-list">
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

          <li class="sign-in__log-in-via-item js-form-item-google">
            <svg
              width="44"
              height="44"
              class="sign-in__log-in-via-icon">
              <use xlink:href="#icon-form_google"></use>
            </svg>
          </li>

          <li class="sign-in__log-in-via-item js-form-item-facebook">
            <svg
              width="44"
              height="44"
              class="sign-in__log-in-via-icon">
              <use xlink:href="#icon-form-facebook"></use>
            </svg>
          </li>
        </ul>`}function c(i){const s=i.querySelector(".js-form-input-icon-view");s==null||s.addEventListener("click",()=>{const n=i.querySelector(".js-form-input-password"),e=i.querySelector(".js-icon-line-cross-out");if(n.type==="password"){n.type="text",e.style.display="none";return}n.type="password",e.style.display="inline-block"})}function v(){const i=new d;m(a,i).then(s=>{const n=s.user;console.log("User signed in with Google:",n),window.location.href="/cabinet"}).catch(s=>{console.error("Error signing in with Google:",s)})}function h(i){const s=i.querySelector(".js-login-provider-list");s==null||s.addEventListener("click",n=>{const e=n.target.closest("li");if(e!=null&&e.classList.contains("js-form-item-google")){v();return}})}const w={positionClass:"toast-top-right",closeButton:!0,progressBar:!0,timeOut:5e3,extendedTimeOut:1e3};r.options=w;function b(i){i.innerHTML=f(),i.addEventListener("submit",s=>{s.preventDefault();let n=document.querySelector(".js-login-email");if(!n)return;const e=n.value,o=document.querySelector(".js-login-password").value;console.log(e),g(a,e,o).then(t=>{t.user,window.location.href="/cabinet",i.reset()}).catch(t=>{console.error("Error signing in:",t),r.error("Не вдалося увійти. Перевірте свій email або пароль і спробуйте ще раз.")})}),h(i),c(i)}function y(){return`
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
        </button>`}const j={minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:0};async function k(i,s,n){if(!l.isEmail(i)){console.log("Invalid email address");return}if(!l.isStrongPassword(s,j)){console.log("Password is not strong enough");return}try{const o=(await p(a,i,s)).user;return await _(o,{displayName:n}),window.location.href="cabinet.html",o}catch(e){throw console.error("Error creating user:",e.code,e.message),e}}function x(i){i.innerHTML=y(),i.addEventListener("submit",s=>{s.preventDefault();let n=document.querySelector(".js-form-input-email");if(!n)return;const e=n.value.trim(),o=document.querySelector(".js-form-input-password").value,t=document.querySelector(".js-input-nickname").value.trim();k(e,o,t).then(u=>{i.reset()}).catch(u=>{r.error("Користувч з таким email вже зареєстрований")})}),c(i)}function S(){const i=document.querySelector(".js-form-btn-enter"),s=document.querySelector(".js-form-btn-create"),n=document.querySelector(".js-form-btns-tumb"),e=document.querySelector(".js-sign-in-form");i==null||i.addEventListener("click",o);function o(){i==null||i.classList.add("active-btn"),s==null||s.classList.remove("active-btn"),n==null||n.classList.remove("sign-in__form-btns-tumb_active"),e instanceof HTMLFormElement&&b(e)}o(),s==null||s.addEventListener("click",t);function t(){s==null||s.classList.add("active-btn"),i==null||i.classList.remove("active-btn"),n==null||n.classList.add("sign-in__form-btns-tumb_active"),e instanceof HTMLFormElement&&x(e)}}export{S as s};
//# sourceMappingURL=loginOrRegistrationHandler-BZ507mg1.js.map
