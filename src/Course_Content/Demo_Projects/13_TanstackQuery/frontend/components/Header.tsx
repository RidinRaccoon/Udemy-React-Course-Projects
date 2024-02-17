/* eslint-disable react/self-closing-comp */
import * as React from 'react';

export function Header(props: React.PropsWithChildren) {
  const { children } = props;
  return (
    <>
      <div id="main-header-loading"></div>
      <header id="main-header">
        <div id="header-title">
          <h1>React Events</h1>
        </div>
        <nav>{children}</nav>
      </header>
    </>
  );
}
