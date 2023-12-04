import React from 'react';

export function Error(props: {
  title: string;
  message: string;
  onConfirm: () => void;
}) {
  const { title, message, onConfirm } = props;
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{message}</p>
      {onConfirm && (
        <div id="confirmation-actions">
          <button type="button" onClick={onConfirm} className="button">
            Okay
          </button>
        </div>
      )}
    </div>
  );
}
