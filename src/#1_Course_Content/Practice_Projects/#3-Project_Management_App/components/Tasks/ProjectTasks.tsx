import React from 'react';
import { ProjectTask } from './ProjectTask';
import './ProjectTasks.scss';
// TYPES
import { TProjectTask } from '../../types/types';

type ProjectTasksProps = {
  tasks: TProjectTask[];
};
/**
 * TODO: SUMMARY
 */
export function ProjectTasks({ tasks }: ProjectTasksProps) {
  return (
    <section className="tasks-container">
      <h1>Tasks</h1>
      <div className="new-task-options">
        <input type="text" />
        <button type="button">Add Task</button>
      </div>
      <ol className="tasks">
        {tasks.map((task) => (
          <ProjectTask key={task.id} task={task}/>
        ))}
      </ol>
    </section>
  );
}
