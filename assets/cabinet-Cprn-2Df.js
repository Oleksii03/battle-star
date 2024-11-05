import{c as g,d as a,h as p,o as u,l as _}from"./signOut-7ANRpM1j.js";import{b as f,s as v,t as l,d as h,v as d,e as w,u as y}from"./vendor-CHXV-Q4N.js";function b(){if(window.location.pathname.includes(g)){const e=document.querySelector(".js-user-inner-list"),s=document.querySelector(".js-sidebar-btn-exit"),n=document.querySelector(".js-sidebar-btn-enter"),t=document.querySelector(".js-user-active-title"),o=document.querySelector(".js-icon-arrow-down"),r=document.querySelector(".header__user-item");s==null||s.classList.remove("sidebar__nav-item_hidden"),n==null||n.classList.add("sidebar__nav-item_hidden"),t.style.cursor="auto",t&&(t.style.cursor="auto"),e&&(e.style.display="none"),o&&(o.style.display="none"),r&&(r.style.cursor="auto")}}function j(){return`
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
        </ul>`}function m(i){const e=i.querySelector(".js-form-input-icon-view");e==null||e.addEventListener("click",()=>{const s=i.querySelector(".js-form-input-password"),n=i.querySelector(".js-icon-line-cross-out");if(s.type==="password"){s.type="text",n.style.display="none";return}s.type="password",n.style.display="inline-block"})}function q(){const i=new f;v(a,i).then(e=>{const s=e.user;console.log("User signed in with Google:",s),window.location.href=c}).catch(e=>{console.error("Error signing in with Google:",e)})}function S(i){const e=i.querySelector(".js-login-provider-list");e==null||e.addEventListener("click",s=>{const n=s.target.closest("li");if(n!=null&&n.classList.contains("js-form-item-google")){q();return}})}const L={positionClass:"toast-top-right",closeButton:!0,progressBar:!0,timeOut:5e3,extendedTimeOut:1e3};l.options=L;function k(i){i.innerHTML=j(),i.addEventListener("submit",e=>{e.preventDefault();let s=document.querySelector(".js-login-email");if(!s)return;const n=s.value,t=document.querySelector(".js-login-password").value;console.log(n),h(a,n,t).then(o=>{window.location.href=c,i.reset()}).catch(o=>{console.error("Error signing in:",o),l.error("Не вдалося увійти. Перевірте свій email або пароль і спробуйте ще раз.")})}),S(i),m(i)}function x(){return`
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
        </button>`}const E={minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:0};async function P(i,e,s){if(!d.isEmail(i)){console.log("Invalid email address");return}if(!d.isStrongPassword(e,E)){console.log("Password is not strong enough");return}try{const t=(await w(a,i,e)).user;return await y(t,{displayName:s}),window.location.href=c,t}catch(n){throw console.error("Error creating user:",n.code,n.message),n}}function C(i){i.innerHTML=x(),i.addEventListener("submit",e=>{e.preventDefault();let s=document.querySelector(".js-form-input-email");if(!s)return;const n=s.value.trim(),t=document.querySelector(".js-form-input-password").value,o=document.querySelector(".js-input-nickname").value.trim();P(n,t,o).then(r=>{i.reset()}).catch(r=>{l.error("Користувч з таким email вже зареєстрований")})}),m(i)}function T(){const i=document.querySelector(".js-form-btn-enter"),e=document.querySelector(".js-form-btn-create"),s=document.querySelector(".js-form-btns-tumb"),n=document.querySelector(".js-sign-in-form");i==null||i.addEventListener("click",t);function t(){i==null||i.classList.add("active-btn"),e==null||e.classList.remove("active-btn"),s==null||s.classList.remove("sign-in__form-btns-tumb_active"),n instanceof HTMLFormElement&&k(n)}t(),e==null||e.addEventListener("click",o);function o(){e==null||e.classList.add("active-btn"),i==null||i.classList.remove("active-btn"),s==null||s.classList.add("sign-in__form-btns-tumb_active"),n instanceof HTMLFormElement&&C(n)}}document.addEventListener("DOMContentLoaded",()=>{b(),p(),T(),u(),u(),_()});const c=window.location.pathname;export{T as s};
//# sourceMappingURL=cabinet-Cprn-2Df.js.map
