import * as React from 'react';
import * as RRD from 'react-router-dom';
import { TEvent } from '../../types';

export function EventItem(props: //
{
  event: TEvent;
}) {
  const { event } = props;
  const { date } = event;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <article className="event-item">
      <img src={`http://localhost:3001/${event.image}`} alt={event.title} />
      <div className="event-item-content">
        <div>
          <h2>{event.title}</h2>
          <p className="event-item-date">{formattedDate}</p>
          <p className="event-item-location">{event.location}</p>
        </div>
        <p>
          <RRD.Link to={`/events/${event.id}`} className="button">
            View Details
          </RRD.Link>
        </p>
      </div>
    </article>
  );
}
