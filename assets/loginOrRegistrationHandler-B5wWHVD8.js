import{b as u,d,e as g,v as l,f as m,u as p}from"./vendor-Dcs7zynJ.js";import{b as r}from"./cabinet-CHLFxy3L.js";function _(){return`
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
        </ul>`}function a(i){const n=i.querySelector(".js-form-input-icon-view");n==null||n.addEventListener("click",()=>{const s=i.querySelector(".js-form-input-password"),e=i.querySelector(".js-icon-line-cross-out");if(s.type==="password"){s.type="text",e.style.display="none";return}s.type="password",e.style.display="inline-block"})}function f(){const i=new u;d(r,i).then(n=>{const s=n.user;console.log("User signed in with Google:",s),window.location.href="/cabinet"}).catch(n=>{console.error("Error signing in with Google:",n)})}function v(i){const n=i.querySelector(".js-login-provider-list");n==null||n.addEventListener("click",s=>{const e=s.target.closest("li");if(e!=null&&e.classList.contains("js-form-item-google")){f();return}})}function h(i){i.innerHTML=_(),i.addEventListener("submit",n=>{n.preventDefault();let s=document.querySelector(".js-login-email");if(!s)return;const e=s.value,o=document.querySelector(".js-login-password").value;console.log(e),g(r,e,o).then(t=>{t.user,window.location.href="/cabinet",i.reset()}).catch(t=>{console.error("Error signing in:",t),alert("Не вдалося увійти. Перевірте свій email або пароль і спробуйте ще раз.")})}),v(i),a(i)}function w(){return`
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
        </button>`}const b={minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:0};async function y(i,n,s){if(!l.isEmail(i)){console.log("Invalid email address");return}if(!l.isStrongPassword(n,b)){console.log("Password is not strong enough");return}try{const o=(await m(r,i,n)).user;return await p(o,{displayName:s}),window.location.href="cabinet.html",o}catch(e){throw e}}function j(i){i.innerHTML=w(),i.addEventListener("submit",n=>{n.preventDefault();let s=document.querySelector(".js-form-input-email");if(!s)return;const e=s.value,o=document.querySelector(".js-form-input-password").value,t=document.querySelector(".js-input-nickname").value;y(e,o,t).then(c=>{i.reset()}).catch(c=>{alert("Користувч з таким email вже зареєстрований")})}),a(i)}function q(){const i=document.querySelector(".js-form-btn-enter"),n=document.querySelector(".js-form-btn-create"),s=document.querySelector(".js-form-btns-tumb"),e=document.querySelector(".js-sign-in-form");i==null||i.addEventListener("click",o);function o(){i==null||i.classList.add("active-btn"),n==null||n.classList.remove("active-btn"),s==null||s.classList.remove("sign-in__form-btns-tumb_active"),e instanceof HTMLFormElement&&h(e)}o(),n==null||n.addEventListener("click",t);function t(){n==null||n.classList.add("active-btn"),i==null||i.classList.remove("active-btn"),s==null||s.classList.add("sign-in__form-btns-tumb_active"),e instanceof HTMLFormElement&&j(e)}}export{q as s};
//# sourceMappingURL=loginOrRegistrationHandler-B5wWHVD8.js.map
