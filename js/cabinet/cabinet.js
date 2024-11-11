import{h as y,o as l}from"../../assets/cabinet-CWERuWV8.js";import{P as h,g,H as v,h as k,l as w}from"../../assets/getDataFromFirestore-CBajoQ2D.js";import{s as f}from"../../assets/loginOrRegistrationHandler-CBIEuIa6.js";import"../../assets/vendor-DZUFF-U2.js";function x(){if(window.location.pathname.includes(h)){const s=document.querySelector(".js-user-inner-list"),a=document.querySelector(".js-sidebar-btn-exit"),e=document.querySelector(".js-sidebar-btn-enter"),i=document.querySelector(".js-user-active-title"),c=document.querySelector(".js-icon-arrow-down"),n=document.querySelector(".header__user-item");a==null||a.classList.remove("sidebar__nav-item_hidden"),e==null||e.classList.add("sidebar__nav-item_hidden"),i.style.cursor="auto",i&&(i.style.cursor="auto"),s&&(s.style.display="none"),c&&(c.style.display="none"),n&&(n.style.cursor="auto")}}function j(t,s){const a=document.querySelector(".js-cabinet-nav-thumb"),e=[...s.children],i=e.indexOf(t);a.style.top=`${16.66*i}%`,e.forEach(c=>{c.classList.remove("cabinet__nav-item_active")}),t.classList.add("cabinet__nav-item_active")}function S(t){const s=`
        <div class="cabinet-statistics">
          <div class="cabinet-statistics__btns">
            <div class="cabinet-statistics__btns-box">
              <button
                class="cabinet-statistics__btn cabinet-statistics__btn_csgo"
                type="button">
                CS:GO
              </button>

              <button
                class="cabinet-statistics__btn cabinet-statistics__btn_active cabinet-statistics__btn_dota"
                type="button">
                DOTA 2
              </button>
            </div>
         
            <div class="cabinet-statistics__btns-track">
              <span class="cabinet-statistics__btns-thumb js-cabinet-statistics-thumb"></span>
            </div>
          </div>

   
          <div class="cabinet-statistics__rank">
            <p class="cabinet-statistics__rank-title">
              Ранг:
              <span>1682</span>
            </p>

            <ul class="cabinet-statistics__rank-list">
              <li class="cabinet-statistics__rank-item">
                <svg
                  width="26"
                  height="26"
                  class="cabinet-statistics__rank-item-icon cabinet-statistics__rank-item-icon_tournaments">
                  <use xlink:href="#icon-sidebar-tournaments"></use>
                </svg>

                <div class="cabinet-statistics__rank-item-desc">
                  <p class="cabinet-statistics__rank-item-value">4</p>
                  <p class="cabinet-statistics__rank-item-text">Турніру</p>
                </div>
              </li>

              <li class="cabinet-statistics__rank-item">
                <svg
                  width="26"
                  height="26"
                  class="cabinet-statistics__rank-item-icon cabinet-statistics__rank-item-icon_statistics">
                  <use xlink:href="#icon-statistics"></use>
                </svg>

                <div class="cabinet-statistics__rank-item-desc">
                  <p class="cabinet-statistics__rank-item-value">76%</p>
                  <p class="cabinet-statistics__rank-item-text">Вінрейт</p>
                </div>
              </li>

              <li class="cabinet-statistics__rank-item">
                <svg
                  width="26"
                  height="26"
                  class="cabinet-statistics__rank-item-icon cabinet-statistics__rank-item-icon_clock">
                  <use xlink:href="#icon-clock"></use>
                </svg>

                <div class="cabinet-statistics__rank-item-desc">
                  <p class="cabinet-statistics__rank-item-value">214</p>
                  <p class="cabinet-statistics__rank-item-text">Годинник у грі</p>
                </div>
              </li>
            </ul>
          </div>

    
          <div class="cabinet-statistics__game-style game-style">
            <div class="game-style__game-box">
              <p class="game-style__title">Стиль гри</p>

              <ul class="game-style__list">
                <li class="game-style__list-item">
                  <ul class="game-style__inner-list">
                    <li class="game-style__inner-list-item">
                      <p class="game-style__inner-list-item-text">Матчів зіграно:</p>
                      <p class="game-style__inner-list-item-score">1023</p>
                    </li>
                    <li class="game-style__inner-list-item">
                      <p class="game-style__inner-list-item-text">Карт зіграно:</p>
                      <p class="game-style__inner-list-item-score">23</p>
                    </li>
                  </ul>
                </li>

                <li class="game-style__list-item">
                  <ul class="game-style__inner-list">
                    <li class="game-style__inner-list-item">
                      <p class="game-style__inner-list-item-text">Перемог:</p>
                      <p class="game-style__inner-list-item-score">798</p>
                    </li>
                    <li class="game-style__inner-list-item">
                      <p class="game-style__inner-list-item-text">Програшів:</p>
                      <p class="game-style__inner-list-item-score">225</p>
                    </li>
                  </ul>
                </li>

                <li class="game-style__list-item">
                  <ul class="game-style__inner-list">
                    <li class="game-style__inner-list-item">
                      <p class="game-style__inner-list-item-text">Вбивств:</p>
                      <p class="game-style__inner-list-item-score">2304</p>
                    </li>
                    <li class="game-style__inner-list-item">
                      <p class="game-style__inner-list-item-text">Смерть:</p>
                      <p class="game-style__inner-list-item-score">1389</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

         
            <div class="game-style__chart-box">
              <p class="game-style__chart-title game-style__chart-title_flex">Гнучкість</p>
              <p class="game-style__chart-title game-style__chart-title_farming">Фармінг</p>
              <p class="game-style__chart-title game-style__chart-title_fighting">Файтінг</p>
              <p class="game-style__chart-title game-style__chart-title_support">Поддержка</p>
              <p class="game-style__chart-title game-style__chart-title_pushing">Пушинг</p>

              <picture>
                <source
                  srcset="
                    ../../../assets/img/pages/cabinet/statistics/cabinet-chart-statistics.webp
                  "
                  type="image/webp" />

                <img
                  width="480"
                  height="480"
                  loading="lazy"
                  class="game-style__chart-img"
                  src="../../../assets/img/pages/cabinet/statistics/cabinet-chart-statistics.png"
                  alt="game style chart" />
              </picture>
            </div>
          </div>
        </div>`;t.innerHTML=s}function L(t){S(t)}function T(t,s){const a=`
       <div class="cabinet__history cabinet-history">
          <div class="cabinet-history__title-box">
            <h3 class="cabinet-history__title">Історія матчів</h3>

            <div class="cabinet-history__drop-down">
              <p class="cabinet-history__drop-down-title">Показати:</p>

              <ul class="cabinet-history__drop-down-list">
                <li class="cabinet-history__drop-down-item">
                  <div
                    class="cabinet-history__drop-down-item-title-box js-drop-down-item-title-box">
                    <p class="cabinet-history__drop-down-item-title js-drop-down-active-title">
                      Усі матчі
                    </p>

                    <svg
                      width="12"
                      height="12"
                      class="cabinet-history__drop-down-item-icon js-drop-down-icon">
                      <use xlink:href="#icon-arrow-down"></use>
                    </svg>
                  </div>

                  <ul class="cabinet-history__drop-down-inner-list">
                    <li class="cabinet-history__drop-down-inner-item">
                      <p class="cabinet-history__drop-down-inner-item-text">CS:GO</p>
                    </li>
                    <li class="cabinet-history__drop-down-inner-item">
                      <p class="cabinet-history__drop-down-inner-item-text">DOTA 2</p>
                    </li>
                    <li class="cabinet-history__drop-down-inner-item">
                      <p class="cabinet-history__drop-down-inner-item-text">За рейтингом</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <ul class="cabinet-history__list js-cabinet-history-list"></ul>
        </div>`;s.innerHTML=a;const e=document.querySelector(".js-cabinet-history-list"),i=t.map(c=>{const{id:n,isVictory:H,score:r,title:_,objDate:{date:o,time:m},objID:{id:d,title:p},objRegime:{regime:b,title:u}}=c;return`
            <li class="cabinet-history__list-item" data-id="${n}">
              <p class="cabinet-history__list-item-title">${_}</p>

              <div class="medium-content">
                <div class="cabinet-history__list-item-date-box">
                  <p class="cabinet-history__list-item-date-title">${o}</p>
                  <p class="cabinet-history__list-item-time">${m}</p>
                </div>

                <div class="cabinet-history__list-item-regime-box">
                  <p class="cabinet-history__list-item-regime-title">${u}</p>
                  <p class="cabinet-history__list-item-regime">${b}</p>
                </div>

                <div class="cabinet-history__list-item-id-box">
                  <p class="cabinet-history__list-item-id-title">${p}</p>
                  <p class="cabinet-history__list-item-id">${d}</p>
                </div>
              </div>

              <div class="cabinet-history__list-item-result">
                <p
                  class="cabinet-history__list-item-result-title cabinet-history__list-item-result-title_victory">
                  Перемога
                </p>
                <p class="cabinet-history__list-item-result-score">
                  <span class="symbol">+</span>
                  <span class="amount">${r}</span>
                  <span class="currency">BS</span>
                </p>
              </div>
            </li>`});e.innerHTML=i.join("")}function I(t){g(v).then(s=>{T(s,t)}).catch(y)}function $(t){I(t)}function q(){const t=document.querySelector(".js-cabinet-nav-list"),s=document.querySelector(".js-cabinet-main-body");t==null||t.addEventListener("click",a);function a(e){const i=e.target.closest("li");i&&(j(i,t),i.classList.contains("js-statistics")&&L(s),i.classList.contains("js-history")&&$(s))}}function C(){const t=localStorage.getItem("logged");(t==="false"||t===null)&&(window.location.href="404")}document.addEventListener("DOMContentLoaded",()=>{x(),k(),f(),l(),l(),w(),q(),C()});
//# sourceMappingURL=cabinet.js.map
