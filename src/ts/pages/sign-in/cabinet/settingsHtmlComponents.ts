export function settingsHtmlComponents() {
  const currentPath = window.location.pathname;

  if (!currentPath.includes('/cabinet')) return;

  console.log('cabinet');
}
