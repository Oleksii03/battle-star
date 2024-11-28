import { destinationHandler } from './handlerRankTrackItem';
// ---imports---
export const rankList = document.querySelector('.js-rank-track-list')!;
// ---reusable-refs---`

export function handlerRankTrack() {
  rankList?.addEventListener('click', handlerTrackList);

  function handlerTrackList(e: Event) {
    const targetLi = (e.target as HTMLElement).closest('li');

    if (targetLi?.tagName !== 'LI') return;

    destinationHandler(targetLi);
  }
}
