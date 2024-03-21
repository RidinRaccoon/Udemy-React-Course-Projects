import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classes from './Modal.module.css';

export function Modal(props: React.PropsWithChildren) {
  const dialog = React.useRef<HTMLDialogElement>(null);
  const { children } = props;

  React.useEffect(() => {
    // Using useEffect to sync the Modal component with the DOM Dialog API
    // This code will open the native <dialog> via it's built-in API whenever
    // the <Modal> component is rendered
    const modal = dialog.current;
    modal!.showModal();

    return () => {
      modal!.close(); // needed to avoid error being thrown
    };
  }, []);

  return ReactDOM.createPortal(
    <dialog className={classes.modal} ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('modal')!,
  );
}
