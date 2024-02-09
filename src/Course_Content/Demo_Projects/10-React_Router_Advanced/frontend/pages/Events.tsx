import * as React from 'react';
// Components / Types
import { EventsList, TEvent } from '../components/_index';

const DUMMY_EVENTS: TEvent[] = [
  {
    id: 'ev01',
    title: 'Event 1',
    image: '',
    date: '2024/02/09',
    description: 'Event 1 description',
  },
  {
    id: 'ev02',
    title: 'Event 2',
    image: '',
    date: '2024/02/24',
    description: 'Event 2 description',
  },
  {
    id: 'ev03',
    title: 'Event 3',
    image: '',
    date: '2024/03/10',
    description: 'Event 3 description',
  },
  {
    id: 'ev04',
    title: 'Event 4',
    image: '',
    date: '2024/02/13',
    description: 'Event 4 description',
  },
];

export function EventsPage() {
  return <EventsList events={DUMMY_EVENTS} />;
}
