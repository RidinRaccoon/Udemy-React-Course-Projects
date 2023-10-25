import React from 'react';
import { Header } from './components/Header';
import { CoreConceptList } from './components/CoreConceptList';
import { ExampleList } from './components/ExampleList';

import './styles/index.css';

/**
 * First Demo application created in the React course.
 *
 ** Created to get a better grasp of the core concepts of React development (components, jsx, props, state).
 ** This app renders a list that defines the main react concepts and a menu that toggles examples for each concept.
 ** The information listed (Core concepts and examples) can be changed in the data.tsx file
 */
export function ReactEssentialsApp() {
  return (
    <React.StrictMode>
      <Header />
      <main>
        <CoreConceptList />
        <ExampleList />
      </main>
    </React.StrictMode>
  );
}
