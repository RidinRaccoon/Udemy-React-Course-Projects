import React from 'react';
import { Header } from './components/Header';
import { Player } from './components/Player';
import { GameBoard } from './components/GameBoard';
import './styles/index.css';

/**
 * Renders a Tic-Tac-Toe game board
 ** Player names can be edited and the player's inputs are stored in a game log
 */
export function TicTacToeApp() {
  return (
    <React.StrictMode>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players">
            <Player initialName="Player 1" symbol="X" />
            <Player initialName="Player 2" symbol="O" />
          </ol>
          <GameBoard />
        </div>
        {/* GAME LOG */}
      </main>
    </React.StrictMode>
  );
}
