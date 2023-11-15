import React from 'react';
import './Menu.scss';
import { ProjectsContext } from '../store/ProjectsContext';

/** Renders the application's sidebar menu
 * @prop { fn } onCreateNewProject - Display's the `NewProjectForm` component
 */
export function Menu(props: { onCreateNewProject(): void }) {
  const { onCreateNewProject } = props;
  const { state, selectProject } = React.useContext(ProjectsContext);
  const { projects, selectedProjectId } = state;

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
            className={project.id === selectedProjectId ? 'active' : undefined}
            onClick={() => selectProject(project.id)}
          >
            {project.title}
          </button>
        ))}
      </nav>
    </section>
  );
}
