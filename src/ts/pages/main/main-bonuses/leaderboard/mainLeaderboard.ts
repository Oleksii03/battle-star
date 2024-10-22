export function mainLeaderboard() {
  const btnCsGo = document.querySelector('.js-leaderboard-btn-csgo');
  const btnDota = document.querySelector('.js-leaderboard-btn-dota');
  // const btnsBox = document.querySelector('.js-leaderboard-btn-box');
  const activeLine = document.querySelector('.js-btns-thumb');
  // --/-refs---

  //===handlers===
  // btns
  btnCsGo?.addEventListener('click', () => {
    activeLine?.classList.remove('main-leaderboard__btns-thumb_active');
    btnCsGo?.classList.add('csgo-active');
    btnDota?.classList.remove('dota-active');
  });

  btnDota?.addEventListener('click', () => {
    activeLine?.classList.add('main-leaderboard__btns-thumb_active');
    btnDota?.classList.add('dota-active');
    btnCsGo?.classList.remove('csgo-active');
  });
}
