import * as React from 'react';

export function Input(
  props: React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    id: string;
    error?: boolean | string;
  },
) {
  // eslint-disable-next-line react/prop-types
  const { label, id, error, name, type, onChange, onBlur, value, required } =
    props;

  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input
        required={required}
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <div className="control-error">
        <p>{error}</p>
      </div>
    </div>
  );
}

Input.defaultProps = {
  error: '',
};
