export function pageCabinet() {
  const navigationList = document.querySelector('.js-cabinet-nav-list') as HTMLUListElement;
  const navigationThumb = document.querySelector('.js-cabinet-nav-thumb') as HTMLElement;

  navigationList?.addEventListener('click', toggleNavigationList);

  function toggleNavigationList(e: Event) {
    const targetEl = (e.target as HTMLElement).closest('li');

    if (!targetEl) return;

    const items = [...navigationList.children];
    const idx = items.indexOf(targetEl);

    navigationThumb.style.top = `${16.66 * idx}%`;

    items.forEach(item => {
      item.classList.remove('cabinet__nav-item_active');
    });

    targetEl.classList.add('cabinet__nav-item_active');
  }
}
