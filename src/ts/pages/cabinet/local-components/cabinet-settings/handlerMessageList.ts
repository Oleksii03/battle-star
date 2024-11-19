export function handlerMessageList() {
  const messageList = document.querySelector('.js-message-list');

  messageList?.addEventListener('click', (e: Event) => {
    const targetEl = e.target as HTMLElement;

    if (!targetEl.classList.contains('js-item-message-switch')) return;

    targetEl.classList.toggle('cabinet-settings__message-item-switch_active');
  });
}
