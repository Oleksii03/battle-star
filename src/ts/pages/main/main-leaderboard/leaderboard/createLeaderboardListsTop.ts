import { TOP_LIST_CSGO, TOP_LIST_DOTA } from '../../../../utils/constants';
import { getDataFromFirestore } from '../../../../utils/getDataFromFirestore';
import { createMarkupListCsgo } from './markups/listTopCsgo';
import { createMarkupListDota } from './markups/listTopDota';

export function createLeaderboardList(searchQuery = ' '): void {
  const topListContainer = document.querySelector('.js-main-leaderboard-top-list');

  if (!topListContainer) {
    console.error('Leaderboard container not found');
    return;
  }

  if (searchQuery === TOP_LIST_CSGO) {
    getDataFromFirestore(searchQuery)
      .then(collection => createMarkupListCsgo(collection, topListContainer as HTMLOListElement))
      .catch(error => console.error('Error fetching CS:GO data:', error));
    return;
  }

  if (searchQuery === TOP_LIST_DOTA) {
    getDataFromFirestore(searchQuery)
      .then(collection => createMarkupListDota(collection, topListContainer as HTMLOListElement))
      .catch(error => console.error('Error fetching Dota data:', error));
    return;
  }

  console.log('Invalid search query');
}
