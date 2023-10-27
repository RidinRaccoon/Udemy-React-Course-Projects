import React, { useState } from 'react';
import './Player.css';

/* ***** COMPONENT ***** */
type PlayerProps = {
  initialName: string;
  symbol: 'X' | 'O';
  isActive: boolean;
  onPlayerNameChange: (playerName: string, symbol: PlayerSymbol) => void;
};
/**
 * Tic-Tac-Toe player list item (\<li>)
 ** Information be edited with the 'Edit' button
 */
export function Player({ initialName, symbol, isActive, onPlayerNameChange }: PlayerProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  /** Toggles the 'isEditing' state on button click */
  const onClickHandler = () => {
    setIsEditing((editing) => !editing);
    onPlayerNameChange(playerName, symbol);
  };

  // Set Player Name element and Edit button
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let editButton = (
    <button type="button" onClick={onClickHandler}>
      Edit
    </button>
  );

  // Show name input and 'Save' button when editing
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={(event) => setPlayerName(event.currentTarget.value)} />
    );
    editButton = (
      <button type="button" onClick={onClickHandler}>
        Save
      </button>
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      {/* Show player information */}
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{`[ ${symbol} ]`}</span>
      </span>

      {/* Show 'Edit'/'Save' button based on the 'isEditing' state */}
      {editButton}
    </li>
  );
}
