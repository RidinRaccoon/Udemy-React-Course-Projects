import * as React from 'react';

export type TCartState = {
  items: { id: string; name: string; price: number; quantity: number }[];
  cartTotal: number;
};

export type TCartContext = {
  state: TCartState;
  addToCart(args: TUpdateCartParams): void;
  removeFromCart(args: TUpdateCartParams): void;
};

export type TUpdateCartParams = {
  item: string;
  price: number;
};

export const CartContext = React.createContext<TCartContext>({
  state: { items: [], cartTotal: 0 },
  addToCart: () => {},
  removeFromCart: () => {},
});
