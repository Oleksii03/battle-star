import { setActiveListItem } from './local-components/base/setActiveListItem';
import { statisticHandler } from './local-components/statistics/statistic';
import { historyMatches } from './local-components/history-matches/historyMatches';
import { handlerUniqueUrl } from './local-components/base/handlerUniqueUrl';
import { personalData } from './local-components/personal-data/personalData';
import { handlerWallet } from './local-components/wallet/wallet';

export function pageCabinet() {
  const navigationList = document.querySelector('.js-cabinet-nav-list') as HTMLUListElement;
  const cabinetMainContainer = document.querySelector('.js-cabinet-main-body') as HTMLElement;

  navigationList?.addEventListener('click', handleNavigationList);

  function handleNavigationList(e: Event) {
    const targetEl = (e.target as HTMLElement).closest('li');

    if (!targetEl) return;

    // sets-the-active-list-item
    setActiveListItem(targetEl, navigationList);

    // ===component handlers====
    if (targetEl.classList.contains('js-statistics')) {
      statisticHandler(cabinetMainContainer, targetEl);
    }

    if (targetEl.classList.contains('js-history')) {
      historyMatches(cabinetMainContainer, targetEl);
    }

    if (targetEl.classList.contains('js-personal-data')) {
      personalData(cabinetMainContainer, targetEl);
    }

    if (targetEl.classList.contains('js-wallet')) {
      handlerWallet(cabinetMainContainer, targetEl);
    }
  }

  // handlerUniqueUrl
  handlerUniqueUrl(cabinetMainContainer, navigationList);
}
