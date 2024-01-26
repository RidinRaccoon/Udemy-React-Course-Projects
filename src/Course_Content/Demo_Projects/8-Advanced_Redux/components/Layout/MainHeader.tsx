import * as React from 'react';
import classes from './MainHeader.module.css';
import { CartButton } from '../Cart/CartButton';

export function MainHeader() {
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}
