import { getDataFromFirestore } from '@/ts/utils/getDataFromFirestore';
import { BLOCK_LIST } from '@/ts/utils/constants';
import { handleError } from '@/ts/utils/handleError';
import { blockListMarkup } from './blockListMarkup';

export function createBlockListMarkup(container: HTMLElement) {
  const markup = `<div class="cabinet-block">
          <h3 class="cabinet-block__title">Чорний список</h3>

          <div class="cabinet-block__body">
            <ul class="cabinet-block__list js-cabinet-block-list">
             
             
              <li class="cabinet-block__item">
                <div class="cabinet-block__item-user">
                  <picture class="cabinet-block__item-user-picture">
                    <span class="status"></span>
                    <source
                      srcset="../../../assets/img/pages/cabinet/user1.png"
                      type="image/webp" />

                    <img
                      loading="lazy"
                      width="46"
                      height="46"
                      class="cabinet-block__item-user-img"
                      src="../../../assets/img/pages/cabinet/user1.png"
                      alt="User" />
                  </picture>

                  <div class="cabinet-block__item-user-info">
                    <p class="cabinet-block__item-user-name">SergioRicht</p>
                    <p class="cabinet-block__item-user-game">Играет в CS:GO</p>
                  </div>
                </div>

                <img
                  loading="lazy"
                  width="66"
                  height="29"
                  class="cabinet-block__item-img-honors"
                  src="../../../assets/img/pages/cabinet/honors-eagle.svg"
                  alt="honors" />

                <button
                  type="button"
                  class="cabinet-block__item-btn">
                  <svg
                    class="cabinet-block__item-icon"
                    width="24"
                    height="24">
                    <use xlink:href="#icon-dots-vertical"></use>
                  </svg>
                </button>
              </li>
              <li class="cabinet-block__item">
                <div class="cabinet-block__item-user">
                  <picture class="cabinet-block__item-user-picture">
                    <span class="status"></span>
                    <source
                      srcset="../../../assets/img/pages/cabinet/user1.png"
                      type="image/webp" />

                    <img
                      loading="lazy"
                      width="46"
                      height="46"
                      class="cabinet-block__item-user-img"
                      src="../../../assets/img/pages/cabinet/user1.png"
                      alt="User" />
                  </picture>

                  <div class="cabinet-block__item-user-info">
                    <p class="cabinet-block__item-user-name">SergioRicht</p>
                    <p class="cabinet-block__item-user-game">Играет в CS:GO</p>
                  </div>
                </div>

                <img
                  loading="lazy"
                  width="66"
                  height="29"
                  class="cabinet-block__item-img-honors"
                  src="../../../assets/img/pages/cabinet/honors-eagle.svg"
                  alt="honors" />

                <button
                  type="button"
                  class="cabinet-block__item-btn">
                  <svg
                    class="cabinet-block__item-icon"
                    width="24"
                    height="24">
                    <use xlink:href="#icon-dots-vertical"></use>
                  </svg>
                </button>
              </li>
              <li class="cabinet-block__item">
                <div class="cabinet-block__item-user">
                  <picture class="cabinet-block__item-user-picture">
                    <span class="status"></span>
                    <source
                      srcset="../../../assets/img/pages/cabinet/user1.png"
                      type="image/webp" />

                    <img
                      loading="lazy"
                      width="46"
                      height="46"
                      class="cabinet-block__item-user-img"
                      src="../../../assets/img/pages/cabinet/user1.png"
                      alt="User" />
                  </picture>

                  <div class="cabinet-block__item-user-info">
                    <p class="cabinet-block__item-user-name">SergioRicht</p>
                    <p class="cabinet-block__item-user-game">Играет в CS:GO</p>
                  </div>
                </div>

                <img
                  loading="lazy"
                  width="66"
                  height="29"
                  class="cabinet-block__item-img-honors"
                  src="../../../assets/img/pages/cabinet/honors-eagle.svg"
                  alt="honors" />

                <button
                  type="button"
                  class="cabinet-block__item-btn">
                  <svg
                    class="cabinet-block__item-icon"
                    width="24"
                    height="24">
                    <use xlink:href="#icon-dots-vertical"></use>
                  </svg>
                </button>
              </li>
              <li class="cabinet-block__item">
                <div class="cabinet-block__item-user">
                  <picture class="cabinet-block__item-user-picture">
                    <span class="status"></span>
                    <source
                      srcset="../../../assets/img/pages/cabinet/user1.png"
                      type="image/webp" />

                    <img
                      loading="lazy"
                      width="46"
                      height="46"
                      class="cabinet-block__item-user-img"
                      src="../../../assets/img/pages/cabinet/user1.png"
                      alt="User" />
                  </picture>

                  <div class="cabinet-block__item-user-info">
                    <p class="cabinet-block__item-user-name">SergioRicht</p>
                    <p class="cabinet-block__item-user-game">Играет в CS:GO</p>
                  </div>
                </div>

                <img
                  loading="lazy"
                  width="66"
                  height="29"
                  class="cabinet-block__item-img-honors"
                  src="../../../assets/img/pages/cabinet/honors-eagle.svg"
                  alt="honors" />

                <button
                  type="button"
                  class="cabinet-block__item-btn">
                  <svg
                    class="cabinet-block__item-icon"
                    width="24"
                    height="24">
                    <use xlink:href="#icon-dots-vertical"></use>
                  </svg>
                </button>
              </li>
            </ul>

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
