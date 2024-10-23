import { IMainLeaderboardUsersTop } from '../../../../../types/pages/main';

export function createMarkupListCsgo(
  collection: IMainLeaderboardUsersTop[],
  container: HTMLOListElement
) {
  if (!collection.length) {
    container.innerHTML = '<li><p class="list-top__empty">No data available</p></li>';
    return;
  }

  const markup = [...collection]
    .sort((a, b) => b.score - a.score)
    .map(obj => {
      const {
        name,
        score,
        id,
        countryFlagImg: { webp },
        avatar: { png: avatarPng, webp: avatarWebp },
      } = obj;

      return `
           <li class="list-top__item" data-id="${id}">
            <p class="list-top__item-num"></p>
            <picture>
              <source
                srcset="${avatarWebp}"
                type="image/webp" />

              <img
                loading="lazy"
                width="40"
                height="40"
                class="list-top__img"
                src="${avatarPng}"
                alt="${name}" />
            </picture>

            <img
              width="21"
              height="14"
              class="list-top__svg"
              src="${webp}"
              alt="ua" />

            <p class="list-top__name">${name}</p>
            <p class="list-top__score">${score}</p>
          </li>`;
    });

  container.innerHTML = markup.join('');
}
