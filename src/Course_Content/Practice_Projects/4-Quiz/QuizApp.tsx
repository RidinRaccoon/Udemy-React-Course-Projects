import * as React from 'react';
import { Header, StartMenu, Quiz, Highscores } from './components/_index';
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
    quiz:       <Quiz changeScreen={changeScreen}/>,
    highscores: <Highscores changeScreen={changeScreen} />,
  };

  return (
    <React.StrictMode>
      <Header />
      {APP_SCREENS_MAP[appScreen]}
    </React.StrictMode>
  );
}
