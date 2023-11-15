import React from 'react';
import { TProject, TProjectTask } from '../types/types';

export type TProjectsContext = {
  state: {
    selectedProjectId: string;
    projects: TProject[];
    tasks: TProjectTask[];
  };
  getNewId(): string;
  addProject(newProject: TProject): void;
  removeProject(projectId: string): void;
  selectProject(projectId: string): void;
  addTask(projectId: string, newTask: TProjectTask): void;
  updateTask(taskId: string, isCompleted: boolean): void;
};

export const ProjectsContext = React.createContext<TProjectsContext>({
  state: {
    selectedProjectId: '',
    projects: [],
    tasks: [],
  },
  getNewId: () => '',
  addProject: () => {},
  removeProject: () => {},
  selectProject: () => {},
  addTask: () => {},
  updateTask: () => {},
});
