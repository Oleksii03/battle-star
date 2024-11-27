import { TournamentsForm } from '@/ts/types/pages/tournaments';
import { startTournamentDate, endTournamentDate } from '@/ts/components/createCalendar';
import { openTournamentsBackdrop } from './openTournamentsBackdrop';

export function getFormData() {
  const form = document.querySelector('.js-tournaments-form') as HTMLFormElement;

  form?.addEventListener('submit', handleForm);

  function handleForm(e: Event) {
    e.preventDefault();
    const inputs = (e.target as HTMLFormElement).elements;

    const formValues: TournamentsForm = {
      name: (inputs.namedItem('name') as HTMLInputElement)?.value ?? '',
      description: (inputs.namedItem('description') as HTMLInputElement)?.value ?? '',
      limitRegion: 'of',
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

    openTournamentsBackdrop(formValues);
    form.reset();
  }
}
