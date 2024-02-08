import * as React from 'react';
import * as RRD from 'react-router-dom';
// Components
import { HomePage } from './pages/Home';
import { ProductsPage } from './pages/Products';

/* const routeDefinitions = Router.createRoutesFromElements(
  <Router.Route>
    <Router.Route path="/" element={<HomePage />} />
    <Router.Route path="/products" element={<ProductsPage />} />
  </Router.Route>,
);
const router = Router.createBrowserRouter(routeDefinitions);
 */

const router = RRD.createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/products', element: <ProductsPage /> },
]);

export function ReactRouterApp() {
  return <RRD.RouterProvider router={router} />;
}
