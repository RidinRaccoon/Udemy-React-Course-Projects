import React, { useRef, useState } from 'react';
import './Player.css';

/** Displays a customisable player name */
export function Player() {
  const [playerName, setPlayerName] = useState('');
  const playerNameInput = useRef<HTMLInputElement>(null);

  /** Updates the player name when *Set Name* button is clicked */
  const setPlayerNameHandler = () => {
    if (playerNameInput.current && playerNameInput.current.value.trim() !== '') {
      setPlayerName(playerNameInput.current.value);
      playerNameInput.current.value = '';
    }
  };

  return (
    <section id="player">
      <h2>Welcome {playerName || 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerNameInput} />
        <button type="button" onClick={setPlayerNameHandler}>
          Set Name
        </button>
      </p>
    </section>
  );
}
