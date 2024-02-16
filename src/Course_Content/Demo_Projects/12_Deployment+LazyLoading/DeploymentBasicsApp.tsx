import * as React from 'react';
import * as RRD from 'react-router-dom';
import './styles/index.css';
// Components
import * as pages from './pages/_index';

const router = RRD.createBrowserRouter([
  {
    path: '/',
    element: <pages.RootLayout />,
    children: [
      {
        index: true,
        element: <pages.Home />,
      },
      {
        path: '/posts',
        children: [
          { index: true, element: <pages.Blog />, loader: pages.postsLoader },
          { path: ':id', element: <pages.Post />, loader: pages.postLoader },
        ],
      },
    ],
  },
]);

export function DeploymentBasicsApp() {
  return <RRD.RouterProvider router={router} />;
}
