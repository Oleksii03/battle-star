import { setActiveListItem } from './local-components/base/setActiveListItem';
import { statisticHandler } from './local-components/statistics/statistic';
import { historyMatches } from './local-components/history-matches/historyMatches';

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
  }

  window.addEventListener('load', () => {
    const tab = location.hash.slice(1); // Отримуємо поточний хеш без '#'
    console.log(tab);
  });

  window.addEventListener('hashchange', () => {
    const tab = location.hash.slice(1);
    console.log(tab);
  });
}
