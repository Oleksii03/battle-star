import { getDataFromFirestore } from '@/ts/utils/getDataFromFirestore';
import { BLOCK_LIST } from '@/ts/utils/constants';
import { handleError } from '@/ts/utils/handleError';
import { blockListMarkup } from './blockListMarkup';

export function createBlockListMarkup(container: HTMLElement) {
  const markup = `<div class="cabinet-block">
          <h3 class="cabinet-block__title">Чорний список</h3>

          <div class="cabinet-block__body">
            <ul class="cabinet-block__list js-cabinet-block-list"></ul>

            <div class="cabinet-block__info">
              <div class="cabinet-block__info-message">
                <svg
                  width="40"
                  height="40">
                  <use xlink:href="#icon-information-outline"></use>
                </svg>
                <p class="cabinet-block__info-message-text">
                  Люди з чорного списку не можуть запрошувати вас до команд, надсилати повідомлення
                  або додавати до паті
                </p>
              </div>
            </div>
          </div>
        </div>`;

  container.innerHTML = markup;

  getDataFromFirestore(BLOCK_LIST).then(blockListMarkup).catch(handleError);
}
