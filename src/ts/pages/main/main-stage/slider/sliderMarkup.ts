import { IMainSliderNews } from '../../../../types/pages/main';

export function sliderMarkup(collection: IMainSliderNews[]): void {
  const sliderContainer = document.querySelector('.js-main-slider-news');
  console.log(collection);

  collection.map(obj => {
    const {
      title,
      description,
      views,
      date,
      image: { png, webp },
      author: { img, name },
    } = obj;

    console.log(name);
  });
}
