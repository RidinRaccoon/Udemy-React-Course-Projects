import React, { useState } from 'react';
import './NewProjectForm.scss';
import * as pUtils from '../../utils/projectUtils';
import { ProjectsContext } from '../../store/ProjectsContext';

const initialUserInput: pUtils.UserInput = {
  title: '',
  description: '',
  startDate: '',
  dueDate: '',
};
type UserInputKey = keyof pUtils.UserInput;

/** Sets the `invalid` class based on the `errors` state */
function getInputErrorClass(errors: string[], inputFieldId: string) {
  if (errors.includes(inputFieldId)) return 'invalid';
  return undefined;
}

/** Renders a form to create a new project \
 * @prop { fn } hideForm - Hides the Form
 */
export function NewProjectForm(props: {
  //
  hideForm(): void;
}) {
  const [userInput, setUserInput] = useState(initialUserInput);
  const [errors, setErrors] = useState<string[]>([]);
  const { hideForm } = props;

  const { getNewId, addProject } = React.useContext(ProjectsContext);

  const onSave = () => {
    // Cancel submission if inputs are invalid
    const validationResults = pUtils.validateInputs(userInput);
    if (validationResults.length > 0) {
      setErrors(validationResults);
      return;
    }
    // Create new Project
    const newId = getNewId();
    const newProject = pUtils.createNewProject(newId, userInput);
    addProject(newProject);
    hideForm();
  };

  /** Update `userInput` state */
  const onChangeHandler =
    (inputIdentifier: UserInputKey) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setUserInput((currentInput) => ({
        ...currentInput,
        [inputIdentifier]: event.target.value,
      }));
    };

  return (
    <section id="New-Project-Form">
      <div className="form-options">
        <button type="button" className="button-cancel" onClick={hideForm}>
          Cancel
        </button>
        <button type="button" className="button-save" onClick={onSave}>
          Save
        </button>
      </div>
      <form>
        <div className="input-group">
          <label
            htmlFor="Title"
            className={getInputErrorClass(errors, 'title')}
          >
            TITLE
          </label>
          <input
            id="Title"
            type="text"
            onChange={onChangeHandler('title')}
            value={userInput.title}
            onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
          />
        </div>
        <div className="input-group">
          <label
            htmlFor="Description"
            className={getInputErrorClass(errors, 'description')}
          >
            DESCRIPTION
          </label>
          <textarea
            id="Description"
            onChange={onChangeHandler('description')}
            value={userInput.description}
          />
        </div>
        <div className="input-group">
          <label
            htmlFor="StartDate"
            className={getInputErrorClass(errors, 'startDate')}
          >
            START DATE
          </label>
          <input
            id="StartDate"
            type="date"
            onChange={onChangeHandler('startDate')}
            value={userInput.startDate}
          />
        </div>
        <div className="input-group">
          <label
            htmlFor="DueDate"
            className={getInputErrorClass(errors, 'dueDate')}
          >
            DUE DATE
          </label>
          <input
            id="DueDate"
            type="date"
            onChange={onChangeHandler('dueDate')}
            value={userInput.dueDate}
          />
          {errors.includes('dateInterval') && (
            <p className="error-message">Due date must be after start date.</p>
          )}
        </div>
      </form>
    </section>
  );
}
