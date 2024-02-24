import * as React from 'react';
import { CartContext, TCartContext, TUpdateCartParams } from './CartContext';
// import { TCartState } from '../types/types';

const DUMMY_CART_STATE = {
  items: [
    { id: 'm1', name: 'Spaghetti Carbonara', price: 9.99, quantity: 1 },
    { id: 'm2', name: 'Lasagna', price: 12.99, quantity: 2 },
  ],
  cartTotal: 35.97,
};
// const defaultCartState = {
//   items: [],
//   cartTotal: 0,
// };
export function CartContextProvider(props: React.PropsWithChildren) {
  const { children } = props;

  const [cartItems, setCartItems] = React.useState(DUMMY_CART_STATE.items);
  const [cartTotal, setCartTotal] = React.useState(DUMMY_CART_STATE.cartTotal);

  function addToCart(params: TUpdateCartParams) {
    const { item, price } = params;
    console.log(item);
    setCartItems([]);
    setCartTotal((prevTotal) => prevTotal + price);
  }
  function removeFromCart(params: TUpdateCartParams) {
    const { item, price } = params;
    console.log(item);
    setCartItems([]);
    setCartTotal((prevTotal) => prevTotal - price);
  }

  const cartContext: TCartContext = React.useMemo(
    () => ({
      state: {
        items: cartItems,
        cartTotal,
      },
      addToCart,
      removeFromCart,
    }),
    [cartItems, cartTotal],
  );
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
