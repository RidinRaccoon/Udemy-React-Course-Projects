import * as React from 'react';
import * as formattingUtils from '../../../utils/formatting';
import { CartContext } from '../../../store/CartContext';
// Components & Types
import { Button } from '../Button';

export function CartItem(props: {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  };
}) {
  const { item } = props;
  const { id, name, price, quantity } = item;
  const { currencyFormatter } = formattingUtils;
  const { addToCart } = React.useContext(CartContext);
  return (
    <li>
      <div>
        <p>{name}</p>
        <p>{currencyFormatter.format(price)}</p>
        <p>x{quantity}</p>
      </div>
      <div className="cart-item-actions">
        <Button isTextOnly={false} onClick={() => addToCart({ id, name, price })}>
          +
        </Button>
        <Button isTextOnly={false}>-</Button>
      </div>
    </li>
  );
}
