import * as React from 'react';

type TFormData = { [k: string]: FormDataEntryValue | FormDataEntryValue[] };

export function Signup() {
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
  const [passwordsMismatch, setpasswordsMismatch] = React.useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    // Get and format the form's input values
    const formData = new FormData(event.currentTarget);
    const data: TFormData = Object.fromEntries(formData.entries());
    data.acquisition = formData.getAll('acquisition');

    // Check if passwords match
    if (data.password !== data['confirm-password']) {
      setpasswordsMismatch(true);
      return;
    }

    // Submit form
    // event.currentTarget.reset(); // Reset Form
    setShowSuccessMessage(true);
    setTimeout(() => {
      window.location.href = '/';
    }, 3000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email *</label>
        <input required id="email" type="email" name="email" />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password * </label>
          <input
            required
            minLength={6}
            id="password"
            type="password"
            name="password"
          />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password *</label>
          <input
            required
            minLength={6}
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
        </div>
        <div className="control-error">
          {passwordsMismatch && <p>Passwords must match.</p>}
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name *</label>
          <input required type="text" id="first-name" name="first-name" />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name *</label>
          <input required type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role? *</label>
        <select required id="role" name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input
            required
            type="checkbox"
            id="terms-and-conditions"
            name="terms"
          />
          I agree to the terms and conditions *
        </label>
      </div>

      <p className="form-actions">
        <a href="/">
          <button type="button" className="button button-flat">
            Cancel
          </button>
        </a>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
      {showSuccessMessage && (
        <p>
          Account created successfully. We&apos;ll redirect you to the login
          page.
        </p>
      )}
    </form>
  );
}
