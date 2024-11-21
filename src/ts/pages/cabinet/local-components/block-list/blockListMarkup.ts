import { CabinetBlockList } from '@/ts/types/pages/cabinet';
import { deleteListItem } from './deleteListItem';

export function blockListMarkup(collection: CabinetBlockList[]) {
  const blockListContainer = document.querySelector('.js-cabinet-block-list') as HTMLUListElement;

  const itemMarkup = collection.map(({ id, avatar, name, status, teamLogo }) => {
    return `<li class="cabinet-block__item" data-id="${id}">
                <div class="cabinet-block__item-user">
                  <picture class="cabinet-block__item-user-picture">
                    <span class="status"></span>
                    <source
                      srcset="${avatar.webp}"
                      type="image/webp" />

                    <img
                      loading="lazy"
                      width="46"
                      height="46"
                      class="cabinet-block__item-user-img"
                      src="${avatar.png}"
                      alt="${name}" />
                  </picture>

                  <div class="cabinet-block__item-user-info">
                    <p class="cabinet-block__item-user-name">${name}</p>
                    <p class="cabinet-block__item-user-game">${status}</p>
                  </div>
                </div>

                <img
                  loading="lazy"
                  width="66"
                  height="29"
                  class="cabinet-block__item-img-honors"
                  src="${teamLogo}"
                  alt="honors" />
                
               <div class="cabinet-block__item-btn-box"> 
                <button
                  type="button"
                  class="cabinet-block__item-btn js-btn-dots">
                  <svg
                    class="cabinet-block__item-icon"
                    width="24"
                    height="24">
                    <use xlink:href="#icon-dots-vertical"></use>
                  </svg>
                </button>

                <button
                  type="button"
                  class="cabinet-block__item-btn-remove js-item-btn-remove">
                  <svg
                    class="cabinet-block__item-icon-remove"
                    width="24"
                    height="24">
                    <use xlink:href="#icon-user-minus"></use>
                  </svg> 
                </button>
               </div> 
              </li>`;
  });

  blockListContainer.innerHTML = itemMarkup.join('');

  // delete-List-Item
  deleteListItem(blockListContainer);
}
