import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../utils/firebaseConfig';

export function onStateUserChanged(): void {
  const activeUser = document.querySelector('.js-user-active-title');
  const itemCabinet = document.querySelector('.js-item-cabinet');
  const btnEnter = document.querySelector('.js-sidebar-btn-enter');
  const btnExid = document.querySelector('.js-sidebar-btn-exit');
  const pageError = document.querySelector('.js-page-error');
  const cabinet = document.querySelector('.js-cabinet');
  // ---local refs --------------------------------
  onAuthStateChanged(auth, user => {
    if (user) {
      itemCabinet?.classList.add('header__user-inner-item_active');
      btnEnter?.classList.add('sidebar__nav-item_disabled');
      btnExid?.classList.remove('sidebar__nav-item_hidden');
      cabinet?.classList.add('cabinet_visible');

      // Отримання інформації про користувача
      // const uid = user.uid;
      // const email = user.email;
      // document.body.classList.remove('to-freeze');

      const displayName = user.displayName;
      // const displayName = 'Sergio Richterf';

      // console.log('User ID:', uid);
      // console.log('User Email:', email);
      // console.log('User Display Name:', displayName);

      if (activeUser) {
        if (displayName && displayName.length > 14) {
          activeUser.textContent = displayName.slice(0, 14) + '...';
          return;
        }
        activeUser.textContent = displayName;
      }
      return;
    }

    // if (!user) {
    //   window.location.href = '/';
    //   return;
    // }
    // console.log('No user is signed in.');
    itemCabinet?.classList.remove('header__user-inner-item_active');
    btnEnter?.classList.remove('sidebar__nav-item_disabled');
    btnExid?.classList.add('sidebar__nav-item_hidden');
    pageError?.classList.remove('page-error_hidden');
    cabinet?.classList.remove('cabinet_visible');

    if (activeUser) activeUser.textContent = 'User';
  });
}
