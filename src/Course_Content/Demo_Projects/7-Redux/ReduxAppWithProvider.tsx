import * as React from 'react';
import * as ReactRedux from 'react-redux';
import store from './store/index';
import { ReduxApp } from './ReduxApp';

export function ReduxAppWithProvider() {
  return (
    <ReactRedux.Provider store={store}>
      <ReduxApp />
    </ReactRedux.Provider>
  );
}
