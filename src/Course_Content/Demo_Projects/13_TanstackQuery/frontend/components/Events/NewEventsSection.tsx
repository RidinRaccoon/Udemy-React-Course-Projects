// @ts-nocheck
import * as React from 'react';
// Components
import { LoadingIndicator, ErrorBlock } from '../UI/_index';
import { EventItem } from './EventItem';

export function NewEventsSection() {
  const [data, setData] = React.useState();
  const [error, setError] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch('http://localhost:3001/events');

      if (!response.ok) {
        const newError = new Error('An error occured while fecthing events.');
        newError.code = response.status;
        newError.info = await response.json();
        throw newError;
      }

      const { events } = await response.json();
      return events;
    }

    fetchEvents()
      .then((events) => {
        setData(events);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  let content;

  if (isLoading) content = <LoadingIndicator />;
  if (error) {
    content = (
      <ErrorBlock title="An error occurred" message="Failed to fetch events" />
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
