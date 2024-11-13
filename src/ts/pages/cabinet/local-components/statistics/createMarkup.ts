import { handlerMainBodyMarkup } from './handlerMainBodyMarkup';

export function createMarkup(container: HTMLElement) {
  const markup = `
        <div class="cabinet-statistics">
          <div class="cabinet-statistics__btns">
            <div class="cabinet-statistics__btns-box js-statistics-btns-box">
              <button
                class="cabinet-statistics__btn 
                cabinet-statistics__btn_csgo 
                js-statistics-btn-csgo"
                type="button">
                CS:GO
              </button>

              <button
                class="cabinet-statistics__btn 
                cabinet-statistics__btn_active 
                cabinet-statistics__btn_dota
                js-statistics-btn-dota"
                type="button">
                DOTA 2
              </button>
            </div>
         
            <div class="cabinet-statistics__btns-track">
              <span class="cabinet-statistics__btns-thumb js-cabinet-statistics-thumb"></span>
            </div>
          </div>

          <div class="cabinet-statistics__content js-cabinet-statistics-content">
       </div>`;

  container.innerHTML = markup;

  // ---refs----
  const contentContainer = document.querySelector(
    '.js-cabinet-statistics-content'
  ) as HTMLDivElement;
  const btnsBox = document.querySelector('.js-statistics-btns-box') as HTMLDivElement;
  // --/-refs---

  // handler-Main-Body-Markup
  handlerMainBodyMarkup(contentContainer, btnsBox);
}
