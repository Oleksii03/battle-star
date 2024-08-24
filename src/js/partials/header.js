export function header() {
  const titleBox = document.querySelectorAll('.js-dropdown-title-box');
  const dropdownLists = document.querySelectorAll('.js-list-dropdown');

  let currentTargetEl = null;

  [...titleBox].forEach(title => {
    title.addEventListener('click', toggleDropdown);
  });

  function toggleDropdown(e) {
    let targetEl = e.target.closest('.js-dropdown-title-box');
    currentTargetEl = targetEl.firstElementChild;

    if (targetEl.nextElementSibling.classList.contains('header__list-dropdown_active')) {
      targetEl.nextElementSibling.classList.remove('header__list-dropdown_active');
    } else {
      [...titleBox].forEach(el => {
        el.nextElementSibling.classList.remove('header__list-dropdown_active');
      });
      targetEl.nextElementSibling.classList.add('header__list-dropdown_active');
    }

    toggleDropdownList(e, currentTargetEl);
  }

  // --------------------

  [...dropdownLists].forEach(list => {
    list.addEventListener('click', e => toggleDropdownList(e, currentTargetEl));
  });

  function toggleDropdownList(e, targetEl) {
    if (e.target.tagName !== 'LI') return;

    targetEl.textContent = e.target.textContent;

    [...titleBox].forEach(el => {
      el.nextElementSibling.classList.remove('header__list-dropdown_active');
    });
  }
}
