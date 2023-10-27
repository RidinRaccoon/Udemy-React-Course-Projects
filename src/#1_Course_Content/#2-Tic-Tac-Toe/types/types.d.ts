/* GameBoard types */
type ValidValue = 'X' | 'O' | null;
type GameBoardRow = [ValidValue, ValidValue, ValidValue];
type GameBoard = [GameBoardRow, GameBoardRow, GameBoardRow];

/* GameTurn types */
type PlayerSymbol = 'X' | 'O';

type Square = {
  row: number;
  col: number;
};

type GameTurn = {
  square: Square;
  player: PlayerSymbol;
};

/* Players types */
type Players = {
  X: string;
  O: string;
};
