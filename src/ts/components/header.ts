export function header() {
  const sergioBox = document.querySelector('.js-sergio-item-box') as HTMLElement | null;
  const sergioInnerList = document.querySelector('.js-sergio-inner-list') as HTMLElement | null;
  const sergioActiveItem = document.querySelector('.js-sergio-active-title') as HTMLElement | null;

  // --refs----
  if (sergioBox) {
    sergioBox.addEventListener('click', toggleSergioList);
  } else {
    console.error('Element not found');
  }

  function toggleSergioList(): void {
    if (sergioInnerList) {
      sergioInnerList.classList.toggle('header__Sergio-inner-list_open');
    }
  }

  if (sergioInnerList) {
    sergioInnerList.addEventListener('click', getTextContent);
  }

  function getTextContent(event: Event): void {
    const target = event.target as HTMLElement;
    if (sergioActiveItem) {
      sergioActiveItem.textContent = target.textContent;
    }
    toggleSergioList();
  }

  // close all lists---
  document.addEventListener('click', (e: Event) => {
    let targetEl = (e.target as HTMLElement).closest(
      '.header__Sergio-inner-item'
    ) as HTMLElement | null;
    let parentTargetEl = (e.target as HTMLElement).closest(
      '.header__Sergio-item-box'
    ) as HTMLElement | null;
    // --refs----
    if (
      !targetEl?.classList.contains('header__Sergio-inner-item') &&
      !parentTargetEl?.classList.contains('header__Sergio-item-box')
    ) {
      sergioInnerList?.classList.remove('header__Sergio-inner-list_open');
    }
  });
}
