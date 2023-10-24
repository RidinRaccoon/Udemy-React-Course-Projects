import React, { useState } from 'react';
// import classes from './NewInvestmentForm.module.css';
import classes from './NewInvestmentForm.module.css';

type NewInvestmentFormProps = {
  onCalculate: (userInput: Investment) => void;
  onReset: () => void;
};

/**
 * Renders a form where the user can submit the data of the new investment to be calculated and displayed on a table
 * Calculation occurs on parent component and is displayed in a children of the parent component
 * @prop {function} onCalculate - Propagates value to parent component using "calculateHandler" function from App.tsx.
 * @prop {function} onReset - Resets form values and hides results table
 */
export function NewInvestmentForm({ onCalculate, onReset }: NewInvestmentFormProps) {
  const [currentSavings, setCurrentSavings] = useState(0);
  const [yearlyContribution, setYearlyContribution] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  /**
   * Converts user Input into an Expense object and propagates it to the parent component
   * @param event - form submit event object with form values
   */
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const investment: Investment = {
      currentSavings,
      yearlyContribution,
      expectedReturn,
      duration,
    };

    // Propagate Investment to parent component
    onCalculate(investment);
  };

  /**
   * Resets the form values and clears yearlyData array
   */
  const resetHandler = () => {
    onReset();
  };

  /**
   * Updates target state when form input changes
   */
  const inputChangeHandler = (target: string, value: number) => {
    // Map input ids to states
    switch (target) {
      case 'current-savings':
        setCurrentSavings(value);
        break;
      case 'yearly-contribution':
        setYearlyContribution(value);
        break;
      case 'expected-return':
        setExpectedReturn(value);
        break;
      case 'duration':
        setDuration(value);
        break;
      default:
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            required
            onChange={(event) => inputChangeHandler(event.target.id, Number(event.target.value))}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            required
            onChange={(event) => inputChangeHandler(event.target.id, Number(event.target.value))}
          />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="expected-return">Expected Interest (%, per year)</label>
          <input
            type="number"
            id="expected-return"
            required
            onChange={(event) => inputChangeHandler(event.target.id, Number(event.target.value))}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            required
            onChange={(event) => inputChangeHandler(event.target.id, Number(event.target.value))}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button type="reset" onClick={resetHandler} className={classes.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}
