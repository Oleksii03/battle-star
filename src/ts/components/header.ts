export function header() {
  const sergioBox = document.querySelector('.js-sergio-item-box') as HTMLElement;
  const sergioInnerList = document.querySelector('.js-sergio-inner-list') as HTMLElement;
  // ---refs----

  if (sergioBox) {
    sergioBox.addEventListener('click', toggleSergioList);
  } else {
    console.error('Element not found');
  }

  function toggleSergioList(): void {
    sergioInnerList.classList.toggle('header__Sergio-inner-list_open');
  }
}
