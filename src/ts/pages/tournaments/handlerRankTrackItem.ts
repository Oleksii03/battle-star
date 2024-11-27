import { rankList } from './handlerRankTrack';

export function destinationHandler(targetLi: HTMLLIElement) {
  const inputs = document.querySelectorAll('.js-rank-item-input');
  const idx = findIdx(targetLi);
  setActiveInputsColor(idx, inputs);
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
