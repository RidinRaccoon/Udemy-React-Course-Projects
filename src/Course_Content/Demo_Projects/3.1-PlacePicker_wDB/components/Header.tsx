import * as React from 'react';
import logoImg from '../assets/images/logo.png';
import './Header.css';

/** Renders the application's header \
 * `PlacePickerApp` */
export function Header() {
  return (
    <header>
      <img src={logoImg} alt="Stylized globe" />
      <h1>PlacePicker</h1>
      <p>
        Create your personal collection of places you would like to visit or you
        have visited.
      </p>
    </header>
  );
}
