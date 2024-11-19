export function handlerInvitations() {
  const invitationsList = document.querySelector('.js-invitations-list');

  invitationsList?.addEventListener('click', (e: Event) => {
    const targetEl = e.target as HTMLElement;

    if (!targetEl.classList.contains('js-item-invitations-switch')) return;

    targetEl.classList.toggle('cabinet-settings__invitations-item-switch_active');
  });
}
