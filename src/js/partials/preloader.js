export function preloader() {
  const preloader = document.querySelector('.js-preloader');

  document.body.classList.add('to-freeze');

  function onClosePreloader() {
    preloader.classList.add('preloader_hidden');
    document.body.classList.remove('to-freeze');

    clearTimeout(timerId);
  }

  let timerId = setTimeout(onClosePreloader, 4000);
}
