import React from 'react';
import { log } from '../../utils/logger';

/** Allows selecting an initial value for a counter \
 * The selected value is returned with the `onSet` prop
 */
export function ConfigureCounter(props: {
  onSet(newCounterValue: number): void;
}) {
  log('<ConfigureCounter /> rendered', 2);

  const { onSet } = props;
  const [enteredNumber, setEnteredNumber] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEnteredNumber(+event.target.value);

  const handleSetClick = () => {
    onSet(enteredNumber);
    setEnteredNumber(0);
  };
  
  return (
    <section id="configure-counter">
      <h2>Set Counter:</h2>
      <input type="number" onChange={handleChange} value={enteredNumber} />
      <button type="button" onClick={handleSetClick}>
        Set
      </button>
    </section>
  );
}
