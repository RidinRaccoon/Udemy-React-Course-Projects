/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { useAppDispatch } from '../../hooks/useRedux';
import { cartActions } from '../../store/cart-slice';
import classes from './ProductItem.module.css';
import { Card } from '../UI/Card';

type TProductItemProps = {
  id: string;
  title: string;
  price: number;
  description: string;
};

export function ProductItem(props: TProductItemProps) {
  const { title, price, description, id } = props;
  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      }),
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button type="button" onClick={addToCartHandler}>
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
}
