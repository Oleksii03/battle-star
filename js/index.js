import{i as $,g as y,a as S,c as T,S as f,G as k}from"../assets/vendor-e19STYO_.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const d=document.querySelector(".js-sergio-inner-list"),p=document.querySelector(".js-game-dropdown-item-inner-list");function M(){const s=document.querySelector(".js-sergio-item-box"),e=document.querySelector(".js-sergio-active-title"),a=document.querySelector(".js-game-dropdown-box"),i=document.querySelector(".js-game-dropdown-active-title");s==null||s.addEventListener("click",t);function t(){d==null||d.classList.toggle("header__Sergio-inner-list_open")}d==null||d.addEventListener("click",r);function r(c){const n=c.target;e&&n&&(e.textContent=n.textContent),t()}a==null||a.addEventListener("click",o);function o(){p==null||p.classList.toggle("game-dropdown-item__inner-list_open")}p==null||p.addEventListener("click",l);function l(c){const n=c.target;i&&(i.textContent=n.textContent),o()}}function j(){document.addEventListener("click",a=>{s(a),e(a)});function s(a){const i=a.target.closest(".header__Sergio-inner-item"),t=a.target.closest(".header__Sergio-item-box");!(i!=null&&i.classList.contains("header__Sergio-inner-item"))&&!(t!=null&&t.classList.contains("header__Sergio-item-box"))&&(d==null||d.classList.remove("header__Sergio-inner-list_open"))}function e(a){const i=a.target.closest(".game-dropdown-item__inner-item"),t=a.target.closest(".js-game-dropdown-box");!(i!=null&&i.classList.contains("game-dropdown-item__inner-item"))&&!(t!=null&&t.classList.contains("js-game-dropdown-box"))&&(p==null||p.classList.remove("game-dropdown-item__inner-list_open"))}}const O={apiKey:"AIzaSyAd5LeDQLc4i5UEZgy049Nmu5687cFRTFU",authDomain:"battlestar-514be.firebaseapp.com",projectId:"battlestar-514be",storageBucket:"battlestar-514be.appspot.com",messagingSenderId:"1041425711014",appId:"1:1041425711014:web:b36feae118870e4d2c5967"},E=$(O);async function u(s){const e=y(E);try{const a=await S(T(e,s)),i=[];return a.forEach(t=>{i.push({id:t.id,...t.data()})}),i}catch(a){return console.error("Error getting documents:",a),[]}}function P(s){const e=document.querySelector(".js-main-slider-news");if(!e)return;const a=s.map(i=>{const{title:t,description:r,views:o,date:l,image:{png:c,webp:n},author:{img:m,name:_}}=i;return`
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
                  alt="${t}" />
              </picture>
             </a>
              <!-- slide-description -->

              <div class="splide__slide-description">
                <h6 class="splide__slide-description-title">${t}</h6>

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

                    <p class="slide-author__views-count">${o}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>`});e.innerHTML=a.join("")}function q(){u("SliderBattleStarNews").then(e=>P(e))}function x(){setTimeout(()=>{new f(" .main-stage__news-slider",{gap:"30px",grid:{rows:2,cols:3,gap:{row:"30px",col:"30px"}},pagination:!1,breakpoints:{768:{grid:{cols:2},pagination:!0},1919:{arrows:!1}}}).mount({Grid:k})},500)}function C(){new f(".main-stochholm__slider",{pagination:!1,breakpoints:{1919:{arrows:!1,pagination:!0}}}).mount()}const b="mainPageListTop",v="mainPageListTopDota",A="mainPageLeaderboardCards",D="mainPagePopularMatchesCardsList",H="mainPagePopularMatches";function N(s,e){if(!s.length){e.innerHTML='<li><p class="list-top__empty">No data available</p></li>';return}const a=[...s].sort((i,t)=>t.score-i.score).map(i=>{const{name:t,score:r,id:o,countryFlagImg:{webp:l},avatar:{png:c,webp:n}}=i;return`
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
                alt="${t}" />
            </picture>

            <img
              width="21"
              height="14"
              class="list-top__svg"
              src="${l}"
              alt="ua" />

            <p class="list-top__name">${t}</p>
            <p class="list-top__score">${r}</p>
          </li>`});e.innerHTML=a.join("")}function z(s,e){if(!s.length){e.innerHTML='<li><p class="list-top__empty">No data available</p></li>';return}const a=[...s].sort((i,t)=>t.score-i.score).map(i=>{const{name:t,score:r,id:o,countryFlagImg:{webp:l},avatar:{png:c,webp:n}}=i;return`
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
                alt="${t}" />
            </picture>

            <img
              width="21"
              height="14"
              class="list-top__svg"
              src="${l}"
              alt="ua" />

            <p class="list-top__name">${t}</p>
            <p class="list-top__score">${r}</p>
          </li>`});e.innerHTML=a.join("")}function h(s=" "){const e=document.querySelector(".js-main-leaderboard-top-list");if(!e){console.error("Leaderboard container not found");return}if(s===b){u(s).then(a=>N(a,e)).catch(a=>console.error("Error fetching CS:GO data:",a));return}if(s===v){u(s).then(a=>z(a,e)).catch(a=>console.error("Error fetching Dota data:",a));return}console.log("Invalid search query")}function F(s){const e=document.querySelector(".js-main-leaderboard-cards-list");if(!s.length){e.innerHTML='<li><p class="list-top__empty">No data available</p></li>';return}const a=s.map(i=>{const{title:t,date:r,description:o,id:l,img:{png:c,webp:n},likes:m,views:_}=i;return`
          <li class="main-leaderboard__cards-item" data-id="${l}">
            <a
              href="#"
              class="main-leaderboard__cards-link"
              aria-label="${t}">
   
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
                  alt="${t}" />
              </picture>
            </a>

            <!-- cards-description -->

            <div class="main-leaderboard__cards-info">
              <h3 class="main-leaderboard__cards-title">
                ${t}
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
          </li>`});e.innerHTML=a.join("")}function R(s=" "){u(s).then(e=>F(e)).catch(e=>console.error("Error fetching data:",e))}function G(){const s=document.querySelector(".js-leaderboard-btn-csgo"),e=document.querySelector(".js-leaderboard-btn-dota"),a=document.querySelector(".js-btns-thumb");s==null||s.addEventListener("click",i);function i(){a==null||a.classList.remove("main-leaderboard__btns-thumb_active"),s==null||s.classList.add("csgo-active"),e==null||e.classList.remove("dota-active"),h(b)}i(),e==null||e.addEventListener("click",t);function t(){a==null||a.classList.add("main-leaderboard__btns-thumb_active"),e==null||e.classList.add("dota-active"),s==null||s.classList.remove("csgo-active"),h(v)}R(A)}function B(s){const e=document.querySelector(".js-main-popular-matches-cards-list"),a=s.map(i=>{const{id:t,roundOf:r,image:{png:o,webp:l},firstTeam:{firstTeamLogo:c,firstTeamTitle:n},secondTeam:{secondTeamLogo:m,secondTeamTitle:_}}=i;return`
        <li class="list-cards__item" data-id="${t}">
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
                  src="${m}"
                  alt="" />

                <p class="list-cards__bottom-content-team-name">${_}</p>
              </div>
            </div>
            <!-- round of -->
            <p class="list-cards__bottom-content-round">${r}</p>
          </div>
        </li>`});e.innerHTML=a.join("")}function U(s=" "){u(s).then(e=>B(e)).catch(e=>console.error("Error fetching data:",e))}function I(s){const e=document.querySelector(".js-popular-list"),a=s.map(i=>{const{id:t,title:r,time:o,score:l,isOnline:c,firstTeam:{firstTeamLogo:n,firstTeamName:m,firstTeamScore:_},secondTeam:{secondTeamLogo:w,secondTeamName:g,secondTeamScore:L}}=i;return`
            <li class="popular-list__item" data-id="${t}">
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
                    alt="${m}" />
                  <!-- name -->
                  <p class="popular-list__team-name">${m}</p>
                </a>

                <!-- points -->
                <p class="popular-list__points">${_}</p>
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
                  <p class="popular-list__points">${L}</p>
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
            </li>`});e.innerHTML=a.join("")}function K(s=" "){u(s).then(e=>I(e)).catch(e=>console.error("Error fetching data:",e))}function W(){U(D),K(H)}document.addEventListener("DOMContentLoaded",()=>{M(),j(),q(),x(),G(),C(),W()});
//# sourceMappingURL=index.js.map
