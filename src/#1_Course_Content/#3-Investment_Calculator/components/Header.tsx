import React from 'react';
import './Header.css';
// IMAGES
import Logo from '../assets/images/investment-calculator-logo.png';

/**
 * Renders the header for the Investment Calculator
 */
export function Header() {
  return (
    <header id="header">
      <img src={Logo} alt="Investment Calculator logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
