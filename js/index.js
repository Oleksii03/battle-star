import{i as v,g as b,a as L,c as w,S as y,G as S}from"../assets/vendor-e19STYO_.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l=document.querySelector(".js-sergio-inner-list"),d=document.querySelector(".js-game-dropdown-item-inner-list");function $(){const i=document.querySelector(".js-sergio-item-box"),s=document.querySelector(".js-sergio-active-title"),t=document.querySelector(".js-game-dropdown-box"),o=document.querySelector(".js-game-dropdown-active-title");i==null||i.addEventListener("click",e);function e(){l==null||l.classList.toggle("header__Sergio-inner-list_open")}l==null||l.addEventListener("click",r);function r(c){const n=c.target;s&&n&&(s.textContent=n.textContent),e()}t==null||t.addEventListener("click",a);function a(){d==null||d.classList.toggle("game-dropdown-item__inner-list_open")}d==null||d.addEventListener("click",p);function p(c){const n=c.target;o&&(o.textContent=n.textContent),a()}}function j(){document.addEventListener("click",t=>{i(t),s(t)});function i(t){const o=t.target.closest(".header__Sergio-inner-item"),e=t.target.closest(".header__Sergio-item-box");!(o!=null&&o.classList.contains("header__Sergio-inner-item"))&&!(e!=null&&e.classList.contains("header__Sergio-item-box"))&&(l==null||l.classList.remove("header__Sergio-inner-list_open"))}function s(t){const o=t.target.closest(".game-dropdown-item__inner-item"),e=t.target.closest(".js-game-dropdown-box");!(o!=null&&o.classList.contains("game-dropdown-item__inner-item"))&&!(e!=null&&e.classList.contains("js-game-dropdown-box"))&&(d==null||d.classList.remove("game-dropdown-item__inner-list_open"))}}function O(){return v({apiKey:"AIzaSyAd5LeDQLc4i5UEZgy049Nmu5687cFRTFU",authDomain:"battlestar-514be.firebaseapp.com",projectId:"battlestar-514be",storageBucket:"battlestar-514be.appspot.com",messagingSenderId:"1041425711014",appId:"1:1041425711014:web:b36feae118870e4d2c5967"})}async function u(i){const s=O(),t=b(s);try{const o=await L(w(t,i)),e=[];return o.forEach(r=>{e.push({id:r.id,...r.data()})}),e}catch(o){return console.error("Error getting documents:",o),[]}}function x(i){const s=document.querySelector(".js-main-slider-news");if(!s)return;const t=i.map(o=>{const{title:e,description:r,views:a,date:p,image:{png:c,webp:n},author:{img:f,name:m}}=o;return`
      <li class="splide__slide">
            <!-- slide-body -->

            <div class="splide__slide-body">
              <picture>
                <source
                  srcset="${n}"
                  type="image/webp" />
                <img
                  class="splide__slide-img"
                  width="489"
                  height="246"
                  src="${c}"
                  alt="${e}" />
              </picture>

              <!-- slide-description -->

              <div class="splide__slide-description">
                <h6 class="splide__slide-description-title">${e}</h6>

                <p class="splide__slide-description-text">${r}</p>

                <!-- slide-author -->

                <div class="splide__slide-author slide-author">
                  <div class="slide-author__content-left">
                    <img
                      width="40"
                      height="40"
                      class="slide-author__img"
                      src="${f}"
                      alt="${m}" />

                    <span class="slide-author__name">${m}</span>
                    <span class="slide-author__date">${p}</span>
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
          </li>`});s.innerHTML=t.join("")}function T(){u("SliderBattleStarNews").then(s=>x(s))}function q(){setTimeout(()=>{new y(".splide, main-stage__news-slider",{gap:"30px",grid:{rows:2,cols:3,gap:{row:"30px",col:"30px"}},pagination:!1,breakpoints:{768:{grid:{cols:2}},1919:{arrows:!1,pagination:!0}}}).mount({Grid:S})},500)}const _="mainPageListTop",h="mainPageListTopDota";function E(i,s){if(!i.length){s.innerHTML='<li><p class="list-top__empty">No data available</p></li>';return}const t=[...i].sort((o,e)=>e.score-o.score).map(o=>{const{name:e,score:r,id:a,countryFlagImg:{webp:p},avatar:{png:c,webp:n}}=o;return`
           <li class="list-top__item" data-id="${a}">
            <p class="list-top__item-num"></p>
            <picture>
              <source
                srcset="${n}"
                type="image/webp" />

              <img
                loading="lazy"
                width="40"
                height="40"
                class="list-top__img"
                src="${c}"
                alt="${e}" />
            </picture>

            <img
              width="21"
              height="14"
              class="list-top__svg"
              src="${p}"
              alt="ua" />

            <p class="list-top__name">${e}</p>
            <p class="list-top__score">${r}</p>
          </li>`});s.innerHTML=t.join("")}function k(i,s){if(!i.length){s.innerHTML='<li><p class="list-top__empty">No data available</p></li>';return}const t=[...i].sort((o,e)=>e.score-o.score).map(o=>{const{name:e,score:r,id:a,countryFlagImg:{webp:p},avatar:{png:c,webp:n}}=o;return`
           <li class="list-top__item" data-id="${a}">
            <p class="list-top__item-num"></p>
            <picture>
              <source
                srcset="${n}"
                type="image/webp" />

              <img
                loading="lazy"
                width="40"
                height="40"
                class="list-top__img"
                src="${c}"
                alt="${e}" />
            </picture>

            <img
              width="21"
              height="14"
              class="list-top__svg"
              src="${p}"
              alt="ua" />

            <p class="list-top__name">${e}</p>
            <p class="list-top__score">${r}</p>
          </li>`});s.innerHTML=t.join("")}function g(i=" "){const s=document.querySelector(".js-main-leaderboard-top-list");if(!s){console.error("Leaderboard container not found");return}if(i===_){u(i).then(t=>E(t,s)).catch(t=>console.error("Error fetching CS:GO data:",t));return}if(i===h){u(i).then(t=>k(t,s)).catch(t=>console.error("Error fetching Dota data:",t));return}console.log("Invalid search query")}function M(){const i=document.querySelector(".js-leaderboard-btn-csgo"),s=document.querySelector(".js-leaderboard-btn-dota"),t=document.querySelector(".js-btns-thumb");i==null||i.addEventListener("click",o);function o(){t==null||t.classList.remove("main-leaderboard__btns-thumb_active"),i==null||i.classList.add("csgo-active"),s==null||s.classList.remove("dota-active"),g(_)}o(),s==null||s.addEventListener("click",e);function e(){t==null||t.classList.add("main-leaderboard__btns-thumb_active"),s==null||s.classList.add("dota-active"),i==null||i.classList.remove("csgo-active"),g(h)}}document.addEventListener("DOMContentLoaded",()=>{$(),j(),T(),q(),M()});
//# sourceMappingURL=index.js.map
