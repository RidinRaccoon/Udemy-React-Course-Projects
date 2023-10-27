import React, { useState } from 'react';
import { GameBoard } from './components/GameBoard';
import { Header } from './components/Header';
import { Log } from './components/Log';
import { Player } from './components/Player';
// STYLES
import './styles/index.css';
// DATA
import { MATRIX_LINES } from './data/matrix-lines';

// Initialize empty Tic-Tac-Toe game board (3 x 3 grid)
const gameBoard: GameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

/* ***** HELPER FUNCTIONS ***** */
/**
 * Set Current Player based on most recent turn
 ** ( X - Player 1 gets the first move )
 * @param gameTurns - List of played game turns
 * @return - corresponding player symbol ( 'X' | 'O' )
 */
function getActivePlayer(gameTurns: GameTurn[]) {
  let currentPlayer: PlayerSymbol = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

/**
 * Updates the game board based on the played turns
 * @param gameTurns - List of played turns
 */
function mapGameBoard(gameTurns: GameTurn[]) {
  if (gameTurns.length > 0) {
    gameTurns.forEach((turn) => {
      // Update game board position
      const { square, player } = turn;
      gameBoard[square.row][square.col] = player;
    });
  }
}

/**
 * Checks if there's a winning condition on the board ( 3 in line symbols )
 * @param gameBoard current game board state
 */
function checkWinningCondition(curBoard: GameBoard) {
  // Loop through all grid lines in the board (rows, columns and diagonals)
  for (let i = 0; i < MATRIX_LINES.length; i += 1) {
    // Save line values
    const boardLine = MATRIX_LINES[i].reduce((accumulator, position) => {
      const { row, col } = position;
      return accumulator + curBoard[row][col];
    }, '');
    // Check winning conditions
    if (boardLine === 'XXX' || boardLine === 'OOO') return true;
  }

  return false;
}

/* ***** COMPONENT ***** */
/**
 * Renders a playable Tic-Tac-Toe board
 ** Player names can be edited and the player's inputs are stored in a game log
 */
export function TicTacToeApp() {
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);
  // Set Current Player
  const activePlayer = getActivePlayer(gameTurns);
  // Set current game board
  mapGameBoard(gameTurns);

  // Check if winning condition has been met
  if (gameTurns.length > 4 && checkWinningCondition(gameBoard)) {
    console.log(`Winner: ${gameTurns[0].player}`);
  }
  /**
   * Updates the gameTurns state with the received player input
   * @param row - row index of the selected square
   * @param col - column index of the selected square
   */
  const squareSelectionHandler = (row: number, col: number) => {
    // Update game turns
    setGameTurns((prevTurns: GameTurn[]) => {
      const updatedTurns: GameTurn[] = [{ square: { row, col }, player: activePlayer }, ...prevTurns];
      return updatedTurns;
    });
  };

  return (
    <React.StrictMode>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player isActive={activePlayer === 'X'} initialName="Player 1" symbol="X" />
            <Player isActive={activePlayer === 'O'} initialName="Player 2" symbol="O" />
          </ol>
          <GameBoard gameBoard={gameBoard} onSquareSelection={squareSelectionHandler} />
        </div>
        <Log gameTurns={gameTurns} />
      </main>
    </React.StrictMode>
  );
}
