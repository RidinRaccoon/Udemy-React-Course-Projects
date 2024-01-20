/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/default-param-last */
// import * as Redux from 'redux';
import * as ReduxTK from '@reduxjs/toolkit';

export type TState = {
  auth: { isAuthenticated: boolean };
  counter: { counter: number; showCounter: boolean };
};

/* EXAMPLE: With slices */
const initialAuthState = { isAuthenticated: false };

const authSlice = ReduxTK.createSlice({
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

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = ReduxTK.createSlice({
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

const store = ReduxTK.configureStore({
  reducer: { auth: authSlice.reducer, counter: counterSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

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
