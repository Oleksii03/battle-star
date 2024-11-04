import { signOut } from 'firebase/auth';
import { auth } from '@/ts/utils/firebaseConfig';
import { returnToThePage } from '@/ts/utils/returnToThePage';

export function logout() {
  const logoutBtn = document.querySelector('.js-sidebar-btn-exit');

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      const currentPage = window.location.pathname;

      signOut(auth)
        .then(() => {
          const page = returnToThePage(currentPage);
          if (typeof page === 'string') {
            window.location.href = page;
          }
        })
        .catch(error => {
          console.error('Error signing out:', error);
        });
    });
  }
}
