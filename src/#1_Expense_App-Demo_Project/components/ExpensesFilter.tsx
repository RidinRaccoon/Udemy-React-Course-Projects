import React from 'react';
import './ExpensesFilter.scss';

type ExpensesFilterProps = {
  onFilterChange: (filterValue: string) => void;
};

/**
 * Displays a dropdown button that allows the user to select a year value and propagate it to the parent component for filtering
 * @prop { Function } onFilterChange - "filterChangeHandler" function from parent Expenses component.
 * @returns {jsx}
 */
export function ExpensesFilter({ onFilterChange }: ExpensesFilterProps) {
  /**
   * Propagates filter value to parent ExpensesList component when selected filter value changes
   * @param event - onChange Event with the year value received from the select filter.
   */
  const filterChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(event.currentTarget.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="select">Filter by year</label>
        <select id="select" onChange={filterChangeHandler} defaultValue="2022">
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}
