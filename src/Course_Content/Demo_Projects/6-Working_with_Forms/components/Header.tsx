import * as React from 'react';
import logo from '../assets/images/logo.jpg';

export function Header() {
  return (
    <header>
      <img src={logo} alt="A form and a pencil" />
      <h1>React Forms</h1>
    </header>
  )
}
