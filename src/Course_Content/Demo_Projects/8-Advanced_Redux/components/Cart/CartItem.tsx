/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { useAppDispatch } from '../../hooks/useRedux';
import { cartActions } from '../../store/cart-slice';
import classes from './CartItem.module.css';

type TCartItemProps = {
  item: {
    id: string;
    title: string;
    quantity: number;
    total: number;
    price: number;
  };
};

export function CartItem(props: TCartItemProps) {
  const { item } = props;
  const { title, quantity, total, price, id } = item;
  const dispatch = useAppDispatch();

  const increaseQuantity = () => {
    dispatch(cartActions.addItemToCart({ id, title, price }));
  };
  const decreaseQuantity = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
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
          <button type="button" onClick={decreaseQuantity}>
            -
          </button>
          <button type="button" onClick={increaseQuantity}>
            +
          </button>
        </div>
      </div>
    </li>
  );
}
