import { handleError } from '@/ts/utils/handleError';
import { getDataFromFirestore } from '@/ts/utils/getDataFromFirestore';
import { HISTORY_MATCHES_LIST } from '@/ts/utils/constants';
import { markup } from './markup';

export function createMarkup(container: HTMLElement) {
  getDataFromFirestore(HISTORY_MATCHES_LIST)
    .then(collection => {
      markup(collection, container);
    })
    .catch(handleError);
}
