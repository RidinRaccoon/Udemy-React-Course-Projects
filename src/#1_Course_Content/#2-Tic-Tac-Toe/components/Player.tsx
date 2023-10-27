import React, { useState } from 'react';
import './Player.css';

/* ***** COMPONENT ***** */
type PlayerProps = {
  initialName: string;
  symbol: 'X' | 'O';
  isActive: boolean;
};
/**
 * Tic-Tac-Toe player list item (\<li>)
 ** Information be edited with the 'Edit' button
 */
export function Player({ initialName, symbol, isActive }: PlayerProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  let btnText = 'Edit'; // Set default button text to 'Edit'

  // Set Player Name element
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // Show name input and 'Save' button when editing
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={(event) => setPlayerName(event.currentTarget.value)} />
    );
    btnText = 'Save';
  }

  /** Toggles the 'isEditing' state on button click */
  const onClickHandler = () => {
    setIsEditing((editing) => !editing);
  };

  return (
    <li className={isActive ? 'active' : undefined}>
      {/* Show player information */}
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{`[ ${symbol} ]`}</span>
      </span>

      {/* Show 'Edit'/'Save' button based on the 'isEditing' state */}
      <button type="button" onClick={onClickHandler}>
        {btnText}
      </button>
    </li>
  );
}
