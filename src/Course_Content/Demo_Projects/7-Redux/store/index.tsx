/* eslint-disable @typescript-eslint/default-param-last */
import * as Redux from 'redux';

export type TState = {
  counter: number;
  showCounter: boolean;
};
export type TAction =
  | {
      type: 'increment' | 'decrement' | 'toggle';
    }
  | { type: 'increase'; amount: number };

const initialState = { counter: 0, showCounter: true };

function counterReducer(state: TState = initialState, action: TAction) {
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
      counter: state.counter + action.amount,
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
