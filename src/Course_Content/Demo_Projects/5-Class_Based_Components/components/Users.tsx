/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { User } from './User';
import { ErrorBoundary } from './ErrorBoundary';
import classes from './Users.module.css';

type TUserProps = { users: { id: string; name: string }[] };
type TUserState = { showUsers: boolean };
/** Renders an unordered list of users */
export class Users extends React.Component<TUserProps, TUserState> {
  constructor(props: TUserProps) {
    super(props);
    this.state = { showUsers: true };
  }

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error('No users provided!');
    }
  }

  toggleUsersHandler() {
    this.setState((curState) => ({ showUsers: !curState.showUsers }));
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    const { showUsers } = this.state;
    return (
      <ErrorBoundary>
        <div className={classes.users}>
          <button type="button" onClick={this.toggleUsersHandler.bind(this)}>
            {showUsers ? 'Hide' : 'Show'} Users
          </button>
          {showUsers && usersList}
        </div>
      </ErrorBoundary>
    );
  }
}
