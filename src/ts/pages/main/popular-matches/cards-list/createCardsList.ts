import { cardsMarkup } from './cardsMarkup';
import { getDataFromFirestore } from '../../../../utils/getDataFromFirestore';

export function createCardsList(searchQuery = ' '): void {
  getDataFromFirestore(searchQuery)
    .then(collection => cardsMarkup(collection))
    .catch(error => console.error('Error fetching data:', error));
}
