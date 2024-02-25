import * as React from 'react';
import { CartContext, TCartContext, TUpdateCartParams } from './CartContext';
// Components & Types
import { TCartItem } from '../types/types';

const defaultCartState = {
  items: [] as TCartItem[],
  cartTotal: 0,
};
export function CartContextProvider(props: React.PropsWithChildren) {
  const { children } = props;

  const [cartItems, setCartItems] = React.useState(defaultCartState.items);
  const [cartTotal, setCartTotal] = React.useState(defaultCartState.cartTotal);

  function addToCart(params: TUpdateCartParams) {
    const { id, name, price } = params;

    setCartItems((prevItems) => {
      let newCart;
      const cartItem = prevItems.find((item) => item.id === id);
      // Already in Cart
      if (cartItem) {
        const updatedItem = { ...cartItem, quantity: cartItem.quantity + 1 };
        const remainingItems = prevItems.filter((item) => item.id !== id);
        newCart = [updatedItem, ...remainingItems];
      } else {
        // Not in cart
        const newItem = { id, name, price, quantity: 1 };
        newCart = [newItem, ...prevItems];
      }
      setCartTotal((prevTotal) => parseFloat((prevTotal + price).toFixed(2)));
      return newCart;
    });
  }
  function removeFromCart(params: TUpdateCartParams) {
    const { id, name, price } = params;
    setCartItems((prevItems) => {
      let newCart;
      const cartItem = prevItems.find((item) => item.id === id);
      if (!cartItem) return prevItems;

      const remainingItems = prevItems.filter((item) => item.id !== id);
      if (cartItem.quantity === 1) newCart = [...remainingItems];
      else {
        const updatedItem = {
          id,
          name,
          price,
          quantity: cartItem.quantity - 1,
        };
        newCart = [updatedItem, ...remainingItems];
      }

      setCartTotal((prevTotal) => parseFloat((prevTotal - price).toFixed(2)));
      return newCart;
    });
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
