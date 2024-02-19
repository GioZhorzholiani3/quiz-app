import quizComplete from "../assets/quiz-complete.png";
import { useState, useCallback } from "react";

import QUESTIONS from "../Questions";
import Question from "./Question";

const Quiz = () => {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([] as string[]);

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    (selectedAnswer: string) => {
      setAnswerState("answered");
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });
      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null as unknown as ""),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizComplete} />
        <h2>Quiz Complete</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        onSelectAnswer={handleSelectAnswer}
        answerState={answerState}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        handleSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
