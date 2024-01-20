import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { TState } from '../store/index';
import classes from './Header.module.css';

export function Header() {
  const isAuth = ReactRedux.useSelector(
    (state: TState) => state.auth.isAuthenticated,
  );
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button type="button">Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
