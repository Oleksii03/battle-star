import{a as w,o as $}from"../assets/cabinet-gPkUm1Og.js";import{u as L,g as y,T as g,a as h,L as T,M as S,b as k,h as M,l as j}from"../assets/signOut-Dn--P2pD.js";import{g as O,a as x,c as D,S as b,G as E}from"../assets/vendor-D1i2NHrS.js";function H(){document.addEventListener("click",e=>{t(e),s(e)});function t(e){var r;const i=e.target.closest(".header__user-inner-item"),a=e.target.closest(".header__user-item-box");!(i!=null&&i.classList.contains("header__user-inner-item"))&&!(a!=null&&a.classList.contains("header__user-item-box"))&&((r=L)==null||r.classList.remove("header__user-inner-list_open"))}function s(e){var r;const i=e.target.closest(".game-dropdown-item__inner-item"),a=e.target.closest(".js-game-dropdown-box");!(i!=null&&i.classList.contains("game-dropdown-item__inner-item"))&&!(a!=null&&a.classList.contains("js-game-dropdown-box"))&&((r=y)==null||r.classList.remove("game-dropdown-item__inner-list_open"))}}async function m(t){const s=O(w);try{const e=await x(D(s,t)),i=[];return e.forEach(a=>{i.push({id:a.id,...a.data()})}),i}catch(e){return console.error("Error getting documents:",e),[]}}function q(t){const s=document.querySelector(".js-main-slider-news");if(!s)return;const e=t.map(i=>{const{title:a,description:o,views:r,date:n,image:{png:c,webp:l},author:{img:d,name:p}}=i;return`
      <li class="splide__slide">
            <!-- slide-body -->

            <div class="splide__slide-body">
             <a href="#">
              <picture>
                <source
                  srcset="${l}"
                  type="image/webp" />
                <img
                  class="splide__slide-img"
                  width="489"
                  height="246"
                  src="${c}"
                  alt="${a}" />
              </picture>
             </a>
              <!-- slide-description -->

              <div class="splide__slide-description">
                <h6 class="splide__slide-description-title">${a}</h6>

                <p class="splide__slide-description-text">${o}</p>

                <!-- slide-author -->

                <div class="splide__slide-author slide-author">
                  <div class="slide-author__content-left">
                   <a href="#">
                    <img
                      width="40"
                      height="40"
                      class="slide-author__img"
                      src="${d}"
                      alt="${p}" />
                   </a>
                   
                    <span class="slide-author__name">${p}</span>
                    <span class="slide-author__date">${n}</span>
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

                    <p class="slide-author__views-count">${r}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>`});s.innerHTML=e.join("")}function C(){m("SliderBattleStarNews").then(s=>q(s))}function A(){setTimeout(()=>{new b(" .main-stage__news-slider",{gap:"30px",grid:{rows:2,cols:3,gap:{row:"30px",col:"30px"}},pagination:!1,breakpoints:{768:{grid:{cols:2},pagination:!0},1919:{arrows:!1}}}).mount({Grid:E})},1e3)}function z(){new b(".main-stochholm__slider",{pagination:!1,breakpoints:{1919:{arrows:!1,pagination:!0}}}).mount()}function I(t,s){if(!t.length){s.innerHTML='<li><p class="list-top__empty">No data available</p></li>';return}const e=[...t].sort((i,a)=>a.score-i.score).map(i=>{const{name:a,score:o,id:r,countryFlagImg:{webp:n},avatar:{png:c,webp:l}}=i;return`
           <li class="list-top__item" data-id="${r}">
            <p class="list-top__item-num"></p>
            <picture>
              <source
                srcset="${l}"
                type="image/webp" />

              <img
                loading="lazy"
                width="40"
                height="40"
                class="list-top__img"
                src="${c}"
                alt="${a}" />
            </picture>

            <img
              width="21"
              height="14"
              class="list-top__svg"
              src="${n}"
              alt="ua" />

            <p class="list-top__name">${a}</p>
            <p class="list-top__score">${o}</p>
          </li>`});s.innerHTML=e.join("")}function N(t,s){if(!t.length){s.innerHTML='<li><p class="list-top__empty">No data available</p></li>';return}const e=[...t].sort((i,a)=>a.score-i.score).map(i=>{const{name:a,score:o,id:r,countryFlagImg:{webp:n},avatar:{png:c,webp:l}}=i;return`
           <li class="list-top__item" data-id="${r}">
            <p class="list-top__item-num"></p>
            <picture>
              <source
                srcset="${l}"
                type="image/webp" />

              <img
                loading="lazy"
                width="40"
                height="40"
                class="list-top__img"
                src="${c}"
                alt="${a}" />
            </picture>

            <img
              width="21"
              height="14"
              class="list-top__svg"
              src="${n}"
              alt="ua" />

            <p class="list-top__name">${a}</p>
            <p class="list-top__score">${o}</p>
          </li>`});s.innerHTML=e.join("")}function u(t=" "){const s=document.querySelector(".js-main-leaderboard-top-list");if(!s){console.error("Leaderboard container not found");return}if(t===g){m(t).then(e=>I(e,s)).catch(e=>console.error("Error fetching CS:GO data:",e));return}if(t===h){m(t).then(e=>N(e,s)).catch(e=>console.error("Error fetching Dota data:",e));return}console.log("Invalid search query")}function P(t){const s=document.querySelector(".js-main-leaderboard-cards-list");if(!t.length){s.innerHTML='<li><p class="list-top__empty">No data available</p></li>';return}const e=t.map(i=>{const{title:a,date:o,description:r,id:n,img:{png:c,webp:l},likes:d,views:p}=i;return`
          <li class="main-leaderboard__cards-item" data-id="${n}">
            <a
              href="#"
              class="main-leaderboard__cards-link"
              aria-label="${a}">
   
              <picture>
                <source
                  srcset="${l}"
                  type="image/webp" />

                <img
                  loading="lazy"
                  width="248"
                  height="143"
                  class="main-leaderboard__cards-img"
                  src="${c}"
                  alt="${a}" />
              </picture>
            </a>

            <!-- cards-description -->

            <div class="main-leaderboard__cards-info">
              <h3 class="main-leaderboard__cards-title">
                ${a}
              </h3>

              <p class="main-leaderboard__cards-description">
                ${r}
              </p>

              <div class="main-leaderboard__cards-stats">
                <p class="main-leaderboard__cards-stats-date">${o}</p>

                <div class="main-leaderboard__cards-stat">
                  <div class="main-leaderboard__cards-stat-like">
                    <svg
                      width="20"
                      height="20">
                      <use xlink:href="#icon-like"></use>
                    </svg>

                    <p class="main-leaderboard__cards-stat-like-number">${d}</p>
                  </div>
                  <!-- views -->
                  <div class="main-leaderboard__cards-stat-views">
                    <svg
                      width="20"
                      height="20">
                      <use xlink:href="#icon-eye-views"></use>
                    </svg>

                    <p class="main-leaderboard__cards-stat-views-number">${p}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>`});s.innerHTML=e.join("")}function U(t=" "){m(t).then(s=>P(s)).catch(s=>console.error("Error fetching data:",s))}function F(){const t=document.querySelector(".js-leaderboard-btn-csgo"),s=document.querySelector(".js-leaderboard-btn-dota"),e=document.querySelector(".js-btns-thumb");t==null||t.addEventListener("click",i);function i(){e==null||e.classList.remove("main-leaderboard__btns-thumb_active"),t==null||t.classList.add("csgo-active"),s==null||s.classList.remove("dota-active"),u(g)}i(),s==null||s.addEventListener("click",a);function a(){e==null||e.classList.add("main-leaderboard__btns-thumb_active"),s==null||s.classList.add("dota-active"),t==null||t.classList.remove("csgo-active"),u(h)}U(T)}function R(t){const s=document.querySelector(".js-main-popular-matches-cards-list"),e=t.map(i=>{const{id:a,roundOf:o,image:{png:r,webp:n},firstTeam:{firstTeamLogo:c,firstTeamTitle:l},secondTeam:{secondTeamLogo:d,secondTeamTitle:p}}=i;return`
        <li class="list-cards__item" data-id="${a}">
          <a
            class="list-cards__link"
            href="#"
            target="_blank">
            <div class="list-cards__img-overlay"></div>

            <picture>
              <source
                srcset="${n}"
                type="image/webp" />

              <img
                class="list-cards__img"
                width="693"
                height="292"
                loading="lazy"
                src="${r}"
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

                <p class="list-cards__bottom-content-team-name">${l}</p>
              </div>

              <p class="list-cards__bottom-content-team-divider">VS</p>

              <div class="list-cards__bottom-content-team list-cards__bottom-content-team_second">
                <img
                  class="list-cards__bottom-content-img"
                  width="27"
                  height="21"
                  loading="lazy"
                  src="${d}"
                  alt="" />

                <p class="list-cards__bottom-content-team-name">${p}</p>
              </div>
            </div>
            <!-- round of -->
            <p class="list-cards__bottom-content-round">${o}</p>
          </div>
        </li>`});s.innerHTML=e.join("")}function B(t=" "){m(t).then(s=>R(s)).catch(s=>console.error("Error fetching data:",s))}function G(t){const s=document.querySelector(".js-popular-list"),e=t.map(i=>{const{id:a,title:o,time:r,score:n,isOnline:c,firstTeam:{firstTeamLogo:l,firstTeamName:d,firstTeamScore:p},secondTeam:{secondTeamLogo:v,secondTeamName:_,secondTeamScore:f}}=i;return`
            <li class="popular-list__item" data-id="${a}">
              <!-- team_first -->
              <div class="popular-list__team popular-list__team_first">
                <a
                  class="popular-list__link"
                  href="#"
                  target="_blank">
                  <!-- image -->
                  <img
                    loading="lazy"
                    class="popular-list__team-img"
                    width="58"
                    height="52"
                    src="${l}"
                    alt="${d}" />
                  <!-- name -->
                  <p class="popular-list__team-name">${d}</p>
                </a>

                <!-- points -->
                <p class="popular-list__points">${p}</p>
              </div>

              <!-- score -->
                <div class="popular-list__score">
                  <p class="popular-list__score-time">${r}</p>
                  ${c?'<p class="popular-list__score-online">Онлайн</p>':`<p class="popular-list__score-score">${n}</p>`}
                </div>

              <!-- second team-->
              <div class="popular-list__team popular-list__team_second">
                <p class="popular-list__status-title">${o}</p>

                <a
                  class="popular-list__link"
                  href="#"
                  target="_blank">
                  <!-- points -->
                  <p class="popular-list__points">${f}</p>
                  <!-- name -->
                  <p class="popular-list__team-name">${_}</p>
                  <!-- image -->
                  <img
                    loading="lazy"
                    class="popular-list__team-img"
                    width="58"
                    height="52"
                    src="${v}"
                    alt="${_}" />
                </a>
              </div>
            </li>`});s.innerHTML=e.join("")}function W(t=" "){m(t).then(s=>G(s)).catch(s=>console.error("Error fetching data:",s))}function V(){B(S),W(k)}function J(){return window.location.hostname.includes("localhost")?"/cabinet":`${K}cabinet`}document.addEventListener("DOMContentLoaded",()=>{M(),H(),C(),A(),F(),z(),V(),$(),j()});const K=window.location.pathname;console.log(J());
//# sourceMappingURL=index.js.map
