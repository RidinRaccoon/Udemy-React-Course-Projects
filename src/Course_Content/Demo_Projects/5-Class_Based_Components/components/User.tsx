/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import classes from './User.module.css';

/** Renders a User list item */
export class User extends React.Component<{
  name: string;
}> {
  
  componentWillUnmount(): void {
    console.log('<User /> will unmount');
  }

  render() {
    const { name } = this.props;
    return <li className={classes.user}>{name}</li>;
  }
}
