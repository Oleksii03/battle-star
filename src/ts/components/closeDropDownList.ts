import { sergioInnerList } from './header';
import { gameInnerList } from './header';

export function closeDropDownList(): void {
  document.addEventListener('click', (e: Event) => {
    // SergioList
    handlerSergioList(e);
    // gameList
    handlerGameDropdownList(e);
  });

  // ===function-handlers====
  // SergioList
  function handlerSergioList(e: Event): void {
    const targetEl = (e.target as HTMLElement).closest('.header__Sergio-inner-item');
    const parentTargetEl = (e.target as HTMLElement).closest('.header__Sergio-item-box');
    // --refs----

    // handlers
    const isSergioListOpen =
      !targetEl?.classList.contains('header__Sergio-inner-item') &&
      !parentTargetEl?.classList.contains('header__Sergio-item-box');

    if (isSergioListOpen) {
      sergioInnerList?.classList.remove('header__Sergio-inner-list_open');
    }
  }

  // gameDropdownList
  function handlerGameDropdownList(e: Event): void {
    const targetEl = (e.target as HTMLElement).closest('.game-dropdown-item__inner-item');
    const parentTargetEl = (e.target as HTMLElement).closest('.js-game-dropdown-box');
    // --refs----

    const isGameDropdownListOpen =
      !targetEl?.classList.contains('game-dropdown-item__inner-item') &&
      !parentTargetEl?.classList.contains('js-game-dropdown-box');

    if (isGameDropdownListOpen) {
      gameInnerList?.classList.remove('game-dropdown-item__inner-list_open');
    }
  }
}
