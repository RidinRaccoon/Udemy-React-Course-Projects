import React from 'react';
import './Card.scss';

type CardProps = {
  className: string;
  children: React.ReactNode;
};
/**
 * Wrapper component
 * @prop className - CSS class added to the wrapper
 * @prop children - HTML/JSX elements wrapped by the function
 */
export function Card({ className, children }: CardProps) {
  const classes = `card ${className}`;
  return <div className={classes}>{children}</div>;
}
