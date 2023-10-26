import React, { useState } from 'react';
import './GameBoard.css';

/** X = 1  |  O = 2  |  null = empty square */
type ValidValue = 1 | 2 | null;
type GameBoardRow = [ValidValue, ValidValue, ValidValue];
type GameBoardState = [GameBoardRow, GameBoardRow, GameBoardRow];

// Create empty board
const initialGameBoard: GameBoardState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

/**
 * Renders the Tic-Tac-Toe game board ( 3 x 3 grid ) and manages game state
 */
export function GameBoard() {
  const [gameBoardState, setGameBoardState] = useState<GameBoardState>(initialGameBoard);

  /**
   * Updates the game board state with the current player input
   * @param row - index of the selected row
   * @param col - index of the selected column
   * @param value - value associated with the current player ( X = 1 | O = 2 )
   */
  const handlePlayerInput = (row: number, col: number, value: ValidValue) => {
    // Update game board
    setGameBoardState((prevGameBoardState: GameBoardState) => {
      // Create a copy of the current board state
      const newGameBoardState: GameBoardState = [
        ...prevGameBoardState.map((innerArray: GameBoardRow) => [...innerArray]),
      ] as GameBoardState;

      newGameBoardState[row][col] = value; // Set player input in the selected square

      return newGameBoardState;
    });
  };

  return (
    <ol id="game-board">
      {/* Render game board rows */}
      {gameBoardState.map((row, rowIndex) => (
        <ol key={`row${rowIndex + 1}`}>
          {/* Render row columns with corresponding button for player input */}
          {row.map((value, colIndex) => (
            <li key={`row${colIndex + 1}`}>
              <button type="button" onClick={() => handlePlayerInput(rowIndex, colIndex, 1)}>
                {value}
              </button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
}
