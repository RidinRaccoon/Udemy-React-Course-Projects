import * as React from 'react';

export function Login() {
  return (
    <form>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>

        <p className="form-actions">
          <button className="button button-flat" type="button">Reset</button>
          <button className="button" type="button">Login</button>
        </p>
      </div>
    </form>
  )
}