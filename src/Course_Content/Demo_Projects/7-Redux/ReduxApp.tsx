import * as React from 'react';
import './styles/index.css';
import * as ReactRedux from 'react-redux';
import store from './store/index';
import { Counter } from './components/Counter';

export function ReduxApp() {
  return (
    <ReactRedux.Provider store={store}>
      <h1>Test</h1>
      <Counter />
    </ReactRedux.Provider>
  );
}
