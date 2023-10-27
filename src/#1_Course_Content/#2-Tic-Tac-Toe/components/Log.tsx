import React from 'react';
import './Log.css';

/* ***** COMPONENT ***** */
type LogProps = {
  gameTurns: GameTurn[];
};
/**
 * Displays a log with information about each game turn
 * @prop {GameTurn[ ]} gameTurns - list of turns
 */
export function Log({ gameTurns }: LogProps) {
  return (
    <ol id="log">
      {gameTurns.map((turn, i) => (
        <li key={`${turn.square.row}${turn.square.col}`} className={i === 0 ? 'highlighted' : undefined}>
          {turn.player} selected square: {turn.square.row + 1} {turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
}
