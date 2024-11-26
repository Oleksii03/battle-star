import { TournamentsForm } from '@/ts/types/pages/tournaments';
import { startTournamentDate, endTournamentDate } from '@/ts/components/createCalendar';
import { setDataToFirebase } from './setDataToFirebase';

export function getFormData() {
  const form = document.querySelector('.js-tournaments-form');

  form?.addEventListener('submit', handleForm);

  function handleForm(e: Event) {
    e.preventDefault();
    const inputs = (e.target as HTMLFormElement).elements;

    const formValues: TournamentsForm = {
      name: (inputs.namedItem('name') as HTMLInputElement)?.value ?? '',
      description: (inputs.namedItem('description') as HTMLInputElement)?.value ?? '',
      'limit-region': 'of',
      rank: '',
      rate: '',
      regime: '',
      teams: '',
      time: '',
      startTournament: startTournamentDate ?? '',
      endTournament: endTournamentDate ?? '',
    };

    [...inputs].forEach(input => {
      if ((input as HTMLInputElement).checked) {
        formValues[(input as HTMLInputElement).name as keyof TournamentsForm] = (
          input as HTMLInputElement
        ).value;
      }
    });

    setDataToFirebase(formValues);
  }
}
