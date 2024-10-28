import { createCardsList } from './cards-list/createCardsList';
import { createPopularMatchesList } from './popular-matches-list/createPopularMatchesList';
import { MATCHES_CARDS_LIST, POPULAR_MATCHES } from '../../../utils/constants';

export function popularMatches() {
  createCardsList(MATCHES_CARDS_LIST);
  createPopularMatchesList(POPULAR_MATCHES);
}
