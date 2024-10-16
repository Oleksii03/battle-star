import { sergioInnerList } from './header';
import { gameInnerList } from './header';

export function closeDropDownList(): void {
  // Sergio-inner-list---
  document.addEventListener('click', (e: Event) => {
    const targetEl = (e.target as HTMLElement).closest('.header__Sergio-inner-item');
    const parentTargetEl = (e.target as HTMLElement).closest('.header__Sergio-item-box');
    // --refs----

    // SergioList
    const isSergioListOpen =
      !targetEl?.classList.contains('header__Sergio-inner-item') &&
      !parentTargetEl?.classList.contains('header__Sergio-item-box');

    if (isSergioListOpen) {
      sergioInnerList?.classList.remove('header__Sergio-inner-list_open');
      return;
    }

    // gameList
    console.log(e.target);
  });
}
