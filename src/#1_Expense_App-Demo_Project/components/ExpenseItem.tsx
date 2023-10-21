import React from 'react';
import { ExpenseDate } from './ExpenseDate';
import './ExpenseItem.scss';

/**
 * Renders a list item with title, amount and date information
 * @prop {string} title - title of the expense
 * @prop {number} amount - cost of the expense
 * @prop {Date} date - date of the expense
 */
export function ExpenseItem({ title, amount, date }: Expense) {
  return (
    <li className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </li>
  );
}
