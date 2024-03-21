import * as React from 'react';
import * as formattingUtils from '../../../utils/formatting';
import { CartContext } from '../../../store/CartContext';
import classes from './CartItem.module.css';
// Components & types
import { Button } from '../Button/Button';
import { TCartItem } from '../../../types/types';

export function CartItem(props: { item: TCartItem }) {
  const { item } = props;
  const { name, price, quantity } = item;
  const { currencyFormatter } = formattingUtils;
  const { addToCart, removeFromCart } = React.useContext(CartContext);
  return (
    <li className={classes['cart-item']}>
      <div className={classes['cart-item-details']}>
        <p className={classes['cart-item-']}>
          {name} - {currencyFormatter.format(price)}
        </p>
      </div>
      <div className={classes['cart-item-quantity']}>
        <p>x{quantity}</p>
      </div>
      <div className={classes['cart-item-actions']}>
        <Button isTextOnly={false} onClick={() => addToCart(item)}>
          +
        </Button>
        <Button isTextOnly={false} onClick={() => removeFromCart(item)}>
          -
        </Button>
      </div>
    </li>
  );
}
