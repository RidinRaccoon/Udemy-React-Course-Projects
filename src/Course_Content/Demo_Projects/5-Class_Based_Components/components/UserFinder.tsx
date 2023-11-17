/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import { Users } from './Users';
import classes from './UserFinder.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

type TUserFinderProps = {};
type TUserFinderState = {
  filteredUsers: { id: string; name: string }[];
  searchTerm: string;
};
/**  Renders `<Users />` with an user filter input */
export class UserFinder extends React.Component<
  TUserFinderProps,
  TUserFinderState
> {
  constructor(props: TUserFinderProps) {
    super(props);
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: '',
    };
  }

  componentDidUpdate(
    _prevProps: TUserFinderProps,
    prevState: TUserFinderState,
  ) {
    const { searchTerm } = this.state;
    if (prevState.searchTerm !== searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(searchTerm),
        ),
      });
    }
  }

  searchChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { filteredUsers } = this.state;
    return (
      <>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={filteredUsers} />
      </>
    );
  }
}
