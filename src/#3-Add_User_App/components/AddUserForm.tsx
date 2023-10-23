import React, { useEffect, useRef, useState } from 'react';
import { Button } from './UI/Button';
import { Card } from './UI/Card';
import styles from './AddUserForm.module.css';
import { ErrorModal } from './ErrorModal';
import { useValidateInputs } from './hooks/useValidateInputs';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { values, errors, handleInputChange } = useValidateInputs();

  const nameInput = useRef<HTMLInputElement>(null);
  const ageInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
  }, []);
  /**
   *  Validates user inputs and lifts the new user input to the parent component.
   ** Triggered by clicking the "Add User" button which submits the form
   ** If there's at least one invalid input, an error modal [ErrorModal.tsx] is shown with the detailed information
   * @param event - form submission event
   */
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Lift new User to parent component if all inputs are valid
    if (Object.keys(values).length > 0 && Object.keys(errors).length === 0) {
      // Create user object to be lifted
      const newUser: User = {
        name: values.name ? values.name : '',
        age: values.age ? Number(values.age) : 0,
        id: Math.random().toString(),
      };

      onUserSubmit(newUser);
    }
  };

  return (
    <React.StrictMode>
      {isSubmitting && Object.keys(errors).length !== 0 && <ErrorModal title="Invalid Input(s)" errors={errors} />}
      {isSubmitting && Object.keys(values).length === 0 && (
        <ErrorModal title="" errors={{ emptyForm: ['Fields must be filled before submitting.'] }} />
      )}
      <Card className={styles.inputs}>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name:</label>
          <input name="name" type="text" onChange={handleInputChange} ref={nameInput} />
          <label htmlFor="age">Age (years):</label>
          <input name="age" type="number" step={1} onChange={handleInputChange} ref={ageInput} />
          <Button type="submit" text="Add User" />
        </form>
      </Card>
    </React.StrictMode>
  );
}
