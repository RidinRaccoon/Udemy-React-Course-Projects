type InvestmentData = {
  currentSavings: number;
  yearlyContribution: number;
  expectedReturn: number;
  duration: number;
};

type YearlyReturns = {
  year: number;
  yearlyInterest: number;
  savingsEndOfYear: number;
  yearlyContribution: number;
}[];
