import { header } from './components/header';
import { closeDropDownList } from './components/closeDropDownList';
import { battleStarNewsSlider } from './components/splideSlider';
import { createMainStageSlider } from './pages/main/main-stage/slider/createSlider';

document.addEventListener('DOMContentLoaded', () => {
  header();
  closeDropDownList();
  battleStarNewsSlider();
  createMainStageSlider();
});
