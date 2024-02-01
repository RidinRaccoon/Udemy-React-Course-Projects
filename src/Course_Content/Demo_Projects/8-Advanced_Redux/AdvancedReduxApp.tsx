/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import * as RR from 'react-redux';
import { TStoreState } from './store';
import { uiActions } from './store/ui-slice';

import './styles/index.css';
import { Cart } from './components/Cart/Cart';
import { Layout } from './components/Layout/Layout';
import { Products } from './components/Shop/Products';
import { Notification } from './components/UI/Notification';

const endpoint =
  'https://react-course---advanced-redux-default-rtdb' +
  '.europe-west1.firebasedatabase.app/cart.json';

let isInitialLoad = true;

export function AdvancedReduxApp() {
  const showCart = RR.useSelector(
    (state: TStoreState) => state.ui.cartIsVisible,
  );
  const cart = RR.useSelector((state: TStoreState) => state.cart);
  const notification = RR.useSelector(
    (state: TStoreState) => state.ui.notification,
  );
  const dispatch = RR.useDispatch();

  React.useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'ending',
          title: 'Sending',
          message: 'Sending cart data.',
        }),
      );
      const response = await fetch(endpoint, {
        method: 'PUT',
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Sucess',
          message: 'Cart data sent successfully.',
        }),
      );
    };

    if (isInitialLoad) {
      isInitialLoad = false;
      return;
    }

    sendCartData().catch(() => {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Failed to send cart data.',
        }),
      );
    });
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
