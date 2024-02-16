import * as React from 'react';
import * as RRD from 'react-router-dom';
// Components
import { MainNavigation } from '../../components/_index';

export function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <RRD.Outlet />
      </main>
    </>
  );
}
