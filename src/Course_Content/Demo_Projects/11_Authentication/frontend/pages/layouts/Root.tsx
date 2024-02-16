import * as React from 'react';
import * as RRD from 'react-router-dom';
// Components
import { MainNavigation } from '../../components/MainNavigation';
import * as authUtils from '../../util/auth';

export function RootLayout() {
  const token = RRD.useLoaderData() as string;
  const submit = RRD.useSubmit();

  React.useEffect(() => {
    if (!token) return;

    if (token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'POST' });
      return;
    }

    const tokenDuration = authUtils.getTokenDuration();
    setTimeout(() => {
      submit(null, { action: '/logout', method: 'POST' });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <React.StrictMode>
      <MainNavigation />
      <main>
        <RRD.Outlet />
      </main>
    </React.StrictMode>
  );
}
