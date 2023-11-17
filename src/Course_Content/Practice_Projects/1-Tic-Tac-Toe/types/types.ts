/* GameBoard types */
type ValidValue = 'X' | 'O' | null;
type GameBoardRow = [ValidValue, ValidValue, ValidValue];
export type TGameBoard = [GameBoardRow, GameBoardRow, GameBoardRow];

/* GameTurn types */
export type PlayerSymbol = 'X' | 'O';

type Square = {
  row: number;
  col: number;
};

export type GameTurn = {
  square: Square;
  player: PlayerSymbol;
};

/* Players types */
export type Players = {
  X: string;
  O: string;
};
