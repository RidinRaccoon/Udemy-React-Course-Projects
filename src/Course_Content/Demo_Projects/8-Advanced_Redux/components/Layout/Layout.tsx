import * as React from 'react';
import { MainHeader } from './MainHeader';

export function Layout(props: React.PropsWithChildren) {
  const { children } = props;

  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}
