import { getDataFromFirestore } from '../../../../utils/getDataFromFirestore';
import { sliderMarkup } from './sliderMarkup';

export function createMainStageSlider(): void {
  let searchQuery: string = 'SliderBattleStarNews';

  getDataFromFirestore(searchQuery).then(collection => sliderMarkup(collection));
}
