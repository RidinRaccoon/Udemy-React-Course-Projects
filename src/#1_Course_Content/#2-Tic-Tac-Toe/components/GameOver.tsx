import React from 'react';
import './GameOver.css';

type GameOverProps = {
  winner: string | null;
  onRematch: () => void;
};
/**
 * Displays a Game Over screen when the game finishes
 */
export function GameOver({ winner, onRematch }: GameOverProps) {
  // Set game over text
  let gameOverText = <p>It&apos;s a draw!</p>;
  if (winner) {
    gameOverText = <p>{winner} won!</p>;
  }

  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {gameOverText}
      <p>
        <button type="button" onClick={onRematch}>
          Rematch?
        </button>
      </p>
    </div>
  );
}
