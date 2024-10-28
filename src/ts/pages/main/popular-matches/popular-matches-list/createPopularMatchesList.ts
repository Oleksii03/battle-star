import { getDataFromFirestore } from '../../../../utils/getDataFromFirestore';
import { listMarkup } from './listMarkup';
export function createPopularMatchesList(searchQuery = ' '): void {
  getDataFromFirestore(searchQuery)
    .then(collection => listMarkup(collection))
    .catch(error => console.error('Error fetching data:', error));
}
