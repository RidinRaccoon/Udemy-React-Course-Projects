/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import * as RTK from '@reduxjs/toolkit';

type TNotification = {
  status: string;
  title: string;
  message: string;
};

export type TUIState = {
  cartIsVisible: boolean;
  notification: TNotification;
};

const initialState: TUIState = {
  cartIsVisible: false,
  notification: { status: '', title: '', message: '' },
};

export const uiSlice = RTK.createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toogle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action: RTK.PayloadAction<TNotification>) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
