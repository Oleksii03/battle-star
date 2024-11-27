import { closeTournamentsBackdrop } from './closeTournamentsBackdrop';

export function backdropListMarkup(formObj) {
  const content = document.querySelector('.js-tournaments-backdrop-content') as HTMLDivElement;
  const {
    name,
    description,
    rank,
    teams,
    rate,
    regime,
    startTournament,
    endTournament,
    time,
    limitRegion,
  } = formObj;

  content.innerHTML = `<ul class="tournaments-backdrop__content-list">
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Ваш турнір:</p>
        <div class="separator"></div>
        <p class="tournaments-backdrop__content-item-text">${name}</p>
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Опис:</p>
          <div class="separator"></div>
        ${description ? `<p class="tournaments-backdrop__content-item-text">${description}</p>` : '<p class="tournaments-backdrop__content-item-text">не вибрано</p>'} 
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Ранг:</p>
          <div class="separator"></div>
        <p class="tournaments-backdrop__content-item-text">${rank} <span class="currency">BS</span></p>
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Кількість команд:</p>
          <div class="separator"></div>
        <p class="tournaments-backdrop__content-item-text">${teams}</p>
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Ставка входу:</p>
          <div class="separator"></div>
        <p class="tournaments-backdrop__content-item-text">${rate} <span class="currency">BS</span></p>
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Режим:</p>
          <div class="separator"></div>
        <p class="tournaments-backdrop__content-item-text">${regime}</p>
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Турнір починається:</p>
          <div class="separator"></div>
        ${startTournament ? `<p class="tournaments-backdrop__content-item-text">${startTournament}</p>` : '<p class="tournaments-backdrop__content-item-text">не вибрано</p>'} 
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Турнір завершується:</p>
          <div class="separator"></div>
        ${endTournament ? `<p class="tournaments-backdrop__content-item-text">${endTournament}</p>` : '<p class="tournaments-backdrop__content-item-text">не вибрано</p>'} 
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Час початку:</p>
          <div class="separator"></div>
        <p class="tournaments-backdrop__content-item-text">${time}</p>
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Обмежити участь вашим регіоном:</p>
          <div class="separator"></div>
       ${limitRegion === 'on' ? '<p class="tournaments-backdrop__content-item-text">так</p>' : '<p class="tournaments-backdrop__content-item-text">ні</p>'} 
      </li>

      <li class="tournaments-backdrop__content-item tournaments-backdrop__content-item_last">
       <button
        type="button"
        class="confirm js-confirm">
        Підтвердити
       </button>
       <div class="separator"></div>
       <button
        type="button"
        class="cancel js-cancel">
        Скасувати
       </button>
     </li>
    </ul>`;

  closeTournamentsBackdrop(formObj);
}
