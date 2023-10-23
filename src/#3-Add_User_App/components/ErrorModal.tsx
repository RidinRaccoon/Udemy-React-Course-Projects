import React, { useEffect } from 'react';
import { Card } from './UI/Card';

export type Error = {
  id: string;
  message: string
};

type ErrorModalProps = {
  title: string;
  errors: Error[];
};

/**
 * Displays an error model with the selected title and list of errors.
 * @prop {string} title - title of the modal window
 * @prop {Error[]} errors - list of errors
 */
export function ErrorModal({ title, errors }: ErrorModalProps) {
  useEffect(() => {
    if (errors.length > 0) {
      document.querySelector('dialog')?.showModal();
    }
  }, [errors]);

  return (
    <React.StrictMode>
      <dialog>
        <Card className="error-modal">
          <section>
            <h2>{title}</h2>
            <ul>
              {errors.map((error) => (
                <li key={error.id}>{error.message}</li>
              ))}
            </ul>
          </section>
        </Card>
      </dialog>
    </React.StrictMode>
  );
}
