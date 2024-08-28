export function mobMenu() {
  const mobMenu = document.querySelector('.js-mob-menu');
  const openMenuBtn = document.querySelector('.js-burger-btn');
  const closeMenuBtn = document.querySelector('.js-mob-menu-btn-close');
  const backdrop = document.querySelector('.js-backdrop');

  const chooseCity = document.querySelector('.js-choose-city');
  const citySelectionList = document.querySelector('.js-city-selection-list');
  const activeCity = document.querySelector('.js-active-city');

  const menuInformationItem = document.querySelector('.js-information-item');
  const informationSubList = document.querySelector('.js-information-sub-list');

  const categoriesItem = document.querySelector('.js-categories-item');
  const categoriesBtnClose = document.querySelector('.js-menu-categories-btn-close');
  const menuCategories = document.querySelector('.js-menu-categories');

  const categoriesMenuTitleBoxes = document.querySelectorAll('.js-categories-list-title-box');
  const categoriesMenuList = document.querySelector('.js-menu-categories-list');

  const categoriesSubLists = document.querySelectorAll('.js-categories-sub-list');

  console.log(categoriesBtnClose);
  // --------/--ref---------------------------

  // -----------toogleMenu-------------------
  openMenuBtn.addEventListener('click', toogleMenu);
  closeMenuBtn.addEventListener('click', toogleMenu);
  backdrop.addEventListener('click', onClose);

  function toogleMenu(e) {
    mobMenu.classList.toggle('mob-menu--visible');
    backdrop.classList.toggle('backdrop--visible');
  }

  function onClose(e) {
    toogleMenu();
    menuCategories.classList.remove('menu-categories--visible');
  }

  // -----------toogleMenuCategories-----------------
  categoriesItem.addEventListener('click', toggleCategoriesList);
  categoriesBtnClose.addEventListener('click', toggleCategoriesList);

  function toggleCategoriesList(e) {
    menuCategories.classList.toggle('menu-categories--visible');
  }

  // -----------toggleCitySelectionList-----------------
  chooseCity.addEventListener('click', toggleCitySelectionList);

  function toggleCitySelectionList(e) {
    if (!chooseCity.classList.contains('user-panel__city-selection-title_active')) {
      citySelectionList.style.maxHeight = citySelectionList.scrollHeight + 'px';
      chooseCity.classList.add('user-panel__city-selection-title_active');
      return;
    }

    citySelectionList.style.maxHeight = 0;
    chooseCity.classList.remove('user-panel__city-selection-title_active');
  }

  // ------------ChooseCity-------------------
  citySelectionList.addEventListener('click', onChooseCity);

  function onChooseCity(e) {
    activeCity.textContent = e.target.textContent;
    toggleCitySelectionList();
  }

  // --------menuInformationItem---
  menuInformationItem.addEventListener('click', toggleInformationSubList);

  function toggleInformationSubList(e) {
    if (!menuInformationItem.classList.contains('nav-list-item__title-wrapper_active')) {
      informationSubList.style.maxHeight = informationSubList.scrollHeight + 'px';
      menuInformationItem.classList.add('nav-list-item__title-wrapper_active');
      return;
    }

    informationSubList.style.maxHeight = 0;
    menuInformationItem.classList.remove('nav-list-item__title-wrapper_active');
  }

  // --------categoriesMenu-------
  categoriesMenuList.addEventListener('click', toggleCategoriesMenuList);

  function toggleCategoriesMenuList(e) {
    const { target } = e;
    let targetEl = target.closest('.js-categories-list-title-box');

    if (!targetEl) return;

    if (!targetEl.classList.contains('menu-categories__list-title-box_active')) {
      [...categoriesMenuTitleBoxes].forEach(titleBox => {
        titleBox.nextElementSibling.style.maxHeight = 0;
        titleBox.classList.remove('menu-categories__list-title-box_active');
      });

      targetEl.nextElementSibling.style.maxHeight = targetEl.nextElementSibling.scrollHeight + 'px';

      targetEl.classList.add('menu-categories__list-title-box_active');
      return;
    }

    targetEl.nextElementSibling.style.maxHeight = 0;
    targetEl.classList.remove('menu-categories__list-title-box_active');
  }

  // ---categoriesSubLists-----

  categoriesSubLists.forEach(subList => {
    subList.addEventListener('click', toggleCategoriesSubList);
  });

  function toggleCategoriesSubList(e) {
    const { target } = e;

    if (target.tagName !== 'LI') return;
    target.classList.toggle('menu-categories__sub-list-item_active');
  }
}
