import * as React from 'react';
import './DeletePlacePrompt.css';
/* type DeleteConfirmationProps = {
  onConfirm: () => void;
  onCancel: () => void;
}; */
/** */
export function DeletePlacePrompt(props: {
  onConfirm: () => void;
  onCancel: () => void;
}) {
  const { onConfirm, onCancel } = props;
  return (
    <div id="delete-confirmation">
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text" type="button">
          No
        </button>
        <button onClick={onConfirm} className="button" type="button">
          Yes
        </button>
      </div>
    </div>
  );
}
