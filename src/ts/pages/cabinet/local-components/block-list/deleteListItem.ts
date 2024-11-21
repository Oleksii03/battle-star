import { emptyBlackListMarkup } from './emptyBlackListMarkup';

export function deleteListItem(blockList: HTMLUListElement) {
  const container = document.querySelector('.js-cabinet-main-body')!;

  blockList.addEventListener('click', handlerDeleteItemList);

  function handlerDeleteItemList(e: Event) {
    const targetItem = (e.target as HTMLElement).closest('.js-btn-dots');
    const btnRemove = targetItem?.nextElementSibling as HTMLButtonElement;

    if (!targetItem) return;

    btnRemove?.classList.toggle('cabinet-block__item-btn-remove_active');

    deleteTargetItem(btnRemove);
  }

  function deleteTargetItem(item: HTMLButtonElement) {
    item.addEventListener('click', () => {
      item.closest('.cabinet-block__item')?.remove();

      if (!blockList.children.length) {
        container.innerHTML = emptyBlackListMarkup();
      }
    });
  }

  if (!blockList.children.length) {
    container.innerHTML = emptyBlackListMarkup();
  }
}
