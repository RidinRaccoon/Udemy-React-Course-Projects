/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import * as RR from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { TStoreState } from '../../store';

export function CartButton() {
  const dispatch = RR.useDispatch();
  const cartQuantity = RR.useSelector(
    (state: TStoreState) => state.cart.totalQuantity,
  );
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
