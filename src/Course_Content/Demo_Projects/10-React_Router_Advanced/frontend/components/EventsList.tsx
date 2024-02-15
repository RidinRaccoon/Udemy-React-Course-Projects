import * as React from 'react';
import * as RRD from 'react-router-dom';
import classes from './EventsList.module.css';
// Components / Types
import { TEvent } from '../types/_index';

export function EventsList(props: { events: TEvent[] }) {
  const { events } = props;
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <RRD.Link to={`/events/${event.id}`}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </RRD.Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
