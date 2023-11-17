import React from 'react';
import { Users } from './components/Users';
import './styles/index.css';

export function ClassBasedComponentsApp() {
  return (
    <React.StrictMode>
      <Users />
    </React.StrictMode>
  );
}
