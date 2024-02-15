import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { authSlice, TAuthState } from '../store/auth';
import classes from './Header.module.css';

export function Header() {
  const dispatch = ReactRedux.useDispatch();
  const isAuth = ReactRedux.useSelector(
    (state: TAuthState) => state.auth.isAuthenticated,
  );

  const logoutHandler = () => {
    dispatch(authSlice.actions.logout());
  };
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
              <button type="button" onClick={logoutHandler}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
