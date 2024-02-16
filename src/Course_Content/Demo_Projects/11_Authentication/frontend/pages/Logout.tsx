import * as RRD from 'react-router-dom';

export function action() {
  localStorage.removeItem('token');
  return RRD.redirect('/');
}