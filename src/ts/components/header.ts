export const userInnerList = document.querySelector('.js-user-inner-list');
export const gameInnerList = document.querySelector('.js-game-dropdown-item-inner-list');
export const iconArrowDown = document.querySelector('.js-icon-arrow-down');
export const gameDropdownIcon = document.querySelector('.js-game-dropdown-icon');
// --/-reusable-refs------------

export function header() {
  const sergioBox = document.querySelector('.js-user-item-box');
  const gameDropdownBox = document.querySelector('.js-game-dropdown-box');
  const gameDropdownActiveTitle = document.querySelector('.js-game-dropdown-active-title');
  // ---/-local-refs------------------

  // ===handlerSergioList======
  sergioBox?.addEventListener('click', toggleUserList);

  function toggleUserList() {
    userInnerList?.classList.toggle('header__user-inner-list_open');
    iconArrowDown?.classList.toggle('header__user-item-icon_rotate');
  }

  // ===handlerGameList======
  gameDropdownBox?.addEventListener('click', toggleGameList);

  function toggleGameList(): void {
    gameInnerList?.classList.toggle('game-dropdown-item__inner-list_open');
    gameDropdownIcon?.classList.toggle('game-dropdown-item__icon_active');
  }

  // gameInnerList
  gameInnerList?.addEventListener('click', getTextContentFromGameList);

  function getTextContentFromGameList(e: Event): void {
    const targetEL = e.target as HTMLElement;
    if (gameDropdownActiveTitle) {
      gameDropdownActiveTitle.textContent = targetEL.textContent;
    }
    toggleGameList();
  }
}
