import * as React from 'react';
import classes from './CartItem.module.css';

type TCartItemProps = {
  item: { title: string; quantity: number; total: number; price: number };
};

export function CartItem(props: TCartItemProps) {
  const { item } = props;
  const { title, quantity, total, price } = item;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button type="button">-</button>
          <button type="button">+</button>
        </div>
      </div>
    </li>
  );
}
