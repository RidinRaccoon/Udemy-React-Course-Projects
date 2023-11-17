/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { UserFinder } from './components/UserFinder';
import './styles/index.css';
import { UsersContext } from './context/UserContext';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

/** Simple app that displays a list of users
 * using class based components.
 */
export class ClassBasedComponentsApp extends React.Component {
  render() {
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const usersContext = {
      users: DUMMY_USERS,
    };

    return (
      <React.StrictMode>
        <UsersContext.Provider value={usersContext}>
          <UserFinder />
        </UsersContext.Provider>
      </React.StrictMode>
    );
  }
}
