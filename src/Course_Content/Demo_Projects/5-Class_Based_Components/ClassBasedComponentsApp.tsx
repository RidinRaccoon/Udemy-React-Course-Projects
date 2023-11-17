/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Users } from './components/Users';
import './styles/index.css';

/** Simple app that displays a list of users
 * using class based components.
 */
export class ClassBasedComponentsApp extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <Users />
      </React.StrictMode>
    );
  }
}
