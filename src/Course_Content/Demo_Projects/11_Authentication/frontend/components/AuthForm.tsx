import * as React from 'react';
import * as RRD from 'react-router-dom';
import classes from './AuthForm.module.css';
// Components & Types
import { TAuthActionData } from '../types/_index';

export function AuthForm() {
  const data = RRD.useActionData() as TAuthActionData;
  const navigation = RRD.useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const [searchParams] = RRD.useSearchParams();
  const isLoggedIn = searchParams.get('mode') === 'login';
  const mode = isLoggedIn ? 'signup' : 'login';

  return (
    <RRD.Form method="post" className={classes.form}>
      <h1>{isLoggedIn ? 'Login' : 'Create new user'}</h1>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      {data && data.message && <p>{data.message}</p>}
      <p>
        <label htmlFor="email">Email</label>
        <input required id="email" type="email" name="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input required id="password" type="password" name="password" />
      </p>
      <div className={classes.actions}>
        <RRD.Link to={`?mode=${mode}`}>
          {isLoggedIn
            ? "Don't have an account? Click here to create one."
            : 'Already haven an account? Click here to login.'}
        </RRD.Link>
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? 'Submitting...' : 'Save'}
        </button>
      </div>
    </RRD.Form>
  );
}
