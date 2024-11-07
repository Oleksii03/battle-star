import { setActiveListItem } from './local-components/setActiveListItem';

export function pageCabinet() {
  const navigationList = document.querySelector('.js-cabinet-nav-list') as HTMLUListElement;

  navigationList?.addEventListener('click', handleNavigationList);

  function handleNavigationList(e: Event) {
    const targetEl = (e.target as HTMLElement).closest('li');

    if (!targetEl) return;

    // sets-the-active-list-item
    setActiveListItem(targetEl, navigationList);
  }
}
