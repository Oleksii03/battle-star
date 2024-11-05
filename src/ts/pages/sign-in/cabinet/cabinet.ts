import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../utils/firebaseConfig';

export function onStateUserChanged(): void {
  // const userA = document.querySelector('.js-user');
  const activeUser = document.querySelector('.js-user-active-title');
  const itemCabinet = document.querySelector('.js-item-cabinet');
  const btnEnter = document.querySelector('.js-sidebar-btn-enter');
  const btnExid = document.querySelector('.js-sidebar-btn-exit');
  // ---local refs --------------------------------
  onAuthStateChanged(auth, user => {
    // console.log(!!user);

    if (user) {
      itemCabinet?.classList.add('header__user-inner-item_active');
      btnEnter?.classList.add('sidebar__nav-item_disabled');
      btnExid?.classList.remove('sidebar__nav-item_hidden');

      // Отримання інформації про користувача
      // const uid = user.uid;
      // const email = user.email;

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

    // console.log('No user is signed in.');
    itemCabinet?.classList.remove('header__user-inner-item_active');
    btnEnter?.classList.remove('sidebar__nav-item_disabled');
    btnExid?.classList.add('sidebar__nav-item_hidden');
    if (activeUser) activeUser.textContent = 'User';
  });
}
