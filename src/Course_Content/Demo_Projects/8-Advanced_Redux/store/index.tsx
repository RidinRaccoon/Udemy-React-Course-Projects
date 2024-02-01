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

// https://redux.js.org/tutorials/typescript-quick-start
// Infer the 'RootState' and 'AppDispatch' types from the store iteslf
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {ui: uiState, cart: cartstate}
export type AppDispatch = typeof store.dispatch;