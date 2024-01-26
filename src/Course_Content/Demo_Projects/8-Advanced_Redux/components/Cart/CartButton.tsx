import * as React from 'react';
import classes from './CartButton.module.css';

export function CartButton() {
  return (
    <button type="button" className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
}
