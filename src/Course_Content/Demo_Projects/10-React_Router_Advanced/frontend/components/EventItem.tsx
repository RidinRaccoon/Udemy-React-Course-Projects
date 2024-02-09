import * as React from 'react';
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
  
  function startDeleteHandler() {
    // ...
  }

  return (
    <article className={classes.event}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <time>{date}</time>
      <p>{description}</p>
      <menu className={classes.actions}>
        <a href="edit">Edit</a>
        <button type="button" onClick={startDeleteHandler}>
          Delete
        </button>
      </menu>
    </article>
  );
}
