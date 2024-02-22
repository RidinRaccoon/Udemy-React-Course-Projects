import * as React from 'react';
import * as RQ from '@tanstack/react-query';
import * as httpUtils from '../../utils/http';
// Components
import { LoadingIndicator, ErrorBlock } from '../UI';
import { EventItem } from './EventItem';
import { TCustomError, TEvent } from '../../types/types';

export function NewEventsSection() {
  const eventQueryLimit = 3;
  const queryResults = RQ.useQuery<TEvent[], TCustomError>({
    queryKey: ['events', { max: eventQueryLimit }],
    queryFn: ({ signal }) =>
      httpUtils.fetchEvents({ signal, max: eventQueryLimit }),
    staleTime: 5000,
  });

  const { data, isPending, isError, error } = queryResults;

  let content;
  if (isPending) content = <LoadingIndicator />;

  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error.info?.message || 'Failed to fetch events'}
      />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recentrly added events</h2>
      </header>
      {content}
    </section>
  );
}
