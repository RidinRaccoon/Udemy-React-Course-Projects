import React from 'react';
import './GameBoard.css';

/* ***** COMPONENT ***** */
type GameBoardProps = {
  gameBoard: GameBoard;
  onSquareSelection: (rowIndex: number, colIndex: number) => void;
};
/**
 * Renders the Tic-Tac-Toe game board ( 3 x 3 grid )
 * @prop {function} onSquareSelection - updates the game turns using the 'squareSelectionHandler' function from parent 'TicTacToe' component
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
