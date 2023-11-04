import React from 'react';
import { Button } from './UI/Button';
import { Card } from './UI/Card';
// STYLES
import styles from './ErrorModal.module.css';

export type Error = {
  title: string;
  message: string;
};

type ErrorModalProps = {
  error: Error;
  onClose: () => void;
};

/**
 * Displays an error model with the selected title and list of errors.
 * @prop {Error} - Error object with title and message
 */
export function ErrorModal({ error, onClose }: ErrorModalProps) {
  const closeModalHandler = () => {
    onClose();
  };
  return (
    <div className={`${styles.backdrop}`}>
      <Card className={`${styles['error-modal']}`}>
        <section className={`${styles.content}`}>
          <h2>{error.title}</h2>
          <p>{error.message}</p>
        </section>
        <section className={`${styles.options}`}>
          <Button type="submit" text="Ok" onClick={closeModalHandler} />
        </section>
      </Card>
    </div>
  );
}
