import React from 'react';
import { User } from './User';
import classes from './Users.module.css';

type TUserProps = { users: { id: string; name: string }[] };
type TUserState = { showUsers: boolean };
/** Renders an unordered list of users */
export class Users extends React.Component<TUserProps, TUserState> {
  constructor(props: TUserProps) {
    super(props);
    this.state = { showUsers: true };
  }

  toggleUsersHandler() {
    this.setState((curState) => ({ showUsers: !curState.showUsers }));
  }

  render() {
    const { users } = this.props;
    const usersList = (
      <ul>
        {users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    const { showUsers } = this.state;
    return (
      <div className={classes.users}>
        <button type="button" onClick={this.toggleUsersHandler.bind(this)}>
          {showUsers ? 'Hide' : 'Show'} Users
        </button>
        {showUsers && usersList}
      </div>
    );
  }
}
