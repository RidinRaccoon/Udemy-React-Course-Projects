import React from 'react';
import './GameBoard.css';
// TYPES
import { TGameBoard } from '../types/types';

/* ***** COMPONENT ***** */
type GameBoardProps = {
  gameBoard: TGameBoard;
  onSquareSelection: (rowIndex: number, colIndex: number) => void;
};
/**
 * Renders the Tic-Tac-Toe game board ( 3 x 3 grid )
 * @prop { TGameBoard } gameBoard - the current game board state
 * @prop {function} onSquareSelection - updates the `gameTurns` state using the `squareSelectionHandler` function from parent `TicTacToe` component
 */
export function GameBoard({ gameBoard, onSquareSelection }: GameBoardProps) {
  return (
    <ol id="game-board">
      {/* Render game board rows */}
      {gameBoard.map((row, rowIndex: number) => (
        <ol key={`row${rowIndex + 1}`}>
          {/* Render row columns with corresponding button for player input */}
          {row.map((value, colIndex) => (
            <li key={`row${colIndex + 1}`}>
              <button
                type="button"
                onClick={() => onSquareSelection(rowIndex, colIndex)}
                disabled={gameBoard[rowIndex][colIndex] !== null}
              >
                {value}
              </button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
}
