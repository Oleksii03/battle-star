export function preloader() {
  const preloader = document.querySelector('.js-preloader');

  isVisit();

  function isVisit() {
    if (!localStorage.getItem('is-visit')) {
      onOpenPreloader();
      return;
    }

    preloader.classList.add('preloader_hidden');
    document.body.classList.remove('to-freeze');
  }

  function onOpenPreloader() {
    preloader.classList.add('preloader_visible');
    document.body.classList.add('to-freeze');

    setTimeout(() => {
      preloader.classList.add('preloader_hidden');
      document.body.classList.remove('to-freeze');

      localStorage.setItem('is-visit', 'true');
    }, 4000);
  }
}
