import React from 'react';
import { log } from '../../utils/logger';

/** */
function HistoryItem(props: { count: number }) {
  log('<HistoryItem /> rendered', 3);

  const [selected, setSelected] = React.useState(false);
  const { count } = props;

  const handleClick = () => setSelected((prevSelected) => !prevSelected);

  return (
    <li onClick={handleClick} className={selected ? 'selected' : 'undefined'}>
      {count}
    </li>
  );
}

export function CounterHistory(props: { history: number[] }) {
  log('<CounterHistory /> rendered', 2);
  const { history } = props;
  return (
    <ol>
      {history.map((count, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <HistoryItem key={index} count={count} />
      ))}
    </ol>
  );
}
