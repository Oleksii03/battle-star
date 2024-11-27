export function handlerRankTrack() {
  const rankList = document.querySelector('.js-rank-track-list');
  const rankTrackTumb = document.querySelector('.js-rank-track-tumb') as HTMLDivElement;

  rankList?.addEventListener('click', handlerRankTrackList);

  function handlerRankTrackList(e: Event) {
    const targetLi = (e.target as HTMLElement).closest('li');

    if (targetLi?.tagName !== 'LI') return;

    if (targetLi.classList.contains('js-rank-item-1')) {
      rankTrackTumb.style.width = 4 + '%';
    }
    if (targetLi.classList.contains('js-rank-item-2')) {
      rankTrackTumb.style.width = 27 + '%';
    }
    if (targetLi.classList.contains('js-rank-item-3')) {
      rankTrackTumb.style.width = 50 + '%';
    }
    if (targetLi.classList.contains('js-rank-item-4')) {
      rankTrackTumb.style.width = 73 + '%';
    }
    if (targetLi.classList.contains('js-rank-item-5')) {
      rankTrackTumb.style.width = 100 + '%';
    }
  }
}
