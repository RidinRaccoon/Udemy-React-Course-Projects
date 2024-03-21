import * as React from 'react';
import classes from './ErrorBlock.module.css';

export function ErrorBlock(props: //
{
  title: string;
  message: string;
}) {
  const { title, message } = props;
  return (
    <div className={classes['error-block']}>
      <div className={classes['error-block-icon']}>!</div>
      <div className={classes['error-block-text']}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}
