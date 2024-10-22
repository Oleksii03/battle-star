import{i as g,g as _,a as f,c as h,S as v,G as b}from"../assets/vendor-DQgSH63-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const n=document.querySelector(".js-sergio-inner-list"),c=document.querySelector(".js-game-dropdown-item-inner-list");function w(){const i=document.querySelector(".js-sergio-item-box"),s=document.querySelector(".js-sergio-active-title"),t=document.querySelector(".js-game-dropdown-box"),r=document.querySelector(".js-game-dropdown-active-title");i==null||i.addEventListener("click",e);function e(){n==null||n.classList.toggle("header__Sergio-inner-list_open")}n==null||n.addEventListener("click",o);function o(l){const d=l.target;s&&d&&(s.textContent=d.textContent),e()}t==null||t.addEventListener("click",a);function a(){c==null||c.classList.toggle("game-dropdown-item__inner-list_open")}c==null||c.addEventListener("click",u);function u(l){const d=l.target;r&&(r.textContent=d.textContent),a()}}function S(){document.addEventListener("click",t=>{i(t),s(t)});function i(t){const r=t.target.closest(".header__Sergio-inner-item"),e=t.target.closest(".header__Sergio-item-box");!(r!=null&&r.classList.contains("header__Sergio-inner-item"))&&!(e!=null&&e.classList.contains("header__Sergio-item-box"))&&(n==null||n.classList.remove("header__Sergio-inner-list_open"))}function s(t){const r=t.target.closest(".game-dropdown-item__inner-item"),e=t.target.closest(".js-game-dropdown-box");!(r!=null&&r.classList.contains("game-dropdown-item__inner-item"))&&!(e!=null&&e.classList.contains("js-game-dropdown-box"))&&(c==null||c.classList.remove("game-dropdown-item__inner-list_open"))}}function L(){return g({apiKey:"AIzaSyAd5LeDQLc4i5UEZgy049Nmu5687cFRTFU",authDomain:"battlestar-514be.firebaseapp.com",projectId:"battlestar-514be",storageBucket:"battlestar-514be.appspot.com",messagingSenderId:"1041425711014",appId:"1:1041425711014:web:b36feae118870e4d2c5967"})}async function y(i){const s=L(),t=_(s);try{const r=await f(h(t,i)),e=[];return r.forEach(o=>{e.push({id:o.id,...o.data()})}),e}catch(r){return console.error("Error getting documents:",r),[]}}function x(i){const s=document.querySelector(".js-main-slider-news");if(!s)return;const t=i.map(r=>{const{title:e,description:o,views:a,date:u,image:{png:l,webp:d},author:{img:m,name:p}}=r;return`
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

                <p class="splide__slide-description-text">${o}</p>

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
          </li>`});s.innerHTML=t.join("")}function j(){y("SliderBattleStarNews").then(i=>x(i))}function q(){setTimeout(()=>{new v(".splide, main-stage__news-slider",{gap:"30px",grid:{rows:2,cols:3,gap:{row:"30px",col:"30px"}},pagination:!1,breakpoints:{768:{grid:{cols:2}},1919:{arrows:!1,pagination:!0}}}).mount({Grid:b})},500)}function O(){const i=document.querySelector(".js-leaderboard-btn-csgo"),s=document.querySelector(".js-leaderboard-btn-dota"),t=document.querySelector(".js-btns-thumb");i==null||i.addEventListener("click",()=>{t==null||t.classList.remove("main-leaderboard__btns-thumb_active"),i==null||i.classList.add("csgo-active"),s==null||s.classList.remove("dota-active")}),s==null||s.addEventListener("click",()=>{t==null||t.classList.add("main-leaderboard__btns-thumb_active"),s==null||s.classList.add("dota-active"),i==null||i.classList.remove("csgo-active")})}document.addEventListener("DOMContentLoaded",()=>{w(),S(),j(),q(),O()});
//# sourceMappingURL=index.js.map
