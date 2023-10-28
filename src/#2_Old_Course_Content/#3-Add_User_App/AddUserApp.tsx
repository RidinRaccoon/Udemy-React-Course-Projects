import React, { useState } from 'react';
import { AddUserForm } from './components/AddUserForm';
import { UserList } from './components/UserList';
import './styles/index.css';
// TYPES
import { User } from './types/types';

/**
 * [Udemy Course] React - The Complete Guide 2023 (incl. React Router & Redux) by Maximilian Schwarzmüller
 *
 *  Project 3 - Add User list App
 ** Allows the user to add new Users [Name, Age] by submitting the data in a form.
 ** Submitting invalid inputs displays an error modal alerting to the error.
 ** The added users are displayed in a list, below the "Add User" form
 * @authors [ Filipe Fonseca (RidinRaccoon) ]
 */
export function AddUserApp() {
  const [userList, setUserList] = useState<User[]>([]);
  /**
   * Receives the new user and adds them to the current user list
   * @param userInput - received user input
   */
  const submitHandler = (userInput: User) => {
    setUserList([...userList, userInput]);
  };

  return (
    <React.StrictMode>
      <AddUserForm onUserSubmit={submitHandler} />
      <UserList users={userList} />
    </React.StrictMode>
  );
}
