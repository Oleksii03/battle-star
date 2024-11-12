import { CabinetHistoryMatchesList } from '@/ts/types/pages/cabinet';

export function markupListItem(collection: CabinetHistoryMatchesList[]) {
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
                
                ${isVictory ? '<p class="cabinet-history__list-item-result-title cabinet-history__list-item-result-title_victory">Перемога</p>' : '<p class="cabinet-history__list-item-result-title cabinet-history__list-item-result-title_loss">Програш</p>'}
                <p class="cabinet-history__list-item-result-score js-result-score" 
                  data-score="${isVictory ? `+${score}` : `-${score}`}">
                  <span class="symbol">${isVictory ? '+ ' : '- '}</span>
                  <span class="amount">${score}</span>
                  <span class="currency">BS</span>
                </p>
              </div>
            </li>`;
  });

  cabinetHistoryList.innerHTML = markupListItem.join('');
}
