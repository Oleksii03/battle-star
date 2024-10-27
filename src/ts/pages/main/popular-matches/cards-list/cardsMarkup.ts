import { MainPopularMatchesCardsList } from '../../../../types/pages/main';

export function cardsMarkup(collection: MainPopularMatchesCardsList[]): void {
  const container = document.querySelector(
    '.js-main-popular-matches-cards-list'
  ) as HTMLUListElement;

  const markup = collection.map(card => {
    const {
      id,
      roundOf,
      image: { png, webp },
      firstTeam: { firstTeamLogo, firstTeamTitle },
      secondTeam: { secondTeamLogo, secondTeamTitle },
    } = card;

    return `
        <li class="list-cards__item" data-id="${id}">
          <a
            class="list-cards__link"
            href="#"
            target="_blank">
            <div class="list-cards__img-overlay"></div>

            <picture>
              <source
                srcset="${webp}"
                type="image/webp" />

              <img
                class="list-cards__img"
                width="693"
                height="292"
                loading="lazy"
                src="${png}"
                alt="Match" />
            </picture>
          </a>

          <!-- bottom content -->
          <div class="list-cards__bottom-content">

            <!-- teams -->
            <div class="list-cards__bottom-content-teams">
              <div class="list-cards__bottom-content-team list-cards__bottom-content-team_first">
                <img
                  class="list-cards__bottom-content-img"
                  width="27"
                  height="21"
                  loading="lazy"
                  src="${firstTeamLogo}"
                  alt="" />

                <p class="list-cards__bottom-content-team-name">${firstTeamTitle}</p>
              </div>

              <p class="list-cards__bottom-content-team-divider">VS</p>

              <div class="list-cards__bottom-content-team list-cards__bottom-content-team_second">
                <img
                  class="list-cards__bottom-content-img"
                  width="27"
                  height="21"
                  loading="lazy"
                  src="${secondTeamLogo}"
                  alt="" />

                <p class="list-cards__bottom-content-team-name">${secondTeamTitle}</p>
              </div>
            </div>
            <!-- round of -->
            <p class="list-cards__bottom-content-round">${roundOf}</p>
          </div>
        </li>`;
  });

  container.innerHTML = markup.join('');
}
