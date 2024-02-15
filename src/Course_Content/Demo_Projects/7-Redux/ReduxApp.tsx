import * as React from 'react';
import * as ReactRedux from 'react-redux';
import './styles/index.css';
import { TState } from './store/index';
import { Counter } from './components/Counter';
import { Header } from './components/Header';
import { Auth } from './components/Auth';
import { UserProfile } from './components/UserProfile';

export function ReduxApp() {
  const isAuth = ReactRedux.useSelector(
    (state: TState) => state.auth.isAuthenticated,
  );
  return (
    <React.StrictMode>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </React.StrictMode>
  );
}
