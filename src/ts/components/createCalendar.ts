import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';

let startTournamentDate = '';
let endTournamentDate = '';

export function createCalendar() {
  const today = new Date();
  const threeDaysLater = new Date();
  threeDaysLater.setDate(today.getDate() + 3);

  flatpickr('#formDatetimeCalendar', {
    inline: true,
    dateFormat: 'Y-m-d',
    mode: 'range',
    monthSelectorType: 'static',
    showMonths: 1,
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

    onChange: function (selectedDates, dateStr, instance) {
      if (selectedDates.length === 2) {
        const startDate = selectedDates[0];
        const endDate = selectedDates[1];
        const options: any = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const formatter = new Intl.DateTimeFormat('uk-UA', options);
        const formattedStartDate = formatter.format(startDate);
        const formattedEndDate = formatter.format(endDate);

        updateFormDates(formattedStartDate, formattedEndDate);
      }
    },
  });
}

function updateFormDates(startDate: string, endDate: string) {
  startTournamentDate = startDate;
  endTournamentDate = endDate;
}

export { startTournamentDate, endTournamentDate };
