export function handlerRegion() {
  const titleBox = document.querySelector('.js-region-item-title-box');
  const regionList = document.querySelector('.js-region-inner-list');
  const activeItem = document.querySelector('.js-active-title');
  const activeFlagImg = document.querySelector('.js-region-item-img') as HTMLImageElement;

  titleBox?.addEventListener('click', handlerTitleBox);

  function handlerTitleBox() {
    titleBox?.classList.toggle('cabinet-settings__region-item-title-box_active');
    regionList?.classList.toggle('cabinet-settings__region-inner-list_active');
  }

  regionList?.addEventListener('click', (e: Event) => {
    const targetEl = e.target as HTMLElement;

    if (activeItem) {
      activeItem.textContent = targetEl.textContent;
    }

    if (targetEl.dataset.src) {
      activeFlagImg.src = targetEl.dataset.src;
    }

    handlerTitleBox();
  });
}
