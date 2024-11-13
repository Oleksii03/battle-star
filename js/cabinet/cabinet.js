import{h as v,o as b}from"../../assets/cabinet-CWERuWV8.js";import{P as f,g as w,H as k,h as x,l as S,c as j}from"../../assets/closeDropDownList-D3JACSJ9.js";import{s as L}from"../../assets/loginOrRegistrationHandler-CBIEuIa6.js";import"../../assets/vendor-DZUFF-U2.js";function q(){if(window.location.pathname.includes(f)){const i=document.querySelector(".js-user-inner-list"),s=document.querySelector(".js-sidebar-btn-exit"),a=document.querySelector(".js-sidebar-btn-enter"),e=document.querySelector(".js-user-active-title"),c=document.querySelector(".js-icon-arrow-down"),r=document.querySelector(".header__user-item");s==null||s.classList.remove("sidebar__nav-item_hidden"),a==null||a.classList.add("sidebar__nav-item_hidden"),e.style.cursor="auto",e&&(e.style.cursor="auto"),i&&(i.style.display="none"),c&&(c.style.display="none"),r&&(r.style.cursor="auto")}}function h(t,i){const s=document.querySelector(".js-cabinet-nav-thumb"),a=[...i.children],e=a.indexOf(t);s.style.top=`${16.66*e}%`,a.forEach(c=>{c.classList.remove("cabinet__nav-item_active")}),t.classList.add("cabinet__nav-item_active")}function C(t){const i=`
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
          </div>
        </div>`;t.innerHTML=i}function u(t,i){C(t);const s=i.dataset.hash;s&&(location.hash=s)}function _(t){const i=document.querySelector(".js-cabinet-history-list"),s=t.map(a=>{const{id:e,isVictory:c,score:r,title:m,objDate:{date:l,time:o},objID:{id:n,title:d},objRegime:{regime:p,title:g}}=a;return`
            <li class="cabinet-history__list-item" data-id="${e}">
              <p class="cabinet-history__list-item-title">${m}</p>

              <div class="medium-content">
                <div class="cabinet-history__list-item-date-box">
                  <p class="cabinet-history__list-item-date-title">${l}</p>
                  <p class="cabinet-history__list-item-time">${o}</p>
                </div>

                <div class="cabinet-history__list-item-regime-box">
                  <p class="cabinet-history__list-item-regime-title">${g}</p>
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
            </li>`});i.innerHTML=s.join("")}function T(t){const i=document.querySelector(".js-drop-down-item-title-box"),s=document.querySelector(".js-drop-down-inner-list"),a=document.querySelector(".js-drop-down-active-title"),e=document.querySelector(".js-drop-down-icon");i==null||i.addEventListener("click",c);function c(){s==null||s.classList.toggle("cabinet-history__drop-down-inner-list_active"),e==null||e.classList.toggle("cabinet-history__drop-down-item-icon_active")}s==null||s.addEventListener("click",r);function r(l){const n=l.target.textContent;n&&(a.textContent=n,c(),m(n.toLowerCase()))}function m(l){if(l!=null&&l.includes("рейтинг")){const n=t.toSorted((d,p)=>p.sortScore-d.sortScore);_(n);return}const o=t.filter(({title:n})=>n.toLowerCase()===l);if(o.length){_(o);return}_(t)}}function $(t){const i=`
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
        </div>`;t.innerHTML=i,w(k).then(s=>{_(s),T(s)}).catch(v)}function y(t,i){$(t);const s=i.dataset.hash;s&&(location.hash=s)}function E(t,i){const s=location.hash.slice(1)?location.hash.slice(1):"statistics",a=document.querySelector(`[data-hash="${s}"]`);switch(h(a,i),s){case"statistics":u(t,a);break;case"history":y(t,a);break;default:u(t,a);break}}function D(){const t=document.querySelector(".js-cabinet-nav-list"),i=document.querySelector(".js-cabinet-main-body");t==null||t.addEventListener("click",s);function s(a){const e=a.target.closest("li");e&&(h(e,t),e.classList.contains("js-statistics")&&u(i,e),e.classList.contains("js-history")&&y(i,e))}E(i,t)}function H(){const t=localStorage.getItem("logged");(t==="false"||t===null)&&(window.location.href="404")}document.addEventListener("DOMContentLoaded",()=>{q(),x(),L(),b(),b(),S(),D(),H(),j()});
//# sourceMappingURL=cabinet.js.map
