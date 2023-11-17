/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { log } from '../../../utils/logger';

export function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  log('<PlusIcon /> rendered', 3);

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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </React.StrictMode>
  );
}
