import * as React from 'react';

export function ErrorBlock(props: //
{
  title: string;
  message: string;
}) {
  const { title, message } = props;
  return (
    <div className="error-block">
      <div className="error-block-icon">!</div>
      <div className="error-block-text">
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}
