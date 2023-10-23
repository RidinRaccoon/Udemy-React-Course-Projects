import React, { useState } from 'react';
import { Button } from './UI/Button';
import { Card } from './UI/Card';
import styles from './AddUserForm.module.css';
import { ErrorModal, Error } from './ErrorModal';

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
  const [errors] = useState<Error[]>([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  /**
   *  Validates user inputs and lifts the new user input to the parent component.
   ** Triggered by clicking the "Add User" button which submits the form
   ** If there's at least one invalid input, an error modal [ErrorModal.tsx] is shown with the detailed information
   * @param {React.FormEvent<HTMLFormElement>} event - form submission event
   */
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Validate User Input
    //  Name (not empty / no special characters)
    //  Age (not empty and > 0)

    // Create user object to be lifted
    const newUser: User = {
      name,
      age,
      id: Math.random().toString(),
    };

    onUserSubmit(newUser); // Lift new User to parent component
  };

  return (
    <React.StrictMode>
      {errors.length !== 0 && <ErrorModal title="Invalid Input(s)" errors={errors} />}
      <Card className={styles.inputs}>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            className={`${styles.invalid}`}
            type="text"
            onChange={(event) => setName(event.currentTarget.value)}
          />
          <label htmlFor="age">Age (years):</label>
          <input id="age" type="number" step={1} onChange={(event) => setAge(Number(event.currentTarget.value))} />
          <Button type="submit" text="Add User" />
        </form>
      </Card>
    </React.StrictMode>
  );
}
