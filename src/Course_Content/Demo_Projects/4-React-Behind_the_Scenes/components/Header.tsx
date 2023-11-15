import React from 'react';
import logoImg from '../assets/images/logo.png';
import { log } from '../utils/logger';

/** */
export function Header() {
  log('<Header /> rendered', 1);

  return (
    <header>
      <img src={logoImg} alt="Magnifying glass analyzing a document" />
      <h1>React - Behind the Scenes</h1>
    </header>
  );
}
