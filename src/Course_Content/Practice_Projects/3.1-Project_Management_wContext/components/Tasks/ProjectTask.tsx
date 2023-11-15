import React from 'react';
import './ProjectTask.scss';
import { type TProjectTask } from '../../types/types';
import { ProjectsContext } from '../../store/ProjectsContext';

/** Renders a project task as a list item */
export function ProjectTask(props: { task: TProjectTask }) {
  const { task } = props;
  const { id, title, isCompleted } = task;
  const { updateTask } = React.useContext(ProjectsContext);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateTask(id, event.currentTarget.checked);
  };

  return (
    <li id={id} className="task">
      <input type="checkbox" checked={isCompleted} onChange={onChangeHandler} />
      <h1>{title}</h1>
    </li>
  );
}
