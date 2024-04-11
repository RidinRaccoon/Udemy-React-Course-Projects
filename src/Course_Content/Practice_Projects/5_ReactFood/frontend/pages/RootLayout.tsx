import * as React from 'react';
import * as RRD from 'react-router-dom';
// Components & types
import { ModalProvider } from '../store/ModalContex';
import { Header } from '../components/Header';

export function RootLayout() {
  return (
    <React.StrictMode>
      <ModalProvider>
        <Header />
        <main>
          <RRD.Outlet />
        </main>
      </ModalProvider>
    </React.StrictMode>
  );
}
