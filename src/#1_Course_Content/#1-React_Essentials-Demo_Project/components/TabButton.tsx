import React from 'react';

type TabButtonProps = {
  children: React.ReactNode;
  onSelect: () => void;
  active: boolean;
};

export function TabButton({ active, onSelect, children }: TabButtonProps) {
  return (
    <li>
      <button className={active ? 'active' : undefined} type="button" onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
