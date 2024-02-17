// @ts-nocheck
import * as React from 'react';
import * as RRD from 'react-router-dom';
// Components
import { Header } from '../Header';
import { EventsIntroSection } from './EventsIntroSection';
import { FindEventSection } from './FindEventSection';
import { NewEventsSection } from './NewEventsSection';

export function Events() {
  return (
    <>
      <RRD.Outlet />
      <Header>
        <RRD.Link to="/events/new" className="button">
          New Event
        </RRD.Link>
      </Header>
      <main>
        <EventsIntroSection />
        <NewEventsSection />
        <FindEventSection />
      </main>
    </>
  );
}
