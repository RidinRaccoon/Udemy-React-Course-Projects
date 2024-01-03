import * as React from 'react';
import { Header } from './Header';
import { Input } from './Input';
import { useInput } from '../hooks/useInput';
import * as validationUtils from '../util/validation';

export function Login() {
  const {
    value: email,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput(
    '',
    (value) =>
      validationUtils.isEmail(value) && validationUtils.isNotEmpty(value),
  );

  const {
    value: password,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput(
    '',
    (value) =>
      validationUtils.hasMinLength(value, 6) &&
      validationUtils.isNotEmpty(value),
  );

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log('Submitted!');
    console.log(`Email: ${email} Password: ${password}`);
  }

  return (
    <React.StrictMode>
      <Header />
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="control-row">
          <Input
            required
            id="email"
            label="email"
            name="email"
            type="email"
            value={email}
            onBlur={() => handleEmailBlur()}
            onChange={(event) => handleEmailChange(event.target.value)}
            error={emailHasError && 'Please enter a valid email address.'}
          />

          <Input
            required
            label="password"
            id="password"
            type="password"
            name="password"
            value={password}
            onBlur={() => handlePasswordBlur()}
            onChange={(event) => handlePasswordChange(event.target.value)}
            error={
              passwordHasError && 'Password must contain at least 6 characters.'
            }
          />

          <p className="form-actions">
            <button className="button button-flat" type="button">
              Reset
            </button>
            <button className="button" type="submit">
              Login
            </button>
            <a href="signup">Don&apos;t have an account? Sign up here.</a>
          </p>
        </div>
      </form>
    </React.StrictMode>
  );
}
