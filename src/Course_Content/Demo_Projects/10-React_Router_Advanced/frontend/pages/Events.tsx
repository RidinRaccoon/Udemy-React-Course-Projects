import * as React from 'react';
import * as RRD from 'react-router-dom';
// Components / Types
import { EventsList, TEvent } from '../components/_index';

export type TLoaderData =
  | { events: TEvent[] }
  | {
      isError: boolean;
      message: string;
    };

export function EventsPage() {
  // const events = RRD.useLoaderData() as TEvent[];
  const data = RRD.useLoaderData() as TLoaderData;
  if ('isError' in data) {
    return <p>{data.message}</p>;
  }
  const { events } = data;

  return (
    <React.StrictMode>
      {events && <EventsList events={events} />}
    </React.StrictMode>
  );
}

export async function loader() {
  const response = await fetch('http://localhost:3001/events');
  if (!response.ok) {
    // const body = JSON.stringify({ message: "Couldn't fetch events." });
    // throw new Response(body, { status: 500 });
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw RRD.json({ message: "Couldn't fetch events," }, { status: 500 });
  }
  return response;

  /*   const data: TEventData = await response.json();
  return data.events; */
}
