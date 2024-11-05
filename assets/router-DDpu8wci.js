import{i as S,g as T,b as k,d as j,e as M,S as f,f as P,o as q,h as O}from"./vendor-DaCfEx3C.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const A="index",x="cabinet",b="mainPageListTop",v="mainPageListTopDota",C="mainPageLeaderboardCards",E="mainPagePopularMatchesCardsList",N="mainPagePopularMatches",D={apiKey:"AIzaSyAd5LeDQLc4i5UEZgy049Nmu5687cFRTFU",authDomain:"battlestar-514be.firebaseapp.com",projectId:"battlestar-514be",storageBucket:"battlestar-514be.appspot.com",messagingSenderId:"1041425711014",appId:"1:1041425711014:web:b36feae118870e4d2c5967"},w=S(D),L=T(w),u=document.querySelector(".js-user-inner-list"),d=document.querySelector(".js-game-dropdown-item-inner-list");function H(){const t=document.querySelector(".js-user-item-box"),e=document.querySelector(".js-game-dropdown-box"),s=document.querySelector(".js-game-dropdown-active-title");t==null||t.addEventListener("click",i);function i(){u==null||u.classList.toggle("header__user-inner-list_open")}e==null||e.addEventListener("click",a);function a(){d==null||d.classList.toggle("game-dropdown-item__inner-list_open")}d==null||d.addEventListener("click",o);function o(r){const n=r.target;s&&(s.textContent=n.textContent),a()}}function U(){document.addEventListener("click",s=>{t(s),e(s)});function t(s){const i=s.target.closest(".header__user-inner-item"),a=s.target.closest(".header__user-item-box");!(i!=null&&i.classList.contains("header__user-inner-item"))&&!(a!=null&&a.classList.contains("header__user-item-box"))&&(u==null||u.classList.remove("header__user-inner-list_open"))}function e(s){const i=s.target.closest(".game-dropdown-item__inner-item"),a=s.target.closest(".js-game-dropdown-box");!(i!=null&&i.classList.contains("game-dropdown-item__inner-item"))&&!(a!=null&&a.classList.contains("js-game-dropdown-box"))&&(d==null||d.classList.remove("game-dropdown-item__inner-list_open"))}}async function _(t){const e=k(w);try{const s=await j(M(e,t)),i=[];return s.forEach(a=>{i.push({id:a.id,...a.data()})}),i}catch(s){return console.error("Error getting documents:",s),[]}}function z(t){const e=document.querySelector(".js-main-slider-news");if(!e)return;const s=t.map(i=>{const{title:a,description:o,views:r,date:n,image:{png:c,webp:l},author:{img:p,name:m}}=i;return`
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
                      src="${p}"
                      alt="${m}" />
                   </a>
                   
                    <span class="slide-author__name">${m}</span>
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
          </li>`});e.innerHTML=s.join("")}function F(){_("SliderBattleStarNews").then(e=>z(e))}function G(){setTimeout(()=>{new f(" .main-stage__news-slider",{gap:"30px",grid:{rows:2,cols:3,gap:{row:"30px",col:"30px"}},pagination:!1,breakpoints:{768:{grid:{cols:2},pagination:!0},1919:{arrows:!1}}}).mount({Grid:P})},1e3)}function R(){new f(".main-stochholm__slider",{pagination:!1,breakpoints:{1919:{arrows:!1,pagination:!0}}}).mount()}function B(t,e){if(!t.length){e.innerHTML='<li><p class="list-top__empty">No data available</p></li>';return}const s=[...t].sort((i,a)=>a.score-i.score).map(i=>{const{name:a,score:o,id:r,countryFlagImg:{webp:n},avatar:{png:c,webp:l}}=i;return`
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
          </li>`});e.innerHTML=s.join("")}function I(t,e){if(!t.length){e.innerHTML='<li><p class="list-top__empty">No data available</p></li>';return}const s=[...t].sort((i,a)=>a.score-i.score).map(i=>{const{name:a,score:o,id:r,countryFlagImg:{webp:n},avatar:{png:c,webp:l}}=i;return`
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
          </li>`});e.innerHTML=s.join("")}function h(t=" "){const e=document.querySelector(".js-main-leaderboard-top-list");if(!e){console.error("Leaderboard container not found");return}if(t===b){_(t).then(s=>B(s,e)).catch(s=>console.error("Error fetching CS:GO data:",s));return}if(t===v){_(t).then(s=>I(s,e)).catch(s=>console.error("Error fetching Dota data:",s));return}console.log("Invalid search query")}function K(t){const e=document.querySelector(".js-main-leaderboard-cards-list");if(!t.length){e.innerHTML='<li><p class="list-top__empty">No data available</p></li>';return}const s=t.map(i=>{const{title:a,date:o,description:r,id:n,img:{png:c,webp:l},likes:p,views:m}=i;return`
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

                    <p class="main-leaderboard__cards-stat-like-number">${p}</p>
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
          </li>`});e.innerHTML=s.join("")}function W(t=" "){_(t).then(e=>K(e)).catch(e=>console.error("Error fetching data:",e))}function V(){const t=document.querySelector(".js-leaderboard-btn-csgo"),e=document.querySelector(".js-leaderboard-btn-dota"),s=document.querySelector(".js-btns-thumb");t==null||t.addEventListener("click",i);function i(){s==null||s.classList.remove("main-leaderboard__btns-thumb_active"),t==null||t.classList.add("csgo-active"),e==null||e.classList.remove("dota-active"),h(b)}i(),e==null||e.addEventListener("click",a);function a(){s==null||s.classList.add("main-leaderboard__btns-thumb_active"),e==null||e.classList.add("dota-active"),t==null||t.classList.remove("csgo-active"),h(v)}W(C)}function Z(t){const e=document.querySelector(".js-main-popular-matches-cards-list"),s=t.map(i=>{const{id:a,roundOf:o,image:{png:r,webp:n},firstTeam:{firstTeamLogo:c,firstTeamTitle:l},secondTeam:{secondTeamLogo:p,secondTeamTitle:m}}=i;return`
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
                  src="${p}"
                  alt="" />

                <p class="list-cards__bottom-content-team-name">${m}</p>
              </div>
            </div>
            <!-- round of -->
            <p class="list-cards__bottom-content-round">${o}</p>
          </div>
        </li>`});e.innerHTML=s.join("")}function J(t=" "){_(t).then(e=>Z(e)).catch(e=>console.error("Error fetching data:",e))}function Q(t){const e=document.querySelector(".js-popular-list"),s=t.map(i=>{const{id:a,title:o,time:r,score:n,isOnline:c,firstTeam:{firstTeamLogo:l,firstTeamName:p,firstTeamScore:m},secondTeam:{secondTeamLogo:y,secondTeamName:g,secondTeamScore:$}}=i;return`
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
                    alt="${p}" />
                  <!-- name -->
                  <p class="popular-list__team-name">${p}</p>
                </a>

                <!-- points -->
                <p class="popular-list__points">${m}</p>
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
                  <p class="popular-list__points">${$}</p>
                  <!-- name -->
                  <p class="popular-list__team-name">${g}</p>
                  <!-- image -->
                  <img
                    loading="lazy"
                    class="popular-list__team-img"
                    width="58"
                    height="52"
                    src="${y}"
                    alt="${g}" />
                </a>
              </div>
            </li>`});e.innerHTML=s.join("")}function X(t=" "){_(t).then(e=>Q(e)).catch(e=>console.error("Error fetching data:",e))}function Y(){J(E),X(N)}function ee(){const t=document.querySelector(".js-user-active-title"),e=document.querySelector(".js-item-cabinet"),s=document.querySelector(".js-sidebar-btn-enter"),i=document.querySelector(".js-sidebar-btn-exit");q(L,a=>{if(a){e==null||e.classList.add("header__user-inner-item_active"),s==null||s.classList.add("sidebar__nav-item_disabled"),i==null||i.classList.remove("sidebar__nav-item_hidden");const o=a.displayName;if(t){if(o&&o.length>14){t.textContent=o.slice(0,14)+"...";return}t.textContent=o}return}e==null||e.classList.remove("header__user-inner-item_active"),s==null||s.classList.remove("sidebar__nav-item_disabled"),i==null||i.classList.add("sidebar__nav-item_hidden"),t&&(t.textContent="User")})}function te(t){if(t.includes(A))return console.log("index"),"./";if(t.includes(x))return console.log("cabinet"),"./"}function se(){const t=document.querySelector(".js-sidebar-btn-exit");t&&t.addEventListener("click",()=>{const e=window.location.pathname;O(L).then(()=>{const s=te(e);typeof s=="string"&&(window.location.href=s)}).catch(s=>{console.error("Error signing out:",s)})})}document.addEventListener("DOMContentLoaded",()=>{H(),U(),F(),G(),V(),R(),Y(),ee(),se(),console.log(ie())});const ae=window.location.pathname;function ie(){return window.location.hostname==="localhost"?"/cabinet":`${ae}cabinet`}export{x as P,L as a,ie as c,H as h,se as l,ee as o};
//# sourceMappingURL=router-DDpu8wci.js.map
