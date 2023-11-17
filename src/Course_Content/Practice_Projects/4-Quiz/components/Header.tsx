import React from 'react';
import './Header.css';
import logo from '../assets/images/quiz-logo.png';

/** Renders the application's header \
 * [`QuizApp`] */
export function Header() {
  return (
    <header>
      <img src={logo} alt="React Quiz" />
      <h1>React Quiz</h1>
    </header>
  );
}
