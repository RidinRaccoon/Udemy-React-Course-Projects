import * as React from 'react';
import * as RRD from 'react-router-dom';
import './styles/index.css';
// Components
import * as pages from './pages/_index';

const BlogPage = React.lazy(() =>
  import('./pages/Blog').then((module) => ({ default: module.BlogPage })),
);

const PostPage = React.lazy(() =>
  import('./pages/Post').then((module) => ({ default: module.PostPage })),
);

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
        path: 'posts',
        children: [
          {
            index: true,
            element: (
              <React.Suspense fallback={<p>Loading...</p>}>
                <BlogPage />
              </React.Suspense>
            ),
            loader: () =>
              import('./pages/Blog').then((module) => module.loader()),
          },
          {
            path: ':id',
            element: (
              <React.Suspense fallback={<p>Loading...</p>}>
                <PostPage />
              </React.Suspense>
            ),
            loader: (meta) =>
              import('./pages/Post').then((module) => module.loader(meta)),
          },
        ],
      },
    ],
  },
]);

export function DeploymentBasicsApp() {
  return <RRD.RouterProvider router={router} />;
}
