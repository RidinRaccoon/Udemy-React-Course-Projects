import * as React from 'react';
import * as ReactRedux from 'react-redux';
import classes from './Auth.module.css';
// import * as Store from '../store/index';
import { authSlice } from '../store/auth';

export function Auth() {
  const dispatch = ReactRedux.useDispatch();

  const loginHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(authSlice.actions.login());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input required type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input required type="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
}
