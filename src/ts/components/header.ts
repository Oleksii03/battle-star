export const sergioInnerList = document.querySelector('.js-sergio-inner-list');
export const gameInnerList = document.querySelector('.js-game-dropdown-item-inner-list');
// ---reusable-refs------------
export function header() {
  const sergioBox = document.querySelector('.js-sergio-item-box');
  const sergioActiveItem = document.querySelector('.js-sergio-active-title');
  const gameDropdownBox = document.querySelector('.js-game-dropdown-box');
  const gameDropdownActiveTitle = document.querySelector('.js-game-dropdown-active-title');
  // ----local-refs------------------

  // ===handlerSergioList======
  sergioBox?.addEventListener('click', toggleSergioList);

  function toggleSergioList(): void {
    sergioInnerList?.classList.toggle('header__Sergio-inner-list_open');
  }

  // ---sergioInnerList---
  sergioInnerList?.addEventListener('click', getTextContentFromSergioList);

  function getTextContentFromSergioList(e: Event): void {
    const targetEL = e.target as HTMLElement;
    if (sergioActiveItem) {
      sergioActiveItem.textContent = targetEL.textContent;
    }
    toggleSergioList();
  }

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
