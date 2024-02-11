import * as React from 'react';
import classes from './NewsletterSignup.module.css';

export function NewsletterSignup() {
  return (
    <form method="POST" className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button type="button">Sign up</button>
    </form>
  );
}
