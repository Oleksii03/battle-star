import { getDataFromFirestore } from '../../../../utils/getDataFromFirestore';
import { sliderMarkup } from './sliderMarkup';
import { handleError } from '@/ts/utils/handleError';

export function createMainStageSlider(): void {
  let searchQuery: string = 'SliderBattleStarNews';

  getDataFromFirestore(searchQuery)
    .then(collection => sliderMarkup(collection))
    .catch(handleError);
}
