import * as React from 'react';
import './Modal.css';

export type ModalHandler = {
  open(): void;
  close(): void;
};

/** UI Modal component \
* `PlacePickerApp` */
export function Modal(props: {
  open: boolean;
  onClose(): void;
  children: React.ReactNode;
}) {
  const { open, onClose, children } = props;
  const modal = React.useRef<HTMLDialogElement>(null);

  if (open) modal.current?.showModal();
  else modal.current?.close();

  return (
    <dialog className="modal" ref={modal} onClose={onClose}>
      {open ? children: null}
    </dialog>
  );
}
