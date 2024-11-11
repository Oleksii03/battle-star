import{b as u,d,J as m,e as g,f as p,u as _}from"./vendor-DZUFF-U2.js";import{h as r,a}from"./cabinet-CWERuWV8.js";function v(){return`
        <div class="sign-in__form-input__wrapper">
          <div class="sign-in__form-input-box">
            <input
              id="email"
              type="email"
              class="sign-in__form-input js-login-email"
              placeholder="Електронна пошта"
              required />
          </div>

          <div class="sign-in__form-input-box">
            <input
              id="password"
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
        </ul>`}function l(e){const i=e.querySelector(".js-form-input-icon-view");i==null||i.addEventListener("click",()=>{const s=e.querySelector(".js-form-input-password"),n=e.querySelector(".js-icon-line-cross-out");if(s.type==="password"){s.type="text",n.style.display="none";return}s.type="password",n.style.display="inline-block"})}function f(){const e=new u;d(a,e).then(i=>{const s=i.user;console.log("User signed in with Google:",s),window.location.href=window.location.hostname==="localhost"?"/cabinet":"/battle-star/cabinet",localStorage.setItem("logged","true")}).catch(r)}function h(e){const i=e.querySelector(".js-login-provider-list");i==null||i.addEventListener("click",s=>{const n=s.target.closest("li");n!=null&&n.classList.contains("js-form-item-google")&&f()})}function c(e){const i=e.querySelector("#email"),s=e.querySelector("#password"),n=e.querySelector("#name"),t=new m(e);t.addField(i,[{rule:"required",errorMessage:"Email is required."},{rule:"email",errorMessage:"Email is invalid!"}]),t.addField(s,[{rule:"required",errorMessage:"Password is required."},{rule:"password",errorMessage:"Password must be strong."}]),n&&t.addField(n,[{rule:"required",errorMessage:"Name is required."},{rule:"minLength",value:2,errorMessage:"Name must be between 2 and 30 characters."},{rule:"maxLength",value:30,errorMessage:"Name must be between 2 and 30 characters."}])}function w(e){e.innerHTML=v(),e.addEventListener("submit",i=>{i.preventDefault();let s=document.querySelector(".js-login-email");if(!s)return;const n=s.value,t=document.querySelector(".js-login-password").value;g(a,n,t).then(o=>{window.location.href="/cabinet",localStorage.setItem("logged","true"),e.reset()}).catch(r)}),h(e),l(e),c(e)}function b(){return`
        <div class="sign-in__form-input-box">
          <input
            id="name"
            type="text"
            class="sign-in__form-input js-input-nickname"
            placeholder="Введіть нікнейм"
            pattern="^[a-zA-Zа-яА-ЯїЇєЄіІ]{2,15}$"
            required />
        </div>

        <div class="sign-in__form-input-box">
          <input
            id="email"
            type="email"
            class="sign-in__form-input js-form-input-email"
            placeholder="Електронна пошта"
            required />
        </div>

        <div class="sign-in__form-input-box">
          <input
            id="password"
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
        </button>`}async function y(e,i,s){try{const t=(await p(a,e,i)).user;return await _(t,{displayName:s}),window.location.href="/cabinet",localStorage.setItem("logged","true"),t}catch(n){r(n)}}function j(e){e.innerHTML=b(),e.addEventListener("submit",i=>{i.preventDefault();let s=document.querySelector(".js-form-input-email");if(!s)return;const n=s.value.trim(),t=document.querySelector(".js-form-input-password").value,o=document.querySelector(".js-input-nickname").value.trim();y(n,t,o).then(q=>{e.reset()}).catch(r)}),l(e),c(e)}function L(){const e=document.querySelector(".js-form-btn-enter"),i=document.querySelector(".js-form-btn-create"),s=document.querySelector(".js-form-btns-tumb"),n=document.querySelector(".js-sign-in-form");e==null||e.addEventListener("click",t);function t(){e==null||e.classList.add("active-btn"),i==null||i.classList.remove("active-btn"),s==null||s.classList.remove("sign-in__form-btns-tumb_active"),n instanceof HTMLFormElement&&w(n)}t(),i==null||i.addEventListener("click",o);function o(){i==null||i.classList.add("active-btn"),e==null||e.classList.remove("active-btn"),s==null||s.classList.add("sign-in__form-btns-tumb_active"),n instanceof HTMLFormElement&&j(n)}}export{L as s};
//# sourceMappingURL=loginOrRegistrationHandler-CBIEuIa6.js.map
