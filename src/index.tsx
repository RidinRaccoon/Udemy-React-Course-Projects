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
// import { PlacePickerApp } from './Course_Content/Demo_Projects/3-PlacePicker/PlacePicker';
// import { PlacePickerDBApp } from './Course_Content/Demo_Projects/3.1-PlacePicker_wDB/PlacePickerDBApp';
// import { ReactBehindTheScenesApp } from './Course_Content/Demo_Projects/4-React-Behind_the_Scenes/ReactBehindTheScenesApp';
// import { ClassBasedComponentsApp } from './Course_Content/Demo_Projects/5-Class_Based_Components/ClassBasedComponentsApp';
// import { WorkingWithFormsApp } from './Course_Content/Demo_Projects/6-Working_with_Forms/WorkingWithFormsApp';
// import { ReduxAppWithProvider } from './Course_Content/Demo_Projects/7-Redux/ReduxAppWithProvider';
// import { AdvancedReduxAppProvider } from './Course_Content/Demo_Projects/8-Advanced_Redux/AdvancedReduxAppProvider';
// import { ReactRouterApp } from './Course_Content/Demo_Projects/9-React_Router_Basics/ReactRouterApp';
// import { ReactRouterAdvancedApp } from './Course_Content/Demo_Projects/10-React_Router_Advanced/frontend/ReactRouterAdvancedApp';
// import { AuthenticationApp } from './Course_Content/Demo_Projects/11_Authentication/frontend/AuthenticationApp';
// import { DeploymentBasicsApp } from './Course_Content/Demo_Projects/12_Deployment+LazyLoading/DeploymentBasicsApp';
import { TanstackQueryApp } from './Course_Content/Demo_Projects/13_TanstackQuery/frontend/TanstackQueryApp';

// PRACTICE PROJECTS
// import { TicTacToeApp } from './Course_Content/Practice_Projects/1-Tic-Tac-Toe/TicTacToeApp';
// import { InvestmentCalculatorApp } from './Course_Content/Practice_Projects/2-Investment_Calculator/InvestmentCalculatorApp';
// import { ProjectManagementApp } from './Course_Content/Practice_Projects/3-Project_Management/ProjectManagementApp';
// import { ProjectManagementApp } from './Course_Content/Practice_Projects/3.1-Project_Management_wContext/ProjectManagementApp';
// import { QuizApp } from './Course_Content/Practice_Projects/4-Quiz/QuizApp';

const container: HTMLElement = document.getElementById('root')!;
const root = createRoot(container);

// DEMO PROJECTS
// root.render(<ReactEssentialsApp />);
// root.render(<AlmostFinalCountdownApp />)
// root.render(<PlacePickerApp />);
// root.render(<PlacePickerDBApp />)
// root.render(<ReactBehindTheScenesApp />);
// root.render(<ClassBasedComponentsApp />);
// root.render(<WorkingWithFormsApp />);
// root.render(<ReduxAppWithProvider />);
// root.render(<AdvancedReduxAppProvider />)
// root.render(<ReactRouterApp />);
// root.render(<ReactRouterAdvancedApp />);
// root.render(<AuthenticationApp />);
// root.render(<DeploymentBasicsApp />);
root.render(<TanstackQueryApp />);

// PRACTICE PROJECTS
// root.render(<TicTacToeApp />);
// root.render(<InvestmentCalculatorApp />);
// root.render(<ProjectManagementApp />);
// root.render(<QuizApp />)

/* --------------------------*/
/* Render Old Course Content */
// root.render(<ExpensesApp />);
// root.render(<InvestmentCalculatorApp />);
// root.render(<AddUserApp />);
