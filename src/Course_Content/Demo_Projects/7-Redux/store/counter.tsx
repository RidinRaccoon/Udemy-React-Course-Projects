/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import * as ReduxTK from '@reduxjs/toolkit';

export type TCounterState = {
  counter: { counter: number; showCounter: boolean };
};

const initialCounterState = { counter: 0, showCounter: true };

export const counterSlice = ReduxTK.createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});