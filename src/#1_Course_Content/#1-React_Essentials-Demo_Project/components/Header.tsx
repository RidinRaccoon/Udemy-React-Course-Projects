import React from 'react';
import logo from '../assets/images/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function generateRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

/**
 * This component renders the header section of the application which contains the logo and main title
 */
export function Header() {
  // Get 'random' starting word for description
  const descriptionStart = reactDescriptions[generateRandomInt(3)];
  return (
    <header>
      <img src={logo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>{descriptionStart} React concepts you will need for almost any app you are going to build!</p>
    </header>
  );
}
