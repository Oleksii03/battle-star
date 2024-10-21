import { IMainSliderNews } from '../../../../types/pages/main';

export function sliderMarkup(collection: IMainSliderNews[]): void {
  const sliderContainer = document.querySelector('.js-main-slider-news');

  if (sliderContainer) {
    const markup = collection.map(obj => {
      const {
        title,
        description,
        views,
        date,
        image: { png, webp },
        author: { img, name },
      } = obj;

      return `
      <li class="splide__slide">

            <!-- slide-body -->

            <div class="splide__slide-body">
              <picture>
                <source
                  srcset="${webp}"
                  type="image/webp" />
                <img
                  class="splide__slide-img"
                  width="489"
                  height="246"
                  src="${png}"
                  alt="${title}" />
              </picture>

              <!-- slide-description -->

              <div class="splide__slide-description">
                <h6 class="splide__slide-description-title">${title}</h6>

                <p class="splide__slide-description-text">${description}</p>

                <!-- slide-author -->

                <div class="splide__slide-author slide-author">
                  <div class="slide-author__content-left">
                    <img
                      width="40"
                      height="40"
                      class="slide-author__img"
                      src="${img}"
                      alt="${name}" />

                    <span class="slide-author__name">${name}</span>
                    <span class="slide-author__date">${date}</span>
                  </div>

                  <div class="slide-author__content-right">
                    <button
                      type="button"
                      class="slide-author__btn-views">
                      <svg
                        class="slide-author__btn-views-icon"
                        width="20"
                        height="20">
                        <use xlink:href="#icon-eye-views"></use>
                      </svg>
                    </button>

                    <p class="slide-author__views-count">${views}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>`;
    });

    sliderContainer.innerHTML = markup.join('');
  } else {
    console.error('Slider container not found');
  }
}
