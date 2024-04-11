import * as React from 'react';
import * as RRD from 'react-router-dom';
import * as formattingUtils from '../../utils/formatting';
import classes from './Cart.module.css';
// Components & Types
import { CartContext } from '../../store/CartContext';
import { Button } from '../UI/Button/Button';
import { CartContent } from './CartContents';
import { ModalContext } from '../../store/ModalContex';

export function Cart(/* props: { isVisible: Boolean; onClose: () => void } */) {
  const { currencyFormatter } = formattingUtils;
  const { state: cartState } = React.useContext(CartContext);
  const { items: cartItems } = cartState;

  const sortedCart = cartItems.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  const { hide } = React.useContext(ModalContext);
  const navigate = RRD.useNavigate();

  const closeCart = React.useCallback(() => {
    hide();
  }, [hide]);

  const goToCheckout = React.useCallback(() => {
    hide();
    navigate('/catalog/checkout');
  }, [hide, navigate]);

  const cartTotal = currencyFormatter.format(
    cartItems.reduce((accu, item) => accu + item.price * item.quantity, 0),
  );

  const enableCheckout = cartItems.length > 0;

  return (
    <div>
      <div className={classes.cart}>
        <CartContent cartItems={sortedCart} cartTotal={cartTotal} />
        <div className={classes['cart-actions']}>
          <Button isTextOnly onClick={closeCart}>
            Close
          </Button>
          {enableCheckout && (
            <Button isTextOnly={false} onClick={goToCheckout}>
              Go to Checkout
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
