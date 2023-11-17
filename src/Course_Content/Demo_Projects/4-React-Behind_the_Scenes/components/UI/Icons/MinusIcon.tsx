/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { log } from '../../../utils/logger';

export function MinusIcon(props: React.SVGProps<SVGSVGElement>) {
  log('<MinusIcon /> rendered', 3);

  return (
    <React.StrictMode>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
      </svg>
    </React.StrictMode>
  );
}
