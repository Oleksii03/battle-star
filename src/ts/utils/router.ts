import { baseUrl } from '../';

export function createCabinetUrl() {
  const cabinetUrl = window.location.hostname.includes('localhost')
    ? '/cabinet'
    : `${baseUrl}cabinet`;
  return cabinetUrl;

  // console.log(window.location.hostname.includes('localhost'));
}
