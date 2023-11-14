import React from 'react';

/** */
export function Highscores(props: {
  // prettier-ignore
  goBack(state: string): void
}) {
  const { goBack } = props;
  return (
    <section className="highscores-container">
      <ol>
        <li>Player 1: score </li>
        <li>Player 2: score </li>
        <li>Player 3: score </li>
        <li>Player 4: score </li>
      </ol>
      <button type="button" onClick={() => goBack('startMenu')}>
        Go back
      </button>
    </section>
  );
}
