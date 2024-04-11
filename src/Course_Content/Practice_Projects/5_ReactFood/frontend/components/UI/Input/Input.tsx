/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

export function Input(
  props: React.InputHTMLAttributes<HTMLInputElement> & {
    id: string;
    label: string;
    isMandatory: boolean;
  },
) {
  const { id, label, isMandatory, ...inputAttributes } = props;
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input required={isMandatory} id={id} name={id} {...inputAttributes} />
    </p>
  );
}
