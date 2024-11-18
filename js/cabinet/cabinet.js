import{h as u,o as h}from"../../assets/cabinet-BBv-qIRL.js";import{g,H as j,a as L,s as S,h as M,l as T,c as D}from"../../assets/closeDropDownList-CugoLy9B.js";import{s as F}from"../../assets/loginOrRegistrationHandler-zsTQJq6b.js";import"../../assets/vendor-DZUFF-U2.js";function y(i,s){const t=document.querySelector(".js-cabinet-nav-thumb"),e=[...s.children],a=e.indexOf(i);t.style.top=`${16.66*a}%`,e.forEach(l=>{l.classList.remove("cabinet__nav-item_active")}),i.classList.add("cabinet__nav-item_active")}function v(){return`
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
          </div>`}function H(){return`
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
        </div>`}function E(i,s){const t=document.querySelector(".js-cabinet-statistics-thumb");i.innerHTML=v(),s.addEventListener("click",e=>{const a=e.target;if(a.tagName==="BUTTON"){if([...s.children].forEach(l=>l.classList.remove("cabinet-statistics__btn_active")),a.classList.contains("js-statistics-btn-csgo")){i.innerHTML=H(),t==null||t.classList.add("cabinet-statistics__btns-thumb_active"),a.classList.add("cabinet-statistics__btn_active");return}if(a.classList.contains("js-statistics-btn-dota")){i.innerHTML=v(),t==null||t.classList.remove("cabinet-statistics__btns-thumb_active"),a.classList.add("cabinet-statistics__btn_active");return}}})}function I(i){const s=`
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
       </div>`;i.innerHTML=s;const t=document.querySelector(".js-cabinet-statistics-content"),e=document.querySelector(".js-statistics-btns-box");E(t,e)}function m(i,s){I(i);const t=s.dataset.hash;t&&(location.hash=t),console.log(t)}function p(i){const s=document.querySelector(".js-cabinet-history-list"),t=i.map(e=>{const{id:a,isVictory:l,score:o,title:_,objDate:{date:c,time:r},objID:{id:n,title:d},objRegime:{regime:b,title:x}}=e;return`
            <li class="cabinet-history__list-item" data-id="${a}">
              <p class="cabinet-history__list-item-title">${_}</p>

              <div class="medium-content">
                <div class="cabinet-history__list-item-date-box">
                  <p class="cabinet-history__list-item-date-title">${c}</p>
                  <p class="cabinet-history__list-item-time">${r}</p>
                </div>

                <div class="cabinet-history__list-item-regime-box">
                  <p class="cabinet-history__list-item-regime-title">${x}</p>
                  <p class="cabinet-history__list-item-regime">${b}</p>
                </div>

                <div class="cabinet-history__list-item-id-box">
                  <p class="cabinet-history__list-item-id-title">${d}</p>
                  <p class="cabinet-history__list-item-id">${n}</p>
                </div>
              </div>

              <div class="cabinet-history__list-item-result">
                
                ${l?'<p class="cabinet-history__list-item-result-title cabinet-history__list-item-result-title_victory">Перемога</p>':'<p class="cabinet-history__list-item-result-title cabinet-history__list-item-result-title_loss">Програш</p>'}
                <p class="cabinet-history__list-item-result-score js-result-score">
                  <span class="symbol">${l?"+ ":"- "}</span>
                  <span class="amount">${o}</span>
                  <span class="currency">BS</span>
                </p>
              </div>
            </li>`});s.innerHTML=t.join("")}function q(i){const s=document.querySelector(".js-drop-down-item-title-box"),t=document.querySelector(".js-drop-down-inner-list"),e=document.querySelector(".js-drop-down-active-title"),a=document.querySelector(".js-drop-down-icon");s==null||s.addEventListener("click",l);function l(){t==null||t.classList.toggle("cabinet-history__drop-down-inner-list_active"),a==null||a.classList.toggle("cabinet-history__drop-down-item-icon_active")}t==null||t.addEventListener("click",o);function o(c){const n=c.target.textContent;n&&(e.textContent=n,l(),_(n.toLowerCase()))}function _(c){if(c!=null&&c.includes("рейтинг")){const n=i.toSorted((d,b)=>b.sortScore-d.sortScore);p(n);return}const r=i.filter(({title:n})=>n.toLowerCase()===c);if(r.length){p(r);return}p(i)}}function $(i){const s=`
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
        </div>`;i.innerHTML=s,g(j).then(t=>{p(t),q(t)}).catch(u)}function f(i,s){$(i);const t=s.dataset.hash;t&&(location.hash=t)}function C(){return`
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
        </div>`}function w(i,s){i.innerHTML=C();const t=s.dataset.hash;t&&(location.hash=t)}function O(i,s){const t=i.map(({isVictory:e,objDate:a,objID:l,objRegime:o,score:_,title:c})=>`
         <li
                class="cabinet-history__list-item"
                data-id="">
                <p class="cabinet-history__list-item-title">CS:GO</p>

                <div class="medium-content">
                  <div class="cabinet-history__list-item-date-box">
                    <p class="cabinet-history__list-item-date-title">07.06.2021</p>
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

                  <p class="cabinet-history__list-item-result-score js-result-score">
                    <span class="symbol">-</span>
                    <span class="amount">1200</span>
                    <span class="currency">BS</span>
                  </p>
                </div>
              </li>

              <li
                class="cabinet-history__list-item"
                data-id="">
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
                </div>

                <div class="medium-content">
                  <div class="cabinet-history__list-item-date-box">
                    <p class="cabinet-history__list-item-date-title">07.06.2021</p>
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

                  <p class="cabinet-history__list-item-result-score js-result-score">
                    <span class="symbol">-</span>
                    <span class="amount">1200</span>
                    <span class="currency">BS</span>
                  </p>
                </div>
              </li>

              <li
                class="cabinet-history__list-item"
                data-id="">
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

                <div class="medium-content">
                  <div class="cabinet-history__list-item-date-box">
                    <p class="cabinet-history__list-item-date-title">07.06.2021</p>
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

                  <p class="cabinet-history__list-item-result-score js-result-score">
                    <span class="symbol">-</span>
                    <span class="amount">1200</span>
                    <span class="currency">BS</span>
                  </p>
                </div>
              </li>`);s.innerHTML=t.join("")}function B(i){const s=`
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
        </div>`;i.innerHTML=s;const t=document.querySelector(".js-cabinet-wallet-history-list");g(L).then(e=>O(e,t)).catch(u)}function k(i,s){B(i);const t=s.dataset.hash;t&&(location.hash=t),console.log(t)}function A(i,s){const t=location.hash.slice(1)?location.hash.slice(1):"statistics",e=document.querySelector(`[data-hash="${t}"]`);switch(y(e,s),t){case"statistics":m(i,e);break;case"history":f(i,e);break;case"personal-data":w(i,e);break;case"wallet":k(i,e);break;default:m(i,e);break}}function R(){const i=document.querySelector(".js-cabinet-nav-list"),s=document.querySelector(".js-cabinet-main-body");i==null||i.addEventListener("click",t);function t(e){const a=e.target.closest("li");a&&(y(a,i),a.classList.contains("js-statistics")&&m(s,a),a.classList.contains("js-history")&&f(s,a),a.classList.contains("js-personal-data")&&w(s,a),a.classList.contains("js-wallet")&&k(s,a))}A(s,i)}function N(){const i=localStorage.getItem("logged");(i==="false"||i===null)&&(window.location.href="404")}document.addEventListener("DOMContentLoaded",()=>{S(),M(),F(),h(),h(),T(),R(),N(),D()});
//# sourceMappingURL=cabinet.js.map
