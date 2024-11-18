export function transactionHistoryList(collection: any, container: HTMLElement) {
  const markup = collection.map(({ id, isVictory, objDate, objID, objRegime, score, title }) => {
    console.log(title.toLowerCase().includes('виведення'));
    return `
        <li class="cabinet-history__list-item" data-id="${id}">
        ${
          title.toLowerCase().includes('переказ')
            ? `
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
              </div>`
            : title.toLowerCase().includes('виведення')
              ? `
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
                `
              : `<p class="cabinet-history__list-item-title">${title}</p>`
        }

                <div class="cabinet-wallet__medium-content">
                  <div class="cabinet-history__list-item-date-box">
                    <p class="cabinet-history__list-item-date-title">${objDate.date}</p>
                    <p class="cabinet-history__list-item-time">${objDate.time}</p>
                  </div>

                  <div class="cabinet-history__list-item-regime-box">
                    <p class="cabinet-history__list-item-regime-title">${objRegime.title}</p>
                    <p class="cabinet-history__list-item-regime">${objRegime.regime}</p>
                  </div>

                  <div class="cabinet-history__list-item-id-box cabinet-wallet__list-item-id-box">
                    <p class="cabinet-history__list-item-id-title">${objID.title}</p>
                    <p class="cabinet-history__list-item-id">${objID.id}</p>
                  </div>
                </div>

                 <div class="cabinet-history__list-item-result">
                
                ${isVictory ? '<p class="cabinet-history__list-item-result-title cabinet-history__list-item-result-title_victory">Перемога</p>' : '<p class="cabinet-history__list-item-result-title cabinet-history__list-item-result-title_loss">Програш</p>'}
                <p class="cabinet-history__list-item-result-score js-result-score">
                  <span class="symbol">${isVictory ? '+ ' : '- '}</span>
                  <span class="amount">${score}</span>
                  <span class="currency">BS</span>
                </p>
              </div>
              </li>`;
  });

  container.innerHTML = markup.join('');
}
