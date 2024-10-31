export function settingsHtmlComponents() {
  const currentPath = window.location.pathname;

  if (!currentPath.includes('/cabinet')) return;

  const itemCabinet = document.querySelector('.js-user-inner-list') as HTMLUListElement;
  const btnExit = document.querySelector('.js-sidebar-btn-exit');
  const btnEnter = document.querySelector('.js-sidebar-btn-enter');

  if (itemCabinet) itemCabinet.style.display = 'none';
  btnExit?.classList.remove('sidebar__nav-item_hidden');
  btnEnter?.classList.add('sidebar__nav-item_hidden');
}
