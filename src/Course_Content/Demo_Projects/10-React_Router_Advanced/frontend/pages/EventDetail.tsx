import * as React from 'react';
import * as RRD from 'react-router-dom';
// Components
import { EventItem, TEvent } from '../components/_index';

export type TLoaderData = { event: TEvent };

export function EventDetailPage() {
  const data = RRD.useRouteLoaderData('event-detail') as TLoaderData;
  const { event } = data;
  return <EventItem event={event} />;
}

export async function loader({ params }: RRD.LoaderFunctionArgs<any>) {
  const { id } = params;

  const response = await fetch(`http://localhost:3001/events/${id}`);
  if (!response.ok) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw RRD.json(
      {
        message: "Couldn't fetch details for the selected event.",
      },
      { status: 500 },
    );
  }
  return response;
}
