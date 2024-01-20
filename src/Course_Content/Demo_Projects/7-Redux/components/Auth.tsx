import * as React from 'react';
import classes from './Auth.module.css';

export function Auth() {
  const loginHandler = (event: any) => {
    event.preventDefault();
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button type="button">Login</button>
        </form>
      </section>
    </main>
  );
}
