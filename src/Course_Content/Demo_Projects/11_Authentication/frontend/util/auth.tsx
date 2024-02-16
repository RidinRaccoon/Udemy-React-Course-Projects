export function setAuthToken(token: string) {
  localStorage.setItem('token', token);
}

export function getAuthToken() {
  const token = localStorage.getItem('token');
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}
