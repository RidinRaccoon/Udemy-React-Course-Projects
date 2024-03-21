/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import classes from './Button.module.css';

export function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isTextOnly: Boolean;
  } & React.PropsWithChildren,
) {
  const { children, isTextOnly, className, ...btnElementProps } = props;
  let cssClasses = isTextOnly ? classes['text-button'] : classes.button;
  if (className) cssClasses += ` ${className}`;

  return (
    <button type="button" className={cssClasses} {...btnElementProps}>
      {children}
    </button>
  );
}
