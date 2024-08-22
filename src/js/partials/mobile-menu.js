export function createMobileMenu() {
  const menuBtn = document.querySelector('.js-menu-open');
  const menu = document.querySelector('.js-menu');

  menuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    document.body.classList.toggle('to-freeze');
    menu.classList.toggle('mob-menu_visible');
    onAnimationMenuBtn();
  }

  function onAnimationMenuBtn() {
    [...menuBtn.children].forEach(el => {
      el.classList.toggle('menu-btn__line_active');
    });
  }
}
