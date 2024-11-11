import { CabinetHistoryMatchesList } from '@/ts/types/pages/cabinet';

export function markup(collection: CabinetHistoryMatchesList[]) {
  return collection.map(obj => {
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
          </ul>`;
  });
}
