import * as React from 'react';
import * as RRD from 'react-router-dom';
import './styles/index.css';
// Components
import {
  Events,
  EventDetails,
  NewEvent,
  EditEvent,
} from './components/Events/_index';

const router = RRD.createBrowserRouter([
  {
    path: '/',
    element: <RRD.Navigate to="/events" />,
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

export function TanstackQueryApp() {
  return <RRD.RouterProvider router={router} />;
}
