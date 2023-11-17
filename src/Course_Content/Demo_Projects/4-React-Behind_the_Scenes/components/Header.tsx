import React from 'react';
import logoImg from '../assets/images/logo.png';
import { log } from '../utils/logger';

/** `<ReactBehindTheScenesApp />` header */
export const Header = React.memo(() => {
  log('<Header /> rendered', 1);

  return (
    <header id="main-header">
      <img src={logoImg} alt="Magnifying glass analyzing a document" />
      <h1>React - Behind the Scenes</h1>
    </header>
  );
});
Header.displayName = 'Header';

