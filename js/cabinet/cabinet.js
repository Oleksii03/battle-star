import{h as g,o as h}from"../../assets/cabinet-BBv-qIRL.js";import{g as u,H as T,a as $,l as v,B as F,s as M,h as E,b as C,c as q}from"../../assets/closeDropDownList-ysV4H44f.js";import{s as H}from"../../assets/loginOrRegistrationHandler-zsTQJq6b.js";import"../../assets/vendor-DZUFF-U2.js";function f(t,i){const s=document.querySelector(".js-cabinet-nav-thumb"),a=[...i.children],e=a.indexOf(t);s.style.top=`${16.66*e}%`,a.forEach(l=>{l.classList.remove("cabinet__nav-item_active")}),t.classList.add("cabinet__nav-item_active");const c=16.66*(a.length-1);16.66*e>=c?s.classList.add("dangerous"):s.classList.remove("dangerous")}function y(){return`
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
                  srcset="https://firebasestorage.googleapis.com/v0/b/battlestar-514be.appspot.com/o/pages%2Fcabinet%2Fstatistics%2Fcabinet-chart-statistics.webp?alt=media&token=26bc2098-6db3-48cc-bffd-9af72f98a72f"
                  type="image/webp" />

                <img
                  width="480"
                  height="480"
                  loading="lazy"
                  class="game-style__chart-img"
                  src="https://firebasestorage.googleapis.com/v0/b/battlestar-514be.appspot.com/o/pages%2Fcabinet%2Fstatistics%2Fcabinet-chart-statistics.png?alt=media&token=16f4d31c-ad8c-40f9-a740-25a5db769aee"
                  alt="game style chart" />
              </picture>
            </div>
          </div>`}function I(){return`
            <div class="cabinet-statistics__rank">
          <p class="cabinet-statistics__rank-title">
            Ранг:
            <span>1682</span>

            <img
              width="63"
              height="30"
              loading="lazy"
              class="cabinet-statistics__rank-title-icon"
              src="https://firebasestorage.googleapis.com/v0/b/battlestar-514be.appspot.com/o/pages%2Fcabinet%2Fstatistics%2Frank-icon-scgo.svg?alt=media&token=4c9e3636-8f00-4fc9-975f-67786a9ec5b2"
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
        </div>`}function O(t,i){const s=document.querySelector(".js-cabinet-statistics-thumb");t.innerHTML=y(),i.addEventListener("click",a=>{const e=a.target;if(e.tagName==="BUTTON"){if([...i.children].forEach(c=>c.classList.remove("cabinet-statistics__btn_active")),e.classList.contains("js-statistics-btn-csgo")){t.innerHTML=I(),s==null||s.classList.add("cabinet-statistics__btns-thumb_active"),e.classList.add("cabinet-statistics__btn_active");return}if(e.classList.contains("js-statistics-btn-dota")){t.innerHTML=y(),s==null||s.classList.remove("cabinet-statistics__btns-thumb_active"),e.classList.add("cabinet-statistics__btn_active");return}}})}function z(t){const i=`
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
       </div>`;t.innerHTML=i;const s=document.querySelector(".js-cabinet-statistics-content"),a=document.querySelector(".js-statistics-btns-box");O(s,a)}function m(t,i){z(t);const s=i.dataset.hash;s&&(location.hash=s)}function b(t){const i=document.querySelector(".js-cabinet-history-list"),s=t.map(a=>{const{id:e,isVictory:c,score:l,title:_,objDate:{date:o,time:n},objID:{id:r,title:d},objRegime:{regime:p,title:S}}=a;return`
            <li class="cabinet-history__list-item" data-id="${e}">
              <p class="cabinet-history__list-item-title">${_}</p>

              <div class="medium-content">
                <div class="cabinet-history__list-item-date-box">
                  <p class="cabinet-history__list-item-date-title">${o}</p>
                  <p class="cabinet-history__list-item-time">${n}</p>
                </div>

                <div class="cabinet-history__list-item-regime-box">
                  <p class="cabinet-history__list-item-regime-title">${S}</p>
                  <p class="cabinet-history__list-item-regime">${p}</p>
                </div>

                <div class="cabinet-history__list-item-id-box">
                  <p class="cabinet-history__list-item-id-title">${d}</p>
                  <p class="cabinet-history__list-item-id">${r}</p>
                </div>
              </div>

              <div class="cabinet-history__list-item-result">
                
                ${c?'<p class="cabinet-history__list-item-result-title cabinet-history__list-item-result-title_victory">Перемога</p>':'<p class="cabinet-history__list-item-result-title cabinet-history__list-item-result-title_loss">Програш</p>'}
                <p class="cabinet-history__list-item-result-score js-result-score">
                  <span class="symbol">${c?"+ ":"- "}</span>
                  <span class="amount">${l}</span>
                  <span class="currency">BS</span>
                </p>
              </div>
            </li>`});i.innerHTML=s.join("")}function R(t){const i=document.querySelector(".js-drop-down-item-title-box"),s=document.querySelector(".js-drop-down-inner-list"),a=document.querySelector(".js-drop-down-active-title"),e=document.querySelector(".js-drop-down-icon");i==null||i.addEventListener("click",c);function c(){s==null||s.classList.toggle("cabinet-history__drop-down-inner-list_active"),e==null||e.classList.toggle("cabinet-history__drop-down-item-icon_active")}s==null||s.addEventListener("click",l);function l(o){const r=o.target.textContent;r&&(a.textContent=r,c(),_(r.toLowerCase()))}function _(o){if(o!=null&&o.includes("рейтинг")){const r=t.toSorted((d,p)=>p.sortScore-d.sortScore);b(r);return}const n=t.filter(({title:r})=>r.toLowerCase()===o);if(n.length){b(n);return}b(t)}}function A(t){const i=`
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
        </div>`;t.innerHTML=i,u(T).then(s=>{b(s),R(s)}).catch(g)}function k(t,i){A(t);const s=i.dataset.hash;s&&(location.hash=s)}function D(){return`
        <div class="cabinet-personal-data">
          <div class="cabinet-personal-data__info">
            <div class="cabinet-personal-data__info-title-box">
              <h3 class="cabinet-personal-data__info-title">Основна інформація</h3>
              <p class="cabinet-personal-data__info-subtitle"><a href="#">Редагувати</a></p>
            </div>

            <div class="cabinet-personal-data__info-body">
              <ul class="cabinet-personal-data__info-body-list">
                <li class="cabinet-personal-data__info-body-item">
                  <p class="cabinet-personal-data__info-body-item-title">ID</p>
                  <p
                    class="cabinet-personal-data__info-body-item-text cabinet-personal-data__info-body-item-text_id">
                    <span>37589023</span>
                    <svg
                      width="18"
                      height="18">
                      <use xlink:href="#icon-copy"></use>
                    </svg>
                  </p>
                </li>

                <li class="cabinet-personal-data__info-body-item">
                  <p class="cabinet-personal-data__info-body-item-title">Нікнейм</p>
                  <p
                    class="cabinet-personal-data__info-body-item-text cabinet-personal-data__info-body-item-text_nick">
                    <span class="js-cabinet-personal-data-nick">MAX Richter</span>
                  </p>
                </li>

                <li class="cabinet-personal-data__info-body-item">
                  <p class="cabinet-personal-data__info-body-item-title">Био</p>
                  <p
                    class="cabinet-personal-data__info-body-item-text cabinet-personal-data__info-body-item-text_bio">
                    Значимість цих проблем настільки очевидна, що консультація з широким активом
                    сприяє підготовці та реалізації позицій, які займають учасники щодо поставлених
                    завдань.
                  </p>
                </li>

                <li class="cabinet-personal-data__info-body-item">
                  <p class="cabinet-personal-data__info-body-item-title">Дата регистрации</p>
                  <p class="cabinet-personal-data__info-body-item-text">16.05.2021</p>
                </li>
              </ul>

              <div class="cabinet-personal-data__info-body-photo">
                <img
                  width="140"
                  height="140"
                  loading="lazy"
                  src="https://firebasestorage.googleapis.com/v0/b/battlestar-514be.appspot.com/o/pages%2Fcabinet%2Fpersonal-data%2Fcabinet-info-body-img.webp?alt=media&token=473d4dee-1983-46c8-853d-3d66b205f369"
                  alt="Фото користувача"
                  class="cabinet-personal-data__info-body-img" />

                <form
                  class="cabinet-personal-data__info-body-form"
                  action="/upload"
                  method="post"
                  enctype="multipart/form-data">
                  <label class="form-label">
                    Змінити
                    <input
                      class="form-label-input"
                      type="file"
                      name="photo" />
                  </label>
                </form>
              </div>
            </div>
          </div>

          <div class="cabinet-personal-data__mail">
            <div class="cabinet-personal-data__info-title-box mail-title-box">
              <h3 class="cabinet-personal-data__info-title">Адреса електронної пошти</h3>
              <p class="cabinet-personal-data__info-subtitle"><a href="#">Редагувати</a></p>
            </div>

            <div class="cabinet-personal-data__mail-body">
              <p class="cabinet-personal-data__mail-body-title">Електронна пошта</p>
              <p class="cabinet-personal-data__mail-body-text">
                <span>Example@mail.com</span>
                <svg
                  width="24"
                  height="24">
                  <use xlink:href="#icon-check"></use>
                </svg>
              </p>
            </div>
          </div>

          <div class="cabinet-personal-data__steam">
            <div class="cabinet-personal-data__info-title-box steam-title-box">
              <h3 class="cabinet-personal-data__info-title">Обліковий запис Steam</h3>
              <p class="cabinet-personal-data__info-subtitle"><a href="#">Змінити</a></p>
            </div>

            <ul class="cabinet-personal-data__info-body-list">
              <li class="cabinet-personal-data__info-body-item">
                <p class="cabinet-personal-data__info-body-item-title">Электронная почта</p>
                <p class="cabinet-personal-data__info-body-item-text">Example@mail.com</p>
              </li>

              <li class="cabinet-personal-data__info-body-item">
                <p class="cabinet-personal-data__info-body-item-title">Обліковий запис</p>
                <p class="cabinet-personal-data__info-body-item-text">VERITA_Luts</p>
              </li>
            </ul>
          </div>
        </div>`}function w(t,i){t.innerHTML=D();const s=i.dataset.hash;s&&(location.hash=s)}function U(t,i){const s=t.map(({id:a,isVictory:e,objDate:c,objID:l,objRegime:_,score:o,title:n})=>`
        <li class="cabinet-history__list-item" data-id="${a}">
        ${n.toLowerCase().includes("переказ")?`
                <div
                  class="cabinet-wallet__list-item-title-box cabinet-wallet__list-item-title-box_translation">
                  <div class="cabinet-wallet__list-item-title-svg-box svg-box-translation">
                    <svg
                      width="24"
                      height="24"
                      class="cabinet-wallet__list-item-title-svg">
                      <use xlink:href="#icon-arrow-right"></use>
                    </svg>

                    <svg
                      width="24"
                      height="24"
                      class="cabinet-wallet__list-item-title-svg">
                      <use xlink:href="#icon-people"></use>
                    </svg>
                  </div>

                  <p class="cabinet-history__list-item-title">Переказ коштів</p>
              </div>`:n.toLowerCase().includes("виведення")?`
                <div
                  class="cabinet-wallet__list-item-title-box cabinet-wallet__list-item-title-box_withdrawal">
                  <div class="cabinet-wallet__list-item-title-svg-box svg-box-withdrawal">
                    <svg
                      width="24"
                      height="24"
                      class="cabinet-wallet__list-item-title-svg">
                      <use xlink:href="#icon-arrow-right"></use>
                    </svg>

                    <svg
                      width="24"
                      height="24"
                      class="cabinet-wallet__list-item-title-svg">
                      <use xlink:href="#icon-credit-card"></use>
                    </svg>
                  </div>
                  <p class="cabinet-history__list-item-title">Виведення коштів</p>
                </div>
                `:`<p class="cabinet-history__list-item-title">${n}</p>`}

                <div class="cabinet-wallet__medium-content">
                  <div class="cabinet-history__list-item-date-box">
                    <p class="cabinet-history__list-item-date-title">${c.date}</p>
                    <p class="cabinet-history__list-item-time">${c.time}</p>
                  </div>

                  <div class="cabinet-history__list-item-regime-box">
                    <p class="cabinet-history__list-item-regime-title">${_.title}</p>
                    <p class="cabinet-history__list-item-regime">${_.regime}</p>
                  </div>

                  <div class="cabinet-history__list-item-id-box cabinet-wallet__list-item-id-box">
                    <p class="cabinet-history__list-item-id-title">${l.title}</p>
                    <p class="${n.toLowerCase().includes("переказ")?"cabinet-wallet__list-item-id_transfer":n.toLowerCase().includes("виведення")?"cabinet-wallet__list-item-id_withdrawal":"cabinet-history__list-item-id"}">${l.id}</p>
                  </div>
                </div>

                 <div class="cabinet-history__list-item-result">
                
                ${e?'<p class="cabinet-history__list-item-result-title cabinet-history__list-item-result-title_victory">Перемога</p>':`${n.toLowerCase().includes("коштів")?'<p class="cabinet-history__list-item-result-title cabinet-history__list-item-result-title_loss"></p>':'<p class="cabinet-history__list-item-result-title cabinet-history__list-item-result-title_loss">Програш</p>'}`}
                <p class="cabinet-history__list-item-result-score js-result-score">
                  <span class="symbol">${e?"+ ":"- "}</span>
                  <span class="amount">${o}</span>
                  <span class="currency">BS</span>
                </p>
              </div>
              </li>`);i.innerHTML=s.join("")}function B(t){const i=`
        <div class="cabinet-wallet">
          <div class="cabinet-wallet__content-top">
            <div class="cabinet-wallet__card">
              <div class="cabinet-wallet__card-bg">
                <img
                  width="500"
                  height="500"
                  class="cabinet-wallet__card-img"
                  src="../../../assets/img/pages/cabinet/wallet/casrd-star-bg.svg"
                  alt="Картка гаманця" />
              </div>

              <svg
                width="61"
                height="61"
                class="cabinet-wallet__card-logo">
                <use xlink:href="#icon-logo"></use>
              </svg>

              <div class="cabinet-wallet__card-chip">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div class="cabinet-wallet__card-personal-data">
                <p class="cabinet-wallet__card-personal-data-id">
                  ID
                  <span>4758 8745</span>
                </p>

                <p class="cabinet-wallet__card-personal-data-name">Max Richter</p>
              </div>
            </div>

            <div class="cabinet-wallet__balance-content">
              <div class="cabinet-wallet__subscription-type">
                <p class="cabinet-wallet__subscription-type-title">Підписка:</p>
                <div class="cabinet-wallet__subscription-type-list-box">
                  <p class="cabinet-wallet__subscription-type-list-title">
                    <span class="subscription-type-list-active-title">Геймер</span>

                    <svg
                      class="subscription-type-list-active-icon"
                      width="24"
                      height="24">
                      <use xlink:href="#icon-arrow-down"></use>
                    </svg>
                  </p>

                  <ul class="cabinet-wallet__subscription-type-list">
                    <li class="cabinet-wallet__subscription-type-item">Геймер</li>
                    <li class="cabinet-wallet__subscription-type-item">Преміум</li>
                  </ul>
                </div>
              </div>

              <div class="cabinet-wallet__balance">
                <p class="cabinet-wallet__balance-title">Баланс</p>
                <p class="cabinet-wallet__balance-amount">
                  15600
                  <span class="currency-symbol">BS</span>
                </p>

                <div class="cabinet-wallet__balance-bg">
                  <img
                    height="180"
                    width="700"
                    loading="lazy"
                    src="https://firebasestorage.googleapis.com/v0/b/battlestar-514be.appspot.com/o/pages%2Fcabinet%2Fwallet%2Fbalance-bg.svg?alt=media&token=aa40560f-504a-48cf-8ea7-d7b5454eb666"
                    alt="графік балансу" />
                </div>
              </div>
            </div>
          </div>

          <div class="cabinet-wallet__content-medium">
            <div class="cabinet-wallet__lists-box">
              <div class="cabinet-wallet__lists-box-transfer">
                <p class="cabinet-wallet__lists-box-transfer-title">Перевести монети</p>

                <ul class="cabinet-wallet__list-transfer">
                  <li class="cabinet-wallet__transfer-item">
                    <div class="cabinet-wallet__transfer-item-svg">
                      <svg
                        width="24"
                        height="24"
                        class="cabinet-wallet__transfer-item-icon">
                        <use xlink:href="#icon-arrow-right"></use>
                      </svg>

                      <svg
                        width="24"
                        height="24"
                        class="cabinet-wallet__transfer-item-icon">
                        <use xlink:href="#icon-credit-card"></use>
                      </svg>
                    </div>

                    <p class="cabinet-wallet__transfer-item-title">Вивести на карту</p>
                  </li>

                  <li class="cabinet-wallet__transfer-item">
                    <div class="cabinet-wallet__transfer-item-svg">
                      <svg
                        width="24"
                        height="24"
                        class="cabinet-wallet__transfer-item-icon">
                        <use xlink:href="#icon-arrow-right"></use>
                      </svg>

                      <svg
                        width="24"
                        height="24"
                        class="cabinet-wallet__transfer-item-icon">
                        <use xlink:href="#icon-people"></use>
                      </svg>
                    </div>

                    <p class="cabinet-wallet__transfer-item-title">Перекласти BS другові</p>
                  </li>
                </ul>
              </div>

              <div class="cabinet-wallet__lists-box-topup">
                <p class="cabinet-wallet__lists-box-topup-title">Поповнити баланс</p>

                <ul class="cabinet-wallet__list-topup">
                  <li class="cabinet-wallet__topup-item">
                    <svg
                      width="32"
                      height="32"
                      class="cabinet-wallet__topup-item-icon">
                      <use xlink:href="#icon-monobank"></use>
                    </svg>

                    <p class="cabinet-wallet__topup-item-title">Monobank</p>
                  </li>

                  <li class="cabinet-wallet__topup-item">
                    <svg
                      width="32"
                      height="32"
                      class="cabinet-wallet__topup-item-icon">
                      <use xlink:href="#icon-wallet-apple"></use>
                    </svg>

                    <p class="cabinet-wallet__topup-item-title">Pay</p>
                  </li>

                  <li class="cabinet-wallet__topup-item">
                    <svg
                      width="135"
                      height="24"
                      class="cabinet-wallet__topup-item-icon cabinet-wallet__topup-item-icon_google-pay">
                      <use xlink:href="#icon-google-pay"></use>
                    </svg>
                  </li>

                  <li class="cabinet-wallet__topup-item">
                    <svg
                      width="32"
                      height="32"
                      class="cabinet-wallet__topup-item-icon">
                      <use xlink:href="#icon-webmoney"></use>
                    </svg>

                    <p class="cabinet-wallet__topup-item-title">WebMoney</p>
                  </li>
                </ul>
              </div>
            </div>

            <div class="cabinet-wallet__btn">
              <a
                href="#"
                class="cabinet-wallet__btn-link">
                Запроси друзів та зароби до 2000
                <span>BS</span>
              </a>
            </div>
          </div>

          <div class="cabinet-wallet__history">
            <h3 class="cabinet-wallet__history-title">Історія матчів</h3>

            <ul class="cabinet-wallet__history-list js-cabinet-wallet-history-list"></ul>
          </div>
        </div>`;t.innerHTML=i;const s=document.querySelector(".js-cabinet-wallet-history-list");u($).then(a=>U(a,s)).catch(g)}function x(t,i){B(t);const s=i.dataset.hash;s&&(location.hash=s)}function G(){const t=document.querySelector(".js-message-list");t==null||t.addEventListener("click",i=>{const s=i.target;s.classList.contains("js-item-message-switch")&&s.classList.toggle("cabinet-settings__message-item-switch_active")})}function N(){return`
        <div class="cabinet-settings">
          <div class="cabinet-settings__message">
            <h3 class="cabinet-settings__message-title">Повідомлення</h3>

            <ul class="cabinet-settings__message-list js-message-list">
              <li class="cabinet-settings__message-item">
                <div class="cabinet-settings__message-item-switch js-item-message-switch"></div>
                <p class="cabinet-settings__message-item-text">Новини платформи</p>
              </li>

              <li class="cabinet-settings__message-item">
                <div
                  class="cabinet-settings__message-item-switch js-item-message-switch"></div>
                <p class="cabinet-settings__message-item-text">Нові турніри</p>
              </li>
              <li class="cabinet-settings__message-item">
                <div class="cabinet-settings__message-item-switch js-item-message-switch"></div>
                <p class="cabinet-settings__message-item-text">Вхідні повідомлення</p>
              </li>
              <li class="cabinet-settings__message-item">
                <div class="cabinet-settings__message-item-switch js-item-message-switch"></div>
                <p class="cabinet-settings__message-item-text">Запрошення до команди</p>
              </li>
              <li class="cabinet-settings__message-item">
                <div class="cabinet-settings__message-item-switch js-item-message-switch"></div>
                <p class="cabinet-settings__message-item-text">Запити у друзі</p>
              </li>
            </ul>
          </div>

          <!-- settings__invitations -->
          <div class="cabinet-settings__invitations">
            <h3 class="cabinet-settings__invitations-title">Запрошення до команди</h3>

            <ul class="cabinet-settings__invitations-list js-invitations-list">
              <li class="cabinet-settings__invitations-item">
                <div
                  class="cabinet-settings__invitations-item-switch cabinet-settings__invitations-item-switch_active js-item-invitations-switch"></div>
                <p class="cabinet-settings__invitations-item-text">Дозволити лише від друзів</p>
              </li>
            </ul>
          </div>

          <!-- language -->
          <div class="cabinet-settings__language">
            <h3 class="cabinet-settings__language-title">Мова інтерфейсу</h3>

            <div class="cabinet-settings__language-box">
              <p class="cabinet-settings__language-box-title">Мова</p>

              <ul class="cabinet-settings__language-list">
                <li class="cabinet-settings__language-item">
                  <div class="cabinet-settings__language-item-title-box js-language-item-title-box">
                    <p class="cabinet-settings__language-item-title js-language-item-title">Українська</p>

                    <svg
                      class="cabinet-settings__language-item-title-icon"
                      width="25"
                      height="25">
                      <use xlink:href="#icon-arrow-down"></use>
                    </svg>
                  </div>

                  <ul class="cabinet-settings__language-inner-list js-language-inner-list">
                    <li class="cabinet-settings__language-inner-item">Українська</li>
                    <li class="cabinet-settings__language-inner-item">Аронглійська</li>
                    <li class="cabinet-settings__language-inner-item">Російська</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <!-- Region -->
          <div class="cabinet-settings__region">
            <h3 class="cabinet-settings__region-title">Регіон</h3>

            <div class="cabinet-settings__region-box">
              <p class="cabinet-settings__region-box-title">Регіон</p>

              <ul class="cabinet-settings__region-list">
                <li class="cabinet-settings__region-item">
                  <div class="cabinet-settings__region-item-title-box js-region-item-title-box">
                    <img
                      width="34"
                      height="22"
                      class="cabinet-settings__region-item-img js-region-item-img"
                      loading="lazy"
                      src="https://firebasestorage.googleapis.com/v0/b/battlestar-514be.appspot.com/o/pages%2Fcabinet%2Fsettings%2Fflag-Ukraine.svg?alt=media&token=72482342-f473-4850-8428-ff8e93e9986c"
                      alt="прапор країни" />

                    <p class="cabinet-settings__region-item-title js-active-title">Україна</p>

                    <svg
                      class="cabinet-settings__region-item-title-icon"
                      width="25"
                      height="25">
                      <use xlink:href="#icon-arrow-down"></use>
                    </svg>
                  </div>

                  <ul class="cabinet-settings__region-inner-list js-region-inner-list">
                    <li
                      class="cabinet-settings__region-inner-item"
                      data-src="https://firebasestorage.googleapis.com/v0/b/battlestar-514be.appspot.com/o/pages%2Fcabinet%2Fsettings%2Fflag-Ukraine.svg?alt=media&token=72482342-f473-4850-8428-ff8e93e9986c">
                      Україна
                    </li>
                    <li
                      class="cabinet-settings__region-inner-item"
                      data-src="https://firebasestorage.googleapis.com/v0/b/battlestar-514be.appspot.com/o/pages%2Fcabinet%2Fsettings%2Fflag-Austria.svg?alt=media&token=34c00985-a901-4a23-bb9e-59741abd2fb1">
                      Австралія
                    </li>
                    <li
                      class="cabinet-settings__region-inner-item"
                      data-src="https://firebasestorage.googleapis.com/v0/b/battlestar-514be.appspot.com/o/pages%2Fcabinet%2Fsettings%2Fflag-Afganistan.svg?alt=media&token=42bc0b54-58c8-4e0b-8ff3-d1e61f17d58b">
                      Афганістан
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <!-- accounts -->
          <div class="cabinet-settings__accounts">
            <h3 class="cabinet-settings__accounts-title">Прив'язати обліковий запис</h3>

            <ul class="cabinet-settings__accounts-list js-accounts-list">
              <li class="cabinet-settings__accounts-item">
                <p class="cabinet-settings__accounts-item-title">Steam</p>

                <div class="cabinet-settings__accounts-item-box">
                  <div class="cabinet-settings__accounts-item-box-icon"></div>

                  <p class="cabinet-settings__accounts-item-box-text">VERITA_Luts</p>
                </div>
              </li>

              <li class="cabinet-settings__accounts-item">
                <p class="cabinet-settings__accounts-item-title">Google</p>

                <div class="cabinet-settings__accounts-item-box">
                  <div class="cabinet-settings__accounts-item-box-icon"></div>

                  <p class="cabinet-settings__accounts-item-box-text">Example@mail.com</p>
                </div>
              </li>

              <li class="cabinet-settings__accounts-item">
                <p class="cabinet-settings__accounts-item-title">Facebook</p>

                <p class="cabinet-settings__accounts-item-box-text_accent">Прив'язати</p>
              </li>
            </ul>
          </div>

          <!-- Change password -->
          <div class="cabinet-settings__password">
            <h3 class="cabinet-settings__password-title">Змінити пароль</h3>

            <p class="cabinet-settings__password-change"><a href="#">Змінити</a></p>
          </div>

          <!-- Log out of the account -->

          <div class="cabinet-settings__logout">
            <button class="cabinet-settings__logout-btn js-logout-btn">
              <svg
                width="24"
                height="24">
                <use xlink:href="#icon-exit-arrow"></use>
              </svg>
              <span>Вийти з облікового запису</span>
            </button>
          </div>
        </div>`}function W(){const t=document.querySelector(".js-invitations-list");t==null||t.addEventListener("click",i=>{const s=i.target;s.classList.contains("js-item-invitations-switch")&&s.classList.toggle("cabinet-settings__invitations-item-switch_active")})}function P(){const t=document.querySelector(".js-language-item-title-box"),i=document.querySelector(".js-language-inner-list");t==null||t.addEventListener("click",s);function s(){t==null||t.classList.toggle("cabinet-settings__language-item-title-box_active"),i==null||i.classList.toggle("cabinet-settings__language-inner-list_active")}i==null||i.addEventListener("click",a=>{const e=document.querySelector(".js-language-item-title"),c=a.target;c.tagName!=="LI"||!e||(e.textContent=c.textContent,s())})}function V(){const t=document.querySelector(".js-region-item-title-box"),i=document.querySelector(".js-region-inner-list"),s=document.querySelector(".js-active-title"),a=document.querySelector(".js-region-item-img");t==null||t.addEventListener("click",e);function e(){t==null||t.classList.toggle("cabinet-settings__region-item-title-box_active"),i==null||i.classList.toggle("cabinet-settings__region-inner-list_active")}i==null||i.addEventListener("click",c=>{const l=c.target;s&&(s.textContent=l.textContent),l.dataset.src&&(a.src=l.dataset.src),e()})}function Y(){const t=document.querySelector(".js-logout-btn");t==null||t.addEventListener("click",()=>{console.log(v),v()})}function L(t,i){t.innerHTML=N(),G(),W(),P(),V(),Y();const s=i.dataset.hash;s&&(location.hash=s)}function K(t){const i=document.querySelector(".js-cabinet-block-list"),s=t.map(({id:a,avatar:e,name:c,status:l,teamLogo:_})=>`<li class="cabinet-block__item" data-id="${a}">
                <div class="cabinet-block__item-user">
                  <picture class="cabinet-block__item-user-picture">
                    <span class="status"></span>
                    <source
                      srcset="${e.webp}"
                      type="image/webp" />

                    <img
                      loading="lazy"
                      width="46"
                      height="46"
                      class="cabinet-block__item-user-img"
                      src="${e.png}"
                      alt="${c}" />
                  </picture>

                  <div class="cabinet-block__item-user-info">
                    <p class="cabinet-block__item-user-name">${c}</p>
                    <p class="cabinet-block__item-user-game">${l}</p>
                  </div>
                </div>

                <img
                  loading="lazy"
                  width="66"
                  height="29"
                  class="cabinet-block__item-img-honors"
                  src="${_}"
                  alt="honors" />

                <button
                  type="button"
                  class="cabinet-block__item-btn">
                  <svg
                    class="cabinet-block__item-icon"
                    width="24"
                    height="24">
                    <use xlink:href="#icon-dots-vertical"></use>
                  </svg>
                </button>
              </li>`);i.innerHTML=s.join("")}function X(t){const i=`<div class="cabinet-block">
          <h3 class="cabinet-block__title">Чорний список</h3>

          <div class="cabinet-block__body">
            <ul class="cabinet-block__list js-cabinet-block-list">
             
             
              <li class="cabinet-block__item">
                <div class="cabinet-block__item-user">
                  <picture class="cabinet-block__item-user-picture">
                    <span class="status"></span>
                    <source
                      srcset="../../../assets/img/pages/cabinet/user1.png"
                      type="image/webp" />

                    <img
                      loading="lazy"
                      width="46"
                      height="46"
                      class="cabinet-block__item-user-img"
                      src="../../../assets/img/pages/cabinet/user1.png"
                      alt="User" />
                  </picture>

                  <div class="cabinet-block__item-user-info">
                    <p class="cabinet-block__item-user-name">SergioRicht</p>
                    <p class="cabinet-block__item-user-game">Играет в CS:GO</p>
                  </div>
                </div>

                <img
                  loading="lazy"
                  width="66"
                  height="29"
                  class="cabinet-block__item-img-honors"
                  src="../../../assets/img/pages/cabinet/honors-eagle.svg"
                  alt="honors" />

                <button
                  type="button"
                  class="cabinet-block__item-btn">
                  <svg
                    class="cabinet-block__item-icon"
                    width="24"
                    height="24">
                    <use xlink:href="#icon-dots-vertical"></use>
                  </svg>
                </button>
              </li>
              <li class="cabinet-block__item">
                <div class="cabinet-block__item-user">
                  <picture class="cabinet-block__item-user-picture">
                    <span class="status"></span>
                    <source
                      srcset="../../../assets/img/pages/cabinet/user1.png"
                      type="image/webp" />

                    <img
                      loading="lazy"
                      width="46"
                      height="46"
                      class="cabinet-block__item-user-img"
                      src="../../../assets/img/pages/cabinet/user1.png"
                      alt="User" />
                  </picture>

                  <div class="cabinet-block__item-user-info">
                    <p class="cabinet-block__item-user-name">SergioRicht</p>
                    <p class="cabinet-block__item-user-game">Играет в CS:GO</p>
                  </div>
                </div>

                <img
                  loading="lazy"
                  width="66"
                  height="29"
                  class="cabinet-block__item-img-honors"
                  src="../../../assets/img/pages/cabinet/honors-eagle.svg"
                  alt="honors" />

                <button
                  type="button"
                  class="cabinet-block__item-btn">
                  <svg
                    class="cabinet-block__item-icon"
                    width="24"
                    height="24">
                    <use xlink:href="#icon-dots-vertical"></use>
                  </svg>
                </button>
              </li>
              <li class="cabinet-block__item">
                <div class="cabinet-block__item-user">
                  <picture class="cabinet-block__item-user-picture">
                    <span class="status"></span>
                    <source
                      srcset="../../../assets/img/pages/cabinet/user1.png"
                      type="image/webp" />

                    <img
                      loading="lazy"
                      width="46"
                      height="46"
                      class="cabinet-block__item-user-img"
                      src="../../../assets/img/pages/cabinet/user1.png"
                      alt="User" />
                  </picture>

                  <div class="cabinet-block__item-user-info">
                    <p class="cabinet-block__item-user-name">SergioRicht</p>
                    <p class="cabinet-block__item-user-game">Играет в CS:GO</p>
                  </div>
                </div>

                <img
                  loading="lazy"
                  width="66"
                  height="29"
                  class="cabinet-block__item-img-honors"
                  src="../../../assets/img/pages/cabinet/honors-eagle.svg"
                  alt="honors" />

                <button
                  type="button"
                  class="cabinet-block__item-btn">
                  <svg
                    class="cabinet-block__item-icon"
                    width="24"
                    height="24">
                    <use xlink:href="#icon-dots-vertical"></use>
                  </svg>
                </button>
              </li>
              <li class="cabinet-block__item">
                <div class="cabinet-block__item-user">
                  <picture class="cabinet-block__item-user-picture">
                    <span class="status"></span>
                    <source
                      srcset="../../../assets/img/pages/cabinet/user1.png"
                      type="image/webp" />

                    <img
                      loading="lazy"
                      width="46"
                      height="46"
                      class="cabinet-block__item-user-img"
                      src="../../../assets/img/pages/cabinet/user1.png"
                      alt="User" />
                  </picture>

                  <div class="cabinet-block__item-user-info">
                    <p class="cabinet-block__item-user-name">SergioRicht</p>
                    <p class="cabinet-block__item-user-game">Играет в CS:GO</p>
                  </div>
                </div>

                <img
                  loading="lazy"
                  width="66"
                  height="29"
                  class="cabinet-block__item-img-honors"
                  src="../../../assets/img/pages/cabinet/honors-eagle.svg"
                  alt="honors" />

                <button
                  type="button"
                  class="cabinet-block__item-btn">
                  <svg
                    class="cabinet-block__item-icon"
                    width="24"
                    height="24">
                    <use xlink:href="#icon-dots-vertical"></use>
                  </svg>
                </button>
              </li>
            </ul>

            <div class="cabinet-block__info">
              <div class="cabinet-block__info-message">
                <svg
                  width="40"
                  height="40">
                  <use xlink:href="#icon-information-outline"></use>
                </svg>
                <p class="cabinet-block__info-message-text">
                  Люди з чорного списку не можуть запрошувати вас до команд, надсилати повідомлення
                  або додавати до паті
                </p>
              </div>
            </div>
          </div>
        </div>`;t.innerHTML=i,u(F).then(K).catch(g)}function j(t,i){X(t);const s=i.dataset.hash;s&&(location.hash=s)}function J(t,i){const s=location.hash.slice(1)?location.hash.slice(1):"statistics",a=document.querySelector(`[data-hash="${s}"]`);switch(f(a,i),s){case"statistics":m(t,a);break;case"history":k(t,a);break;case"personal-data":w(t,a);break;case"wallet":x(t,a);break;case"setting":L(t,a);break;case"block-list":j(t,a);break;default:m(t,a);break}}function Z(){const t=document.querySelector(".js-cabinet-nav-list"),i=document.querySelector(".js-cabinet-main-body");t==null||t.addEventListener("click",s);function s(a){const e=a.target.closest("li");e&&(f(e,t),e.classList.contains("js-statistics")&&m(i,e),e.classList.contains("js-history")&&k(i,e),e.classList.contains("js-personal-data")&&w(i,e),e.classList.contains("js-wallet")&&x(i,e),e.classList.contains("js-setting")&&L(i,e),e.classList.contains("js-block-list")&&j(i,e))}J(i,t)}function Q(){const t=localStorage.getItem("logged");(t==="false"||t===null)&&(window.location.href="404")}document.addEventListener("DOMContentLoaded",()=>{M(),E(),H(),h(),h(),C(),Z(),Q(),q()});
//# sourceMappingURL=cabinet.js.map
