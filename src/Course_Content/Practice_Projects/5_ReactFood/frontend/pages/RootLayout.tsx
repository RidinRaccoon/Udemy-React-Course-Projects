import * as React from 'react';
import * as RRD from 'react-router-dom';
// Components & types
import { Header } from '../components/Header';

export function RootLayout() {
  return (
    <React.StrictMode>
      <Header />
      <main>
        <RRD.Outlet />
      </main>
    </React.StrictMode>
  );
}
