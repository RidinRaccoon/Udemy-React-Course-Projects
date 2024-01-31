/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import * as RR from 'react-redux';
import { TStoreState } from '../../store';
import classes from './Cart.module.css';
import { Card } from '../UI/Card';
import { CartItem } from './CartItem';

export function Cart() {
  const cartItems = RR.useSelector((state: TStoreState) => state.cart.items);
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
