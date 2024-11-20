import { logout } from '@/ts/pages/sign-in/cabinet/signOut';

export function handlerLogout() {
  const logoutBtn = document.querySelector('.js-logout-btn');

  logoutBtn?.addEventListener('click', () => {
    console.log(logout);
    logout();
  });
}
