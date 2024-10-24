import { getDataFromFirestore } from '../../../../utils/getDataFromFirestore';
import { cardsMarkup } from './cardsMarkup';

export function createLeaderboardCards(searchQuery = ' '): void {
  getDataFromFirestore(searchQuery)
    .then(collection => cardsMarkup(collection))
    .catch(error => console.error('Error fetching data:', error));
}
