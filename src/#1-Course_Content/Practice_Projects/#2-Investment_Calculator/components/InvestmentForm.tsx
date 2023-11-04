import React from 'react';
import './InvestmentForm.css';
// TYPES
import { Investment, InvestmentInputFields } from '../types/types';


type InvestmentFormProps = {
  investment: Investment;
  onInputChange: (inputIdentifier: InvestmentInputFields, value: number) => void;
};
/**
 * Displays a form where the user can enter the investment information (Initial investment, Annual investment, Expected returns and duration)
 * @prop {Investment} investment - `investmentInput` state from parent `InvestmentCalculatorApp` component
 * @prop {function} onInputChange - `handleInputChange` function from `InvestmentCalculatorApp` component
 */
export function InvestmentForm({ onInputChange, investment }: InvestmentFormProps) {
  // Update investmentInput state in 'InvestmentCalculatorApp' component
  const handleChange = (inputIdentifier: InvestmentInputFields) => (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(inputIdentifier, Number(event.currentTarget.value));
  };

  return (
    <form id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">INITIAL INVESTMENT</label>
          <input
            type="number"
            id="initial-investment"
            onChange={handleChange('initialInvestment')}
            value={investment.initialInvestment}
          />
        </p>
        <p>
          <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
          <input
            type="number"
            id="annual-investment"
            onChange={handleChange('annualInvestment')}
            value={investment.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-returns">EXPECTED RETURNS</label>
          <input
            type="number"
            id="expected-returns"
            onChange={handleChange('expectedReturn')}
            value={investment.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">DURATION</label>
          <input type="number" id="duration" onChange={handleChange('duration')} value={investment.duration} />
        </p>
      </div>

      {/* <p className="error-message">Please enter a valid duration value ( &gt; 0)</p> */}
    </form>
  );
}
