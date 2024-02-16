import * as React from 'react';
import * as RRD from 'react-router-dom';
import * as authUtils from '../util/auth';
// Components
import { TEventDetailLoaderData } from '../types/_index';
import { EventItem, EventsList } from '../components/_index';

export function EventDetailPage() {
  const data = RRD.useRouteLoaderData('event-detail') as TEventDetailLoaderData;
  const { event, events } = data;

  const fallback = <p style={{ textAlign: 'center' }}>Loading...</p>;

  return (
    <>
      <React.Suspense fallback={fallback}>
        <RRD.Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </RRD.Await>
      </React.Suspense>
      <React.Suspense fallback={fallback}>
        <RRD.Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </RRD.Await>
      </React.Suspense>
    </>
  );
}

async function loadEvent(id: string) {
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
  const resData = await response.json();
  return resData.event;
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

export async function loader({ params }: RRD.LoaderFunctionArgs<any>) {
  const { id } = params;
  return RRD.defer({
    // TODO: Validate if event ID is defined
    event: await loadEvent(id!),
    events: loadEvents(),
  });
}

// Delete event action
export async function action({ params, request }: RRD.ActionFunctionArgs) {
  const eventId = params.id;
  
  const authToken = authUtils.getAuthToken();
  const response = await fetch(`http://localhost:3001/events/${eventId}`, {
    method: request.method,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  if (!response.ok) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw RRD.json({ message: "Couldn't delete event." }, { status: 500 });
  }

  return RRD.redirect('/events');
}
