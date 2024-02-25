/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

export function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isTextOnly: Boolean;
  } & React.PropsWithChildren,
) {
  const { children, isTextOnly, className, ...btnElementProps } = props;
  let cssClasses = isTextOnly ? 'text-button' : 'button';
  if (className) cssClasses += ` ${className}`;

  return (
    <button type="button" className={cssClasses} {...btnElementProps}>
      {children}
    </button>
  );
}
