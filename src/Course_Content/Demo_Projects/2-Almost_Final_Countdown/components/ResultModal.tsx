import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import './ResultModal.css';

export type ResultModalHandler = {
  open: () => void;
};

type ResultModalProps = {
  targetTime: number;
  timeLeft: number;
  onReset: () => void;
};
/** Displays the challenge reuslts in a dialog window
 * @prop { number } targetTime - Challenge's target time ( in ms )
 * @prop { number } timeLeft - Remaining challenge time ( in ms )
 * @prop { function } onReset - Resets the challenge \
 * [ `resetHandler` function from `TimerChallenge` component]
 * @prop { forwardRef } ref - HTML dialog element
 */
export const ResultModal = forwardRef<ResultModalHandler, ResultModalProps>(
  ({ targetTime, timeLeft, onReset }, ref) => {
    const dialog = useRef<HTMLDialogElement>(null);
    const formattedTargetTime = targetTime / 1000;
    const formattedTimeLeft = (timeLeft / 1000).toFixed(2);
    const hasWon = timeLeft > 0;
    const score = Math.round((1 - timeLeft / targetTime) * 100);

    /* Expose dialog methods */
    const ModalHandler: ResultModalHandler = {
      open() {
        dialog.current?.showModal();
      },
    };
    useImperativeHandle(ref, () => ModalHandler);

    return (
      <dialog ref={dialog} className="result-modal" onClose={onReset}>
        {hasWon ? <h2>Score: {score}</h2> : <h2>You lost!</h2>}
        <p>
          The target time was <strong>{formattedTargetTime}</strong> seconds.
        </p>
        <p>
          You stopped the timer with <strong>{formattedTimeLeft}</strong> seconds left
        </p>
        <form method="dialog">
          <button type="submit">Close</button>
        </form>
      </dialog>
    );
  },
);
ResultModal.displayName = 'ResultModal';
