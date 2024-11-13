export function createMainBodyMarkupCsgo(): string {
  return `
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
        </div>`;
}
