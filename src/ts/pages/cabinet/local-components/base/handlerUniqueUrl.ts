import { setActiveListItem } from './setActiveListItem';
import { statisticHandler } from '../statistics/statistic';
import { historyMatches } from '../history-matches/historyMatches';
import { personalData } from '../personal-data/personalData';
import { handlerWallet } from '../wallet/wallet';
import { handlerSettings } from '../cabinet-settings/settings';
import { handlerBlockList } from '../block-list/blockList';

export function handlerUniqueUrl(
  cabinetMainContainer: HTMLElement,
  navigationList: HTMLUListElement
) {
  const statistics = navigationList.querySelector('.js-statistics') as HTMLLIElement;
  const saveHash = localStorage.getItem('statistics') ?? 'statistics-dota';
  statistics.dataset.hash = saveHash;

  let tab = location.hash.slice(1) ? location.hash.slice(1) : saveHash;
  const targetEl = document.querySelector(`[data-hash="${tab}"]`) as HTMLLIElement;

  setActiveListItem(targetEl, navigationList);

  switch (tab) {
    case 'statistics-dota':
      statisticHandler(cabinetMainContainer, targetEl);
      break;

    case 'statistics-csgo':
      statisticHandler(cabinetMainContainer, targetEl);
      break;

    case 'history':
      historyMatches(cabinetMainContainer, targetEl);
      break;

    case 'personal-data':
      personalData(cabinetMainContainer, targetEl);
      break;

    case 'wallet':
      handlerWallet(cabinetMainContainer, targetEl);
      break;

    case 'setting':
      handlerSettings(cabinetMainContainer, targetEl);
      break;

    case 'block-list':
      handlerBlockList(cabinetMainContainer, targetEl);
      break;

    default:
      statisticHandler(cabinetMainContainer, targetEl);
      break;
  }
}
