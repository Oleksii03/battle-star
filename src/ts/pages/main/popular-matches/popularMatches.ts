import { createCardsList } from './cards-list/createCardsList';
import { MATCHES_CARDS_LIST } from '../../../utils/constants';

export function popularMatches() {
  createCardsList(MATCHES_CARDS_LIST);
}
