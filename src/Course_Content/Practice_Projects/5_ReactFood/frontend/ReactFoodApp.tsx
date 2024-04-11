import * as React from 'react';
import * as RRD from 'react-router-dom';
import * as RQ from '@tanstack/react-query';
import * as httpUtils from './utils/http';
import './styles/index.css';
// Compoents & types
import { RootLayout } from './pages/RootLayout';
import { MealsCatalog } from './components/MealsCatalog';
// import { MealDetails } from './components/MealDetails';
import { CartContextProvider } from './store/CartContextProvider';
// import { ModalProvider } from './store/ModalContex';
import { Checkout } from './components/Checkout';
import { Cart } from './components/Cart/Cart';

/* TODO:
  - Separate css from index file
  x Create info button on MealItem top-right corner that shows meal description
  x Move checkout process to a separate page with it's own path
  - - - Checkout page should review the order and have it's own url
  - - - Send order data to the backend
  - Create PopUp menu to display the cart items, below the Header's Cart button

  TODO:
   * X Use ModalContext to display Cart Content
   * - Checkout should be in a separate page with url
   * - - - Improve UI by adding validations and order process logic
   * - - - - - Add cart review
   * - - - - - Add payment process (simulation)
   * - - - - - Add dummy user accounts
   * - - - - - etc.
   *


  PRIORITY
  x Fix Modal component to show cart items
  x Add route to checkout page (Discarded: Add transition to checkout component page)
  - Send order to the backend
  - Restyle components into separate CSS files
  - - - Checkout page
  - Remove unused files
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
      { path: '/catalog/cart', element: <Cart /> },
      { path: '/catalog/checkout', element: <Checkout /> },
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
