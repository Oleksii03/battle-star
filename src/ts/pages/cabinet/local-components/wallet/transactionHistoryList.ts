export function transactionHistoryList(collection: any, container: HTMLElement) {
  const markup = collection.map(({ isVictory, objDate, objID, objRegime, score, title }) => {
    return `
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
              </li>`;
  });

  container.innerHTML = markup.join('');
}
