import * as React from 'react';
import * as formattingUtils from '../../../utils/formatting';
// Components & Types
import { Button } from '../Button';

export function CartItem(props: {
  item: {
    name: string;
    price: number;
    quantity: number;
  };
}) {
  const { item } = props;
  const { name, price, quantity } = item;
  const { currencyFormatter } = formattingUtils;
  return (
    <li>
      <div>
        <p>{name}</p>
        <p>{currencyFormatter.format(price)}</p>
        <p>x{quantity}</p>
      </div>
      <div className="cart-item-actions">
        <Button isTextOnly={false}>+</Button>
        <Button isTextOnly={false}>-</Button>
      </div>
    </li>
  );
}
