import { CabinetHistoryMatchesList } from '@/ts/types/pages/cabinet';
import { markupListItem } from './markup';
// ---imports-----------------------------------------

export function filterMarkup(collection: CabinetHistoryMatchesList[]) {
  const itemTitleBox = document.querySelector('.js-drop-down-item-title-box');
  const dropDownInnerList = document.querySelector('.js-drop-down-inner-list');
  const dropDownActiveTitle = document.querySelector('.js-drop-down-active-title')!;
  const dropDownIcon = document.querySelector('.js-drop-down-icon');
  // ---local refs --------------------------------

  itemTitleBox?.addEventListener('click', handlerDropDown);

  function handlerDropDown() {
    dropDownInnerList?.classList.toggle('cabinet-history__drop-down-inner-list_active');
    dropDownIcon?.classList.toggle('cabinet-history__drop-down-item-icon_active');
  }

  dropDownInnerList?.addEventListener('click', handlerDropDownInnerList);

  function handlerDropDownInnerList(e: Event) {
    const targetEl = e.target as HTMLElement;
    const targetElTextContent = targetEl.textContent;

    if (!targetElTextContent) return;
    dropDownActiveTitle.textContent = targetElTextContent;

    handlerDropDown();

    createFilterMarkup(targetElTextContent.toLowerCase());
  }

  // --createFilterMarkup--
  function createFilterMarkup(searchQery: string | null) {
    if (searchQery?.includes('рейтинг')) {
      const byRating = collection.toSorted((a, b) => b.sortScore - a.sortScore);
      markupListItem(byRating);
      return;
    }

    const filteredCollections = collection.filter(
      ({ title }) => title.toLowerCase() === searchQery
    );

    if (filteredCollections.length) {
      markupListItem(filteredCollections);
      return;
    }

    markupListItem(collection);
  }
}
