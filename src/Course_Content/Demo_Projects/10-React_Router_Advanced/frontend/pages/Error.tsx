import * as React from 'react';
import { MainNavigation } from '../components/MainNavigation';

export function ErrorPage(){
  return <React.StrictMode>
    <MainNavigation />
    <main>
      <h1>An error occurred!</h1>
      <p>Couldn&apos;t find this page.</p>
    </main>
  </React.StrictMode>
}