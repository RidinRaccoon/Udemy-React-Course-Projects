import * as React from 'react';

export function useInput(
  initialValue: string,
  validationFn: (value: string) => boolean,
) {
  const [value, setValue] = React.useState(initialValue);
  const [wasEdited, setWasEdited] = React.useState(false);
  const isValid = validationFn(value);
  
  function handleInputChange(newValue: string) {
    setValue(newValue);
  }

  function handleInputBlur() {
    setWasEdited(true);
  }

  return {
    value,
    handleInputChange,
    handleInputBlur,
    hasError: wasEdited && !isValid,
  };
}
