/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import * as rrd from 'react-router-dom';
import * as tsq from '@tanstack/react-query';
import './styles/index.css';
// Components
import {
  Events,
  EventDetails,
  NewEvent,
  EditEvent,
} from './components/Events/_index';

const router = rrd.createBrowserRouter([
  {
    path: '/',
    element: <rrd.Navigate to="/events" />,
  },
  {
    path: '/events',
    element: <Events />,
    children: [{ path: '/events/new', element: <NewEvent /> }],
  },
  {
    path: '/events/:id',
    element: <EventDetails />,
    children: [
      {
        path: '/events/:id/edit',
        element: <EditEvent />,
      },
    ],
  },
]);

const queryClient = new tsq.QueryClient();

export function TanstackQueryApp() {
  return (
    <tsq.QueryClientProvider client={queryClient}>
      <rrd.RouterProvider router={router} />
    </tsq.QueryClientProvider>
  );
}
