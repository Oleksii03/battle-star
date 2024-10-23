import { TOP_LIST_CSGO, TOP_LIST_DOTA } from '../../../../utils/constants';
import { createLeaderboardList } from './createLeaderboardListsTop';

export function mainLeaderboard(): void {
  const btnCsGo = document.querySelector('.js-leaderboard-btn-csgo');
  const btnDota = document.querySelector('.js-leaderboard-btn-dota');
  const activeLine = document.querySelector('.js-btns-thumb');
  // --/-refs---

  //===handlers===
  // btns
  btnCsGo?.addEventListener('click', handlerBtnCsGo);
  function handlerBtnCsGo(): void {
    activeLine?.classList.remove('main-leaderboard__btns-thumb_active');
    btnCsGo?.classList.add('csgo-active');
    btnDota?.classList.remove('dota-active');
    // function create leaderboard list Csgo
    createLeaderboardList(TOP_LIST_CSGO);
  }
  handlerBtnCsGo();

  btnDota?.addEventListener('click', handlerBtnDota);
  function handlerBtnDota(): void {
    activeLine?.classList.add('main-leaderboard__btns-thumb_active');
    btnDota?.classList.add('dota-active');
    btnCsGo?.classList.remove('csgo-active');
    // function create leaderboard list Dota
    createLeaderboardList(TOP_LIST_DOTA);
  }
}
