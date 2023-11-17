import React from 'react';
import { Header } from './components/Header';
import { Counter, ConfigureCounter } from './components/Counter/_index';
import { log } from './utils/logger';
import './styles/index.css';

/** Renders two counters with separate history. \
 * The value for the first counter can be set by the user. */
export function ReactBehindTheScenesApp() {
  log('<App /> rendered');

  const [counterValue, setcounterValue] = React.useState(0);
  const handleSetCount = React.useCallback(
    (newCounterValue: number) => setcounterValue(newCounterValue),
    [],
  );
  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <Counter initialValue={counterValue} />
        <Counter initialValue={counterValue} />
        <Counter initialValue={0} />
      </main>
    </>
  );
}
