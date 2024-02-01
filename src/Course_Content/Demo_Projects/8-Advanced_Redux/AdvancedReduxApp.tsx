/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { sendCartData } from './store/cart-slice';

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
    if (isInitialLoad) {
      isInitialLoad = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <React.StrictMode>
      {notification && (
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
