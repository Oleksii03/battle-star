import { signOut } from 'firebase/auth';
import { auth } from '@/ts/utils/firebaseConfig';
import { returnToThePage } from '@/ts/utils/returnToThePage';
import { handleError } from '@/ts/utils/handleError';

export function logoutThroughSidebar() {
  const logoutBtn = document.querySelector('.js-sidebar-btn-exit');

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      logout();
    });
  }
}

export function logout() {
  const currentPage = window.location.pathname;

  signOut(auth)
    .then(() => {
      const page = returnToThePage(currentPage);
      if (typeof page === 'string') {
        window.location.href = page;
        localStorage.setItem('logged', 'false');
      }
    })
    .catch(handleError);
}
