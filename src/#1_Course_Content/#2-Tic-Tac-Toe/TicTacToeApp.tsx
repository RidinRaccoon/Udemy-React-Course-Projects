import React, { useState } from 'react';
import { GameBoard } from './components/GameBoard';
import { GameOver } from './components/GameOver';
import { Header } from './components/Header';
import { Log } from './components/Log';
import { Player } from './components/Player';
// STYLES
import './styles/index.css';
// DATA
import { MATRIX_LINES } from './data/matrix-lines';

// Initialize Players and empty Tic-Tac-Toe game board (3 x 3 grid)
const PLAYERS: Players = {
  X: 'Player 1',
  O: 'Player 2',
};
const INITIAL_GAME_BOARD: GameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

/* ***** HELPER FUNCTIONS ***** */
/**
 * Set Current Player based on most recent turn
 ** ( X - Player 1 gets the first move )
 * @param gameTurns - List of played game turns
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
  const gameBoard: GameBoard = [...INITIAL_GAME_BOARD.map((innerRow) => [...innerRow])] as GameBoard;
  gameTurns.forEach((turn) => {
    // Update game board position
    const { square, player } = turn;
    gameBoard[square.row][square.col] = player;
  });

  return gameBoard;
}

/**
 * Checks if there's a winning condition on the board ( 3 in line symbols )
 * @param gameBoard current game board state
 * @param playerNames current player names
 */
function checkWinner(gameBoard: GameBoard, playerNames: Players) {
  // Loop through all grid lines in the board (rows, columns and diagonals)
  for (let i = 0; i < MATRIX_LINES.length; i += 1) {
    // Save line values
    const boardLine = MATRIX_LINES[i].reduce((accumulator, position) => {
      const { row, col } = position;
      return accumulator + gameBoard[row][col];
    }, '');
    // Compare line to winning conditions
    if (boardLine === 'XXX' || boardLine === 'OOO') {
      const winnerSymbol = boardLine.charAt(0) as PlayerSymbol;
      return playerNames[winnerSymbol];
    }
  }

  return null;
}

/* ***** COMPONENT ***** */
/**
 * Renders a playable Tic-Tac-Toe board
 ** Player names can be edited and the player's inputs are stored in a game log
 */
export function TicTacToeApp() {
  const [playerNames, setPlayerNames] = useState<Players>(PLAYERS);
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);

  // Set Current Player
  const activePlayer = getActivePlayer(gameTurns);
  // Set current game board
  const gameBoard: GameBoard = mapGameBoard(gameTurns);

  // Check if winning condition has been met or it's a draw
  const winner = checkWinner(gameBoard, playerNames);
  const draw = gameTurns.length === 9 && !winner;

  /**
   * Updates the 'playerNames' state with the submitted player name
   * @param playerName - submitted player name
   */
  const onPlayerNameChangeHandler = (playerName: string, symbol: PlayerSymbol) => {
    setPlayerNames((prevNames) => ({ ...prevNames, [symbol]: playerName }));
  };

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

  /**
   * Resets the 'gameTurns' state to restart the game
   */
  const onRematchHandler = () => {
    setGameTurns([]);
  };

  return (
    <React.StrictMode>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              isActive={activePlayer === 'X'}
              initialName={PLAYERS.X}
              symbol="X"
              onPlayerNameChange={onPlayerNameChangeHandler}
            />
            <Player
              isActive={activePlayer === 'O'}
              initialName={PLAYERS.O}
              symbol="O"
              onPlayerNameChange={onPlayerNameChangeHandler}
            />
          </ol>
          {(winner || draw) && <GameOver winner={winner} onRematch={onRematchHandler} />}
          <GameBoard gameBoard={gameBoard} onSquareSelection={squareSelectionHandler} />
        </div>
        <Log gameTurns={gameTurns} />
      </main>
    </React.StrictMode>
  );
}
