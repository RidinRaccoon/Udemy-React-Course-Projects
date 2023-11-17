import React from 'react';
import classes from './User.module.css';

/** */
// eslint-disable-next-line react/function-component-definition
export const User = (props: { name: string }) => {
  const { name } = props;

  return <li className={classes.user}>{name}</li>;
};
