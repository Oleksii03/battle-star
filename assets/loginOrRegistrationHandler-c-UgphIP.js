import{b as d,d as m,J as g,e as p,f as _,u as v}from"./vendor-D1i2NHrS.js";import{b as o,h as a}from"./cabinet-gPkUm1Og.js";function f(){return`
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
        </ul>`}function c(i){const e=i.querySelector(".js-form-input-icon-view");e==null||e.addEventListener("click",()=>{const s=i.querySelector(".js-form-input-password"),n=i.querySelector(".js-icon-line-cross-out");if(s.type==="password"){s.type="text",n.style.display="none";return}s.type="password",n.style.display="inline-block"})}function h(){const i=new d;m(o,i).then(e=>{const s=e.user;console.log("User signed in with Google:",s),window.location.href=window.location.hostname==="localhost"?"/cabinet":"/battle-star/cabinet"}).catch(e=>{console.error("Error signing in with Google:",e)})}function w(i){const e=i.querySelector(".js-login-provider-list");e==null||e.addEventListener("click",s=>{const n=s.target.closest("li");if(n!=null&&n.classList.contains("js-form-item-google")){h();return}})}function u(i){const e=i.querySelector("#email"),s=i.querySelector("#password"),n=i.querySelector("#name"),t=new g(i);t.addField(e,[{rule:"required",errorMessage:"Email is required."},{rule:"email",errorMessage:"Email is invalid!"}]),t.addField(s,[{rule:"required",errorMessage:"Password is required."},{rule:"password",errorMessage:"Password must be strong."}]),n&&t.addField(n,[{rule:"required",errorMessage:"Name is required."},{rule:"minLength",value:2,errorMessage:"Name must be between 2 and 30 characters."},{rule:"maxLength",value:30,errorMessage:"Name must be between 2 and 30 characters."}])}function b(i){i.innerHTML=f(),i.addEventListener("submit",e=>{e.preventDefault();let s=document.querySelector(".js-login-email");if(!s)return;const n=s.value,t=document.querySelector(".js-login-password").value;p(o,n,t).then(r=>{window.location.href="/cabinet",i.reset()}).catch(r=>{a(r)})}),w(i),c(i),u(i)}function y(){return`
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
        </button>`}async function j(i,e,s){try{const t=(await _(o,i,e)).user;return await v(t,{displayName:s}),window.location.href="/cabinet",t}catch(n){a(n)}}function q(i){i.innerHTML=y(),i.addEventListener("submit",e=>{e.preventDefault();let s=document.querySelector(".js-form-input-email");if(!s)return;const n=s.value.trim(),t=document.querySelector(".js-form-input-password").value,r=document.querySelector(".js-input-nickname").value.trim();j(n,t,r).then(l=>{i.reset()}).catch(l=>{a(l)})}),c(i),u(i)}function x(){const i=document.querySelector(".js-form-btn-enter"),e=document.querySelector(".js-form-btn-create"),s=document.querySelector(".js-form-btns-tumb"),n=document.querySelector(".js-sign-in-form");i==null||i.addEventListener("click",t);function t(){i==null||i.classList.add("active-btn"),e==null||e.classList.remove("active-btn"),s==null||s.classList.remove("sign-in__form-btns-tumb_active"),n instanceof HTMLFormElement&&b(n)}t(),e==null||e.addEventListener("click",r);function r(){e==null||e.classList.add("active-btn"),i==null||i.classList.remove("active-btn"),s==null||s.classList.add("sign-in__form-btns-tumb_active"),n instanceof HTMLFormElement&&q(n)}}export{x as s};
//# sourceMappingURL=loginOrRegistrationHandler-c-UgphIP.js.map
