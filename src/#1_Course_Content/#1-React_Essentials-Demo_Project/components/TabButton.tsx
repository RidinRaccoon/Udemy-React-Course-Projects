import React from 'react';

type TabButtonProps = {
  children: React.ReactNode;
  onSelect: React.MouseEventHandler<HTMLButtonElement>;
  active: boolean;
};

/**
 * Renders a customizable button
 * @prop {boolean} active - highlights the button
 * @prop {React.MouseEventHandler<HTMLButtonElement>} onSelect - onClick function
 * @prop {React.ReactNode} children - Text/JSX inside the button
 *
 */
export function TabButton({ active, onSelect, children }: TabButtonProps) {
  return (
    <li>
      <button className={active ? 'active' : undefined} type="button" onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
