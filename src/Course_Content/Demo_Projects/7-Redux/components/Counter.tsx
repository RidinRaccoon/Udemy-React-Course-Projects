import * as React from 'react';
import classes from './Counter.module.css';

export function Counter() {
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE --</div>
      <button type="button" onClick={toggleCounterHandler}>
        Toggle Counter
      </button>
    </main>
  );
}
