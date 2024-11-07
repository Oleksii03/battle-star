import { userInnerList, gameInnerList, iconArrowDown } from './header';
// import { gameInnerList } from './header';

export function closeDropDownList(): void {
  document.addEventListener('click', (e: Event) => {
    // userList
    handlerUserList(e);
    // gameList
    handlerGameDropdownList(e);
  });

  // ===function-handlers====
  // SergioList
  function handlerUserList(e: Event): void {
    const targetEl = (e.target as HTMLElement).closest('.header__user-inner-item');
    const parentTargetEl = (e.target as HTMLElement).closest('.header__user-item-box');
    // --refs----

    // handlers
    const isuserListOpen =
      !targetEl?.classList.contains('header__user-inner-item') &&
      !parentTargetEl?.classList.contains('header__user-item-box');

    if (isuserListOpen) {
      userInnerList?.classList.remove('header__user-inner-list_open');
      iconArrowDown?.classList.remove('header__user-item-icon_rotate');
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
