import * as React from 'react';
import * as RRD from 'react-router-dom';

// Components
import { MainNavigation } from '../components/MainNavigation';
import { PageContent } from '../components/_index';

type TRouterError =
  | { status: 404; data: string }
  | { status: 500; data: { message: string } };

export function ErrorPage() {
  const error = RRD.useRouteError() as TRouterError;
  const { status, data } = error;

  // Default values
  let title = 'An error occurred!';
  let errorMessage = 'Something went wrong.';

  // Page/Resource not found
  if (status === 404) {
    title = 'Page not found.';
    errorMessage = "Couldn't find page or resource.";
  }
  // Internal Server Error
  if (status === 500) {
    const { message } = data;
    errorMessage = message;
  }

  return (
    <React.StrictMode>
      <MainNavigation />
      <main>
        <PageContent title={title}>
          <p>{errorMessage}</p>
        </PageContent>
      </main>
    </React.StrictMode>
  );
}
