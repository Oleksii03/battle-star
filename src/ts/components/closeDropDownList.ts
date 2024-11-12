import { userInnerList, gameInnerList, iconArrowDown } from './header';
// import { gameInnerList } from './header';

export function closeDropDownList(): void {
  document.addEventListener('click', (e: Event) => {
    // userList
    handlerUserList(e);
    // gameList
    handlerGameDropdownList(e);
    // cabinetHistoryDropdownList
    cabinetHistoryDropdownList(e);
  });

  // ===function-handlers====
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

  // cabinetHistoryDropdownList
  function cabinetHistoryDropdownList(e: Event) {
    const targetEl = e.target as HTMLElement;
    const parentTargetEl = (e.target as HTMLElement).closest('.js-drop-down-item-title-box');

    const isCabinetHistoryDropdownListOpen =
      !targetEl?.classList.contains('cabinet-history__drop-down-inner-item-text') &&
      !parentTargetEl?.classList.contains('js-drop-down-item-title-box');

    if (isCabinetHistoryDropdownListOpen) {
      document
        .querySelector('.js-drop-down-inner-list')
        ?.classList.remove('cabinet-history__drop-down-inner-list_active');
      document
        .querySelector('.js-drop-down-icon')
        ?.classList.remove('cabinet-history__drop-down-item-icon_active');
    }
  }
}
