import * as React from 'react';
import * as formattingUtils from '../../../utils/formatting';
import { CartContext } from '../../../store/CartContext';
// Components & Types
import { Button } from '../Button';
import { TCartItem } from '../../../types/types';

export function CartItem(props: { item: TCartItem }) {
  const { item } = props;
  const { name, price, quantity } = item;
  const { currencyFormatter } = formattingUtils;
  const { addToCart, removeFromCart } = React.useContext(CartContext);
  return (
    <li>
      <div>
        <p>{name}</p>
        <p>{currencyFormatter.format(price)}</p>
        <p>x{quantity}</p>
      </div>
      <div className="cart-item-actions">
        <Button isTextOnly={false} onClick={() => addToCart(item)}>
          +
        </Button>
        <Button isTextOnly={false} onClick={() => removeFromCart(item)}>
          -
        </Button>
      </div>
    </li>
  );
}
