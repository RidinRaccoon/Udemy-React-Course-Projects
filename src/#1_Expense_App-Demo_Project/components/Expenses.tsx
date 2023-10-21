import React, { useState } from 'react';
import { ExpenseList } from './ExpenseList';
import { ExpensesFilter } from './ExpensesFilter';
import { ExpensesChart } from './ExpensesChart';
import { Card } from './UI/Card';
import './Expenses.scss';

type ExpensesProps = {
  expenses: Expense[];
};

/**
 * Shows a list of expenses that can be filtered by year
 * @prop { object[] } expenses - List of expenses to be rendered by ExpenseList component
 */
export function Expenses({ expenses }: ExpensesProps) {
  const [yearFilter, setYearFilter] = useState('2022');

  /**
   * Sets yearFilter state using the value received from onFilterChange in ExpensesFilter child component
   * @param filterValue - value from selected year filter
   */
  const filterChangeHandler = (filterValue: string) => {
    setYearFilter(filterValue);
  };

  // Filter expenses by selected filter year
  const filteredExpenses = expenses.filter((item) => item.date.getFullYear().toString() === yearFilter);

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
}

/*   */
