export type InvestmentData = {
  currentSavings: number;
  yearlyContribution: number;
  expectedReturn: number;
  duration: number;
};

export type YearlyReturns = {
  year: number;
  yearlyInterest: number;
  savingsEndOfYear: number;
  yearlyContribution: number;
}[];
