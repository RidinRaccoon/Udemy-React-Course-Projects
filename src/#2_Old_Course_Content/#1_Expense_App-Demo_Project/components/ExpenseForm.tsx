import React, { useState } from 'react';
import './ExpenseForm.scss';

type ExpenseFormProps = {
  onSubmitExpenseData: (enteredExpenseData: Expense) => void;
  onCancelNewExpenseData: () => void;
};

/**
 * Renders an expense form.
 * @prop {function} onSubmitExpenseData - Propagates value to parent. ( "addNewExpenseDataHandler" function from parent NewExpense component )
 * @prop {function} onCancelNewExpenseData - Resets values and closes form. ( "cancelNewExpenseHandler" function from parent NewExpense component )
 */
export function ExpenseForm({ onSubmitExpenseData, onCancelNewExpenseData }: ExpenseFormProps) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  /**
   * Updates enteredTitle state with value received from title input
   * @param event - event with value from input element [id=title]
   */
  const titleChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredTitle(event.currentTarget.value);
  };
  /**
   * Updates enteredAmount state with value received from amount input
   * @param event - event with value from input element [id=amount]
   */
  const amountChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredAmount(event.currentTarget.value);
  };
  /**
   * Updates enteredDate state with value received from date input
   * @param event - event with value from input element [id=date]
   */
  const dateChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredDate(event.currentTarget.value);
  };

  /**
   * Propagates form values to parent component, as an expense object, and resets form inputs
   * @param event - form submit event object with form values
   */
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const expenseData: Expense = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate),
    };

    // Send values to parent component
    onSubmitExpenseData(expenseData);

    // Reset values
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" required value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            required
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            required
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={() => onCancelNewExpenseData()}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
