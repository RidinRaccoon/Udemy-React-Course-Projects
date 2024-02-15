import * as React from 'react';
import * as RRD from 'react-router-dom';
import './styles/index.css';
// Components
import { RootLayout } from './pages/Root';
import { ErrorPage } from './pages/Error';
import { HomePage } from './pages/Home';
import { ProductsPage } from './pages/Products';
import { ProductDetailsPage } from './pages/ProductDetail';

/* const routeDefinitions = Router.createRoutesFromElements(
  <Router.Route>
    <Router.Route path="/" element={<HomePage />} />
    <Router.Route path="/products" element={<ProductsPage />} />
  </Router.Route>,
);
const router = Router.createBrowserRouter(routeDefinitions);
 */

const router = RRD.createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/products',
        element: <ProductsPage />,
      },
      { path: '/products/:id', element: <ProductDetailsPage /> },
    ],
  },
]);

export function ReactRouterApp() {
  return <RRD.RouterProvider router={router} />;
}
