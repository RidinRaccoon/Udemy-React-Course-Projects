import * as React from 'react';
import { Header, StartMenu, GameBoard, Highscores } from './components/_index';
import './styles/index.css';

export type AppScreens = 'startMenu' | 'quiz' | 'highscores';

/** Quiz
 * Renders a React quiz with starting menu and highscores
 */
export function QuizApp() {
  const [appScreen, setAppScreen] = React.useState<AppScreens>('startMenu');

  const changeScreen = (state: AppScreens) => {
    setAppScreen(state);
  };

  // prettier-ignore
  const APP_SCREENS_MAP: { [key in AppScreens]: React.JSX.Element } = {
    startMenu:  <StartMenu changeScreen={changeScreen} />,
    quiz:       <GameBoard />,
    highscores: <Highscores goBack={changeScreen} />,
  };

  return (
    <>
      <Header />
      {APP_SCREENS_MAP[appScreen]}
    </>
  );
}
