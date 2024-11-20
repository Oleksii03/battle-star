import { handlerMessageList } from './handlerMessageList';
import { createSettingsMarkup } from './createSettingsMarkup';
import { handlerInvitations } from './handlerInvitations';
import { handlerLanguage } from './handlerLanguage';
import { handlerRegion } from './handlerRegion';
import { handlerLogout } from './handlerLogout';

export function handlerSettings(container: HTMLElement, targetEl: HTMLLIElement) {
  // create-Settings-Markup
  container.innerHTML = createSettingsMarkup();
  // handlerMessageList
  handlerMessageList();
  // handlerInvitations
  handlerInvitations();
  // handlerLanguage
  handlerLanguage();
  // handlerRegion
  handlerRegion();
  // handlerLogout
  handlerLogout();

  // handler-URL;
  const hash = targetEl.dataset.hash;
  if (hash) location.hash = hash;
}
