import { destinationHandler } from './handlerRankTrackItem';
// ---imports---
export const rankList = document.querySelector('.js-rank-track-list')!;
// ---reusable-refs---`

export function handlerRankTrack() {
  const rankTrackTumb = document.querySelector('.js-rank-track-tumb') as HTMLDivElement;
  // ---local-refs ---

  rankList?.addEventListener('click', handlerTrackList);

  function handlerTrackList(e: Event) {
    const targetLi = (e.target as HTMLElement).closest('li');

    if (targetLi?.tagName !== 'LI') return;

    //---handlers---
    if (targetLi.classList.contains('js-rank-item-1')) {
      rankTrackTumb.style.width = 4 + '%';
    }
    if (targetLi.classList.contains('js-rank-item-2')) {
      rankTrackTumb.style.width = 27 + '%';
      destinationHandler(targetLi);
    }
    if (targetLi.classList.contains('js-rank-item-3')) {
      rankTrackTumb.style.width = 50 + '%';
      destinationHandler(targetLi);
    }
    if (targetLi.classList.contains('js-rank-item-4')) {
      rankTrackTumb.style.width = 73 + '%';
      destinationHandler(targetLi);
    }
    if (targetLi.classList.contains('js-rank-item-5')) {
      rankTrackTumb.style.width = 100 + '%';
      destinationHandler(targetLi);
    }
  }
}
