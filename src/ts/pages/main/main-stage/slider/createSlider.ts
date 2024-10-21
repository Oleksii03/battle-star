import { getDatFaromFirestore } from '../../../../utils/firebaseUtils';
import { sliderMarkup } from './sliderMarkup';

export function createMainStageSlider() {
  getDatFaromFirestore('SliderBattleStarNews').then(collection => sliderMarkup(collection));
}
