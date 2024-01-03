import * as React from 'react';
import * as Router from 'react-router-dom';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import './styles/index.css';

export function WorkingWithFormsApp() {
  const router = Router.createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/signup', element: <Signup /> },
  ]);
  return (
    <React.StrictMode>
      <Router.RouterProvider router={router} />
    </React.StrictMode>
  );
}
