import { baseUrl } from '../';

export function createCabinetUrl() {
  const cabinetUrl = window.location.hostname === 'localhost' ? '/cabinet' : `${baseUrl}cabinet`;
  return cabinetUrl;
}
