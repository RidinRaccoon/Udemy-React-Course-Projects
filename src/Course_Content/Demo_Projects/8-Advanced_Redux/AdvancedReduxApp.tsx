/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import * as RR from 'react-redux';
import { TStoreState } from './store';

import './styles/index.css';
import { Cart } from './components/Cart/Cart';
import { Layout } from './components/Layout/Layout';
import { Products } from './components/Shop/Products';

export function AdvancedReduxApp() {
  const showCart = RR.useSelector(
    (state: TStoreState) => state.ui.cartIsVisible,
  );

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}
