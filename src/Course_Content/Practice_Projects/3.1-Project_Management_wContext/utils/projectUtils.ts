import { TProject } from '../types/types';

/**  Copys `projects` array in `projectsState` */
export function copyProjects(projects: TProject[]) {
  let newProjects: TProject[] = [];
  projects.forEach((project) => {
    const currentProject: TProject = { ...project, tasks: [...project.tasks] };
    newProjects = [...newProjects, currentProject];
  });
  return newProjects;
}

export type UserInput = {
  title: string;
  description: string;
  startDate: string;
  dueDate: string;
};
export function createNewProject(id: string, fields: UserInput) {
  const { title, description, startDate, dueDate } = fields;
  const newProject: TProject = {
    id,
    title,
    description,
    startDate: new Date(startDate),
    dueDate: new Date(dueDate),
    tasks: [],
  };
  return newProject;
}

/** Checks if the inputs are empty and if the project's due date occurs after the start date. \
 * Invalid fields are added to a string array used to update the `errors` state.
 */
export function validateInputs(userInput: UserInput) {
  const errors: string[] = [];
  const { title, description, startDate, dueDate } = userInput;
  if (title.trim() === '') errors.push('title');
  if (description.trim() === '') errors.push('description');
  if (startDate === '') errors.push('startDate');
  if (dueDate === '') errors.push('dueDate');
  if (
    startDate !== '' &&
    dueDate !== '' &&
    // Due date must be after start date
    Date.parse(startDate) >= Date.parse(dueDate)
  ) {
    errors.push('dueDate');
    errors.push('dateInterval');
  }

  return errors;
}
