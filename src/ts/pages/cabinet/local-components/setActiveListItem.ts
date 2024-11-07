export function setActiveListItem(targetEl: HTMLElement, navigationList: HTMLUListElement) {
  const navigationThumb = document.querySelector('.js-cabinet-nav-thumb') as HTMLElement;

  const items = [...navigationList.children];
  const idx = items.indexOf(targetEl);

  navigationThumb.style.top = `${16.66 * idx}%`;

  items.forEach(item => {
    item.classList.remove('cabinet__nav-item_active');
  });

  targetEl.classList.add('cabinet__nav-item_active');
}
