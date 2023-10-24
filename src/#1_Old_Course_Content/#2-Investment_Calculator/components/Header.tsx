import React from 'react';
import classes from './Header.module.css';
import logo from '../assets/images/investment-calculator-logo.png';

type HeaderProps = {
  title: string;
};

/**
 * Renders the header for the Investment Calculator application
 * @prop {string} title - Title of the application
 */
export function Header({ title }: HeaderProps) {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
      <h1>{title}</h1>
    </header>
  );
}
