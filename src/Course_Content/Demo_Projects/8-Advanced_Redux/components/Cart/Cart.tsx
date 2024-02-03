/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { useAppSelector } from '../../hooks/useRedux';
import classes from './Cart.module.css';
import { Card } from '../UI/Card';
import { CartItem } from './CartItem';

export function Cart() {
  const cartItems = useAppSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
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
