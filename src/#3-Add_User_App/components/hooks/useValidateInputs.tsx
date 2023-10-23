import { useState } from 'react';

type Values = {
  name?: string;
  age?: string;
};

/** Possible keys for errors state object. Must be added for each input name used in the validations */
type Errors = {
  name?: string[];
  age?: string[];
};

type ValidateInputParams = {
  name: string;
  value: string;
  event?: React.FormEvent<HTMLInputElement>;
};

// Helper function for validating "name" input
function validateName(value: string) {
  const errorList = [];
  // Must not be empty
  if (value.length <= 0) {
    errorList.push('Name must not be empty.');
    return errorList;
  }
  // Must not contain special characters
  if (value.indexOf('?') >= 0) {
    errorList.push('Name must not contain special characters');
  }

  return errorList;
}

// Helper function for validating "age" input
function validateAge(value: string) {
  const errorList = [];
  if (value.length <= 0) {
    errorList.push('Age must not be empty.');
    return errorList;
  }
  // Must be bigger than 0
  if (Number(value) <= 0) {
    errorList.push('Age must be bigger than 0.');
  }

  return errorList;
}

/**
 * Removes a given property from the object
 * @param {obj} object - target object
 * @param {string} property - property to be removed
 * @returns {obj} new object with property removed
 */
function removeProperty(object: { [key: string]: any }, property: string) {
  const newObj = { ...object };
  if (object[property]) delete newObj[property];

  return newObj;
}

/**
 * Custom hook for validating inputs and return, if applicable, the generated error messages
 * @returns {useFormReturns} - Object containing a list of passed values, a list of errors and a function for validating the changes
 */
export const useValidateInputs = () => {
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Errors>({});

  /**
   * Validates a form input from an onChange Event and sets the  necessary error messages in the errors state
   * @param event - the associated onChange event
   * @param name - input field name
   * @param value - input field value
   */
  const validateInput = (params: ValidateInputParams) => {
    switch (params.name) {
      // Name Input Validation
      case 'name': {
        const nameErrors = validateName(params.value);
        if (nameErrors.length > 0) setErrors({ ...errors, name: nameErrors });
        else {
          setErrors(removeProperty(errors, params.name));
        }
        break;
      }
      // Age Input Validation
      case 'age': {
        const ageErrors = validateAge(params.value);
        if (ageErrors.length > 0) setErrors({ ...errors, [params.name]: ageErrors });
        else {
          setErrors(removeProperty(errors, params.name));
        }
        break;
      }
      default:
        break;
    }
  };

  /**
   * Used as handler for input element onChange events.
   ** Received values and corresponding validations results are set in the "values" and "errors" states
   * @param event - onChange event
   */
  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.persist();
    //
    const { name, value } = event.currentTarget;
    validateInput({ name, value, event });

    setValues({
      ...values,
      [name]: value,
    });
  };

  return { values, errors, handleInputChange };
};
