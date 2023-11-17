import React, { useState } from 'react';
import './NewProjectForm.scss';
// TYPES
import { TProject } from '../../types/types';


type UserInputKey = keyof UserInput;
type UserInput = {
  title: string;
  description: string;
  startDate: string;
  dueDate: string;
};

/** Sets the `invalid` class based on the `errors` state */
function getInputErrorClass(errors: string[], inputFieldId: string) {
  if(errors.includes(inputFieldId)) return 'invalid';
  return undefined;
};
/** Checks if the inputs are empty and if the project's due date occurs after the start date. \ 
 * Invalid fields are added to a string array used to update the `errors` state.
 */
function validateInputs(userInput: UserInput) {
  const errors: string[] = [];
  const { title, description, startDate, dueDate } = userInput;
  if (title.trim() === '') errors.push('title');
  if (description.trim() === '') errors.push('description');
  if (startDate === '') errors.push('startDate');
  if (dueDate === '') errors.push('dueDate');
  if (startDate !== '' && dueDate !== '' && Date.parse(startDate) >= Date.parse(dueDate)) {
    errors.push('dueDate');
    errors.push('dateInterval');
  }

  return errors;
}

const initialUserInput: UserInput = {
  title: '',
  description: '',
  startDate: '',
  dueDate: '',
};

type NewProjectFormProps = {
  newProjectID: string;
  onCancel: () => void;
  onSave: (newProject: TProject) => void;
};
/** Renders a form to create a new project
 * @prop { string } newProjectID - ID for the new project
 * @prop { function } onCancel - Cancels form display \
 * [ `onFormCancelHandler` function from `ProjectManagementApp` ]
 * @prop { function } onSave - Saves the new project in `projectsState` from `ProjectManagementApp` \
 * [ `onFormSaveHandler` function from `ProjectManagementApp` ]
 */
export function NewProjectForm({ newProjectID, onCancel, onSave }: NewProjectFormProps) {
  const [userInput, setUserInput] = useState<UserInput>(initialUserInput);
  const [errors, setErrors] = useState<string[]>([]);

  /** Hides the Form and resets `userInput` state */
  const onCancelHandler = () => {
    setUserInput(initialUserInput);
    onCancel();
  };
  /** Validates the user input and saves the new project in `projectsState` from `ProjectManagementApp` component. \
   * `errors` state is updated if input is invalid
   */
  const onSaveHandler = () => {
    // If inputs are invalid, update `errors` state and cancel project submission
    const validationResults = validateInputs(userInput);
    if (validationResults.length > 0) {
      setErrors(validationResults);
      return;
    }

    // Update `projects` state with new project
    const { title, description, startDate, dueDate } = userInput;
    const newProject: TProject = {
      id: newProjectID,
      title,
      description,
      startDate: new Date(startDate),
      dueDate: new Date(dueDate),
      tasks: [],
    };
    onSave(newProject);
    setErrors([]);
  };
  /** Update `userInput` state */
  const onChangeHandler =
    (inputIdentifier: UserInputKey) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setUserInput((currentInput) => ({ ...currentInput, [inputIdentifier]: event.target.value }));
    };

  return (
    <section id="New-Project-Form">
      <div className="form-options" >
        <button type="button" className="button-cancel" onClick={onCancelHandler}>
          Cancel
        </button>
        <button type="button" className="button-save" onClick={onSaveHandler}>
          Save
        </button>
      </div>
      <form>
        <div className="input-group">
          <label htmlFor="Title" className={getInputErrorClass(errors, 'title')}>
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
          <label htmlFor="Description" className={getInputErrorClass(errors, 'title')}>
            DESCRIPTION
          </label>
          <textarea id="Description" onChange={onChangeHandler('description')} value={userInput.description} />
        </div>
        <div className="input-group">
          <label htmlFor="StartDate" className={getInputErrorClass(errors, 'title')}>
            START DATE
          </label>
          <input id="StartDate" type="date" onChange={onChangeHandler('startDate')} value={userInput.startDate} />
        </div>
        <div className="input-group">
          <label htmlFor="DueDate" className={getInputErrorClass(errors, 'title')}>
            DUE DATE
          </label>
          <input id="DueDate" type="date" onChange={onChangeHandler('dueDate')} value={userInput.dueDate} />
          {errors.includes('dateInterval') && <p className="error-message">Due date must be after start date.</p>}
        </div>
      </form>
    </section>
  );
}
