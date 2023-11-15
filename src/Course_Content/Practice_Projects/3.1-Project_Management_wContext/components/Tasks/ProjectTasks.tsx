import React, { useState } from 'react';
import { ProjectTask } from './ProjectTask';
import './ProjectTasks.scss';
import { type TProjectTask } from '../../types/types';
import { ProjectsContext } from '../../store/ProjectsContext';

/** Renders the project's task list in the `Project` component */
export function ProjectTasks() {
  const [newTaskName, setNewTaskName] = useState('');
  const { state, addTask } = React.useContext(ProjectsContext);
  const { tasks } = state;

  /** Adds task to the `projectsState` from `ProjectManagementApp`  */
  const addTaskHandler = () => {
    if (newTaskName !== '') {
      const newTask: TProjectTask = {
        id: String(tasks.length + 1),
        title: newTaskName,
        isCompleted: false,
      };
      addTask(state.selectedProjectId, newTask);
      setNewTaskName('');
    }
  };

  return (
    <section className="tasks-container">
      <h1>Tasks</h1>
      <div className="new-task-options">
        <label htmlFor="new-task-name">NEW TASK NAME</label>
        <input
          id="new-task-name"
          type="text"
          value={newTaskName}
          onChange={(event) => setNewTaskName(event.currentTarget.value)}
        />
        {newTaskName !== '' && (
          <button type="button" onClick={addTaskHandler}>
            Add Task
          </button>
        )}
      </div>
      <ol className="tasks">
        {tasks.map((task) => (
          <ProjectTask key={task.id} task={task} />
        ))}
      </ol>
    </section>
  );
}
