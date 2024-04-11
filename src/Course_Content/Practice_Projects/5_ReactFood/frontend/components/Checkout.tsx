import * as React from 'react';
import * as formattingUtils from '../utils/formatting';
import { Input } from './UI/Input/Input';
import { Button } from './UI/Button/Button';
import { CartContext } from '../store/CartContext';

export function Checkout() {
  const { currencyFormatter } = formattingUtils;
  const { state: cartState } = React.useContext(CartContext);
  const { items: cartItems } = cartState;
  
  const cartTotal = currencyFormatter.format(
    cartItems.reduce((accu, item) => accu + item.price * item.quantity, 0),
  );


  const handleCheckout = () => {};

  return (
    <form>
      <h2>Checkout</h2>
      <p>Total Amount: {cartTotal} </p>

      <Input id="full-name" label="Full Name" type="text" isMandatory />
      <Input id="email" label="E-mail" type="email" isMandatory />
      <Input id="street" label="Street" type="text" isMandatory />
      <div className="control-row">
        <Input id="postal-code" label="Postal Code" type="text" isMandatory />
        <Input id="City" label="city" type="text" isMandatory />
      </div>

      <p className="modal-actions">
        <Button isTextOnly={false} onClick={handleCheckout}>
          Submit Order
        </Button>
      </p>
    </form>
  );
}
