import * as React from 'react';
import classes from './LoadingIndicator.module.css';

export function LoadingIndicator() {
  return (
    <div className={classes['lds-ring']}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
