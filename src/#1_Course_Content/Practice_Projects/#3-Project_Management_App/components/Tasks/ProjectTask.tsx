import React from 'react';
import './ProjectTask.scss';
// TYPES
import { TProjectTask } from '../../types/types';

type ProjectTaskProps = {
  task: TProjectTask;
  onTaskCompletionChange: (taskId: string, isCompleted: boolean) => void;
};
/** Renders a project task as a list item
 * @prop { TProjectTask } task - Selected project's task list
 * @prop { function } onTaskCompletionChange - Updates task in `projectsState` from `ProjectManagamentApp` \
 * [ `onTaskCompletionChange` function from parent `ProjectTasks` component ]
 */
export function ProjectTask({ task, onTaskCompletionChange }: ProjectTaskProps) {
  const { id, title, isCompleted } = task;

  /** Triggers the `onTaskCompletionChange` function to update the task in `projects` state */
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onTaskCompletionChange(id, event.currentTarget.checked);
  };

  return (
    <li id={id} className="task">
      <input type="checkbox" checked={isCompleted} onChange={onChangeHandler} />
      <h1>{title}</h1>
    </li>
  );
}
