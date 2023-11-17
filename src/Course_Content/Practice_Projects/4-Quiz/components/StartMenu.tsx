import React from 'react';
import './startMenu.css';
import { type AppScreens } from '../QuizApp';

/** Renders the game's start menu \
 * [`QuizApp`] */
export function StartMenu(props: {
  //
  changeScreen(state: AppScreens): void;
}) {
  const { changeScreen } = props;
  const handleClick = (state: AppScreens) => () => {
    changeScreen(state);
  };

  return (
    <nav id="start-menu">
      <button type="button" onClick={handleClick('quiz')}>
        Start Quiz
      </button>
      <button type="button" onClick={handleClick('highscores')}>
        Highscores
      </button>
    </nav>
  );
}
