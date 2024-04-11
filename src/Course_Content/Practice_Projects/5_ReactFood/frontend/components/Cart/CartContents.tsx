import * as React from 'react';
import { CartItem } from './CartItem';
import { TCartItem } from '../../types/types';

export function CartContent(props: {
  cartItems: TCartItem[];
  cartTotal: string;
}) {
  const { cartItems, cartTotal } = props;
  return (
    <div /* className={classes.cart} */>
      <header>
        <h2>Your Cart</h2>
      </header>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <p /* className={classes['cart-total']} */>Total: {cartTotal}</p>
    </div>
  );
}
