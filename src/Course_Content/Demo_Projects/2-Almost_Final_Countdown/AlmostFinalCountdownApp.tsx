import React from 'react';
import { Player } from './components/Player';
import { Header } from './components/Header';
import './styles/index.css';
import { TimerChallenge } from './components/TimerChallenge';

/** The "Almost" Final Countdown \
 *  Creates a game where the objective is to stop the timer before it reaches the target time.
 ** Score ( 0 - 100 ) is calculated based on how close the player was to the timer's target time.
 ** Different challenges can be created by adding new `TimerChallenge` components and setting the target time ( in seconds )
 */
export function AlmostFinalCountdownApp() {
  return (
    <React.StrictMode>
      <section id="content">
        <Header />
        <Player />
        <div id="challenges">
          <TimerChallenge title="Easy" targetTime={1} />
          <TimerChallenge title="Not Easy" targetTime={5} />
          <TimerChallenge title="Getting though" targetTime={10} />
          <TimerChallenge title="Pros only" targetTime={15} />
        </div>
      </section>
    </React.StrictMode>
  );
}
