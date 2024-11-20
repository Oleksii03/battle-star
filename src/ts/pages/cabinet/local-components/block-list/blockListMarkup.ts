export function blockListMarkup(collection: any) {
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
              </li>`;
  });

  blockListContainer.innerHTML = itemMarkup.join('');
}
