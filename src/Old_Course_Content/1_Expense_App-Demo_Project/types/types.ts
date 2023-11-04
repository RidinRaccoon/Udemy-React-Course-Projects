/**
 ** Expense related types
 */

export type Expense = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};

/**
 ** Chart related types
 */

export type Point = {
  value: number;
  label: string;
};
