import React from 'react';
import './InvestmentResult.css';
// TYPES
import { Investment } from '../types/types';
// UTILS
import { calculateInvestmentResults, formatter } from '../utils/investment';

type InvestmentResultsProps = {
  investment: Investment;
};
/**
 *  Displays the investment results, by year, in a table
 * @prop {Investment} - the form input from `InvestmentForm` component
 */
export function InvestmentResult({ investment }: InvestmentResultsProps) {
  // Calculate investment results and initial investment value
  const resultsData = calculateInvestmentResults(investment);
  let initialInvestment = 0;
  if (resultsData.length > 0) {
    initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          // Calculate total interest and total amount invested (invested capital)
          const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
