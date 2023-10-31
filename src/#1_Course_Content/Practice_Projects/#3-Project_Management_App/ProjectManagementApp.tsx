import React from 'react';
import { Project } from './components/Project/Project';
import { Menu } from './components/Menu';
import './styles/index.css';

import { DUMMY_PROJECTS } from './data/DUMMY_PROJECTS';

/**
 * TODO: SUMMARY
 */
export function ProjectManagementApp() {
  return (
    <React.StrictMode>
      <aside>
        <Menu projects={DUMMY_PROJECTS} />
      </aside>
      <main>
        <Project project={DUMMY_PROJECTS[0]} />
      </main>
    </React.StrictMode>
  );
}
