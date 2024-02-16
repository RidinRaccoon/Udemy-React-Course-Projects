import * as React from 'react';
import * as RRD from 'react-router-dom';
import * as authUtils from './util/auth';
import './styles/index.css';
// Components
import * as Pages from './pages/_index';
import { manipulateEventAction } from './components/_index';

const router = RRD.createBrowserRouter([
  {
    path: '/',
    element: <Pages.RootLayout />,
    errorElement: <Pages.ErrorPage />,
    id: 'root',
    loader: authUtils.tokenLoader,
    children: [
      { index: true, element: <Pages.HomePage /> },
      {
        path: '/auth',
        element: <Pages.AuthenticationPage />,
        action: Pages.authAction,
      },
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
                action: Pages.deleteEventAction,
              },
              {
                path: 'edit',
                element: <Pages.EditEventPage />,
                loader: authUtils.checkAuthLoader,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <Pages.NewEventPage />,
            loader: authUtils.checkAuthLoader,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <Pages.NewsletterPage />,
        action: Pages.newsletterAction,
      },
      { path: 'logout', action: Pages.logoutAction },
    ],
  },
]);

export function AuthenticationApp() {
  return <RRD.RouterProvider router={router} />;
}
