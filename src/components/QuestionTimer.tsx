import { useState, useEffect } from "react";

type QuestionTimerProps = {
  timeout: number;
  onTimeout: () => void;
};

const QuestionTimer = ({ timeout, onTimeout }: QuestionTimerProps) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => clearTimeout(timer);
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <progress id="question-time" max={timeout} value={remainingTime}></progress>
  );
};

export default QuestionTimer;
