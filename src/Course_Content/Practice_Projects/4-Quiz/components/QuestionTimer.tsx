import React from 'react';

export function QuestionTimer(props: {
  //
  time: number;
  onTimeout(answer: number | null): void;
}) {
  const { time, onTimeout } = props;
  const [remainingTime, setRemainingTime] = React.useState(time);
  // const interval = React.useRef<NodeJS.Timeout>();

  // Set question Timeout
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onTimeout(null);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [time, onTimeout]);

  // Update timer bar
  React.useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress className="progress-bar" max={time} value={remainingTime} />;
}
