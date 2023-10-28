import React, { useState } from 'react';
import { Header } from './components/Header';
import { InvestmentForm } from './components/InvestmentForm';
import { InvestmentResult } from './components/InvestmentResult';
// STYLES
import './styles/index.css';
// TYPES
import { InvestmentInputFields } from './types/types';

/**
 * Allows the user to set investment information (yearly contribution, duration, expected returns, etc.) and calculates the investment results. \
 * The results are displayed in a table where each row corresponds to the yearly data of the investment
 */
export function InvestmentCalculatorApp() {
  const [investmentInput, setInvestmentInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 1,
  });

  const inputIsValid = investmentInput.duration > 0;

  /** Updates the `investmentInput` state when the values are changed in the `InvestmentForm` component
   * @param inputIdentifier - the target field in the `InvestmentInputs` state object
   * @param value - the value from the input `onChange` event
   */
  const handleInputChange = (inputIdentifier: InvestmentInputFields, value: number) => {
    setInvestmentInput((prevState) => ({
      ...prevState,
      [inputIdentifier]: value,
    }));
  };

  return (
    <React.StrictMode>
      <Header />
      <main>
        <section>
          <InvestmentForm investment={investmentInput} onInputChange={handleInputChange} />
        </section>
        <section>
          {inputIsValid ? (
            <InvestmentResult investment={investmentInput} />
          ) : (
            <p className="center">Please enter a duration greater than 0.</p>
          )}
        </section>
      </main>
    </React.StrictMode>
  );
}
