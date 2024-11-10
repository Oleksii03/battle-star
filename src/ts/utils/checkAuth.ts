export function checkAuth() {
  const token: string | null = localStorage.getItem('logged');

  if (token === 'false') window.location.href = '404';
}
