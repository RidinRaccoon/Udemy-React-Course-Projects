import * as React from 'react';
import classes from './PageContent.module.css';

export function PageContent(
  props: {
    title: string;
  } & React.PropsWithChildren,
) {
  const { title, children } = props;
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
