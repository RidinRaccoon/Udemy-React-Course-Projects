import * as React from 'react';
import { Header } from './components/Header';
import { Login } from './components/Login';
import './styles/index.css';

export function WorkingWithFormsApp() {
  return (
    <React.StrictMode>
      <Header />
      <main>
        <Login />
      </main>
    </React.StrictMode>
  );
}
