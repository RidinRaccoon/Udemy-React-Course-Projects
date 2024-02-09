import * as React from 'react';
import * as RRD from 'react-router-dom';
import './styles/index.css';
// Components
import * as Pages from './pages/_index';

const router = RRD.createBrowserRouter([
  {
    path: '/',
    element: <Pages.RootLayout />,
    errorElement: <Pages.ErrorPage />,
    children: [
      { path: '/', element: <Pages.HomePage /> },
      {
        path: '/events',
        element: <Pages.EventsLayout />,
        children: [
          { path: '/events/', element: <Pages.EventsPage /> },
          { path: '/events/:id', element: <Pages.EventDetailPage /> },
          { path: '/events/new', element: <Pages.NewEventPage /> },
          { path: '/events/:id/edit', element: <Pages.EditEventPage /> },
        ],
      },
    ],
  },
]);

export function ReactRouterAdvancedApp() {
  return <RRD.RouterProvider router={router} />;
}
