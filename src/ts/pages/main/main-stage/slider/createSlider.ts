import { getDataFromFirestore } from '../../../../utils/firebaseUtils';
import { sliderMarkup } from './sliderMarkup';

export function createMainStageSlider() {
  getDataFromFirestore('SliderBattleStarNews').then(collection => sliderMarkup(collection));
}
