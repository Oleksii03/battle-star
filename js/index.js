import{i as v,g as w,a as L,c as y,S as h,G as S}from"../assets/vendor-e19STYO_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l=document.querySelector(".js-sergio-inner-list"),p=document.querySelector(".js-game-dropdown-item-inner-list");function $(){const i=document.querySelector(".js-sergio-item-box"),t=document.querySelector(".js-sergio-active-title"),s=document.querySelector(".js-game-dropdown-box"),a=document.querySelector(".js-game-dropdown-active-title");i==null||i.addEventListener("click",e);function e(){l==null||l.classList.toggle("header__Sergio-inner-list_open")}l==null||l.addEventListener("click",r);function r(c){const n=c.target;t&&n&&(t.textContent=n.textContent),e()}s==null||s.addEventListener("click",o);function o(){p==null||p.classList.toggle("game-dropdown-item__inner-list_open")}p==null||p.addEventListener("click",d);function d(c){const n=c.target;a&&(a.textContent=n.textContent),o()}}function T(){document.addEventListener("click",s=>{i(s),t(s)});function i(s){const a=s.target.closest(".header__Sergio-inner-item"),e=s.target.closest(".header__Sergio-item-box");!(a!=null&&a.classList.contains("header__Sergio-inner-item"))&&!(e!=null&&e.classList.contains("header__Sergio-item-box"))&&(l==null||l.classList.remove("header__Sergio-inner-list_open"))}function t(s){const a=s.target.closest(".game-dropdown-item__inner-item"),e=s.target.closest(".js-game-dropdown-box");!(a!=null&&a.classList.contains("game-dropdown-item__inner-item"))&&!(e!=null&&e.classList.contains("js-game-dropdown-box"))&&(p==null||p.classList.remove("game-dropdown-item__inner-list_open"))}}const k={apiKey:"AIzaSyAd5LeDQLc4i5UEZgy049Nmu5687cFRTFU",authDomain:"battlestar-514be.firebaseapp.com",projectId:"battlestar-514be",storageBucket:"battlestar-514be.appspot.com",messagingSenderId:"1041425711014",appId:"1:1041425711014:web:b36feae118870e4d2c5967"},j=v(k);async function _(i){const t=w(j);try{const s=await L(y(t,i)),a=[];return s.forEach(e=>{a.push({id:e.id,...e.data()})}),a}catch(s){return console.error("Error getting documents:",s),[]}}function M(i){const t=document.querySelector(".js-main-slider-news");if(!t)return;const s=i.map(a=>{const{title:e,description:r,views:o,date:d,image:{png:c,webp:n},author:{img:u,name:m}}=a;return`
      <li class="splide__slide">
            <!-- slide-body -->

            <div class="splide__slide-body">
             <a href="#">
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
             </a>
              <!-- slide-description -->

              <div class="splide__slide-description">
                <h6 class="splide__slide-description-title">${e}</h6>

                <p class="splide__slide-description-text">${r}</p>

                <!-- slide-author -->

                <div class="splide__slide-author slide-author">
                  <div class="slide-author__content-left">
                   <a href="#">
                    <img
                      width="40"
                      height="40"
                      class="slide-author__img"
                      src="${u}"
                      alt="${m}" />
                   </a>
                   
                    <span class="slide-author__name">${m}</span>
                    <span class="slide-author__date">${d}</span>
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

                    <p class="slide-author__views-count">${o}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>`});t.innerHTML=s.join("")}function O(){_("SliderBattleStarNews").then(t=>M(t))}function x(){setTimeout(()=>{new h(" .main-stage__news-slider",{gap:"30px",grid:{rows:2,cols:3,gap:{row:"30px",col:"30px"}},pagination:!1,breakpoints:{768:{grid:{cols:2},pagination:!0},1919:{arrows:!1}}}).mount({Grid:S})},500)}function E(){new h(".main-stochholm__slider",{pagination:!1,breakpoints:{1919:{arrows:!1,pagination:!0}}}).mount()}const f="mainPageListTop",b="mainPageListTopDota",q="mainPageLeaderboardCards",C="mainPagePopularMatchesCardsList";function D(i,t){if(!i.length){t.innerHTML='<li><p class="list-top__empty">No data available</p></li>';return}const s=[...i].sort((a,e)=>e.score-a.score).map(a=>{const{name:e,score:r,id:o,countryFlagImg:{webp:d},avatar:{png:c,webp:n}}=a;return`
           <li class="list-top__item" data-id="${o}">
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
              src="${d}"
              alt="ua" />

            <p class="list-top__name">${e}</p>
            <p class="list-top__score">${r}</p>
          </li>`});t.innerHTML=s.join("")}function A(i,t){if(!i.length){t.innerHTML='<li><p class="list-top__empty">No data available</p></li>';return}const s=[...i].sort((a,e)=>e.score-a.score).map(a=>{const{name:e,score:r,id:o,countryFlagImg:{webp:d},avatar:{png:c,webp:n}}=a;return`
           <li class="list-top__item" data-id="${o}">
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
              src="${d}"
              alt="ua" />

            <p class="list-top__name">${e}</p>
            <p class="list-top__score">${r}</p>
          </li>`});t.innerHTML=s.join("")}function g(i=" "){const t=document.querySelector(".js-main-leaderboard-top-list");if(!t){console.error("Leaderboard container not found");return}if(i===f){_(i).then(s=>D(s,t)).catch(s=>console.error("Error fetching CS:GO data:",s));return}if(i===b){_(i).then(s=>A(s,t)).catch(s=>console.error("Error fetching Dota data:",s));return}console.log("Invalid search query")}function P(i){const t=document.querySelector(".js-main-leaderboard-cards-list");if(!i.length){t.innerHTML='<li><p class="list-top__empty">No data available</p></li>';return}const s=i.map(a=>{const{title:e,date:r,description:o,id:d,img:{png:c,webp:n},likes:u,views:m}=a;return`
          <li class="main-leaderboard__cards-item" data-id="${d}">
            <a
              href="#"
              class="main-leaderboard__cards-link"
              aria-label="${e}">
   
              <picture>
                <source
                  srcset="${n}"
                  type="image/webp" />

                <img
                  loading="lazy"
                  width="248"
                  height="143"
                  class="main-leaderboard__cards-img"
                  src="${c}"
                  alt="${e}" />
              </picture>
            </a>

            <!-- cards-description -->

            <div class="main-leaderboard__cards-info">
              <h3 class="main-leaderboard__cards-title">
                ${e}
              </h3>

              <p class="main-leaderboard__cards-description">
                ${o}
              </p>

              <div class="main-leaderboard__cards-stats">
                <p class="main-leaderboard__cards-stats-date">${r}</p>

                <div class="main-leaderboard__cards-stat">
                  <div class="main-leaderboard__cards-stat-like">
                    <svg
                      width="20"
                      height="20">
                      <use xlink:href="#icon-like"></use>
                    </svg>

                    <p class="main-leaderboard__cards-stat-like-number">${u}</p>
                  </div>
                  <!-- views -->
                  <div class="main-leaderboard__cards-stat-views">
                    <svg
                      width="20"
                      height="20">
                      <use xlink:href="#icon-eye-views"></use>
                    </svg>

                    <p class="main-leaderboard__cards-stat-views-number">${m}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>`});t.innerHTML=s.join("")}function F(i=" "){_(i).then(t=>P(t)).catch(t=>console.error("Error fetching data:",t))}function H(){const i=document.querySelector(".js-leaderboard-btn-csgo"),t=document.querySelector(".js-leaderboard-btn-dota"),s=document.querySelector(".js-btns-thumb");i==null||i.addEventListener("click",a);function a(){s==null||s.classList.remove("main-leaderboard__btns-thumb_active"),i==null||i.classList.add("csgo-active"),t==null||t.classList.remove("dota-active"),g(f)}a(),t==null||t.addEventListener("click",e);function e(){s==null||s.classList.add("main-leaderboard__btns-thumb_active"),t==null||t.classList.add("dota-active"),i==null||i.classList.remove("csgo-active"),g(b)}F(q)}function N(i){const t=document.querySelector(".js-main-popular-matches-cards-list"),s=i.map(a=>{const{id:e,roundOf:r,image:{png:o,webp:d},firstTeam:{firstTeamLogo:c,firstTeamTitle:n},secondTeam:{secondTeamLogo:u,secondTeamTitle:m}}=a;return`
        <li class="list-cards__item" data-id="${e}">
          <a
            class="list-cards__link"
            href="#"
            target="_blank">
            <div class="list-cards__img-overlay"></div>

            <picture>
              <source
                srcset="${d}"
                type="image/webp" />

              <img
                class="list-cards__img"
                width="693"
                height="292"
                loading="lazy"
                src="${o}"
                alt="Match" />
            </picture>
          </a>

          <!-- bottom content -->
          <div class="list-cards__bottom-content">

            <!-- teams -->
            <div class="list-cards__bottom-content-teams">
              <div class="list-cards__bottom-content-team list-cards__bottom-content-team_first">
                <img
                  class="list-cards__bottom-content-img"
                  width="27"
                  height="21"
                  loading="lazy"
                  src="${c}"
                  alt="" />

                <p class="list-cards__bottom-content-team-name">${n}</p>
              </div>

              <p class="list-cards__bottom-content-team-divider">VS</p>

              <div class="list-cards__bottom-content-team list-cards__bottom-content-team_second">
                <img
                  class="list-cards__bottom-content-img"
                  width="27"
                  height="21"
                  loading="lazy"
                  src="${u}"
                  alt="" />

                <p class="list-cards__bottom-content-team-name">${m}</p>
              </div>
            </div>
            <!-- round of -->
            <p class="list-cards__bottom-content-round">${r}</p>
          </div>
        </li>`});t.innerHTML=s.join("")}function z(i=" "){_(i).then(t=>N(t)).catch(t=>console.error("Error fetching data:",t))}function G(){z(C)}document.addEventListener("DOMContentLoaded",()=>{$(),T(),O(),x(),H(),E(),G()});
//# sourceMappingURL=index.js.map
