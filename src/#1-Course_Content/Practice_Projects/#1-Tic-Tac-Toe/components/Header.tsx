import React from 'react';
import './Header.css';
// IMAGES
import GameLogo from '../assets/images/game-logo.png';

/* ***** COMPONENT ***** */
/**
 * Renders the header section of the page
 */
export function Header() {
  return (
    <header>
      <img src={GameLogo} alt="Hand-drawn tic-tac-toe game board" />
      <h1>Tic-Tac-Toe</h1>
    </header>
  );
}
