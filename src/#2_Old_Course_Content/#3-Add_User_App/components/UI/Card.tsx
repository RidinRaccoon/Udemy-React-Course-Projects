import React from 'react';
import styles from './Card.module.css';

type CardProps = {
  children: React.ReactNode;
  className: string;
};

/**
 * Customizable Wrapper component
 * @prop className - CSS class added to the wrapper
 * @prop children - HTML/JSX elements wrapped by the function
 */
export function Card({ children, className }: CardProps) {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
}
