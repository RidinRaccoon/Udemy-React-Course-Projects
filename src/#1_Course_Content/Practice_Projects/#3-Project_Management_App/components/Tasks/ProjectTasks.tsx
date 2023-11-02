import React, { useState } from 'react';
import { ProjectTask } from './ProjectTask';
import './ProjectTasks.scss';
// TYPES
import { TProjectTask } from '../../types/types';

type ProjectTasksProps = {
  tasks: TProjectTask[];
  onAddTask: (newTask: TProjectTask) => void;
  onTaskCompletionChange: (taskId: string, isComplete: boolean) => void;
};
/** Renders the project's task list in the `Project` component
 * @prop { TProjectTask[] } tasks - List of project tasks for the selected project
 * @prop { function } onAddTask - Adds the new task to the `projectsState` from `ProjectManagementApp` \
 * [ `onAddTaskHandler` function from `Project` component ]
 * @prop { function } onTaskCompletionChange - Updates task in `projectsState` from `ProjectManagementApp` component \
 * [ `onTaskCompletionChangeHandler` function from `Project` component ]
 */
export function ProjectTasks({ tasks, onAddTask, onTaskCompletionChange }: ProjectTasksProps) {
  const [newTaskName, setNewTaskName] = useState('');

  /** Updates task completion in `projectsState` from `ProjectManagementApp` */
  const onTaskCompletionChangeHandler = (taskId: string, isCompleted: boolean) => {
    onTaskCompletionChange(taskId, isCompleted);
  };
  /** Adds task to the `projectsState` from `ProjectManagementApp`  */
  const addTaskHandler = () => {
    if (newTaskName !== '') {
      const newTask: TProjectTask = {
        id: String(tasks.length + 1),
        title: newTaskName,
        isCompleted: false,
      };
      onAddTask(newTask);
      setNewTaskName('');
    }
  };

  return (
    <section className="tasks-container">
      <h1>Tasks</h1>
      <div className="new-task-options">
        <label htmlFor='new-task-name'>NEW TASK NAME</label>
        <input
          name="new-task-name"
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
          <ProjectTask key={task.id} task={task} onTaskCompletionChange={onTaskCompletionChangeHandler} />
        ))}
      </ol>
    </section>
  );
}
