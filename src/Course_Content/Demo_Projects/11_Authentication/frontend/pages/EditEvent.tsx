import * as React from 'react';
import * as RRD from 'react-router-dom';
import { EventForm } from '../components/_index';
import { TEventDetailLoaderData } from '../types/_index';

export function EditEventPage() {
  const data = RRD.useRouteLoaderData('event-detail') as TEventDetailLoaderData;
  const { event } = data;

  return <EventForm event={event} method="PATCH" />;
}
