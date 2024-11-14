import{h as k,o as u}from"../../assets/cabinet-BiW08QWy.js";import{P as f,g as x,H as w,h as j,l as L,c as S}from"../../assets/closeDropDownList-N-ypObMX.js";import{s as q}from"../../assets/loginOrRegistrationHandler-C2KHZRjd.js";import"../../assets/vendor-DZUFF-U2.js";function T(){if(window.location.pathname.includes(f)){const i=document.querySelector(".js-user-inner-list"),t=document.querySelector(".js-sidebar-btn-exit"),a=document.querySelector(".js-sidebar-btn-enter"),e=document.querySelector(".js-user-active-title"),c=document.querySelector(".js-icon-arrow-down"),r=document.querySelector(".header__user-item");t==null||t.classList.remove("sidebar__nav-item_hidden"),a==null||a.classList.add("sidebar__nav-item_hidden"),e.style.cursor="auto",e&&(e.style.cursor="auto"),i&&(i.style.display="none"),c&&(c.style.display="none"),r&&(r.style.cursor="auto")}}function g(s,i){const t=document.querySelector(".js-cabinet-nav-thumb"),a=[...i.children],e=a.indexOf(s);t.style.top=`${16.66*e}%`,a.forEach(c=>{c.classList.remove("cabinet__nav-item_active")}),s.classList.add("cabinet__nav-item_active")}function h(){return`
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
                  srcset="../../assets/img/pages/cabinet/statistics/cabinet-chart-statistics.webp"
                  type="image/webp" />

                <img
                  width="480"
                  height="480"
                  loading="lazy"
                  class="game-style__chart-img"
                  src="../../assets/img/pages/cabinet/statistics/cabinet-chart-statistics.png"
                  alt="game style chart" />
              </picture>
            </div>
          </div>`}function M(){return`
            <div class="cabinet-statistics__rank">
          <p class="cabinet-statistics__rank-title">
            Ранг:
            <span>1682</span>

            <img
              width="63"
              height="30"
              loading="lazy"
              class="cabinet-statistics__rank-title-icon"
              src="../../assets/img/pages/cabinet/statistics/rank-icon-scgo.svg"
              alt="rank icon scgo" />
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

          <div class="game-style__bar-chart bar-chart">
            <p class="bar-chart__title">Стиль гри</p>

            <div class="bar-chart__bar-box">
              <ul class="bar-chart__list-bg">
                <li class="bar-chart__list-bg-item">
                  <p class="percent">100</p>
                  <div class="line"></div>
                  <p class="percent">100</p>
                </li>

                <li class="bar-chart__list-bg-item">
                  <p class="percent">75</p>
                  <div class="line"></div>
                  <p class="percent">75</p>
                </li>

                <li class="bar-chart__list-bg-item">
                  <p class="percent">50</p>
                  <div class="line"></div>
                  <p class="percent">50</p>
                </li>

                <li class="bar-chart__list-bg-item">
                  <p class="percent">25</p>
                  <div class="line"></div>
                  <p class="percent">25</p>
                </li>

                <li class="bar-chart__list-bg-item">
                  <p class="percent">0</p>
                  <div class="line"></div>
                  <p class="percent">0</p>
                </li>
              </ul>

              <div class="bar-chart__indicators-box">
                <ul class="bar-chart__indicators-list">
                  <li class="bar-chart__indicators-item">
                    <div class="performance-indicators-track">
                      <div
                        class="performance-indicators-track-thumb performance-indicators-track-thumb_precision"></div>
                    </div>
                    <p class="bar-chart__indicators-item-text">Точність, %</p>
                  </li>
                  <li class="bar-chart__indicators-item">
                    <div class="performance-indicators-track">
                      <div
                        class="performance-indicators-track-thumb performance-indicators-track-thumb_hitting-head"></div>
                    </div>
                    <p class="bar-chart__indicators-item-text">Попадання в голову, %</p>
                  </li>
                  <li class="bar-chart__indicators-item">
                    <div class="performance-indicators-track">
                      <div
                        class="performance-indicators-track-thumb performance-indicators-track-thumb_vitality"></div>
                    </div>
                    <p class="bar-chart__indicators-item-text">Живучість, %</p>
                  </li>
                  <li class="bar-chart__indicators-item">
                    <div class="performance-indicators-track">
                      <div
                        class="performance-indicators-track-thumb performance-indicators-track-thumb_play-time"></div>
                    </div>
                    <p class="bar-chart__indicators-item-text">Час гри</p>
                  </li>
                  <li class="bar-chart__indicators-item">
                    <div class="performance-indicators-track">
                      <div
                        class="performance-indicators-track-thumb performance-indicators-track-thumb_weapon-efficiency"></div>
                    </div>
                    <p class="bar-chart__indicators-item-text">Ефективність зброї, %</p>
                  </li>
                  <li class="bar-chart__indicators-item">
                    <div class="performance-indicators-track">
                      <div
                        class="performance-indicators-track-thumb performance-indicators-track-thumb_assists"></div>
                    </div>
                    <p class="bar-chart__indicators-item-text">Кількість асистів, %</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>`}function C(s,i){const t=document.querySelector(".js-cabinet-statistics-thumb");s.innerHTML=h(),i.addEventListener("click",a=>{const e=a.target;if(e.tagName==="BUTTON"){if([...i.children].forEach(c=>c.classList.remove("cabinet-statistics__btn_active")),e.classList.contains("js-statistics-btn-csgo")){s.innerHTML=M(),t==null||t.classList.add("cabinet-statistics__btns-thumb_active"),e.classList.add("cabinet-statistics__btn_active");return}if(e.classList.contains("js-statistics-btn-dota")){s.innerHTML=h(),t==null||t.classList.remove("cabinet-statistics__btns-thumb_active"),e.classList.add("cabinet-statistics__btn_active");return}}})}function E(s){const i=`
        <div class="cabinet-statistics">
          <div class="cabinet-statistics__btns">
            <div class="cabinet-statistics__btns-box js-statistics-btns-box">
              <button
                class="cabinet-statistics__btn 
                cabinet-statistics__btn_csgo 
                js-statistics-btn-csgo"
                type="button">
                CS:GO
              </button>

              <button
                class="cabinet-statistics__btn 
                cabinet-statistics__btn_active 
                cabinet-statistics__btn_dota
                js-statistics-btn-dota"
                type="button">
                DOTA 2
              </button>
            </div>
         
            <div class="cabinet-statistics__btns-track">
              <span class="cabinet-statistics__btns-thumb js-cabinet-statistics-thumb"></span>
            </div>
          </div>

          <div class="cabinet-statistics__content js-cabinet-statistics-content">
       </div>`;s.innerHTML=i;const t=document.querySelector(".js-cabinet-statistics-content"),a=document.querySelector(".js-statistics-btns-box");C(t,a)}function b(s,i){E(s);const t=i.dataset.hash;t&&(location.hash=t)}function o(s){const i=document.querySelector(".js-cabinet-history-list"),t=s.map(a=>{const{id:e,isVictory:c,score:r,title:m,objDate:{date:l,time:_},objID:{id:n,title:d},objRegime:{regime:p,title:v}}=a;return`
            <li class="cabinet-history__list-item" data-id="${e}">
              <p class="cabinet-history__list-item-title">${m}</p>

              <div class="medium-content">
                <div class="cabinet-history__list-item-date-box">
                  <p class="cabinet-history__list-item-date-title">${l}</p>
                  <p class="cabinet-history__list-item-time">${_}</p>
                </div>

                <div class="cabinet-history__list-item-regime-box">
                  <p class="cabinet-history__list-item-regime-title">${v}</p>
                  <p class="cabinet-history__list-item-regime">${p}</p>
                </div>

                <div class="cabinet-history__list-item-id-box">
                  <p class="cabinet-history__list-item-id-title">${d}</p>
                  <p class="cabinet-history__list-item-id">${n}</p>
                </div>
              </div>

              <div class="cabinet-history__list-item-result">
                
                ${c?'<p class="cabinet-history__list-item-result-title cabinet-history__list-item-result-title_victory">Перемога</p>':'<p class="cabinet-history__list-item-result-title cabinet-history__list-item-result-title_loss">Програш</p>'}
                <p class="cabinet-history__list-item-result-score js-result-score">
                  <span class="symbol">${c?"+ ":"- "}</span>
                  <span class="amount">${r}</span>
                  <span class="currency">BS</span>
                </p>
              </div>
            </li>`});i.innerHTML=t.join("")}function H(s){const i=document.querySelector(".js-drop-down-item-title-box"),t=document.querySelector(".js-drop-down-inner-list"),a=document.querySelector(".js-drop-down-active-title"),e=document.querySelector(".js-drop-down-icon");i==null||i.addEventListener("click",c);function c(){t==null||t.classList.toggle("cabinet-history__drop-down-inner-list_active"),e==null||e.classList.toggle("cabinet-history__drop-down-item-icon_active")}t==null||t.addEventListener("click",r);function r(l){const n=l.target.textContent;n&&(a.textContent=n,c(),m(n.toLowerCase()))}function m(l){if(l!=null&&l.includes("рейтинг")){const n=s.toSorted((d,p)=>p.sortScore-d.sortScore);o(n);return}const _=s.filter(({title:n})=>n.toLowerCase()===l);if(_.length){o(_);return}o(s)}}function $(s){const i=`
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

                  <ul class="cabinet-history__drop-down-inner-list js-drop-down-inner-list">
                    <li class="cabinet-history__drop-down-inner-item">
                      <p class="cabinet-history__drop-down-inner-item-text">Усі матчі</p>
                    </li>
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
        </div>`;s.innerHTML=i,x(w).then(t=>{o(t),H(t)}).catch(k)}function y(s,i){$(s);const t=i.dataset.hash;t&&(location.hash=t)}function D(s,i){const t=location.hash.slice(1)?location.hash.slice(1):"statistics",a=document.querySelector(`[data-hash="${t}"]`);switch(g(a,i),t){case"statistics":b(s,a);break;case"history":y(s,a);break;default:b(s,a);break}}function I(){const s=document.querySelector(".js-cabinet-nav-list"),i=document.querySelector(".js-cabinet-main-body");s==null||s.addEventListener("click",t);function t(a){const e=a.target.closest("li");e&&(g(e,s),e.classList.contains("js-statistics")&&b(i,e),e.classList.contains("js-history")&&y(i,e))}D(i,s)}function O(){const s=localStorage.getItem("logged");(s==="false"||s===null)&&(window.location.href="404")}document.addEventListener("DOMContentLoaded",()=>{T(),j(),q(),u(),u(),L(),I(),O(),S()});
//# sourceMappingURL=cabinet.js.map
