import{h as v,o as u}from"../../assets/cabinet-CWERuWV8.js";import{P as f,g as w,H as k,h as x,l as S,c as j}from"../../assets/closeDropDownList-D3JACSJ9.js";import{s as L}from"../../assets/loginOrRegistrationHandler-CBIEuIa6.js";import"../../assets/vendor-DZUFF-U2.js";function q(){if(window.location.pathname.includes(f)){const i=document.querySelector(".js-user-inner-list"),t=document.querySelector(".js-sidebar-btn-exit"),a=document.querySelector(".js-sidebar-btn-enter"),e=document.querySelector(".js-user-active-title"),n=document.querySelector(".js-icon-arrow-down"),o=document.querySelector(".header__user-item");t==null||t.classList.remove("sidebar__nav-item_hidden"),a==null||a.classList.add("sidebar__nav-item_hidden"),e.style.cursor="auto",e&&(e.style.cursor="auto"),i&&(i.style.display="none"),n&&(n.style.display="none"),o&&(o.style.cursor="auto")}}function b(s,i){const t=document.querySelector(".js-cabinet-nav-thumb"),a=[...i.children],e=a.indexOf(s);t.style.top=`${16.66*e}%`,a.forEach(n=>{n.classList.remove("cabinet__nav-item_active")}),s.classList.add("cabinet__nav-item_active")}function C(s){const i=`
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
        </div>`;s.innerHTML=i}function h(s,i){C(s);const t=i.dataset.hash;console.log(t),t&&(location.hash=t)}function _(s){const i=document.querySelector(".js-cabinet-history-list"),t=s.map(a=>{const{id:e,isVictory:n,score:o,title:m,objDate:{date:l,time:r},objID:{id:c,title:d},objRegime:{regime:p,title:g}}=a;return`
            <li class="cabinet-history__list-item" data-id="${e}">
              <p class="cabinet-history__list-item-title">${m}</p>

              <div class="medium-content">
                <div class="cabinet-history__list-item-date-box">
                  <p class="cabinet-history__list-item-date-title">${l}</p>
                  <p class="cabinet-history__list-item-time">${r}</p>
                </div>

                <div class="cabinet-history__list-item-regime-box">
                  <p class="cabinet-history__list-item-regime-title">${g}</p>
                  <p class="cabinet-history__list-item-regime">${p}</p>
                </div>

                <div class="cabinet-history__list-item-id-box">
                  <p class="cabinet-history__list-item-id-title">${d}</p>
                  <p class="cabinet-history__list-item-id">${c}</p>
                </div>
              </div>

              <div class="cabinet-history__list-item-result">
                
                ${n?'<p class="cabinet-history__list-item-result-title cabinet-history__list-item-result-title_victory">Перемога</p>':'<p class="cabinet-history__list-item-result-title cabinet-history__list-item-result-title_loss">Програш</p>'}
                <p class="cabinet-history__list-item-result-score js-result-score">
                  <span class="symbol">${n?"+ ":"- "}</span>
                  <span class="amount">${o}</span>
                  <span class="currency">BS</span>
                </p>
              </div>
            </li>`});i.innerHTML=t.join("")}function T(s){const i=document.querySelector(".js-drop-down-item-title-box"),t=document.querySelector(".js-drop-down-inner-list"),a=document.querySelector(".js-drop-down-active-title"),e=document.querySelector(".js-drop-down-icon");i==null||i.addEventListener("click",n);function n(){t==null||t.classList.toggle("cabinet-history__drop-down-inner-list_active"),e==null||e.classList.toggle("cabinet-history__drop-down-item-icon_active")}t==null||t.addEventListener("click",o);function o(l){const c=l.target.textContent;c&&(a.textContent=c,n(),m(c.toLowerCase()))}function m(l){if(l!=null&&l.includes("рейтинг")){const c=s.toSorted((d,p)=>p.sortScore-d.sortScore);_(c);return}const r=s.filter(({title:c})=>c.toLowerCase()===l);if(r.length){_(r);return}_(s)}}function $(s){const i=`
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
        </div>`;s.innerHTML=i,w(k).then(t=>{_(t),T(t)}).catch(v)}function y(s,i){$(s);const t=i.dataset.hash;t&&(location.hash=t),console.log(t)}function E(s,i){const t=location.hash.slice(1),a=document.querySelector(`[data-hash="${t}"]`);switch(b(a,i),t){case"statistics":h(s,a);break;case"history":y(s,a);break}}function D(){const s=document.querySelector(".js-cabinet-nav-list"),i=document.querySelector(".js-cabinet-main-body");s==null||s.addEventListener("click",t);function t(a){const e=a.target.closest("li");e&&(b(e,s),e.classList.contains("js-statistics")&&h(i,e),e.classList.contains("js-history")&&y(i,e))}E(i,s)}function H(){const s=localStorage.getItem("logged");(s==="false"||s===null)&&(window.location.href="404")}document.addEventListener("DOMContentLoaded",()=>{q(),x(),L(),u(),u(),S(),D(),H(),j()});
//# sourceMappingURL=cabinet.js.map
