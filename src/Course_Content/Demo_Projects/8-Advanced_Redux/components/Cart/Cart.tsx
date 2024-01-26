import * as React from 'react';
import classes from './Cart.module.css';
import { Card } from '../UI/Card';
import { CartItem } from './CartItem';

export function Cart() {
  return (
    <Card className={classes.cart}>
      <h2>Your shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        />
      </ul>
    </Card>
  );
}
