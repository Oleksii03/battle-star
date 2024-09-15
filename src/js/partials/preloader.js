export function preloader() {
  const preloader = document.querySelector('.js-preloader');
  // const preloaderWrapper = document.querySelector('.js-preloader-wrapper');

  isVisit();

  function isVisit() {
    if (!localStorage.getItem('is-visit')) {
      onOpenPreloader();
      return;
    }

    preloader.classList.remove('preloader_visible');
    document.body.classList.remove('to-freeze');
  }

  function onOpenPreloader() {
    preloader.classList.add('preloader_visible');
    document.body.classList.add('to-freeze');

    setTimeout(() => {
      preloader.classList.remove('preloader_visible');
      document.body.classList.remove('to-freeze');

      localStorage.setItem('is-visit', 'true');
    }, 4000);
  }
}
