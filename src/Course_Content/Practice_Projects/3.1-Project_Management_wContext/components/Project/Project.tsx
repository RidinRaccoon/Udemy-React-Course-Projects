import React from 'react';
import './Project.scss';
import { ProjectTasks } from '../Tasks/ProjectTasks';
import { ProjectHeaderInfo } from './ProjectHeaderInfo';
import { ProjectOptions } from './ProjectOptions';
import { ProjectsContext } from '../../store/ProjectsContext';

/** Displays information for the selected project */
export function Project() {
  const { state, removeProject } = React.useContext(ProjectsContext);
  const { selectedProjectId, projects } = state;
  const project = projects.find((proj) => proj.id === selectedProjectId);

  if (!project) return null;

  const { id, title, dueDate, startDate, description } = project;

  return (
    <section id="Project">
      <header>
        <ProjectHeaderInfo
          id={id}
          title={title}
          startDate={startDate}
          dueDate={dueDate}
        />
        <ProjectOptions onDelete={() => removeProject(id)} />
      </header>
      <p className="description">{description}</p>
      <hr />
      <ProjectTasks key={id} />
    </section>
  );
}
