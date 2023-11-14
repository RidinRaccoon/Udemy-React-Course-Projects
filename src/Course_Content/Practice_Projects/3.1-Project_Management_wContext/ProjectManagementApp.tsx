import React, { useState } from 'react';
import { Menu } from './components/Menu';
import { NewProjectForm } from './components/Project/NewProjectForm';
import { Project } from './components/Project/Project';
import './styles/index.scss';
// TYPES
import { TProject, TProjectTask } from './types/types';

/**  Copys `projects` array in `projectsState` */
function copyProjects(projects: TProject[]) {
  let newProjects: TProject[] = [];
  projects.forEach((project) => {
    const currentProject: TProject = { ...project, tasks: [...project.tasks] };
    newProjects = [...newProjects, currentProject];
  });
  return newProjects;
}
/** Gets the selected project's tasks */
function getProjectTasks(projectId: string | undefined, projects: TProject[]) {
  let projectTasks: TProjectTask[] = [];
  const selectedProject = projects.find((project) => project.id === projectId);
  if (selectedProject) projectTasks = [...selectedProject.tasks];
  return projectTasks;
}

type TProjectsState = {
  selectedProjectId: string | undefined;
  projects: TProject[];
  tasks: TProjectTask[];
};
const initialState: TProjectsState = {
  selectedProjectId: undefined,
  projects: [],
  tasks: [],
};

/** Project Management application (w/ Context API) \
 * Allows the user to create/delete projects and manage tasks for the available projects
 */
export function ProjectManagementApp() {
  const [projectsState, setProjectsState] = useState(initialState);
  const [isCreatingNewProject, setIsCreatingNewProject] = useState(false);
  const [projectIdTally, setProjectIDTally] = useState(projectsState.projects.length + 1);

  const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId);

  /** Shows/hides the `NewProjectForm` component */
  const showNewProjectFormHandler = (isTrue: boolean) => {
    setIsCreatingNewProject(isTrue);
  };
  /** Removes the selected project from the `projectsState`  */
  const projectDeletionHandler = (projectID: string) => {
    setProjectsState((prevState) => {
      const newProjects = copyProjects(prevState.projects.filter((project) => project.id !== projectID));
      return { projects: newProjects, selectedProjectId: undefined, tasks: [] };
    });
  };
  /** Adds new project to the `projectsState` */
  const onFormSaveHandler = (newProject: TProject) => {
    setProjectsState((prevState) => {
      const newProjects = copyProjects(prevState.projects);
      newProjects.push(newProject);
      return { projects: newProjects, selectedProjectId: newProject.id, tasks: newProject.tasks };
    });
    setProjectIDTally((prev) => prev + 1);
    setIsCreatingNewProject(false);
  };
  /** Hides the 'NewProjectForm' component */
  const onFormCancelHandler = () => {
    showNewProjectFormHandler(false);
  };
  /** Adds new task to `projectsState` */
  const onAddTaskHandler = (projectId: string, newTask: TProjectTask) => {
    setProjectsState((prevState) => {
      const newProjects = copyProjects(prevState.projects);
      for (let projectIndex = 0; projectIndex < newProjects.length; projectIndex += 1) {
        if (newProjects[projectIndex].id === projectId) {
          newProjects[projectIndex].tasks.push(newTask);
        }
      }
      return { ...prevState, projects: newProjects, tasks: getProjectTasks(prevState.selectedProjectId, newProjects) };
    });
  };
  /** Updates the task completion in the `projectsState` */
  const onTaskCompletionChangeHandler = (taskId: string, isCompleted: boolean) => {
    setProjectsState((prevState) => {
      const newProjects = copyProjects(prevState.projects);
      for (let projectIndex = 0; projectIndex < newProjects.length; projectIndex += 1) {
        if (newProjects[projectIndex].id === prevState.selectedProjectId) {
          const { tasks } = newProjects[projectIndex];
          for (let taskIndex = 0; taskIndex < tasks.length; taskIndex += 1) {
            if (tasks[taskIndex].id === taskId) tasks[taskIndex].isCompleted = isCompleted;
          }
        }
      }
      return {
        ...prevState,
        projects: newProjects,
        tasks: getProjectTasks(prevState.selectedProjectId, newProjects),
      };
    });
    /*     const newProjects = copyProjects(projects);
    for (let projectIndex = 0; projectIndex < newProjects.length; projectIndex += 1) {
      if (newProjects[projectIndex].id === currentProject?.id) {
        const { tasks } = newProjects[projectIndex];
        for (let taskIndex = 0; taskIndex < tasks.length; taskIndex += 1) {
          if (tasks[taskIndex].id === taskId) tasks[taskIndex].isCompleted = isCompleted;
        }
      }
    }
    setProjects(newProjects); */
  };
  /** Updates the selected project in `projectsState` */
  const onProjectSelectionHandler = (projectId: string) => {
    const projects = copyProjects(projectsState.projects);
    setProjectsState({
      projects,
      selectedProjectId: projectId,
      tasks: getProjectTasks(projectId, projects),
    });
  };

  return (
    <React.StrictMode>
      <aside>
        <Menu
          projects={projectsState.projects}
          currentProjectID={projectsState.selectedProjectId}
          onCreateNewProject={() => showNewProjectFormHandler(true)}
          onProjectSelection={onProjectSelectionHandler}
        />
      </aside>
      <main>
        {!isCreatingNewProject && selectedProject && (
          <Project
            project={selectedProject}
            tasks={projectsState.tasks}
            onProjectDeletion={projectDeletionHandler}
            onAddTask={onAddTaskHandler}
            onTaskCompletionChange={onTaskCompletionChangeHandler}
          />
        )}
        {isCreatingNewProject && (
          <NewProjectForm
            newProjectID={String(projectIdTally)}
            onCancel={onFormCancelHandler}
            onSave={onFormSaveHandler}
          />
        )}
      </main>
    </React.StrictMode>
  );
}
