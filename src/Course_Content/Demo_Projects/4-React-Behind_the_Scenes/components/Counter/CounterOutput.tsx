import React from 'react';
import { log } from '../../utils/logger';

/** */
export function CounterOutput(props: { value: number }) {
  log('<CounterOutput /> rendered', 2);

  const { value } = props;
  const cssClass = value >= 0 ? 'counter-output' : 'counter-output negative';

  return <span className={cssClass}>{value}</span>;
}
