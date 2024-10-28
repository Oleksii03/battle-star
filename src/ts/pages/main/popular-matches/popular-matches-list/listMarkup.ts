import { MainPopularMatchesList } from '../../../../types/pages/main';

export function listMarkup(collection: MainPopularMatchesList[]) {
  const container = document.querySelector('.js-popular-list') as HTMLUListElement;

  const markup = collection.map(obj => {
    const {
      id,
      title,
      time,
      score,
      isOnline,
      firstTeam: { firstTeamLogo, firstTeamName, firstTeamScore },
      secondTeam: { secondTeamLogo, secondTeamName, secondTeamScore },
    } = obj;

    return `
            <li class="popular-list__item" data-id="${id}">
              <!-- team_first -->
              <div class="popular-list__team popular-list__team_first">
                <a
                  class="popular-list__link"
                  href="#"
                  target="_blank">
                  <!-- image -->
                  <img
                    loading="lazy"
                    class="popular-list__team-img"
                    width="58"
                    height="52"
                    src="${firstTeamLogo}"
                    alt="${firstTeamName}" />
                  <!-- name -->
                  <p class="popular-list__team-name">${firstTeamName}</p>
                </a>

                <!-- points -->
                <p class="popular-list__points">${firstTeamScore}</p>
              </div>

              <!-- score -->
                <div class="popular-list__score">
                  <p class="popular-list__score-time">${time}</p>
                  ${isOnline ? '<p class="popular-list__score-online">Онлайн</p>' : `<p class="popular-list__score-score">${score}</p>`}
                </div>

              <!-- second team-->
              <div class="popular-list__team popular-list__team_second">
                <p class="popular-list__status-title">${title}</p>

                <a
                  class="popular-list__link"
                  href="#"
                  target="_blank">
                  <!-- points -->
                  <p class="popular-list__points">${secondTeamScore}</p>
                  <!-- name -->
                  <p class="popular-list__team-name">${secondTeamName}</p>
                  <!-- image -->
                  <img
                    loading="lazy"
                    class="popular-list__team-img"
                    width="58"
                    height="52"
                    src="${secondTeamLogo}"
                    alt="${secondTeamName}" />
                </a>
              </div>
            </li>`;
  });

  container.innerHTML = markup.join('');
}
