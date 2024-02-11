import * as React from 'react';
import * as RRD from 'react-router-dom';
// Components
import { TEventDetailLoaderData } from '../types/_index';
import { EventItem } from '../components/_index';

export function EventDetailPage() {
  const data = RRD.useRouteLoaderData('event-detail') as TEventDetailLoaderData;
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

export async function action({ params, request }: RRD.ActionFunctionArgs) {
  const eventId = params.id;
  const response = await fetch(`http://localhost:3001/events/${eventId}`, {
    method: request.method,
  });

  if (!response.ok) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw RRD.json({ message: "Couldn't delete event." }, { status: 500 });
  }

  return RRD.redirect('/events');
}
