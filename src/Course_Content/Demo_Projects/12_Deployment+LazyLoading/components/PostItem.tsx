import * as React from 'react';
import classes from './PostItem.module.css';

export function PostItem(props: {
  post: {
    title: string;
    body: string;
  };
}) {
  const { post } = props;
  const { title, body } = post;
  return (
    <article className={classes.item}>
      <h1>{title}</h1>
      <p>{body}</p>
    </article>
  );
}
