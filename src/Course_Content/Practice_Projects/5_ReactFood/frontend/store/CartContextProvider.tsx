import * as React from 'react';
import { CartContext, TCartContext, TUpdateCartParams } from './CartContext';
// import { TCartState } from '../types/types';

/* const DUMMY_CART_STATE = {
  items: [
    { id: 'm1', name: 'Spaghetti Carbonara', price: 9.99, quantity: 1 },
    { id: 'm2', name: 'Lasagna', price: 12.99, quantity: 2 },
  ],
  cartTotal: 35.97,
}; */
const defaultCartState = {
  items: [] as { id: string; name: string; price: number; quantity: number }[],
  cartTotal: 0,
};
export function CartContextProvider(props: React.PropsWithChildren) {
  const { children } = props;

  const [cartItems, setCartItems] = React.useState(defaultCartState.items);
  const [cartTotal, setCartTotal] = React.useState(defaultCartState.cartTotal);

  function addToCart(params: TUpdateCartParams) {
    const { id, name, price } = params;
    console.log(name);

    setCartItems((prevItems) => {
      // Already in Cart
      let newCart;
      const cartItem = prevItems.find((item) => item.id === id);
      if (cartItem) {
        const updatedItem = { ...cartItem, quantity: cartItem.quantity + 1 };
        const remainingItems = prevItems.filter((item) => item.id !== id);
        newCart = [updatedItem, ...remainingItems];
      } else {
        // Not in cart
        const newItem = { id, name, price, quantity: 1 };
        newCart = [newItem, ...prevItems];
      }
      setCartTotal((prevTotal) => prevTotal + price * 1);
      return newCart;
    });
  }
  function removeFromCart(params: TUpdateCartParams) {
    const { name, price } = params;
    console.log(name);
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
