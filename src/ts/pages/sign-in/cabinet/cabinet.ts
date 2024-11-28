import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../utils/firebaseConfig';

export function onStateUserChanged(): void {
  const activeUser = document.querySelector('.js-user-active-title');
  const itemCabinet = document.querySelector('.js-item-cabinet');
  const btnEnter = document.querySelector('.js-sidebar-btn-enter');
  const btnExid = document.querySelector('.js-sidebar-btn-exit');
  const pageError = document.querySelector('.js-page-error');
  const cabinet = document.querySelector('.js-cabinet');
  const headerUserList = document.querySelector('.js-header-user-list') as HTMLUListElement;

  // ---/local refs --------------------------------

  onAuthStateChanged(auth, user => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      itemCabinet?.classList.add('header__user-inner-item_active');
      btnEnter?.classList.add('sidebar__nav-item_disabled');
      btnExid?.classList.remove('sidebar__nav-item_hidden');
      cabinet?.classList.add('cabinet_visible');
      if (headerUserList) headerUserList.style.display = 'block';

      const displayName = user.displayName;

      if (activeUser) {
        if (displayName && displayName.length > 14) {
          activeUser.textContent = displayName.slice(0, 14) + '...';
          return;
        }
        activeUser.textContent = displayName;
      }
      return;
    }

    itemCabinet?.classList.remove('header__user-inner-item_active');
    btnEnter?.classList.remove('sidebar__nav-item_disabled');
    btnExid?.classList.add('sidebar__nav-item_hidden');
    pageError?.classList.remove('page-error_hidden');
    cabinet?.classList.remove('cabinet_visible');

    if (activeUser) activeUser.textContent = 'User';
    if (headerUserList) headerUserList.style.display = 'none';
  });
}
