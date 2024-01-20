import * as React from 'react';
import * as ReactRedux from 'react-redux';
import classes from './Counter.module.css';
import * as Store from '../store/index';

export function Counter() {
  const dispatch = ReactRedux.useDispatch();
  const counter = ReactRedux.useSelector(
    (state: Store.TState) => state.counter.counter,
  );
  const show = ReactRedux.useSelector(
    (state: Store.TState) => state.counter.showCounter,
  );

  const incrementHandler = () => {
    // dispatch({ type: 'increment' });
    dispatch(Store.counterActions.increment());
  };
  const decrementHandler = () => {
    // dispatch({ type: 'decrement' });
    dispatch(Store.counterActions.decrement());
  };
  const increaseHandler = () => {
    // dispatch({ type: 'increase', payload: { amount: 5 } });
    dispatch(Store.counterActions.increase(5));
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle' });
    dispatch(Store.counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button type="button" onClick={incrementHandler}>
          Increment
        </button>
        <button type="button" onClick={increaseHandler}>
          Increment by 5
        </button>
        <button type="button" onClick={decrementHandler}>
          Decrement
        </button>
      </div>
      <button type="button" onClick={toggleCounterHandler}>
        Toggle Counter
      </button>
    </main>
  );
}
