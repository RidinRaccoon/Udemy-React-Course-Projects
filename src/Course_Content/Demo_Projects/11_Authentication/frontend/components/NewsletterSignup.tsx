import * as React from 'react';
import * as RRD from 'react-router-dom';
import classes from './NewsletterSignup.module.css';
// Components & Types
import { TNewsletterActionData } from '../types/_index';

export function NewsletterSignup() {
  const fetcher = RRD.useFetcher<TNewsletterActionData>();
  const { data, state } = fetcher;

  React.useEffect(() => {
    if (state === 'idle' && data && data.message) {
      // eslint-disable-next-line no-alert
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form
      method="POST"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button type="button">Sign up</button>
    </fetcher.Form>
  );
}
