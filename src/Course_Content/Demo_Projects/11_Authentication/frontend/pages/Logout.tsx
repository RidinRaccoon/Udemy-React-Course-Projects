import * as RRD from 'react-router-dom';

export function action() {
  localStorage.removeItem('token');
  localStorage.removeItem('expiration');
  return RRD.redirect('/');
}