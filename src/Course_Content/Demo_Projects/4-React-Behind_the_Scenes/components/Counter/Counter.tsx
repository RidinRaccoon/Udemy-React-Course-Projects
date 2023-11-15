import React from 'react';

import { IconButton, MinusIcon, PlusIcon } from '../UI/_index';
import { CounterOutput } from './CounterOutput';
import { log } from '../../utils/logger';

/** Checks if `number` it's a prime number */
function isPrime(number: number) {
  log('Calculating if is prime number', 2, 'other');

  if (number <= 1) return false;

  const limit = Math.sqrt(number);
  for (let i = 2; i <= limit; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
}

export function Counter(props: { initialCount: number }) {
  log('<Counter /> rendered', 1);
  const { initialCount } = props;
  const initialCountIsPrime = isPrime(initialCount);

  const [counter, setCounter] = React.useState(initialCount);

  const handleDecrement = () => setCounter((prevCounter) => prevCounter - 1);
  const handleIncrement = () => setCounter((prevCounter) => prevCounter + 1);

  console.log( typeof MinusIcon);
  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={counter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
    </section>
  );
}
