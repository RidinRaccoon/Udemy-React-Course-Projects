import * as React from 'react';
import * as RRD from 'react-router-dom';
import './styles/index.css';
// Pages
import { RootLayout } from './pages/Root';
import { ErrorPage } from './pages/Error';
import { HomePage } from './pages/Home';
import { EventsPage } from './pages/Events';
import { EventDetailPage } from './pages/EventDetail';
import { NewEventPage } from './pages/NewEvent';
import { EditEventPage } from './pages/EditEvent';

const router = RRD.createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/events', element: <EventsPage /> },
      { path: '/events/:id', element: <EventDetailPage /> },
      { path: '/events/new', element: <NewEventPage /> },
      { path: '/events/:id/edit', element: <EditEventPage /> },
    ],
  },
]);

export function ReactRouterAdvancedApp() {
  return <RRD.RouterProvider router={router} />;
}
