export function mobMenu() {
  const mobMenu = document.querySelector('.js-mob-menu');
  const openMenuBtn = document.querySelector('.js-burger-btn');
  const closeMenuBtn = document.querySelector('.js-mob-menu-btn-close');
  const backdrop = document.querySelector('.js-backdrop');

  openMenuBtn.addEventListener('click', toogleMenu);
  closeMenuBtn.addEventListener('click', toogleMenu);
  backdrop.addEventListener('click', toogleMenu);

  function toogleMenu(e) {
    mobMenu.classList.toggle('mob-menu--visible');
    backdrop.classList.toggle('backdrop--visible');
  }
}
