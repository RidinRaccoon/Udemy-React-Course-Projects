import React from 'react';

/** */
export function Highscores(props: {
  // prettier-ignore
  changeScreen(state: string): void
}) {
  const { changeScreen } = props;
  return (
    <section className="highscores-container">
      <ol>
        <li>Player 1: score </li>
        <li>Player 2: score </li>
        <li>Player 3: score </li>
        <li>Player 4: score </li>
      </ol>
      <button type="button" onClick={() => changeScreen('startMenu')}>
        Go back
      </button>
    </section>
  );
}
