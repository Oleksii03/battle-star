import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';

export function createCalendar() {
  flatpickr('#formDatetimeCalendar', {
    inline: true,
    dateFormat: 'Y-m-d',
    mode: 'range',
    monthSelectorType: 'static',
    locale: {
      ...Ukrainian,
      months: {
        shorthand: [
          'Січ',
          'Лют',
          'Бер',
          'Кві',
          'Тра',
          'Чер',
          'Лип',
          'Сер',
          'Вер',
          'Жов',
          'Лис',
          'Гру',
        ],
        longhand: [
          'Січ',
          'Лют',
          'Бер',
          'Кві',
          'Тра',
          'Чер',
          'Лип',
          'Сер',
          'Вер',
          'Жов',
          'Лис',
          'Гру',
        ],
      },
    },
  });
}
