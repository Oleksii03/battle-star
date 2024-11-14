import { PAGE_CABINET, PAGE_MAIN } from './constants';

export function settingsHtmlComponents() {
  const sidebarLinkList = document.querySelectorAll('.sidebar__nav-link');
  // reuse-refs---
  const currentPath = window.location.pathname;

  console.log(currentPath);

  // PAGE_CABINET
  if (currentPath.includes(PAGE_CABINET)) {
    const listCabinet = document.querySelector('.js-user-inner-list') as HTMLUListElement;
    const btnExit = document.querySelector('.js-sidebar-btn-exit');
    const btnEnter = document.querySelector('.js-sidebar-btn-enter');
    const userNameItem = document.querySelector('.js-user-active-title') as HTMLElement;
    const arrowDown = document.querySelector('.js-icon-arrow-down') as HTMLElement;
    const userItem = document.querySelector('.header__user-item') as HTMLElement;
    // local-refs---

    btnExit?.classList.remove('sidebar__nav-item_hidden');
    btnEnter?.classList.add('sidebar__nav-item_hidden');
    userNameItem.style.cursor = 'auto';
    if (userNameItem) userNameItem.style.cursor = 'auto';
    if (listCabinet) listCabinet.style.display = 'none';
    if (arrowDown) arrowDown.style.display = 'none';
    if (userItem) userItem.style.cursor = 'auto';

    if (sidebarLinkList) {
      sidebarLinkList.forEach(item => {
        item.classList.remove('sidebar__nav-link_active');
      });
    }
    return;
  }

  // PAGE_MAIN
  if (currentPath === PAGE_MAIN) {
    [...sidebarLinkList].forEach(item => {
      if (item.classList.contains('sidebar__nav-link_main')) {
        item.classList.add('sidebar__nav-link_active');
      } else {
        item.classList.remove('sidebar__nav-link_active');
      }
    });
  }
}
