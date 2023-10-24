import React, { useState } from 'react';
import { Expenses } from './components/Expenses';
import { NewExpense } from './components/NewExpense';

import './styles/index.css';

const DUMMY_EXPENSES: Expense[] = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

/**
 * [Udemy Course] React - The Complete Guide 2023 (incl. React Router & Redux) by Maximilian Schwarzmüller
 ** Instructional project developed during the course tutorials with some individual challenges sprinkled in
 ** This app shows a list of expenses with title, amount and date. The user can add new expenses and filter by year and add new expenses.
 ** The app also provides a chart with the cost breakdown, per month, of the selected year.
 */
export function ExpensesApp() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  /**
   * Updates the expenses array state with a new expense object
   * @param expense - Expense object submitted by the user in NewExpense component
   */
  const addNewExpenseHandler = (expense: Expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}
