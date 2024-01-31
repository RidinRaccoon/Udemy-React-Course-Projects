/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import * as RTK from '@reduxjs/toolkit';

export type TUIState = {
  cartIsVisible: boolean;
};

export const uiSlice = RTK.createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false },
  reducers: {
    toogle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
