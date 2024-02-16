import * as RRD from 'react-router-dom';

export function setAuthToken(token: string) {
  localStorage.setItem('token', token);

  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());
}

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = storedExpirationDate
    ? new Date(storedExpirationDate)
    : new Date();

  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;

  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) return 'EXPIRED';

  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();
  if (!token) return RRD.redirect('/auth');

  return null;
}
