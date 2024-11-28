import { rankList } from './handlerRankTrack';

export function destinationHandler(targetLi: HTMLLIElement) {
  const inputs = document.querySelectorAll('.js-rank-item-input');
  const idx = findIdx(targetLi);
  setActiveInputsColor(idx, inputs);
  setScaleProgress(idx);
}

function findIdx(targetEl: HTMLElement) {
  return [...rankList.children].indexOf(targetEl);
}

function setActiveInputsColor(idx: number, inputs: NodeListOf<Element>) {
  inputs.forEach(input => input.classList.remove('form__rank-item-input_active'));
  for (let i = 0; i < idx; i++) {
    const input = inputs[i];
    input.classList.add('form__rank-item-input_active');
  }
}

function setScaleProgress(idx: number) {
  const rankTrackTumb = document.querySelector('.js-rank-track-tumb') as HTMLDivElement;

  switch (idx) {
    case 0:
      rankTrackTumb.style.width = 4 + '%';
      break;
    case 1:
      rankTrackTumb.style.width = 27 + '%';
      break;
    case 2:
      rankTrackTumb.style.width = 50 + '%';
      break;
    case 3:
      rankTrackTumb.style.width = 73 + '%';
      break;
    case 4:
      rankTrackTumb.style.width = 100 + '%';
      break;
    default:
      rankTrackTumb.style.width = 4 + '%';
  }
}
