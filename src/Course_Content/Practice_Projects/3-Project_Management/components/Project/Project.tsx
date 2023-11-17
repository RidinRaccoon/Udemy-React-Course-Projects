import React from 'react';
import { ProjectTasks } from '../Tasks/ProjectTasks';
import { ProjectHeaderInfo } from './ProjectHeaderInfo';
import { ProjectOptions } from './ProjectOptions';
// TYPES
import { TProject, TProjectTask } from '../../types/types';
// STYLES
import './Project.scss';

type ProjectProps = {
  project: TProject;
  tasks: TProjectTask[];
  onProjectDeletion: (projectId: string) => void;
  onAddTask: (projectId: string, newTask: TProjectTask) => void;
  onTaskCompletionChange: (taskId: string, isCompleted: boolean) => void;
};
/** Displays information for the selected project
 * @prop { TProject } project - Displayed project
 * @prop { TProjectTask[] } tasks - List of displayed project tasks
 * @prop { function } onProjectDeletion - Deletes the project in `projectsState` from `ProjectManagementApp` \
 * [ `projectDeletionHandler` function from `ProjectManagementApp` ]
 * @prop { function } onAddTask - Adds the new task to the `projectsState` from `ProjectManagementApp` \
 * [ `onAddTaskHandler` function from `ProjectManagementApp` ]
 * @prop { function } onTaskCompletionChange - Updates task in `projectsState` from `ProjectManagamentApp` \
 * [ `onTaskCompletionChangeHandler` function from `ProjectManagementApp` ]
 */
export function Project({ project, tasks, onProjectDeletion, onAddTask, onTaskCompletionChange }: ProjectProps) {
  const { id, title, dueDate, startDate, description } = project;

  /** Deletes the project in `projectsState` from `ProjectManagementApp` */
  const onDeleteHandler = () => {
    onProjectDeletion(project.id);
  };
  /** Adds the new task to the `projectsState` from `ProjectManagementApp` */
  const onAddTaskHandler = (newTask: TProjectTask) => {
    onAddTask(id, newTask);
  };
  /** Updates task completion in `projectsState` from `ProjectManagementApp` */
  const onTaskCompletionChangeHandler = (taskId: string, isCompleted: boolean) => {
    onTaskCompletionChange(taskId, isCompleted);
  };

  return (
    <section id="Project">
      <header>
        <ProjectHeaderInfo id={id} title={title} startDate={startDate} dueDate={dueDate} />
        <ProjectOptions onDelete={onDeleteHandler} />
      </header>
      <p className="description">{description}</p>
      <hr />
      <ProjectTasks tasks={tasks} onTaskCompletionChange={onTaskCompletionChangeHandler} onAddTask={onAddTaskHandler} />
    </section>
  );
}
