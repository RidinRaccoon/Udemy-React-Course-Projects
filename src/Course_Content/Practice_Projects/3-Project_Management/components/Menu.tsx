import React from 'react';
import './Menu.scss';
// TYPES
import { TProject } from '../types/types';

type ProjectsProps = {
  projects: TProject[];
  currentProjectID: string | undefined;
  onCreateNewProject: () => void;
  onProjectSelection: (projectId: string) => void;
};
/** Renders the application's sidebar menu
 * @prop { TProject[] } projects - `projectsState` from parent `ProjectManagementApp` component
 * @prop { string } currentProjectID - Displayed project's ID. Used to highlights the corresponding menu button
 * @prop { function } createNewProjectHandler - Display's the `NewProjectForm` component \
 * [ `showNewProjectFormHandler` function from `ProjectManagementApp` component ]
 * @prop { function } onProjectSelection - Updates the displayed project \
 * [ `onProjectSelectionHandler` function from `ProjectManagementApp` component ]
 */
export function Menu({ projects, currentProjectID, onCreateNewProject, onProjectSelection }: ProjectsProps) {
  return (
    <section className="projects-container">
      <h1>Your Projects</h1>
      <button type="button" className="button-add" onClick={onCreateNewProject}>
        + Add Project
      </button>
      <nav>
        {projects.map((project) => (
          <button
            type="button"
            key={project.id}
            className={project.id === currentProjectID ? 'active' : undefined}
            onClick={() => onProjectSelection(project.id)}
          >
            {project.title}
          </button>
        ))}
      </nav>
    </section>
  );
}
