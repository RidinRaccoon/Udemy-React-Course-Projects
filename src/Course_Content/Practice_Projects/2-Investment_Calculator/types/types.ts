export type InvestmentInputFields = 'initialInvestment' | 'annualInvestment' | 'expectedReturn' | 'duration';

export type Investment = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

export type AnnualReturns = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
}[];
