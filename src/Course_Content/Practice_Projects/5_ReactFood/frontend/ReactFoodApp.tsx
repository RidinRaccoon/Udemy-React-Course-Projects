import * as React from 'react';
import * as RRD from 'react-router-dom';
import * as RQ from '@tanstack/react-query';
import * as httpUtils from './utils/http';
import './styles/index.css';
// Compoents & types
import { RootLayout } from './pages/RootLayout';
import { MealsCatalog } from './components/MealsCatalog';
import { MealDetails } from './components/MealDetails';
import { CartContextProvider } from './store/CartContextProvider';

/* TODO:
  - Separate css from index file
  - Create info button on MealItem top-right corner that links to details page
*/

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
      },
      {
        path: '/catalog/:id',
        element: <MealDetails />,
      },
    ],
  },
]);

export function ReactFoodApp() {
  return (
    <CartContextProvider>
      <RQ.QueryClientProvider client={httpUtils.queryClient}>
        <RRD.RouterProvider router={router} />
      </RQ.QueryClientProvider>
    </CartContextProvider>
  );
}
