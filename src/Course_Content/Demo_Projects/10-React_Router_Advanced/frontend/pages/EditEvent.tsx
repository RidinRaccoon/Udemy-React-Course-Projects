import * as React from 'react';
import * as RRD from 'react-router-dom';
import { EventForm } from '../components/_index';
import { TLoaderData } from './EventDetail';

export function EditEventPage() {
  const data = RRD.useRouteLoaderData('event-detail') as TLoaderData;
  const { event } = data;

  const method = '';
  return <EventForm event={event} method={method} />;
}
