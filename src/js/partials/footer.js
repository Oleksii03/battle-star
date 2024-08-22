export function footer() {
  const contactBox = document.querySelector('.js-contact-box');
  const contactHiddenBox = document.querySelector('.js-contact-box-hidden');
  const addressHiddenBox = document.querySelector('.js-address-box-hidden');

  contactBox.addEventListener('click', onToggle);
  function onToggle(e) {
    let targetEl = e.target.closest('.js-contact');

    if (targetEl.classList.contains('js-phone')) togglePhoneNumber(targetEl);
    if (targetEl.classList.contains('js-address')) toggleAddress(targetEl);
  }

  function togglePhoneNumber(target) {
    target.classList.toggle('footer__box-center_top-active');
    contactHiddenBox.classList.toggle('contact-box-hidden_active');
    addressHiddenBox.classList.remove('address-box-hidden_active');
    target.nextElementSibling.classList.remove('footer__box-center_bottom-active');
  }

  function toggleAddress(target) {
    target.classList.toggle('footer__box-center_bottom-active');
    addressHiddenBox.classList.toggle('address-box-hidden_active');
    contactHiddenBox.classList.remove('contact-box-hidden_active');
    target.previousElementSibling.classList.remove('footer__box-center_top-active');
  }
}
