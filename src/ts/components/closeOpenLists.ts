export function closeDropDownList(sergioInnerList: HTMLElement | null): void {
  // Sergio-inner-list---
  document.addEventListener('click', (e: Event) => {
    const targetEl = (e.target as HTMLElement).closest(
      '.header__Sergio-inner-item'
    ) as HTMLElement | null;
    const parentTargetEl = (e.target as HTMLElement).closest(
      '.header__Sergio-item-box'
    ) as HTMLElement | null;
    // --refs----
    const isSuccess =
      !targetEl?.classList.contains('header__Sergio-inner-item') &&
      !parentTargetEl?.classList.contains('header__Sergio-item-box');

    if (isSuccess) {
      sergioInnerList?.classList.remove('header__Sergio-inner-list_open');
      return;
    }
  });
}
