import * as React from 'react';
// Components & Types
import { TCartItem } from '../types/types';

export type TUpdateCartParams = {
  id: string;
  name: string;
  price: number;
};

export type TCartState = {
  items: TCartItem[];
  cartTotal: number;
};

export type TCartContext = {
  state: TCartState;
  addToCart(args: TUpdateCartParams): void;
  removeFromCart(args: TUpdateCartParams): void;
};

export const CartContext = React.createContext<TCartContext>({
  state: { items: [], cartTotal: 0 },
  addToCart: () => {},
  removeFromCart: () => {},
});
