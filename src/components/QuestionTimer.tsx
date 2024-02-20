import { useState, useEffect } from "react";

type QuestionTimerProps = {
  timeout: number;
  onTimeout: (() => void) | null;
  mode: string;
};

const QuestionTimer = ({ timeout, onTimeout, mode }: QuestionTimerProps) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout as () => void, timeout);
    return () => clearTimeout(timer);
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    ></progress>
  );
};

export default QuestionTimer;
