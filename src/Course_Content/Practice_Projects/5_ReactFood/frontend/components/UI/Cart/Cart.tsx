import * as React from 'react';
import * as formattingUtils from '../../../utils/formatting';
import classes from './Cart.module.css';
// Components & Types
import { Modal } from '../Modal/Modal';
import { CartContext } from '../../../store/CartContext';
import { CartItem } from './CartItem';

export function Cart(props: { isVisible: Boolean; onClose: () => void }) {
  const { currencyFormatter } = formattingUtils;
  const { isVisible, onClose } = props;
  const { state: cartState } = React.useContext(CartContext);
  const { items: cartItems } = cartState;

  const sortedCart = cartItems.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  const cartTotal = cartItems.reduce(
    (accu, item) => accu + item.price * item.quantity,
    0,
  );

  return (
    <div>
      {isVisible && (
        <Modal>
          <div className={classes.cart}>
            <header>
              <h2>Your Cart</h2>
              <button
                type="button"
                className={classes['close-button']}
                onClick={onClose}
              >
                X
              </button>
            </header>
            <ul>
              {sortedCart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
            <p>Total: {currencyFormatter.format(cartTotal)}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}
