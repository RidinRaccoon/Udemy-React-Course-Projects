import React from 'react';
import { createRoot } from 'react-dom/client';

/* Old Course Content [ pre 23 October 2023] | [src > #2_Old_Course_Content] */
// import { ExpensesApp } from './#2_Old_Course_Content/#1_Expense_App-Demo_Project/ExpensesApp';
// import { InvestmentCalculatorApp } from './#2_Old_Course_Content/#2-Investment_Calculator/InvestmentCalculatorApp';
// import { AddUserApp } from './#2_Old_Course_Content/#3-Add_User_App/AddUserApp';

/* Current/New Course Content [23 October 2023] | [src > #1_Course_Content] */
// import { xxxApp } from './#1_Course_Content/#x-New_Course_Project/newProjectApp';
// import { xxxApp } from './#1_Course_Content/#x-New_Course_Project/newProjectApp';
// import { xxxApp } from './#1_Course_Content/#x-New_Course_Project/newProjectApp';
import { ReactEssentialsApp } from './#1_Course_Content/#1-React_Essentials-Demo_Project/ReactEssentialsApp';

const container: HTMLElement = document.getElementById('root')!;
const root = createRoot(container);

/* Render Course Content */
root.render(<ReactEssentialsApp />);

/* --------------------------*/
/* Render Old Course Content */
// root.render(<ExpensesApp />);
// root.render(<InvestmentCalculatorApp />);
// root.render(<AddUserApp />);
