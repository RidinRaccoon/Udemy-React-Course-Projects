// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import * as RQ from '@tanstack/react-query';
import * as httpUtils from '../../utils/http';
// Components
import { LoadingIndicator, ErrorBlock } from '../UI/_index';
import { EventItem } from './EventItem';

export function NewEventsSection() {
  const queryResults = RQ.useQuery({
    queryKey: ['events', { max: 3 }],
    queryFn: ({ signal, queryKey }) =>
      httpUtils.fetchEvents({ signal, ...queryKey[1] }),
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