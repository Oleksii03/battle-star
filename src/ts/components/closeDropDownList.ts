import { userInnerList, gameInnerList, iconArrowDown, gameDropdownIcon } from './header';

export function closeDropDownList(): void {
  document.addEventListener('click', (e: Event) => {
    // userList
    handlerUserList(e);
    // gameList
    handlerGameDropdownList(e);
    // cabinetHistoryDropdownList
    cabinetHistoryDropdownList(e);
    // handlerCabinetLanguage
    handlerLanguageList(e);
    // handlerCabinetTitleBox
    handlerCabinetTitleBox(e);
  });

  // ===function-handlers====
  function handlerCabinetTitleBox(e: Event) {
    const titleBox = document.querySelector('.js-region-item-title-box');
    const regionList = document.querySelector('.js-region-inner-list');
    // --refs----
    const targetEl = (e.target as HTMLElement).closest('.js-region-item-title-box');
    const parentTargetEl = (e.target as HTMLElement).closest('.js-region-inner-list');

    const isRegionDropdownListOpen =
      !targetEl?.classList.contains('js-region-item-title-box') &&
      !parentTargetEl?.classList.contains('js-region-inner-list');

    if (isRegionDropdownListOpen) {
      regionList?.classList.remove('cabinet-settings__region-inner-list_active');
      titleBox?.classList.remove('cabinet-settings__region-item-title-box_active');
    }
  }

  function handlerLanguageList(e: Event) {
    const titleBox = document.querySelector('.js-language-item-title-box');
    const languageInnerList = document.querySelector('.js-language-inner-list');
    // --refs----
    const targetEl = (e.target as HTMLElement).closest('.js-language-item-title-box');
    const parentTargetEl = (e.target as HTMLElement).closest('.js-language-inner-list');

    const isLanguageDropdownListOpen =
      !targetEl?.classList.contains('js-language-item-title-box') &&
      !parentTargetEl?.classList.contains('js-language-inner-list');

    if (isLanguageDropdownListOpen) {
      languageInnerList?.classList.remove('cabinet-settings__language-inner-list_active');
      titleBox?.classList.remove('cabinet-settings__language-item-title-box_active');
    }
  }

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
      gameDropdownIcon?.classList.remove('game-dropdown-item__icon_active');
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
