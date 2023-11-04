import React from 'react';
import './Card.css';

type CardProps = {
  className: string;
  children: React.ReactNode;
};
/**
 * Wrapper component
 * @prop { string } className - CSS class added to the wrapper
 * @prop { JSX } children - HTML/JSX elements wrapped by the function
 */
export function Card({ className, children }: CardProps) {
  const classes = `card ${className}`;
  return <div className={classes}>{children}</div>;
}
