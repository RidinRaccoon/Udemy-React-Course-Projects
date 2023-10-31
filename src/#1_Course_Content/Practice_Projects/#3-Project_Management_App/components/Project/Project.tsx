import React from 'react';
import { ProjectTasks } from '../Tasks/ProjectTasks';
import { ProjectHeaderInfo } from './ProjectHeaderInfo';
import { ProjectOptions } from './ProjectOptions';
// STYLES
import './Project.scss';
// TYPES
import { TProject } from '../../types/types';


type ProjectProps = {
  project: TProject;
};
/**
 * Displays information for the selected project
 * @prop { TProject } project - displayed project
 */
export function Project({ project }: ProjectProps) {
  const { id, title, dueDate, startDate, description, tasks } = project;

  // Project option handlers
  // Opens the `EditProject` component with the current project info
  const editHandler = () => {
    console.log('Edit Project');
  };
  // Deletes the current project
  const deleteHandler = () => {
    console.log('Delete Project');
  };

  return (
    <section id="Project">
      <header>
        <ProjectHeaderInfo id={id} title={title} startDate={startDate} dueDate={dueDate} />
        <ProjectOptions onEdit={editHandler} onDelete={deleteHandler} />
      </header>
      <p className="description">{description}</p>
      <hr />
      <ProjectTasks tasks={tasks} />
    </section>
  );
}
