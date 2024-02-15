/* eslint-disable no-param-reassign */
import * as ReduxTK from '@reduxjs/toolkit';

export type TAuthState = {
  auth: { isAuthenticated: boolean };
};

const initialAuthState = { isAuthenticated: false };

export const authSlice = ReduxTK.createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});