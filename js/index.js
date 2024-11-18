import{o as $}from"../assets/cabinet-BBv-qIRL.js";import{g as _,T as g,a as h,L as w,M as L,P as T,h as y,c as S,s as k,l as M}from"../assets/closeDropDownList-S_Fr-5b0.js";import{S as v,G as j}from"../assets/vendor-DZUFF-U2.js";function E(s){const a=document.querySelector(".js-main-slider-news");if(!a)return;const t=s.map(i=>{const{title:e,description:r,views:o,date:l,image:{png:c,webp:n},author:{img:d,name:p}}=i;return`
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
                      src="${d}"
                      alt="${p}" />
                   </a>
                   
                    <span class="slide-author__name">${p}</span>
                    <span class="slide-author__date">${l}</span>
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
          </li>`});a.innerHTML=t.join("")}function H(){_("SliderBattleStarNews").then(a=>E(a))}function C(){setTimeout(()=>{new v(" .main-stage__news-slider",{gap:"30px",grid:{rows:2,cols:3,gap:{row:"30px",col:"30px"}},pagination:!1,breakpoints:{768:{grid:{cols:2},pagination:!0},1919:{arrows:!1}}}).mount({Grid:j})},1400)}function O(){new v(".main-stochholm__slider",{pagination:!1,breakpoints:{1919:{arrows:!1,pagination:!0}}}).mount()}function q(s,a){if(!s.length){a.innerHTML='<li><p class="list-top__empty">No data available</p></li>';return}const t=[...s].sort((i,e)=>e.score-i.score).map(i=>{const{name:e,score:r,id:o,countryFlagImg:{webp:l},avatar:{png:c,webp:n}}=i;return`
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
              src="${l}"
              alt="ua" />

            <p class="list-top__name">${e}</p>
            <p class="list-top__score">${r}</p>
          </li>`});a.innerHTML=t.join("")}function z(s,a){if(!s.length){a.innerHTML='<li><p class="list-top__empty">No data available</p></li>';return}const t=[...s].sort((i,e)=>e.score-i.score).map(i=>{const{name:e,score:r,id:o,countryFlagImg:{webp:l},avatar:{png:c,webp:n}}=i;return`
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
              src="${l}"
              alt="ua" />

            <p class="list-top__name">${e}</p>
            <p class="list-top__score">${r}</p>
          </li>`});a.innerHTML=t.join("")}function u(s=" "){const a=document.querySelector(".js-main-leaderboard-top-list");if(!a){console.error("Leaderboard container not found");return}if(s===g){_(s).then(t=>q(t,a)).catch(t=>console.error("Error fetching CS:GO data:",t));return}if(s===h){_(s).then(t=>z(t,a)).catch(t=>console.error("Error fetching Dota data:",t));return}console.log("Invalid search query")}function A(s){const a=document.querySelector(".js-main-leaderboard-cards-list");if(!s.length){a.innerHTML='<li><p class="list-top__empty">No data available</p></li>';return}const t=s.map(i=>{const{title:e,date:r,description:o,id:l,img:{png:c,webp:n},likes:d,views:p}=i;return`
          <li class="main-leaderboard__cards-item" data-id="${l}">
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
          </li>`});a.innerHTML=t.join("")}function P(s=" "){_(s).then(a=>A(a)).catch(a=>console.error("Error fetching data:",a))}function x(){const s=document.querySelector(".js-leaderboard-btn-csgo"),a=document.querySelector(".js-leaderboard-btn-dota"),t=document.querySelector(".js-btns-thumb");s==null||s.addEventListener("click",i);function i(){t==null||t.classList.remove("main-leaderboard__btns-thumb_active"),s==null||s.classList.add("csgo-active"),a==null||a.classList.remove("dota-active"),u(g)}i(),a==null||a.addEventListener("click",e);function e(){t==null||t.classList.add("main-leaderboard__btns-thumb_active"),a==null||a.classList.add("dota-active"),s==null||s.classList.remove("csgo-active"),u(h)}P(w)}function D(s){const a=document.querySelector(".js-main-popular-matches-cards-list"),t=s.map(i=>{const{id:e,roundOf:r,image:{png:o,webp:l},firstTeam:{firstTeamLogo:c,firstTeamTitle:n},secondTeam:{secondTeamLogo:d,secondTeamTitle:p}}=i;return`
        <li class="list-cards__item" data-id="${e}">
          <a
            class="list-cards__link"
            href="#"
            target="_blank">
            <div class="list-cards__img-overlay"></div>

            <picture>
              <source
                srcset="${l}"
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
                  src="${d}"
                  alt="" />

                <p class="list-cards__bottom-content-team-name">${p}</p>
              </div>
            </div>
            <!-- round of -->
            <p class="list-cards__bottom-content-round">${r}</p>
          </div>
        </li>`});a.innerHTML=t.join("")}function N(s=" "){_(s).then(a=>D(a)).catch(a=>console.error("Error fetching data:",a))}function I(s){const a=document.querySelector(".js-popular-list"),t=s.map(i=>{const{id:e,title:r,time:o,score:l,isOnline:c,firstTeam:{firstTeamLogo:n,firstTeamName:d,firstTeamScore:p},secondTeam:{secondTeamLogo:b,secondTeamName:m,secondTeamScore:f}}=i;return`
            <li class="popular-list__item" data-id="${e}">
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
                    src="${n}"
                    alt="${d}" />
                  <!-- name -->
                  <p class="popular-list__team-name">${d}</p>
                </a>

                <!-- points -->
                <p class="popular-list__points">${p}</p>
              </div>

              <!-- score -->
                <div class="popular-list__score">
                  <p class="popular-list__score-time">${o}</p>
                  ${c?'<p class="popular-list__score-online">Онлайн</p>':`<p class="popular-list__score-score">${l}</p>`}
                </div>

              <!-- second team-->
              <div class="popular-list__team popular-list__team_second">
                <p class="popular-list__status-title">${r}</p>

                <a
                  class="popular-list__link"
                  href="#"
                  target="_blank">
                  <!-- points -->
                  <p class="popular-list__points">${f}</p>
                  <!-- name -->
                  <p class="popular-list__team-name">${m}</p>
                  <!-- image -->
                  <img
                    loading="lazy"
                    class="popular-list__team-img"
                    width="58"
                    height="52"
                    src="${b}"
                    alt="${m}" />
                </a>
              </div>
            </li>`});a.innerHTML=t.join("")}function R(s=" "){_(s).then(a=>I(a)).catch(a=>console.error("Error fetching data:",a))}function B(){N(L),R(T)}document.addEventListener("DOMContentLoaded",()=>{y(),S(),H(),C(),x(),O(),B(),$(),k(),M()});
//# sourceMappingURL=index.js.map
