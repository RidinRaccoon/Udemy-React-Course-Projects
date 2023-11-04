import React from 'react';
import { ExpenseItem } from './ExpenseItem';
// STYLES
import './ExpenseList.css';
// TYPES
import { Expense } from '../types/types';

type ExpenseListProps = {
  expenses: Expense[];
};

/**
 * Renders an expense list from received expenses
 * @prop {Object[]} expenses - list of expenses
 */
export function ExpenseList({ expenses }: ExpenseListProps) {
  // Show fallback for empty expenses array
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }
  // Map expenses to ExpenseItem components
  return (
    <ul className="expenses-list">
      {expenses.map((item) => (
        <ExpenseItem key={item.id} id={item.id} title={item.title} amount={item.amount} date={item.date} />
      ))}
    </ul>
  );
}
