import * as React from 'react';
// import * as RRD from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { Cart } from './Cart';

export function Header() {
  const [showCart, setShowCart] = React.useState(false);

  const toggleCart = React.useCallback(() => {
    setShowCart(!showCart);
  }, [showCart]);

  return (
    <>
      <Cart isVisible={showCart} onClose={toggleCart} />

      <header id="main-header">
        <div id="title">
          <img src={logo} alt="A restaurant" />
          <h1>ReactFood</h1>
        </div>
        <nav>
          <button type="button" onClick={toggleCart}>
            Cart (0)
          </button>
        </nav>
      </header>
    </>
  );
}
