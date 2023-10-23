import React from 'react';
import { createRoot } from 'react-dom/client';
// import { ExpensesApp } from './#1_Expense_App-Demo_Project/ExpensesApp';
// import { InvestmentCalculatorApp } from './#2-Investment_Calculator/InvestmentCalculatorApp';
import { AddUserApp } from './#3-Add_User_App/AddUserApp';

const container: HTMLElement = document.getElementById('root')!;
const root = createRoot(container);
// root.render(<ExpensesApp />);
// root.render(<InvestmentCalculatorApp />);
root.render(<AddUserApp />);
