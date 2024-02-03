/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { TStoreState } from '../../store';

export function CartButton() {
  const cartQuantity = useAppSelector(
    (state: TStoreState) => state.cart.totalQuantity,
  );

  const dispatch = useAppDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toogle());
  };

  return (
    <button
      type="button"
      className={classes.button}
      onClick={toggleCartHandler}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
}
