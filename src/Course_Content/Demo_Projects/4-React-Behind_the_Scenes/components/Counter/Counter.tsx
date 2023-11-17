import React from 'react';
import { CounterOutput } from './CounterOutput';
import { IconButton, MinusIcon, PlusIcon } from '../UI/_index';
import { log } from '../../utils/logger';
import * as History from './CounterHistory';

/** Checks if `number` is a prime number */
function isPrime(number: number) {
  log('Calculating if is prime number', 2, 'other');

  if (number <= 1) return false;

  const limit = Math.sqrt(number);
  for (let i = 2; i <= limit; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
}

/** Creates a counter display with increment and decrement buttons. \
 * Also calculates if `initial value` is a prime number.
 */
export function Counter(props: { initialValue: number }) {
  log('<Counter /> rendered', 1);

  const { initialValue } = props;
  const initialHistory = History.createHistoryItem(initialValue);
  const [counterHistory, setCounterHistory] = React.useState([initialHistory]);

  // Reset counter history when new counter value is selected
  React.useEffect(() => {
    setCounterHistory([History.createHistoryItem(initialValue)]);
  }, [initialValue]);

  const initialValueIsPrime = React.useMemo(
    () => isPrime(initialValue),
    [initialValue],
  );

  const counterValue = counterHistory.reduce(
    (sum: number, historyItem) => sum + historyItem.value,
    0,
  );

  /** Updates `counterHistory` state */
  const handleIncrement = React.useCallback(
    () =>
      setCounterHistory((prevHistory) => [
        History.createHistoryItem(1),
        ...prevHistory,
      ]),
    [],
  );
  /** Updates `counterHistory` state */
  const handleDecrement = React.useCallback(
    () =>
      setCounterHistory((prevHistory) => [
        History.createHistoryItem(-1),
        ...prevHistory,
      ]),
    [],
  );

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialValue}</strong>. It{' '}
        <strong>is {initialValueIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={counterValue} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>

      <History.CounterHistory history={counterHistory} />
    </section>
  );
}
