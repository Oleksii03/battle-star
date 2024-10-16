import { header } from './components/header';
import { closeDropDownList } from './components/closeDropDownList';

document.addEventListener('DOMContentLoaded', () => {
  header();
  closeDropDownList();
});
import '@splidejs/splide/css';
import Splide from '@splidejs/splide';

import { Grid } from '@splidejs/splide-extension-grid';

new Splide('.splide', {
  gap: '30px',
  grid: {
    rows: 2,
    cols: 3,
    gap: {
      row: '30px',
      col: '30px',
    },
  },
  pagination: false,

  breakpoints: {
    768: {
      grid: {
        cols: 2,
      },
    },

    1919: {
      arrows: false,
      pagination: true,
    },
  },
}).mount({ Grid });
