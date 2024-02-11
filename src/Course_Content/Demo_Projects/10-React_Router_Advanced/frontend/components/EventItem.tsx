import * as React from 'react';
import * as RRD from 'react-router-dom';
import classes from './EventItem.module.css';

export type TEvent = {
  id: string;
  image: string;
  title: string;
  date: string;
  description: string;
};

export function EventItem(props: { event: TEvent }) {
  const { event } = props;
  const { title, image, date, description } = event;

  const submit = RRD.useSubmit();
  function startDeleteHandler() {
    // eslint-disable-next-line no-alert
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
      <menu className={classes.actions}>
        <RRD.Link to="edit">Edit</RRD.Link>
        <button type="button" onClick={startDeleteHandler}>
          Delete
        </button>
      </menu>
    </article>
  );
}
