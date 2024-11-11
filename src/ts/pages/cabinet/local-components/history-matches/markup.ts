import { CabinetHistoryMatchesList } from '@/ts/types/pages/cabinet';

export function markup(collection: CabinetHistoryMatchesList[], container: HTMLElement) {
  const markup = `
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
        </div>`;

  container.innerHTML = markup;

  const cabinetHistoryList = document.querySelector('.js-cabinet-history-list') as HTMLUListElement;

  const markupListItem = collection.map(obj => {
    const {
      id,
      isVictory,
      score,
      title,
      objDate: { date, time },
      objID: { id: userId, title: titleId },
      objRegime: { regime, title: regimeTitle },
    } = obj;

    return `
            <li class="cabinet-history__list-item" data-id="${id}">
              <p class="cabinet-history__list-item-title">${title}</p>

              <div class="medium-content">
                <div class="cabinet-history__list-item-date-box">
                  <p class="cabinet-history__list-item-date-title">${date}</p>
                  <p class="cabinet-history__list-item-time">${time}</p>
                </div>

                <div class="cabinet-history__list-item-regime-box">
                  <p class="cabinet-history__list-item-regime-title">${regimeTitle}</p>
                  <p class="cabinet-history__list-item-regime">${regime}</p>
                </div>

                <div class="cabinet-history__list-item-id-box">
                  <p class="cabinet-history__list-item-id-title">${titleId}</p>
                  <p class="cabinet-history__list-item-id">${userId}</p>
                </div>
              </div>

              <div class="cabinet-history__list-item-result">
                <p
                  class="cabinet-history__list-item-result-title cabinet-history__list-item-result-title_victory">
                  Перемога
                </p>
                <p class="cabinet-history__list-item-result-score">
                  <span class="symbol">+</span>
                  <span class="amount">${score}</span>
                  <span class="currency">BS</span>
                </p>
              </div>
            </li>`;
  });

  cabinetHistoryList.innerHTML = markupListItem.join('');
}
