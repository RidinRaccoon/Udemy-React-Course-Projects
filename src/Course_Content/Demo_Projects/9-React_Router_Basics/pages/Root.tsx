import * as React from 'react';
import * as RDM from 'react-router-dom';
// Components
import { MainNavigation } from '../components/MainNavigation';

export function RootLayout() {
  return (
    <React.StrictMode>
      <MainNavigation />
      <main>
        <RDM.Outlet />
      </main>
    </React.StrictMode>
  );
}
