import * as React from 'react';
import classes from './ModalWindow.module.css';

export function ModalWindow(props: React.PropsWithChildren) {
  const { children } = props;
  return (
    <div className={classes['modal-backdrop']}>
      <div className={classes['modal-content']}>{children}</div>
    </div>
  );
}
