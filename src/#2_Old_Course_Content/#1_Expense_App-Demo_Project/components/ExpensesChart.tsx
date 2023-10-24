import React from 'react';
import { Chart } from './Chart/Chart';

type ExpensesChartProps = {
  expenses: Expense[];
};

/**
 * Calculates the chart data for the selected year
 ** list of months and corresponding expenses
 ** total expenses for the year)
 * @prop {Expense[]} expenses - The current filtered list of expenses
 */
export function ExpensesChart({ expenses }: ExpensesChartProps) {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  // Calculate the montlhy expenses for the selected year
  expenses.forEach((expense) => {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  });
  // Calculate the total expenses for the seelected year
  const dataPointsSum = chartDataPoints.reduce((accumulator, dataPoint) => accumulator + dataPoint.value, 0);

  return <Chart dataPoints={chartDataPoints} maxValue={dataPointsSum} />;
}
