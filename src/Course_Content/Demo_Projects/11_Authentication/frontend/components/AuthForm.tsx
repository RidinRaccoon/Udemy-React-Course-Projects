import * as React from 'react';
import * as RRD from 'react-router-dom';
import classes from './AuthForm.module.css';

export function AuthForm() {
  const [isLogin, setIsLogin] = React.useState(true);

  function switchAuthHandler() {
    setIsLogin((isLoggedIn) => !isLoggedIn);
  }

  return (
    <RRD.Form method="post" className={classes.form}>
      <h1>{isLogin ? 'Log in' : 'Create new user'}</h1>
      <p>
        <label htmlFor="email">Email</label>
        <input required id="email" type="email" name="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input required id="password" type="" name="password" />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={switchAuthHandler}>
          {isLogin ? 'Create new user' : 'Login'}
        </button>
        <button type="submit">Save</button>
      </div>
    </RRD.Form>
  );
}
