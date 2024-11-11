import{h as _,o as l}from"../../assets/cabinet-CWERuWV8.js";import{P as r,g as o,H as m,h as p,l as u}from"../../assets/getDataFromFirestore-CBajoQ2D.js";import{s as b}from"../../assets/loginOrRegistrationHandler-CBIEuIa6.js";import"../../assets/vendor-DZUFF-U2.js";function d(){if(window.location.pathname.includes(r)){const s=document.querySelector(".js-user-inner-list"),a=document.querySelector(".js-sidebar-btn-exit"),e=document.querySelector(".js-sidebar-btn-enter"),i=document.querySelector(".js-user-active-title"),c=document.querySelector(".js-icon-arrow-down"),n=document.querySelector(".header__user-item");a==null||a.classList.remove("sidebar__nav-item_hidden"),e==null||e.classList.add("sidebar__nav-item_hidden"),i.style.cursor="auto",i&&(i.style.cursor="auto"),s&&(s.style.display="none"),c&&(c.style.display="none"),n&&(n.style.cursor="auto")}}function y(t,s){const a=document.querySelector(".js-cabinet-nav-thumb"),e=[...s.children],i=e.indexOf(t);a.style.top=`${16.66*i}%`,e.forEach(c=>{c.classList.remove("cabinet__nav-item_active")}),t.classList.add("cabinet__nav-item_active")}function g(t){const s=`
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
        </div>`;t.innerHTML=s}function h(t){g(t)}function v(t){return t.map(s=>`
          <ul class="cabinet-history__list js-cabinet-history-list">
            <li class="cabinet-history__list-item">
              <p class="cabinet-history__list-item-title">CS:GO</p>

              <div class="medium-content">
                <div class="cabinet-history__list-item-date-box">
                  <p class="cabinet-history__list-item-date">07.06.2024</p>
                  <p class="cabinet-history__list-item-time">19:20</p>
                </div>

                <div class="cabinet-history__list-item-regime-box">
                  <p class="cabinet-history__list-item-regime-title">Режим</p>
                  <p class="cabinet-history__list-item-regime">5v5</p>
                </div>

                <div class="cabinet-history__list-item-id-box">
                  <p class="cabinet-history__list-item-id-title">ID</p>
                  <p class="cabinet-history__list-item-id">37589023</p>
                </div>
              </div>

              <div class="cabinet-history__list-item-result">
                <p
                  class="cabinet-history__list-item-result-title cabinet-history__list-item-result-title_victory">
                  Перемога
                </p>
                <p class="cabinet-history__list-item-result-score">
                  <span class="symbol">+</span>
                  <span class="amount">1200</span>
                  <span class="currency">BS</span>
                </p>
              </div>
            </li>
          </ul>`)}function k(t){o(m).then(s=>{t.innerHTML=v(s).join("")}).catch(_)}function f(t){k(t)}function x(){const t=document.querySelector(".js-cabinet-nav-list"),s=document.querySelector(".js-cabinet-main-body");t==null||t.addEventListener("click",a);function a(e){const i=e.target.closest("li");i&&(y(i,t),i.classList.contains("js-statistics")&&h(s),i.classList.contains("js-history")&&f(s))}}function S(){const t=localStorage.getItem("logged");(t==="false"||t===null)&&(window.location.href="404")}document.addEventListener("DOMContentLoaded",()=>{d(),p(),b(),l(),l(),u(),x(),S()});
//# sourceMappingURL=cabinet.js.map
