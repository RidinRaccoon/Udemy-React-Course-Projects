import * as React from 'react';
import * as RRD from 'react-router-dom';
// Components
import { EventForm } from '../components/_index';

export function NewEventPage() {
  const newEvent = {};
  const method = '';
  return <EventForm event={newEvent} method={method} />;
}

export async function action({ request }: RRD.ActionFunctionArgs) {
  const data = await request.formData();

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  const response = await fetch('http://localhost:3001/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw RRD.json({ message: "Couldn't save event." }, { status: 500 });
  }

  return RRD.redirect('/events');
}
