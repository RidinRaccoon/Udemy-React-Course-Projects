import React, { useState } from 'react';
import { Button } from './UI/Button';
import { Card } from './UI/Card';
import styles from './AddUserForm.module.css';
import { ErrorModal, Error } from './ErrorModal';
// import { useValidateInputs } from './hooks/useValidateInputs';

type AddUserFormProps = {
  onUserSubmit: (userInput: User) => void;
};

/**
 * Form for adding new users which will be shown in a list [UserList component]
 * New Users must contain a valid name and age before being inserted into the list
 * @prop {function} onUserSubmit - Lifts submited user input [ "submitHandler" function from AddUserApp component ]
 * @returns  {React.JSX.Element}
 */
export function AddUserForm({ onUserSubmit }: AddUserFormProps) {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState<Error>();

  /**
   * Updates enteredName state with value received from name input
   * @param event - event with value from input element [id=name]
   */
  const enteredNameChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredName(event.currentTarget.value);
  };

  /**
   * Updates enteredName state with value received from name input
   * @param event - event with value from input element [id=name]
   */
  const entereAgeChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredAge((event.currentTarget.value));
  };

  /**
   *  Validates user inputs and lifts the new user input to the parent component.
   ** Triggered by clicking the "Add User" button which submits the form
   ** If there's at least one invalid input, an error modal [ErrorModal.tsx] is shown with the detailed information
   * @param event - form submission event
   */
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Validate User Inputs
    if (enteredName?.length === 0 || enteredAge?.toString().length === 0) {
      setError({ title: 'Missing fields', message: 'Name and age fields must be filled in before submitting.' });
      return;
    }
    if (enteredAge && Number(enteredAge) <= 0) {
      setError({ title: 'Invalid input', message: 'Age must be bigger than 0' });
      return;
    }

    // Submit new User
    const newUser: User = {
      id: Math.random().toString(),
      name: enteredName,
      age: Number(enteredAge),
    };
    onUserSubmit(newUser);

    // Reset form values
    setEnteredName('');
    setEnteredAge('');
  };

  const resetError = () => {
    setError(undefined);
  };

  return (
    <React.StrictMode>
      {error && <ErrorModal error={error} onClose={resetError} />}
      <Card className={styles.inputs}>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name:</label>
          <input name="name" type="text" value={enteredName} onChange={enteredNameChangeHandler} />
          <label htmlFor="age">Age (years):</label>
          <input name="age" type="number" step={1} value={enteredAge} onChange={entereAgeChangeHandler} />
          <Button type="submit" text="Add User" />
        </form>
      </Card>
    </React.StrictMode>
  );
}
