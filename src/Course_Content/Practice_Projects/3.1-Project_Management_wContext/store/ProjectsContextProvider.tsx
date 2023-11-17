import React from 'react';
import { TProject, TProjectTask } from '../types/types';
import { copyProjects } from '../utils/projectUtils';
import { ProjectsContext, type TProjectsContext } from './ProjectsContext';

export function ProjectsContextProvider(props: {
  //
  children: React.ReactNode;
}) {
  const { children } = props;

  const [selectedProjectId, setSelectedProjectId] = React.useState('');
  const [projects, setProjects] = React.useState<TProject[]>([]);
  const [tasks, setTasks] = React.useState<TProjectTask[]>([]);
  const [idTally, setIdTally] = React.useState(projects.length + 1);

  /** */
  const getNewId = () => `P${String(idTally).padStart(6, '0')}`;

  /** Updates the `projects` state with the new project */
  const addProject = (newProject: TProject) => {
    setProjects((prevState) => {
      const projectsCopy = copyProjects(prevState);
      projectsCopy.push(newProject);
      return projectsCopy;
    });
    setSelectedProjectId(newProject.id);
    setTasks([]);
    setIdTally((prev) => prev + 1);
  };

  const removeProject = (projectId: string) => {
    setProjects((prevState) => {
      const filteredProjects = prevState.filter(
        (project) => project.id !== projectId,
      );
      return copyProjects(filteredProjects);
    });
  };

  const selectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    const project = projects.find((proj) => proj.id === projectId);
    if (project) setTasks(project.tasks);
  };

  const addTask = (projectId: string, newTask: TProjectTask) => {
    setProjects((prev) => {
      const newProjects = copyProjects(prev);
      for (let i = 0; i < newProjects.length; i += 1) {
        if (newProjects[i].id === projectId) {
          newProjects[i].tasks.push(newTask);
          setTasks(newProjects[i].tasks);
        }
      }
      return newProjects;
    });
  };

  const updateTask = (taskId: string, isCompleted: boolean) => {
    setProjects((prev) => {
      const newProjects = copyProjects(prev);
      const project = newProjects.find((proj) => proj.id === selectedProjectId);
      if (!project) return prev;

      const targetTask = project.tasks.find((task) => task.id === taskId);
      if (targetTask) targetTask.isCompleted = isCompleted;
      setTasks(project.tasks);
      return newProjects;
    });
  };

  // Set Context
  const projectsContext: TProjectsContext = React.useMemo(
    () => ({
      state: {
        selectedProjectId,
        projects,
        tasks,
      },
      getNewId,
      addProject,
      removeProject,
      selectProject,
      addTask,
      updateTask,
    }),
    [projects, selectedProjectId, tasks],
  );

  return (
    <ProjectsContext.Provider value={projectsContext}>
      {children}
    </ProjectsContext.Provider>
  );
}
