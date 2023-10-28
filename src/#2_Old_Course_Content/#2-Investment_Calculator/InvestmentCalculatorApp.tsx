import React, { useState } from 'react';
import { Header } from './components/Header';
import { NewInvestmentForm } from './components/NewInvestmentForm';
import { InvestmentsTable } from './components/InvestmentsTable';

import './styles/index.css';

/**
 * [Udemy Course] React - The Complete Guide 2023 (incl. React Router & Redux) by Maximilian Schwarzmüller
 *
 *  Project 1 - Investment Calculator App
 ** Allows the user to set investment information (yearly contribution, duration, expected returns, etc.) and calculates the investment results.
 ** The results are displayed in a table where each row corresponds to the yearly data of the investment
 * @authors [ Filipe Fonseca (RidinRaccoon) ] // Some code snippets (ex.: CSS files and calculations) where provided in the course
 */
export function InvestmentCalculatorApp() {
  // Initial investment value is needed for calculations in InvestmentsTable component
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [investmentYearlyData, setInvestmentYearlyData] = useState<YearlyReturns>([]);

  /**
   * Triggered when form is submitted
   * @param userInput - Investment data obtained from the NewInvestmentForm component
   */
  const calculateHandler = (userInput: InvestmentData) => {
    setInitialInvestment(userInput.currentSavings);

    const yearlyData: YearlyReturns = []; // per-year results

    /*
     * NOTE: Investment calculations where already provided in the course files
     */
    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlyContribution;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i += 1) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution,
      });
    }

    setInvestmentYearlyData(yearlyData);
  };

  const resetHandler = () => {
    setInvestmentYearlyData([]);
  };

  return (
    <div>
      <Header title="Investment Calculator V1.0" />
      <NewInvestmentForm onCalculate={calculateHandler} onReset={resetHandler} />
      {investmentYearlyData.length === 0 && <h3 style={{ textAlign: 'center' }}>No investment calculated.</h3>}
      {investmentYearlyData.length > 0 && (
        <InvestmentsTable initialInvestment={initialInvestment} investmentData={investmentYearlyData} />
      )}
    </div>
  );
}
