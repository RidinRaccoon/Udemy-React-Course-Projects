import * as React from 'react';
import * as RRD from 'react-router-dom';
import classes from './EventItem.module.css';
// Components & Types
import { TEvent } from '../types/_index';

export function EventItem(props: { event: TEvent }) {
  const authToken = RRD.useRouteLoaderData('root') as string;
  const { event } = props;
  const { title, image, date, description } = event;

  const submit = RRD.useSubmit();
  function startDeleteHandler() {
    // eslint-disable-next-line no-alert
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.event}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <time>{date}</time>
      <p>{description}</p>
      {authToken && (
        <menu className={classes.actions}>
          <RRD.Link to="edit">Edit</RRD.Link>
          <button type="button" onClick={startDeleteHandler}>
            Delete
          </button>
        </menu>
      )}
    </article>
  );
}
