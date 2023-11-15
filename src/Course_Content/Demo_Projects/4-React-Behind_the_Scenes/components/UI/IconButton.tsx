/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { log } from '../../utils/logger';

export function IconButton(
  props: {
    children: React.ReactNode;
    icon: React.FC;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  log('<IconButton /> rendered', 2);

  const {children, icon, ...rest} = props;
  const Icon = icon;
  return (
    <button {...rest} className="button" type="button">
      <Icon /* className="button-icon" */ />
      <span className="button-text">{children}</span>
    </button>
  );
}
