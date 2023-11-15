import React from 'react';
import { createRoot } from 'react-dom/client';

/*
 * Old Course Content [ pre 23 October 2023] | [src > Old_Course_Content]
 */
// import { ExpensesApp } from './Old_Course_Content/1_Expense_App-Demo_Project/ExpensesApp';
// import { InvestmentCalculatorApp } from './Old_Course_Content/2-Investment_Calculator/InvestmentCalculatorApp';
// import { AddUserApp } from './Old_Course_Content/3-Add_User_App/AddUserApp';

/*
 * Current/New Course Content [23 October 2023] | [src > Course_Content]
 */
// DEMO PROJECTS
// import { ReactEssentialsApp } from './Course_Content/Demo_Projects/1-React_Essentials/ReactEssentialsApp';
// import { AlmostFinalCountdownApp } from './Course_Content/Demo_Projects/2-Almost_Final_Countdown/AlmostFinalCountdownApp';
import { PlacePickerApp } from './Course_Content/Demo_Projects/3-PlacePicker/PlacePicker';

// PRACTICE PROJECTS
// import { TicTacToeApp } from './Course_Content/Practice_Projects/1-Tic-Tac-Toe/TicTacToeApp';
// import { InvestmentCalculatorApp } from './Course_Content/Practice_Projects/2-Investment_Calculator/InvestmentCalculatorApp';
// import { ProjectManagementApp } from './Course_Content/Practice_Projects/3-Project_Management/ProjectManagementApp';
// import { ProjectManagementApp } from './Course_Content/Practice_Projects/3.1-Project_Management_wContext/ProjectManagementApp';




const container: HTMLElement = document.getElementById('root')!;
const root = createRoot(container);

// DEMO PROJECTS
// root.render(<ReactEssentialsApp />);
// root.render(<AlmostFinalCountdownApp />)
root.render(<PlacePickerApp />);

// PRACTICE PROJECTS
// root.render(<TicTacToeApp />);
// root.render(<InvestmentCalculatorApp />);
// root.render(<ProjectManagementApp />);




/* --------------------------*/
/* Render Old Course Content */
// root.render(<ExpensesApp />);
// root.render(<InvestmentCalculatorApp />);
// root.render(<AddUserApp />);
