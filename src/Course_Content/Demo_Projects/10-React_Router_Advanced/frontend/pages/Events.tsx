import * as React from 'react';
import * as RRD from 'react-router-dom';
// Components / Types
import { TEventsLoaderData } from '../types/_index';
import { EventsList } from '../components/_index';

export function EventsPage() {
  // const events = RRD.useLoaderData() as TEvent[];
  const data = RRD.useLoaderData() as TEventsLoaderData;
  const fallback = <p style={{ textAlign: 'center' }}>Loading...</p>;

  if ('isError' in data) {
    return <p>{data.message}</p>;
  }
  const { events } = data;

  return (
    <React.Suspense fallback={fallback}>
      <RRD.Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </RRD.Await>
    </React.Suspense>
  );
}

export async function loadEvents() {
  const response = await fetch('http://localhost:3001/events');
  if (!response.ok) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw RRD.json({ message: "Couldn't fetch events," }, { status: 500 });
  }
  const resData = await response.json();
  return resData.events;
}

export function loader() {
  return RRD.defer({
    events: loadEvents(),
  });
}
