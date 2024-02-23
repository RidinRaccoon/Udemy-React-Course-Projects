import * as React from 'react';
import * as RRD from 'react-router-dom';
import * as RQ from '@tanstack/react-query';
import * as httpUtils from './utils/http';
import './styles/index.css';
import { RootLayout } from './pages/RootLayout';
import { MealsCatalog } from './components/MealsCatalog';
import { MealDetails } from './components/MealDetails';

const router = RRD.createBrowserRouter([
  {
    path: '/',
    element: <RRD.Navigate to="/catalog" />,
  },
  {
    path: '/catalog',
    element: <RootLayout />,
    children: [
      {
        path: '/catalog/',
        element: <MealsCatalog />,
        children: [
          {
            path: '/catalog/:id',
            element: <MealDetails />,
          },
        ],
      },
    ],
  },
]);

/* export function ReactFoodApp() {
  return <Header />;
} */

export function ReactFoodApp() {
  return (
    <RQ.QueryClientProvider client={httpUtils.queryClient}>
      <RRD.RouterProvider router={router} />
    </RQ.QueryClientProvider>
  );
}
