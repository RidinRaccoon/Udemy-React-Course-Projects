/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { useAppSelector } from '../../hooks/useRedux';
import classes from './Cart.module.css';
import { Card } from '../UI/Card';
import { CartItem } from './CartItem';

export function Cart() {
  const cart = useAppSelector((state) => state.cart);
  const { items, cartTotal } = cart;
  return (
    <Card className={classes.cart}>
      <header>
        <h2>Your shopping Cart</h2>
        <p>Total: ${cartTotal.toFixed(2)}</p>
      </header>

      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
}
