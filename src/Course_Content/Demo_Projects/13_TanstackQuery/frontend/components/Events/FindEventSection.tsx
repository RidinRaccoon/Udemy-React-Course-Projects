import * as React from 'react';
import * as RQ from '@tanstack/react-query';
import * as httpUtils from '../../utils/http';
// Components
import { TCustomError, TEvent } from '../../types';
import { ErrorBlock, LoadingIndicator } from '../UI';
import { EventItem } from './EventItem';

export function FindEventSection() {
  const searchElement = React.useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = React.useState<string>();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchTerm(searchElement.current?.value || '');
  }

  const queryResults = RQ.useQuery<TEvent[], TCustomError, TEvent[]>({
    queryKey: ['events', { searchTerm }],
    queryFn: ({ signal }) => httpUtils.fetchEvents({ signal, searchTerm }),
    enabled: searchTerm !== undefined,
  });

  const { data, isLoading, isError, error } = queryResults;
  let content = <p>Please enter a search term to find events.</p>;

  if (isLoading) content = <LoadingIndicator />;

  if (isError) {
    const errorTitle = 'An error occurred';
    const errorMsg = error.info?.message || 'Failed to fetch events.';
    content = <ErrorBlock title={errorTitle} message={errorMsg} />;
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
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            ref={searchElement}
            defaultValue={searchTerm}
            placeholder="Search events"
          />
          <button type="submit">Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
