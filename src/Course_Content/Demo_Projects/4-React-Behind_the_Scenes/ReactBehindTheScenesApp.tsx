import React from 'react';
import './styles/index.css';
import { Counter } from './components/Counter/_index';
import { Header } from './components/Header';
import { log } from './utils/logger';

/** */
export function ReactBehindTheScenesApp() {
  log('<App /> rendered');

  const [enteredNumber, setEnteredNumber] = React.useState(0);
  const [chosenCount, setChosenCount] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEnteredNumber(+event.target.value);

  const handleSetClick = () => {
    setChosenCount(enteredNumber);
    setEnteredNumber(0);
  };

  return (
    <React.StrictMode>
      <Header />
      <main>
        <section id="configure-counter">
          <h2>Set Counter</h2>
          <input type="number" onChange={handleChange} value={enteredNumber} />
          <button type="button" onClick={handleSetClick}>
            Set
          </button>
        </section>
        <Counter initialCount={chosenCount} />
      </main>
    </React.StrictMode>
  );
}
