/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import * as RTK from '@reduxjs/toolkit';

type TItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
};
type TAddItem = {
  id: string;
  title: string;
  price: number;
};
export type TCartState = {
  items: TItem[];
  totalQuantity: number;
  cartTotal: number;
  changed: boolean;
};

const initialState: TCartState = {
  items: [],
  totalQuantity: 0,
  changed: false,
  cartTotal: 0,
};

export const cartSlice = RTK.createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart(state, action: RTK.PayloadAction<TCartState>) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      state.cartTotal = action.payload.cartTotal;
    },
    addItemToCart(state, action: RTK.PayloadAction<TAddItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      }
      const newTotal = (state.cartTotal + newItem.price).toFixed(2);
      state.cartTotal = Number(newTotal);
      state.totalQuantity += 1;
      state.changed = true;
    },
    removeItemFromCart(state, action: RTK.PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity -= 1;
          existingItem.totalPrice -= existingItem.price;
        }
        const newTotal = (state.cartTotal - existingItem.price).toFixed(2)
        state.cartTotal = Number(newTotal);
        state.totalQuantity -= 1;
        state.changed = true;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
