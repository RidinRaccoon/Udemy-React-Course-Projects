/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import * as RTK from '@reduxjs/toolkit';

type TNotification = {
  status: string;
  title: string;
  message: string;
} | null;

export type TUIState = {
  cartIsVisible: boolean;
  notification: TNotification;
};

export const uiSlice = RTK.createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false, notification: null } as TUIState,
  reducers: {
    toogle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
