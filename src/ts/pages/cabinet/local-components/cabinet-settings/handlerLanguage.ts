export function handlerLanguage() {
  const titleBox = document.querySelector('.js-language-item-title-box');
  const languageInnerList = document.querySelector('.js-language-inner-list');

  titleBox?.addEventListener('click', handlerTitleBox);

  function handlerTitleBox() {
    titleBox?.classList.toggle('cabinet-settings__language-item-title-box_active');

    languageInnerList?.classList.toggle('cabinet-settings__language-inner-list_active');
  }

  // languageInnerList
  languageInnerList?.addEventListener('click', (e: Event) => {
    const activeItemTitle = document.querySelector('.js-language-item-title');
    const targetEl = e.target as HTMLElement;

    if (targetEl.tagName !== 'LI' || !activeItemTitle) return;

    activeItemTitle.textContent = targetEl.textContent;
    handlerTitleBox();
  });
}
