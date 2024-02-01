/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { useAppDispatch, useAppSelector } from './hooks/useRedux';
import { fetchCartData, sendCartData } from './store/cart-actions';

import './styles/index.css';
import { Cart } from './components/Cart/Cart';
import { Layout } from './components/Layout/Layout';
import { Products } from './components/Shop/Products';
import { Notification } from './components/UI/Notification';

let isInitialLoad = true;

export function AdvancedReduxApp() {
  const showCart = useAppSelector((state) => state.ui.cartIsVisible);
  const cart = useAppSelector((state) => state.cart);
  const notification = useAppSelector((state) => state.ui.notification);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  React.useEffect(() => {
    if (isInitialLoad) {
      isInitialLoad = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <React.StrictMode>
      {notification.status && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </React.StrictMode>
  );
}
