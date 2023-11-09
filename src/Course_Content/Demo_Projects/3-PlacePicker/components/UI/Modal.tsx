import * as React from 'react';
import './Modal.css';

export type ModalHandler = {
  open: () => void;
  close: () => void;
};

type ModalProps = {
  children: React.ReactNode;
};
/** */
export const Modal = React.forwardRef<ModalHandler, ModalProps>(
  ({ children }, ref) => {
    const modal = React.useRef<HTMLDialogElement>(null);

    // prettier-ignore
    React.useImperativeHandle(ref, () => ({
      open: () => { modal.current?.showModal() },
      close: () => { modal.current?.close() },
    }));

    return (
      <dialog className="modal" ref={modal}>
        {children}
      </dialog>
    );
  },
);

Modal.displayName = 'Modal';
