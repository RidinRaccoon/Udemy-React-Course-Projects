import * as React from 'react';
// Components & Types
import { Modal } from '../Modal';
import { CartContext } from '../../../store/CartContext';
import { CartItem } from './CartItem';

export function Cart(props: { isVisible: Boolean; onClose: () => void }) {
  const { isVisible, onClose } = props;

  const { state: cartState } = React.useContext(CartContext);

  const { items: cartItems, cartTotal } = cartState;

  return (
    <div>
      {isVisible && (
        <Modal /* onClose={toggleCart} */>
          <div>
            <button type="button" onClick={onClose}>
              Close
            </button>
            <ul>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
            <p>Total: {cartTotal}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}
