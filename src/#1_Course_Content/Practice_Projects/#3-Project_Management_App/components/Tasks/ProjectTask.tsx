import React from 'react';
import './ProjectTask.scss';
// TYPES
import { TProjectTask } from '../../types/types';

type ProjectTaskProps = {
  task: TProjectTask;
}
/**
 * TODO: SUMMARY
 */
export function ProjectTask({ task }: ProjectTaskProps) {
  const {id, title, completed} = task;
  return (
    <li id={id} className="task">
      <input type="checkbox" checked={completed} /><h1>{title}</h1>
    </li>
  );
}
