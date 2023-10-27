type Position = {
  col: number;
  row: number;
};
type MatrixLine = [Position, Position, Position];

/**
 *  Maps all the grid rows, columns and diagonals for the Tic-Tac-Toe game ( 3 x 3 grid )
 *
 * Each array value contains 3 position objects forming a full grid line:
 * ```
 * Position = { row : <rowIndex> , col: <colIndex> }
 * ```
 */
export const MATRIX_LINES: MatrixLine[] = [
  // ROWS
  [
    // Row 1
    { row: 0, col: 0 },
    { row: 0, col: 1 },
    { row: 0, col: 2 },
  ],
  [
    // Row 2
    { row: 1, col: 0 },
    { row: 1, col: 1 },
    { row: 1, col: 2 },
  ],
  [
    // Row 3
    { row: 2, col: 0 },
    { row: 2, col: 1 },
    { row: 2, col: 2 },
  ],

  // COLUMNS
  [
    // Column 1
    { row: 0, col: 0 },
    { row: 1, col: 0 },
    { row: 2, col: 0 },
  ],
  [
    // Column 2
    { row: 0, col: 1 },
    { row: 1, col: 1 },
    { row: 2, col: 1 },
  ],
  [
    // Column 3
    { row: 0, col: 2 },
    { row: 1, col: 2 },
    { row: 2, col: 2 },
  ],

  // DIAGONALS
  [
    // Left diagonal
    { row: 0, col: 0 },
    { row: 1, col: 1 },
    { row: 2, col: 2 },
  ],
  [
    // Right diagonal
    { row: 0, col: 2 },
    { row: 1, col: 1 },
    { row: 2, col: 0 },
  ],
];
