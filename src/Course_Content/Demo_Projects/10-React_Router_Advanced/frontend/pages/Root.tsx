import * as React from 'react';
import * as RRD from 'react-router-dom';
// Components
import { MainNavigation } from '../components/MainNavigation';

export function RootLayout() {
  return (
    <React.StrictMode>
      <MainNavigation />
      <main>
        <RRD.Outlet />
      </main>
    </React.StrictMode>
  );
}
