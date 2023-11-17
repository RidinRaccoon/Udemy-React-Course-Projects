import React from 'react';
import { log } from '../../utils/logger';

export type THistoryItem = {
  id: string;
  value: number;
};

/** Creates a new item for the `<CounterHistory />` list */
export function createHistoryItem(value: number) {
  const item: THistoryItem = { id: String(Math.random()), value };
  return item;
}

/** Renders a `CounterHistory` row */
function HistoryItem(props: { value: number }) {
  log('<HistoryItem /> rendered', 3);

  const [selected, setSelected] = React.useState(false);
  const { value } = props;
  const handleClick = () => {
    setSelected((prevSelected) => !prevSelected);
  };

  return (
    <tr>
      <td onClick={handleClick} className={selected ? 'selected' : 'undefined'}>
        {value}
      </td>
    </tr>
  );
}

/** Renders a table with the counter input history. \
 * The initial value is not rendered. */
export function CounterHistory(props: { history: THistoryItem[] }) {
  log('<CounterHistory /> rendered', 2);
  const { history } = props;

  return (
    <table>
      <tbody>
        {history.map(
          (count, index) =>
            // Skip initial counter value
            index < history.length - 1 && (
              <HistoryItem key={count.id} value={count.value} />
            ),
        )}
      </tbody>
    </table>
  );
}
