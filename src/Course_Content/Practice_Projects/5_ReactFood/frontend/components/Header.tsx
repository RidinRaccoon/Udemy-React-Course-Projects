import * as React from 'react';
// import * as RRD from 'react-router-dom';
import { CartContext } from '../store/CartContext';
// Components & Types
import logo from '../assets/logo.jpg';
import { Cart } from './UI/Cart/Cart';
import { Button } from './UI/Button';

export function Header() {
  const [showCart, setShowCart] = React.useState(false);

  const toggleCart = React.useCallback(() => {
    setShowCart(!showCart);
  }, [showCart]);

  const { state: cartState } = React.useContext(CartContext);

  const { items: cartItems } = cartState;
  
  const itemQuantity = cartItems.reduce((accu, item) => accu + item.quantity, 0);

  return (
    <>
      <Cart isVisible={showCart} onClose={toggleCart} />

      <header id="main-header">
        <div id="title">
          <img src={logo} alt="A restaurant" />
          <h1>ReactFood</h1>
        </div>
        <nav>
          <Button isTextOnly onClick={toggleCart}>
            Cart ({itemQuantity})
          </Button>
        </nav>
      </header>
    </>
  );
}
