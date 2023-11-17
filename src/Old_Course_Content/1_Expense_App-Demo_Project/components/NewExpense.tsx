import React, { useState } from 'react';
import { ExpenseForm } from './ExpenseForm';
// STYLES
import './NewExpense.css';
// TYPES
import { Expense } from '../types/types';

type NewExpenseProps = {
  onAddExpense: (expense: Expense) => void;
};

/**
 * Renders an expense form that can be toggled with the "Add New Expense" button and propagates new expenses to parent App component
 * @prop {function} onAddExpense - Propagates value to parent. \
 * `addNewExpenseHandler` function from parent App component
 */
export function NewExpense({ onAddExpense }: NewExpenseProps) {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  /**
   * Propagates the submitted expense information to the parent component in order to be added to the current expenses list
   * @param enteredExpenseData - expense object received from the ExpenseForm component
   */
  const addNewExpenseDataHandler = (enteredExpenseData: Expense) => {
    onAddExpense(enteredExpenseData);
  };

  /**
   * Hides/Closes the ExpenseForm component
   */
  const cancelNewExpenseHandler = () => {
    setShowExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {!showExpenseForm && (
        <button type="button" onClick={() => setShowExpenseForm(true)}>
          Add New Expense
        </button>
      )}
      {showExpenseForm && (
        <ExpenseForm onSubmitExpenseData={addNewExpenseDataHandler} onCancelNewExpenseData={cancelNewExpenseHandler} />
      )}
    </div>
  );
}
