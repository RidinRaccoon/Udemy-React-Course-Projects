import * as React from 'react';
// Components & types
import { TCartItem } from '../types/types';

export type TUpdateCartParams = {
  id: string;
  name: string;
  price: number;
};

export type TCartState = {
  items: TCartItem[];
};

export type TCartContext = {
  state: TCartState;
  addToCart(args: TUpdateCartParams): void;
  removeFromCart(args: TUpdateCartParams): void;
};

export const CartContext = React.createContext<TCartContext>({
  state: { items: [] },
  addToCart: () => {},
  removeFromCart: () => {},
});
