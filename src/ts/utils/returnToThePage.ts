import { PAGE_MAIN, PAGE_CABINET } from './constants';

export function returnToThePage(currentPage: string): string | undefined {
  if (currentPage.includes(PAGE_MAIN)) {
    console.log('index');
    return '/index.html';
  }

  if (currentPage.includes(PAGE_CABINET)) {
    console.log('cabinet');
    return '/index.html';
  }
}
