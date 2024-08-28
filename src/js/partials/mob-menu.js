export function mobMenu() {
  const mobMenu = document.querySelector('.js-mob-menu');
  const openMenuBtn = document.querySelector('.js-burger-btn');
  const closeMenuBtn = document.querySelector('.js-mob-menu-btn-close');
  const backdrop = document.querySelector('.js-backdrop');

  const chooseCity = document.querySelector('.js-choose-city');
  const citySelectionList = document.querySelector('.js-city-selection-list');
  const activeCity = document.querySelector('.js-active-city');

  openMenuBtn.addEventListener('click', toogleMenu);
  closeMenuBtn.addEventListener('click', toogleMenu);
  backdrop.addEventListener('click', toogleMenu);

  function toogleMenu(e) {
    mobMenu.classList.toggle('mob-menu--visible');
    backdrop.classList.toggle('backdrop--visible');
  }

  // ------------------------------

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

  // -------------------------------

  citySelectionList.addEventListener('click', onChooseCity);

  function onChooseCity(e) {
    activeCity.textContent = e.target.textContent;
    toggleCitySelectionList();
  }
}
