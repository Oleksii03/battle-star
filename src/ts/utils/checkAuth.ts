export function checkAuth() {
  const token: string | null = localStorage.getItem('logged');

  const isTrue = token === 'false' || token === null;

  if (isTrue) window.location.href = '404';
}
