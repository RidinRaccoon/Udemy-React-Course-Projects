import * as React from 'react';
// import * as RRD from 'react-router-dom';
// Components & Types
import { TEvent } from '../types/_index';
import { EventForm } from '../components/_index';

const newEvent: TEvent = {
  id: '',
  title: '',
  image: '',
  date: '',
  description: '',
};

export function NewEventPage() {
  return <EventForm event={newEvent} method="POST" />;
}
