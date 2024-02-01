/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import * as RTK from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';
import { AppDispatch } from './index';

type TItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
};
export type TCartState = {
  items: TItem[];
  totalQuantity: number;
};

const initialState: TCartState = {
  items: [],
  totalQuantity: 0,
};

export const cartSlice = RTK.createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(
      state,
      action: RTK.PayloadAction<{ id: string; title: string; price: number }>,
    ) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity += 1;
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
    },
    removeItemFromCart(state, action: RTK.PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity -= 1;
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity -= 1;
          existingItem.totalPrice -= existingItem.price;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export function sendCartData(cart: TCartState) {
  return async (dispatch: AppDispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'ending',
        title: 'Sending',
        message: 'Sending cart data.',
      }),
    );

    async function sendRequest() {
      const endpoint =
        'https://react-course---advanced-redux-default-rtdb' +
        '.europe-west1.firebasedatabase.app/cart.json';

      const response = await fetch(endpoint, {
        method: 'PUT',
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    }

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Sucess',
          message: 'Cart data sent successfully.',
        }),
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Failed to send cart data.',
        }),
      );
    }
  };
}
