/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import * as RR from 'react-redux';
import { store } from './store';
import { AdvancedReduxApp } from './AdvancedReduxApp';

export function AdvancedReduxAppProvider() {
  return (
    <RR.Provider store={store}>
      <AdvancedReduxApp />
    </RR.Provider>
  );
}
