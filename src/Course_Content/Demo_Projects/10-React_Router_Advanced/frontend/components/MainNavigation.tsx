import * as React from 'react';
import classes from './MainNavigation.module.css';

export function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Events</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
