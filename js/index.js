import{a as L}from"../assets/firebaseConfig-wgdHWFF0.js";/* empty css                     */import{g as S,a as y,c as T,S as v,G as k}from"../assets/vendor-F-QY0OwA.js";const d=document.querySelector(".js-sergio-inner-list"),p=document.querySelector(".js-game-dropdown-item-inner-list");function M(){const e=document.querySelector(".js-sergio-item-box"),t=document.querySelector(".js-sergio-active-title"),s=document.querySelector(".js-game-dropdown-box"),i=document.querySelector(".js-game-dropdown-active-title");e==null||e.addEventListener("click",a);function a(){d==null||d.classList.toggle("header__Sergio-inner-list_open")}d==null||d.addEventListener("click",r);function r(n){const o=n.target;t&&o&&(t.textContent=o.textContent),a()}s==null||s.addEventListener("click",c);function c(){p==null||p.classList.toggle("game-dropdown-item__inner-list_open")}p==null||p.addEventListener("click",l);function l(n){const o=n.target;i&&(i.textContent=o.textContent),c()}}function j(){document.addEventListener("click",s=>{e(s),t(s)});function e(s){const i=s.target.closest(".header__Sergio-inner-item"),a=s.target.closest(".header__Sergio-item-box");!(i!=null&&i.classList.contains("header__Sergio-inner-item"))&&!(a!=null&&a.classList.contains("header__Sergio-item-box"))&&(d==null||d.classList.remove("header__Sergio-inner-list_open"))}function t(s){const i=s.target.closest(".game-dropdown-item__inner-item"),a=s.target.closest(".js-game-dropdown-box");!(i!=null&&i.classList.contains("game-dropdown-item__inner-item"))&&!(a!=null&&a.classList.contains("js-game-dropdown-box"))&&(p==null||p.classList.remove("game-dropdown-item__inner-list_open"))}}async function u(e){const t=S(L);try{const s=await y(T(t,e)),i=[];return s.forEach(a=>{i.push({id:a.id,...a.data()})}),i}catch(s){return console.error("Error getting documents:",s),[]}}function x(e){const t=document.querySelector(".js-main-slider-news");if(!t)return;const s=e.map(i=>{const{title:a,description:r,views:c,date:l,image:{png:n,webp:o},author:{img:m,name:_}}=i;return`
      <li class="splide__slide">
            <!-- slide-body -->

            <div class="splide__slide-body">
             <a href="#">
              <picture>
                <source
                  srcset="${o}"
                  type="image/webp" />
                <img
                  class="splide__slide-img"
                  width="489"
                  height="246"
                  src="${n}"
                  alt="${a}" />
              </picture>
             </a>
              <!-- slide-description -->

              <div class="splide__slide-description">
                <h6 class="splide__slide-description-title">${a}</h6>

                <p class="splide__slide-description-text">${r}</p>

                <!-- slide-author -->

                <div class="splide__slide-author slide-author">
                  <div class="slide-author__content-left">
                   <a href="#">
                    <img
                      width="40"
                      height="40"
                      class="slide-author__img"
                      src="${m}"
                      alt="${_}" />
                   </a>
                   
                    <span class="slide-author__name">${_}</span>
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

                    <p class="slide-author__views-count">${c}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>`});t.innerHTML=s.join("")}function E(){u("SliderBattleStarNews").then(t=>x(t))}function q(){setTimeout(()=>{new v(" .main-stage__news-slider",{gap:"30px",grid:{rows:2,cols:3,gap:{row:"30px",col:"30px"}},pagination:!1,breakpoints:{768:{grid:{cols:2},pagination:!0},1919:{arrows:!1}}}).mount({Grid:k})},500)}function C(){new v(".main-stochholm__slider",{pagination:!1,breakpoints:{1919:{arrows:!1,pagination:!0}}}).mount()}const b="mainPageListTop",f="mainPageListTopDota",O="mainPageLeaderboardCards",P="mainPagePopularMatchesCardsList",D="mainPagePopularMatches";function A(e,t){if(!e.length){t.innerHTML='<li><p class="list-top__empty">No data available</p></li>';return}const s=[...e].sort((i,a)=>a.score-i.score).map(i=>{const{name:a,score:r,id:c,countryFlagImg:{webp:l},avatar:{png:n,webp:o}}=i;return`
           <li class="list-top__item" data-id="${c}">
            <p class="list-top__item-num"></p>
            <picture>
              <source
                srcset="${o}"
                type="image/webp" />

              <img
                loading="lazy"
                width="40"
                height="40"
                class="list-top__img"
                src="${n}"
                alt="${a}" />
            </picture>

            <img
              width="21"
              height="14"
              class="list-top__svg"
              src="${l}"
              alt="ua" />

            <p class="list-top__name">${a}</p>
            <p class="list-top__score">${r}</p>
          </li>`});t.innerHTML=s.join("")}function H(e,t){if(!e.length){t.innerHTML='<li><p class="list-top__empty">No data available</p></li>';return}const s=[...e].sort((i,a)=>a.score-i.score).map(i=>{const{name:a,score:r,id:c,countryFlagImg:{webp:l},avatar:{png:n,webp:o}}=i;return`
           <li class="list-top__item" data-id="${c}">
            <p class="list-top__item-num"></p>
            <picture>
              <source
                srcset="${o}"
                type="image/webp" />

              <img
                loading="lazy"
                width="40"
                height="40"
                class="list-top__img"
                src="${n}"
                alt="${a}" />
            </picture>

            <img
              width="21"
              height="14"
              class="list-top__svg"
              src="${l}"
              alt="ua" />

            <p class="list-top__name">${a}</p>
            <p class="list-top__score">${r}</p>
          </li>`});t.innerHTML=s.join("")}function h(e=" "){const t=document.querySelector(".js-main-leaderboard-top-list");if(!t){console.error("Leaderboard container not found");return}if(e===b){u(e).then(s=>A(s,t)).catch(s=>console.error("Error fetching CS:GO data:",s));return}if(e===f){u(e).then(s=>H(s,t)).catch(s=>console.error("Error fetching Dota data:",s));return}console.log("Invalid search query")}function z(e){const t=document.querySelector(".js-main-leaderboard-cards-list");if(!e.length){t.innerHTML='<li><p class="list-top__empty">No data available</p></li>';return}const s=e.map(i=>{const{title:a,date:r,description:c,id:l,img:{png:n,webp:o},likes:m,views:_}=i;return`
          <li class="main-leaderboard__cards-item" data-id="${l}">
            <a
              href="#"
              class="main-leaderboard__cards-link"
              aria-label="${a}">
   
              <picture>
                <source
                  srcset="${o}"
                  type="image/webp" />

                <img
                  loading="lazy"
                  width="248"
                  height="143"
                  class="main-leaderboard__cards-img"
                  src="${n}"
                  alt="${a}" />
              </picture>
            </a>

            <!-- cards-description -->

            <div class="main-leaderboard__cards-info">
              <h3 class="main-leaderboard__cards-title">
                ${a}
              </h3>

              <p class="main-leaderboard__cards-description">
                ${c}
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

                    <p class="main-leaderboard__cards-stat-like-number">${m}</p>
                  </div>
                  <!-- views -->
                  <div class="main-leaderboard__cards-stat-views">
                    <svg
                      width="20"
                      height="20">
                      <use xlink:href="#icon-eye-views"></use>
                    </svg>

                    <p class="main-leaderboard__cards-stat-views-number">${_}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>`});t.innerHTML=s.join("")}function F(e=" "){u(e).then(t=>z(t)).catch(t=>console.error("Error fetching data:",t))}function N(){const e=document.querySelector(".js-leaderboard-btn-csgo"),t=document.querySelector(".js-leaderboard-btn-dota"),s=document.querySelector(".js-btns-thumb");e==null||e.addEventListener("click",i);function i(){s==null||s.classList.remove("main-leaderboard__btns-thumb_active"),e==null||e.classList.add("csgo-active"),t==null||t.classList.remove("dota-active"),h(b)}i(),t==null||t.addEventListener("click",a);function a(){s==null||s.classList.add("main-leaderboard__btns-thumb_active"),t==null||t.classList.add("dota-active"),e==null||e.classList.remove("csgo-active"),h(f)}F(O)}function G(e){const t=document.querySelector(".js-main-popular-matches-cards-list"),s=e.map(i=>{const{id:a,roundOf:r,image:{png:c,webp:l},firstTeam:{firstTeamLogo:n,firstTeamTitle:o},secondTeam:{secondTeamLogo:m,secondTeamTitle:_}}=i;return`
        <li class="list-cards__item" data-id="${a}">
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
                src="${c}"
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
                  src="${n}"
                  alt="" />

                <p class="list-cards__bottom-content-team-name">${o}</p>
              </div>

              <p class="list-cards__bottom-content-team-divider">VS</p>

              <div class="list-cards__bottom-content-team list-cards__bottom-content-team_second">
                <img
                  class="list-cards__bottom-content-img"
                  width="27"
                  height="21"
                  loading="lazy"
                  src="${m}"
                  alt="" />

                <p class="list-cards__bottom-content-team-name">${_}</p>
              </div>
            </div>
            <!-- round of -->
            <p class="list-cards__bottom-content-round">${r}</p>
          </div>
        </li>`});t.innerHTML=s.join("")}function R(e=" "){u(e).then(t=>G(t)).catch(t=>console.error("Error fetching data:",t))}function B(e){const t=document.querySelector(".js-popular-list"),s=e.map(i=>{const{id:a,title:r,time:c,score:l,isOnline:n,firstTeam:{firstTeamLogo:o,firstTeamName:m,firstTeamScore:_},secondTeam:{secondTeamLogo:w,secondTeamName:g,secondTeamScore:$}}=i;return`
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
                    src="${o}"
                    alt="${m}" />
                  <!-- name -->
                  <p class="popular-list__team-name">${m}</p>
                </a>

                <!-- points -->
                <p class="popular-list__points">${_}</p>
              </div>

              <!-- score -->
                <div class="popular-list__score">
                  <p class="popular-list__score-time">${c}</p>
                  ${n?'<p class="popular-list__score-online">Онлайн</p>':`<p class="popular-list__score-score">${l}</p>`}
                </div>

              <!-- second team-->
              <div class="popular-list__team popular-list__team_second">
                <p class="popular-list__status-title">${r}</p>

                <a
                  class="popular-list__link"
                  href="#"
                  target="_blank">
                  <!-- points -->
                  <p class="popular-list__points">${$}</p>
                  <!-- name -->
                  <p class="popular-list__team-name">${g}</p>
                  <!-- image -->
                  <img
                    loading="lazy"
                    class="popular-list__team-img"
                    width="58"
                    height="52"
                    src="${w}"
                    alt="${g}" />
                </a>
              </div>
            </li>`});t.innerHTML=s.join("")}function W(e=" "){u(e).then(t=>B(t)).catch(t=>console.error("Error fetching data:",t))}function U(){R(P),W(D)}document.addEventListener("DOMContentLoaded",()=>{M(),j(),E(),q(),N(),C(),U()});
//# sourceMappingURL=index.js.map
