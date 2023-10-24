import React from 'react';
import './ExpenseDate.scss';

type ExpenseDateProps = {
  date: Date;
  format?: 'yyyy/dd/mm' | 'yyyy/mm/dd' | 'mm/yyyy/dd' | 'mm/dd/yyyy' | 'dd/mm/yyyy' | 'dd/yyyy/mm';
};

/**
 * Renders a date container with month, year and day.
 * @prop {Date} date - date object
 * @prop {string} format - date in format ['dd/mm/yyyy', 'mm/yyyy/dd', ... ] | default="yyyy/dd/mm"
 */
export function ExpenseDate({ date, format }: ExpenseDateProps) {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  const formattedDate = format?.split('/').map((dateFormatItem) => {
    switch (dateFormatItem) {
      case 'dd':
        return (
          <div key="dd" className="expense-date__day">
            {day}
          </div>
        );
      case 'mm':
        return (
          <div key="mm" className="expense-date__month">
            {month}
          </div>
        );
      case 'yyyy':
        return (
          <div key="yyyy" className="expense-date__year">
            {year}
          </div>
        );
      default:
        return '';
    }
  });

  return <div className="expense-date">{formattedDate}</div>;
}

ExpenseDate.defaultProps = {
  format: 'yyyy/dd/mm',
};
