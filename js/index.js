import{i as g,g as _,a as f,c as h,S as w,G as b}from"../assets/vendor-DQgSH63-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const r=document.querySelector(".js-sergio-inner-list"),c=document.querySelector(".js-game-dropdown-item-inner-list");function v(){const n=document.querySelector(".js-sergio-item-box"),o=document.querySelector(".js-sergio-active-title"),s=document.querySelector(".js-game-dropdown-box"),i=document.querySelector(".js-game-dropdown-active-title");n==null||n.addEventListener("click",e);function e(){r==null||r.classList.toggle("header__Sergio-inner-list_open")}r==null||r.addEventListener("click",t);function t(l){const d=l.target;o&&d&&(o.textContent=d.textContent),e()}s==null||s.addEventListener("click",a);function a(){c==null||c.classList.toggle("game-dropdown-item__inner-list_open")}c==null||c.addEventListener("click",u);function u(l){const d=l.target;i&&(i.textContent=d.textContent),a()}}function S(){document.addEventListener("click",s=>{n(s),o(s)});function n(s){const i=s.target.closest(".header__Sergio-inner-item"),e=s.target.closest(".header__Sergio-item-box");!(i!=null&&i.classList.contains("header__Sergio-inner-item"))&&!(e!=null&&e.classList.contains("header__Sergio-item-box"))&&(r==null||r.classList.remove("header__Sergio-inner-list_open"))}function o(s){const i=s.target.closest(".game-dropdown-item__inner-item"),e=s.target.closest(".js-game-dropdown-box");!(i!=null&&i.classList.contains("game-dropdown-item__inner-item"))&&!(e!=null&&e.classList.contains("js-game-dropdown-box"))&&(c==null||c.classList.remove("game-dropdown-item__inner-list_open"))}}function y(){return g({apiKey:"AIzaSyAd5LeDQLc4i5UEZgy049Nmu5687cFRTFU",authDomain:"battlestar-514be.firebaseapp.com",projectId:"battlestar-514be",storageBucket:"battlestar-514be.appspot.com",messagingSenderId:"1041425711014",appId:"1:1041425711014:web:b36feae118870e4d2c5967"})}async function L(n){const o=y(),s=_(o);try{const i=await f(h(s,n)),e=[];return i.forEach(t=>{e.push({id:t.id,...t.data()})}),e}catch(i){return console.error("Error getting documents:",i),[]}}function x(n){const o=document.querySelector(".js-main-slider-news");if(!o)return;const s=n.map(i=>{const{title:e,description:t,views:a,date:u,image:{png:l,webp:d},author:{img:m,name:p}}=i;return`
      <li class="splide__slide">
            <!-- slide-body -->

            <div class="splide__slide-body">
              <picture>
                <source
                  srcset="${d}"
                  type="image/webp" />
                <img
                  class="splide__slide-img"
                  width="489"
                  height="246"
                  src="${l}"
                  alt="${e}" />
              </picture>

              <!-- slide-description -->

              <div class="splide__slide-description">
                <h6 class="splide__slide-description-title">${e}</h6>

                <p class="splide__slide-description-text">${t}</p>

                <!-- slide-author -->

                <div class="splide__slide-author slide-author">
                  <div class="slide-author__content-left">
                    <img
                      width="40"
                      height="40"
                      class="slide-author__img"
                      src="${m}"
                      alt="${p}" />

                    <span class="slide-author__name">${p}</span>
                    <span class="slide-author__date">${u}</span>
                  </div>

                  <div class="slide-author__content-right">
                    <button
                      type="button"
                      class="slide-author__btn-views">
                      <svg
                        class="slide-author__btn-views-icon"
                        width="20"
                        height="20">
                        <use xlink:href="#icon-eye-views"></use>
                      </svg>
                    </button>

                    <p class="slide-author__views-count">${a}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>`});o.innerHTML=s.join("")}function j(){L("SliderBattleStarNews").then(n=>x(n))}function O(){setTimeout(()=>{new w(".splide, main-stage__news-slider",{gap:"30px",grid:{rows:2,cols:3,gap:{row:"30px",col:"30px"}},pagination:!1,breakpoints:{768:{grid:{cols:2}},1919:{arrows:!1,pagination:!0}}}).mount({Grid:b})},500)}document.addEventListener("DOMContentLoaded",()=>{v(),S(),j(),O()});
//# sourceMappingURL=index.js.map
