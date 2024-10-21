import { header } from './components/header';
import { closeDropDownList } from './components/closeDropDownList';
import { createMainStageSlider } from './pages/main/main-stage/slider/createSlider';
import { battleStarNewsSlider } from './components/splideSlider';

document.addEventListener('DOMContentLoaded', () => {
  header();
  closeDropDownList();
  createMainStageSlider();
  battleStarNewsSlider();
});
