/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/default-param-last */
import * as ReduxTK from '@reduxjs/toolkit';
import { counterSlice } from './counter';
import { authSlice } from './auth';

export type TState = {
  auth: { isAuthenticated: boolean };
  counter: { counter: number; showCounter: boolean };
};


const store = ReduxTK.configureStore({
  reducer: { auth: authSlice.reducer, counter: counterSlice.reducer },
});

export default store;

/* EXAMPLE: Without slices */
/*
const initialState = { counter: 0, showCounter: true }; 
function counterReducer(state = initialState, action: TAction) {
  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }
  if (action.type === 'increment') {
    return {
      showCounter: state.showCounter,
      counter: state.counter + 1,
    };
  }
  if (action.type === 'decrement') {
    return {
      showCounter: state.showCounter,
      counter: state.counter - 1,
    };
  }
  if (action.type === 'increase') {
    return {
      showCounter: state.showCounter,
      counter: state.counter + action.payload.amount,
    };
  }
  return state;
} 

const store = Redux.createStore(counterReducer);

function counterSubscriber() {
  const latestState = store.getState();
  console.log(latestState);
}

store.subscribe(counterSubscriber); 

export default store;
*/
