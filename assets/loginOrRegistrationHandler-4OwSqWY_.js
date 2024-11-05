import{b as u,d,J as m,e as g,f as p,u as _}from"./vendor-xTsNb-oV.js";import{b as o}from"./cabinet-CQ8P5il3.js";function v(){return`
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
        </ul>`}function a(e){const i=e.querySelector(".js-form-input-icon-view");i==null||i.addEventListener("click",()=>{const s=e.querySelector(".js-form-input-password"),n=e.querySelector(".js-icon-line-cross-out");if(s.type==="password"){s.type="text",n.style.display="none";return}s.type="password",n.style.display="inline-block"})}function f(){const e=new u;d(o,e).then(i=>{const s=i.user;console.log("User signed in with Google:",s),window.location.href=window.location.hostname==="localhost"?"/cabinet":"/battle-star/cabinet"}).catch(i=>{console.error("Error signing in with Google:",i)})}function h(e){const i=e.querySelector(".js-login-provider-list");i==null||i.addEventListener("click",s=>{const n=s.target.closest("li");if(n!=null&&n.classList.contains("js-form-item-google")){f();return}})}function l(e){const i=e.querySelector("#email"),s=e.querySelector("#password"),n=e.querySelector("#name"),r=new m(e);r.addField(i,[{rule:"required",errorMessage:"Email is required."},{rule:"email",errorMessage:"Email is invalid!"}]),r.addField(s,[{rule:"required",errorMessage:"Password is required."},{rule:"password",errorMessage:"Password must be strong."}]),n&&r.addField(n,[{rule:"required",errorMessage:"Name is required."},{rule:"minLength",value:2,errorMessage:"Name must be between 2 and 30 characters."},{rule:"maxLength",value:30,errorMessage:"Name must be between 2 and 30 characters."}])}function w(e){e.innerHTML=v(),e.addEventListener("submit",i=>{i.preventDefault();let s=document.querySelector(".js-login-email");if(!s)return;const n=s.value,r=document.querySelector(".js-login-password").value;g(o,n,r).then(t=>{window.location.href="/cabinet",e.reset()}).catch(t=>{})}),h(e),a(e),l(e)}function b(){return`
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
        </button>`}async function y(e,i,s){try{const r=(await p(o,e,i)).user;return await _(r,{displayName:s}),window.location.href="/cabinet",r}catch(n){throw console.error("Error creating user:",n.code,n.message),n}}function j(e){e.innerHTML=b(),e.addEventListener("submit",i=>{i.preventDefault();let s=document.querySelector(".js-form-input-email");if(!s)return;const n=s.value.trim(),r=document.querySelector(".js-form-input-password").value,t=document.querySelector(".js-input-nickname").value.trim();y(n,r,t).then(c=>{e.reset()}).catch(c=>{})}),a(e),l(e)}function L(){const e=document.querySelector(".js-form-btn-enter"),i=document.querySelector(".js-form-btn-create"),s=document.querySelector(".js-form-btns-tumb"),n=document.querySelector(".js-sign-in-form");e==null||e.addEventListener("click",r);function r(){e==null||e.classList.add("active-btn"),i==null||i.classList.remove("active-btn"),s==null||s.classList.remove("sign-in__form-btns-tumb_active"),n instanceof HTMLFormElement&&w(n)}r(),i==null||i.addEventListener("click",t);function t(){i==null||i.classList.add("active-btn"),e==null||e.classList.remove("active-btn"),s==null||s.classList.add("sign-in__form-btns-tumb_active"),n instanceof HTMLFormElement&&j(n)}}export{L as s};
//# sourceMappingURL=loginOrRegistrationHandler-4OwSqWY_.js.map
