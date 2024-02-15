import * as React from 'react';
import * as RRD from 'react-router-dom';
// Components
import { EventsNavigation } from '../../components/_index';

export function EventsLayout() {
  return (
    <React.StrictMode>
      <EventsNavigation />
      <main>
        <RRD.Outlet />
      </main>
    </React.StrictMode>
  );
}