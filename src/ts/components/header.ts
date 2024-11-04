export const userInnerList = document.querySelector('.js-user-inner-list');
export const gameInnerList = document.querySelector('.js-game-dropdown-item-inner-list');
// ---reusable-refs------------
export function header() {
  const sergioBox = document.querySelector('.js-user-item-box');
  // const activeUser = document.querySelector('.js-user-active-title');
  const gameDropdownBox = document.querySelector('.js-game-dropdown-box');
  const gameDropdownActiveTitle = document.querySelector('.js-game-dropdown-active-title');
  // ----local-refs------------------

  // ===handlerSergioList======
  sergioBox?.addEventListener('click', toggleSergioList);

  function toggleSergioList() {
    userInnerList?.classList.toggle('header__user-inner-list_open');
  }

  // ---userInnerList---
  // userInnerList?.addEventListener('click', getTextContentFromuserList);

  // function getTextContentFromuserList(e: Event): void {
  //   const targetEL = e.target as HTMLElement;
  //   if (activeUser && targetEL) {
  //     activeUser.textContent = targetEL.textContent;
  //   }
  //   toggleuserList();
  // }

  // ===handlerGameList======
  gameDropdownBox?.addEventListener('click', toggleGameList);

  function toggleGameList(): void {
    gameInnerList?.classList.toggle('game-dropdown-item__inner-list_open');
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
