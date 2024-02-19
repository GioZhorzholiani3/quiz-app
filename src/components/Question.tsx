import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { useState } from "react";

import QUESTIONS from "../Questions";

type QuestionProps = {
  index: number;
  onSelectAnswer: (selectedAnswer: string) => void;
  onSkipAnswer: () => void;
};

const Question = ({ index, onSelectAnswer, onSkipAnswer }: QuestionProps) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null as boolean | null,
  });

  const handleSelectAnswer = (answer: string) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  };

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
};

export default Question;
