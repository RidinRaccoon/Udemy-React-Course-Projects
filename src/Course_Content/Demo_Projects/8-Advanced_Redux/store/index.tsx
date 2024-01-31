/* eslint-disable import/no-extraneous-dependencies */
import * as RTK from '@reduxjs/toolkit';
import { uiSlice, TUIState } from './ui-slice';
import { cartSlice, TCartState } from './cart-slice';

export type TStoreState = {
  ui: TUIState;
  cart: TCartState;
};

export const store = RTK.configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});
