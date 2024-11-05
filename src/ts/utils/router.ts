import { baseUrl } from '../';

export const cabinetUrl =
  window.location.hostname === 'localhost' ? '/cabinet' : `${baseUrl}cabinet`;
