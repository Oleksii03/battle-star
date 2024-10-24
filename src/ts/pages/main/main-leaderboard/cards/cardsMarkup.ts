import { IMainLeaderboardCards } from '../../../../types/pages/main';

export function cardsMarkup(collection: IMainLeaderboardCards[]) {
  const container = document.querySelector('.js-main-leaderboard-cards-list') as HTMLOListElement;

  if (!collection.length) {
    container.innerHTML = '<li><p class="list-top__empty">No data available</p></li>';
    return;
  }

  const markup = collection.map(card => {
    const {
      title,
      date,
      description,
      id,
      img: { png, webp },
      likes,
      views,
    } = card;

    return `
          <li class="main-leaderboard__cards-item" data-id="${id}">
            <a
              href="#"
              class="main-leaderboard__cards-link"
              aria-label="${title}">
   
              <picture>
                <source
                  srcset="${webp}"
                  type="image/webp" />

                <img
                  loading="lazy"
                  width="248"
                  height="143"
                  class="main-leaderboard__cards-img"
                  src="${png}"
                  alt="${title}" />
              </picture>
            </a>

            <!-- cards-description -->

            <div class="main-leaderboard__cards-info">
              <h3 class="main-leaderboard__cards-title">
                ${title}
              </h3>

              <p class="main-leaderboard__cards-description">
                ${description}
              </p>

              <div class="main-leaderboard__cards-stats">
                <p class="main-leaderboard__cards-stats-date">${date}</p>

                <div class="main-leaderboard__cards-stat">
                  <div class="main-leaderboard__cards-stat-like">
                    <svg
                      width="20"
                      height="20">
                      <use xlink:href="#icon-like"></use>
                    </svg>

                    <p class="main-leaderboard__cards-stat-like-number">${likes}</p>
                  </div>
                  <!-- views -->
                  <div class="main-leaderboard__cards-stat-views">
                    <svg
                      width="20"
                      height="20">
                      <use xlink:href="#icon-eye-views"></use>
                    </svg>

                    <p class="main-leaderboard__cards-stat-views-number">${views}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>`;
  });

  container.innerHTML = markup.join('');
}
