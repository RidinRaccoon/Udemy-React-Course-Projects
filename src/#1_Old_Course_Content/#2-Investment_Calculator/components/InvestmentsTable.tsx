import React from 'react';
import classes from './InvestmentsTable.module.css';

type InvestmentsTableProps = {
  investmentData: InvestmentData[];
  initialInvestment: number;
};

/**
 * Receives the investment data calculated by "calculateHandler" in App.tsx and maps the values to table rows
 * @prop {InvestmentData[]} investmentData - InvestmentData object with values calculated from form inputs
 * @prop {number} initialInvestment - InvestmentData object with values calculated from form inputs
 */
export function InvestmentsTable({ investmentData, initialInvestment }: InvestmentsTableProps) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentData.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.savingsEndOfYear)}</td>
            <td>{formatter.format(yearData.yearlyInterest)}</td>
            <td>{formatter.format(yearData.savingsEndOfYear - initialInvestment - yearData.yearlyContribution * yearData.year)}</td>
            <td>{formatter.format(initialInvestment + yearData.yearlyContribution * yearData.year)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
