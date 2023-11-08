import React from 'react';
import './Header.css';

/** Renders the application *title* and *subtitle* */
export function Header() {
  return (
    <header>
      <h1>
        The <em>Almost</em> Final Countdown
      </h1>
      <h2>Stop the timer once you estimate that time is (almost) up</h2>
    </header>
  );
}
