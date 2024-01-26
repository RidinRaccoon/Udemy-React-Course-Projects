import * as React from 'react';
import './styles/index.css';
import { Cart } from './components/Cart/Cart';
import { Layout } from './components/Layout/Layout';
import { Products } from './components/Shop/Products';

export function AdvancedReduxApp() {
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}
