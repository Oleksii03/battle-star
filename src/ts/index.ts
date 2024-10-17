import { header } from './components/header';
import { closeDropDownList } from './components/closeDropDownList';
import { battleStarNewsSlider } from './components/splideSlider';
import { firebaseConfig } from './utils/firebaseConfig';

document.addEventListener('DOMContentLoaded', () => {
  let app = firebaseConfig();
  header();
  closeDropDownList();
  battleStarNewsSlider();

  console.log(app);
});
