import React, { useRef, useState } from 'react';
import { ResultModal, ResultModalHandler } from './ResultModal';
// STYLES
import './TimerChallenge.css';

type TimerChallengeProps = {
  title: String;
  targetTime: number;
};
/** Creates a customisable challenge for the game. \
 * @prop { string } title - Challenge's title
 * @prop { number } targetTime - Challenge's target time ( in seconds )
 */
export function TimerChallenge({ title, targetTime }: TimerChallengeProps) {
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const dialog = useRef<ResultModalHandler>(null);
  const msTargetTime = targetTime * 1000;
  const [timeLeft, setTimeLeft] = useState(msTargetTime);
  const isTimerActive = timeLeft > 0 && timeLeft < msTargetTime;

  if (timeLeft <= 0) {
    clearInterval(timer.current);
    dialog.current?.open();
  }
  /** Starts challenge timer */
  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeLeft((curTime) => curTime - 10);
    }, 10);
  };

  /** Stops challenge timer */
  const handleStop = () => {
    clearInterval(timer.current);
    dialog.current?.open();
  };

  /** Resets challenge timer */
  const handleReset = () => {
    setTimeLeft(msTargetTime);
  };

  return (
    <React.StrictMode>
      <ResultModal ref={dialog} targetTime={msTargetTime} timeLeft={timeLeft} onReset={handleReset}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime >= 1 ? 's' : ''}
        </p>
        <button type="button" onClick={!isTimerActive ? handleStart : handleStop}>
          {!isTimerActive ? 'Start' : 'Stop'} Challenge
        </button>
        <p className="">{!isTimerActive ? 'Timer inactive' : 'Time is running...'}</p>
      </section>
    </React.StrictMode>
  );
}
