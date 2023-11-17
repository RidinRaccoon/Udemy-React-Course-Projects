/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Users } from './Users';
import classes from './UserFinder.module.css';
import { UsersContext } from '../context/UserContext';

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
  // eslint-disable-next-line react/static-property-placement
  static contextType = UsersContext;

  // eslint-disable-next-line react/static-property-placement
  declare context: React.ContextType<typeof UsersContext>;

  constructor(props: TUserFinderProps) {
    super(props);
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: '',
    };
  }

  componentDidMount(): void {
    const { users } = this.context;
    console.log(this.context);
    this.setState({ filteredUsers: users });
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

/* Example with context Consumer

<UsersContext.Consumer>
  {(_value) => (
    <>
      <div className={classes.finder}>
        <input
          type="search"
          onChange={this.searchChangeHandler.bind(this)}
        />
      </div>
      <Users users={filteredUsers} />
    </>
  )}
</UsersContext.Consumer>

*/
