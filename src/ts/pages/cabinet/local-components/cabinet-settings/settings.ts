import { handlerMessageList } from './handlerMessageList';
import { createSettingsMarkup } from './createSettingsMarkup';
import { handlerInvitations } from './handlerInvitations';
import { handlerLanguage } from './handlerLanguage';

export function handlerSettings(container: HTMLElement, targetEl: HTMLLIElement) {
  // create-Settings-Markup
  container.innerHTML = createSettingsMarkup();
  // handlerMessageList
  handlerMessageList();
  // handlerInvitations
  handlerInvitations();
  // handlerLanguage
  handlerLanguage();

  // handler-URL;
  const hash = targetEl.dataset.hash;
  if (hash) location.hash = hash;
}
