import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type: 'button' | 'submit' | 'reset';
};

/**
 * Creates a custom button element
 * @prop {string} text - text displayed in the button
 * @prop {string} type - button type [ 'button' | 'reset' | 'submit ]
 * @prop {function} onClick - onClick function for the button
 */
export function Button({ text, type = 'button', onClick }: ButtonProps) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  onClick: undefined,
};
