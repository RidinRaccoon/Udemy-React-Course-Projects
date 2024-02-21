/* eslint-disable react/self-closing-comp */
import * as React from 'react';
import * as RQ from '@tanstack/react-query';

export function Header(props: React.PropsWithChildren) {
  const { children } = props;
  const isFetching = Boolean(RQ.useIsFetching());
  return (
    <>
      <div id="main-header-loading">{isFetching && <progress />}</div>
      <header id="main-header">
        <div id="header-title">
          <h1>React Events</h1>
        </div>
        <nav>{children}</nav>
      </header>
    </>
  );
}
