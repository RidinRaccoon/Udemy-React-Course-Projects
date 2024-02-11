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
      { index: true, element: <Pages.HomePage /> },
      {
        path: '/events',
        element: <Pages.EventsLayout />,
        children: [
          {
            index: true,
            element: <Pages.EventsPage />,
            loader: Pages.eventsLoader,
          },
          {
            path: ':id',
            id: 'event-detail',
            loader: Pages.eventDetailLoader,
            children: [
              {
                index: true,
                element: <Pages.EventDetailPage />,
              },
              { path: 'edit', element: <Pages.EditEventPage /> },
            ],
          },
          {
            path: '/events/new',
            element: <Pages.NewEventPage />,
            action: Pages.newEventAction,
          },
        ],
      },
    ],
  },
]);

export function ReactRouterAdvancedApp() {
  return <RRD.RouterProvider router={router} />;
}
