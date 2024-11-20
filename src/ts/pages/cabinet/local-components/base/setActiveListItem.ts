export function setActiveListItem(targetEl: HTMLElement, navigationList: HTMLUListElement) {
  const navigationThumb = document.querySelector('.js-cabinet-nav-thumb') as HTMLElement;

  const items = [...navigationList.children];
  const idx = items.indexOf(targetEl);

  navigationThumb.style.top = `${16.66 * idx}%`;

  items.forEach(item => {
    item.classList.remove('cabinet__nav-item_active');
  });

  targetEl.classList.add('cabinet__nav-item_active');

  // handler-last-item
  const lastItemPercent = 16.66 * (items.length - 1);

  if (16.66 * idx >= lastItemPercent) {
    navigationThumb.classList.add('dangerous');
  } else {
    navigationThumb.classList.remove('dangerous');
  }
}
