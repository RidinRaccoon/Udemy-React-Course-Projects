import * as React from 'react';
import * as RRD from 'react-router-dom';
import { CartContext } from '../store/CartContext';
// Components & types
import logo from '../assets/logo.jpg';
import { Cart } from './Cart/Cart';
import { Button } from './UI/Button/Button';
import { ModalContext } from '../store/ModalContex';

export function Header() {
  const { state: cartState } = React.useContext(CartContext);
  const { items: cartItems } = cartState;

  const itemQuantity = cartItems.reduce(
    (accu, item) => accu + item.quantity,
    0,
  );

  const { open } = React.useContext(ModalContext);
  const toggleCart = React.useCallback(() => open(<Cart />), [open]);

  return (
    <header id="main-header">
      <RRD.Link id="title" to="/">
        <img src={logo} alt="A restaurant" />
        <h1>ReactFood</h1>
      </RRD.Link>
      <nav>
        <Button isTextOnly onClick={toggleCart}>
          Cart ({itemQuantity})
        </Button>
      </nav>
    </header>
  );
}
