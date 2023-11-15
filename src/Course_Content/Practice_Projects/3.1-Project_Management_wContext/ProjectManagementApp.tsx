import React from 'react';
import { Menu } from './components/Menu';
import { NewProjectForm } from './components/Project/NewProjectForm';
import { Project } from './components/Project/Project';
import { ProjectsContextProvider } from './store/ProjectsContextProvider';
import { ProjectsContext } from './store/ProjectsContext';
import './styles/index.scss';

/** Project Management application (w/ Context API) \
 * Allows the user to create/delete projects and manage tasks for the available projects
 */
function AppHomeScreen() {
  const [isCreatingNewProject, setIsCreatingNewProject] = React.useState(false);
  const { state } = React.useContext(ProjectsContext);

  const selectedProject = state.projects.find(
    (project) => project.id === state.selectedProjectId,
  );

  /** Shows/hides the `NewProjectForm` component */
  const showNewProjectForm = (isTrue: boolean) => {
    setIsCreatingNewProject(isTrue);
  };

  return (
    <React.StrictMode>
      <aside>
        <Menu onCreateNewProject={() => showNewProjectForm(true)} />
      </aside>
      <main>
        {!isCreatingNewProject && selectedProject && <Project />}
        {isCreatingNewProject && (
          <NewProjectForm hideForm={() => showNewProjectForm(false)} />
        )}
      </main>
    </React.StrictMode>
  );
}

export function ProjectManagementApp() {
  return (
    <React.StrictMode>
      <ProjectsContextProvider>
        <AppHomeScreen />
      </ProjectsContextProvider>
    </React.StrictMode>
  );
}
