import * as React from 'react';
import classes from './Card.module.css';

type TCardProps = React.PropsWithChildren & React.HTMLProps<HTMLDivElement>;

export function Card(props: TCardProps) {
  // eslint-disable-next-line react/destructuring-assignment
  const className = props.className ? props.className : '';
  const { children } = props;

  return (
    <section className={`${classes.card} ${className}`}>{children}</section>
  );
}
