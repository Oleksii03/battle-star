export function checkAuth() {
  const token: string | null = localStorage.getItem('logged');

  if (token === 'false' || token === null) {
    window.location.href = '404';
    console.log(token);
  }
}
